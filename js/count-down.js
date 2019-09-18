function countDown(parent, startDate, endDate, offer, countries){

    //COMPONENT CONTAINER
    var parentElement = document.querySelector(parent);

    //CREATE COMPONENT
    var countDownContainer = document.createElement('div');
    //countDownContainer.style.background = 'red';
    countDownContainer.style.width = '100%';
    countDownContainer.style.height = '68px';
    countDownContainer.style.display = 'flex';
    countDownContainer.style.justifyContent = 'space-between';

    //CREATE OFFER CONTAINER
    var offerContainer = document.createElement('div');
    offerContainer.style.background = '#15264C';
    offerContainer.style.width = '65%';
    offerContainer.style.height = '68px';
    offerContainer.style.transform = 'skewX(-28deg)';
    offerContainer.style.margin = '0px 0px 0px -22px';
    offerContainer.style.display = 'flex';
    offerContainer.style.justifyContent = 'center';
    offerContainer.style.alignItems = 'center';

    //CREATE OFFER TEXT CONTAINER
    var offerTextContainer = document.createElement('div');
    //offerTextContainer.style.background = 'red';
    offerTextContainer.style.width = '100%';
    offerTextContainer.style.height = '54px';
    offerTextContainer.style.transform = 'skewX(28deg)';
    offerTextContainer.style.display = 'flex';
    offerTextContainer.style.justifyContent = 'center';
    offerTextContainer.style.alignItems = 'center';

    //CREATE OFFER TEXT SUB CONTAINER
    var offerText = document.createElement('h2');
    offerText.innerText = offer.offer.toUpperCase();
    //offerText.style.background = 'blue';
    offerText.style.width = 'auto';
    offerText.style.height = 'auto';
    offerText.style.fontFamily = 'kapra, Helvetica';
    offerText.style.fontWeight = '400';
    offerText.style.fontSize = '40px';
    offerText.style.textAlign = 'center';
    offerText.style.letterSpacing = '2px';
    offerText.style.color = '#fff';
    offerText.style.padding = '0px 20px 0px 0px'

    //CREATE SUB TEXT CONTAINER
    var offerSubTextContainer = document.createElement('div');
    //offerSubTextContainer.style.background = 'yellow';
    offerSubTextContainer.style.width = 'auto';
    offerSubTextContainer.style.height = 'auto';

    //CREATE SUB TEXT
    var offerSubText = document.createElement('div');
    offerSubText.innerText = offer.text.toUpperCase();
    //offerSubText.style.background = 'purple';
    offerSubText.style.width = 'auto';
    offerSubText.style.height = 'auto';
    offerSubText.style.fontFamily = 'kapra, Helvetica';
    offerSubText.style.fontWeight = '400';
    offerSubText.style.fontSize = '28px';
    offerSubText.style.textAlign = 'center';
    offerSubText.style.letterSpacing = '2px';
    offerSubText.style.color = '#fff';

    //CREATE SUB TEXT
    var offerSubTextSmall = document.createElement('div');
    offerSubTextSmall.innerText = offer.subText.toUpperCase();
    //offerSubTextSmall.style.background = 'pink';
    offerSubTextSmall.style.width = 'auto';
    offerSubTextSmall.style.height = 'auto';
    offerSubTextSmall.style.fontFamily = 'ProximaNova-Light';
    offerSubTextSmall.style.fontWeight = '200';
    offerSubTextSmall.style.fontSize = '16px';
    offerSubTextSmall.style.textAlign = 'center';
    offerSubTextSmall.style.letterSpacing = '2px';
    offerSubTextSmall.style.color = '#fff';
    offerSubTextSmall.style.margin = '-7px 0px 0px 0px';

    //CREATE CLOCK CONTAINER
    var clockContainer = document.createElement('div');
    //clockContainer.style.background = 'purple';
    clockContainer.style.width = '35%';
    clockContainer.style.height = '68px';
    clockContainer.style.display = 'flex';
    clockContainer.style.justifyContent = 'center';
    clockContainer.style.alignItems = 'center';

    //CREATE COUNTDOWN CLOCK CONTAINER
    var clockFace = document.createElement('div');
    //clockFace.style.background = 'yellow';
    clockFace.style.width = '100%';
    clockFace.style.height = '65%';
    clockFace.style.display = 'flex';
    clockFace.style.justifyContent = 'center';

    //CREATE CLOCK TEXT CONTAINER
    var clockTextContainer = document.createElement('div');
    //clockTextContainer.style.background = 'blue';
    clockTextContainer.style.width = '100px';
    clockTextContainer.style.height = '100%';
    clockTextContainer.style.display = 'flex';
    clockTextContainer.style.justifyContent = 'flex-end';
    clockTextContainer.style.alignItems = 'center';

    //CREA CLOCK TEXT 
    var clockText = document.createElement('div');
    clockText.innerText = offer.timerText.toUpperCase();
    //clockText.style.background = 'magenta';
    clockText.style.width = 'auto';
    clockText.style.height = 'auto';
    clockText.style.fontFamily = 'kapra, Helvetica';
    clockText.style.fontSize = '14px';
    clockText.style.textAlign = 'right';
    clockText.style.letterSpacing = '2px';
    clockText.style.margin = '4px 0px 0px 0px';
    clockText.style.padding = '0px 10px 0px 0px';
    
    //CREATE CLOCK DIGITS
    var clockDigits = document.createElement('div');
    //clockDigits.style.background = 'purple';
    clockDigits.style.width = 'auto';
    clockDigits.style.height = '100%';
    clockDigits.style.display = 'flex';
    clockDigits.style.justifyContent = 'center';

    //CREATE CLOCK HOURS
    var hours = document.createElement('div');
    hours.classList.add('ge_cd-hours');
    //hours.style.background = 'pink';
    hours.style.width = '30px';
    hours.style.height = '40px';
    hours.style.fontFamily = 'kapra, Helvetica';
    hours.style.fontSize = '40px';
    hours.style.textAlign = 'center';
    hours.style.letterSpacing = '2px';

    //CREATE CLOCK MINUTES
    var minutes = document.createElement('div');
    minutes.classList.add('ge_cd-minutes');
    //minutes.style.background = 'pink';
    minutes.style.width = '30px';
    minutes.style.height = '40px';
    minutes.style.fontFamily = 'kapra, Helvetica';
    minutes.style.fontSize = '40px';
    minutes.style.textAlign = 'center';
    minutes.style.letterSpacing = '2px';
    
    //CREATE CLOCK SECONDS
    var seconds = document.createElement('div');
    seconds.classList.add('ge_cd-seconds');
    //seconds.style.background = 'pink';
    seconds.style.width = '30px';
    seconds.style.height = '40px';
    seconds.style.fontFamily = 'kapra, Helvetica';
    seconds.style.fontSize = '40px';
    seconds.style.textAlign = 'center';
    seconds.style.letterSpacing = '2px';

    //CREATE DIGITAL TIME COLON 
    var colon = document.createElement('div');
    //colon.style.background = 'pink';
    colon.style.width = '20px';
    colon.style.height = '40px';
    colon.style.fontFamily = 'kapra, Helvetica';
    colon.style.fontSize = '40px';
    colon.style.textAlign = 'center';
    colon.style.letterSpacing = '2px';
    colon.innerText = ':';

    var colonClone = colon.cloneNode(true);

    //APPEND OFFER CONTAINER TO COUNTDOWN CONTAINER
    countDownContainer.appendChild(offerContainer);

    //APPEND CLOCK CONTAINER TO COUNTDOWN CONTAINER
    countDownContainer.appendChild(clockContainer);

    //APPEND OFFER TEXT CONTAINER TO OFFER CONTAINER
    offerContainer.appendChild(offerTextContainer);

    //APPEND TEXT TO OFFER TEXT CONTAINER
    offerTextContainer.appendChild(offerText);
    offerTextContainer.appendChild(offerSubTextContainer);

    //APPEND CHILD NODES TO SUB TEXT CONTAINER
    offerSubTextContainer.appendChild(offerSubText);
    offerSubTextContainer.appendChild(offerSubTextSmall);

    //APPEND CLOCK FACE TO CLOCK CONTAINER
    clockContainer.appendChild(clockFace);

    //APPEND CLOCK TEXT TO CLOCK CONTAINER
    clockFace.appendChild(clockTextContainer);

    //APPEND CLOCK TEXT TO CLOCK TEXT CONTAINER
    clockTextContainer.appendChild(clockText);

    //APPEND CLOCK DIGITS TO CLOCK CONTAINER
    clockFace.appendChild(clockDigits);

    //APPEND CLOCK HOURS MINUTES AND SECONDS 
    clockDigits.appendChild(hours);
    clockDigits.appendChild(colon);
    clockDigits.appendChild(minutes);
    clockDigits.appendChild(colonClone);
    clockDigits.appendChild(seconds);

    //APPEND COUNTDOWN TO PARENT ELEMENT 
    parentElement.appendChild(countDownContainer);

    //SET MOBILE LAYOUT
    function mobileLayout(){
        countDownContainer.style.height = '136px';
        countDownContainer.style.flexDirection = 'column';
        countDownContainer.style.alignItems = 'center';

        offerContainer.style.width = '100%';
        offerContainer.style.height = '68px';
        offerContainer.style.transform = 'skewX(0deg)';
        offerContainer.style.margin = '0px';

        offerTextContainer.style.transform = 'skewX(0deg)';
        clockContainer.style.width = '220px';
        clockFace.style.justifyContent = 'center';
    }

    //SET DESKTOP LAYOUT;
    function desktopLayout(){
        countDownContainer.style.height = '68px';
        countDownContainer.style.flexDirection = 'row';

        offerContainer.style.width = '65%';
        offerContainer.style.height = '68px';
        offerContainer.style.transform = 'skewX(-28deg)';
        offerContainer.style.margin = '0px 0px 0px -22px';
        offerContainer.style.display = 'flex';
        offerContainer.style.justifyContent = 'center';
        offerContainer.style.alignItems = 'center';

        offerTextContainer.style.transform = 'skewX(28deg)';
        clockContainer.style.width = '35%';
        //clockFace.style.justifyContent = 'flex-start';

    }

    //SET FONT SIZE RESPONSIVENESS
    function setFontSize(screenWidth){
        if(screenWidth > 450){
            offerText.style.fontSize = '40px';
            offerSubText.style.fontSize = '28px';
            offerSubTextSmall.style.fontSize = '16px'; 
        }
        if(screenWidth < 450){
            offerText.style.fontSize = '30px';
            offerSubText.style.fontSize = '18px';
            offerSubTextSmall.style.fontSize = '14px';
        }
        if(screenWidth < 330){
            offerText.style.fontSize = '22px';
            offerSubText.style.fontSize = '16px';
            offerSubTextSmall.style.fontSize = '14px';
        }
    }

    //MOBILE READY FUNCTIONALITY
    function checkLayout(){
        var screenWidth = window.innerWidth;
    
            if(screenWidth < 768){
                mobileLayout();
            }
    
            if(screenWidth > 768){
                desktopLayout();
            }
            setFontSize(screenWidth);
    }

    window.addEventListener('resize', function(){
        checkLayout();
    });

    checkLayout();

    //CREATE INTERVAL THAT UPDATES COUNTDOWN CLOCK
    var checkTimeInterval = setInterval(function(){ 
        setTimeDigits(countryInUrl);
    }, 1000);
    
    //THIS CLEARS THE TIMER ONCE THE COUNTDOWN REACHES 0
    function stopTimer(){
        clearInterval(checkTimeInterval);
    }

    //SET COUNTDOWN DIGITS TO MATCH CALCULATED TIME
    function setTimeDigits(country){

        var timeZone = '';

        switch(country){
            case 'lac':
                timeZone = 'GMT-0300';
            break;
            case 'deu':
            case 'esp':
            case 'ita':
            case 'nor':
            case 'swe':
                timeZone = 'GMT+0200';
            break;
            case 'mex':
                timeZone = 'GMT-0500';
            break;
        }

        var beginDate = new Date(startDate+' '+timeZone);
        var stopDate = new Date(endDate+' '+timeZone);
        var currentDate = new Date();

        var totalSeconds = Math.floor((stopDate - (currentDate))/1000);
        var timerSeconds = Math.floor(totalSeconds % 60);
        var timerMinutes = Math.floor(totalSeconds % 3600 / 60);
        var timerHours = Math.floor(totalSeconds/3600);
        
        if(timerHours < 10){
            timerHours = '0' + timerHours;
        }
        if(timerMinutes < 10){
            timerMinutes = '0' + timerMinutes;
        }
        if(timerSeconds < 10){
            timerSeconds = '0' + timerSeconds;
        }

        hours.innerText = timerHours;
        minutes.innerText = timerMinutes;
        seconds.innerText = timerSeconds;

        if(timerHours <= 0 && timerMinutes <= 0  && timerSeconds <= 0){
            stopTimer();
        }

        if(beginDate > stopDate || currentDate > stopDate || beginDate > currentDate){
            stopTimer();
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
            console.log('The start date for this coutdown is greater than the stop date');
        }

    }

    //INVOKE setTimeDigits() FIRST TO AVOID BLACK DIGITS ON LOAD
    //THE setTimeDigits() WILL ONLY RUN FOR COUNTRIES THAT ARE FOUND ON THE WINDOW HREF
    var url = window.location.href;

    countries.forEach(function(country){
        if(url.indexOf(country) !== -1){
            setTimeDigits(country);
            countryInUrl = country;
        }
    });
    
}


