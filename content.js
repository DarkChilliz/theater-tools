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

//https://stackoverflow.com/questions/21441777/js-how-to-get-list-of-divs-with-similar-class-name
function getPlayers() {
    return document.querySelectorAll('[id*="v-"]');
}

function setStyles() {
    var clientW = document.getElementById("playdiv").clientWidth;
    var clientH = document.getElementById("playdiv").clientHeight;
    const r = 1.778;
    var p = getPlayers();
    var w = [];
    var h = [];
    var t = [];
    var l = [];
    function v_0_style_calc() {
        w[0] = Math.round( clientW );
        h[0] = Math.round( missingValue( r, w[0], 0 ) );
    }
    function v_1_style_calc() {
        h[1] = Math.round( clientH - h[0] );
        t[1] = ( clientH - h[1] );
    }
    function writeStyle(p, w, h, t, l) {
        document.getElementById(p).style = "width: " + w[0] + w[1] + "; height: " + h[0] + h[1] + "; top: " + t[0] + t[1] + "; left: " + l[0] + l[1] + ";";
    }
    switch(p.length) {
        case 0:
            break;
        case 1:
            v_0_style_calc();
            writeStyle(p[0].id, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            break;
        case 2:
            v_0_style_calc();
            v_1_style_calc();
            writeStyle(p[0].id, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(p[1].id, [w[0],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 3:
            v_0_style_calc();
            w[1] = ( clientW / 2 );
            v_1_style_calc();
            l[1] = ( clientW / 2 );
            writeStyle(p[0].id, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(p[1].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(p[2].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 4:
            v_0_style_calc();
            v_1_style_calc();
            w[1] = Math.round( missingValue( r, 0, h[1] ) );
            l[1] = ( clientW - w[1] );
            l[2] = w[2] = ( l[1] / 2 );
            writeStyle(p[0].id, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(p[1].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(p[2].id, [w[2],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(p[3].id, [w[2],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 5:
            v_0_style_calc();
            v_1_style_calc();
            w[1] = ( clientW / 4 );
            l[1] = ( clientW - w[1] );
            l[2] = ( l[1] - w[1] );
            l[3] = ( l[2] - w[1] );
            writeStyle(p[0].id, [w[0],"px"], [h[0],"px"], ["0","%"], ["0","%"]);
            writeStyle(p[1].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[1],"px"]);
            writeStyle(p[2].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[2],"px"]);
            writeStyle(p[3].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], [l[3],"px"]);
            writeStyle(p[4].id, [w[1],"px"], [h[1],"px"], [t[1],"px"], ["0","%"]);
            break;
        case 6:
            // temp
            break;
        case 7:
            // temp
            break;
        case 8:
            // temp
            break;
    }
}

function setStylesImg() {
    var img = document.createElement("img");
    img.src = "/x20/back.png";
    img.alt = "";
    img.id = "setStylesImg";
    img.onclick = setStyles;
    var src = document.getElementById("chatdiv");
    src.appendChild(img);
}

setStylesImg();
setStyles();
