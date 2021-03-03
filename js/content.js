(function () {
    //https://stackoverflow.com/questions/9515704
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL('js/main.js');

    //https://stackoverflow.com/questions/9847580
    var isFirefox = typeof InstallTrigger !== 'undefined',
        isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
        txtFile = new XMLHttpRequest(),
        functionsMenuURL = "img/functionsmenu.png",
        playerStyleURL = "img/playerstyle.png",
        contentHTML = "html/content.html",
        mainCSS_URL = "css/main.css";

    if (isChrome == true) {
        //https://stackoverflow.com/questions/32344868 https://developer.chrome.com/extensions/extension#method-getURL
        functionsMenuURL = chrome.runtime.getURL(functionsMenuURL);
        playerStyleURL = chrome.runtime.getURL(playerStyleURL);
        contentHTML = chrome.runtime.getURL(contentHTML);
        mainCSS_URL = chrome.runtime.getURL(mainCSS_URL);
    }
    else if (isFirefox == true) {
        functionsMenuURL = browser.extension.getURL(functionsMenuURL);
        playerStyleURL = browser.extension.getURL(playerStyleURL);
        contentHTML = browser.extension.getURL(contentHTML);
        mainCSS_URL = browser.extension.getURL(mainCSS_URL);
    }

    //https://forums.tumult.com/t/2129
    txtFile.open("GET", contentHTML, true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse
            if (txtFile.status === 200) {  // Makes sure its found the file

                script.onload = function() {
                    let url = {
                        functionsMenuImg: functionsMenuURL,
                        playerStyleImg: playerStyleURL,
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
    style.href = mainCSS_URL;
    (document.head || document.documentElement).appendChild(style);
})();
