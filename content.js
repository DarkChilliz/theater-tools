// document.getElementsByTagName("body")[0].style.background = "#ffd700";
// https://www.silisoftware.com/tools/screen_aspect_ratio_calculator
function FakeRound(number, decimals) {
    var magnitude = Math.pow(10, decimals);
    return Math.round(number * magnitude) / magnitude;
}

function MissingValue(aspect_ratio, width, height) {
    if (!width && !height) {
        width  = 1920;
        height = 1080;
    }
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
    return null;
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
console.log(getplayers());

function setstyles(i) {
    var clientW = document.getElementById("playdiv").clientWidth;
    var clientH = document.getElementById("playdiv").clientHeight;
    // var w = screen.width;
    // var h = screen.height;
    var r = 1.778;
    var w = [];
    var h = [];
    var t = [];
    var l = [];
    var tmp = [];
    switch(i) {
        case 1:
            // w[0] = clientW;
            w[0] = FakeRound( clientW, ((clientW < 100) ? 1 : 0));
            h[0] = MissingValue(r, clientW, 0);
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            break;
        case 2:
            w[0] = FakeRound( clientW, ((clientW < 100) ? 1 : 0));
            h[0] = MissingValue( r, w[0], 0 );
            w[1] = clientW;
            tmp[1] = (clientH - h[0]);
            h[1] = FakeRound( tmp[1], ((tmp[1] < 100) ? 1 : 0));
            t[1] = (clientH - h[1]);
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 0%;";
            break;
        case 3:
            w[0] = FakeRound( clientW, ((clientW < 100) ? 1 : 0));
            h[0] = MissingValue( r, w[0], 0 );
            w[1] = (clientW / 2);
            tmp[1] = (clientH - h[0]);
            h[1] = FakeRound( tmp[1], ((tmp[1] < 100) ? 1 : 0));
            t[1] = (clientH - h[1]);
            document.getElementById("v-0").style = "width: " + w[0] + "px" + "; height: " + h[0] + "px" + "; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 0%;";
            document.getElementById("v-2").style = "width: " + w[1] + "px" + "; height: " + h[1] + "px" + "; top: " + t[1] + "px" + "; left: 50%;";
            break;
        case 4:
            document.getElementById("v-0").style = "width: 100%; height: 68.8%; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: 45.4%; height: 31.2%; top: 68.8%; left: 54.6%;";
            document.getElementById("v-2").style = "width: 27.5%; height: 31.2%; top: 68.8%; left: 27.4%;";
            document.getElementById("v-3").style = "width: 27.4%; height: 31.2%; top: 68.8%; left: 0%;";
            break;
        case 5:
            // temp
            break;
        case 6:
            document.getElementById("v-0").style = "width: 100%; height: 68.8%; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: 20%; height: 15.6%; top: 68.8%; left: 0%;";
            document.getElementById("v-2").style = "width: 20%; height: 15.6%; top: 84.4%; left: 0%;";
            document.getElementById("v-3").style = "width: 20%; height: 15.6%; top: 68.8%; left: 20%;";
            document.getElementById("v-4").style = "width: 20%; height: 15.6%; top: 84.4%; left: 20%;";
            document.getElementById("v-5").style = "width: 45.4%; height: 31.2%; top: 68.8%; left: 54.6%;";
            document.getElementById("v-6").style = "width: 45.5%; height: 31.2%; top: 68.8%; left: 54.5%;";
            break;
        case 7:
            // temp
            break;
        case 8:
            document.getElementById("v-5").style = "width: 20%; height: 15.6%; top: 68.8%; left: 40%;";
            document.getElementById("v-8").style = "width: 45.5%; height: 31.2%; top: 68.8%; left: 54.5%;";
            break;
    }
}

setTimeout( setstyles(getplayers()) , 1000);
