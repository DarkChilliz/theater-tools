// ==UserScript==
// @name         twitchtheatertv-tools.user.js
// @namespace    http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv | https://github.com/DarkChilliz
// @match        *://*.twitchtheater.tv/*
// @run-at       document-idle
// @grant        none
// @version      0.0.20
// @updateURL
// @downloadURL  http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/custom-styles-ext-twitchtheater.tv.user.js
// @author       darkchilliz
// @description  30/09/2022, 3:29:15 am | custom-styles-ext-twitchtheater.tv.user.js
// ==/UserScript==

function createFuncMenuDiv() {
    var funcMenuDiv = document.createElement("div");
    funcMenuDiv.id = "funcMenuDiv";
    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
}

function onReceiveImgURL(funcMenuDivHtml, playerStyleImg, functionsMenuImg) {
    document.getElementById("funcMenuDiv").outerHTML = funcMenuDivHtml;

    var playerStyleImgObj = document.getElementById("playerStyleImg"),
        functionsMenuImgObj = document.getElementById("functionsMenuImg");

    //playerStyleImg
    playerStyleImgObj.src = playerStyleImg;

    //functionsMenuImg
    functionsMenuImgObj.src = functionsMenuImg;

    var event = new CustomEvent("triggerScript");
    document.dispatchEvent(event);
}

(function () {
    'use strict';
    var script = document.createElement('script'),//https://stackoverflow.com/questions/9515704

        isFirefox = typeof InstallTrigger !== 'undefined',//https://stackoverflow.com/questions/9847580
        isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),

        //content.html
        txtFile = new XMLHttpRequest(),
        sContentHTML = "html/content.html",

        //createFuncMenuDiv()
        sPlayerStyleURL = "img/playerstyle.png",
        sFunctionsMenuURL = "img/functionsmenu.png",

        //main.js
        sScriptURL = "js/main.js",

        //main.css
        sMainCSS_URL = "css/main.css";

    if (isChrome == true) {//https://stackoverflow.com/questions/32344868 https://developer.chrome.com/extensions/extension#method-getURL
        script.src =        chrome.runtime.getURL(sScriptURL);
        sFunctionsMenuURL = chrome.runtime.getURL(sFunctionsMenuURL);
        sPlayerStyleURL =   chrome.runtime.getURL(sPlayerStyleURL);
        sContentHTML =      chrome.runtime.getURL(sContentHTML);
        sMainCSS_URL =      chrome.runtime.getURL(sMainCSS_URL);
    }
    else if (isFirefox == true) {//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL
        script.src =        browser.runtime.getURL(sScriptURL);
        sFunctionsMenuURL = browser.runtime.getURL(sFunctionsMenuURL);
        sPlayerStyleURL =   browser.runtime.getURL(sPlayerStyleURL);
        sContentHTML =      browser.runtime.getURL(sContentHTML);
        sMainCSS_URL =      browser.runtime.getURL(sMainCSS_URL);
    }

    createFuncMenuDiv();

    //content.html
    txtFile.open("GET", sContentHTML, true);//https://forums.tumult.com/t/2129
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse
            if (txtFile.status === 200) {  // Makes sure its found the file
                script.onload = function() {
                    onReceiveImgURL(txtFile.responseText, sPlayerStyleURL, sFunctionsMenuURL);
                    this.remove();
                };
            }
        }
    }
    txtFile.send(null);

    //main.js
    (document.head || document.documentElement).appendChild(script);

    //main.css
    var style = document.createElement('link');//https://stackoverflow.com/questions/9721344
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = sMainCSS_URL;
    (document.head || document.documentElement).appendChild(style);
})();
