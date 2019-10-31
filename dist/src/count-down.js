// Countdown Banner Component
countDown(
  '.hero-image-container',
  'Oct 28 2019 17:44:00', // month day year hours-minutes-seconds
  'Oct 29 2019 23:59:59', // month day year hours-minutes-seconds
  {
    offer:     '',
    text:      'SOLO FINO AL 29 OTTOBRE',
    subText:   '',
    timerText: 'oferta termina in:'
  },
  ['ita'],
  'ULTIMI',
  'GIORNI',
  false
);

function countDown(parent, startDate, endDate, offer, countries, last, days, dst){

    //COMPONENT CONTAINER
    var parentElement = document.querySelector(parent);

    //CREATE COMPONENT
    var countDownContainer = document.createElement('div');
    //countDownContainer.style.background = 'red';
    countDownContainer.style.width = parentElement.clientWidth+'px';
    countDownContainer.style.height = '68px';
    countDownContainer.style.display = 'flex';
    countDownContainer.style.justifyContent = 'space-between';
    countDownContainer.classList.add("countdown-container");
    countDownContainer.style.margin = '0px auto 0px auto';
    countDownContainer.style.overflow = 'hidden';

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
    offerText.style.padding = '0px 20px 0px 0px';

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
    clockContainer.style.overflow = 'hidden';

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

    //CLONE COLON ELEMENT 
    var colonClone = colon.cloneNode(true);

    //CREATE DAYS LEFT CONTAINER
    var daysLeftContainer = document.createElement('div');
    //daysLeftContainer.style.background = 'red';
    daysLeftContainer.style.width = 'auto';
    daysLeftContainer.style.height = 'auto';
    daysLeftContainer.style.display = 'flex';
    daysLeftContainer.style.justifyContent = 'center';
    daysLeftContainer.style.alignItems = 'center';

    //CREATE DAYS LEFT NUMBER CONTAINER
    var daysLeftNumberContainer = document.createElement('div');
    //daysLeftNumberContainer.style.background = 'blue';
    daysLeftNumberContainer.style.width = 'auto';
    daysLeftNumberContainer.style.height = 'auto';
    daysLeftNumberContainer.style.padding = '0px 10px 0px 10px';

    //CREATE DAYS LEFT TEXT CONTAINER
    var daysLeftDaysContainer = document.createElement('div');
    //daysLeftDaysContainer.style.background = 'green';
    daysLeftDaysContainer.style.width = 'auto';
    daysLeftDaysContainer.style.height = 'auto';

    //CREATE DAYS LEFT COUNT TEXT
    if(last !== undefined){
        var daysLeftText = document.createElement('p');
        daysLeftText.innerText = last.toUpperCase();
        daysLeftText.style.fontFamily = 'kapra';
        daysLeftText.style.fontSize = '40px';
        daysLeftText.style.color = '#000';
        daysLeftText.style.letterSpacing = '2px';
    }else{
        var daysLeftText = document.createElement('p');
        daysLeftText.innerText = last;
    }

    //CREATE DAYS LEFT NUMER TEXT
    var daysLeftNumberText = document.createElement('p');
    daysLeftNumberText.innerText = '0';
    daysLeftNumberText.style.fontFamily = 'kapra';
    daysLeftNumberText.style.fontSize = '40px';
    daysLeftNumberText.style.color = '#000';
    daysLeftNumberText.style.letterSpacing = '2px';

    //CREATE DAYS LEFT TEXT
    if(days !== undefined){
        var daysLeftDayText = document.createElement('p');
        daysLeftDayText.innerText = days.toUpperCase();
        daysLeftDayText.style.fontFamily = 'kapra';
        daysLeftDayText.style.fontSize = '40px';
        daysLeftDayText.style.color = '#000';
        daysLeftDayText.style.letterSpacing = '2px';
    }else{
        var daysLeftDayText = document.createElement('p');
        daysLeftDayText.innerText = days;
    }

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

    //APPEND COUNTDOWN TO PARENT ELEMENT 
    parentElement.appendChild(countDownContainer);

    //APPENDS ALL THE ELEMENT OF THE CLOCK CONTAINER TO THE DOM
    function counterHours(){
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
    }

    function  counterDays(){
        //APPEND DAYS LEFT CONTAINER TO CLOCK CONTAINER
        clockContainer.appendChild(daysLeftContainer);

        //APPEND DAYS LEFT NUMBER CONTAINER TO CLOCK CONTAINER
        clockContainer.appendChild(daysLeftNumberContainer);

        //APPEND DAYS LEFT NUMBER CONTAINER TO CLOCK CONTAINER
        clockContainer.appendChild(daysLeftDaysContainer);

        //APPEND LAST TEXT TO DAYS LEFT CONTAINER
        daysLeftContainer.appendChild(daysLeftText);

        //APPEND LAST DAYS NUMBERS TO DAYS LEFT NUMBER CONTAINER
        daysLeftNumberContainer.appendChild(daysLeftNumberText);

        //APPEND DAY TEXT TO DAYS LEFT DAYS CONTAINER
        daysLeftDaysContainer.appendChild(daysLeftDayText);
    }

    function counterClear(){
        clockContainer.innerHTML = '';
    }

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
    function setFontSize(){
        if(window.matchMedia("(min-width: 990px)").matches){
            offerText.style.fontSize = '40px';
            offerSubText.style.fontSize = '28px';
            offerSubTextSmall.style.fontSize = '16px';
        }else if(window.matchMedia("(min-width: 920px)").matches){ 
            offerText.style.fontSize = '30px';
            offerSubText.style.fontSize = '22px';
            offerSubTextSmall.style.fontSize = '14px';
        }else if(window.matchMedia("(min-width: 810px)").matches){ 
            offerText.style.fontSize = '28px';
            offerSubText.style.fontSize = '18px';
            offerSubTextSmall.style.fontSize = '14px';
        }else if(window.matchMedia("(min-width: 450px)").matches){
            offerText.style.fontSize = '26px';
            offerSubText.style.fontSize = '18px';
            offerSubTextSmall.style.fontSize = '14px';
        }else if(window.matchMedia("(min-width: 330px)").matches){
            offerText.style.fontSize = '22px';
            offerSubText.style.fontSize = '16px';
            offerSubTextSmall.style.fontSize = '14px';
        }
    }

    //MOBILE READY FUNCTIONALITY
    function checkLayout(){
        var screenWidth = window.innerWidth;
        
            if(screenWidth > 1920){
                countDownContainer.style.width = '1920px';
            }else if(screenWidth < 1919){
                countDownContainer.style.width = '100%';
            }
            if(screenWidth < 768){
                mobileLayout();
            }
    
            if(screenWidth > 768){
                desktopLayout();
            }
            setFontSize();
    }

    window.addEventListener('resize', function(){
        checkLayout();
    });

    checkLayout();

    //CREATE INTERVAL THAT UPDATES COUNTDOWN CLOCK
    var countryInUrl = '';
    var checkTimeInterval = setInterval(function(){ 
        setTimeDigits(countryInUrl);
    }, 1000);
    
    //THIS CLEARS THE TIMER ONCE THE COUNTDOWN REACHES 0
    function stopTimer(){
        clearInterval(checkTimeInterval);
    }

    //SET COUNTDOWN DIGITS TO MATCH CALCULATED TIME
    function setTimeDigits(country){
        var daylightSavings = dst;
        var heroSubText = document.querySelector('.hero-subtext');
        var timeZone = '';

        switch(country){
            case 'lac':
                if (daylightSavings === true) {
                  timeZone = 'GMT-0300';
                } else {
                  timeZone = 'GMT-0400';
                }
            break;
            case 'deu':
            case 'esp':
            case 'ita':
            case 'nor':
            case 'swe':
                if (daylightSavings === true) {
                  timeZone = 'GMT+0200';
                } else {
                  timeZone = 'GMT+0100';
                }
            break;
            case 'mex':
                if (daylightSavings === true) {
                  timeZone = 'GMT-0500';
                } else {
                  timeZone = 'GMT-0600';
                }
            break;
        }

        var beginDate = new Date(startDate+' '+timeZone);
        var stopDate = new Date(endDate+' '+timeZone);
        var currentDate = new Date();

        var totalSeconds = Math.floor((stopDate - (currentDate))/1000);
        var timerSeconds = Math.floor(totalSeconds % 60);
        var timerMinutes = Math.floor(totalSeconds % 3600 / 60);
        var timerHours = Math.floor(totalSeconds/3600);
        
        //ADD AN EXTRA ZERO TO ANY DIGIT BELOW 10 
        if(timerHours < 10){
            timerHours = '0' + timerHours;
        }
        if(timerMinutes < 10){
            timerMinutes = '0' + timerMinutes;
        }
        if(timerSeconds < 10){
            timerSeconds = '0' + timerSeconds;
        }

        //CHANGE CLOCK FACE TO SHOW HOURS OR DAYS
        if(timerHours >= 72){
            counterDays();
            daysLeftNumberText.innerText = Math.floor(timerHours / 24);
        }else{
            counterClear();
            counterHours();
            hours.innerText = timerHours;
            minutes.innerText = timerMinutes;
            seconds.innerText = timerSeconds;
        }

        if(timerHours <= 0 && timerMinutes <= 0  && timerSeconds <= 0){
            stopTimer();
        }
        if (beginDate < currentDate && heroSubText) {
           heroSubText.style.display = 'none';

        }

        if(beginDate > stopDate || currentDate > stopDate){
            stopTimer();
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
            console.log('The start date for this coutdown is greater than the stop date');
        }
      
        if (beginDate > currentDate) {
           
           document.querySelector('.countdown-container').style.display = 'none';
        }
      
    }

    //INVOKE setTimeDigits() FIRST TO AVOID BLANK DIGITS ON LOAD
    //THE setTimeDigits() WILL ONLY RUN FOR COUNTRIES THAT ARE FOUND ON THE WINDOW HREF
    var url = window.location.href;

    countries.forEach(function(country){
        if(url.indexOf(country) !== -1){
            setTimeDigits(country);
            countryInUrl = country;
        }
    });
    
}