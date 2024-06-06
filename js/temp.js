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

    // 1. Function
    function onKeyDown() {}

    // 2. Method
    class A {
        onKeyDown() {}
    }

    // 3. Static method
    class B {
        static onKeyDown() {}
    }

// https://softwareengineering.stackexchange.com/a/25015
    "MAJOR.MINOR.REVISION.BUILDNUMBER"
      "MAJOR", "is a major release (usually many new features or changes to the UI or underlying OS)"
      "MINOR", "is a minor release (perhaps some new features) on a previous major release"
      "REVISION", "is usually a fix for a previous minor release (no new functionality)"
      "BUILDNUMBER", "is incremented for each latest build of a revision."

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
