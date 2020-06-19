// main.js: pepeLaugh 👉 https://www.youtube.com/watch?v=9OG-Qr1qAe4
//

function missingValue(aspect_ratio, width, height) {
    //https://www.silisoftware.com/tools/screen_aspect_ratio_calculator
	if (width && height) {
        aspect_ratio = width / height;
        return aspect_ratio;
	}
	if (aspect_ratio) {
		if (width && !height) {
            height = width / aspect_ratio;
            return height;
		} else if (height && !width) {
            width = height * aspect_ratio;
            return width;
		}
	} else {
		console.log("missingValue(): error");
	}
}

function chgPlayerStyle() {
    const r = 1.778;
    var clientW = document.getElementById("playdiv").clientWidth,
        clientH = document.getElementById("playdiv").clientHeight,
        w = [],
        h = [],
        t = [],
        l = [];
    function v_0_style_calc() {
        w[0] = Math.round( clientW );
        h[0] = Math.round( missingValue(r, w[0], 0) );
    }
    function v_1_style_calc() {
        h[1] = Math.round( clientH - h[0] );
        t[1] = ( clientH - h[1] );
    }
    function v_4_5_6_style_calc() {
        w[1] = Math.round( missingValue(r, 0, h[1]) );
        l[1] = ( clientW - w[1] );
    }
    function v_4_6_style_calc() {
        l[2] = w[2] = ( l[1] / 2 );
    }
    function v_7_8_style_calc() {
        w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
        l[2] = ( w[3] * 2 );
        l[3] = w[3];
    }
    function v_7_8_9_style_calc() {
        h[3] = ( h[1] / 2 );
        t[2] = ( t[1] + h[3] );
    }
    function writeStyle(p, w, h, t, l) {
        var obj = document.getElementById("v-" + fldids[p]);
        obj.style = "width: " + w[0] + w[1] +
                  "; height: " + h[0] + h[1] +
                  "; top: " + t[0] + t[1] +
                  "; left: " + l[0] + l[1] + ";";
    }
    switch(chans.length) {
        case 0:
            break;
        case 1:
            if(useChgPlayerStyleCaseOne === true) {
                v_0_style_calc();
                writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            }
            break;
        case 2:
            v_0_style_calc();
            v_1_style_calc();
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[0],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 3:
            v_0_style_calc();
            w[1] = ( clientW / 2 );
            v_1_style_calc();
            l[1] = ( clientW / 2 );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[1],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 4:
            v_0_style_calc();
            v_1_style_calc();
            v_4_5_6_style_calc();
            v_4_6_style_calc();
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[2],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 5:
            v_0_style_calc();
            v_1_style_calc();
            v_4_5_6_style_calc();
            h[3] = ( h[1] / 2 );
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            l[2] = ( l[1] - w[3] );
            t[2] = ( t[1] + h[3] );
            w[2] = ( l[1] - w[3] );
            l[2] = w[3];
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[3],"px"], [h[3],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(4, [w[3],"px"], [h[3],"px"], [t[2],"px"], ["0","%"]);
            break;
        case 6:
            v_0_style_calc();
            v_1_style_calc();
            v_4_5_6_style_calc();
            l[2] = w[2] = ( l[1] / 2 );
            h[2] = ( h[1] / 2 );
            t[2] = ( t[1] + h[2] );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[2],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[2],"px"], [h[2],"px"], [t[2],"px"], [l[2],"px"]);
            writeStyle(4, [w[2],"px"], [h[2],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(5, [w[2],"px"], [h[2],"px"], [t[2],"px"], ["0","%"]);
            break;
        case 7:
            v_0_style_calc();
            v_1_style_calc();
            v_7_8_style_calc();
            v_7_8_9_style_calc();
            w[2] = w[1] = ( (clientW - (w[3] * 2)) / 2 );
            l[1] = ( clientW - w[1] );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(4, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[3],"px"]);
            writeStyle(5, [w[3],"px"], [h[3],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(6, [w[3],"px"], [h[3],"px"], [t[2],"px"], ["0","%"]);
            break;
        case 8:
            v_0_style_calc();
            v_1_style_calc();
            v_7_8_style_calc();
            v_7_8_9_style_calc();
            w[1] = ( clientW - (w[3] * 3) );
            l[1] = ( w[3] * 3 );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[2],"px"]);
            writeStyle(4, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(5, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[3],"px"]);
            writeStyle(6, [w[3],"px"], [h[3],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(7, [w[3],"px"], [h[3],"px"], [t[2],"px"], ["0","%"]);
            break;
        case 9:
            v_0_style_calc();
            v_1_style_calc();
            w[3] = ( clientW / 4 );
            v_7_8_9_style_calc();
            l[1] = ( w[3] * 3 );
            l[2] = ( w[3] * 2 );
            l[3] = w[3];
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[1],"px"]);
            writeStyle(3, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(4, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[2],"px"]);
            writeStyle(5, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(6, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[3],"px"]);
            writeStyle(7, [w[3],"px"], [h[3],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(8, [w[3],"px"], [h[3],"px"], [t[2],"px"], ["0","%"]);
            break;
        default:
            console.log("chgPlayerStyle(): player number out of range (" + fldids.length + " / 9)");
    }
    console.log("chgPlayerStyle:", chgPlayerStyleCtr++);
}

function goFullScreen() {
    if(screen.width == 1440 && screen.height == 900) {
        if(isfullscr()) {
            chgPlayerStyle();
        } else {
            gofullscr();
            setTimeout(function() {
                chgPlayerStyle();
            }, 200);
        }
    } else {
        chgPlayerStyle();
    }
    console.log("goFullScreen():", goFullScreenCtr++);
}

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
                currentQuality = obj.player.getQuality()
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
    console.log("chgQuality:", chgQualityCtr++);
}

