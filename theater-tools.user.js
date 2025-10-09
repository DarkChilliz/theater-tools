// ==UserScript==
// @name            theater-tools.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/theater-tools
// @match           *://twitchtheater.tv/*
// @match           *://darkchilliz.github.io/*
// @match           *://player.twitch.tv/*
// @match           *://player.kick.com/*
// @run-at          document-idle
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @version         2.15.5
// @updateURL
// @downloadURL     https://github.com/DarkChilliz/theater-tools/raw/main/theater-tools.user.js
// @author          https://github.com/DarkChilliz
// @description     30/09/2022, 3:29:15 am
// @icon            https://github.com/DarkChilliz/theater-tools/raw/main/img/favicon-192.png
// @resource run    https://github.com/DarkChilliz/theater-tools/raw/main/img/playerstyle.png
// @resource menu   https://github.com/DarkChilliz/theater-tools/raw/main/img/functionsmenu.png
// @resource html   https://github.com/DarkChilliz/theater-tools/raw/main/html/content.html
// @resource css    https://github.com/DarkChilliz/theater-tools/raw/main/css/main.css
// @resource main   https://github.com/DarkChilliz/theater-tools/raw/main/js/main.js
// ==/UserScript==

"use strict";

function twitchtheater() {
    const createMenu = (html) => {
        const theaterMenuDiv = document.createElement("div");
        theaterMenuDiv.id = "theaterMenuDiv";
        document.body.insertBefore(theaterMenuDiv, document.getElementById("menudiv"));
        document.getElementById("theaterMenuDiv").outerHTML = html;
    };

    const createStyle = (css) => {
        //https://stackoverflow.com/a/524721
        const head = document.head || document.getElementsByTagName("head")[0];
        const style = document.createElement("style");

        head.appendChild(style);
        style.appendChild(document.createTextNode(css));
    };

    const onReceiveImgURL = (theaterRunBtn, theaterMenuBtn) => {
        document.getElementById("theaterRunBtn").src = theaterRunBtn;
        document.getElementById("theaterMenuBtn").src = theaterMenuBtn;

        const event = new CustomEvent("onScriptLoad");
        document.dispatchEvent(event);
    };

    createMenu(GM_getResourceText("html"));
    createStyle(GM_getResourceText("css"));

    const theaterRunURL = GM_getResourceURL("run");
    const theaterMenuURL = GM_getResourceURL("menu");
    const scriptURL = GM_getResourceURL("main");

    //https://stackoverflow.com/a/9517879
    const script = document.createElement("script");
    script.id = "theater-tools";
    script.type = "text/javascript";
    script.src = scriptURL;
    script.onload = function() {
        onReceiveImgURL(theaterRunURL, theaterMenuURL);
        // this.remove();
    };
    document.head.appendChild(script);
}

function twitchPlayer() {
    window.onmessage = function(e) {
        if (e.data.command === "pause") {
            const video = document.querySelector('video');
            if (video) {
                video.pause();
            }
        }

        else if (e.data.command === "play") {
            const video = document.querySelector('video');
            if (video) {
                video.play();
            }
        }

        else if (e.data.command === "button.pause.click") {
            const button = document.querySelector('button[aria-label="Pause (space/k)"]');
            if (button) {
                button.click();
            }
        }

        else if (e.data.command === "button.play.click") {
            const button = document.querySelector('button[aria-label="Play (space/k)"]');
            if (button) {
                button.click();
            }
        }
    };
}

function kickPlayer() {
    window.onmessage = function(e) {
        if (e.data.command === "mute") {
            const video = document.querySelector('video');
            if (video) {
                video.muted = true;
            }
        }

        else if (e.data.command === "unmute") {
            const video = document.querySelector('video');
            if (video) {
                video.muted = false;
                setTimeout(() => {
                    video.volume = 1;
                }, 20);
            }
        }
    };
}

(function() {
    switch (location.hostname) {
        case "twitchtheater.tv":
        case "darkchilliz.github.io":
            twitchtheater();
            break;
        case "player.twitch.tv":
            twitchPlayer();
            break;
        case "player.kick.com":
            kickPlayer();
            break;
    }
})();
