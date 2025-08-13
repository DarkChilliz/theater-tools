// ==UserScript==
// @name            dev-theater-tools.user.js
// @namespace       http://localhost:8020/
// @homepage        http://localhost:8020/theater-tools
// @match           *://twitchtheater.tv/*
// @match           *://darkchilliz.github.io/*
// @match           *://player.twitch.tv/*
// @match           *://player.kick.com/*
// @run-at          document-idle
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @version         2.15.0.0000
// @updateURL
// @downloadURL     http://localhost:8020/theater-tools/dev-theater-tools.user.js
// @author          http://localhost:8020/
// @description     30/09/2022, 3:29:15 am
// @icon            http://localhost:8020/theater-tools/img/favicon-192.png
// @resource run    http://localhost:8020/theater-tools/img/playerstyle.png
// @resource menu   http://localhost:8020/theater-tools/img/functionsmenu.png
// @resource html   http://localhost:8020/theater-tools/html/content.html
// @resource css    http://localhost:8020/theater-tools/css/main.css
// @resource main   http://localhost:8020/theater-tools/js/main.js
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

function kickPlayer() {
    window.onmessage = function(e) {
        if (e.data == "mute") {
            const video = document.querySelector('video');
            if (video) {
                video.muted = true;
            }
        }
        if (e.data == "unmute") {
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

switch (location.hostname) {
    case "twitchtheater.tv":
    case "darkchilliz.github.io":
        twitchtheater();
        break;
    case "player.twitch.tv":
        // Twitch code
        break;
    case "player.kick.com":
        kickPlayer();
        break;
}
