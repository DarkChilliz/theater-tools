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

function writeStyle(v, w, h, t, l) {
    var obj = document.getElementById("v-" + fldids[v]);
    obj.style = "width: " + w[0] + w[1] +
              "; height: " + h[0] + h[1] +
              "; top: " + t[0] + t[1] +
              "; left: " + l[0] + l[1] + ";";
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
    // console.log("chgPlayerStyle():", chgPlayerStyleCtr++);//templog
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
    // console.log("goFullScreen():", goFullScreenCtr++);//templog
}

function getQualities(strmID) {
    var obj = document.getElementById("v-" + fldids[strmID]);
    if(typeof obj.quality === "undefined" || obj.quality.length < 1) {
        if (chans[strmID].search("v=") == -1) {
            var list = obj.player.getQualities();
            obj.quality = [];
            for(var x = 0; x < list.length; x++) {
                obj.quality.push(list[x].group);
            }
        } else if(chans[strmID].search("v=") > -1) {
            obj.quality = obj.player.getQualities();
        }
    }
}

function chkQuality(indx, sel) {
    if( indx.indexOf(sel) < 0 ) {
        return indx[0];
    } else {
        return (indx[indx.indexOf(sel)]);
    }
}

function setQuality(strmID, strmQuality) {
    var currentQuality = "",
        checkQuality = "",
        obj = document.getElementById("v-" + fldids[strmID]);
    if(obj.player.getEnded() !== true && chans[strmID].search("v=") == -1) {
        currentQuality = obj.player.getQuality();
        if(currentQuality !== strmQuality) {
            if(chans[strmID].search("v=") == -1) {
                checkQuality = chkQuality(obj.quality, strmQuality);
                obj.player.setQuality( checkQuality );
                console.log("setQuality(): v-"+ fldids[strmID] + ":", (typeof currentQuality !== "undefined" ? currentQuality.padEnd(7) : " "),"->", (typeof checkQuality !== "undefined" ? checkQuality.padEnd(7) : " "), "["+obj.player.getPlayerState().channelName+"]");
            } else {
                console.log("setQuality(): not twitch", strmID);
            }
        }
    }
}

function chgQuality(strmID, strmQuality) {
    var length = 0;
    // getQualities(strmID);
    // setQuality(strmID, strmQuality);
    switch(chans.length) {
        case 3:
            length = 2;
            break;
        case 2:
        case 4:
        case 5:
        case 6:
            length = 1;
    }
    for(var i = 0; i < chans.length; i++) {
        getQualities(i); //"160p30" "360p30" "480p30" "720p30" "720p60" "chunked" "auto"
        setQuality(i, (i > length ? "160p30" : "auto"));
    }
}

function updChatIndx() {
    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
    //https://stackoverflow.com/questions/25934989
    if( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        var chatsel = document.getElementById("chatsel"),
            chatmen = document.getElementById("chatmen"),
            indexOfSelectedChat = "",
            list = [],
            indx = chats.slice(); //indx = [...chats];

        for(var i = 0; i < chans.length; i++) {
            var indxOf = indx.indexOf(chans[i]);
            if(indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        for(; indx.length > 0; ) {
            list.push( indx.shift() );
        }

        //get 'selectedIndex' value
        var indexOfSelectedChat = chats[chatsel.selectedIndex];

        for(var i = 0; i < list.length; i++) {
            chatsel.options[i].innerHTML = list[i];
            chatmen.options[i].innerHTML = list[i];
        }

        chats = list.slice(); //chats = [...list];

        //restore 'selectedIndex' value
        indexOfSelectedChat = chats.indexOf(indexOfSelectedChat);
        chatsel.selectedIndex = indexOfSelectedChat;
        chatmen.selectedIndex = indexOfSelectedChat

        // console.log("updChatIndx:", chgChatSelCtr++);//templog
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
        chgQuality();
        goFullScreen();
    };
    var src = document.getElementById("chatdiv"); //chatwin, chatdiv
    src.insertBefore(img, src.firstChild); //src.appendChild(img);
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
        goFullScreen();
    };
    var src = document.getElementById("chatdiv");
    src.insertBefore(img, src.firstChild); //src.appendChild(img);
}

function setEventTrigger() {
    //https://stackoverflow.com/questions/28610365
    if(fldids.length > 0) {
        var indx = ("v-" + fldids[fldids.length - 1]),
            obj = document.getElementById(indx);

        function playingEventListener() {
            console.log("playingEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");//templog
            rmvEvtLsnr();
            onEventTrigger();
        }
        function offlineEventListener() {
            console.log("offlineEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");//templog
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
    chgQuality();
    document.getElementById("playerStyleImg").style.display = "block"; //initial, inherit, block
    document.getElementById("functionsMenuImg").style.display = "block";
}

////////////////////////////////////////////////////////////////////////////////////////

var userQuality = [],
    useUserQuality = false,
    useChgPlayerStyleCaseOne = false,
    chgPlayerStyleCtr = 0,
    goFullScreenCtr = 0,
    chgChatSelCtr = 0,
    removeOfflineChannelsCtr = 0;
(function() {
    updMenuElement();
    document.addEventListener("sendImgURL", onReceiveImgURL);
    setTimeout(setEventTrigger, 500);
})();
