// ==UserScript==
// @name            ttv-playerlowlatency.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/twitchtheatertv-tools
// @match           *://*.twitch.tv/*
// @run-at          document-idle
// @grant           none
// @version         3.0.0
// @updateURL
// @downloadURL     https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/ttv-playerlowlatency.user.js
// @description     29/04/2021, 1:54:21 am
// @icon
// ==/UserScript==

'use strict';

const SPEEDUP_THRESHOLD = 3.0;     // seconds of latency before we try to speed up
const SPEEDUP_RATE = 2.0;          // how fast to playback when speeding up
const KEEP_BUFFER = 1.5;           // desired buffer size after correction
const SHOW_LATENCY_OVERLAY = true; // Set to false to disable overlay popup

let speedupTimer = null;
let checkInterval = null;
let currentUrl = location.href;
let observer = null; // Observes for video elements
let urlObserver = null; // Observes SPA navigation
let overlayInterval = null;

let loc, params, channelNameEmbed, channelNameTwitch, channelName;

function updateUrlInfo() {
    loc = window.location;
    params = new URLSearchParams(loc.search);
    channelNameEmbed = params.get("channel");
    channelNameTwitch = loc.pathname.split("/")[1] || "";
    channelName = (channelNameEmbed || channelNameTwitch);
}

function debugLog(module, func, log) {
    console.log("%c" + (module || "TTV-LowLatency") + " [%c" + func + "%c]: %c" + log,
    "color:#ebe66c; font-weight:bold",
    "color:#999999",
    "color:#ebe66c; font-weight:bold",
    "color:#999999");
}

function isLiveStreamPage(url) {
    const parsed = new URL(url);

    // Exclude /videos/12345
    if (/^\/videos\/\d+\/?$/.test(parsed.pathname)) {
        return false;
    }

    // Exclude embedded chat windows
    if (/^\/embed\/[^\/]+\/chat\/?$/.test(parsed.pathname)) {
        return false;
    }

    // Include embedded player (https://player.twitch.tv/?channel=...)
    if (parsed.hostname === 'player.twitch.tv' && parsed.searchParams.has('channel')) {
        return true;
    }

    // Include main Twitch pages like /username, /username/schedule, etc.
    return /^\/[^\/]+(?:\/[^\/]*)?\/?$/.test(parsed.pathname);
}

function clearExistingMonitoring() {
    if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
    }
    if (speedupTimer) {
        clearTimeout(speedupTimer);
        speedupTimer = null;
    }
    if (observer) {
        observer.disconnect();
        observer = null;
    }
}

function createLatencyOverlay(video) {
    let overlay = document.getElementById('ttv-latency-indicator');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'ttv-latency-indicator';

    Object.assign(overlay.style, {
        background: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        padding: '6px 10px',
        fontSize: '13px',
        fontFamily: 'monospace',
        zIndex: '10000',
        borderRadius: '4px',
        display: 'none',
        pointerEvents: 'none',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        whiteSpace: 'normal',
        maxWidth: '100%',
        wordBreak: 'break-word',
    });

    const isEmbedded = location.hostname === 'player.twitch.tv';

    if (isEmbedded) {
        // Fixed position relative to viewport for embed
        Object.assign(overlay.style, {
            position: 'fixed',
            top: '10px',
            right: '10px',
        });
        document.body.appendChild(overlay);
    } else {
        // Main site: attach to video player container
        const container = video.closest('.video-player') || video.parentElement;
        if (!container) {
            console.warn('[TTV-LowLatency] Could not find suitable container for overlay');
            return null;
        }

        const style = window.getComputedStyle(container);
        if (style.position === 'static') {
            container.style.position = 'relative';
        }

        Object.assign(overlay.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
        });

        container.appendChild(overlay);
    }

    return overlay;
}

