(function () {
    let state = {
        counter: 0,
        stringState: ''
    }

    $('#checkbox-1').on("click", function() {
        $('a#checkbox-1>i').removeClass("hidden")
        if(!$('a#checkbox-1').hasClass("clicked")) {
            state.counter++;
            console.log(state.counter);
        } else {
            
        }
        $('a#checkbox-1').addClass("clicked");
    });

    $('#checkbox-2').on("click", function() {
        $('a#checkbox-2>i').removeClass("hidden")
        if(!$('a#checkbox-2').hasClass("clicked")) {
            state.counter++;
            console.log(state.counter);
        } else {
        
        }
        $('a#checkbox-2').addClass("clicked");
    });

    $('#checkbox-3').on("click", function() {
        $('a#checkbox-3>i').removeClass("hidden")
        if(!$('a#checkbox-3').hasClass("clicked")) {
            state.counter++;
            console.log(state.counter);
        } else {
        
        }
        $('a#checkbox-3').addClass("clicked");
    });

    $('#result').on("click", function () {
        if(!$('#result').hasClass("clicked")){
            state.stringState = 10*state.counter.toString();
            $('#result>span').append(document.createTextNode(state.stringState) );
            console.log(state.stringState);
        }
        else {

        }
        $('#result').addClass("clicked");
    })

})()