// ==UserScript==
// @name            theater-tools.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/theater-tools
// @match           *://*.twitchtheater.tv/*
// @match           *://*.darkchilliz.github.io/*
// @run-at          document-idle
// @grant           none
// @version         2.2.3
// @updateURL
// @downloadURL     https://github.com/DarkChilliz/theater-tools/raw/main/theater-tools.user.js
// @author          https://github.com/DarkChilliz
// @description     30/09/2022, 3:29:15 am
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @icon            https://github.com/DarkChilliz/theater-tools/raw/main/img/favicon-192.png
// @resource run    https://github.com/DarkChilliz/theater-tools/raw/main/img/playerstyle.png
// @resource menu   https://github.com/DarkChilliz/theater-tools/raw/main/img/functionsmenu.png
// @resource html   https://github.com/DarkChilliz/theater-tools/raw/main/html/content.html
// @resource css    https://github.com/DarkChilliz/theater-tools/raw/main/css/main.css
// @resource main   https://github.com/DarkChilliz/theater-tools/raw/main/js/main.js
// ==/UserScript==

"use strict";

function createMenu(html) {
    var theaterMenuDiv = document.createElement("div");

    theaterMenuDiv.id = "theaterMenuDiv";
    document.body.insertBefore(theaterMenuDiv, document.getElementById("menudiv"));
    document.getElementById("theaterMenuDiv").outerHTML = html;
}

function createStyle(css) {
    //https://stackoverflow.com/a/524721
    var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style");

    head.appendChild(style);

    style.appendChild(document.createTextNode(css));
}

function onReceiveImgURL(theaterRunBtn, theaterMenuBtn) {
    document.getElementById("theaterRunBtn").src = theaterRunBtn;
    document.getElementById("theaterMenuBtn").src = theaterMenuBtn;

    var event = new CustomEvent("onScriptLoad");
    document.dispatchEvent(event);
}

(function () {
    createMenu(GM_getResourceText("html"));
    createStyle(GM_getResourceText("css"));

    var theaterRunURL = GM_getResourceURL("run"),
        theaterMenuURL = GM_getResourceURL("menu"),
        scriptURL = GM_getResourceURL("main");

    //https://stackoverflow.com/a/9517879
    var script = document.createElement("script");
    script.id = "theater-tools";
    script.type = "text/javascript";
    script.src = scriptURL;
    script.onload = function() {
        onReceiveImgURL(theaterRunURL, theaterMenuURL);
        // this.remove();
    };
    document.head.appendChild(script);
})();

//https://www.tampermonkey.net/documentation.php#GM_getResourceText
//https://www.tampermonkey.net/documentation.php#GM_getResourceURL
//https://www.tampermonkey.net/documentation.php#_resource
