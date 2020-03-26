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

//https://stackoverflow.com/questions/2735881
function setStylesImg() {
    var img = document.createElement("img");
    img.src = "/x20/back.png";
    img.alt = "";
    img.id = "setStylesImg";
    img.onclick = setStyles;
    var src = document.getElementById("chatdiv");
    src.appendChild(img);
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

function chg_quality() {
    var q = ["160p30", "360p30", "480p30", "720p30", "720p60", "chunked", "auto"];
    (function () {
        var obj = document.getElementById("v-" + fldids[0]);
        if(obj.player.getQuality() != q[5] && q.includes(obj.player.getQuality())) {
            obj.player.setQuality(q[5]);
        }
    })();
    for(var i = 1; i < chans.length; i++) {
        var obj = document.getElementById("v-" + fldids[i]);
        if(obj.player.getQuality() != q[0] && q.includes(obj.player.getQuality())) {
            obj.player.setQuality(q[0]);
        }
    }
}

// ## temp #############################################################################

//https://stackoverflow.com/questions/15807021
function convertToPercentage(parentWindow, pixels) {
    //obsolete + unfinished
    return ( parentWindow - pixels ) / parentWindow; // 0.92%
}

//https://stackoverflow.com/questions/21441777
function getPlayers() {
    //obsolete
    return document.querySelectorAll('[id*="v-"]');
}

function get_if_crashed() {
    // document.getElementById("volval").addEventListener("keydown", function(event) {
    //     chgvolval(this, event.keyCode == 40 ? -5 : (event.keyCode == 38 ? 5 : 0))
    // });
    // obj.player.isPaused()
    // addEventListener(event:String, callback:Function)
    // Twitch.Player.PAUSE

    // var obj = document.getElementById("v-" + val);
    // obj.player.addEventListener("ready", function() {
    //     initevt(val)
    // });
}

// ## end temp #########################################################################

function setStyles() {
    chg_chatsel();
    chg_quality();
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
        document.getElementById("v-" + fldids[p]).style = "width: " + w[0] + w[1] + "; height: " + h[0] + h[1] + "; top: " + t[0] + t[1] + "; left: " + l[0] + l[1] + ";";
    }
    switch(chans.length) {
        case 0:
            break;
        case 1:
            v_0_style_calc();
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
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
            w[1] = ( clientW / 4 );
            l[1] = ( clientW - w[1] );
            l[2] = ( l[1] - w[1] );
            l[3] = ( l[2] - w[1] );
            writeStyle(0, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(1, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(2, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(3, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(4, [w[1],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
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
            // temp
            break;
        case 8:
            // temp
            break;
        case 9:
            //temp
            break;
    }
}
setStylesImg(); // https://github.com/DarkChilliz/chrome-extension-twitchtheater.tv
setStyles();
