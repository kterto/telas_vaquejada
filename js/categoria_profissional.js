( function() {
    let state = {
        start: { 
            clicked: 0
        },
        square1: {
            clicked: 0
        },
        square2: {
            clicked: 0
        },
        square3: {
            clicked: 0
        },
        limpa: {
            clicked: 0
        },
        suja: {
            clicked: 0
        }
    }

    function start() {
        if(state.start.clicked === 0) {
            state.start.clicked = 1;
            // console.log(state.start.clicked);
            document.getElementById("rodizio-1").classList.add("rodizio-started");
            document.getElementById("vaquejada-header-1").classList.add("header-started");
            document.getElementById("start-btn").classList.remove("btn-header-play");
            document.getElementById("start-btn").classList.add("btn-header-started");
            document.getElementById("start-icon").classList.add("hidden");
            document.getElementById("pause-icon").classList.remove("hidden");
            document.getElementById("btn-header-text").classList.add("hidden");
            document.getElementById("btn-header-text-started").classList.remove("hidden");
        } else {
            state.start.clicked = 0;
            // console.log(state.start.clicked);
            document.getElementById("rodizio-1").classList.remove("rodizio-started");
            document.getElementById("vaquejada-header-1").classList.remove("header-started");
            document.getElementById("start-btn").classList.remove("btn-header-started");
            document.getElementById("start-btn").classList.add("btn-header-play");
            document.getElementById("start-icon").classList.remove("hidden");
            document.getElementById("pause-icon").classList.add("hidden");
            document.getElementById("btn-header-text").classList.remove("hidden");
            document.getElementById("btn-header-text-started").classList.add("hidden");
        }
    }

    document.getElementById("start-btn").onclick = function() { start(); }

    function darken(element) {
        // console.log(state[element].clicked);
        if(state[element].clicked === 0) {
            // console.log(state[element].clicked);
            document.getElementById(element).style.opacity = 1.0;
            state[element].clicked = 1;
        } else if (state[element].clicked === 1) {
            document.getElementById(element).style.opacity = 0.3;
            state[element].clicked = 0;
        }
        if( state.square1.clicked + state.square2.clicked + state.square3.clicked === 0) {
            document.getElementById("result").classList.remove("escrito");
            document.getElementById("result").innerHTML = " ";
        } else {
            document.getElementById("result").classList.add("escrito");
            document.getElementById("result").innerHTML = (state.square1.clicked + state.square2.clicked + state.square3.clicked)*10;
        }
    
    }

    document.getElementById("square1").onclick = function() { darken("square1")};
    document.getElementById("square2").onclick = function() { darken("square2")};
    document.getElementById("square3").onclick = function() { darken("square3")};

    if( state.square1.clicked + state.square2.clicked + state.square3.clicked === 0) {

    } else {
        document.getElementById("result").innerHTML = (state.square1.clicked + state.square2.clicked + state.square3.clicked)*10;
        document.getElementById("mc-1").style.borderLeft = "solid 10px blue";
    }

    function flimpa() {
        if(state.limpa.clicked === 0){
            state.limpa.clicked = 1;
            document.getElementById("check-limpa").classList.remove("unclicked");
            document.getElementById("square-limpa").classList.remove("square");
            document.getElementById("square-limpa").classList.add("lclicked");
        } else {
            state.limpa.clicked = 0;
            document.getElementById("square-limpa").classList.remove("lclicked");
            document.getElementById("square-limpa").classList.add("square");
            document.getElementById("check-limpa").classList.add("unclicked");
        }
    }

    document.getElementById("square-limpa").onclick = function() { flimpa() };

    function fsuja() {
        if(state.suja.clicked === 0){
            state.suja.clicked = 1;
            document.getElementById("check-suja").classList.remove("unclicked");
            document.getElementById("square-suja").classList.remove("square");
            document.getElementById("square-suja").classList.add("sclicked");
        } else {
            state.suja.clicked = 0;
            document.getElementById("square-suja").classList.remove("sclicked");
            document.getElementById("square-suja").classList.add("square");
            document.getElementById("check-suja").classList.add("unclicked");
        }
    }

    document.getElementById("square-suja").onclick = function() { fsuja() };

})()