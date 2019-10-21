//MEXICO PHONE NUMBER FIX
function mexicoPhoneEdit(){

    var url = window.location.href.split('=');
    var textNumber = '24 HORAS: 55-5062-9200 (CDMX) / 001855-877-3492 (INT)';

    //GET COOKIE FROM WUC RETURN COUNTRY
    function getCookie(){
        var cookieData = document.cookie;
        var country = cookieData.substring(cookieData.indexOf('wuc')+4, cookieData.indexOf('wuc')+7);
        return country;
    }

    //GET PHONE NUMBER CONTAINER ELEMENT AND CHANGE TEXT
    function getPhoneNumberContainer(text){
        var phoneNumberContainer;
        if(document.querySelector('.headerPhoneNumber__value')){
            phoneNumberContainer = document.querySelector('.headerPhoneNumber__value');
            phoneNumberContainer.innerText = text;
        }else{
            console.log('No header on page');
        }
    }

    //EXCUTE FUNCTIONS IF COOKIE OR PATH MATCH 
    if(getCookie() === 'MEX' || url[1] === 'MEX'){
        getPhoneNumberContainer(textNumber);
    }

}

var runCounter = 0;
var timer = setInterval(function(){
    if(runCounter < 5){
        mexicoPhoneEdit();
        runCounter++;
    }else{
        clearInterval(timer);
    }
},1000);



