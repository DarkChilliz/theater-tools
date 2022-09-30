// ==UserScript==
// @name         custom-styles-ext-twitchtheater.tv.user.js
// @namespace    https://github.com/DarkChilliz
// @match        *://*.twitchtheater.tv/*
// @run-at       document-idle
// @grant        none
// @version      0.0.0.0011
// @updateURL    https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/custom-styles-ext-twitchtheater.tv.user.js
// @downloadURL  https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/main/custom-styles-ext-twitchtheater.tv.user.js
// @author       darkchilliz
// @description  30/09/2022, 3:29:15 am
// ==/UserScript==

function createFuncMenuDiv() {
    var funcMenuDiv = document.createElement("div");
    funcMenuDiv.id = "funcMenuDiv";
    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
}

(function() {
    'use strict';

    createFuncMenuDiv();





})();
