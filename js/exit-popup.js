// window.addEventListener('load', function(){

//     //TEST COOKIE
//     document.cookie = "wuc=DEU";
//     document.cookie = "wul=de";

//     exitPopUp({
//         bannerDetails:{
//             backgroundColor: '#ffffff',
//             offerText: '30% off this great offer',
//             offerSubText: 'kids eat free',
//             textColor: '#ce0f69',
//         },
//         continueBtn:{
//             text: 'continue',
//             textColor: '#000000',
//             backgroundColor: '#febd11',
//         },
//         cancelBtn:{
//             text: 'cancel',
//             textColor: '#000000',
//             backgroundColor: '#ffffff',
//             borderColor: '#000000'
//         },
//         clock:{
//             hours:'HOURS',
//             minutes: 'MINUTES',
//             seconds: 'SECONDS',
//             hoursLeft: 'HOURS LEFT',
//             daysLeft: 'DAYS LEFT',
//             textColor: '#ce0f69'
//         },
//         countDown:{
//             start:'Dec 23 2019 10:00:00',
//             end: 'Dec 26 2019 16:00:00',
//         },
//         countries:[
//             'lac'
//         ]
//     }, false, false);
// });

// function exitPopUp(props, dst, showDays){

//     let countryInUrl = '';

//     let parentElement = document.querySelectorAll('.reveal-overlay')[document.querySelectorAll('.reveal-overlay').length-1];

//     if(document.getElementById('module-modal')){
//         document.getElementById('module-modal').remove();
//     }

//     let popup = document.createElement('div');
//     popup.style.background = props.bannerDetails.backgroundColor;
//     popup.style.width = '600px';
//     popup.style.height = '325px';
//     popup.style.borderRadius = '12px'; 
//     popup.style.display = 'flex';
//     popup.style.justifyContent = 'center';
//     popup.style.alignItems = 'center';
//     popup.style.webkitJustifyContent = 'center';
//     popup.style.webkitAlignItems = 'center';
//     popup.style.zIndex = '999';
    
//     let windowWidth = (window.innerWidth / 2) - (parseInt(popup.style.width) / 2) + 'px';
//     let windowHeight = (window.innerHeight / 2) - (parseInt(popup.style.height) / 2) + 'px';
//     popup.style.marginLeft = windowWidth;
//     popup.style.marginTop = windowHeight;

//     let container = document.createElement('div');
//     //container.style.background = 'red';
//     container.style.width = '500px';
//     container.style.height = 'auto';
//     container.style.margin = '10px';
//     container.style.display = 'flex';
//     container.style.justifyContent = 'center';
//     container.style.alignItems = 'center';
//     container.style.webkitJustifyContent = 'center';
//     container.style.webkitAlignItems = 'center';
//     container.style.flexDirection = 'column';

//     let popupOfferText =  document.createElement('h2');
//     //popupOfferText.style.background = 'purple';
//     popupOfferText.style.width = '100%';
//     popupOfferText.style.height = 'auto';
//     popupOfferText.style.color = props.bannerDetails.textColor;
//     popupOfferText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     popupOfferText.style.fontSize = '24px';
//     popupOfferText.style.color = props.bannerDetails.textColor;
//     popupOfferText.style.textAlign = 'center';
//     popupOfferText.innerText =props.bannerDetails.offerText;
//     popupOfferText.style.padding = '0px';
//     popupOfferText.style.margin = '0px';

//     let popupOfferSubText = document.createElement('h3');
//     //popupOfferSubText.style.background = 'green';
//     popupOfferSubText.style.width = '100%';
//     popupOfferSubText.style.height = '20px';//'auto';
//     popupOfferSubText.style.color = props.bannerDetails.textColor;
//     popupOfferSubText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     popupOfferSubText.style.fontSize = '16px';
//     popupOfferSubText.style.color = props.bannerDetails.textColor;
//     popupOfferSubText.style.textAlign = 'center';
//     popupOfferSubText.innerText = props.bannerDetails.offerSubText;

//     let popupClockContainer = document.createElement('div');
//     //popupClockContainer.style.background = 'pink';
//     popupClockContainer.style.width = '100%';
//     popupClockContainer.style.height = '60px';
//     popupClockContainer.style.display = 'flex';
//     popupClockContainer.style.justifyContent = 'center';


//     let clockHours = document.createElement('div');
//     //clockHours.style.background = 'green';
//     clockHours.style.width = '55px';
//     clockHours.style.height = 'auto';
//     clockHours.style.margin = '0px 15px 0px 15px';
//     clockHours.style.color = props.bannerDetails.textColor;
//     clockHours.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     clockHours.style.fontSize = '48px';
//     clockHours.style.color = props.bannerDetails.textColor;
//     clockHours.style.textAlign = 'center';
//     clockHours.style.letterSpacing = '2px';
//     clockHours.innerText = '00';

