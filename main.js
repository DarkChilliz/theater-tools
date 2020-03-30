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
		console.error("function missingValue: Error");
	}
}

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
            // v_0_style_calc();
            // writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
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
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
            l[2] = w[2] = ( l[1] / 2 );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[2],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 5:
            v_0_style_calc();
            v_1_style_calc();
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
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
            w[1] = Math.round( missingValue(r, 0, h[1]) );
            l[1] = ( clientW - w[1] );
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
            h[3] = ( h[1] / 2 );
            w[3] = Math.round( missingValue(r, 0, (h[1] / 2)) );
            w[2] = w[1] = ( (clientW - (w[3] * 2)) / 2 );
            l[1] = ( clientW - w[1] );
            l[2] = ( l[1] - w[1] );
            t[2] = ( t[1] + h[3] );
            l[3] = w[3];
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[3],"px"], [h[3],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(4, [w[3],"px"], [h[3],"px"], [t[2],"px"], [l[3],"px"]);
            writeStyle(5, [w[3],"px"], [h[3],"px"], [t[1],"px"], ["0","%"]);
            writeStyle(6, [w[3],"px"], [h[3],"px"], [t[2],"px"], ["0","%"]);
            break;
        case 8:
            // temp
            break;
        case 9:
            //temp
            break;
    }
}

//https://stackoverflow.com/questions/2735881
(function setStylesImg() {
    var img = document.createElement("img");
    img.src = "/x20/back.png";
    img.alt = "";
    //img.title = "https://github.com/DarkChilliz/chrome-extension-twitchtheater.tv";
    img.id = "setStylesImg";
    img.onclick = main_js;
    var src = document.getElementById("chatdiv");
    src.appendChild(img);
})();

//https://stackoverflow.com/questions/33144234
document.addEventListener('yourCustomEvent', function (e)
{
    var url=e.detail;
    // console.log("received "+url);
    // (function createMenuImg() {
    //     var img = document.createElement("img");
    //     img.src = url;
    //     img.alt = "";
    //     img.id = "menuImg";
    //     img.onclick = main_js;
    //     var src = document.getElementById("chatdiv");
    //     src.appendChild(img);
    // })();
});

function setFullscreen() {
    if(screen.width == 1440 && screen.height == 900) {
        if(isfullscr()) {
            setStyles();
        } else {
            fullscrn();
            setTimeout(function() {
                setStyles();
            }, 100);
        }
    } else {
        setStyles();
    }
}

var userQuality = [];
function chgQuality() {
    //get current quality for 'fldids[0]'
    if(rncntr > 0) {
        var obj = document.getElementById("v-" + fldids[0]);
        if(userQuality[1] == fldids[0]) {
            userQuality[0] = obj.player.getQuality();
        } else {
            userQuality[1] = fldids[0];
        }
    } else {
        userQuality[1] = fldids[0];
    }

    //check if quality exists
    function chkQual(indx, sel) {
        if( indx.indexOf(sel) < 0 ) {
            return indx[0];
        } else {
            return (indx[indx.indexOf(sel)]);
        }
    }

    //get player qualities
    for(var i = 0; i < chans.length; i++) {
        var obj = document.getElementById("v-" + fldids[i]);
        if(typeof obj.quality === 'undefined') {
            if (chans[i].search("mixer=") == -1 && chans[i].search("v=") == -1) {
                var list = obj.player.getQualities();
                obj.quality = [];
                for(var x = 0; x < list.length; x++) {
                    obj.quality.push(list[x].group);
                }
            }
            if(chans[i].search("v=") > -1) {
                obj.quality = obj.player.getQualities();
            }
            if(chans[i].search("mixer=") > -1) {
                console.log("PepeLaugh 👉 mixer:", i)
            }
        }
    }

    if(chans[0].search("mixer=") == -1 && chans[0].search("v=") == -1) {
        var obj = document.getElementById("v-" + fldids[0]);
        obj.player.setQuality( userQuality[0] ? userQuality[0] : chkQual(obj.quality, "chunked") );
    }
    for(var i = 1; i < chans.length; i++) {
        var obj = document.getElementById("v-" + fldids[i]);
        if(chans[i].search("mixer=") == -1 && chans[i].search("v=") == -1) {
            obj.player.setQuality( chkQual(obj.quality, "160p30") );
        }
    }
}

var rncntr = 0, log = [];
function main_js() {
    if(rncntr < 1) {
        setTimeout(function() { //https://stackoverflow.com/questions/28610365
            var obj = document.getElementById("v-" + fldids[0]);
            function foo() {
                chgQuality(1);
                obj.player.removeEventListener("playing", foo);
            }
            obj.player.addEventListener("playing", foo);
        }, 300);
    } else {
        // chg_chatsel();
        // get_if_crashed();
        chgQuality();
        // setStyles();
    }
    setFullscreen();
    console.log(log[rncntr] ? log[rncntr] : "rncntr:", rncntr);
    rncntr++;
}
main_js();

// ## temp #############################################################################
// chans = [];
// chats = [];
// fldids = [];
// hidstr = 0;
// curcol = 1;
// curcht = -1;
// curdiv = 0;
// curtab = 1;
// sessid = -1;

//https://stackoverflow.com/questions/21441777
function getPlayers() {
    //obsolete
    return document.querySelectorAll('[id*="v-"]');
}

//https://stackoverflow.com/questions/15807021
function convertToPercentage(parentWindow, pixels) {
    //obsolete + unfinished
    return ( parentWindow - pixels ) / parentWindow; // 0.92%
}

//https://stackoverflow.com/questions/25934989
function chg_chatsel() {
    function set_chatsel_options() {
        var val = document.getElementById("chatsel");
        for(var i = 0; i < chats.length; i++) {
            val.options[i].innerHTML = chats[i];
        }
    }
    if(JSON.stringify(chats) != JSON.stringify(chans)) {
        chats = chans;
        set_chatsel_options();
    } else {
        set_chatsel_options();
    }
}

//https://stackoverflow.com/questions/19586137
function get_if_crashed() {
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

// ## end temp #########################################################################
