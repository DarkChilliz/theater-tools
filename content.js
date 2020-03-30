//https://stackoverflow.com/questions/9515704
(function () {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('main.js');
    s.onload = function() {
        // var url=chrome.runtime.getURL("menu.png");

        // var evt=document.createEvent("CustomEvent");
        // evt.initCustomEvent("yourCustomEvent", true, true, url);
        // document.dispatchEvent(evt);

        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})();

// "https://github.com/DarkChilliz/chrome-extension-twitchtheater.tv"