//     let clockMinutes = document.createElement('div');
//     //clockMinutes.style.background = 'green';
//     clockMinutes.style.width = '55px';
//     clockMinutes.style.height = 'auto';
//     clockMinutes.style.margin = '0px 15px 0px 15px';
//     clockMinutes.style.color = props.bannerDetails.textColor;
//     clockMinutes.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     clockMinutes.style.fontSize = '48px';
//     clockMinutes.style.color = props.bannerDetails.textColor;
//     clockMinutes.style.textAlign = 'center';
//     clockMinutes.style.letterSpacing = '2px';
//     clockMinutes.innerText = '00';

//     let clockSeconds = document.createElement('div');
//     //clockSeconds.style.background = 'green';
//     clockSeconds.style.width = '55px';
//     clockSeconds.style.height = 'auto';
//     clockSeconds.style.margin = '0px 15px 0px 15px';
//     clockSeconds.style.color = props.bannerDetails.textColor;
//     clockSeconds.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     clockSeconds.style.fontSize = '48px';
//     clockSeconds.style.color = props.bannerDetails.textColor;
//     clockSeconds.style.textAlign = 'center';
//     clockSeconds.style.letterSpacing = '2px';
//     clockSeconds.innerText = '00';

//     let clockColon = document.createElement('div');
//     //clockColon.style.background = 'blue';
//     clockColon.style.width = 'auto';
//     clockColon.style.height = 'auto';
//     clockColon.style.color = props.bannerDetails.textColor;
//     clockColon.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     clockColon.style.fontSize = '48px';
//     clockColon.style.color = props.bannerDetails.textColor;
//     clockColon.style.textAlign = 'center';
//     clockColon.innerText = ':';

//     let clockColonClone = clockColon.cloneNode(true);

//     let clockTextIndicators = document.createElement('div');
//     //clockTextIndicators.style.background = 'magenta';
//     clockTextIndicators.style.width = '100%';
//     clockTextIndicators.style.height = 'auto';
//     clockTextIndicators.style.padding = '0px 0px 0px 0px'
//     clockTextIndicators.style.display = 'flex';
//     clockTextIndicators.style.display = '-webkit-flex';
//     clockTextIndicators.style.justifyContent = 'center';
//     clockTextIndicators.style.webkitJustifyContent = 'center';

//     let hoursIndicator = document.createElement('p');
//     //hoursIndicator.style.background = 'cyan';
//     hoursIndicator.style.width = '52px';
//     hoursIndicator.style.height = 'auto';
//     hoursIndicator.style.margin = '0px 0px';
//     hoursIndicator.style.padding = '0px';
//     hoursIndicator.innerText = props.clock.hours;
//     hoursIndicator.color = props.clock.textColor;
//     hoursIndicator.style.fontSize = '11px';
//     hoursIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     hoursIndicator.style.textAlign = 'center';
//     hoursIndicator.style.color = props.clock.textColor;

//     let minutesIndicator = document.createElement('p');
//     //minutesIndicator.style.background = 'cyan';
//     minutesIndicator.style.width = '52px';
//     minutesIndicator.style.height = 'auto';
//     minutesIndicator.style.margin = '0px 47px';
//     minutesIndicator.style.padding = '0px';
//     minutesIndicator.innerText = props.clock.minutes;
//     minutesIndicator.color = props.clock.textColor;
//     minutesIndicator.style.fontSize = '11px';
//     minutesIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     minutesIndicator.style.textAlign = 'center';
//     minutesIndicator.style.color = props.clock.textColor;

//     let secondsIndicator = document.createElement('p');
//     //secondsIndicator.style.background = 'cyan';
//     secondsIndicator.style.width = '52px';
//     secondsIndicator.style.height = 'auto';
//     secondsIndicator.style.margin = '0px 0px';
//     secondsIndicator.style.padding = '0px';
//     secondsIndicator.innerText = props.clock.seconds;
//     secondsIndicator.color = props.clock.textColor;
//     secondsIndicator.style.fontSize = '11px';
//     secondsIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     secondsIndicator.style.textAlign = 'center';
//     secondsIndicator.style.color = props.clock.textColor;

//     let popupButtonContainer = document.createElement('div');
//     //popupButtonContainer.style.background = 'yellow';
//     popupButtonContainer.style.width = '100%';
//     popupButtonContainer.style.height = '60px';
//     popupButtonContainer.style.display = 'flex';
//     popupButtonContainer.style.justifyContent = 'space-between';
//     popupButtonContainer.style.alignItems = 'space-evenly';
//     popupButtonContainer.style.webkitJustifyContent = 'space-between';
//     popupButtonContainer.style.marginTop = '25px';

//     let continueBtn = document.createElement('button');
//     continueBtn.style.background = props.continueBtn.backgroundColor;
//     continueBtn.style.width = '240px';
//     continueBtn.style.height = '40px';
//     continueBtn.style.padding = '0px 0px 0px 0px';
//     continueBtn.style.color = props.continueBtn.textColor;
//     continueBtn.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     continueBtn.style.fontSize = '16px';
//     continueBtn.style.textAlign = 'center';
//     continueBtn.style.border = 'none';
//     continueBtn.style.cursor = 'pointer';
//     continueBtn.innerText = props.continueBtn.text;

