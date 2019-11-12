var props = {
    bannerDetails:{
        backgroundColor: '#005edc',
        textColor: '#fff',
        text: dictionary.support.promoCode.banner.text.US,
        subtext: dictionary.support.promoCode.banner.subText.US,
        code: 'GET IT'
    },
    buttonDetails:{
        content:{
            header: dictionary.support.promoCode.button.offerText.US,
            subtext: dictionary.support.promoCode.button.subText.US,
        },
        button:{
            backgroundColor: '#005EDC',
            textColor: '#fff',
            text: dictionary.support.promoCode.button.buttonText.US
        }
    },
    promoCriteria:[
        {
            shipCodes: ['MJ'],
            destinations: [
                destinationCodes.BAHAM,
                destinationCodes.CARIB
            ],
            dateRange: [
                promoSeasons.summer2020,
                promoSeasons.winter
            ],
        },
        {
            shipCodes: ['AL'],
            destinations: [
                destinationCodes.BAHAM,
                destinationCodes.CARIB
            ],
            dateRange: [
                promoSeasons.summer2020,
                promoSeasons.winter
            ],
        },
    ],
    promoBlurb:{
        parent: '.innerPanel',
        text: 'Apply your code now to get your offer discounted, woohoo!!! Saving money!!! GET IT!'
    }
}

