// ==UserScript==
// @name            dev-ttv-autoreload.user.js
// @namespace       http://localhost:8020/
// @homepage        http://localhost:8020/theater-tools
// @match           *://*.twitch.tv/*
// @run-at          document-idle
// @grant           none
// @version         1.0.7.0000
// @updateURL
// @downloadURL     http://localhost:8020/theater-tools/dev-ttv-autoreload.user.js
// @author          https://greasyfork.org/en/scripts/472868-twitch-auto-reload-when-k-error/code
// @description     Auto reload when *k error
// @icon
// ==/UserScript==

"use strict";

function styledConsoleLog(module, func, log) {
    console.log("%c" + (module || "TTVAutoReload") + " [%c" + func + "%c]: %c" + log, "color:#755000; font-weight:bold", "color:#999999", "color:#755000; font-weight:bold", "color:#999999");
}

(function() {
    const id = document.querySelector("#live-page-chat");
    const loc = window.location; //https://developer.mozilla.org/en-US/docs/Web/API/Location#examples
    const params = new URLSearchParams(loc.search); //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get#examples
    const channelNameEmbed = params.get("channel"); //https://dev.twitch.tv/docs/embed/video-and-clips/#interactive-frames-for-live-streams-and-vods
    const channelNameTwitch = (loc.pathname).replace("/","");
    const isEmbed = (loc.hostname == "player.twitch.tv");
    const channelName = (channelNameEmbed || channelNameTwitch);

    // styledConsoleLog(0, loc.origin + loc.pathname, "Checking for [player.twitch.tv/?channel=]: " + isEmbed + (channelNameEmbed ? " (" + channelNameEmbed + ")" : ""));
    // styledConsoleLog(0, loc.origin + loc.pathname, "Checking for [#live-page-chat]: " + (id ? "true" : "false"));

    if (id || isEmbed && channelNameEmbed) {
        styledConsoleLog(0, loc.origin + loc.pathname, "Initialising... " + channelName);
        setInterval(() => {
            var button = document.querySelector(".player-overlay-background button:not(.gJvhRf)"); //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
            if (button) {
                button.click();
                styledConsoleLog(0, loc.origin + loc.pathname, "Reloading... " + channelName);
            }
        }, 3500); //default: 1000
    } else {
        styledConsoleLog(0, loc.origin + loc.pathname, "Skipping...");
    }
})();
