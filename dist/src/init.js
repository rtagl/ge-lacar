//THIS FUNCTION INITIALIZES THE INJECTION OF THE COMPONENT
function init(parent, callback){
    var counter = 0;

    var timer = setInterval(function() {

        var el = document.querySelector(parent);

        if(counter >= 20){
            console.log('Parent element not found, check DOM for element, end of loop.');
            stopTimer();
            return;
        }

        if(el === null){
            console.log(counter ,'Parent element not found, check DOM for element');
            counter++;
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