function promoCode(props){

    var pageURL = window.location.href;
    var page = digestURL(pageURL).page

    function digestURL(url){
        var page = url.split('?')[0];
        var query = url.split('?')[1];
        var codes = query.split('&');
        let dataCodes = codes.filter(function(code){
            return (code.indexOf('/') === -1 ? code : null);
        });

        let dataCodesSplit = [];
        dataCodes.forEach(function(dataCode, i){
            dataCodesSplit.push(dataCode.split('=')[0]);
            dataCodesSplit.push(dataCode.split('=')[1]);
        });

        let dataObject = {};
        for(var i = 0; i < dataCodesSplit.length; i+=2){
            //Object.assign(dataObject, {[dataCodesSplit[i]]: dataCodesSplit[i+1]});
            dataObject[dataCodesSplit[i]] = dataCodesSplit[i+1];
        }
        dataObject.page = page; 

        return dataObject;
    }

    //CREATES THE PROMO BANNER COMPONENT
    function createPromoCodeBanner(){

        //POLYFILL FOR .remove()
        (function (arr) {
            arr.forEach(function (item) {
                if (item.hasOwnProperty('remove')) {
                return;
                }
                Object.defineProperty(item, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    if (this.parentNode === null) {
                    return;
                    }
                    this.parentNode.removeChild(this);
                }
                });
            });
        })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

        clearDuplicates();

        var promoBanner = document.createElement('div');
        promoBanner.style.background = props.bannerDetails.backgroundColor;
        promoBanner.style.width = '100%';
        promoBanner.style.height = 'auto';
        promoBanner.style.padding = '20px 0px 20px 0px';
        promoBanner.style.display = 'flex';
        promoBanner.style.justifyContent = 'center';
        promoBanner.style.alignItems = 'center';
        promoBanner.setAttribute('id', 'ge_promoBanner');

        var promoBannerText = document.createElement('h2');
        //promoBannerText.style.background = 'red';
        promoBannerText.style.width = 'auto';
        promoBannerText.style.height = 'auto';
        promoBannerText.innerText = props.bannerDetails.text.toUpperCase();
        promoBannerText.style.color = props.bannerDetails.textColor;
        promoBannerText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        promoBannerText.style.fontSize = '32px';
        promoBannerText.style.textAlign = 'center';
        promoBannerText.style.margin = '0px 40px 0px 0px';
        promoBannerText.style.letterSpacing = '3.2px';

        var promoBannerBoxText = document.createElement('p');
        //promoBannerBoxText.style.background = 'green';
        promoBannerBoxText.style.width = 'auto';
        promoBannerBoxText.style.height = 'auto';
        promoBannerBoxText.style.border = 'solid 1px ' + props.bannerDetails.textColor;
        promoBannerBoxText.style.padding = '4px 20px 4px 20px';
        promoBannerBoxText.style.textAlign = 'center';
        promoBannerBoxText.innerText = props.bannerDetails.subtext.toUpperCase() + ':';
        promoBannerBoxText.style.color = props.bannerDetails.textColor;
        promoBannerBoxText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        promoBannerBoxText.style.fontSize = '16px';
        promoBannerBoxText.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.19), 0 4px 4px rgba(0, 0, 0, 0.23)';
        promoBannerBoxText.style.margin = '0px 0px 0px 40px';
        promoBannerBoxText.style.display = 'flex';
        promoBannerBoxText.style.justifyContent = 'center';
        promoBannerBoxText.style.alignItems = 'center';

        var promoBannerBoxTextSpan = document.createElement('span');
        promoBannerBoxTextSpan.innerText = props.bannerDetails.code; 
        promoBannerBoxTextSpan.style.fontSize = '24px';
        promoBannerBoxTextSpan.style.textAlign = 'center';
        promoBannerBoxTextSpan.style.padding = '0px 0px 0px 15px';

         //APPENDS ALL THE ELEMENTS OF THE PROMO BANNER COMPONENT
        promoBanner.appendChild(promoBannerText);
        promoBanner.appendChild(promoBannerBoxText);
        promoBannerBoxText.appendChild(promoBannerBoxTextSpan);

        return {
            promoBanner: promoBanner,
            promoBannerText: promoBannerText,
            promoBannerBoxText: promoBannerBoxText,
            promoBannerBoxTextSpan: promoBannerBoxTextSpan
        };
    }

    //CREATE APPLY POP UP BLURB TEXT
    function createPromoCodeBlurb(parent, text){
        var blurb = document.createElement('p');
        //blurb.style.background = 'red';
        blurb.style.width = '95%';
        blurb.style.height ='auto';
        blurb.style.margin = '30px auto 0px auto'
        blurb.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        blurb.style.fontSize = '16px';
        blurb.style.fontWeight = '400';
        blurb.innerText = text;
        blurb.style.textAlign = 'left';

        //GET BLURB TARGET ELEMENT
        var blurbTarget = document.querySelector(parent);

        //APPEND BLURB TO TARGET
        blurbTarget.appendChild(blurb);
    }

    function promoBannerMobileLayout(promoBanner){
        promoBanner.promoBanner.style.flexFlow = 'column';
        promoBanner.promoBannerText.style.padding = '10px 0px 10px 0px';
        promoBanner.promoBannerText.style.margin = '0px 0px 0px 0px';
        promoBanner.promoBannerBoxText.style.margin = '0px 0px 0px 0px';
    }

    function promoBannerDesktopLayout(promoBanner){
        promoBanner.promoBanner.style.flexFlow = 'row';
        promoBanner.promoBannerText.style.padding = '0px';
        promoBanner.promoBannerText.style.margin = '0px 40px 0px 0px';
        promoBanner.promoBannerBoxText.style.margin = '0px 0px 0px 40px';
    }

    //CREATES THE APPLY PROMO CODE COMPONENT
    function createApplyPromoCodeBtn(){

        clearDuplicates();

        var applyPromoContainer = document.createElement('div');
        //applyPromoContainer.style.background = 'yellow';
        applyPromoContainer.style.width = '100%';
        applyPromoContainer.style.height = 'auto';
        applyPromoContainer.style.display = 'flex';
        applyPromoContainer.style.flexDirection = 'column';
        applyPromoContainer.style.justifyContent = 'center';
        applyPromoContainer.style.alignItems = 'center';
        applyPromoContainer.setAttribute('id', 'ge_promoBtn');

        var applyPromoHeader = document.createElement('h4');
        //applyPromoHeader.style.background = 'yellow';
        applyPromoHeader.style.width = '100%';
        applyPromoHeader.style.height = 'auto';
        applyPromoHeader.style.padding = '0px';
        applyPromoHeader.style.margin = '0px';
        applyPromoHeader.style.fontSize = '16px';
        applyPromoHeader.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        applyPromoHeader.style.textAlign = 'center';
        applyPromoHeader.innerText = props.buttonDetails.content.header;

        var applyPromoSubText = document.createElement('p');
        //applyPromoSubText.style.background = 'purple';
        applyPromoSubText.style.width = '100%';
        applyPromoSubText.style.height = 'auto';
        applyPromoSubText.style.padding = '0px';
        applyPromoSubText.style.margin = '10px 0px 0px 0px';
        applyPromoSubText.style.fontSize = '12px';
        applyPromoSubText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        applyPromoSubText.style.textAlign = 'center';
        applyPromoSubText.innerText = props.buttonDetails.content.subtext;

        var applyPromoCode = document.createElement('h2');
        //applyPromoCode.style.background = 'orange';
        applyPromoCode.style.width = '100%';
        applyPromoCode.style.height = 'auto';
        applyPromoCode.style.padding = '0px';
        applyPromoCode.style.margin = '0px';
        applyPromoCode.style.fontSize = '32px';
        applyPromoCode.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        applyPromoCode.style.textAlign = 'center';
        applyPromoCode.innerText = props.bannerDetails.code;

        var applyPromoZero = document.createElement('p');
        //applyPromoZero.style.background = 'magenta';
        applyPromoZero.style.width = '100%';
        applyPromoZero.style.height = 'auto';
        applyPromoZero.style.padding = '0px';
        applyPromoZero.style.margin = '0px';
        applyPromoZero.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        applyPromoZero.style.fontSize = '12px';
        applyPromoZero.style.color = '#000000';
        applyPromoZero.style.textAlign = 'center';
        applyPromoZero.innerText = '0';

        //APPENDS ALL THE ELEMENTS OF THE APPLY PROMO BUTTON COMPONENT
        applyPromoContainer.appendChild(applyPromoHeader);
        applyPromoContainer.appendChild(applyPromoSubText);
        applyPromoContainer.appendChild(applyPromoCode);
        applyPromoContainer.appendChild(applyPromoZero);

        var applyPromoBtnTarget = document.querySelector('#exclusive_rates');
        var pageLink = applyPromoBtnTarget.children[0];


        //CLEAR CONTAINER CONTENTS AND ADJUST LAYOUT
        applyPromoBtnTarget.innerHTML = '';
        applyPromoBtnTarget.style.marginBottom = '12px';

        //CREATE NEW BUTTON OF PAGELINK
        var applyPromoCodeBtn = pageLink;
        applyPromoCodeBtn.style.background = props.buttonDetails.button.backgroundColor;
        applyPromoCodeBtn.style.width = '240px';
        applyPromoCodeBtn.style.height = 'auto';
        applyPromoCodeBtn.style.padding = '10px 0px';
        applyPromoCodeBtn.style.margin = '16px 0px';
        applyPromoCodeBtn.style.border = 'none';
        applyPromoCodeBtn.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
        applyPromoCodeBtn.style.fontSize = '18px';
        applyPromoCodeBtn.style.fontWeight = '800';
        applyPromoCodeBtn.style.textAlign = 'center';
        applyPromoCodeBtn.style.letterSpacing = '2px';
        applyPromoCodeBtn.style.color = props.buttonDetails.button.textColor;
        applyPromoCodeBtn.style.textDecoration = 'none';
        applyPromoCodeBtn.innerText = props.buttonDetails.button.text.toUpperCase();

        applyPromoContainer.appendChild(applyPromoHeader);
        applyPromoContainer.appendChild(applyPromoSubText);
        applyPromoContainer.appendChild(applyPromoCode);
        applyPromoContainer.appendChild(applyPromoCodeBtn);
        applyPromoContainer.appendChild(applyPromoZero);

        return {
            applyPromoContainer : applyPromoContainer,
            applyPromoHeader    : applyPromoHeader,
            applyPromoSubText   : applyPromoSubText,
            applyPromoCode      : applyPromoCode,
            applyPromoZero      : applyPromoZero,
            applyPromoCodeBtn   : applyPromoCodeBtn,
        };
        
    }

    function applyPromoBtnMobileLayout(promoBtn){
        var btnStyle = document.getElementById('occupancy-continue').style;
        promoBtn.applyPromoCodeBtn.style.width = '240px';
        promoBtn.applyPromoCodeBtn.style.height = btnStyle.height;
        promoBtn.applyPromoCodeBtn.style.paddingTop = btnStyle.paddingTop;
        promoBtn.applyPromoCodeBtn.style.paddingBottom = btnStyle.paddingBottom;
    }

    function applyPromoBtnDesktopLayout(promoBtn){
        promoBtn.applyPromoCodeBtn.style.width = '240px';
        promoBtn.applyPromoCodeBtn.style.height = 'auto';
        promoBtn.applyPromoCodeBtn.style.padding = '10px 0px';
        promoBtn.applyPromoCodeBtn.style.margin = '16px 0px';
    }

    //SETS THE LAYOUT FOR THE DEPENDING ON THE SCREEN SIZE
    function setLayout(promoBanner, promoBtn){
        if(window.innerWidth <= 1024){
            promoBannerMobileLayout(promoBanner);
        }else{
            promoBannerDesktopLayout(promoBanner);
        }

        if(promoBtn){
            if(window.matchMedia("(max-width: 638px)").matches){
                applyPromoBtnMobileLayout(promoBtn);
            }else{
                applyPromoBtnDesktopLayout(promoBtn);
            }
        }
    }

    function checkCriteriaDateRange(sailing, dateRange){

        var sailDate = sailing.split('-');
        var sailDateYear = sailDate[0];
        var sailDateMonth = '';
        var sailDateDay = sailDate[2];

        //SWITCH NUMBERED MONTHS TO TEXT MONTHS, BECAUSE IE!
        switch(sailDate[1]){
            case '01':
                sailDateMonth = 'Jan';
            break;
            case '02':
                sailDateMonth = 'Feb';
            break;
            case '03':
                sailDateMonth = 'Mar';
            break;
            case '04':
                sailDateMonth = 'Apr';
            break;
            case '05':
                sailDateMonth = 'May';
            break;
            case '06':
                sailDateMonth = 'Jun';
            break;
            case '07':
                sailDateMonth = 'Jul';
            break;
            case '08':
                sailDateMonth = 'Aug';
            break;
            case '09':
                sailDateMonth = 'Sep';
            break;
            case '10':
                sailDateMonth = 'Oct';
            break;
            case '11':
                sailDateMonth = 'Nov';
            break;
            case '12':
                sailDateMonth = 'Dec';
            break;
        }

        var sailDate = new Date(sailDateMonth+' '+sailDateDay+', '+sailDateYear);

        var dateRanges = [];
        if(dateRanges === undefined || dateRanges.length === 0){

            return true;

        }else{

            dateRange.forEach(function(dateRange){
                dateRanges.push(new Date(dateRange.start));
                dateRanges.push(new Date(dateRange.end));
            });

        }
        

        var checked = [];
        for(var i = 0; i < dateRanges.length; i+=2){

            if(sailDate >= dateRanges[i] && sailDate <= dateRanges[i+1]){
                checked.push(true);
            }else{
                checked.push(false);
            }

        }

        if(checked.indexOf(true) !== -1){
            return true;
        }else{
            return false;
        }
        
    }

    function checkCriteriaShipCode(shipCode, shipCodes){
        if(shipCodes === undefined){
            return true;
        }else if(shipCodes.indexOf(shipCode) !== -1){
            return true
        }else if(shipCodes.length === 0){
            return true;
        }else{
            return false;
        }
    }

    function checkCriteriaDestinationCode(currentDestination, destinationCodes){
        if(destinationCodes === undefined){
            return true;
        }else if(destinationCodes.indexOf(currentDestination) !== -1){
            return true;
        }else if(destinationCodes.length === 0){
            return true;
        }else{
            return false;
        }
    }

    //TEST THIS BEFORE COMMIT
    function validateCriteria(){

        var validated = [];

        props.promoCriteria.forEach(function(criteria){
            var criteriaValues = [];

            criteriaValues.push(checkCriteriaDestinationCode(digestURL(pageURL).destinationCode, criteria.destinations));
            criteriaValues.push(checkCriteriaDateRange(digestURL(pageURL).sailDate, criteria.dateRange));
            criteriaValues.push(checkCriteriaShipCode(digestURL(pageURL).shipCode, criteria.shipCodes));

            if(criteriaValues.indexOf(false) !== -1){
                validated.push(false);
            }else{
                validated.push(true);
            }
        });

        if(validated.indexOf(true) !== -1){
            return true;
        }else{
            return false;
        }

    }

    function clearDuplicates(){

        if(document.querySelector('#ge_promoBanner')){
            document.querySelector('#ge_promoBanner').remove();
        }else if(document.querySelector('#ge_promoBanner') && document.querySelector('#ge_promoBtn')){
            document.querySelector('#ge_promoBanner').remove();
            document.querySelector('#ge_promoBtn').remove();
        }

        if(document.getElementById('occupancy-continue')){
            document.getElementById('occupancy-continue').addEventListener('click', function(){
                clearDuplicates();
            });
        } 
          
    }

    function renderComponents(criteria){
        if(page.indexOf('stateroom') !== -1 && criteria === true){
            var promoBanner = createPromoCodeBanner();
            document.querySelector('header').appendChild(promoBanner.promoBanner);
            setLayout(promoBanner);
            window.addEventListener('resize', function(){
                setLayout(promoBanner);
            });

        }else if(page.indexOf('occupancy') !== -1 && criteria === true){
            var promoBanner = createPromoCodeBanner();
            var timer = setInterval(function(){
                if(document.querySelector('#exclusive_rates')){
                    var applyPromoCodeButton = createApplyPromoCodeBtn();
                    document.querySelector('header').appendChild(promoBanner.promoBanner);
                    document.querySelector('#exclusive_rates').appendChild(applyPromoCodeButton.applyPromoContainer);
                    setLayout(promoBanner, applyPromoCodeButton);
                    window.addEventListener('resize', function(){
                        setLayout(promoBanner, applyPromoCodeButton);
                    });
                    createPromoCodeBlurb(props.promoBlurb.parent, props.promoBlurb.text);
                    clearInterval(timer);
                }
            }, 10);
        }else{
            console.log('not in relevant page');
        }
    }

    function onContinue(){
        var timer = setInterval(function(){
            if(document.getElementById('stateroom-continue')){
                document.getElementById('stateroom-continue').addEventListener('click', function(){
                    pageURL = window.location.href;
                    page = digestURL(pageURL).page;
                    renderComponents(validateCriteria());
                });
                clearInterval(timer);
            }
            if(document.getElementById('occupancy-continue')){
                document.getElementById('occupancy-continue').addEventListener('click', function(){
                    clearDuplicates();
                });
            }     
        }, 10); 
    }

    window.addEventListener('popstate', function(){
        pageURL = window.location.href;
        page = digestURL(pageURL).page;
        renderComponents(validateCriteria());
        onContinue();
    });

    renderComponents(validateCriteria());
    onContinue();

}