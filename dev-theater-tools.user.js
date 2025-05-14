// ==UserScript==
// @name            dev-theater-tools.user.js
// @namespace       http://localhost:8020/
// @homepage        http://localhost:8020/theater-tools
// @match           *://*.twitchtheater.tv/*
// @match           *://*.darkchilliz.github.io/*
// @run-at          document-idle
// @grant           none
// @version         2.10.0.0000
// @updateURL
// @downloadURL     http://localhost:8020/theater-tools/dev-theater-tools.user.js
// @author          http://localhost:8020/
// @description     30/09/2022, 3:29:15 am
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @icon            http://localhost:8020/theater-tools/img/favicon-192.png
// @resource run    http://localhost:8020/theater-tools/img/playerstyle.png
// @resource menu   http://localhost:8020/theater-tools/img/functionsmenu.png
// @resource html   http://localhost:8020/theater-tools/html/content.html
// @resource css    http://localhost:8020/theater-tools/css/main.css
// @resource main   http://localhost:8020/theater-tools/js/main.js
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
