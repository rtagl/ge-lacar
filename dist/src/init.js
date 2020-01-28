function init(parent, callback){
    var counter = 0;

    var timer = setInterval(function() {

        var el = document.querySelector(parent);

        if(counter >= 20){
            stopTimer();
            return;
        }

        if(el === null){
            counter++;
        }else{
            stopTimer();
            callback();
        }

    }, 500);

    function stopTimer(){
        clearInterval(timer);
    }
}
