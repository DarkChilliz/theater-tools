(function () {
    //https://stackoverflow.com/questions/9515704
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('js/main.js');
    s.onload = function() {
        var url=chrome.runtime.getURL("images/functionsmenu.png");
        var evt=document.createEvent("CustomEvent");
        evt.initCustomEvent("yourCustomEvent", true, true, url);
        document.dispatchEvent(evt);

        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})();
