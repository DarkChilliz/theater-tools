// ==UserScript==
// @name            twitch-catchup-override.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/twitchtheatertv-tools
// @match           *://*.twitch.tv/*
// @run-at          document-start
// @grant           none
// @version         1.0.0
// @downloadURL     https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/twitch-catchup-override.user.js
// @description     11/08/2025, 3:59:47 am
// ==/UserScript==

(() => {
  "use strict";

  // --- Tunables ---
  const TARGET_RATE = 1.35;       // force this whenever Twitch bumps speed to "reduce delay"
  const BUMP_MIN = 1.01;          // heuristics for Twitch's bump window
  const BUMP_MAX = 1.10;          // widen if Twitch changes behavior
  const GUARD_MS = 3000;          // hold 1.35x for this long after we detect a bump
  const GUARD_TICK_MS = 250;      // how often to re-assert during guard
  const DEBUG = false;

  const log = (...a) => DEBUG && console.log("[catchup→1.35]", ...a);

  // Per-video state
  const state = new WeakMap(); // video -> { internalWrite:boolean, guardUntil:number, ticker:number }

  const isBump = (r) => r > BUMP_MIN && r < BUMP_MAX;

  function startGuard(v) {
    let s = state.get(v);
    if (!s) {
      s = { internalWrite:false, guardUntil:0, ticker:0 };
      state.set(v, s);
    }
    s.guardUntil = Date.now() + GUARD_MS;

    if (!s.ticker) {
      s.ticker = setInterval(() => {
        const now = Date.now();
        if (now >= s.guardUntil) {
          clearInterval(s.ticker);
          s.ticker = 0;
          return;
        }
        // Keep it at target during guard
        if (Math.abs(v.playbackRate - TARGET_RATE) > 0.001) {
          s.internalWrite = true;
          try { v.playbackRate = TARGET_RATE; } catch {}
          s.internalWrite = false;
        }
      }, GUARD_TICK_MS);
    }
  }

  // Patch prototype setter early
  (function patchPrototype() {
    const proto = HTMLMediaElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, "playbackRate");
    if (!desc || !desc.set || !desc.get) {
      log("No HTMLMediaElement.prototype.playbackRate descriptor.");
      return;
    }

    const origGet = desc.get;
    const origSet = desc.set;

    Object.defineProperty(proto, "playbackRate", {
      configurable: true,
      enumerable: desc.enumerable,
      get: function() { return origGet.call(this); },
      set: function(rate) {
        // Per-element state
        let s = state.get(this);
        if (!s) {
          s = { internalWrite:false, guardUntil:0, ticker:0 };
          state.set(this, s);
        }

        // If we’re the ones writing, pass-through
        if (s.internalWrite) {
          return origSet.call(this, rate);
        }

        // Detect Twitch's gentle bump and replace with 1.35x
        if (isBump(rate)) {
          log("Setter bump", rate, "→", TARGET_RATE);
          s.internalWrite = true;
          try { origSet.call(this, TARGET_RATE); }
          finally { s.internalWrite = false; }
          startGuard(this);
          return;
        }

        // Normal behavior: allow user / site sets
        return origSet.call(this, rate);
      }
    });

    log("Prototype patched.");
  })();

  // Fallback: enforce on ratechange too (covers cached-setter calls)
  function attachRatechange(video) {
    if (!video || state.has(video) && state.get(video).hasListener) return;

    const s = state.get(video) || { internalWrite:false, guardUntil:0, ticker:0 };
    s.hasListener = true;
    state.set(video, s);

    video.addEventListener("ratechange", () => {
      if (s.internalWrite) return;
      const r = video.playbackRate;
      if (isBump(r)) {
        log("ratechange bump", r, "→", TARGET_RATE);
        s.internalWrite = true;
        try { video.playbackRate = TARGET_RATE; }
        finally { s.internalWrite = false; }
        startGuard(video);
      }
    }, { passive: true });

    log("Attached ratechange", video);
  }

  // Track current + future videos
  function scan() {
    document.querySelectorAll("video").forEach(attachRatechange);
  }

  // Observe DOM for player swaps
  const mo = new MutationObserver(scan);
  mo.observe(document.documentElement, { childList: true, subtree: true });
  // First pass (document-start may run before <video> exists; observer will catch it later too)
  scan();

  // Debug helpers
  // window.__catchup135_debug = () => (DEBUG = true);

})();