function updChatIndx() {
    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
    //https://stackoverflow.com/questions/25934989
    if( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        var chatselObj = document.getElementById("chatsel"),
            chatmenObj = document.getElementById("chatmen"),
            indexOfSelectedChat = "",
            list = [],
            indx = [...chats];

        for(var i = 0; i < chans.length; i++) {
            var indxOf = indx.indexOf(chans[i]);
            if(indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        for(; indx.length > 0; ) {
            list.push( indx.shift() );
        }

        //get name of shown chat
        var indexOfSelectedChat = chats[chatselObj.selectedIndex];

        for(var i = 0; i < list.length; i++) {
            chatselObj.options[i].innerHTML = list[i];
            chatmenObj.options[i].innerHTML = list[i];
        }

        chats = [...list];

        //restore 'selectedIndex' to shown chat
        indexOfSelectedChat = chats.indexOf(indexOfSelectedChat);
        chatselObj.selectedIndex = indexOfSelectedChat;
        chatmenObj.selectedIndex = indexOfSelectedChat

        console.log("updChatIndx:", chgChatSelCtr++);
    }
}

function removeOfflineChannels() {
    var indx = {};
    for(var i = (fldids.length - 1); i >= 0; i--) {
        var obj = document.getElementById("v-" + fldids[i]);
        if(obj.player.isPaused() || obj.player.getEnded()) {
            indx[("v-" + fldids[i])] = obj.player.getPlayerState().channelName;
            remstream(fldids[i], 1);
        }
    }
    console.log("removeOfflineChannels():", removeOfflineChannelsCtr++, indx);
}

////////////////////////////////////////////////////////////////////////////////////////

function updMenuElement() {
    //https://forum.webflow.com/t/23730
    document.getElementById("menubtn").onclick = function() {
        openmenu();
        updChatIndx();
    }
}

function evtchk(event) {
    if (event.ctrlKey) {
        openmenu(0);
        updChatIndx();
        goFullScreen();
        chgQuality();
    }
}

function onReceiveImgURL(e) {
    document.removeEventListener("sendImgURL", onReceiveImgURL);
    createFunctionsMenuImg(e.detail.functionsMenuImg);
    createPlayerStyleImg(e.detail.playerStyleImg);
}

function createPlayerStyleImg(url) {
    //https://stackoverflow.com/questions/2735881
    var img = document.createElement("img");
    img.id = "playerStyleImg";
    img.src = url;
    img.alt = "";
    // img.style = "display: none;"
    img.onclick = function() {
        updChatIndx();
        goFullScreen();
        chgQuality();
    };
    var src = document.getElementById("chatdiv"); //chatwin, chatdiv
    // src.appendChild(img);
    src.insertBefore(img, src.firstChild);
}

function createFunctionsMenuImg(url) {
    //https://stackoverflow.com/questions/33144234
    var img = document.createElement("img");
    img.id = "functionsMenuImg";
    img.src = url;
    img.alt = "";
    // img.style = "display: none;"
    img.onclick = function() {
        removeOfflineChannels();
        updChatIndx();
        chgQuality();
    };
    var src = document.getElementById("chatdiv");
    // src.appendChild(img);
    src.insertBefore(img, src.firstChild);
}

function setEventTrigger() {
    //https://stackoverflow.com/questions/28610365
    if(fldids.length > 0) {
        var indx = ("v-" + fldids[fldids.length - 1]),
            obj = document.getElementById(indx);

        function playingEventListener() {
            console.log("setEventTrigger():", indx + " is playing ["+obj.player.getPlayerState().channelName+"]");//templog
            rmvEvtLsnr();
            onEventTrigger();
        }
        function offlineEventListener() {
            console.log("setEventTrigger():", indx + " is offline ["+obj.player.getPlayerState().channelName+"]");//templog
            rmvEvtLsnr();
            onEventTrigger();
        }
        function rmvEvtLsnr() {
            obj.player.removeEventListener("playing", playingEventListener);
            obj.player.removeEventListener("offline", offlineEventListener);
        }
        obj.player.addEventListener("playing", playingEventListener);
        obj.player.addEventListener("offline", offlineEventListener);
        console.log("setEventTrigger(): fldids.length ===", fldids.length);//templog
    } else {
        console.log("setEventTrigger(): no streams found");//templog
    }
}

function onEventTrigger() {
    userQuality[0] = fldids[0];
    ///////////////////
    updChatIndx();
    chgPlayerStyle();
    ///////////////////
    chgQuality();
    document.getElementById("playerStyleImg").style.display = "initial"; //initial, inherit, block
    document.getElementById("functionsMenuImg").style.display = "initial";
}

////////////////////////////////////////////////////////////////////////////////////////

var userQuality = [],
    useUserQuality = false,
    useChgPlayerStyleCaseOne = false,
    chgPlayerStyleCtr = 0,
    goFullScreenCtr = 0,
    chgQualityCtr = 0,
    chgChatSelCtr = 0,
    removeOfflineChannelsCtr = 0;
(function() {
    updMenuElement();
    document.addEventListener("sendImgURL", onReceiveImgURL);
    setTimeout(setEventTrigger, 500);
})();
