// document.getElementsByTagName("body")[0].style.background = "#ffd700";
// https://www.silisoftware.com/tools/screen_aspect_ratio_calculator

// function MissingValue(aspect_ratio, width, height) {
//     if (height < 1) {
//         height = width / aspect_ratio;
//         console.log("MissingValue: height");
//         return height;
//     } else if (width < 1) {
//         width = height * aspect_ratio;
//         console.log("MissingValue: width");
//         return width;
//     } else {
//         console.log("function MissingValue: Error");
//     }
// }

function MissingValue(aspect_ratio, width, height) {
	if (width && height) {
		aspect_ratio = width / height;
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
		console.log("function MissingValue: Error");
	}
}

function getplayers() {
    var cntr = 0;
    for (var i = 0; i <= cntr; i++) {
        if(document.getElementById("v-" + i) == null) {
            break;
        } else {
            cntr++;
        }
    }
    return cntr;
}

function setstyles(i) {
    var clientW = document.getElementById("playdiv").clientWidth;
    var clientH = document.getElementById("playdiv").clientHeight;
    var r = 1.778;
    var tmp = [];
    var w = [];
    var h = [];
    var t = [];
    var l = [];
    function v_0_style_calc(){
        w[0] = Math.round( clientW );
        h[0] = Math.round( MissingValue( r, w[0], 0 ) );
    }
    function v_1_style_calc(){
        h[1] = Math.round( clientH - h[0] );
        t[1] = ( clientH - h[1] );
    }
    switch(i) {
        case 1:
            v_0_style_calc()
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            break;
        case 2:
            v_0_style_calc()
            w[1] = clientW;
            v_1_style_calc()
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 0%;";
            break;
        case 3:
            v_0_style_calc()
            w[1] = ( clientW / 2 );
            v_1_style_calc()
            l[1] = ( clientW / 2 );
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: " + l[1] + "px;";
            document.getElementById("v-2").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 0%;";
            break;
        case 4:
            v_0_style_calc()
            v_1_style_calc()
            w[1] = Math.round( MissingValue( r, 0, h[1] ) );
            l[1] = ( clientW - w[1] );
            w[2] = ( l[1] / 2 );
            l[2] = w[2];
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: " + l[1] + "px;";
            document.getElementById("v-2").style = "width: " + w[2] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: " + l[2] + "px;";
            document.getElementById("v-3").style = "width: " + w[2] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 0%;";
            break;
        case 5:
            // temp
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
setTimeout( setstyles(getplayers()) , 2000);