//     let cancelBtn = continueBtn.cloneNode(true);
//     cancelBtn.style.background = props.cancelBtn.backgroundColor;
//     cancelBtn.innerText = props.cancelBtn.text;
//     cancelBtn.style.color = props.cancelBtn.textColor;
//     cancelBtn.style.border = 'solid 1px #000000';

//     let timeLeft = document.createElement('h2');
//     //timeLeft.style.background = 'red';
//     timeLeft.style.width = '100%';
//     timeLeft.style.height = 'auto';
//     timeLeft.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
//     timeLeft.style.fontSize = '38px';
//     timeLeft.style.padding = '0px';
//     timeLeft.style.margin = '0px';
//     timeLeft.style.color = props.bannerDetails.textColor;
//     timeLeft.style.textAlign = 'center';
//     timeLeft.style.display = 'flex';
//     timeLeft.style.justifyContent = 'center';
//     timeLeft.style.alignItems = 'center';

//     popup.appendChild(container);

//     container.appendChild(popupOfferText);
//     container.appendChild(popupOfferSubText);
//     container.appendChild(popupClockContainer);
//     container.appendChild(clockTextIndicators);
//     container.appendChild(popupButtonContainer);
    
//     popupClockContainer.appendChild(clockHours);
//     popupClockContainer.appendChild(clockColon);
//     popupClockContainer.appendChild(clockMinutes);
//     popupClockContainer.appendChild(clockColonClone);
//     popupClockContainer.appendChild(clockSeconds);

//     clockTextIndicators.appendChild(hoursIndicator);
//     clockTextIndicators.appendChild(minutesIndicator);
//     clockTextIndicators.appendChild(secondsIndicator);

//     popupButtonContainer.appendChild(continueBtn);
//     popupButtonContainer.appendChild(cancelBtn);

//     parentElement.appendChild(popup);

//     //CENTERS POPUP ON SCREEN
//     function centerPopup(){
//         let windowWidth = (window.innerWidth / 2) - (parseInt(popup.style.width) / 2) + 'px';
//         let windowHeight = (window.innerHeight / 2) - (parseInt(popup.style.height) / 2) + 'px';
//         popup.style.marginLeft = windowWidth;
//         popup.style.marginTop = windowHeight;
//     }

//     //DEFINES THE DESKTOP LAYOUT OF THE POPUP
//     function desktopLayout(){
//         popup.style.width = '600px';
//         popup.style.height = '325px';
//         popup.style.borderRadius = '12px';

//         popupButtonContainer.style.flexDirection = 'row';
//         popupButtonContainer.style.justifyContent = 'space-between';
//         popupButtonContainer.style.alignItems = 'center';
//         popupButtonContainer.style.height = '60px';

//         continueBtn.style.width = '240px';
//         continueBtn.style.marginBottom = '0px';
//         cancelBtn.style.width = '240px';
//     }

//     //DEFINES THE MOBILE LAYOUT OF THE POPUP
//     function mobileLayout(){
//         popup.style.width = '100%';
//         popup.style.height = '100%';
//         popup.style.margin = '0px 0px 0px 0px';
//         popup.style.borderRadius = '0px';

//         popupButtonContainer.style.flexDirection = 'column';
//         popupButtonContainer.style.justifyContent = 'center';
//         popupButtonContainer.style.height = '120px';

//         continueBtn.style.width = '100%';
//         continueBtn.style.marginBottom = '20px';
//         cancelBtn.style.width = '100%';
//     }

//     //SETS THE INITIAL LAYOUT OF THE POPUP 
//     function setLayout(screenWidth){
//         if(screenWidth <= 750){
//             mobileLayout();
//         }else if(screenWidth >= 751){
//             centerPopup();
//             desktopLayout();
//         }
//     }

//     //LISTEN TO WINDOW RESIZE TO 
//     window.addEventListener('resize', function(){
//         setLayout(window.innerWidth)
//     });

//     setLayout(window.innerWidth);

//     //CREATE INTERVAL THAT UPDATES COUNTDOWN CLOCK
//     var checkTimeInterval = setInterval(function(){ 
//         setTimeDigits(countryInUrl, dst);
//     }, 1000);
    
//     //THIS CLEARS THE TIMER ONCE THE COUNTDOWN REACHES 0
//     function stopTimer(){
//         clearInterval(checkTimeInterval);
//     }

//     //CLEARS THE DIGITS OF THE CLOCK WHEN THE COUNTDOWN IS GREATER THAN 72HRS
//     function clearClock(){
//         popupClockContainer.innerHTML = '';
//         clockTextIndicators.innerHTML = '';
//     }

//     function hoursLeft(hours){
//         timeLeft.innerText = hours + ' ' + props.clock.hoursLeft;
//         popupClockContainer.appendChild(timeLeft);
//     }
    
//     function daysLeft(days){
//         timeLeft.innerText = days + ' ' + props.clock.daysLeft;
//         popupClockContainer.appendChild(timeLeft);
//     }
  
