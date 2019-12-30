function countDownBanner(props){

    var state = {
        timerExpired: false,
    }

    function parent(parentElement){
        return document.querySelector(parentElement);
    }

    function container(countDownActive, reverse){
        //creates and controls the banner and clock container
        var container = document.createElement('div');
        container.style.background = '#ffffff';
        container.style.width = '100%';
        container.style.height = '68px';
        container.style.overflow = 'hidden';
        container.style.display = 'flex';
        container.style.justifyContent = 'flex-start';

        function setContainerLayout(){
            if(countDownActive === true){
                if(window.innerWidth >= 1920){
                    container.style.width = '1920px';
                }else if(window.innerWidth <= 1919){
                    container.style.width = '100%';
                }
    
                if(window.innerWidth <= 768){
                    container.style.height = '136px';
                    container.style.flexDirection = reverse ? 'column-reverse' : 'column';
                    container.style.justifyContent = 'center';
                    container.style.alignItems = 'center';
                }else if(window.innerWidth >= 769){
                    container.style.height = '68px';
                    container.style.flexDirection = 'row';
                    container.style.justifyContent = 'flex-start';
                    container.style.alignItems = 'flex-start';
                }

            }
        }

        window.addEventListener('resize', function(){
            setContainerLayout();
        });

        setContainerLayout();

        return container;
    }

    function bannerNoCountDown(data){
        //creates and controls the banner
        var banner = document.createElement('div');
        banner.style.background = '#15264C';
        banner.style.width = '100%';
        banner.style.height = '68px';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'center';
        banner.style.alignItems = 'center';

        var bannerContent = document.createElement('div');
        //bannerContent.style.background = 'pink';
        bannerContent.style.width = '85%';
        bannerContent.style.height = '58px';
        bannerContent.style.display = 'flex';
        bannerContent.style.justifyContent = 'center';
        bannerContent.style.alignItems = 'center';

        var textFields = [];
        var textNodes = [];
        var subTextNodes = [];
        var textFontSize = [];
        var subTextFontSize = [];

        data.forEach(function(textField){

            var text = document.createElement('p');
            var subtext = document.createElement('p');

            var textFieldContainer = document.createElement('div');
            //textFieldContainer.style.background = 'orange';
            textFieldContainer.style.width = 'auto';
            textFieldContainer.style.height = 'auto';
            textFieldContainer.style.display = 'flex';
            textFieldContainer.style.flexDirection = 'column';
            textFieldContainer.style.justifyContent = 'center';
            textFieldContainer.style.alignItems = 'center';
            textFieldContainer.style.margin = '0px 5px';
            textFieldContainer.style.padding = '0px';

            if(textField.text){
                //text.style.background = 'green';
                text.style.width = '100%';
                text.style.height = 'auto';
                text.style.padding = '0px';
                text.style.margin = '0px';
                text.innerText = textField.text.text.toUpperCase();
                text.style.fontSize = textField.text.textSize;
                text.style.textAlign = textField.text.textAlign;
                text.style.color = '#ffffff';
                text.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
                text.style.letterSpacing = '2px';

                textFieldContainer.appendChild(text);
                textNodes.push(text);
                textFontSize.push(textField.text.textSize);
            }

            if(textField.subtext){
                //subtext.style.background = 'cyan';
                subtext.style.width = '100%';
                subtext.style.height = 'auto';
                subtext.style.padding = '0px';
                subtext.style.margin = '0px';
                subtext.innerText = textField.subtext.text.toUpperCase();
                subtext.style.fontSize = textField.subtext.textSize;
                subtext.style.textAlign = textField.subtext.textAlign;
                subtext.style.color = '#ffffff';
                subtext.style.fontFamily = 'ProximaNova-Light, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
                subtext.style.letterSpacing = '2px';

                textFieldContainer.appendChild(subtext);
                subTextNodes.push(subtext);
                subTextFontSize.push(textField.subtext.textSize);
            }

            textFields.push(textFieldContainer);

        });

        textFields.forEach(function(textField){
            bannerContent.appendChild(textField);
        });

        function loopAndSetFontSizes(props){
            if(window.innerWidth >= props.widths.bottom && window.innerWidth <= props.widths.top){
                textNodes.forEach(function(node, i){
                    node.style.fontSize = (parseInt(textFontSize[i]) / props.fontRatios.textRatio) + (window.innerWidth / props.windowRatios.textRatio) + 'px';
                });
    
                subTextNodes.forEach(function(node, i){
                    node.style.fontSize = (parseInt(subTextFontSize[i]) / props.fontRatios.subRatio) + (window.innerWidth / props.windowRatios.subRatio) + 'px';
                });
            }
        }

        function setFontSizes(){

            loopAndSetFontSizes(
                {
                    widths:{ bottom: 850, top: 1920}, 
                    fontRatios:{ textRatio: 2, subRatio: 2}, 
                    windowRatios:{ textRatio: 160, subRatio: 200}
                }
            );
            loopAndSetFontSizes(
                {
                    widths:{ bottom: 414, top: 849}, 
                    fontRatios:{ textRatio: 2.75, subRatio: 2.75}, 
                    windowRatios:{ textRatio: 200, subRatio: 240}
                }
            );
            loopAndSetFontSizes(
                {
                    widths:{ bottom: 280, top: 413}, 
                    fontRatios:{ textRatio: 3.25, subRatio: 1.75}, 
                    windowRatios:{ textRatio: 200, subRatio: 240}
                }
            );

        }

        window.addEventListener('resize', function(){
            setFontSizes();
        });
        
        setFontSizes();
        
        banner.appendChild(bannerContent);

        return banner;
    }

    function bannerWithCountDown(data){

        //creates and controls the banner
        var banner = document.createElement('div');
        banner.style.background = '#15264C';
        banner.style.width = '65%';
        banner.style.height = '68px';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'center';
        banner.style.alignItems = 'center';
        banner.style.transform = 'skewX(-28deg)';
        banner.style.margin = '0px 0px 0px -20px';

        var bannerContent = document.createElement('div');
        //bannerContent.style.background = 'pink';
        bannerContent.style.width = '85%';
        bannerContent.style.height = '58px';
        bannerContent.style.transform = 'skewX(28deg)';
        bannerContent.style.display = 'flex';
        bannerContent.style.justifyContent = 'center';
        bannerContent.style.alignItems = 'center';

        var textFields = [];
        var textNodes = [];
        var subTextNodes = [];
        var textFontSize = [];
        var subTextFontSize = [];

        data.forEach(function(textField){

            var text = document.createElement('p');
            var subtext = document.createElement('p');

            var textFieldContainer = document.createElement('div');
            //textFieldContainer.style.background = 'orange';
            textFieldContainer.style.width = 'auto';
            textFieldContainer.style.height = 'auto';
            textFieldContainer.style.display = 'flex';
            textFieldContainer.style.flexDirection = 'column';
            textFieldContainer.style.justifyContent = 'center';
            textFieldContainer.style.alignItems = 'center';
            textFieldContainer.style.margin = '0px 5px';
            textFieldContainer.style.padding = '0px';

            if(textField.text){
                //text.style.background = 'green';
                text.style.width = '100%';
                text.style.height = 'auto';
                text.style.padding = '0px';
                text.style.margin = '0px';
                text.innerText = textField.text.text.toUpperCase();
                text.style.fontSize = textField.text.textSize;
                text.style.textAlign = textField.text.textAlign;
                text.style.color = '#ffffff';
                text.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
                text.style.letterSpacing = '2px';

                textFieldContainer.appendChild(text);
                textNodes.push(text);
                textFontSize.push(textField.text.textSize);
            }

            if(textField.subtext){
                //subtext.style.background = 'cyan';
                subtext.style.width = '100%';
                subtext.style.height = 'auto';
                subtext.style.padding = '0px';
                subtext.style.margin = '0px';
                subtext.innerText = textField.subtext.text.toUpperCase();
                subtext.style.fontSize = textField.subtext.textSize;
                subtext.style.textAlign = textField.subtext.textAlign;
                subtext.style.color = '#ffffff';
                subtext.style.fontFamily = 'ProximaNova-Light, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
                subtext.style.letterSpacing = '2px';

                textFieldContainer.appendChild(subtext);
                subTextNodes.push(subtext);
                subTextFontSize.push(textField.subtext.textSize);
            }

            textFields.push(textFieldContainer);

        });

        textFields.forEach(function(textField){
            bannerContent.appendChild(textField);
        });

        function loopAndSetFontSizes(props){
            if(window.innerWidth >= props.widths.bottom && window.innerWidth <= props.widths.top){
                textNodes.forEach(function(node, i){
                    node.style.fontSize = (parseInt(textFontSize[i]) / props.fontRatios.textRatio) + (window.innerWidth / props.windowRatios.textRatio) + 'px';
                });
    
                subTextNodes.forEach(function(node, i){
                    node.style.fontSize = (parseInt(subTextFontSize[i]) / props.fontRatios.subRatio) + (window.innerWidth / props.windowRatios.subRatio) + 'px';
                });
            }
        }

        function setFontSizes(){

            loopAndSetFontSizes(
                {
                    widths:{ bottom: 850, top: 1920}, 
                    fontRatios:{ textRatio: 2, subRatio: 2}, 
                    windowRatios:{ textRatio: 160, subRatio: 200}
                }
            );
            loopAndSetFontSizes(
                {
                    widths:{ bottom: 414, top: 849}, 
                    fontRatios:{ textRatio: 2.75, subRatio: 2.75}, 
                    windowRatios:{ textRatio: 200, subRatio: 240}
                }
            );
            loopAndSetFontSizes(
                {
                    widths:{ bottom: 280, top: 413}, 
                    fontRatios:{ textRatio: 3.25, subRatio: 1.75}, 
                    windowRatios:{ textRatio: 200, subRatio: 240}
                }
            );

        }

        function setBannerLayout(){
            if(window.innerWidth <= 768){
                banner.style.width = '100%';
                banner.style.transform = 'skewX(0deg)';
                banner.style.margin = '0px';
                bannerContent.style.transform = 'skewX(0deg)';
            }else if(window.innerWidth >= 769){
                banner.style.width = '65%';
                banner.style.transform = 'skewX(-28deg)';
                banner.style.margin = '0px 0px 0px -20px';
                bannerContent.style.transform = 'skewX(28deg)';
            }
        }

        window.addEventListener('resize', function(){
            document.querySelector('.parent-el').innerText = window.innerWidth;
            setFontSizes();
            setBannerLayout();
        });
        
        setFontSizes();
        setBannerLayout();
        
        banner.appendChild(bannerContent);

        return banner;
    }

    function clock(data){
        
        //CLOCK WRAPPER ELEMENT
        var clockWrapper = document.createElement('div');
        //clockWrapper.style.background = 'blue';
        clockWrapper.style.width = '35%';
        clockWrapper.style.height = '68px';
        clockWrapper.style.display = 'flex';
        clockWrapper.style.justifyContent = 'center';
        clockWrapper.style.alignItems = 'center';

        function clockComponent(){
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
            clockText.classList.add('ge_cd-clock-text');
            clockText.innerText = data.clock.text.toUpperCase();
            //clockText.style.background = 'magenta';
            clockText.style.width = 'auto';
            clockText.style.height = 'auto';
            clockText.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            clockText.style.fontSize = '14px';
            clockText.style.textAlign = 'right';
            clockText.style.letterSpacing = '2px';
            clockText.style.margin = '4px 0px 0px 0px';
            clockText.style.padding = '0px 10px 0px 0px';
            clockText.style.color = '#15264C';
            
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
            hours.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            hours.style.fontSize = '40px';
            hours.style.textAlign = 'center';
            hours.style.letterSpacing = '2px';
            hours.style.color = '#15264C';
            hours.innerText = '00';

            //CREATE CLOCK MINUTES
            var minutes = document.createElement('div');
            minutes.classList.add('ge_cd-minutes');
            //minutes.style.background = 'pink';
            minutes.style.width = '30px';
            minutes.style.height = '40px';
            minutes.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            minutes.style.fontSize = '40px';
            minutes.style.textAlign = 'center';
            minutes.style.letterSpacing = '2px';
            minutes.style.color = '#15264C';
            minutes.innerText = '00';
            
            //CREATE CLOCK SECONDS
            var seconds = document.createElement('div');
            seconds.classList.add('ge_cd-seconds');
            //seconds.style.background = 'pink';
            seconds.style.width = '30px';
            seconds.style.height = '40px';
            seconds.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            seconds.style.fontSize = '40px';
            seconds.style.textAlign = 'center';
            seconds.style.letterSpacing = '2px';
            seconds.style.color = '#15264C';
            seconds.innerText = '00';

            //CREATE DIGITAL TIME COLON 
            var colon = document.createElement('div');
            colon.classList.add('ge_cd-colon');
            //colon.style.background = 'pink';
            colon.style.width = '20px';
            colon.style.height = '40px';
            colon.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            colon.style.fontSize = '40px';
            colon.style.textAlign = 'center';
            colon.style.letterSpacing = '2px';
            colon.style.color = '#15264C';
            colon.innerText = ':';

            //CLONE COLON ELEMENT 
            var colonClone = colon.cloneNode(true);

            //APPEND ALL CHILDREN TO RESPECTIVE PARENT ELEMENT
            clockTextContainer.appendChild(clockText);
            clockFace.appendChild(clockTextContainer);
            clockFace.appendChild(clockDigits);
            clockDigits.appendChild(hours);
            clockDigits.appendChild(colon);
            clockDigits.appendChild(minutes);
            clockDigits.appendChild(colonClone);
            clockDigits.appendChild(seconds);

            return {
                clockFace: clockFace,
                clockDigits: clockDigits,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                colon: colon
            }
        }

        function daysLeftComponent(numberOfDays){
            //CREATE DAYS LEFT CONTAINER
            var daysLeftContainer = document.createElement('div');
            //daysLeftContainer.style.background = 'red';
            daysLeftContainer.style.width = 'auto';
            daysLeftContainer.style.height = 'auto';
            daysLeftContainer.style.display = 'flex';
            daysLeftContainer.style.justifyContent = 'center';
            daysLeftContainer.style.alignItems = 'center';

            //CREATE LAST TEXT
            var last = document.createElement('p');
            last.innerText = data.clock.showDays.last ? data.clock.showDays.last.toUpperCase() : '' ;
            last.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            last.style.fontSize = '40px';
            last.style.color = '#15264C';
            last.style.letterSpacing = '2px';

            //CREATE DAYS TEXT
            var days = document.createElement('p');
            days.innerText = data.clock.showDays.days ? data.clock.showDays.days.toUpperCase() : '' ;
            days.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            days.style.fontSize = '40px';
            days.style.color = '#15264C';
            days.style.letterSpacing = '2px';

            //CREATE DAYS TEXT
            var daysLeftNumber = document.createElement('p');
            daysLeftNumber.innerText = numberOfDays;
            daysLeftNumber.style.fontFamily = 'kapra, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
            daysLeftNumber.style.fontSize = '40px';
            daysLeftNumber.style.color = '#15264C';
            daysLeftNumber.style.letterSpacing = '2px';
            daysLeftNumber.style.margin = '0px 10px';

            daysLeftContainer.appendChild(last);
            daysLeftContainer.appendChild(daysLeftNumber);
            daysLeftContainer.appendChild(days);

            return {
                daysLeftContainer: daysLeftContainer,
                last: last,
                daysLeftNumber: daysLeftNumber,
                days: days
            }
        }

        function setClockLayout(){
            if(window.innerWidth <= 768){
                clockWrapper.style.width = '250px';
            }
            if(window.innerWidth >= 768){
                clockWrapper.style.width = '35%';
            }
        }

        setClockLayout();

        window.addEventListener('resize', function(){
            setClockLayout();
        });

        //CREATE INTERVAL THAT UPDATES COUNTDOWN CLOCK
        var countryInUrl = '';
        var checkTimeInterval = setInterval(function(){
            setTimeDigits(countryInUrl);
        }, 10);
        
        //THIS CLEARS THE TIMER ONCE THE COUNTDOWN REACHES 0
        function stopTimer(){
            clearInterval(checkTimeInterval);
        }

        //SET COUNTDOWN DIGITS TO MATCH CALCULATED TIME
        function setTimeDigits(country){
            var timeZone = '';

            switch(country){
                case 'lac':
                    if (data.clock.dst === true) {
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
                    if (data.clock.dst === true) {
                    timeZone = 'GMT+0200';
                    } else {
                    timeZone = 'GMT+0100';
                    }
                break;
                case 'mex':
                    if (data.clock.dst === true) {
                    timeZone = 'GMT-0500';
                    } else {
                    timeZone = 'GMT-0600';
                    }
                break;
            }

            var beginDate = new Date(data.clock.start+' '+timeZone);
            var stopDate = new Date(data.clock.end+' '+timeZone);
            var currentDate = new Date();


            var totalSeconds = Math.floor((stopDate - (currentDate))/1000);
            var timerSeconds = Math.floor(totalSeconds % 60);
            var timerMinutes = Math.floor(totalSeconds % 3600 / 60);
            var timerHours = Math.floor(totalSeconds/3600);
            
            var daysLeft = daysLeftComponent(Math.floor(timerHours / 24));
            var clock = clockComponent();

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
            if(timerHours >= data.clock.showDays.number * 24){
                clockWrapper.innerHTML = '';
                clockWrapper.appendChild(daysLeft.daysLeftContainer);
            }else if(timerHours <= 0 && timerMinutes <= 0  && timerSeconds <= 0){
                clockWrapper.innerHTML = '';
                clockWrapper.style.display = 'none';
                stopTimer();
                state.timerExpired = true;
            }else if(beginDate > stopDate || currentDate > stopDate){
                clockWrapper.innerHTML = '';
                clockWrapper.style.display = 'none';
                stopTimer();
                state.timerExpired = true;
                console.log('The start date for this coutdown is greater than the stop date');
            }else{
                clockWrapper.innerHTML = '';
                clockWrapper.appendChild(clock.clockFace);
                
                clock.hours.innerText = timerHours;
                clock.minutes.innerText = timerMinutes;
                clock.seconds.innerText = timerSeconds;
            }
        
        }

        //INVOKE setTimeDigits() FIRST TO AVOID BLANK DIGITS ON LOAD
        //THE setTimeDigits() WILL ONLY RUN FOR COUNTRIES THAT ARE FOUND ON THE WINDOW HREF
        var url = window.location.href;

        data.countries.forEach(function(country){
            if(url.indexOf(country) !== -1){
                setTimeDigits(country);
                countryInUrl = country;
            }
        });

        return clockWrapper;
    }

    function initializeCountDown(props){
        var parentElement = parent(props.parent);

        var containerComponent = function(){
            if(props.timer && state.timerExpired === false){
                return container(true, props.timer.reverseLayout);
            }else{
                return container(false, false);
            }
        };

        var bannerComponent = function(){
            if(props.timer && state.timerExpired === false){
                return bannerWithCountDown(props.textFields);
            }else{
                return  bannerNoCountDown(props.textFields);
            }
        };

        var clockComponent = function(){
            if(props.timer){
                return clock({clock: props.timer, countries: props.countries});
            }else{
                return document.createElement('div');
            }
        };

        var countDownBanner = function(){
            var comp = containerComponent();
            comp.appendChild(bannerComponent());
            comp.appendChild(clockComponent());
            parentElement.appendChild(comp);

            var timer = setInterval(function(){
                if(state.timerExpired === true){
                    parentElement.innerHTML = '';
                    var comp = containerComponent();
                    comp.appendChild(bannerComponent());
                    comp.appendChild(clockComponent());
                    parentElement.appendChild(comp);
                    clearInterval(timer);
                }
            }, 10);
        }

        countDownBanner();
    }

    initializeCountDown(props);

}

countDownBanner({
    parent: '.parent',
    timer:{
        text: 'OFERTA TERMINA IN:',
        start: 'Dec 30 2019 11:30:00',
        end: 'Jan 01 2020 14:34:00',
        dst: false,
        showDays: {
            last: 'LAST',
            number: 2,
            days: 'DAYS'
        },
        reverseLayout: false,
    },
    countries: ['lac'],
    textFields:[
        {
            text:{
                text: 'hello world',
                textSize: '32px',
                textAlign: 'center',
            },
            subtext: {
                text: 'I\'m subtext',
                textSize: '12px',
                textAlign: 'center',
            }
        },
        {
            text:{
                text: '+',
                textSize: '48px',
                textAlign: 'center',
            }
        },
        {
            text:{
                text: 'hello world',
                textSize: '32px',
                textAlign: 'center',
            },
            subtext: {
                text: 'I\'m subtext',
                textSize: '14px',
                textAlign: 'center',
            }
        },
        {
            text:{
                text: '+',
                textSize: '48px',
                textAlign: 'center',
            }
        },
        {
            text:{
                text: 'hello world',
                textSize: '32px',
                textAlign: 'center',
            },
            subtext: {
                text: 'I\'m subtext',
                textSize: '14px',
                textAlign: 'center',
            }
        },
        
    ],
});