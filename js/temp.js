// temp.js: pepeLaugh 👉 https://www.youtube.com/watch?v=9OG-Qr1qAe4
//

////////////////////////////////////////////////////////////////////////////////////////
// old removeOfflineChannels

function removeOfflineChannels() {
    var indx = {};
    for(var i = (fldids.length - 1); i > -1; i--) {
        var obj = document.getElementById("v-" + fldids[i]);
        if(obj.player.isPaused() || obj.player.getEnded()) {
            indx[("v-" + fldids[i])] = obj.player.getPlayerState().channelName;
            remstream(fldids[i], 1);
        }
    }
    if(indx)
    console.info("removeOfflineChannels():", indx);
}

////////////////////////////////////////////////////////////////////////////////////////
// old chgQuality

function chgQuality() {
    function get_qualities() {
        for(var i = 0; i < chans.length; i++) {
            var obj = document.getElementById("v-" + fldids[i]);
            if(typeof obj.quality === "undefined" || obj.quality.length < 1) {
                if (chans[i].search("mixer=") == -1 && chans[i].search("v=") == -1) {
                    var list = obj.player.getQualities();
                    obj.quality = [];
                    for(var x = 0; x < list.length; x++) {
                        obj.quality.push(list[x].group);
                    }
                } else if(chans[i].search("v=") > -1) {
                    obj.quality = obj.player.getQualities();
                } else if(chans[i].search("mixer=") > -1) {
                    console.log("PepeLaugh 👉 mixer:", i);
                }
            }
        }
    }
    function chkQual(indx, sel) {
        if( indx.indexOf(sel) < 0 ) {
            return indx[0];
        } else {
            return (indx[indx.indexOf(sel)]);
        }
    }
    function div_a() {
        var obj = document.getElementById("v-" + fldids[0]);
        if(obj.player.getEnded() !== true) {
            var hardCodeQuality = "auto", //"chunked"
                currentQuality = "",
                userSetQuality = "";
            if(chans[0].search("mixer=") == -1 && chans[0].search("v=") == -1) {
                currentQuality = obj.player.getQuality();
                if(currentQuality !== userQuality[1] && currentQuality !== hardCodeQuality) {
                    if(userQuality[1]) {
                        userSetQuality = chkQual(obj.quality, userQuality[1]);
                    } else {
                        userSetQuality = chkQual(obj.quality, hardCodeQuality);
                    }
                    obj.player.setQuality(userSetQuality);
                    console.log("chgQual(): v-" + fldids[0] + ":", currentQuality,"->" ,userSetQuality,"|", hardCodeQuality);
                }
            }
        }
    }
    function div_b() {
        var hardCodeQuality = "160p30",
            currentQuality = "",
            checkQuality = "";
        for(var i = 1; i < chans.length; i++) {
            var obj = document.getElementById("v-" + fldids[i]);
            if(obj.player.getEnded() !== true) {
                currentQuality = obj.player.getQuality();
                if(currentQuality !== hardCodeQuality) {
                    if(chans[i].search("mixer=") == -1 && chans[i].search("v=") == -1) {
                        checkQuality = chkQual(obj.quality, hardCodeQuality);
                        obj.player.setQuality( checkQuality );
                        console.log("chgQual(): v-" + fldids[i] + ":", currentQuality,"->", checkQuality,"|", hardCodeQuality);
                    } else {
                        console.log("chgQuality().div_b(): not twitch", i);
                    }
                }
            }
        }
    }
    var obj = document.getElementById("v-" + fldids[0]);
    if(useUserQuality === true && obj.player.getEnded() !== true && userQuality[0] === fldids[0] && typeof obj.quality !== "undefined") {
        if(userQuality[1] !== obj.player.getQuality()) {
            userQuality[1] = obj.player.getQuality();
            console.log("chgQuality(): v-" + fldids[0] + ":", "userQuality[1] =", userQuality[1]);
        }
    } else if(userQuality[0] !== fldids[0]) {
        userQuality[0] = fldids[0];
    }
    get_qualities();
    div_a();
    div_b();
    console.log("chgQuality:", chgQualityCtr++);//templog
}

////////////////////////////////////////////////////////////////////////////////////////

function x() {
    var obj = document.getElementById("v-4");
    console.log(
        obj.player.getPlayerState(),
        obj.player.getPlayerState().channelName, // channel name
        obj.player.getPlayerState().playback, // "Idle", "Ready", "Buffering", "Playing", Ended
        obj.player.getPlaybackStats(),
        obj.player.getEnded(),
        obj.player.isPaused(),
        getPlayers(),
        obj.player.play(),
        obj.player.pause(),
    );//templog
}

function removeElement() {
    //https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
    document.getElementById("chattog").style.display = "none";
}

function get_if_crashed() { //unfinished
    //https://stackoverflow.com/questions/19586137
    var intervalID = setInterval(function() {
        //
        //
        //
        clearInterval(intervalID);
    }, 3000);
    function createfunc(i) {
        return (function() {
            var obj = document.getElementById("v-" + fldids[i]);
            obj.player.addEventListener("pause", function() {
                obj.player.play();
                console.log(fldids[i]);//templog
            });
        })();
    }
    for(var i = 0; i < chans.length; i++){
        createfunc(i);
    }
}

function getPlayers() { //obsolete
    //https://stackoverflow.com/questions/21441777
    return document.querySelectorAll("[id*=\"v-\"]");
}

function getChats() { //obsolete
    //https://stackoverflow.com/questions/21441777
    return document.querySelectorAll('[id*="chat-room-header-label"]');
}

function convertToPercentage(parentWindow, pixels) { //obsolete & unfinished
    //https://stackoverflow.com/questions/15807021
    return ( parentWindow - pixels ) / parentWindow; // 0.92%
}

// chans = [];
// chats = [];
// fldids = [];
// hidstr = 0;
// curcol = 1;
// curcht = -1;
// curdiv = 0;
// curtab = 1;
// sessid = -1;
// ## end temp #########################################################################

// inject css: https://stackoverflow.com/questions/11553600/how-to-inject-css-using-content-script-file-in-chrome-extension
// display css: https://www.w3schools.com/cssref/pr_class_display.asp
// multiple parameters through Events: https://salesforcediaries.com/2019/12/10/send-multiple-parameters-in-lwc-events-via-detial-property/

/////////////////////////////////////////////////////////////////
// content.js » Obsolete
//
// var url=chrome.runtime.getURL("images/functionsmenu.png");
// var evt=document.createEvent("CustomEvent");
// evt.initCustomEvent("yourCustomEvent", true, true, url);
// document.dispatchEvent(evt);
//
// "css": ["css/main.css"],
/////////////////////////////////////////////////////////////////

// document.getElementById("menudiv").style.zIndex = "1";

// pxl = "px",
// percnt = "%"
