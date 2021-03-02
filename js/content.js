(function () {
    //https://stackoverflow.com/questions/9515704
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('js/main.js');

    //https://stackoverflow.com/questions/9847580
    var isFirefox = typeof InstallTrigger !== 'undefined',
        isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
        functionsMenuStr = "",
        playerStyleStr = "";

    if (isChrome == true) {
        functionsMenuStr = chrome.runtime.getURL("img/functionsmenu.png");
        playerStyleStr = chrome.runtime.getURL("img/playerstyle.png");
    }
    else if (isFirefox == true) {
        functionsMenuStr = browser.extension.getURL("img/functionsmenu.png");
        playerStyleStr = browser.extension.getURL("img/playerstyle.png");
    }

    s.onload = function() {
        var url = {
            functionsMenuImg: functionsMenuStr,
            playerStyleImg: playerStyleStr
        },
            event = new CustomEvent("sendImgURL", { detail: url });
        document.dispatchEvent(event);
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    //https://stackoverflow.com/questions/9721344
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/main.css');
    (document.head || document.documentElement).appendChild(style);
})();