//     //SET COUNTDOWN DIGITS TO MATCH CALCULATED TIME
//     function setTimeDigits(country, dst){
// 	    var daylightSavings = dst
//         var timeZone = '';

//         switch(country){
//             case 'lac':
//                 if (daylightSavings === true) {
//                   timeZone = 'GMT-0300';
//                 } else {
//                   timeZone = 'GMT-0400';
//                 }
//             break;
//             case 'gbr':
//             case 'irl':
//                 if (daylightSavings === true) {
//                     timeZone = 'GMT+0100';
//                     } else {
//                     timeZone = 'GMT-0000';
//                     }
//             break;
//             case 'deu':
//             case 'esp':
//             case 'ita':
//             case 'nor':
//             case 'swe':
//                 if (daylightSavings === true) {
//                   timeZone = 'GMT+0200';
//                 } else {
//                   timeZone = 'GMT+0100';
//                 }
//             break;
//             case 'mex':
//                 if (daylightSavings === true) {
//                   timeZone = 'GMT-0500';
//                 } else {
//                   timeZone = 'GMT-0600';
//                 }
//             break;
//             case 'sgp': 
//                 timeZone = 'GMT+0800';
//             break;
//         }

//         var beginDate = new Date(props.countDown.start+' '+timeZone);
//         var stopDate = new Date(props.countDown.end+' '+timeZone);
//         var currentDate = new Date();

//         var totalSeconds = Math.floor((stopDate - (currentDate))/1000);
//         var timerSeconds = Math.floor(totalSeconds % 60);
//         var timerMinutes = Math.floor(totalSeconds % 3600 / 60);
//         var timerHours = Math.floor(totalSeconds/3600);
//         var timerDays = Math.floor(timerHours/24);
        
//         //ADD AN EXTRA ZERO TO ANY DIGIT BELOW 10 
//         if(timerHours < 10){
//             timerHours = '0' + timerHours;
//         }
//         if(timerMinutes < 10){
//             timerMinutes = '0' + timerMinutes;
//         }
//         if(timerSeconds < 10){
//             timerSeconds = '0' + timerSeconds;
//         }

//         //CHANGE CLOCK FACE TO SHOW TIME REMAINING
//         if(timerHours >= 72){
//           if(showDays === false){
//             clearClock();
//             hoursLeft(timerHours);
//           }else if(showDays === true){
//           	clearClock();
//             daysLeft(timerDays);
//           }
//         }else{
//             clockHours.innerText = timerHours;
//             clockMinutes.innerText = timerMinutes;
//             clockSeconds.innerText = timerSeconds;
//         }

//         if(timerHours <= 0 && timerMinutes <= 0  && timerSeconds <= 0){
//             stopTimer();
//         }

//         if(beginDate > stopDate || currentDate > stopDate || beginDate > currentDate){
//             stopTimer();
//             clockHours.innerText = '00';
//             clockMinutes.innerText = '00';
//             clockSeconds.innerText = '00';
//             console.log('The start date for this coutdown is greater than the stop date');
//         }

//     }

//     //INVOKE setTimeDigits() FIRST TO AVOID BLANK DIGITS ON LOAD
//     //THE setTimeDigits() WILL ONLY RUN FOR COUNTRIES THAT ARE FOUND ON THE WINDOW HREF
//     var url = window.location.href;

//     props.countries.forEach(function(country){
//         if(url.indexOf(country) !== -1){
//             setTimeDigits(country, dst);
//             countryInUrl = country;
//         }
//     });

//     //CREATE EVENTS FOR CANCEL AND CONTINUE BUTTONS
//     let overlay = parentElement;
//     let rcclShield = document.querySelector('[data-open="modal"]');


//     //FADE AND HIDE POPUP
//     continueBtn.addEventListener('click', function(){
//         overlay.style.opacity = 1;
//         let fade = setInterval(function(){
//             overlay.style.opacity -= 0.10;
//         }, 100);
//         setTimeout(function(){
//             clearInterval(fade);
//             overlay.style.display = 'none';
//         },300);
//     });

//     //REDIRECT TO USER SPECIFIC COUNTRY URL
//     cancelBtn.addEventListener('click', function(){
//         window.location.href = setHomePageURL(getCookie());
//     });

//     //SHOW THE POP UP
//     rcclShield.addEventListener('click', function(){
//         overlay.style.opacity = 1.0;
//         overlay.style.display = 'block';
//     });

//     //GET COOKIE DATA AND RETURN COUNTRY AND LANGUAGE
//     function getCookie(){
//         var cookieData = document.cookie;
//         var country = cookieData.substring(cookieData.indexOf('wuc')+4, cookieData.indexOf('wuc')+7);
//         var language = cookieData.substring(cookieData.indexOf('wul')+4, cookieData.indexOf('wul')+6);
//         return {country: country, language: language};
//     }

//     //USING COOKIE DATA RETURN THE HOME PAGE URL 
//     function setHomePageURL(cookieData){

//         var url = '';

