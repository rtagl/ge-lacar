window.addEventListener('load', ()=>{

    promoCode(
        {
            bannerDetails:{
                backgroundColor: '#005edc',
                textColor: '#fff'
            },
            text: 'for a limited time',
            subtext: 'use promo code',
            code: 'GET IT'
        }
    );

});;

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
    promoBannerText.innerText = props.text.toUpperCase();
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
    promoBannerBoxText.innerText = props.subtext.toUpperCase() + ':';
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


    promoBanner.appendChild(promoBannerText);
    promoBanner.appendChild(promoBannerBoxText);

    promoBannerBoxText.appendChild(promoBannerBoxTextSpan);

    promoTarget.appendChild(promoBanner);

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

    window.addEventListener('resize', function(){
        
        if(window.innerWidth <= 1024){
            mobileLayout();
        }else{
            desktopLayout();
        }

    });

}