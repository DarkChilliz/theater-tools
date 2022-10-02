// ==UserScript==
// @name           twitchtheatertv-tools.user.js
// @namespace      http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv | https://github.com/DarkChilliz
// @match          *://*.twitchtheater.tv/*
// @run-at         document-idle
// @grant          none
// @version        0.2.1.0002
// @updateURL
// @downloadURL    http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/custom-styles-ext-twitchtheater.tv.user.js
// @author         darkchilliz
// @description    30/09/2022, 3:29:15 am | custom-styles-ext-twitchtheater.tv.user.js
// @grant          GM_getResourceText
// @grant          GM_getResourceURL
// @resource icon  http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/img/playerstyle.png
// @resource html  http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/html/content.html
// @resource css   http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/css/main.css
// @resource main  http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/js/main.js
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

}





}


    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
}
