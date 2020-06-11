//
// pepeLaugh 👉 https://www.youtube.com/watch?v=9OG-Qr1qAe4
//

//https://www.silisoftware.com/tools/screen_aspect_ratio_calculator
function missingValue(aspect_ratio, width, height) {
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

//var setStylesCtr = 0;
function setStyles() {
    var clientW = document.getElementById("playdiv").clientWidth
      , clientH = document.getElementById("playdiv").clientHeight
      , w = [], h = [], t = [], l = [];
    const r = 1.778;
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
            if(useSetStylesCaseOne === true) {
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
            console.log("setStyles: player number out of range ( > 9 )")
    }
    console.log("setStyles:", setStylesCtr);
    setStylesCtr++;
}

//https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
(function removeElement() {
    var element = document.getElementById("chattog");
    element.style.display = "none";
    //element.parentNode.removeChild(element);
})();

//https://stackoverflow.com/questions/2735881
(function setStylesImg() {
    var img = document.createElement("img");
    img.id = "setStylesImg";
    img.src = "/x20/back.png";
    img.alt = "";
    //img.title = "";
    img.onclick = main_js;
    var src = document.getElementById("chatdiv");
    src.appendChild(img);
})();

//https://stackoverflow.com/questions/33144234
// document.addEventListener("yourCustomEvent", function (e)
// {
//     var url=e.detail;
//     console.log("received "+url);
//     (function createMenuImg() {
//         var img = document.createElement("img");
//         img.src = url;
//         img.alt = "";
//         img.id = "menuImg";
//         img.onclick = main_js;
//         var src = document.getElementById("chatdiv");
//         src.appendChild(img);
//     })();
// });

//var setFullscreenCtr = 0;
function setFullscreen() {
    if(screen.width == 1440 && screen.height == 900) {
        if(isfullscr()) {
            setStyles();
        } else {
            gofullscr();
            setTimeout(function() {
                setStyles();
            }, 100);
        }
    } else {
        setStyles();
    }
    console.log("setFullscreen:", setFullscreenCtr);
    setFullscreenCtr++;
}

//var chgQualityCtr = 0, userQuality = [], loaded_var = 0;
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
                    console.log("v-" + fldids[0] + ":", currentQuality,"->" ,userSetQuality,"|", hardCodeQuality);
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
                        console.log("v-" + fldids[i] + ":", currentQuality,"->", checkQuality,"|", hardCodeQuality);
                    } else {
                        console.log("chgQuality().div_b(): not twitch", i);
                    }
                }
            }
        }
    }

    if(runCtr > 0 && loaded_var > 0) {
        var obj = document.getElementById("v-" + fldids[0]);
        if(useUserQuality === true && obj.player.getEnded() !== true && userQuality[0] === fldids[0] && typeof obj.quality !== "undefined") {
            if(userQuality[1] !== obj.player.getQuality()) {
                userQuality[1] = obj.player.getQuality();
                console.log("v-" + fldids[0] + ":", "userQuality[1] =", userQuality[1]);
            }
        } else if(userQuality[0] !== fldids[0]) {
            userQuality[0] = fldids[0];
        }
        get_qualities();
        div_a();
        div_b();
    } else {
        userQuality[0] = fldids[0];
    }
    console.log("chgQuality:", chgQualityCtr);
    chgQualityCtr++;
}

//https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
//https://stackoverflow.com/questions/25934989
//var chgChatSelCtr = 0;
function chgChatSel() {
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

        console.log("chgChatSel:", chgChatSelCtr);
        chgChatSelCtr++;
    }
}

function loadedVar() {
    console.log("loaded_var:", loaded_var, "->", (loaded_var++ + 1));
}

function evtchk(event) {
    if (event.ctrlKey) {
        openmenu(0);
        chgChatSel();
        setFullscreen();
        chgQuality();
    }
}

var runCtr = 0,
    useUserQuality = false,
    useSetStylesCaseOne = false,
    setStylesCtr = 0,
    setFullscreenCtr = 0,
    chgQualityCtr = 0,
    userQuality = [],
    loaded_var = 0,
    chgChatSelCtr = 0;
function main_js() {
    if(runCtr < 1) {
        //https://forum.webflow.com/t/23730
        document.getElementById("menubtn").onclick = function() {
            openmenu();
            chgChatSel();
        }
        //https://stackoverflow.com/questions/28610365
        setTimeout(function() {
            if(fldids.length > 0) {
                var obj = document.getElementById("v-" + fldids[0]);
                function setQualityOnPlaying() {
                    loadedVar();
                    obj.player.removeEventListener("playing", setQualityOnPlaying);
                    obj.player.removeEventListener("ended", setQualityOnEnded);
                    setTimeout(chgQuality, 1000);
                }
                function setQualityOnEnded() {
                    loadedVar();
                    obj.player.removeEventListener("ended", setQualityOnEnded);
                    obj.player.removeEventListener("playing", setQualityOnPlaying);
                    setTimeout(chgQuality, 3000);
                }
                obj.player.addEventListener("playing", setQualityOnPlaying);
                obj.player.addEventListener("ended", setQualityOnEnded);
                // get_if_crashed();
            } else {
                loadedVar();
            }
        }, 500);
    }
    chgChatSel();
    setFullscreen();
    chgQuality();
    console.log("runcounter:", runCtr);
    runCtr++;
}

//main_js first run
(function() {
    main_js();
    //temp increment loaded_var as backup
    setTimeout(function() {
        if(loaded_var < 1) {
            loadedVar();
        }
    }, 9000);
})();

// ## temp #############################################################################

//https://stackoverflow.com/questions/19586137
function get_if_crashed() { //unfinished
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
                console.log(fldids[i]);
            });
        })();
    }
    for(var i = 0; i < chans.length; i++){
        createfunc(i);
    }
}

//https://stackoverflow.com/questions/21441777
function getPlayers() { //obsolete
    return document.querySelectorAll("[id*=\"v-\"]");
}

//https://stackoverflow.com/questions/15807021
function convertToPercentage(parentWindow, pixels) { //obsolete & unfinished
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
