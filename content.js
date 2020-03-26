//https://stackoverflow.com/questions/9515704
(function () {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('main.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})();
