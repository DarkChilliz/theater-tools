// document.getElementsByTagName("body")[0].style.background = "#ffd700";
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
    switch(i) {
        case 2:
            document.getElementById("v-0").style = "width: 100%; height: 68.8%; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: 100%; height: 31.2%; top: 68.8%; left: 0%;";
            break;
        case 3:
            document.getElementById("v-0").style = "width: 100%; height: 68.8%; top: 0%; left: 0%;";
            document.getElementById("v-1").style = "width: 50%; height: 31.2%; top: 68.8%; left: 0%;";
            document.getElementById("v-2").style = "width: 50%; height: 31.2%; top: 68.8%; left: 50%;";
            break;
        case 4:
            // temp
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
console.log(getplayers());
