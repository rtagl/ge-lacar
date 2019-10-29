//THIS FUNCTION INITIALIZES THE INJECTION OF THE COMPONENT
function init(parent, callback){

    var timer = setInterval(function() {

        var el = document.querySelector(parent);
    
        if(el == null){
            console.log('Parent element not found, check DOM for element');
        }else{
            console.log('Component injected successfully');
            stopTimer();
            callback();
        }

    }, 500);

    function stopTimer(){
        clearInterval(timer);
    }
}