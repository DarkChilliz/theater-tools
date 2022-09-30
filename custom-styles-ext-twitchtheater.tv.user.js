// ==UserScript==
// @name         custom-styles-ext-twitchtheater.tv.user.js
// @namespace    https://github.com/DarkChilliz
// @match        *://*twitchtheater.tv/*
// @run-at       document-idle
// @grant        none
// @version      0.0.0.0007
// @updateURL    https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/custom-styles-ext-twitchtheater.tv.user.js
// @downloadURL  https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/custom-styles-ext-twitchtheater.tv.user.js
// @author       darkchilliz
// @description  30/09/2022, 3:29:15 am
// @resource     REMOTE_CSS https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/css/main.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

function createFuncMenuDiv() {
    var funcMenuDiv = document.createElement("div");
    funcMenuDiv.id = "funcMenuDiv";
    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
}

(function() {
    'use strict';

    createFuncMenuDiv();

    // Load remote JS
    GM_xmlhttpRequest({
        method : "GET",
        // from other domain than the @match one (.org / .com):
        url : "https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/html/content.html",
        onload : (ev) => {
            try {
                document.getElementById("funcMenuDiv").outerHTML = ev.responseText;
            }
            catch(err){};
        }
    });

    // Load remote CSS
    // @see https://github.com/Tampermonkey/tampermonkey/issues/835
    const myCss = GM_getResourceText("REMOTE_CSS");
    GM_addStyle(myCss);
})();



// #####################################################################################

function myFunction(x) {
  x.classList.toggle("change");
}

// #####################################################################################


function onReceiveImgURL(funcMenuDivHtml, playerStyleImg, functionsMenuImg) {

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
    // var script = document.createElement('script'),//https://stackoverflow.com/questions/9515704

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
});
