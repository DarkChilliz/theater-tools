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
    var clientW = Math.round( document.getElementById("playdiv").clientWidth ),
        clientH = Math.round( document.getElementById("playdiv").clientHeight ),
        w = [],
        h = [],
        t = [],
        l = [],
        playerNotConfigured = function() {
            styledConsoleLog(0, "chgPlayerStyle", "not configured for [" + fldids.length + "] players");
        },
        useChgPlayerStyleCaseOne = localStorage.getItem("useChgPlayerStyleCaseOne");

    //1920x1080 (16:9 aspect ratio)
    if (screen.width / screen.height == 1.7777777777777777 || screen.width == 1920 && screen.height == 1080) {
        switch(chans.length) { //unfinished
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === "true") {
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
            default:
                playerNotConfigured;
        }
    //1440x900 (16:10 aspect ratio)
    }
    else if (screen.width / screen.height == 1.6 || screen.width == 1440 && screen.height == 900) {
        switch(chans.length) {
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === "true") {
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
                playerNotConfigured;
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

function getQualities(strmID) {
    var obj = document.getElementById("v-" + fldids[strmID]);
    if (typeof obj.quality === "undefined" || obj.quality.length < 1) {
        if (chans[strmID].search("v=") == -1) {
            var list = obj.player.getQualities();
            obj.quality = [];
            for(let i = 0, l = list.length; i < l; i++) {
                obj.quality.push(list[i].group);
            }
        }
        else if (chans[strmID].search("v=") > -1) {
            obj.quality = obj.player.getQualities();
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

function setQuality(strmID, strmQuality) {
    let currentQuality = "",
        checkQuality = "",
        obj = document.getElementById("v-" + fldids[strmID]);

    if (obj.player.getEnded() !== true && chans[strmID].search("v=") == -1) {
        currentQuality = obj.player.getQuality();
        if (currentQuality !== strmQuality) {
            if (chans[strmID].search("v=") == -1) {
                checkQuality = chkQuality(obj.quality, strmQuality);
                obj.player.setQuality( checkQuality );

                styledConsoleLog(0, "setQuality", "(v-" + fldids[strmID] + ") " + obj.player.getPlayerState().channelName + ": " + (typeof currentQuality !== "undefined" ? currentQuality : "") + " -> " + (typeof checkQuality !== "undefined" ? checkQuality : ""));
            }
            else {
                styledConsoleLog(0, "setQuality", "(v-" + fldids[strmID] + "): Not Twitch");
            }
        }
    }
}

function chgQuality(strmID, strmQuality) {
    let length = 0,
        aspect_ratio = screen.width / screen.height,
        gameMode = localStorage.getItem("gameMode"),
        maxQualityMode = localStorage.getItem("maxQualityMode"),
        watchParty = localStorage.getItem("watchParty");

    if (gameMode === "true") {
        quality = ["480p30","160p30","160p30"];
    }
    else {
        quality = ["auto","auto","auto"];
    }
    if (maxQualityMode === "true") {
        quality[0] = "chunked";
    }
    if (watchParty === "true") {
        length = 1;
        quality[1] = "chunked";
    }
    switch(aspect_ratio) {
        case 1.7777777777777777:
            // length = 0;
            break;
        case 1.6:
            switch(chans.length) {
                case 3:
                    length = 2;
                    break;
                case 7:
                case 5:
                    length = 2;
                    if (gameMode === "false") {
                        quality[2] = "360p30"; //(gameMode === "true" ? "160p30" : "360p30")
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
                    if (gameMode === "false") {
                        quality[1] = "360p30";
                    }
                    break;
            }
            break;
        default:
            // length = 0;
    }

    if (typeof strmID !== "undefined") {
        if (typeof strmQuality !== "undefined") {
            getQualities(strmID);
            setQuality(strmID, strmQuality);
        } else {
            getQualities(strmID);
            setQuality(strmID, (strmID > length ? "160p30" : quality[strmID]) );
        }
    } else {
        for(let i = 0, l = chans.length; i < l; i++) {
            getQualities(i); //"160p30" "360p30" "480p30" "720p30" "720p60" "chunked" "auto"
            setQuality(i, (i > length ? "160p30" : quality[i]) );
        }
    }
}

// Miscellaneous Functions /////////////////////////////////////////////////////////////

function reorderChatsArr() {
    //https://www.w3schools.com/js/js_cookies.asp
    var chatsel = document.getElementById("chatsel"),
        chatmen = document.getElementById("chatmen"),
        cookieName = "sesssave",
        sesssave = getCookie(cookieName),
        sesssaveLowerCase = sesssave.toLowerCase();

    if ( sesssave !== sesssaveLowerCase ) {
        chgCookie( 1, cookieName, sesssaveLowerCase );
    }

    // https://morioh.com/p/0b5bd0ececd4
    if ( JSON.stringify(chans) !== JSON.stringify(chans).toLowerCase() ) {
        for(let indx in fldids) {
            let obj = document.querySelector("#t-" + fldids[indx]); //strflds
            if (obj.value !== obj.value.toLowerCase()) {
                obj.value = obj.value.toLowerCase();
            }
        }
        chans = chans.join('|').toLowerCase().split('|');
    }
    if ( JSON.stringify(chats) !== JSON.stringify(chats).toLowerCase() ) {
        for(let indx in chats) {
            let obj = document.getElementById("c-" + chats[indx]);
            if (obj.id !== obj.id.toLowerCase()) {
                obj.id = obj.id.toLowerCase();
                obj.textContent = '';
            }
        }
        for(let i = 0, l = chats.length; i < l; i++) {
            chatsel.options[i].textContent = chatsel.options[i].textContent.toLowerCase();
            chatmen.options[i].textContent = chatmen.options[i].textContent.toLowerCase();
        }
        chats = chats.join('|').toLowerCase().split('|');

        try {
            if (!document.getElementById("v-" + fldids[chatsel.selectedIndex]).player.getPlayerState().videoID) {
                chgchat();
            }
        }
        catch(err) {}
    }

    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
    //https://stackoverflow.com/questions/25934989
    if ( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        var selectedChat = "",
            list = [],
            indx = chats.slice();

        //find 'chats' that have active streams and list them in order of 'chans'
        for(let i = 0, l = chans.length; i < l; i++) {
            let indxOf = indx.indexOf(chans[i]);
            if (indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        //add rest of chats with inactive streams to end of list
        for(let l = indx.length; l > 0; l--) {
            list.push( indx.shift() );
        }

        //get 'selectedIndex' value
        selectedChat = chats[chatsel.selectedIndex];

        //replace 'chatsel' & 'chatmen'
        for(let i = 0, l = list.length; i < l; i++) {
            chatsel.options[i].textContent = list[i]; //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
            chatmen.options[i].textContent = list[i]; //innerHTML, value
        }

        //replace 'chats' with reordered 'list'
        chats = list.slice(); //chats = [...list];
        ctils = list.slice();

        //restore 'selectedIndex' value
        selectedChat = chats.indexOf(selectedChat);
        chatsel.selectedIndex = selectedChat;
        chatmen.selectedIndex = selectedChat;

        try {
            if (!document.getElementById("v-" + fldids[chatsel.selectedIndex]).player.getPlayerState().videoID) {
                chgchat();
            }
        }
        catch(err) {}
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

// button.click() functions ///////////////////////////////////////////////////////////////

function removeOfflineChannels(val) {
    var list = [],
        id = [];

    for(let i = (fldids.length - 1); i > -1; i--) {
        let obj = document.getElementById("v-" + fldids[i]);
        if (obj.player.getEnded() || obj.player.getQualities().length == 0) { //obj.player.isPaused()
            list.unshift(obj.player.getPlayerState().channelName);
            id.unshift(fldids[i]);
        }
    }

    for(let i = 0, l = id.length; i < l; i++) {
        remstream(id[i], !val ? null : val);
    }

    if (list.length > 0){
        styledConsoleLog(0, "removeOfflineChannels", list.length + ") " + list.toString());
    }
}

function unloadAllChats(event) {
    var selectedChat = chats[document.getElementById("chatsel").selectedIndex];

    if (event.shiftKey) {
        for(let indx in chats) {
            document.getElementById("c-" + chats[indx]).textContent = '';
        }
        chgchat();
    } else {
        for(let i = 0, l = chats.length; i < l; i++) {
            if (chats[i] !== selectedChat) {
                document.getElementById("c-" + chats[i]).textContent = '';
            }
        }
        updUnloadAllChatsBtn();
    }
}

function addStreamsFromChat(event) {
    var currentPlayerLength = fldids.length;

    if (event.shiftKey) {
        addfromui(1, chats.toString());
    }
    else {
        let c = chats.slice(),
            list = [];

        for(let indx in chans) {
            if (c.indexOf(chans[indx]) > -1) {
                list.push(indx);
            }
        }
        list.sort(function(a, b){return b-a});

        for(let indx in list) {
            c.splice(list[indx], 1);
        }

        c.splice(7, c.length);

        addfromui(1, c.toString());
    }

    for(let i = currentPlayerLength, l = fldids.length; i < l; i++) {
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



function updKickSizeWrapper() {
    let kickSizeWrapperArrLength = document.getElementsByClassName("kickSizeWrapper").length;

    if (kickSizeWrapperArrLength > 0) {
        let kickSizeWrapperObjArr = document.getElementsByClassName("kickSizeWrapper");
        const r = 1.7777777777777777;

        for(let i = 0; i < kickSizeWrapperArrLength; i++) {
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

function addKickStreams(event) {
    const kickSizeWrapper = ['<div style="height: 100%;width: 100%;background: black;"><div class="kickSizeWrapper" style="height: 100%; width: 790px; left: 0px;">','</div></div>']
    const kickPlayerEmbed = ['<iframe src="https://player.kick.com/','?muted=true" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>'];
    const kickChatEmbed = ['<iframe src="https://kick-chat.corard.tv/v1/chat?user=','&amp;font-size=Small&amp;stroke=Thin&amp;animate=true&amp;badges=true&amp;commands=true&amp;bots=true"></iframe>'];

    for(let i = 0, l = fldids.length; i < l; i++) {
        let obj = document.getElementById("v-" + fldids[i]);

        if (obj.player.getQualities().length == 0) {
            let txt = obj.player.getPlayerState().channelName,
                isKick = obj.kick;

            if (isKick !== true || event.shiftKey) {
                obj.childNodes[0].outerHTML = kickSizeWrapper[0] + kickPlayerEmbed[0] + txt + kickPlayerEmbed[1] + kickSizeWrapper[1];

                if (isKick !== true) {
                    // obj.player = null;
                    // obj.twitch = false;
                    obj.kick = true;
                }
            }

            document.getElementById("c-" + txt).innerHTML = kickChatEmbed[0] + txt + kickChatEmbed[1];
            document.getElementById("chatdiv").style.background = "inherit";
        }
    }
    updKickSizeWrapper();
}



function setGameMode(isfirstrun) {
    let obj = document.getElementsByClassName("setGameMode")[0],
        gameMode = localStorage.getItem("gameMode");

    if (typeof isfirstrun !== "undefined") {
        switch(gameMode) {
            case "false":
            case "true":
                break;
            case null:
            default:
                gameMode = "false";
                localStorage.setItem("gameMode", "false");
                break;
        }

        if (gameMode === "true") {
            obj.classList.add("active");
        }
    } else {
        switch(gameMode) {
            case "false":
                gameMode = "true";
                break;
            case "true":
                gameMode = "false";
                break;
        }
        localStorage.setItem("gameMode", gameMode);

        if (gameMode === "true") {
            obj.classList.add("active");
        } else {
            obj.classList.remove("active");
        }
    }
}

function setMaxQualityMode(isfirstrun) {
    let obj = document.getElementsByClassName("setMaxQualityMode")[0],
        maxQualityMode = localStorage.getItem("maxQualityMode");

    if (typeof isfirstrun !== "undefined") {
        switch(maxQualityMode) {
            case "false":
                break;
            case "true":
                obj.classList.add("active");
                break;
            case null:
            default:
                maxQualityMode = "false";
                localStorage.setItem("maxQualityMode", "false");
                break;
        }
    } else {
        switch(maxQualityMode) {
            case "false":
                maxQualityMode = "true";
                obj.classList.add("active");
                break;
            case "true":
                maxQualityMode = "false";
                obj.classList.remove("active");
                break;
        }
        localStorage.setItem("maxQualityMode", maxQualityMode);
    }
}



function fixStalledPlayers() {
    if (document.getElementById("theaterMenuBot").style.display == "") {
        return;
    }

    let run = [];

    for(let i = 0, l = fldids.length; i < l; i++) {
        let obj = document.getElementById("v-" + fldids[i]);
        let playerState = obj.player.getPlayerState();

        if (playerState.stats.videoStats.fps == 0) {
            if (playerState.playback !== "Idle" && playerState.ended == false) {
                obj.player.pause();
                obj.player.play();
                run[run.length] = i;
                styledConsoleLog(0, "fixStalledPlayers", "(v-" + fldids[i] + ") " + playerState.channelName + ".fps == " + playerState.stats.videoStats.fps);
            }
        } else if (playerState.stats.videoStats.bufferSize < 0) {
            if (playerState.playback !== "Idle" && playerState.ended == false) {
                relstream(i,-1);
                run[run.length] = i;
                styledConsoleLog(0, "fixStalledPlayers", "(v-" + fldids[i] + ") " + playerState.channelName + ".bufferSize == " + playerState.stats.videoStats.bufferSize);
            }
        } else if (playerState.currentTime === playerState.ttvtools_currentTime) {
            if (playerState.playback !== "Idle" && playerState.ended == false) {
                obj.player.pause();
                obj.player.play();
                run[run.length] = i;
                styledConsoleLog(0, "fixStalledPlayers", "(v-" + fldids[i] + ") " + playerState.channelName + ".currentTime == " + playerState.ttvtools_currentTime + " / " + playerState.currentTime);
            }
        }

        obj.player._player._playerState.ttvtools_currentTime = playerState.currentTime;
    }

    if (run.length) {
        setTimeout(() => {
            for(let i = 0, l = run.length; i < l; i++) {
                chgQuality(run[i]);
            }
        }, 1500);
    }
}

function fixStalledPlayersButton(isfirstrun) {
    //https://stackoverflow.com/a/21638776
    var obj = document.getElementsByClassName("fixStalledPlayersButton")[0],
        useFixStalledPlayers = localStorage.getItem("useFixStalledPlayers");

    if (typeof isfirstrun !== "undefined") {
        switch(useFixStalledPlayers) {
            case "false":
                break;
            case "true":
                fixStalledPlayersState = window.setInterval(fixStalledPlayers,3500);
                obj.classList.add("active");
                break;
            case null:
            default:
                localStorage.setItem("useFixStalledPlayers", "false");
                break;
        }
    } else {
        switch(useFixStalledPlayers) {
            case "false":
                if (fixStalledPlayersState !== null) {
                    window.clearInterval(fixStalledPlayersState);
                }
                useFixStalledPlayers = "true";
                fixStalledPlayersState = window.setInterval(fixStalledPlayers,3500);
                obj.classList.add("active");
                break;
            case "true":
                useFixStalledPlayers = "false";
                window.clearInterval(fixStalledPlayersState);
                fixStalledPlayersState = null;
                obj.classList.remove("active");
                break;
        }
        localStorage.setItem("useFixStalledPlayers", useFixStalledPlayers);
    }
}



function watchPartyMode(isfirstrun) {
    let obj = document.getElementsByClassName("watchPartyMode")[0],
        watchParty = localStorage.getItem("watchParty");

    if (typeof isfirstrun !== "undefined") {
        switch(watchParty) {
            case "false":
                break;
            case "true":
                obj.classList.add("active");
                break;
            case null:
            default:
                watchParty = "false";
                localStorage.setItem("watchParty", "false");
                break;
        }
    } else {
        switch(watchParty) {
            case "false":
                watchParty = "true";
                obj.classList.add("active");
                break;
            case "true":
                watchParty = "false";
                obj.classList.remove("active");
                break;
        }
        localStorage.setItem("watchParty", watchParty);
    }
}

function setGoFullScreen(isfirstrun) {
    let obj = document.getElementsByClassName("useGoFullScreen")[0],
        useGoFullScreen = localStorage.getItem("useGoFullScreen");

    if (typeof isfirstrun !== "undefined") {
        switch(useGoFullScreen) {
            case "false":
                break;
            case "true":
                obj.classList.add("active");
                break;
            case null:
            default:
                useGoFullScreen = "false";
                localStorage.setItem("useGoFullScreen", "false");
                break;
        }
    } else {
        switch(useGoFullScreen) {
            case "false":
                useGoFullScreen = "true";
                obj.classList.add("active");
                break;
            case "true":
                useGoFullScreen = "false";
                obj.classList.remove("active");
                break;
        }
        localStorage.setItem("useGoFullScreen", useGoFullScreen);
    }
}

function setChgPlayerStyleCaseOne(isfirstrun) {
    let obj = document.getElementsByClassName("useChgPlayerStyleCaseOne")[0],
        useChgPlayerStyleCaseOne = localStorage.getItem("useChgPlayerStyleCaseOne");

    if (typeof isfirstrun !== "undefined") {
        switch(useChgPlayerStyleCaseOne) {
            case "false":
                break;
            case "true":
                obj.classList.add("active");
                break;
            case null:
            default:
                useChgPlayerStyleCaseOne = "false";
                localStorage.setItem("useChgPlayerStyleCaseOne", "false");
                break;
        }
    } else {
        switch(useChgPlayerStyleCaseOne) {
            case "false":
                useChgPlayerStyleCaseOne = "true";
                localStorage.setItem("useChgPlayerStyleCaseOne", useChgPlayerStyleCaseOne);
                obj.classList.add("active");
                break;
            case "true":
                useChgPlayerStyleCaseOne = "false";
                localStorage.setItem("useChgPlayerStyleCaseOne", useChgPlayerStyleCaseOne);
                obj.classList.remove("active");
                break;
        }
    }
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
    console.log( obj.player.getPlayerState().playback +            ' - playback' );
    console.log( obj.player.getPlayerState().ended +               ' - ended' );
    console.log( obj.player.getEnded() +                           ' - getEnded' );
    console.log( obj.player.getPlaybackStats().bufferSize +        ' - bufferSize' );
    console.log( obj.player.getPlaybackStats().fps +               ' - fps' );

    // obj.player.getQuality();
    // obj.player.setQuality("160p30");

    // (function() {
    //     'use strict';
    //     var button = document.querySelector(".player-overlay-background button");
    //     if (button) {
    //         button.click();
    //     }
    // })();
}

// Update Function Menu Buttons ////////////////////////////////

function updUnloadAllChatsBtn() {
    var loadedChats = 0;

    for(let indx in chats) {
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

// Rewrite TwitchTheater.tv Functions //////////////////////////////////////////////////

evtchk = (function() {
    var cached_function = evtchk; //evtchk(event)

    return function() {
        var result = cached_function.apply(this, arguments);

        if (arguments[0].ctrlKey) {
            openTheaterMenu(0);
            chgvolume(100);
            chgQuality();
            goFullScreen();
        }

        return result;
    };
    //https://stackoverflow.com/a/9134757
})();

chgchat = (function() {
    var cached_function = chgchat; //chgchat(indx)

    return function() {
        var result = cached_function.apply(this, arguments);

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
    var cached_function = moveposup; //moveposup(val)

    return function() {
        var result = cached_function.apply(this, arguments);

        reorderChatsArr();

        return result;
    };
})();

addstreams = (function() {
    var cached_function = addstreams; //addstreams(val, txt, list)

    return function() {
        var result = cached_function.apply(this, arguments);

        reorderChatsArr();
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();

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
    var cached_function = playpause; //playpause(val, chk)

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
    document.removeEventListener("onScriptLoad", onScriptLoad);

    setGameMode(1);
    setMaxQualityMode(1);
    fixStalledPlayersButton(1);
    watchPartyMode(1);
    setGoFullScreen(1);
    setChgPlayerStyleCaseOne(1);

    setTimeout(() => {
        updUnloadAllChatsBtn();
        updAddStreamsFromChatBtn();
    }, 2000);

    document.getElementById("theaterRunBtn").onclick = function onclick(event) {
        if (event.ctrlKey) {
            openTheaterMenu(0);
            chgvolume(100);
            playpause(1);
        }
        chgQuality();

        if (localStorage.getItem("useGoFullScreen") === "true") {
            goFullScreen();
        } else {
            chgPlayerStyle();
        }
    };

    document.getElementById("theaterMenuBtn").onclick = function onclick() {
        openTheaterMenu();
    };
}

////////////////////////////////////////////////////////////////////////////////////////

var fixStalledPlayersState = null;

(function() {
    document.addEventListener("onScriptLoad", onScriptLoad);
})();

////////////////////////////////////////////////////////////////////////////////////////
