(function () { 
    // "use_strict";
    
    function redirect() {
        window.location = "index.html";
    }

    document.getElementById("enter-button").onclick = function() {redirect()};
})()