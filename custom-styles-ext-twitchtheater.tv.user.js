// ==UserScript==
// @name         twitchtheatertv-tools.user.js
// @namespace    http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv | https://github.com/DarkChilliz
// @match        *://*.twitchtheater.tv/*
// @run-at       document-idle
// @grant        none
// @version      0.2.0
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

(function () {
    'use strict';

    createFuncMenuDiv();
    fillFuncMenuDiv();
    writeStyleElement();

})();

function fillFuncMenuDiv() {
    document.getElementById("funcMenuDiv").outerHTML = `
<div id="funcMenuDiv">
    <img id="playerStyleImg" src="" alt="">

    <!-- <img id="functionsMenuImg" src="" alt=""> -->

    <div class="functionsMenuImg" onclick="this.classList.toggle('change')">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>


    <div id="funcMenuTop" style="display:none;"></div>
    <div id="funcMenuBot" style="display:none;">
        <div id="fm0" onclick="funcEvtChk(event)">

            <div id="btnLine1">
                <div class="btnInner">
                    <button class="funcBtn removeOfflineChannels"
                        onclick="removeOfflineChannels(1)">removeOffChannels
                    </button>
                </div>
                <div class="btnInner">
                    <button class="funcBtn removeOfflineStreams"
                        onclick="removeOfflineChannels()">removeOffPlayers
                    </button>
                </div>
            </div>

            <div id="btnLine2">
                <div class="btnInner">
                    <button class="funcBtn setGameMode"
                        onclick="setGameMode()">setGameMode
                    </button>
                </div>
                <div class="btnInner">
                    <button class="funcBtn setMaxQualityMode"
                        onclick="setMaxQualityMode()">setMaxQualityMode
                    </button>
                </div>
            </div>

            <div id="btnLine3">
                <div class="btnInner">
                    <button class="funcBtn unloadAllChats"
                        onclick="unloadAllChats(event)">loadedChats <!-- unloadChats -->
                    </button>
                </div>
                <div class="btnInner">
                    <button class="funcBtn addStreamsFromChat"
                        onclick="addStreamsFromChat(event)">addStreams <!-- addStreamsFromChat -->
                    </button>
                </div>
            </div>

            <div id="btnLine4">
                <div class="btnInner">
                    <button class="funcBtn watchPartyMode"
                        onclick="watchPartyMode()">watchPartyMode
                    </button>
                </div>
                <div class="btnInner">
                    <button class="funcBtn randomTestButton"
                        onclick="randomTestButton()">randomTestButton
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>
`;
}

function writeStyleElement() {
    //https://stackoverflow.com/questions/524696
    var css = `
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}


.functionsMenuImg, #playerStyleImg {
    position: absolute;
    /* visibility: hidden; */
    opacity: 0.5;
}

.functionsMenuImg {
    display: inline-block;
    cursor: pointer;
    left: 50px;
    top: 5px;
}

#funcMenuDiv {
    position: absolute;
    overflow: hidden;
    min-width: 86px;
    min-height: 50px;
    right: 254px;
    top: 50px;
}

#funcMenuTop {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding-top: 15px;
    height: 35px;
    /* position: relative; */
    /* top: 50px; */
}

#funcMenuBot {
    font-size: 0.8em;
    line-height: 1.5em;
    overflow: auto;
    min-height: 70px;
    /* position: relative; */
    /* top: 100px; */
}

#fm0 {
    /* padding: 10px 10px; */
    padding: 6px 6px;
}

.funcBtn:hover {background: rgb(73, 73, 73);}
.funcBtn:focus {background: rgb(50, 50, 50);}
.funcBtn:active {color: lightcoral;}
.funcBtn {
    border: none;
    background-color: rgb(56, 56, 56); /* background-color: inherit; */
    color: whitesmoke;
    /* padding: 14px 28px; */
    padding: 12px 12px;
    font-size: 16px;
    cursor: pointer;
    /* display: inline-block; */
    /* display: block; */
}
.active {color: lightcoral;}

/* .success {color: green;}
.info {color: dodgerblue;}
.warning {color: orange;}
.danger {color: red;}
.default {color: black;} */

.btnInner, #btnLine1, #btnLine2, #btnLine3, #btnLine4 {
    display: inline-block;
}
#btnLine1, #btnLine2, #btnLine3, #btnLine4 {
    /* text-align: center; */
    width: 100%;
}
#btnLine2, #btnLine3, #btnLine4 {
    padding-top: 4px;
}

`;

    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.appendChild(document.createTextNode(css));
}
