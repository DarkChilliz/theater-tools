"use strict";

// Set Player Styles ///////////////////////////////////////////////////////////////////

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
        }
        else if (height && !width) {
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
    const r = 1.7777777777777777; //1.778
    var clientW = Math.round( document.getElementById("playdiv").clientWidth );
    var clientH = Math.round( document.getElementById("playdiv").clientHeight );
    var w = []; // width
    var h = []; // height
    var t = []; // top
    var l = []; // left
    var playerNotConfigured = function() {
            styledConsoleLog(0, "chgPlayerStyle", "not configured for [" + fldids.length + "] players");
        };
    var useChgPlayerStyleCaseOne = Settings.get("useChgPlayerStyleCaseOne");

    //1920x1080 (16:9 aspect ratio)
    if (screen.width / screen.height == 1.7777777777777777 || screen.width == 1920 && screen.height == 1080) {
        switch(chans.length) { //unfinished
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === true) {
                    w[0] = clientW;
                    h[0] = Math.round( missingValue( r, w[0], 0 ) );
                    //top
                    writeStyle(0, w[0], h[0], 0, 0);
                }
                break;
            case 2:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[0], h[1], t[1], 0);
                break;
            case 3:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                w[1] = clientW / 2;
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                l[0] = w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], 0);
                break;
            case 4:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = clientW / 3;
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], 0);
                break;
            case 5:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = clientW / 4;
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                w[2] = l[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], 0);
                break;
            case 6:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                //
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                w[2] = l[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[1], t[1], 0);
                break;
            case 7:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                w[2] = l[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[2], t[1], 0);
                writeStyle(6, w[2], h[2], t[2], 0);
                break;
            case 8:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 3;
                //
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                //
                w[2] = l[3];
                w[3] = l[3] / 2;
                l[4] = w[3];
                h[4] = Math.round( missingValue( r, w[3], 0 ) );
                h[3] = h[1] - h[4];
                t[2] = t[1] + h[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5 top
                writeStyle(5, w[2], h[3], t[1], 0);
                //stack 5 bot
                writeStyle(6, w[3], h[4], t[2], l[4]);
                writeStyle(7, w[3], h[4], t[2], 0);
                break;
            case 9: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - (w[2] * 2) - (w[1] * 3);
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[3], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[2], t[1], l[4]);
                writeStyle(6, w[2], h[2], t[4], l[4]);
                //stack 6
                writeStyle(7, w[2], h[2], t[1], 0);
                writeStyle(8, w[2], h[2], t[4], 0);
                break;
            case 10:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //
                l[2] = w[2] * 3;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[3], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[2], h[2], t[1], l[3]);
                writeStyle(5, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle(6, w[2], h[2], t[1], l[4]);
                writeStyle(7, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(8, w[2], h[2], t[1], 0);
                writeStyle(9, w[2], h[2], t[2], 0);
                break;
            case 11: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //
                l[2] = w[2] * 3;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[2], t[1], l[2]);
                writeStyle( 4, w[3], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], 0);
                writeStyle(10, w[2], h[2], t[2], 0);
                break;
            case 12:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //
                l[2] = w[2] * 4;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[1], t[1], l[2]);
                //stack 4
                writeStyle( 4, w[2], h[2], t[1], l[3]);
                writeStyle( 5, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 6, w[2], h[2], t[1], l[4]);
                writeStyle( 7, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 8, w[2], h[2], t[1], l[5]);
                writeStyle( 9, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(10, w[2], h[2], t[1], 0);
                writeStyle(11, w[2], h[2], t[2], 0);
                break;
            case 13:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //
                l[2] = w[2] * 4;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[2], t[1], l[2]);
                writeStyle( 4, w[3], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], 0);
                writeStyle(12, w[2], h[2], t[2], 0);
                break;
            case 14:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 5;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 4;
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[2], t[1], l[1]);
                writeStyle( 3, w[3], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], 0);
                writeStyle(13, w[2], h[2], t[2], 0);
                break;
            case 15:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 6;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 5;
                l[3] = w[2] * 4;
                l[4] = w[2] * 3;
                l[5] = w[2] * 2;
                l[6] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[2], h[2], t[1], l[2]);
                writeStyle( 4, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], l[6]);
                writeStyle(12, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(13, w[2], h[2], t[1], 0);
                writeStyle(14, w[2], h[2], t[2], 0);
                break;
            case 16:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 6;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 5;
                l[3] = w[2] * 4;
                l[4] = w[2] * 3;
                l[5] = w[2] * 2;
                l[6] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[2], t[1], l[1]);
                writeStyle( 3, w[3], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], l[6]);
                writeStyle(13, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(14, w[2], h[2], t[1], 0);
                writeStyle(15, w[2], h[2], t[2], 0);
                break;
            case 17: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[2], h[2], t[1], l[2]);
                writeStyle( 4, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], l[6]);
                writeStyle(12, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(13, w[2], h[2], t[1], l[7]);
                writeStyle(14, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(15, w[2], h[2], t[1], 0);
                writeStyle(16, w[2], h[2], t[2], 0);
                break;
            case 18:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[2], h[2], t[1], l[1]);
                writeStyle( 3, w[2], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], l[6]);
                writeStyle(13, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(14, w[2], h[2], t[1], l[7]);
                writeStyle(15, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(16, w[2], h[2], t[1], 0);
                writeStyle(17, w[2], h[2], t[2], 0);
                break;
            case 19:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[2], t[1], l[0]);
                writeStyle( 2, w[1], h[2], t[2], l[0]);
                //stack 2
                writeStyle( 3, w[2], h[2], t[1], l[1]);
                writeStyle( 4, w[2], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 5, w[2], h[2], t[1], l[2]);
                writeStyle( 6, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 7, w[2], h[2], t[1], l[3]);
                writeStyle( 8, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 9, w[2], h[2], t[1], l[4]);
                writeStyle(10, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(11, w[2], h[2], t[1], l[5]);
                writeStyle(12, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(13, w[2], h[2], t[1], l[6]);
                writeStyle(14, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(15, w[2], h[2], t[1], l[7]);
                writeStyle(16, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(17, w[2], h[2], t[1], 0);
                writeStyle(18, w[2], h[2], t[2], 0);
                break;
            case 20:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                // w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                writeStyle( 2, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 3, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 4, w[1], h[2], t[2], l[4]); // row   3
                writeStyle( 5, w[1], h[2], t[0], l[3]); // row 1
                writeStyle( 6, w[1], h[2], t[1], l[3]); // row  2
                writeStyle( 7, w[1], h[2], t[2], l[3]); // row   3
                writeStyle( 8, w[1], h[2], t[0], l[2]); // row 1
                writeStyle( 9, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(10, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(11, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(12, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(13, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(14, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(15, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(16, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(17, w[1], h[2], t[0], 0);    // row 1
                writeStyle(18, w[1], h[2], t[1], 0);    // row  2
                writeStyle(19, w[1], h[2], t[2], 0);    // row   3
                break;
            case 21:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[0], 0, w[0]);
                //
                writeStyle( 3, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 4, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 5, w[1], h[2], t[2], l[4]); // row   3
                writeStyle( 6, w[1], h[2], t[0], l[3]); // row 1
                writeStyle( 7, w[1], h[2], t[1], l[3]); // row  2
                writeStyle( 8, w[1], h[2], t[2], l[3]); // row   3
                writeStyle( 9, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(10, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(11, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(12, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(13, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(14, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(15, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(16, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(17, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(18, w[1], h[2], t[0], 0);    // row 1
                writeStyle(19, w[1], h[2], t[1], 0);    // row  2
                writeStyle(20, w[1], h[2], t[2], 0);    // row   3
                break;
            case 22:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 2;
                t[3] = h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                //
                writeStyle( 4, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 5, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 6, w[1], h[2], t[2], l[4]); // row   3
                writeStyle( 7, w[1], h[2], t[0], l[3]); // row 1
                writeStyle( 8, w[1], h[2], t[1], l[3]); // row  2
                writeStyle( 9, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(10, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(11, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(12, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(13, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(14, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(15, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(16, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(17, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(18, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(19, w[1], h[2], t[0], 0);    // row 1
                writeStyle(20, w[1], h[2], t[1], 0);    // row  2
                writeStyle(21, w[1], h[2], t[2], 0);    // row   3
                break;
            case 23:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 3;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                //
                writeStyle( 5, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 6, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 7, w[1], h[2], t[2], l[4]); // row   3
                writeStyle( 8, w[1], h[2], t[0], l[3]); // row 1
                writeStyle( 9, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(10, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(11, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(12, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(13, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(14, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(15, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(16, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(17, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(18, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(19, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(20, w[1], h[2], t[0], 0);    // row 1
                writeStyle(21, w[1], h[2], t[1], 0);    // row  2
                writeStyle(22, w[1], h[2], t[2], 0);    // row   3
                break;
            case 24:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 4;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                writeStyle( 5, w[1], h[4], t[5], w[0]);
                //
                writeStyle( 6, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 7, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 8, w[1], h[2], t[2], l[4]); // row   3
                writeStyle( 9, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(10, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(11, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(12, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(13, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(14, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(15, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(16, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(17, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(18, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(19, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(20, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(21, w[1], h[2], t[0], 0);    // row 1
                writeStyle(22, w[1], h[2], t[1], 0);    // row  2
                writeStyle(23, w[1], h[2], t[2], 0);    // row   3
                break;
            case 25:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 5;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                t[6] = t[5] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                writeStyle( 5, w[1], h[4], t[5], w[0]);
                writeStyle( 6, w[1], h[4], t[6], w[0]);
                //
                writeStyle( 7, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 8, w[1], h[2], t[1], l[4]); // row  2
                writeStyle( 9, w[1], h[2], t[2], l[4]); // row   3
                writeStyle(10, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(11, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(12, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(13, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(14, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(15, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(16, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(17, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(18, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(19, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(20, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(21, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(22, w[1], h[2], t[0], 0);    // row 1
                writeStyle(23, w[1], h[2], t[1], 0);    // row  2
                writeStyle(24, w[1], h[2], t[2], 0);    // row   3
                break;
            case 26:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 6;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                t[6] = t[5] + h[4];
                t[7] = t[6] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                writeStyle( 5, w[1], h[4], t[5], w[0]);
                writeStyle( 6, w[1], h[4], t[6], w[0]);
                writeStyle( 7, w[1], h[4], t[7], w[0]);
                //
                writeStyle( 8, w[1], h[2], t[0], l[4]); // row 1
                writeStyle( 9, w[1], h[2], t[1], l[4]); // row  2
                writeStyle(10, w[1], h[2], t[2], l[4]); // row   3
                writeStyle(11, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(12, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(13, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(14, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(15, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(16, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(17, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(18, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(19, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(20, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(21, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(22, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(23, w[1], h[2], t[0], 0);    // row 1
                writeStyle(24, w[1], h[2], t[1], 0);    // row  2
                writeStyle(25, w[1], h[2], t[2], 0);    // row   3
                break;
            case 27:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 7;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                t[6] = t[5] + h[4];
                t[7] = t[6] + h[4];
                t[8] = t[7] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                writeStyle( 5, w[1], h[4], t[5], w[0]);
                writeStyle( 6, w[1], h[4], t[6], w[0]);
                writeStyle( 7, w[1], h[4], t[7], w[0]);
                writeStyle( 8, w[1], h[4], t[8], w[0]);
                //
                writeStyle( 9, w[1], h[2], t[0], l[4]); // row 1
                writeStyle(10, w[1], h[2], t[1], l[4]); // row  2
                writeStyle(11, w[1], h[2], t[2], l[4]); // row   3
                writeStyle(12, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(13, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(14, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(15, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(16, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(17, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(18, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(19, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(20, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(21, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(22, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(23, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(24, w[1], h[2], t[0], 0);    // row 1
                writeStyle(25, w[1], h[2], t[1], 0);    // row  2
                writeStyle(26, w[1], h[2], t[2], 0);    // row   3
                break;
            case 28:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 8;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                t[6] = t[5] + h[4];
                t[7] = t[6] + h[4];
                t[8] = t[7] + h[4];
                t[9] = t[8] + h[4];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                // down right
                writeStyle( 2, w[1], h[4],    0, w[0]);
                writeStyle( 3, w[1], h[4], t[3], w[0]);
                writeStyle( 4, w[1], h[4], t[4], w[0]);
                writeStyle( 5, w[1], h[4], t[5], w[0]);
                writeStyle( 6, w[1], h[4], t[6], w[0]);
                writeStyle( 7, w[1], h[4], t[7], w[0]);
                writeStyle( 8, w[1], h[4], t[8], w[0]);
                writeStyle( 9, w[1], h[4], t[9], w[0]);
                //
                writeStyle(10, w[1], h[2], t[0], l[4]); // row 1
                writeStyle(11, w[1], h[2], t[1], l[4]); // row  2
                writeStyle(12, w[1], h[2], t[2], l[4]); // row   3
                writeStyle(13, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(14, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(15, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(16, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(17, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(18, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(19, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(20, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(21, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(22, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(23, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(24, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(25, w[1], h[2], t[0], 0);    // row 1
                writeStyle(26, w[1], h[2], t[1], 0);    // row  2
                writeStyle(27, w[1], h[2], t[2], 0);    // row   3
                break;
            case 29:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[0] = clientH - h[1];
                //
                h[2] = h[1] / 2; //main hight
                w[1] = Math.round( missingValue( r, 0, h[2] ) );
                //
                h[0] -= h[2];
                w[0] = Math.round( missingValue( r, 0, h[0] ) );
                //
                t[0] -= h[2];
                t[1] = t[0] + h[2];
                t[2] = t[1] + h[2];
                h[3] = clientH - t[0];
                //
                l[0] = w[1];
                l[1] = l[0] + w[1];
                l[2] = l[1] + w[1];
                l[3] = l[2] + w[1];
                l[4] = l[3] + w[1];
                l[5] = l[4] + w[1];
                w[2] = clientW - l[5];
                //
                h[4] = h[0] / 8;
                t[3] = h[4];
                t[4] = t[3] + h[4];
                t[5] = t[4] + h[4];
                t[6] = t[5] + h[4];
                t[7] = t[6] + h[4];
                t[8] = t[7] + h[4];
                t[9] = t[8] + h[4];
                //
                w[2] /= 2;
                l[6] = l[5] + w[2];
                //
                writeStyle( 0, w[0], h[0], 0, 0);
                //
                writeStyle( 1, w[2], h[3], t[0], l[5]); // row 0
                writeStyle( 2, w[2], h[3], t[0], l[6]); // row 0
                // down right
                writeStyle( 3, w[1], h[4],    0, w[0]);
                writeStyle( 4, w[1], h[4], t[3], w[0]);
                writeStyle( 5, w[1], h[4], t[4], w[0]);
                writeStyle( 6, w[1], h[4], t[5], w[0]);
                writeStyle( 7, w[1], h[4], t[6], w[0]);
                writeStyle( 8, w[1], h[4], t[7], w[0]);
                writeStyle( 9, w[1], h[4], t[8], w[0]);
                writeStyle(10, w[1], h[4], t[9], w[0]);
                //
                writeStyle(11, w[1], h[2], t[0], l[4]); // row 1
                writeStyle(12, w[1], h[2], t[1], l[4]); // row  2
                writeStyle(13, w[1], h[2], t[2], l[4]); // row   3
                writeStyle(14, w[1], h[2], t[0], l[3]); // row 1
                writeStyle(15, w[1], h[2], t[1], l[3]); // row  2
                writeStyle(16, w[1], h[2], t[2], l[3]); // row   3
                writeStyle(17, w[1], h[2], t[0], l[2]); // row 1
                writeStyle(18, w[1], h[2], t[1], l[2]); // row  2
                writeStyle(19, w[1], h[2], t[2], l[2]); // row   3
                writeStyle(20, w[1], h[2], t[0], l[1]); // row 1
                writeStyle(21, w[1], h[2], t[1], l[1]); // row  2
                writeStyle(22, w[1], h[2], t[2], l[1]); // row   3
                writeStyle(23, w[1], h[2], t[0], l[0]); // row 1
                writeStyle(24, w[1], h[2], t[1], l[0]); // row  2
                writeStyle(25, w[1], h[2], t[2], l[0]); // row   3
                writeStyle(26, w[1], h[2], t[0], 0);    // row 1
                writeStyle(27, w[1], h[2], t[1], 0);    // row  2
                writeStyle(28, w[1], h[2], t[2], 0);    // row   3
                break;
            default:
                playerNotConfigured();
        }
    //1440x900 (16:10 aspect ratio)
    }
    else if (screen.width / screen.height == 1.6 || screen.width == 1440 && screen.height == 900) {
        switch(chans.length) {
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === true) {
                    w[0] = clientW;
                    h[0] = Math.round( missingValue( r, w[0], 0 ) );
                    //top
                    writeStyle(0, w[0], h[0], 0, 0);
                }
                break;
            case 2:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[0], h[1], t[1], 0);
                break;
            case 3:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                w[1] = clientW / 2;
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                l[0] = w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], 0);
                break;
            case 4:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                l[0] = clientW - w[1];
                //
                l[1] = w[2] = l[0] / 2;
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[2], h[1], t[1], 0);
                break;
            case 5:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                l[0] = clientW - w[1];
                //
                h[3] = h[1] / 2;
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                // l[1] = l[0] - w[3];
                t[2] = t[1] + h[3];
                w[2] = l[0] - w[3];
                l[1] = w[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[3], h[3], t[1], 0);
                writeStyle(4, w[3], h[3], t[2], 0);
                break;
            case 6:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - ( w[1] + w[2] );
                //
                h[3] = Math.round( missingValue( r, w[3], 0 ) );
                h[4] = h[1] - h[3];
                t[3] = t[1] + h[3];
                //
                l[2] = w[3];
                l[0] = w[3] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                //stack 3 top
                writeStyle(2, w[3], h[3], t[1], 0);
                //stack 3 bot
                writeStyle(5, w[3], h[4], t[3], 0);
                break;
            case 7:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - ( w[1] + w[2] );
                w[4] = w[3] / 2;
                //
                h[4] = Math.round( missingValue( r, w[4], 0 ) );
                h[3] = h[1] - h[4];
                t[3] = t[1] + h[3];
                //
                l[2] = w[3];
                l[1] = w[4];
                l[0] = w[3] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                //stack 3 top
                writeStyle(2, w[3], h[3], t[1], 0);
                //stack 3 bot
                writeStyle(5, w[4], h[4], t[3], l[1]);
                writeStyle(6, w[4], h[4], t[3], 0);
                break;
            case 8:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                w[4] = w[0] - ( w[3] + w[2] + w[1] );
                //
                l[1] = w[3];
                l[2] = w[3] + w[4];
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[2], l[2]);
                //stack 3
                writeStyle(4, w[4], h[2], t[1], l[1]);
                writeStyle(5, w[4], h[2], t[2], l[1]);
                //stack 4
                writeStyle(6, w[3], h[2], t[1], 0);
                writeStyle(7, w[3], h[2], t[2], 0);
                break;
            case 9:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                w[4] = w[0] - ( w[3] + w[2] + w[1] );
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[1] = w[3];
                l[2] = l[1] + w[4];
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[4], l[2]);
                //stack 3
                writeStyle(4, w[4], h[2], t[1], l[1]);
                writeStyle(5, w[4], h[2], t[4], l[1]);
                //stack 4
                writeStyle(6, w[3], h[3], t[1], 0);
                writeStyle(7, w[3], h[3], t[2], 0);
                writeStyle(8, w[3], h[3], t[3], 0);
                break;
            case 10:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[1] = w[3];
                l[2] = w[3] * 2;
                w[2] = w[0] - ( l[2] + w[1] );
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[4], l[2]);
                //stack 3
                writeStyle(4, w[3], h[3], t[1], l[1]);
                writeStyle(5, w[3], h[3], t[2], l[1]);
                writeStyle(6, w[3], h[3], t[3], l[1]);
                //stack 4
                writeStyle(7, w[3], h[3], t[1], 0);
                writeStyle(8, w[3], h[3], t[2], 0);
                writeStyle(9, w[3], h[3], t[3], 0);
                break;
            case 11:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[0] = w[2] * 3;
                //
                w[1] = w[0] - l[0]; //Math.round( missingValue( r, 0, h[1] ) );
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[2], l[2]);
                writeStyle(4, w[2], h[2], t[3], l[2]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[1]);
                writeStyle(6, w[2], h[2], t[2], l[1]);
                writeStyle(7, w[2], h[2], t[3], l[1]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], 0);
                writeStyle( 9, w[2], h[2], t[2], 0);
                writeStyle(10, w[2], h[2], t[3], 0);
                break;
            case 12:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[3]);
                //stack 3
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                writeStyle(5, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(6, w[2], h[2], t[1], l[1]);
                writeStyle(7, w[2], h[2], t[2], l[1]);
                writeStyle(8, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle( 9, w[2], h[2], t[1], 0);
                writeStyle(10, w[2], h[2], t[2], 0);
                writeStyle(11, w[2], h[2], t[3], 0);
                break;
            case 13:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                h[3] = h[1] / 2;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                t[4] = t[1] + h[3];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[3], t[1], l[3]);
                writeStyle(3, w[2], h[3], t[4], l[3]);
                //stack 3
                writeStyle(4, w[2], h[2], t[1], l[2]);
                writeStyle(5, w[2], h[2], t[2], l[2]);
                writeStyle(6, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(7, w[2], h[2], t[1], l[1]);
                writeStyle(8, w[2], h[2], t[2], l[1]);
                writeStyle(9, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(10, w[2], h[2], t[1], 0);
                writeStyle(11, w[2], h[2], t[2], 0);
                writeStyle(12, w[2], h[2], t[3], 0);
                break;
            case 14:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[3]);
                writeStyle(3, w[2], h[2], t[2], l[3]);
                writeStyle(4, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[2]);
                writeStyle(6, w[2], h[2], t[2], l[2]);
                writeStyle(7, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], l[1]);
                writeStyle( 9, w[2], h[2], t[2], l[1]);
                writeStyle(10, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(11, w[2], h[2], t[1], 0);
                writeStyle(12, w[2], h[2], t[2], 0);
                writeStyle(13, w[2], h[2], t[3], 0);
                break;
            case 15:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = h[1] / 2;
                t[4] = t[1] + h[3];
                //
                h[4] = h[1] - h[2];
                h[5] = h[1] - h[4];
                t[5] = t[1] + h[4];
                w[3] = clientW - l[4];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[3], h[4], t[1], l[4]);
                writeStyle(2, w[3], h[5], t[5], l[4]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[3]);
                writeStyle(4, w[2], h[2], t[2], l[3]);
                writeStyle(5, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle(6, w[2], h[2], t[1], l[2]);
                writeStyle(7, w[2], h[2], t[2], l[2]);
                writeStyle(8, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle( 9, w[2], h[2], t[1], l[1]);
                writeStyle(10, w[2], h[2], t[2], l[1]);
                writeStyle(11, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(12, w[2], h[2], t[1], 0);
                writeStyle(13, w[2], h[2], t[2], 0);
                writeStyle(14, w[2], h[2], t[3], 0);
                break;
            case 16:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                h[3] = h[1] / 2;
                t[4] = t[1] + h[3];
                //
                h[4] = h[1] - h[2];
                h[5] = h[1] - h[4];
                t[5] = t[1] + h[4];
                w[1] = clientW - l[0];
                w[3] = w[1] / 2;
                l[4] = l[0] + w[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[4], t[1], l[0]);
                writeStyle(2, w[3], h[5], t[5], l[4]);
                writeStyle(3, w[3], h[5], t[5], l[0]);
                //stack 2
                writeStyle(4, w[2], h[2], t[1], l[3]);
                writeStyle(5, w[2], h[2], t[2], l[3]);
                writeStyle(6, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle( 7, w[2], h[2], t[1], l[2]);
                writeStyle( 8, w[2], h[2], t[2], l[2]);
                writeStyle( 9, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(10, w[2], h[2], t[1], l[1]);
                writeStyle(11, w[2], h[2], t[2], l[1]);
                writeStyle(12, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(13, w[2], h[2], t[1], 0);
                writeStyle(14, w[2], h[2], t[2], 0);
                writeStyle(15, w[2], h[2], t[3], 0);
                break;
            case 17:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = Math.round( missingValue( r, w[1], 0 ) );
                h[4] = h[1] - h[3];
                t[4] = t[1] + h[3];
                //
                w[3] = Math.round( missingValue( r, 0, h[4] ) );
                w[4] = (w[1] + w[2]) - w[3];
                l[5] = l[4] + w[4];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[3], t[1], l[0]);
                writeStyle(2, w[3], h[4], t[4], l[5]);
                //stack 2
                writeStyle(4, w[2], h[3], t[1], l[4]);
                writeStyle(3, w[4], h[4], t[4], l[4]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[3]);
                writeStyle(6, w[2], h[2], t[2], l[3]);
                writeStyle(7, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], l[2]);
                writeStyle( 9, w[2], h[2], t[2], l[2]);
                writeStyle(10, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(11, w[2], h[2], t[1], l[1]);
                writeStyle(12, w[2], h[2], t[2], l[1]);
                writeStyle(13, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(14, w[2], h[2], t[1], 0);
                writeStyle(15, w[2], h[2], t[2], 0);
                writeStyle(16, w[2], h[2], t[3], 0);
                break;
            case 18:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = Math.round( missingValue( r, w[1], 0 ) );
                h[4] = h[1] - h[3];
                t[4] = t[1] + h[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[3], t[1], l[0]);
                writeStyle(2, w[1], h[4], t[4], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[4]);
                writeStyle(4, w[2], h[2], t[2], l[4]);
                writeStyle(5, w[2], h[2], t[3], l[4]);
                //stack 3
                writeStyle(6, w[2], h[2], t[1], l[3]);
                writeStyle(7, w[2], h[2], t[2], l[3]);
                writeStyle(8, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle( 9, w[2], h[2], t[1], l[2]);
                writeStyle(10, w[2], h[2], t[2], l[2]);
                writeStyle(11, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(12, w[2], h[2], t[1], l[1]);
                writeStyle(13, w[2], h[2], t[2], l[1]);
                writeStyle(14, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(15, w[2], h[2], t[1], 0);
                writeStyle(16, w[2], h[2], t[2], 0);
                writeStyle(17, w[2], h[2], t[3], 0);
                break;
            case 19:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = w[0] / 6;
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[2], h[2], t[1], l[0]);
                writeStyle(2, w[2], h[2], t[2], l[0]);
                writeStyle(3, w[2], h[2], t[3], l[0]);
                //stack 2
                writeStyle(4, w[2], h[2], t[1], l[4]);
                writeStyle(5, w[2], h[2], t[2], l[4]);
                writeStyle(6, w[2], h[2], t[3], l[4]);
                //stack 3
                writeStyle(7, w[2], h[2], t[1], l[3]);
                writeStyle(8, w[2], h[2], t[2], l[3]);
                writeStyle(9, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle(10, w[2], h[2], t[1], l[2]);
                writeStyle(11, w[2], h[2], t[2], l[2]);
                writeStyle(12, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(13, w[2], h[2], t[1], l[1]);
                writeStyle(14, w[2], h[2], t[2], l[1]);
                writeStyle(15, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(16, w[2], h[2], t[1], 0);
                writeStyle(17, w[2], h[2], t[2], 0);
                writeStyle(18, w[2], h[2], t[3], 0);
                break;
            default:
                playerNotConfigured();
        }
    }

    //kickSizeWrapper
    updKickSizeWrapper();
}

function goFullScreen() {
    if (isfullscr()) {
        chgPlayerStyle();
    }
    else {
        gofullscr();
        setTimeout(function() {
            chgPlayerStyle();
        }, 300);
    }
}

// Set Quality /////////////////////////////////////////////////////////////////////////

function getQualities(streamPos) {
    var obj = document.getElementById("v-" + fldids[streamPos]);

    if (typeof obj.quality === "undefined" || obj.quality.length < 1) {
        if (chans[streamPos].search("k=") > -1) { // test for a kick player
            //kick does not have a method implemented
        }
        else if (chans[streamPos].search("v=") > -1) { // test for a youtube player
            obj.quality = obj.player.getQualities();
        }
        else { // code for a twitch player
            let list = obj.player.getQualities();
            obj.quality = [];
            for (let i = 0, l = list.length; i < l; i++) {
                obj.quality.push(list[i].group);
            }
        }
    }

}

function chkQuality(array, string) {
    if (array.indexOf(string) < 0) {
        return array[array.length - 1]; //[0]
    }
    else {
        return (array[array.indexOf(string)]);
    }
}

function setQuality(streamPos, streamQuality) {
    let currentQuality = "";
    let checkQuality = "";
    let obj = document.getElementById("v-" + fldids[streamPos]);

    if (chans[streamPos].search("k=") > -1) {
        //
    } else if (chans[streamPos].search("v=") > -1) {
        //
    } else if (obj.player.getEnded() !== true) {
        currentQuality = obj.player.getQuality();

        if (streamQuality == "1440p60" || streamQuality == "1080p60") {
            let includes_1080p60 = obj.quality.includes("1080p60");

            if (streamQuality == "1080p60" && includes_1080p60 == false) {
                streamQuality = "chunked";
            }
            else if (streamQuality == "1080p60" && includes_1080p60 == true) {
                streamQuality = "1080p60";
            }
            else if (streamQuality == "1440p60" && includes_1080p60 == true) {
                streamQuality = "chunked";
            }
        }

        if (currentQuality !== streamQuality) {
            checkQuality = chkQuality(obj.quality, streamQuality);
            obj.player.setQuality(checkQuality);
            styledConsoleLog(0, "setQuality", "(v-" + fldids[streamPos] + ") " + obj.player.getPlayerState().channelName + ": " + (typeof currentQuality !== "undefined" ? currentQuality : "") + " -> " + (typeof checkQuality !== "undefined" ? checkQuality : ""));
        }
    }
}

function setMaxQuality() {
    const el = document.getElementById("maxQuality");
    let value = Settings.get("maxQuality");

    if (value == "") {
        value = "auto";
        Settings.update("maxQuality", value);
    }

    el.value = value;
    el.addEventListener("change", () => Settings.update("maxQuality", el.value));
}

function chgQuality(streamPos) {
    var defaultQuality = document.getElementById("defqua").value;
    var maxQuality = document.getElementById("maxQuality").value;

    var length = 0; //whether to apply a quality override from "var quality" (e.g. length[0] = quality[0] = apply to v-0)
    var quality = [defaultQuality,defaultQuality,defaultQuality];

    var aspect_ratio = screen.width / screen.height;

    var gameMode = Settings.get("gameMode");
    var maxQualityMode = Settings.get("maxQualityMode");
    var watchParty = Settings.get("watchParty");

    if (gameMode === true) {
        quality[0] = "480p30";
        quality[1] = defaultQuality;
        quality[2] = defaultQuality;
    }

    if (maxQualityMode === true) {
        quality[0] = maxQuality;
    }

    if (watchParty === true) {
        length = 1;
        quality[1] = maxQuality;
    }

    switch(aspect_ratio) { //test for 16:9 or 16:10 display
        case 1.7777777777777777: // 16:9 display
            break;
        case 1.6: //16:10 display
            switch(chans.length) {
                case 3:
                    length = 2;
                    break;
                case 7:
                case 5:
                    length = 2;
                    if (gameMode === false) {
                        quality[2] = "360p30"; //(gameMode === "true" ? defaultQuality : "360p30")
                    }
                    break;
                case 2:
                case 4:
                case 6:
                case 11:
                    length = 1;
                    break;
                case 8:
                case 9:
                case 10:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    length = 1;
                    if (gameMode === false) {
                        quality[1] = "360p30";
                    }
                    break;
            }
            break;
    }

    if (typeof streamPos !== "undefined") {
        getQualities(streamPos);
        setQuality(streamPos, (streamPos > length ? defaultQuality : quality[streamPos]) );
    } else {
        for (let i = 0, l = chans.length; i < l; i++) {
            getQualities(i);
            setQuality(i, (i > length ? defaultQuality : quality[i]) );
        }
    }
}

// button.click() functions ///////////////////////////////////////////////////////////////

function toggleSettingButton(key, className, isFirstRun) {
    const btn = document.querySelector(`.${className}`);
    let current = Settings.get(key) === true;

    if (isFirstRun) {
        btn.classList.toggle("active", current);
    } else {
        const newState = !current;
        Settings.update(key, newState);
        btn.classList.toggle("active", newState);
    }
}

function updLocalstorage(key) {
    let val = document.getElementById(key).value;
    document.getElementById(key).value = '';

    Settings.update(key, val);
}

function loadPreferences() {
    let dc = document.getElementById('dc');
    if (dc.checked == false) {
        dc.click();
    }

    let hidebits = document.getElementById('hidebits');
    if (hidebits.selectedIndex != 2) {
        hidebits.selectedIndex = 2;
        hidebits.onchange();
    }

    let vo = document.getElementById('vo');
    if (vo.checked == false) {
        vo.click();
    }

    let au = document.getElementById('au');
    if (au.checked == false) {
        au.click();
    }

    let defqua = document.getElementById('defqua');
    if (defqua.value != "160p30") {
        defqua.value = "160p30";
        defqua.onchange();
    }
}



function removeOfflineChannels(val) {
    var list = [],
        id = [];

    for (let i = (fldids.length - 1); i > -1; i--) {
        if (chans[i].includes("k=")) {
            continue;
        }

        let obj = document.getElementById("v-" + fldids[i]);
        if (obj.player.getEnded() || obj.player.getQualities().length == 0) { //obj.player.isPaused()
            list.unshift(chans[i]);
            id.unshift(fldids[i]);
        }
    }

    for (let i = 0, l = id.length; i < l; i++) {
        remstream(id[i], !val ? null : val);
    }

    if (list.length > 0){
        styledConsoleLog(0, "removeOfflineChannels", list.length + ") " + list.toString());
    }
}

function unloadAllChats(event) {
    var selectedChat = chats[document.getElementById("chatsel").selectedIndex];

    var deleteNode = function(chatName) {
        let obj = document.getElementById("c-" + chatName);
        let isKick = obj.kick;

        obj.textContent = '';

        if (isKick) {
            obj.kick = false;
        }
    };

    if (event.shiftKey) {
        for (let chatName of chats) {
            deleteNode(chatName);
        }
        chgchat();
    } else {
        for (let chatName of chats) {
            if (chatName !== selectedChat) {
                deleteNode(chatName);
            }
        }
    }

    updUnloadAllChatsBtn();
}

function addStreamsFromChat(event) {
    var currentPlayerLength = fldids.length;

    if (event.shiftKey) {
        addfromui(1, chats.toString());
    }
    else {
        let c = chats.slice(),
            list = [];

        for (let indx in chans) {
            if (c.indexOf(chans[indx]) > -1) {
                list.push(indx);
            }
        }
        list.sort(function(a, b){return b-a});

        for (let indx in list) {
            c.splice(list[indx], 1);
        }

        c.splice(7, c.length);

        addfromui(1, c.toString());
    }

    for (let i = currentPlayerLength, l = fldids.length; i < l; i++) {
        let obj = document.getElementById("v-" + fldids[i]);

        // temp function
        function playerReadyEventListener() {
            obj.player.removeEventListener("ready", playerReadyEventListener);
            obj.player.pause();

            styledConsoleLog(0, "playerReadyEventListener", "(v-" + i +"): "+obj.player.getPlayerState().channelName);
        }

        if (!obj.player.pause()) {
            setTimeout(function() {
                obj.player.addEventListener("ready", playerReadyEventListener);
            }, 300);
        }
    }
}

async function addLiveFromTwitch() {
    let accessToken = Settings.get("accessToken");
    let clientId = Settings.get("clientId");
    let userId = Settings.get("userId");
    let data = {};
    let channelNames = [];

    if (accessToken && clientId && userId) {

        const res = await fetch('https://api.twitch.tv/helix/streams/followed?user_id=' + userId, {
            headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': clientId,
            'Authorization': 'Bearer ' + accessToken,
            }
        })

        data = await res.json();

        for (let i = 0, l = data["data"].length; i < l; i++) {
            channelNames.push(data["data"][i]["user_login"]);
        }

        let chatsel_selectedName = chats[chatsel.selectedIndex];
        addfromui(2, channelNames.toString());
        if (typeof chatsel_selectedName !== "undefined") {
            chatsel.selectedIndex = chats.indexOf(chatsel_selectedName);
            chgchat();
        }
    }
}



function setGameMode(isFirstRun) {
    toggleSettingButton("gameMode", "setGameMode", isFirstRun);
}

function setMaxQualityMode(isFirstRun) {
    toggleSettingButton("maxQualityMode", "setMaxQualityMode", isFirstRun);
}



function fixStalledPlayers() { // document.querySelector('video')
    // if (document.getElementById("theaterMenuBot").style.display === "") return;

    const run = [];

    for (let i = 0; i < fldids.length; i++) {
        const obj = document.getElementById("v-" + fldids[i]);
        const state = obj.player.getPlayerState();
        const vs = state.stats.videoStats;
        // const ps = obj.player._player._playerState;

        const isActive = state.playback !== "Idle" && state.ended === false && state.qualitiesAvailable.length > 0;

        if (!isActive) {
            // Keep last-seen time in sync to avoid false positives later
            state.currentTime_theaterTools = state.currentTime;
            continue;
        }

        // const iframeInside = obj.querySelector('iframe');

        // Cond 1: FPS stalled or absurd
        if (vs.fps === 0 || vs.fps > 999) {
            styledConsoleLog(0, "fixStalledPlayers", `(v-${fldids[i]}) ${state.channelName}.fps == ${vs.fps}`);
            obj.player.pause();
            obj.player.play();
            // iframeInside.contentWindow.postMessage({command: 'pause'}, '*');
            // iframeInside.contentWindow.postMessage({command: 'play'}, '*');
            // iframeInside.contentWindow.postMessage({command: 'button.pause.click'}, '*');
            // iframeInside.contentWindow.postMessage({command: 'button.play.click'}, '*');
            run.push(i);

        // Cond 2: Negative buffer size
        } else if (vs.bufferSize < 0) {
            styledConsoleLog(0, "fixStalledPlayers", `(v-${fldids[i]}) ${state.channelName}.bufferSize == ${vs.bufferSize}`);
            relstream(i, -1);
            run.push(i);

        // Cond 3: Current time not advancing
        } else if (state.currentTime === state.currentTime_theaterTools) {
            styledConsoleLog(0, "fixStalledPlayers", `(v-${fldids[i]}) ${state.channelName}.currentTime == ${state.currentTime_theaterTools} / ${state.currentTime}`);
            obj.player.pause();
            obj.player.play();
            run.push(i);
        }

        // Track last-seen time
        state.currentTime_theaterTools = state.currentTime;
    }

    if (run.length) {
        setTimeout(() => {
            for (let i = 0; i < run.length; i++) {
                chgQuality(run[i]);
            }
        }, 1500);
    }
}

function fixStalledPlayersButton(isFirstRun) {
    const btn = document.querySelector(".fixStalledPlayersButton");
    let isActive = Settings.get("useFixStalledPlayers") === true;

    // First run: just apply the visual and behavior state
    if (isFirstRun) {
        if (isActive) {
            fixStalledPlayersState = window.setInterval(fixStalledPlayers, 3500);
            btn.classList.add("active");
        }
        return;
    }

    // Toggle the setting
    isActive = !isActive;
    Settings.update("useFixStalledPlayers", isActive);

    // Apply state change
    if (isActive) {
        fixStalledPlayersState = window.setInterval(fixStalledPlayers, 3500);
        btn.classList.add("active");
    } else {
        window.clearInterval(fixStalledPlayersState);
        fixStalledPlayersState = null;
        btn.classList.remove("active");
    }
}



function watchPartyMode(isFirstRun) {
    toggleSettingButton("watchParty", "watchPartyMode", isFirstRun);
}

function setGoFullScreen(isFirstRun) {
    toggleSettingButton("useGoFullScreen", "useGoFullScreen", isFirstRun);
}

function setVolumeOnRun(isFirstRun) {
    toggleSettingButton("useVolumeOnRun", "useVolumeOnRun", isFirstRun);
}

function setChgPlayerStyleCaseOne(isFirstRun) {
    toggleSettingButton("useChgPlayerStyleCaseOne", "useChgPlayerStyleCaseOne", isFirstRun);
}

function randomTestButton() {
    let obj = document.getElementById("v-" + fldids[0]);
    // console.log( obj.player.getPlaybackStats().bufferSize +            ' - bufferSize' );
    // console.log( obj.player.getPlaybackStats().hlsLatencyBroadcaster + ' - hlsLatencyBroadcaster' );
    // console.log( obj.player.getPlayerState().currentTime +             ' - currentTime' );
    // console.log( obj.player.isPaused() +                               ' - isPaused' );
    // console.log( obj.player.getChannel() +                             ' - getChannel' );
    // console.log( obj.player.getChannelId() +                           ' - getChannelId' );
    // console.log( obj.player.getQualities() );
    // console.log( obj.player.getPlayerState().qualitiesAvailable );

    // console.log( obj.player.getPlayerState().playback +            ' - playback' );
    // console.log( obj.player.getPlayerState().ended +               ' - ended' );
    // console.log( obj.player.getEnded() +                           ' - getEnded' );
    // console.log( obj.player.getPlaybackStats().bufferSize +        ' - bufferSize' );
    // console.log( obj.player.getPlaybackStats().fps +               ' - fps' );

    console.log(obj.player.getPlaybackStats());
    console.log(obj.player.getPlayerState());

    // obj.player.getQuality();
    // obj.player.setQuality("160p30");

    // (function() {
    //     var button = document.querySelector(".player-overlay-background button");
    //     if (button) {
    //         button.click();
    //     }
    // })();
}

// Update Function Menu Buttons ////////////////////////////////

function updUnloadAllChatsBtn() {
    var loadedChats = 0;

    for (let indx in chats) {
        let obj = document.getElementById("c-" + chats[indx]);

        if (obj.innerHTML) {
            loadedChats++;
        }
    }

    let obj = document.getElementsByClassName("unloadAllChats")[0];
    obj.innerText = "loadedChats " + loadedChats + " / " + chats.length;
}

function updAddStreamsFromChatBtn() {
    let obj = document.getElementsByClassName("addStreamsFromChat")[0];

    obj.innerText = "addStreams " + chans.length + " / " + chats.length;
}

// Miscellaneous Functions /////////////////////////////////////////////////////////////

function reorderChatsArr() {
    //https://www.w3schools.com/js/js_cookies.asp
    var chatsel = document.getElementById("chatsel");
    var chatmen = document.getElementById("chatmen");

    var cookieName = "sesssave";
    var sesssave = getCookie(cookieName);
    var sesssaveLowerCase = sesssave.toLowerCase();

    if ( sesssave !== sesssaveLowerCase ) {
        chgCookie( 1, cookieName, sesssaveLowerCase );
    }

    // https://morioh.com/p/0b5bd0ececd4
    if ( JSON.stringify(chans) !== JSON.stringify(chans).toLowerCase() ) {
        for (let indx in fldids) {
            let obj = document.querySelector("#t-" + fldids[indx]); //strflds
            if (obj.value !== obj.value.toLowerCase()) {
                obj.value = obj.value.toLowerCase();
            }
        }
        chans = chans.join('|').toLowerCase().split('|');
    }
    if ( JSON.stringify(chats) !== JSON.stringify(chats).toLowerCase() ) {
        for (let indx in chats) {
            let obj = document.getElementById("c-" + chats[indx]);
            if (obj.id !== obj.id.toLowerCase()) {
                obj.id = obj.id.toLowerCase();
                obj.textContent = '';
            }
        }
        for (let i = 0, l = chats.length; i < l; i++) {
            chatsel.options[i].textContent = chatsel.options[i].textContent.toLowerCase();
            chatmen.options[i].textContent = chatmen.options[i].textContent.toLowerCase();
        }
        chats = chats.join('|').toLowerCase().split('|');

        chgchat();
    }

    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
    //https://stackoverflow.com/questions/25934989
    if ( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        let chatsel_selectedName = "";
        let chatmen_selectedIndex = 0;
        let list = [];
        let indx = chats.slice();

        //find 'chats' that have active streams and list them in order of 'chans'
        for (let i = 0, l = chans.length; i < l; i++) {
            let indxOf = indx.indexOf(chans[i]);
            if (indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        //add rest of chats with inactive streams to end of list
        for (let l = indx.length; l > 0; l--) {
            list.push( indx.shift() );
        }

        //get 'selectedIndex' value
        chatsel_selectedName = chats[chatsel.selectedIndex];
        chatmen_selectedIndex = chatmen.selectedIndex;

        //replace 'chatsel' & 'chatmen'
        for (let i = 0, l = list.length; i < l; i++) {
            chatsel.options[i].textContent = list[i]; //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
            chatmen.options[i].textContent = list[i]; //innerHTML, value
        }

        //replace 'chats' with reordered 'list'
        chats = list.slice(); //chats = [...list];
        ctils = list.slice();

        //restore 'selectedIndex' value
        chatsel.selectedIndex = chats.indexOf(chatsel_selectedName);

        chgchat();

        chatmen.selectedIndex = chatmen_selectedIndex;
    }
}

function openTheaterMenu(val) {
    if (val == undefined) {
        val = document.getElementById("theaterMenuBot").style.display;
    }
    if (val) {
        document.getElementById("theaterMenuTop").style.display = "";
        document.getElementById("theaterMenuBot").style.display = "";
        document.getElementById("theaterMenuDiv").style.right = "0px";
        document.getElementById("theaterMenuDiv").style.width = "340px";
        document.getElementById("theaterMenuBot").style.background = "#202023 none repeat scroll 0% 0%";
        document.getElementById("theaterMenuBot").style.maxHeight = "" + (window.innerHeight - 50) + "px";
    }
    else {
        document.getElementById("theaterMenuTop").style.display = "none";
        document.getElementById("theaterMenuBot").style.display = "none";

        document.getElementById("theaterMenuDiv").style.right = ""; //"290px", "254px"
        document.getElementById("theaterMenuDiv").style.width = "";
        document.getElementById("theaterMenuDiv").style.background = "";
    }
}

function styledConsoleLog(module, func, log) {
    //https://dev.to/annlin/consolelog-with-css-style-1mmp
    console.log("%c" + (module || "Theater-Tools") + " [%c" + func + "%c]: %c" + log, "color:#755000; font-weight:bold", "color:#999999", "color:#755000; font-weight:bold", "color:#999999");

    //#f67810
    //#e36c09

    //#bc91ff
    //#7e67c7
    //#37266c

    //#color:default
    //#999999
    //#755000
}

function updKickSizeWrapper() {
    let kickSizeWrapperArrLength = document.getElementsByClassName("kickSizeWrapper").length;

    if (kickSizeWrapperArrLength > 0) {
        let kickSizeWrapperObjArr = document.getElementsByClassName("kickSizeWrapper");
        const r = 1.7777777777777777;

        for (let i = 0; i < kickSizeWrapperArrLength; i++) {
            let maxWidth = kickSizeWrapperObjArr[i].parentElement.offsetWidth,
                maxHeight = kickSizeWrapperObjArr[i].parentElement.offsetHeight,
                width = 0,
                left = 0;

            width = (maxHeight * r < maxWidth ? maxHeight * r : maxWidth);
            left = (width < maxWidth ? (maxWidth - width) / 2 : 0);

            kickSizeWrapperObjArr[i].style = "height: 100%;" +
                                              "width: " + width + "px;" +
                                              "left: "  + left  + "px;";
        }
    }
}

function genKickChat(indx, chk) {
    var kickName = "";

    if (indx) {
        kickName = chats[indx];
    } else {
        kickName = chats[document.getElementById('chatsel').selectedIndex];
    }

    if (kickName && kickName.includes("k=")) {
        //https://stackoverflow.com/a/52124191
        //https://stackoverflow.com/a/10398941

        // const kickChatEmbed = ['<iframe src="https://kick-chat.corard.tv/v1/chat?user=','&amp;font-size=Small&amp;stroke=Thin&amp;animate=true&amp;badges=true&amp;commands=true&amp;bots=true"></iframe>'];
        const kickChatEmbed = ['<iframe src="https://kick.com/popout/','/chat" width="400" height="600" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'];

        let obj = document.getElementById("c-" + kickName);
        let isKick = obj.kick;

        if (isKick !== true || chk == 2) {
            obj.innerHTML = kickChatEmbed[0] + kickName.replace("k=","") + kickChatEmbed[1];

            if (isKick !== true) {
                obj.kick = true;
            }
        }
    }
}

function genKickPlayer(list, indx) {
    const kickSizeWrapper = ['<div style="height: 100%;width: 100%;background: black;"><div class="kickSizeWrapper" style="height: 100%; width: 790px; left: 0px;">','</div></div>']
    const kickPlayerEmbed = ['<iframe src="https://player.kick.com/','?muted=true" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>'];

    var kickNames = [];
    var kickIndx = [];

    if (list) {
        for (let chanName of list) {
            if (chanName.includes("k=")) {
                kickNames.push(chanName);
                kickIndx.push(chans.indexOf(chanName));
            }
        }
    } else if (typeof indx !== "undefined") {
        let id = fldids.indexOf(indx);
        let txt = chans[id];

        if (txt.includes("k=")) {
            kickIndx.push(id);
            kickNames.push(txt);
        }
    } else {
        for (let i = 0, l = chans.length; i < l; i++) {
            if (chans[i].includes("k=")) {
                kickNames.push(chans[i]);
                kickIndx.push(i);
            }
        }
    }

    for (let i = 0, l = kickIndx.length; i < l; i++) {
        let obj = document.getElementById("v-" + fldids[kickIndx[i]]);
        let isKick = obj.kick;

        if (isKick !== true || typeof indx !== "undefined") {
            obj.childNodes[0].outerHTML = kickSizeWrapper[0] + kickPlayerEmbed[0] + kickNames[i].replace("k=","") + kickPlayerEmbed[1] + kickSizeWrapper[1];

            if (isKick !== true) {
                obj.kick = true;
            }
        }
    }

    updKickSizeWrapper();
}

function setKickMuted(val) {
    for (let i = 0; i < chans.length; i++) {
        const container = document.getElementById('v-' + fldids[i]);

        if (container.kick) {
            const iframeInside = container.querySelector('iframe');

            if ((val == undefined || val == fldids[i])) {
                iframeInside.contentWindow.postMessage({command: 'unmute'}, '*');
            } else {
                iframeInside.contentWindow.postMessage({command: 'mute'}, '*');
            }
        }
    }
}

// Rewrite TwitchTheater.tv Functions //////////////////////////////////////////////////

evtchk = (function() {
    var cached_function = evtchk; //evtchk(event)

    return function() {
        var result = cached_function.apply(this, arguments);

        if (arguments[0].ctrlKey) {
            openTheaterMenu(0);

            if (Settings.get("useVolumeOnRun") === true) {
                chgvolume(100);
            }

            chgQuality();

            if (Settings.get("useGoFullScreen") === true) {
                goFullScreen();
            } else {
                chgPlayerStyle();
            }
        }

        return result;
    };
    //https://stackoverflow.com/a/9134757
})();

chgchat = (function() {
    var cached_function = chgchat; //chgchat(indx)

    setTimeout(() => {
        genKickChat();
    }, 1000);

    return function() {
        var result = cached_function.apply(this, arguments);

        genKickChat(arguments[0]);

        updUnloadAllChatsBtn();

        return result;
    };
})();

updlayout = (function() {
    var cached_function = updlayout; //updlayout(oddrow)

    return function() {
        var result = cached_function.apply(this, arguments);

        updKickSizeWrapper();

        return result;
    };
})();

moveposup = (function() {
    var cached_function = moveposup; //moveposup(val, event)

    setTimeout(() => { //add "event" param to onlick: onclick="moveposup(1,event)"
        var obj = document.getElementsByClassName("extops");

        for (let i = 0, l = obj.length; i < l; i++) {
            obj[i].childNodes[2].onclick = function onclick(event) {
                moveposup(i,event);
            };
        }
    }, 1000);

    return function() {
        if (arguments[1] && arguments[1].shiftKey) {
            for (let i = fldids.indexOf(arguments[0]); i > 0; i--) {
                var result = cached_function.apply(this, arguments);
            }
        } else {
            var result = cached_function.apply(this, arguments);
        }

        reorderChatsArr();

        return result;
    };
})();

addstreams = (function() {
    var cached_function = addstreams; //addstreams(val, txt, list)

    setTimeout(() => {
        genKickPlayer();
    }, 1000);

    return function() {
        var result = cached_function.apply(this, arguments);

        for (let i = 0, l = arguments[0].length; i < l; i++) { //add "event" param to onlick: onclick="moveposup(1,event)"
            let id = fldids[chans.indexOf(arguments[0][i])];
            let obj = document.getElementById(id.toString());

            obj.childNodes[0].childNodes[2].onclick = function onclick(event) {
                moveposup(id,event);
            };
        }

        genKickPlayer(arguments[0]);

        reorderChatsArr();
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();

        return result;
    };
})();

relchat = (function() {
    var cached_function = relchat;

    return function() {
        var result = cached_function.apply(this, arguments);

        genKickChat(null, 2);

        return result;
    };
})();

chgaudio = (function() {
    var cached_function = chgaudio; //chgaudio(val, chk)

    return function() {
        var result = cached_function.apply(this, arguments);

        setKickMuted(arguments[0]);

        return result;
    };
})();

relstream = (function() {
    var cached_function = relstream; //relstream(val, chk)

    return function() {
        var result = cached_function.apply(this, arguments);

        genKickPlayer(null, arguments[0]);

        return result;
    };
})();

remstream = (function() {
    var cached_function = remstream; //remstream(val, txt, chk)

    return function() {
        var result = cached_function.apply(this, arguments);

        reorderChatsArr();
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();

        return result;
    };
})();

remchat = (function() {
    var cached_function = remchat; //remchat(indx, chk)

    return function() {
        var result = cached_function.apply(this, arguments);

        reorderChatsArr();
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();

        return result;
    };
})();

document.getElementById("strc").childNodes[0].onclick = function onclick(event) {
    playpause(1, null, event);
};

document.getElementById("strc").childNodes[1].onclick = function onclick(event) {
    playpause(null, null, event);
};

playpause = (function() {
    var cached_function = playpause; //playpause(val, chk, event)

    return function() {
        if (arguments[2] && arguments[2].shiftKey) {
            let obj = document.getElementById('v-' + fldids[0]);

            if (obj.player) {
                obj.player.play();
            }

            for (let i = 1, l = chans.length; i < l; i++) {
                let obj = document.getElementById('v-' + fldids[i]);

                if (obj.player) {
                    obj.player.pause();
                }
            }
        } else {
            var result = cached_function.apply(this, arguments);

            clearTimeout(theatr.playt);
            theatr.playm = 0;

            return result;
        }
    };
})();

// Setup Functions /////////////////////////////////////////////////////////////////////

function onScriptLoad() {
    // Remove event listener to avoid duplicate runs
    document.removeEventListener("onScriptLoad", onScriptLoad);

    Settings.load();

    // Initialize settings
    setGameMode(true);
    setMaxQualityMode(true);
    fixStalledPlayersButton(true);
    watchPartyMode(true);
    setGoFullScreen(true);
    setVolumeOnRun(true);
    setChgPlayerStyleCaseOne(true);
    setMaxQuality();

    // Update UI buttons after a short delay
    setTimeout(() => {
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();
    }, 2000);

    // Run button behavior
    const runBtn = document.getElementById("theaterRunBtn");
    runBtn.onclick = (event) => {
        if (event.ctrlKey) {
            openTheaterMenu(0);

            if (Settings.get("useVolumeOnRun") === true) {
                chgvolume(100);
            }

            playpause(1);
        }

        chgQuality();

        if (Settings.get("useGoFullScreen") === true) {
            goFullScreen();
        } else {
            chgPlayerStyle();
        }
    };

    // Menu button behavior
    const menuBtn = document.getElementById("theaterMenuBtn");
    menuBtn.onclick = () => openTheaterMenu();
}

////////////////////////////////////////////////////////////////////////////////////////

const Settings = {
    // Define your defaults here (booleans or strings)
    cache: {
        useChgPlayerStyleCaseOne: false,
        maxQuality: "",
        gameMode: false,
        maxQualityMode: false,
        watchParty: false,
        accessToken: "",
        clientId: "",
        userId: "",
        useFixStalledPlayers: false,
        useVolumeOnRun: false,
        useGoFullScreen: false,
    },

    load() {
        for (const key in this.cache) {
            const stored = localStorage.getItem(key);
            if (typeof this.cache[key] === "boolean") {
                this.cache[key] = stored === "true";
            } else if (typeof this.cache[key] === "string") {
                this.cache[key] = stored ?? "";
            }
        }
    },

    update(key, value) {
        this.cache[key] = value;
        localStorage.setItem(key, value.toString());
    },

    get(key) {
        return this.cache[key];
    }
};

var fixStalledPlayersState = null;

(function() {
    document.addEventListener("onScriptLoad", onScriptLoad);
})();

////////////////////////////////////////////////////////////////////////////////////////
