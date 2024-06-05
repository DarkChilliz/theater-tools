// temp.js
//

////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("chatdiv").appendChild(theaterMenuDiv);

(function() {
    let obj = document.getElementById("playdiv");

    obj.style.background = "black";
    obj.childNodes[1].style.display = "none";
    obj.childNodes[3].style.display = "none";
})();

// https://stackoverflow.com/a/5926068

// https://stackoverflow.com/a/68854570

////////////////////////////////////////////////////////////////////////////////////////

//original: https://stackoverflow.com/q/52184291
async function waitUntil(condition) {
    return await new Promise(resolve => {
        const interval = setInterval(() => {
                if (condition) {
                    resolve('foo');
                    clearInterval(interval);
                };
        }, 1000);
    });
}
//testing
async function waitUntil(condition) {
    return await new Promise(function() {
        const interval = setInterval(() => {
                if (condition) {
                    clearInterval(interval);
                    return 'foo';
                };
        }, 1000);
    });
}

////////////////////////////////////////////////////////////////////////////////////////