function showLatencyOverlay(video) {
    if (!SHOW_LATENCY_OVERLAY) return;

    const overlay = createLatencyOverlay(video);
    if (!overlay) return;

    if (overlayInterval) clearInterval(overlayInterval);

    overlay.style.display = 'block';
    overlay.style.opacity = '1';

    const update = () => {
        try {
            const buffered = video.buffered;
            const current = video.currentTime;
            if (buffered.length === 0) return;

            const end = buffered.end(buffered.length - 1);
            const latency = end - current;

            overlay.textContent = `Reducing latency: ${latency.toFixed(2)}s → ${video.playbackRate.toFixed(1)}x`;
        } catch (e) {
            console.warn('Latency overlay update failed:', e);
        }
    };

    update(); // Initial render
    overlayInterval = setInterval(update, 1000);
}

function hideLatencyOverlay() {
    const overlay = document.getElementById('ttv-latency-indicator');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
    if (overlayInterval) {
        clearInterval(overlayInterval);
        overlayInterval = null;
    }
}

function monitorVideo(video) {
    if (!video) return;

    let speedupActive = false;

    const maintainPlaybackRate = () => {
        if (speedupActive && video.playbackRate !== SPEEDUP_RATE) {
            video.playbackRate = SPEEDUP_RATE;
        }
    };

    const resetSpeedup = () => {
        speedupActive = false;
        video.playbackRate = 1.0;
        video.removeEventListener('ratechange', maintainPlaybackRate);
        hideLatencyOverlay();
        speedupTimer = null;
    };

    const checkLatency = () => {
        if (video.readyState < 2) return;

        try {
            const current = video.currentTime;
            const buffered = video.buffered;
            if (buffered.length === 0) return;

            const end = buffered.end(buffered.length - 1);
            const latency = end - current;

            if (!speedupActive && latency > SPEEDUP_THRESHOLD) {
                debugLog(0, loc.origin + "/" + channelName, "High latency detected: " + latency.toFixed(2) + "s → Speeding up.");
                showLatencyOverlay(video);
                speedupActive = true;
                video.playbackRate = SPEEDUP_RATE;
                video.addEventListener('ratechange', maintainPlaybackRate);

                const correctionTime = (latency - KEEP_BUFFER) * 1000;
                speedupTimer = setTimeout(() => {
                    debugLog(0, loc.origin + "/" + channelName, "Correction done. Restoring normal speed.");
                    resetSpeedup();
                }, correctionTime);
            }
        } catch (e) {
            console.warn('Latency check failed:', e);
        }
    };

    checkInterval = setInterval(checkLatency, 3000);
}

function setupForLiveStream() {
    clearExistingMonitoring();

    if (!isLiveStreamPage(location.href)) {
        debugLog(0, loc.origin + loc.pathname, "Not a livestream or embedded player. Skipping monitoring.");
        return;
    }

    const waitForVideo = () => {
        const video = document.querySelector('video');
        if (!video) return;

        if (observer) {
            observer.disconnect();
            observer = null;
        }

        const waitForLiveVideo = () => {
            if (video.readyState === 4) {
                if (video.duration === 9223372036854.775) {
                    debugLog(0, loc.origin + "/" + channelName, "Live video ready. Starting latency monitor.");
                    monitorVideo(video);
                } else {
                    debugLog(0, loc.origin + "/" + channelName, "Video is not a livestream. Skipping.");
                }
            } else {
                video.addEventListener('canplaythrough', waitForLiveVideo, { once: true });
            }
        };

        waitForLiveVideo();
    };

    observer = new MutationObserver(waitForVideo);
    observer.observe(document.body, { childList: true, subtree: true });
    waitForVideo();
}

function watchUrlChanges() {
    urlObserver = new MutationObserver(() => {
        if (location.href !== currentUrl) {
            debugLog(0, currentUrl, "URL changed: " + location.href);

            currentUrl = location.href;

            // Update URL info
            updateUrlInfo();

            // Clear all old observers and timers
            clearExistingMonitoring();

            // Re-run setup
            setupForLiveStream();
        }
    });

    urlObserver.observe(document.body, { childList: true, subtree: true });
}

(function () {
    updateUrlInfo();
    setupForLiveStream();
    watchUrlChanges();
})();
