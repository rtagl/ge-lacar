window.addEventListener('load', ()=>{

    promoCode(
        {
            bannerDetails:{
                backgroundColor: '#005edc',
                textColor: '#fff',
                text: 'for a limited time',
                subtext: 'use promo code',
                code: 'GET IT'
            },
            buttonDetails:{
                content:{
                    header: 'Receive $25 discount',
                    subtext:'Using promotional code'
                },
                button:{
                    backgroundColor: '#005EDC',
                    textColor: '#fff',
                    text: 'APPLY NOW'
                }
            },
            promoCriteria:{
                ships: ['AD', 'OA', 'OV'],
                destinations: ['BERMU'],
                dateRange: [
                    promoSeasons.lateSummer2020
                ],
                amount: 25
            },
        }
    );

});

let urlOne = 'https://www.royalcaribbean.com/lac/es/booking/stateroom?sailDate=2020-08-08&shipCode=AD&packageCode=AD05B062&destinationCode=BERMU&accessCabin=false&selectedCurrencyCode=USD';
let urlTwo = 'https://www.royalcaribbean.com/lac/es/booking/occupancy?accessCabin=false&connectedRooms=false&destinationCode=BERMU&packageCode=AD05B062&sailDate=2020-08-08&selectedCurrencyCode=USD&shipCode=AD'

function promoCode(props){

    var promoTarget = document.querySelector('.page-occupancy');
    var applyDealBtnTarget = document.querySelector('.occupancy-container').children[5];

    var promoBanner = document.createElement('div');
    promoBanner.style.background = props.bannerDetails.backgroundColor;
    promoBanner.style.width = '100%';
    promoBanner.style.height = 'auto';
    promoBanner.style.padding = '20px 0px 20px 0px';
    promoBanner.style.display = 'flex';
    promoBanner.style.justifyContent = 'center';
    promoBanner.style.alignItems = 'center';

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
    promoBannerBoxTextSpan.innerText = props.code; 
    promoBannerBoxTextSpan.style.fontSize = '24px';
    promoBannerBoxTextSpan.style.textAlign = 'center';
    promoBannerBoxTextSpan.style.padding = '0px 0px 0px 15px';

    var applyPromoContainer = document.createElement('div');
    applyPromoContainer.style.background = 'red';
    applyPromoContainer.style.width = '100%';
    applyPromoContainer.style.height = 'auto';
    applyPromoContainer.style.display = 'flex';
    applyPromoContainer.style.flexDirection = 'column';
    applyPromoContainer.style.justifyContent = 'center';
    applyPromoContainer.style.alignItems = 'center';

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

    var applyPromoCodeBtn = document.createElement('button');
    applyPromoCodeBtn.style.background = props.buttonDetails.button.backgroundColor;
    applyPromoCodeBtn.style.width = '240px';
    applyPromoCodeBtn.style.height = '40px';
    applyPromoCodeBtn.style.padding = '10px 0px';
    applyPromoCodeBtn.style.margin = '16px 0px';
    applyPromoCodeBtn.style.border = 'none';
    applyPromoCodeBtn.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    applyPromoCodeBtn.style.fontSize = '18px';
    applyPromoCodeBtn.style.textAlign = 'center';
    applyPromoCodeBtn.style.letterSpacing = '2px';
    applyPromoCodeBtn.style.color = props.buttonDetails.button.textColor;
    applyPromoCodeBtn.innerText = props.buttonDetails.button.text;

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

    //APPENDS ALL THE ELEMENTS OF THE PROMO BANNER COMPONENT
    promoBanner.appendChild(promoBannerText);
    promoBanner.appendChild(promoBannerBoxText);
    promoBannerBoxText.appendChild(promoBannerBoxTextSpan);
    promoTarget.appendChild(promoBanner);

    //APPENDS ALL THE ELEMENTS OF THE APPLY PROMO BUTTON COMPONENT
    applyPromoContainer.appendChild(applyPromoHeader);
    applyPromoContainer.appendChild(applyPromoSubText);
    applyPromoContainer.appendChild(applyPromoCode);
    applyPromoContainer.appendChild(applyPromoCodeBtn);
    applyPromoContainer.appendChild(applyPromoZero);

    applyDealBtnTarget.appendChild(applyPromoContainer);

    function mobileLayout(){
        promoBanner.style.flexFlow = 'column';
        promoBannerText.style.padding = '10px 0px 10px 0px';
        promoBannerText.style.margin = '0px 0px 0px 0px';
        promoBannerBoxText.style.margin = '0px 0px 0px 0px';
    }

    function desktopLayout(){
        promoBanner.style.flexFlow = 'row';
        promoBannerText.style.padding = '0px';
        promoBannerText.style.margin = '0px 40px 0px 0px';
        promoBannerBoxText.style.margin = '0px 0px 0px 40px';
    }

    function applyPromoBtnMobileLayout(){
        var width = document.getElementById('occupancy-continue').style.width;
        applyPromoCodeBtn.style.width = width;
    }

    function applyPromoBtnDesktopLayout(){
        applyPromoCodeBtn.style.width = '240px';
    }

    function setLayout(){
        if(window.innerWidth <= 1024){
            mobileLayout();
        }else{
            desktopLayout();
        }

        if(window.matchMedia("(max-width: 638px)").matches){
            applyPromoBtnMobileLayout();
        }else{
            applyPromoBtnDesktopLayout();
        }
    }

    function digestURL(url){

        var codes = url.split('&');
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
            Object.assign(dataObject, {[dataCodesSplit[i]]: dataCodesSplit[i+1]});
        }

        return dataObject;

    }

    //compare criterea vs dataObject 
   console.log(digestURL(urlTwo));


    window.addEventListener('resize', function(){
        setLayout()
    });

    setLayout();

}


/*Possible strategy
    we can on APPLY NOW btn click
    suppress the popup
    then fill the popup input with the PROMO CODE
    then fire the invoke the function that applies the PROMO CODE
*/