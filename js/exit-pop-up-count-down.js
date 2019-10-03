window.addEventListener('load', ()=>{

    exitPopUp({
        bannerDetails:{
            backgroundColor: '#ffffff',
            offerText: '30% off this great offer',
            offerSubText: 'kids eat free',
            textColor: '#ce0f69',
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
        }
    });

});

function exitPopUp(props){

    let parentElement = document.querySelectorAll('.reveal-overlay');

    let popup = document.createElement('div');
    popup.style.background = props.bannerDetails.backgroundColor;
    popup.style.width = '600px';
    popup.style.height = '325px';
    popup.style.borderRadius = '12px';
    
    let windowWidth = (window.innerWidth / 2) - (parseInt(popup.style.width) / 2) + 'px';
    let windowHeight = (window.innerHeight / 2) - (parseInt(popup.style.height) / 2) + 'px';
    popup.style.marginLeft = windowWidth;
    popup.style.marginTop = windowHeight;

    window.addEventListener('resize', function(){
        let windowWidth = (window.innerWidth / 2) - (parseInt(popup.style.width) / 2) + 'px';
        let windowHeight = (window.innerHeight / 2) - (parseInt(popup.style.height) / 2) + 'px';
        popup.style.marginLeft = windowWidth;
        popup.style.marginTop = windowHeight;
    });

    let popupOfferText =  document.createElement('h2');
    popupOfferText.style.background = 'red';
    popupOfferText.style.width = '100%';
    popupOfferText.style.height = 'auto';
    popupOfferText.style.color = props.bannerDetails.textColor;
    popupOfferText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    popupOfferText.style.fontSize = '24px';
    popupOfferText.style.fontColor = props.bannerDetails.tetxtColor;
    popupOfferText.style.textAlign = 'center';


    parentElement[0].appendChild(popup);

}
