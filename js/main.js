// main.js: pepeLaugh 👉 https://www.youtube.com/watch?v=9OG-Qr1qAe4
//

///////////////////
// set player styles

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
	}
}

function writeStyle(v, w, h, t, l) {
    var obj = document.getElementById("v-" + fldids[v]);
    obj.style = "width: "  + w + "px;" +
                "height: " + h + "px;" +
                "top: "    + t + "px;" +
                "left: "   + l + "px;";
}

function chgPlayerStyle() {
    const r = 1.778;
    var clientW = document.getElementById("playdiv").clientWidth,
        clientH = document.getElementById("playdiv").clientHeight,
        w = [],
        h = [],
        t = [],
        l = [];
    switch(chans.length) {
        case 0:
            break;
        case 1:
            if (useChgPlayerStyleCaseOne === true) {
                // v_0_style_calc();
                w[0] = Math.round( clientW );
                h[0] = Math.round( missingValue(r, w[0], 0) );
                //
                writeStyle(0, w[0], h[0], 0, 0);
            }
            break;
        case 2:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            //
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[0], h[1], t[1], 0);
            break;
        case 3:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            //
            w[1] = ( clientW / 2 );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            //
            l[1] = ( clientW / 2 );
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[1], h[1], t[1], 0);
            break;
        case 4:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            //
            // v_4_5_6_style_calc();
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
            // v_4_6_style_calc();
            l[2] = w[2] = ( l[1] / 2 );
            //
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[2], h[1], t[1], l[2]);
            writeStyle(3, w[2], h[1], t[1], 0);
            break;
        case 5:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            // v_4_5_6_style_calc();
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
            //
            h[3] = ( h[1] / 2 );
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            l[2] = ( l[1] - w[3] );
            t[2] = ( t[1] + h[3] );
            w[2] = ( l[1] - w[3] );
            l[2] = w[3];
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[2], h[1], t[1], l[2]);
            writeStyle(3, w[3], h[3], t[1], 0);
            writeStyle(4, w[3], h[3], t[2], 0);
            break;
        case 6:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            // v_4_5_6_style_calc();
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
            //
            l[2] = w[2] = ( l[1] / 2 );
            h[2] = ( h[1] / 2 );
            t[2] = ( t[1] + h[2] );
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[2], h[2], t[1], l[2]);
            writeStyle(3, w[2], h[2], t[2], l[2]);
            writeStyle(4, w[2], h[2], t[1], 0);
            writeStyle(5, w[2], h[2], t[2], 0);
            break;
        case 7:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            // v_7_8_style_calc();
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            l[2] = ( w[3] * 2 );
            l[3] = w[3];
            // v_7_8_9_style_calc();
            h[3] = ( h[1] / 2 );
            t[2] = ( t[1] + h[3] );
            //
            w[2] = w[1] = ( (clientW - (w[3] * 2)) / 2 );
            l[1] = ( clientW - w[1] );
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[2], h[1], t[1], l[2]);
            writeStyle(3, w[3], h[3], t[1], l[3]);
            writeStyle(4, w[3], h[3], t[2], l[3]);
            writeStyle(5, w[3], h[3], t[1], 0);
            writeStyle(6, w[3], h[3], t[2], 0);
            break;
        case 8:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            // v_7_8_style_calc();
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            l[2] = ( w[3] * 2 );
            l[3] = w[3];
            // v_7_8_9_style_calc();
            h[3] = ( h[1] / 2 );
            t[2] = ( t[1] + h[3] );
            //
            w[1] = ( clientW - (w[3] * 3) );
            l[1] = ( w[3] * 3 );
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[1], h[1], t[1], l[1]);
            writeStyle(2, w[3], h[3], t[1], l[2]);
            writeStyle(3, w[3], h[3], t[2], l[2]);
            writeStyle(4, w[3], h[3], t[1], l[3]);
            writeStyle(5, w[3], h[3], t[2], l[3]);
            writeStyle(6, w[3], h[3], t[1], 0);
            writeStyle(7, w[3], h[3], t[2], 0);
            break;
        case 9:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            //
            w[3] = ( clientW / 4 );
            // v_7_8_9_style_calc();
            h[3] = ( h[1] / 2 );
            t[2] = ( t[1] + h[3] );
            //
            l[1] = ( w[3] * 3 );
            l[2] = ( w[3] * 2 );
            l[3] = w[3];
            writeStyle(0, w[0], h[0], 0, 0);
            writeStyle(1, w[3], h[3], t[1], l[1]);
            writeStyle(2, w[3], h[3], t[2], l[1]);
            writeStyle(3, w[3], h[3], t[1], l[2]);
            writeStyle(4, w[3], h[3], t[2], l[2]);
            writeStyle(5, w[3], h[3], t[1], l[3]);
            writeStyle(6, w[3], h[3], t[2], l[3]);
            writeStyle(7, w[3], h[3], t[1], 0);
            writeStyle(8, w[3], h[3], t[2], 0);
            break;
        case 10:
            // v_0_style_calc();
            w[0] = Math.round( clientW );
            h[0] = Math.round( missingValue(r, w[0], 0) );
            // v_1_style_calc();
            h[1] = Math.round( clientH - h[0] );
            t[1] = ( clientH - h[1] );
            // v_7_8_9_style_calc();
            h[3] = ( h[1] / 2 );
            t[2] = ( t[1] + h[3] );
            //
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            //
            l[1] = ( w[3] * 1 );
            l[2] = ( w[3] * 2 );
            l[3] = ( w[3] * 3 );
            //
            w[4] = ( clientW - l[3] );
            w[5] = ( w[4] / 2 );
            l[4] = l[3] + w[5];
            h[5] = Math.round( missingValue(r, w[5], 0) );
            h[4] = ( h[1] - h[5] );
            t[3] = ( t[1] + h[4] );
            //top
            writeStyle(0, w[0], h[0], 0, 0);
            //stack 1
            writeStyle(1, w[4], h[4], t[1], l[3]);
            writeStyle(8, w[5], h[5], t[3], l[4]);
            writeStyle(9, w[5], h[5], t[3], l[3]);
            //stack 2
            writeStyle(2, w[3], h[3], t[1], l[2]);
            writeStyle(3, w[3], h[3], t[2], l[2]);
            //stack 3
            writeStyle(4, w[3], h[3], t[1], l[1]);
            writeStyle(5, w[3], h[3], t[2], l[1]);
            //stack 4
            writeStyle(6, w[3], h[3], t[1], 0);
            writeStyle(7, w[3], h[3], t[2], 0);
            break;
        // case 11:
        //     break;
        // case 12:
        //     break;
        // case 13:
        //     break;
        default:
            console.info("chgPlayerStyle(): player number out of range (" + fldids.length + ")");
    }
}

