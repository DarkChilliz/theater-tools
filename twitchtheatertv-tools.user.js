// ==UserScript==
// @name            twitchtheatertv-tools.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/twitchtheatertv-tools
// @match           *://*.twitchtheater.tv/*
// @run-at          document-idle
// @grant           none
// @version         1.1.0
// @updateURL
// @downloadURL     https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/twitchtheatertv-tools.user.js
// @author          darkchilliz
// @description     30/09/2022, 3:29:15 am | custom-styles-ext-twitchtheater.tv.user.js
// @grant           GM_getResourceText
// @grant           GM_getResourceURL
// @resource icon1  https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/img/playerstyle.png
// @resource icon2  https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/img/functionsmenu.png
// @resource html   https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/html/content.html
// @resource css    https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/css/main.css
// @resource main   https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/js/main.js
// ==/UserScript==

function createFuncMenuDiv(content) {
    var funcMenuDiv = document.createElement("div");
    funcMenuDiv.id = "funcMenuDiv";
    // funcMenuDiv.innerHTML = content;
    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
    document.getElementById("funcMenuDiv").outerHTML = content;
}

function writeStyleElement(content) {
    //https://stackoverflow.com/questions/524696
    var css = content,
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
}

function onReceiveImgURL(playerStyleImg, functionsMenuImg) { //(funcMenuDivHtml, playerStyleImg, functionsMenuImg)
    // document.getElementById("funcMenuDiv").outerHTML = funcMenuDivHtml;

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

    //https://www.tampermonkey.net/documentation.php#GM_getResourceText
    //https://www.tampermonkey.net/documentation.php#GM_getResourceURL
    //https://www.tampermonkey.net/documentation.php#_resource
    //http://192.168.1.200:8080/twitchtheatertv-tools/
    createFuncMenuDiv(GM_getResourceText("html"));
    writeStyleElement(GM_getResourceText("css"));

    var script = document.createElement('script'),//https://stackoverflow.com/questions/9515704

        //content.html
        txtFile = new XMLHttpRequest(),
        sContentHTML = GM_getResourceURL("html"), //"html/content.html",

        //createFuncMenuDiv()
        sPlayerStyleURL = GM_getResourceURL("icon1"), //"img/playerstyle.png",
        sFunctionsMenuURL = GM_getResourceURL("icon2"), //"img/functionsmenu.png",

        //main.css
        sMainCSS_URL = GM_getResourceURL("css"), //"css/main.css",

        //main.js
        sScriptURL = GM_getResourceURL("main"); //"js/main.js";

    //content.html
    // txtFile.open("GET", sContentHTML, true);//https://forums.tumult.com/t/2129
    // txtFile.onreadystatechange = function () {
    //     if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse
    //         if (txtFile.status === 200) {  // Makes sure its found the file
    //             script.onload = function() {
    //                 onReceiveImgURL(txtFile.responseText, sPlayerStyleURL, sFunctionsMenuURL);
    //                 this.remove();
    //             };
    //         }
    //     }
    // }
    // txtFile.send(null);

    //main.js
    script.src = sScriptURL;
    script.onload = function() {
        onReceiveImgURL(sPlayerStyleURL, sFunctionsMenuURL); //(txtFile.responseText, sPlayerStyleURL, sFunctionsMenuURL)
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);

    //main.css
    // var style = document.createElement('link');//https://stackoverflow.com/questions/9721344
    // style.rel = 'stylesheet';
    // // style.type = 'text/css';
    // style.href = sMainCSS_URL;
    // (document.head || document.documentElement).appendChild(style);
})();
