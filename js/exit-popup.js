function exitPopUp(props){

    function getRCCLshield(){
        return document.querySelector('#logo-section');
    }

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
        popupOfferText.innerText = props.bannerDetails.offerText;
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
        popupOfferSubText.style.padding = '0px';
        popupOfferSubText.style.margin = '0px';

        var countDownFace = document.createElement('div');
        //countDownFace.style.background = 'magenta';
        countDownFace.style.width = '100%';
        countDownFace.style.height = 'auto';
        countDownFace.style.display = 'flex';
        countDownFace.style.justifyContent = 'center';
        countDownFace.style.alignItems = 'center';
        countDownFace.style.padding = '0px';
        countDownFace.style.margin = '0px';

        popup.appendChild(container);

        container.appendChild(popupOfferText);
        container.appendChild(popupOfferSubText);
        container.appendChild(countDownFace);

        var parentElement = document.querySelectorAll('.reveal-overlay')[document.querySelectorAll('.reveal-overlay').length-1];  
        parentElement.innerHTML = '';
        parentElement.style.justifyContent = 'center';
        parentElement.style.alignItems = 'center';
        parentElement.appendChild(popup);

        function setLayout(){
            if(window.innerWidth <= 639){
                popup.style.width = '100%';
                popup.style.height = '100%';
            }else if(window.innerWidth >= 640){
                popup.style.width = '600px';
                popup.style.height = 'auto';
            }
        }

        setLayout();

        window.addEventListener('resize', function(){
            setLayout();
        })

        return {
            parentElement: parentElement,
            popup: popup,
            container: container,
            popupOfferText:popupOfferText,
            popupOfferSubText: popupOfferSubText,
            countDownFace: countDownFace
        }
    }

    function countDownClock(components, timeZone){
        
        function countDown(){

            var popupClockContainer = document.createElement('div');
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
            clockHours.style.width = '50px';
            clockHours.style.height = 'auto';
            clockHours.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockHours.style.fontSize = '48px';
            clockHours.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
            clockHours.style.textAlign = 'center';
            clockHours.style.letterSpacing = '2px';
            clockHours.innerText = '00';

            var clockMinutes = document.createElement('div');
            //clockMinutes.style.background = 'green';
            clockMinutes.style.width = '50px';
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
            clockSeconds.style.width = '50px';
            clockSeconds.style.height = 'auto';
            clockSeconds.style.margin = '0px';
            clockSeconds.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockSeconds.style.fontSize = '48px';
            clockSeconds.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
            clockSeconds.style.textAlign = 'center';
            clockSeconds.style.letterSpacing = '2px';
            clockSeconds.innerText = '00';

            var clockColon = document.createElement('div');
            //clockColon.style.background = 'blue';
            clockColon.style.width = 'auto';
            clockColon.style.height = 'auto';
            clockColon.style.margin = '-15px 0px 0px 0px';
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
            hoursIndicator.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
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
            minutesIndicator.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
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
            secondsIndicator.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559' ;
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

            if(document.querySelector('#ge_epu-days-container')){
                document.querySelector('#ge_epu-days-container').remove();
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

        function daysLeft(numberOfDays){

            var timeLeftContainer = document.createElement('div');
            // timeLeftContainer.style.background = 'red';
            timeLeftContainer.style.width = '100%';
            timeLeftContainer.style.height = 'auto';
            timeLeftContainer.style.display = 'flex';
            timeLeftContainer.style.justifyContent = 'center';
            timeLeftContainer.style.alignItems = 'center';
            timeLeftContainer.style.margin = '10px 0px 0px 0px';
            timeLeftContainer.setAttribute('id', 'ge_epu-days-container');

            var timeLeftTextLast = document.createElement('p');
            //timeLeftTextLast.style.background = 'pink';
            timeLeftTextLast.style.width = 'auto';
            timeLeftTextLast.style.height = 'auto';
            timeLeftTextLast.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            timeLeftTextLast.style.fontSize = '54px';
            timeLeftTextLast.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
            timeLeftTextLast.style.textAlign = 'center';
            timeLeftTextLast.style.letterSpacing = '2px';
            timeLeftTextLast.innerText = props.countDown.showDays ? props.countDown.showDays.last : 'last';
            timeLeftTextLast.style.textTransform = 'uppercase';

            var timeLeftNumber = document.createElement('p');
            //timeLeftNumber.style.background = 'pink';
            timeLeftNumber.style.width = 'auto';
            timeLeftNumber.style.height = 'auto';
            timeLeftNumber.style.margin = '0px 15px';
            timeLeftNumber.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            timeLeftNumber.style.fontSize = '54px';
            timeLeftNumber.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
            timeLeftNumber.style.textAlign = 'center';
            timeLeftNumber.style.letterSpacing = '2px';
            timeLeftNumber.innerText = numberOfDays;
            timeLeftNumber.style.textTransform = 'uppercase';

            var timeleftTextDays = document.createElement('p');
            //timeleftTextDays.style.background = 'pink';
            timeleftTextDays.style.width = 'auto';
            timeleftTextDays.style.height = 'auto';
            timeleftTextDays.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            timeleftTextDays.style.fontSize = '54px';
            timeleftTextDays.style.color = props.bannerDetails.textColor ? props.bannerDetails.textColor : '#203559';
            timeleftTextDays.style.textAlign = 'center';
            timeleftTextDays.style.letterSpacing = '2px';
            timeleftTextDays.innerText = props.countDown.showDays ? props.countDown.showDays.days : 'days';
            timeleftTextDays.style.textTransform = 'uppercase';

            timeLeftContainer.appendChild(timeLeftTextLast);
            timeLeftContainer.appendChild(timeLeftNumber);
            timeLeftContainer.appendChild(timeleftTextDays);

            if(document.getElementById('ge_epu-clock-container')){
                document.getElementById('ge_epu-clock-container').remove();
            }

            if(document.querySelector('#ge_epu-days-container')){
                document.querySelector('#ge_epu-days-container').remove();
            }

            components.countDownFace.appendChild(timeLeftContainer);

            return {
                timeLeftContainer: timeLeftContainer
            }
        }

        function clock(timeZone){

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
            var time = clock(timeZone, props.countDown.dst);
            
            if(time.timerHours >= props.countDown.showDays.number * 24){
                var daysLeftComponents = daysLeft(time.timerDays);
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
        popupButtonContainer.style.margin = '10px 0px 0px 0px';

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

        function setLayout(){
            if(window.innerWidth <= 639){

                popupButtonContainer.style.height = '90px';
                popupButtonContainer.style.flexDirection = 'column';
                popupButtonContainer.style.alignItems = 'center';

                continueBtn.style.width = '100%';
                cancelBtn.style.width = '100%';

            }else if(window.innerWidth >= 640){

                popupButtonContainer.style.height = 'auto';
                popupButtonContainer.style.flexDirection = 'row';
                popupButtonContainer.style.alignItems = 'space-evenly';

                continueBtn.style.width = '240px';
                cancelBtn.style.width = '240px';

            }
        }

        setLayout();

        window.addEventListener('resize', function(){
            setLayout();
        });

        return {
            popupButtonContainer: popupButtonContainer,
            continueBtn: continueBtn,
            cancelBtn: cancelBtn
        }
    }

    function redirectUser(buttons, data){
        buttons.cancelBtn.addEventListener('click', function(){
            window.location.href = 'https://www.royalcaribbean.com/'+data.market+'/'+data.language+'?country='+data.market.toUpperCase
        });
    }

    function setTimeZone(country, dst){
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

        return timeZone;
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
        dataObject.market = page.split('/')[3];
        dataObject.language = page.split('/')[4];
        dataObject.timeZone = setTimeZone(dataObject.market, props.countDown.dst);

        return dataObject;
    }

    function validateCriteria(data, criteria){
        var checks = [];

        function checkSailDate(){

            var checkedDates = [];
            var date = new Date(data.sailDate + ' 00:00:00');

            criteria.sailingDates.forEach(function(sailingDate){
                var sailDepart = new Date(sailingDate.start + ' 00:00:00');
                var sailReturn = new Date(sailingDate.end + ' 00:00:00');

                if(date > sailDepart && date < sailReturn){
                    checkedDates.push(true);
                }else{
                    checkedDates.push(false);
                }
            });

            return checkedDates.indexOf(true) !== -1 ? true : false ;
            
        }
        checks.push(checkSailDate());

        function checkDestinations(){
            return criteria.destination.indexOf(data.destinationCode) !== -1 ? true : false ;
        }
        checks.push(checkDestinations());

        function checkNumberOfNights(){
            return data.numberOfNights >= criteria.numberOfNights.from && 
            data.numberOfNights <= criteria.numberOfNights.to ? true : false ;
        }
        checks.push(checkNumberOfNights());

        function checkShipCodes(){
            return criteria.shipCodes.indexOf(data.shipCode) !== -1 ? true : false ;
        }
        checks.push(checkShipCodes());

        return checks.indexOf(false) !== -1 ? false : true ; 
    }

    function validateExclusions(data, exclusions){
        var checks = [];

        function checkSailDate(){

            var checkedDates = [];
            var date = new Date(data.sailDate + ' 00:00:00');

            exclusions.sailingDates.forEach(function(sailingDate){
                var sailDepart = new Date(sailingDate.start + ' 00:00:00');
                var sailReturn = new Date(sailingDate.end + ' 00:00:00');

                if(date > sailDepart && date < sailReturn){
                    checkedDates.push(true);
                }else{
                    checkedDates.push(false);
                }
            });

            return checkedDates.indexOf(true) !== -1 ? true : false ;
            
        }
        checks.push(checkSailDate());

        function checkDestinations(){
            return exclusions.destination.indexOf(data.destinationCode) !== -1 ? true : false ;
        }
        checks.push(checkDestinations());

        function checkNumberOfNights(){
            return data.numberOfNights >= exclusions.numberOfNights.from && 
            data.numberOfNights <= exclusions.numberOfNights.to ? true : false ;
        }
        checks.push(checkNumberOfNights());

        function checkShipCodes(){
            return exclusions.shipCodes.indexOf(data.shipCode) !== -1 ? true : false ;
        }
        checks.push(checkShipCodes());

        return checks.indexOf(true) !== -1 ? true : false ;
    }

    function main(){
        var data = digestURL('https://www.royalcaribbean.com/gbr/en/booking/stateroom?sailDate=2020-02-03&shipCode=JW&packageCode=JW07U076&destinationCode=DUBAI&accessCabin=false&selectedCurrencyCode=GBP');
        //var data = digestURL(window.location.href);
        var validCriteria = validateCriteria(data, props.criteria);
        var validExclusions = validateExclusions(data, props.exclusions);
        var rcclShield = getRCCLshield();

        if(validCriteria === true && validExclusions === false){
            var popupComponent = popup();
            var countDown = countDownClock(popupComponent, data.timeZone);
            var buttons = popupButtons(popupComponent);

            rcclShield.addEventListener('click', function(){
                popupComponent.parentElement.style.display = 'flex';
            })
            
            buttons.continueBtn.addEventListener('click', function(){
                popupComponent.parentElement.style.display = 'none';
            })

            redirectUser(buttons, data);
        }

    }

    main();

}

document.addEventListener('DOMContentLoaded', ()=>{
    exitPopUp({
        bannerDetails:{
            backgroundColor: '#ffffff',
            offerText: 'Hello World + Hello World + Hellow World + Hello World',
            offerSubText: 'kids sail free',
            textColor: 'black',
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
            start:'Jan 24 2020 10:57:00',
            end: 'Jan 26 2020 21:59:00',
            dst: false,
            showDays: {
                last: 'last',
                number: 2,
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
            shipCodes: ['NV', 'JW'],
            numberOfNights: {from: 4, to: 7},
            destination: ['DUBAI', 'CARIB'],
        },
        exclusions:{
            sailingDates: [
                {
                    start: 'Feb 25 2020',
                    end: 'Mar 22 2020'
                },
                {
                    start: 'Aug 22 2020',
                    end: 'Sep 20 2020'
                }
            ],
            shipCodes: ['NV', 'AD'],
            numberOfNights: {from: 4, to: 6},
            destination: ['BAHAM', 'CARIB'],
        }
    });
});
