(function () {
    //https://stackoverflow.com/questions/9515704
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('js/main.js');
    s.onload = function() {
        var url = {
            functionsMenuImg: chrome.runtime.getURL("images/functionsmenu.png"),
            playerStyleImg: chrome.runtime.getURL("images/playerstyle.png")
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