//         switch(cookieData.country){
//             case 'ARG':
//             case 'CHL':
//             case 'COL':
//             case 'PAN':
//                 url = 'lac/es?country='+cookieData.country;
//                 break;
//             case 'GBR':
//             case 'IRL':
//                 url = 'gbr/en?country='+cookieData.country;
//                 break;
//             case 'DEU':
//             case 'ESP':  
//             case 'ITA': 
//             case 'NOR':
//             case 'SWE':
//             case 'MEX':
//                 url = cookieData.country.toLowerCase()+'/'+cookieData.language+'?country='+cookieData.country;
//                 break;
//             default:
//                 url = '?country=USA';
//         }
//         return 'https://www.royalcaribbean.com/' + url;
//     }
// }

function exitPopUp(props){

    function popup(){

        var popup = document.createElement('div');
        popup.style.background = props.bannerDetails.backgroundColor ? props.bannerDetails.backgroundColor : '#ffffff';
        popup.style.width = '600px';
        popup.style.height = 'auto'; //'325px';
        popup.style.padding = '20px 0px';
        popup.style.borderRadius = '12px'; 
        popup.style.display = 'flex';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        popup.style.webkitJustifyContent = 'center';
        popup.style.webkitAlignItems = 'center';
        popup.style.zIndex = '999';

        var container = document.createElement('div');
        //container.style.background = 'red';
        container.style.width = '500px';
        container.style.height = 'auto';
        container.style.margin = '10px';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.webkitJustifyContent = 'center';
        container.style.webkitAlignItems = 'center';
        container.style.flexDirection = 'column';

        var popupOfferText =  document.createElement('h2');
        //popupOfferText.style.background = 'purple';
        popupOfferText.style.width = '100%';
        popupOfferText.style.height = 'auto';
        popupOfferText.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
        popupOfferText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        popupOfferText.style.fontSize = '24px';
        popupOfferText.style.textAlign = 'center';
        popupOfferText.innerText =props.bannerDetails.offerText;
        popupOfferText.style.padding = '0px';
        popupOfferText.style.margin = '0px';

        var popupOfferSubText = document.createElement('h3');
        //popupOfferSubText.style.background = 'green';
        popupOfferSubText.style.width = '100%';
        popupOfferSubText.style.height = '20px';//'auto';
        popupOfferSubText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        popupOfferSubText.style.fontSize = '16px';
        popupOfferSubText.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor: '#203559';
        popupOfferSubText.style.textAlign = 'center';
        popupOfferSubText.innerText = props.bannerDetails.offerSubText;

        var timeLeft = document.createElement('h2');
        //timeLeft.style.background = 'red';
        timeLeft.style.width = '100%';
        timeLeft.style.height = 'auto';
        timeLeft.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        timeLeft.style.fontSize = '38px';
        timeLeft.style.padding = '0px';
        timeLeft.style.margin = '0px';
        timeLeft.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
        timeLeft.style.textAlign = 'center';
        timeLeft.style.display = 'flex';
        timeLeft.style.justifyContent = 'center';
        timeLeft.style.alignItems = 'center';

        let countDownFace = document.createElement('div');
        //countDownFace.style.background = 'magenta';
        countDownFace.style.width = '100%';
        countDownFace.style.height = '50px';
        countDownFace.style.display = 'flex';
        countDownFace.style.justifyContent = 'center';
        countDownFace.style.alignItems = 'center';

        popup.appendChild(container);

        container.appendChild(popupOfferText);
        container.appendChild(popupOfferSubText);
        container.appendChild(countDownFace);

        var parentElement = document.querySelectorAll('.reveal-overlay')[document.querySelectorAll('.reveal-overlay').length-1];
        parentElement.style.display = 'flex';
        parentElement.style.justifyContent = 'center';
        parentElement.style.alignItems = 'center';
        parentElement.appendChild(popup);

        return {
            popup: popup,
            container: container,
            popupOfferText:popupOfferText,
            popupOfferSubText: popupOfferSubText,
            timeLeft: timeLeft,
            countDownFace: countDownFace
        }
    }

    function countDownClock(components){
        
        function countDown(){

            let popupClockContainer = document.createElement('div');
            //popupClockContainer.style.background = 'pink';
            popupClockContainer.style.width = '100%';
            popupClockContainer.style.height = 'auto';
            popupClockContainer.style.display = 'flex';
            popupClockContainer.style.justifyContent = 'center';
            popupClockContainer.style.alignItems = 'center';
            popupClockContainer.setAttribute('id', 'ge_epu-clock-container')

            var clockHoursContainer = document.createElement('div');
            //clockHoursContainer.style.background = 'red';
            clockHoursContainer.style.margin = '0px 15px';
            clockHoursContainer.style.display = 'flex';
            clockHoursContainer.style.flexDirection = 'column';
            clockHoursContainer.style.justifyContent = 'center';
            clockHoursContainer.style.alignItems = 'center';

            var clockMinutesContainer = document.createElement('div');
            //clockMinutesContainer.style.background = 'red';
            clockMinutesContainer.style.margin = '0px 15px';
            clockMinutesContainer.style.display = 'flex';
            clockMinutesContainer.style.flexDirection = 'column';
            clockMinutesContainer.style.justifyContent = 'center';
            clockMinutesContainer.style.alignItems = 'center';

            var clockSecondsContainer = document.createElement('div');
            //clockSecondsContainer.style.background = 'red';
            clockSecondsContainer.style.margin = '0px 15px';
            clockSecondsContainer.style.display = 'flex';
            clockSecondsContainer.style.flexDirection = 'column';
            clockSecondsContainer.style.justifyContent = 'center';
            clockSecondsContainer.style.alignItems = 'center';

            var clockHours = document.createElement('div');
            //clockHours.style.background = 'green';
            clockHours.style.width = 'auto';
            clockHours.style.height = 'auto';
            clockHours.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockHours.style.fontSize = '48px';
            clockHours.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
            clockHours.style.textAlign = 'center';
            clockHours.style.letterSpacing = '2px';
            clockHours.innerText = '00';

            var clockMinutes = document.createElement('div');
            //clockMinutes.style.background = 'green';
            clockMinutes.style.width = 'auto';
            clockMinutes.style.height = 'auto';
            clockMinutes.style.margin = '0px';
            clockMinutes.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockMinutes.style.fontSize = '48px';
            clockMinutes.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
            clockMinutes.style.textAlign = 'center';
            clockMinutes.style.letterSpacing = '2px';
            clockMinutes.innerText = '00';

            var clockSeconds = document.createElement('div');
            //clockSeconds.style.background = 'green';
            clockSeconds.style.width = 'auto';
            clockSeconds.style.height = 'auto';
            clockSeconds.style.margin = '0px';
            clockSeconds.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockSeconds.style.fontSize = '48px';
            clockSeconds.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
            clockSeconds.style.textAlign = 'center';
            clockSeconds.style.letterSpacing = '2px';
            clockSeconds.innerText = '00';

            let clockColon = document.createElement('div');
            //clockColon.style.background = 'blue';
            clockColon.style.width = 'auto';
            clockColon.style.height = 'auto';
            clockColon.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockColon.style.fontSize = '48px';
            clockColon.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
            clockColon.style.textAlign = 'center';
            clockColon.innerText = ':';

            var clockColonClone = clockColon.cloneNode(true);

            var hoursIndicator = document.createElement('p');
            //hoursIndicator.style.background = 'cyan';
            hoursIndicator.style.width = '52px';
            hoursIndicator.style.height = 'auto';
            hoursIndicator.style.margin = '0px';
            hoursIndicator.style.padding = '0px';
            hoursIndicator.innerText = props.clock.hours;
            hoursIndicator.style.color = props.clock.textColor ? props.clock.textColor : '#203559';
            hoursIndicator.style.fontSize = '11px';
            hoursIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            hoursIndicator.style.textAlign = 'center';

            var minutesIndicator = document.createElement('p');
            //minutesIndicator.style.background = 'cyan';
            minutesIndicator.style.width = '52px';
            minutesIndicator.style.height = 'auto';
            minutesIndicator.style.margin = '0px';
            minutesIndicator.style.padding = '0px';
            minutesIndicator.innerText = props.clock.minutes;
            minutesIndicator.style.color = props.clock.textColor ? props.clock.textColor : '#203559' ;
            minutesIndicator.style.fontSize = '11px';
            minutesIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            minutesIndicator.style.textAlign = 'center';

            var secondsIndicator = document.createElement('p');
            //secondsIndicator.style.background = 'cyan';
            secondsIndicator.style.width = '52px';
            secondsIndicator.style.height = 'auto';
            secondsIndicator.style.margin = '0px';
            secondsIndicator.style.padding = '0px';
            secondsIndicator.innerText = props.clock.seconds;
            secondsIndicator.style.color = props.clock.textColor ? props.clock.textColor : '#203559' ;
            secondsIndicator.style.fontSize = '11px';
            secondsIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            secondsIndicator.style.textAlign = 'center';

            clockHoursContainer.appendChild(clockHours);
            clockMinutesContainer.appendChild(clockMinutes);
            clockSecondsContainer.appendChild(clockSeconds);

            clockHoursContainer.appendChild(hoursIndicator);
            clockMinutesContainer.appendChild(minutesIndicator);
            clockSecondsContainer.appendChild(secondsIndicator);

            popupClockContainer.appendChild(clockHoursContainer);
            popupClockContainer.appendChild(clockColon);
            popupClockContainer.appendChild(clockMinutesContainer);
            popupClockContainer.appendChild(clockColonClone);
            popupClockContainer.appendChild(clockSecondsContainer);

            if(document.getElementById('ge_epu-clock-container')){
                document.getElementById('ge_epu-clock-container').remove();
            }

            components.countDownFace.appendChild(popupClockContainer);
            
            return {
                popupClockContainer: popupClockContainer,
                clockHours: clockHours,
                clockMinutes: clockMinutes,
                clockSeconds: clockSeconds,
                clockColon: clockColon,
                clockColonClone: clockColonClone,
                hoursIndicator: hoursIndicator,
                minutesIndicator: minutesIndicator,
                secondsIndicator: secondsIndicator
            }

        }

        function daysLeft(){

            let timeLeftContainer = document.createElement('div');
            timeLeftContainer.style.background = 'red';
            timeLeftContainer.style.width = '100%';
            timeLeftContainer.style.height = '50px';
            timeLeftContainer.style.display = 'flex';
            timeLeftContainer.style.justifyContent = 'center';
            timeLeftContainer.style.alignItems = 'center';
            timeLeftContainer.setAttribute('id', 'ge_epu-days-container')
            

            if(document.getElementById('ge_epu-days-container')){
                document.getElementById('ge_epu-days-container').remove();
            }

            components.countDownFace.appendChild(timeLeftContainer);

            return {
                timeLeftContainer: timeLeftContainer
            }
        }

        function clock(country, dst){
            var timeZone = '';

            switch(country){
                case 'lac':
                    if (dst === true) {
                        timeZone = 'GMT-0300';
                    } else {
                        timeZone = 'GMT-0400';
                    }
                break;
                case 'gbr':
                case 'irl':
                    if (dst === true) {
                        timeZone = 'GMT+0100';
                    } else {
                        timeZone = 'GMT-0000';
                    }
                break;
                case 'deu':
                case 'esp':
                case 'ita':
                case 'nor':
                case 'swe':
                    if (dst === true) {
                        timeZone = 'GMT+0200';
                    } else {
                        timeZone = 'GMT+0100';
                    }
                break;
                case 'mex':
                    if (dst === true) {
                        timeZone = 'GMT-0500';
                    } else {
                        timeZone = 'GMT-0600';
                    }
                break;
                case 'sgp': 
                    timeZone = 'GMT+0800';
                break;
                default:
                    if(dst === true){
                        timeZone = 'GMT-0400';
                    }else{
                        timeZone = 'GMT-0500'
                    }
            }

            var beginDate = props.countDown ? new Date(props.countDown.start+' '+timeZone) : null;
            var stopDate = props.countDown ? new Date(props.countDown.end+' '+timeZone) : null;
            var currentDate = new Date();
            var totalSeconds = Math.floor((stopDate - (currentDate))/1000);
            var timerSeconds = Math.floor(totalSeconds % 60);
            var timerMinutes = Math.floor(totalSeconds % 3600 / 60);
            var timerHours = Math.floor(totalSeconds/3600);
            var timerDays = Math.floor(timerHours/24);

            return {
                beginDate: beginDate,
                stopDate: stopDate,
                currentDate: currentDate,
                totalSeconds: totalSeconds,
                timerSeconds: timerSeconds,
                timerMinutes: timerMinutes,
                timerHours: timerHours,
                timerDays: timerDays
            }

        }

        function updateCountDown(){
            var time = clock(props.countries[0], props.countDown.dst);
            
            if(time.timerHours >= props.countDown.showDays.number * 24){
                var daysLeftComponents = daysLeft();
                console.log('show days left');
            }else{
                var countDownComponents = countDown();

                //ADD AN EXTRA ZERO TO ANY DIGIT BELOW 10 
                if(time.timerHours < 10){
                    time.timerHours = '0' + time.timerHours;
                }
                if(time.timerMinutes < 10){
                    time.timerMinutes = '0' + time.timerMinutes;
                }
                if(time.timerSeconds < 10){
                    time.timerSeconds = '0' + time.timerSeconds;
                }

                if(time.timerHours <= 0 && time.timerMinutes <= 0  && time.timerSeconds <= 0){
                    countDownComponents.clockHours.innerText = '00';
                    countDownComponents.clockMinutes.innerText = '00';
                    countDownComponents.clockSeconds.innerText = '00';
                }else if(time.beginDate > time.stopDate || time.currentDate > time.stopDate || time.beginDate > time.currentDate){
                    clearInterval(clockInterval);
                    countDownComponents.clockHours.innerText = '00';
                    countDownComponents.clockMinutes.innerText = '00';
                    countDownComponents.clockSeconds.innerText = '00';
                }else{
                    countDownComponents.clockHours.innerText = time.timerHours;
                    countDownComponents.clockMinutes.innerText = time.timerMinutes;
                    countDownComponents.clockSeconds.innerText = time.timerSeconds;
                }
            }
        }

        updateCountDown();

        var clockInterval = setInterval(function(){
            updateCountDown();   
        }, 500);

    }

    function popupButtons(components){

        var popupButtonContainer = document.createElement('div');
        //popupButtonContainer.style.background = 'yellow';
        popupButtonContainer.style.width = '100%';
        popupButtonContainer.style.height = 'auto';
        popupButtonContainer.style.display = 'flex';
        popupButtonContainer.style.justifyContent = 'space-between';
        popupButtonContainer.style.alignItems = 'space-evenly';
        popupButtonContainer.style.webkitJustifyContent = 'space-between';
        popupButtonContainer.style.marginTop = '25px';

        var continueBtn = document.createElement('button');
        continueBtn.style.background = props.continueBtn.backgroundColor ? props.continueBtn.backgroundColor : '#febd11';
        continueBtn.style.width = '240px';
        continueBtn.style.height = '40px';
        continueBtn.style.padding = '0px 0px 0px 0px';
        continueBtn.style.color = props.continueBtn.textColor ? props.continueBtn.textColor : '#203559';
        continueBtn.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        continueBtn.style.fontSize = '16px';
        continueBtn.style.textAlign = 'center';
        continueBtn.style.border = 'none';
        continueBtn.style.cursor = 'pointer';
        continueBtn.innerText = props.continueBtn.text;

        var cancelBtn = continueBtn.cloneNode(true);
        cancelBtn.style.background = props.cancelBtn.backgroundColor ? props.cancelBtn.backgroundColor : '#ffffff';
        cancelBtn.innerText = props.cancelBtn.text;
        cancelBtn.style.color = props.cancelBtn.textColor ? props.cancelBtn.textColor : '#203559' ;
        cancelBtn.style.border = 'solid 1px #000000';

        popupButtonContainer.appendChild(continueBtn);
        popupButtonContainer.appendChild(cancelBtn);

        components.container.appendChild(popupButtonContainer);

        return {
            popupButtonContainer: popupButtonContainer,
            continueBtn: continueBtn,
            cancelBtn: cancelBtn
        }
    }

    function redirectUser(components){
        //get cookie and redirect use back to home page
    }

    function digestURL(url){
        var page = url.split('?')[0];
        var query = url.split('?')[1];
        var codes = query.split('&');
        var dataCodes = codes.filter(function(code){
            return (code.indexOf('/') === -1 ? code : null);
        });

        var dataCodesSplit = [];
        dataCodes.forEach(function(dataCode){
            dataCodesSplit.push(dataCode.split('=')[0]);
            dataCodesSplit.push(dataCode.split('=')[1]);
        });

        var dataObject = {};
        for(var i = 0; i < dataCodesSplit.length; i+=2){
            //Object.assign(dataObject, {[dataCodesSplit[i]]: dataCodesSplit[i+1]});
            dataObject[dataCodesSplit[i]] = dataCodesSplit[i+1];
        }
        dataObject.page = page; 
        dataObject.numberOfNights = parseInt(dataObject.packageCode.substr(2, 2));

        return dataObject;
    }

    function validateCriteria(data, criteria){
        //validate sailing criteria
    }

    function main(){
        var data = digestURL('https://www.royalcaribbean.com/gbr/en/booking/stateroom?sailDate=2020-02-03&shipCode=JW&packageCode=JW07U076&destinationCode=DUBAI&accessCabin=false&selectedCurrencyCode=GBP');
        //var data = digestURL(window.location.href);
        var valid = validateCriteria(data);

        var popupComponent = popup();
        countDownClock(popupComponent);
        popupButtons(popupComponent);
        redirectUser(popupComponent);

        // if(data.page.indexOf('booking') !== -1 && valid === true){
        //     var popupComponent = popup();
        //     countDownClock(popupComponent);
        //     redirectUser(popupComponent);
        // }
    }

    main();

}

