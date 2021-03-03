(function () {
    //https://stackoverflow.com/questions/9515704
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL('js/main.js');

    //https://stackoverflow.com/questions/9847580
    var isFirefox = typeof InstallTrigger !== 'undefined',
        isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
        txtFile = new XMLHttpRequest(),
        sFunctionsMenuURL = "img/functionsmenu.png",
        sPlayerStyleURL = "img/playerstyle.png",
        sContentHTML = "html/content.html",
        sMainCSS_URL = "css/main.css";

    if (isChrome == true) {
        //https://stackoverflow.com/questions/32344868 https://developer.chrome.com/extensions/extension#method-getURL
        sFunctionsMenuURL = chrome.runtime.getURL(sFunctionsMenuURL);
        sPlayerStyleURL = chrome.runtime.getURL(sPlayerStyleURL);
        sContentHTML = chrome.runtime.getURL(sContentHTML);
        sMainCSS_URL = chrome.runtime.getURL(sMainCSS_URL);
    }
    else if (isFirefox == true) {
        sFunctionsMenuURL = browser.extension.getURL(sFunctionsMenuURL);
        sPlayerStyleURL = browser.extension.getURL(sPlayerStyleURL);
        sContentHTML = browser.extension.getURL(sContentHTML);
        sMainCSS_URL = browser.extension.getURL(sMainCSS_URL);
    }

    //https://forums.tumult.com/t/2129
    txtFile.open("GET", sContentHTML, true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse
            if (txtFile.status === 200) {  // Makes sure its found the file

                script.onload = function() {
                    let url = {
                        functionsMenuImg: sFunctionsMenuURL,
                        playerStyleImg: sPlayerStyleURL,
                        funcMenuDivHtml: txtFile.responseText
                    },
                        event = new CustomEvent("sendImgURL", { detail: url });
                    document.dispatchEvent(event);
                    this.remove();
                };

                (document.head || document.documentElement).appendChild(script);
            }
        }
    }
    txtFile.send(null);

    //https://stackoverflow.com/questions/9721344
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = sMainCSS_URL;
    (document.head || document.documentElement).appendChild(style);
})();
