// temp.js: pepeLaugh 👉 https://www.youtube.com/watch?v=9OG-Qr1qAe4
//

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