document.addEventListener('DOMContentLoaded', ()=>{
    exitPopUp({
        bannerDetails:{
            backgroundColor: '#ffffff',
            offerText: '30% off this great offer',
            offerSubText: 'kids sail free',
        },
        continueBtn:{
            text: 'continue',
            textColor: '#000000',
            backgroundColor: '#febd11',
        },
        cancelBtn:{
            text: 'cancel',
            textColor: '#000000',
            backgroundColor: '#ffffff',
            borderColor: '#000000'
        },
        clock:{
            hours:'HOURS',
            minutes: 'MINUTES',
            seconds: 'SECONDS',
            hoursLeft: 'HOURS LEFT',
            daysLeft: 'DAYS LEFT',
        },
        countDown:{
            start:'Jan 23 2020 10:00:00',
            end: 'Jan 26 2020 16:58:00',
            dst: false,
            showDays: {
                last: 'last',
                number: 3,
                days: 'days'
            }
        },
        criteria:{
            sailingDates: [
                {
                    start: 'Jan 22 2020',
                    end: 'Apr 31 2020'
                },
                {
                    start: 'Jul 22 2020',
                    end: 'Oct 20 2020'
                }
            ],
            shipCodes: ['NV', 'AD'],
            numberOfNights: [3, 7],
            destination: ['BAHAM', 'CARIB'],
        },
        exclusions:{
            sailingDates: [
                {
                    start: 'Feb 22 2020',
                    end: 'Mar 22 2020'
                },
                {
                    start: 'Aug 22 2020',
                    end: 'Sep 20 2020'
                }
            ],
            shipCodes: ['NV', 'AD'],
            numberOfNights: [3, 7],
            destination: ['BAHAM', 'CARIB'],
        },
        countries:['']
    });


    document.getElementById('clickity').onclick = ()=>{
        
        let overlay = document.querySelector('.reveal-overlay');
    
        if(overlay.style.display === 'none'){
            overlay.style.display = 'flex';
        }else{
            overlay.style.display = 'none';
        }
    }
});
