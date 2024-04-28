// ==UserScript==
// @name            dev-twitchtv-autoreload.user.js
// @namespace       http://192.168.1.200:8020/
// @homepage        http://192.168.1.200:8020/twitchtheatertv-tools
// @match           *://*.twitch.tv/*
// @run-at          document-idle
// @grant           none
// @version         0.1.0.0003
// @updateURL
// @downloadURL     http://192.168.1.200:8020/twitchtheatertv-tools/dev-twitchtv-autoreload.user.js
// @author          https://greasyfork.org/en/scripts/472868-twitch-auto-reload-when-k-error/code
// @description     Auto reload when *k error
// @icon            https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        var button = document.querySelector(".player-overlay-background button");
        if (button) {
            button.click();
        }
    }, 3500); //Default: 1000
    // Your code here...
})();