function goFullScreen() {
    if (screen.width == 1440 && screen.height == 900) {
        if (isfullscr()) {
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
}

///////////////////
// set quality

function getQualities(strmID) {
    var obj = document.getElementById("v-" + fldids[strmID]);
    if (typeof obj.quality === "undefined" || obj.quality.length < 1) {
        if (chans[strmID].search("v=") == -1) {
            var list = obj.player.getQualities();
            obj.quality = [];
            for(var x = 0; x < list.length; x++) {
                obj.quality.push(list[x].group);
            }
        } else if (chans[strmID].search("v=") > -1) {
            obj.quality = obj.player.getQualities();
        }
    }
}

function chkQuality(indx, sel) {
    if (indx.indexOf(sel) < 0) {
        return indx[0];
    } else {
        return (indx[indx.indexOf(sel)]);
    }
}

function setQuality(strmID, strmQuality) {
    var currentQuality = "",
        checkQuality = "",
        pad = 7,
        obj = document.getElementById("v-" + fldids[strmID]);
    if (obj.player.getEnded() !== true && chans[strmID].search("v=") == -1) {
        currentQuality = obj.player.getQuality();
        if (currentQuality !== strmQuality) {
            if (chans[strmID].search("v=") == -1) {
                checkQuality = chkQuality(obj.quality, strmQuality);
                obj.player.setQuality( checkQuality );
                console.info("setQuality(): v-"+ fldids[strmID] + ":", (typeof currentQuality !== "undefined" ? currentQuality.padStart(pad) : "".padStart(pad)),"->", (typeof checkQuality !== "undefined" ? checkQuality.padEnd(pad) : "".padEnd(pad)), "["+obj.player.getPlayerState().channelName+"]");
            } else {
                console.info("setQuality(): not twitch [v-"+ fldids[strmID]+"]");
            }
        }
    }
}

function chgQuality(strmID, strmQuality) {
    var length = 0,
        quality = ["auto","auto","auto"];
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
            break;
        case 10:
            length = 1;
            quality[1] = "360p30";
            break;
    }
    for(var i = 0; i < chans.length; i++) {
        getQualities(i); //"160p30" "360p30" "480p30" "720p30" "720p60" "chunked" "auto"
        setQuality(i, (i > length ? "160p30" : quality[i]) );
    }
}

///////////////////
// miscellaneous functions

function updChatIndx() {
    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
    //https://stackoverflow.com/questions/25934989
    if ( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        var chatsel = document.getElementById("chatsel"),
            chatmen = document.getElementById("chatmen"),
            indexOfSelectedChat = "",
            list = [],
            indx = chats.slice(); //indx = [...chats];

        for(var i = 0; i < chans.length; i++) {
            var indxOf = indx.indexOf(chans[i]);
            if (indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        for(; indx.length > 0; ) {
            list.push( indx.shift() );
        }

        //get 'selectedIndex' value
        var indexOfSelectedChat = chats[chatsel.selectedIndex];

        for(var i = 0; i < list.length; i++) {
            chatsel.options[i].textContent = list[i]; //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
            chatmen.options[i].textContent = list[i]; //innerHTML, value
        }

        chats = list.slice(); //chats = [...list];

        //restore 'selectedIndex' value
        indexOfSelectedChat = chats.indexOf(indexOfSelectedChat);
        chatsel.selectedIndex = indexOfSelectedChat;
        chatmen.selectedIndex = indexOfSelectedChat;
    }
}

function removeOfflineChannels() {
    var list = [];
    for(var i = (fldids.length - 1); i > -1; i--) {
        var obj = document.getElementById("v-" + fldids[i]);
        if (obj.player.isPaused() || obj.player.getEnded()) {
            list.unshift(obj.player.getPlayerState().channelName);
            remstream(fldids[i], 1);
        }
    }
    if (list.length > 0){
        console.info("removeOfflineChannels():", list.toString());
    }
}

function openFuncMenu(val) {
    if (val == undefined) {
        val = document.getElementById("funcMenuBot").style.display //funcMenuDiv
    }
    if (val) {
        document.getElementById("funcMenuTop").style.display = ""; //"inline"
        document.getElementById("funcMenuBot").style.display = ""; //"inline"
        document.getElementById("funcMenuDiv").style.right = "0px";
        document.getElementById("funcMenuDiv").style.width = "340px";
        document.getElementById("funcMenuBot").style.background = "#202023 none repeat scroll 0% 0%"; //funcMenuDiv
        document.getElementById("funcMenuBot").style.maxHeight = "" + (window.innerHeight - 50) + "px"
        // showmenu(1);
        // updmenpos();
        // layoutchg()
    } else {
        document.getElementById("funcMenuTop").style.display = "none";
        document.getElementById("funcMenuBot").style.display = "none";

        document.getElementById("funcMenuDiv").style.right = ""; //"290px", "254px"
        document.getElementById("funcMenuDiv").style.width = "";
        document.getElementById("funcMenuDiv").style.background = "";
        // chgmenu(0);
        // showmenu(0);
        // updmenpos();
        // layoutchg()
    }
}

function evtchk(event) {
    if (event.ctrlKey) {
        openmenu(0);
        openFuncMenu(0);
        updChatIndx();
        chgQuality();
        goFullScreen();
    }
}

function funcEvtChk(event) {
    if (event.ctrlKey) {
        openFuncMenu(0);
        chgQuality();
        goFullScreen();
    }
}

////////////////////////////////////////////////////////////////////////////////////////
// setup functions

function updMenuElement() {
    //https://forum.webflow.com/t/23730
    document.getElementById("menubtn").onclick = function() {
        openmenu();
        updChatIndx();
    }
}

function createFuncMenuDiv() {
    var funcMenuDiv = document.createElement("div"),
        funcMenuTop = document.createElement("div"),
        funcMenuBot = document.createElement("div"),
        fm0 = document.createElement("div"),
        removeOfflineChannelsBtn = document.createElement("button"); //https://www.w3schools.com/howto/howto_css_text_buttons.asp

    funcMenuDiv.id = "funcMenuDiv";
    funcMenuTop.id = "funcMenuTop";
    funcMenuBot.id = "funcMenuBot";
    fm0.id = "fm0";

    funcMenuTop.style = "display:none"; //https://www.w3schools.com/jsref/prop_style_display.asp
    funcMenuBot.style = "display:none";

    removeOfflineChannelsBtn.classList = "funcBtn removeOfflineChannels";
    removeOfflineChannelsBtn.textContent = "removeOfflineChannels";

    fm0.onclick = funcEvtChk;
    removeOfflineChannelsBtn.onclick = removeOfflineChannels;

    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
    document.getElementById("funcMenuDiv").appendChild(funcMenuTop);
    document.getElementById("funcMenuDiv").appendChild(funcMenuBot);
    document.getElementById("funcMenuBot").appendChild(fm0);
    document.getElementById("fm0").appendChild(removeOfflineChannelsBtn);
}

function createImgElem(id, url, alt, elemID, onclick) {
    var img = document.createElement("img"),
        src = document.getElementById(elemID); //chatwin, chatdiv
    img.id = id;
    img.src = url;
    img.alt = alt;
    img.onclick = onclick;
    src.insertBefore(img, src.firstChild); //src.appendChild(img);
}

function onReceiveImgURL(e) {
    document.removeEventListener("sendImgURL", onReceiveImgURL);
    createImgElem("functionsMenuImg", e.detail.functionsMenuImg, "", "funcMenuDiv",
        function() {
            openFuncMenu();
        }
    ); //https://stackoverflow.com/questions/33144234
    createImgElem("playerStyleImg", e.detail.playerStyleImg, "", "funcMenuDiv",
        function(event) {
            if (event.ctrlKey) {
                playpause(1);
            }
            chgQuality();
            goFullScreen();
        }
    ); //https://stackoverflow.com/questions/2735881
}

function setButtonVisibility() {
    var list = ["playerStyleImg", "functionsMenuImg"];
    list.forEach((value) => { //https://www.w3schools.com/js/js_arrow_function.asp
        var obj = document.getElementById(value)
        if (obj.style.visibility != "visible") {
            obj.style.visibility = "visible"; //https://www.w3schools.com/cssref/pr_class_visibility.asp
        }
    });
}

function onEventTrigger() {
    userQuality[0] = fldids[0];
    chgQuality();
    setButtonVisibility();
}

function setEventTrigger() {
    //https://stackoverflow.com/questions/28610365
    if (fldids.length > 0) {
        var indx = ("v-" + fldids[fldids.length - 1]),
            obj = document.getElementById(indx);

        function playingEventListener() {
            console.info("playingEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");
            rmvEvtLsnr();
            onEventTrigger();
        }
        function offlineEventListener() {
            console.info("offlineEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");
            rmvEvtLsnr();
            onEventTrigger();
        }
        function rmvEvtLsnr() {
            obj.player.removeEventListener("playing", playingEventListener);
            obj.player.removeEventListener("offline", offlineEventListener);
        }
        obj.player.addEventListener("playing", playingEventListener);
        obj.player.addEventListener("offline", offlineEventListener);
        console.info("setEventTrigger(): fldids.length ===", fldids.length);
    } else {
        setButtonVisibility();
        console.info("setEventTrigger(): no streams found");
    }
}

////////////////////////////////////////////////////////////////////////////////////////

var userQuality = [],
    useUserQuality = false,
    useChgPlayerStyleCaseOne = false;
(function() {
    updMenuElement();
    createFuncMenuDiv();
    document.addEventListener("sendImgURL", onReceiveImgURL);
    setTimeout(setEventTrigger, 100); // setEventTrigger();
})();

////////////////////////////////////////////////////////////////////////////////////////
