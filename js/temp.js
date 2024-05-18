// temp.js
//

////////////////////////////////////////////////////////////////////////////////////////

//original: https://stackoverflow.com/q/52184291
async function waitUntil(condition) {
    return await new Promise(resolve => {
        const interval = setInterval(() => {
                if (condition) {
                    resolve('foo');
                    clearInterval(interval);
                };
        }, 1000);
    });
}
//testing
async function waitUntil(condition) {
    return await new Promise(function() {
        const interval = setInterval(() => {
                if (condition) {
                    clearInterval(interval);
                    return 'foo';
                };
        }, 1000);
    });
}

////////////////////////////////////////////////////////////////////////////////////////

// https://www.google.com/search?q=how+does+twitch.tv+webplayer+work&client=firefox-b-d&sca_esv=618eadb7918fb614&sxsrf=ACQVn0_LesKNKG8e36jbHsY2VPwgFrhmXA%3A1713781885545&ei=fTwmZq_hIIOv0-kP2Pqd4Ac&ved=0ahUKEwjvk4qEz9WFAxWD1zQHHVh9B3wQ4dUDCBA&uact=5&oq=how+does+twitch.tv+webplayer+work&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWhvdyBkb2VzIHR3aXRjaC50diB3ZWJwbGF5ZXIgd29yazIFECEYoAEyBRAhGKABSLhYUMEGWKRWcAV4AZABApgB9gKgAc4_qgEJMC4xNy4xOS4xuAEDyAEA-AEBmAIooAKOPMICChAAGLADGNYEGEfCAgQQIxgnwgIKECMYgAQYJxiKBcICCxAAGIAEGJECGIoFwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICERAuGIAEGLEDGIMBGNQCGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgUQABiABMICCxAAGIAEGLEDGIoFwgILEC4YgAQYsQMY1ALCAgoQABiABBhDGIoFwgIEEAAYA8ICCBAAGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgIGEAAYFhgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIEECEYFcICBxAhGKABGAqYAwCIBgGQBgiSBwk1LjE2LjE4LjGgB-DdAQ&sclient=gws-wiz-serp
// https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1

document.getElementById("v-" + fldids[0]).player.pause()
document.getElementById("v-" + fldids[0]).player.play()

document.getElementById("v-" + fldids[0]).player.isPaused()
document.getElementById("v-" + fldids[0]).player.getEnded()

document.getElementById("v-" + fldids[0]).player.getPlaybackStats().bufferSize
document.getElementById("v-" + fldids[0]).player.getPlaybackStats().fps

document.getElementById("v-" + fldids[0]).player.getPlayerState()
////////////////////////////////////////////////////////////////

document.getElementById("v-" + fldids[0]).player.getPlaybackStats()

document.getElementById("v-" + fldids[0]).player.getPlayerState().currentTime
document.getElementById("v-" + fldids[0]).player.getPlayerState().playback // "Buffering", "Playing"

document.getElementById("v-" + fldids[0]).player.getPlaybackStats().playbackRate

document.getElementById("v-" + fldids[0]).player.getCurrentTime()
document.getElementById("v-" + fldids[0]).player.getVolume()
document.getElementById("v-" + fldids[0]).player.setVolume()
document.getElementById("v-" + fldids[0]).player.getChannel()
document.getElementById("v-" + fldids[0]).player.setChannel("forsen")

document.getElementById("v-" + fldids[0]).player.getQuality()
document.getElementById("v-" + fldids[0]).player.setQuality("160p30")

document.getElementById("v-" + fldids[0]).player
document.getElementById("v-" + fldids[0]).player.getPlayer()
document.getElementById("v-" + fldids[0]).player.getMuted()

////////////////////////////////////////////////////////////////

var timerID = null, isStalling = false;

vid.addEventListener("timeupdate", function() {
    clearTimeout(timerID);
    isStalling = false;
    // remove stalling indicator if any ...
    timerID = setTimeout(reportStalling, 2000);  // 2 sec timeout
});

// integrate with stalled event in some way -
vid.addEventListener("stalled", function() {isStalling = true})

function reportStalling() {
    if ((!vid.paused && !vid.ended) || isStalling) {  }
}



// document.getElementById("v-" + fldids[0]).player.addEventListener(Twitch.Player.PLAYBACK_BLOCKED, function() {
//     // isStalling = true
//     console.log("eventListener: Twitch.Player.PLAYBACK_BLOCKED");
// });


// https://help.kick.com/en/articles/8010826-how-to-embed-your-kick-livestream
<iframe
    src="https://player.kick.com/xqc?muted=false"
    height="720"
    width="1280"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true">
</iframe>
// https://kick-chat.corard.tv/
// https://kick-chat.corard.tv/v1/chat?user=xqc&font-size=Small&stroke=Thin&animate=true&badges=true&commands=true&bots=true

// https://kick.com/xqc/chatroom


document.cookie

// https://greasyfork.org/en/scripts/30545-html5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%B7%A5%E5%85%B7/code

////////////////////////////////////////////////////////////////////////////////////////

// CSS
/* #functionsMenuImg, #playerStyleImg, #menudiv {
    z-index: 1;
} */

function setButtonVisibility() {
    var list = ["playerStyleImg", "functionsMenuImg"];
    list.forEach((value) => { //https://www.w3schools.com/js/js_arrow_function.asp
        var obj = document.getElementById(value)
        if(obj.style.visibility != "visible") {
            obj.style.visibility = "visible"; //https://www.w3schools.com/cssref/pr_class_visibility.asp
        }
    });
}

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
// Menu
// https://jsfiddle.net/sDbff/3/
// https://www.w3schools.com/js/js_cookies.asp
// https://www.google.com/search?client=firefox-b-d&q=javascript+create+menu
// https://stackoverflow.com/questions/13665480/how-to-create-a-menu-with-dom-and-javascript

function xfgd() {

    // All items we'd like to add
    // var navItems = [
    //     {href: 'http://google.com', text: 'Google'},
    //     {href: 'http://bing.com', text: 'Bing'},
    //     {href: 'http://stackoverflow.com', text: 'StackOverflow'}
    // ];

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");

        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;

        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].className = "current";

    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }

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

//
//Another way of doing it is to use new Fetch API:
//If the file's name is modal.html - update manifest.json accordingly
/* "web_accessible_resources": [
"modal.html",
], */
//and inject it like this:
fetch(chrome.extension.getURL('/modal.html'))
.then(response => response.text())
.then(data => {
    document.body.innerHTML += data;
    // other code
    // eg update injected elements,
    // add event listeners or logic to connect to other parts of the app
}).catch(err => {
// handle error
});

// https://www.w3schools.com/js/js_cookies.asp
function chgCookie(chk, val, txt) {
    var i = new Date();
    i.setTime(i.getTime() + ((chk ? 365 : 0) * 24 * 60 * 60 * 1000));
    document.cookie = val + "=" + (chk ? (txt == undefined ? 1 : txt) : "") + ";expires=" + i.toUTCString() + ";path=/"
}

function getCookie(txt) {
    if (txt) {
        return getvarval(document.cookie.replace(/\s+/g, "").split(";"), txt)
    } else {
        return document.cookie.replace(/\s+/g, "").split(";")
    }
}
