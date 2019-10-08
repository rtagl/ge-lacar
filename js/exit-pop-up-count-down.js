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
        },
        clock:{
            hours:'HOURS',
            minutes: 'MINUTES',
            seconds: 'SECONDS',
            textColor: '#ce0f69'
        }
    });
});

function exitPopUp(props){

    let parentElement = document.querySelector('.reveal-overlay');

    let popup = document.createElement('div');
    popup.style.background = props.bannerDetails.backgroundColor;
    popup.style.width = '600px';
    popup.style.height = '325px';
    popup.style.borderRadius = '12px'; 
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    
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

    let container = document.createElement('div');
    container.style.background = 'red';
    container.style.width = '500px';
    container.style.height = '225px';
    container.style.margin = '10px';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.flexDirection = 'column';

    let popupOfferText =  document.createElement('h2');
    popupOfferText.style.background = 'purple';
    popupOfferText.style.width = '100%';
    popupOfferText.style.height = 'auto';
    popupOfferText.style.color = props.bannerDetails.textColor;
    popupOfferText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    popupOfferText.style.fontSize = '24px';
    popupOfferText.style.fontColor = props.bannerDetails.textColor;
    popupOfferText.style.textAlign = 'center';
    popupOfferText.innerText =props.bannerDetails.offerText;
    popupOfferText.style.padding = '0px';
    popupOfferText.style.margin = '0px';

    let popupOfferSubText = document.createElement('h3');
    popupOfferSubText.style.background = 'green';
    popupOfferSubText.style.width = '100%';
    popupOfferSubText.style.height = '20px';//'auto';
    popupOfferSubText.style.color = props.bannerDetails.textColor;
    popupOfferSubText.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    popupOfferSubText.style.fontSize = '16px';
    popupOfferSubText.style.fontColor = props.bannerDetails.textColor;
    popupOfferSubText.style.textAlign = 'center';
    popupOfferSubText.innerText =props.bannerDetails.offerText;

    let popupClockContainer = document.createElement('div');
    popupClockContainer.style.background = 'pink';
    popupClockContainer.style.width = '100%';
    popupClockContainer.style.height = 'auto';
    popupClockContainer.style.display = 'flex';
    popupClockContainer.style.justifyContent = 'center';

    let clockHours = document.createElement('div');
    clockHours.style.background = 'green';
    clockHours.style.width = '55px';
    clockHours.style.height = 'auto';
    clockHours.style.margin = '0px 15px 0px 15px';
    clockHours.style.color = props.bannerDetails.textColor;
    clockHours.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    clockHours.style.fontSize = '48px';
    clockHours.style.fontColor = props.bannerDetails.textColor;
    clockHours.style.textAlign = 'center';
    clockHours.style.letterSpacing = '2px';
    clockHours.innerText = '00';

    let clockMinutes = document.createElement('div');
    clockMinutes.style.background = 'green';
    clockMinutes.style.width = '55px';
    clockMinutes.style.height = 'auto';
    clockMinutes.style.margin = '0px 15px 0px 15px';
    clockMinutes.style.color = props.bannerDetails.textColor;
    clockMinutes.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    clockMinutes.style.fontSize = '48px';
    clockMinutes.style.fontColor = props.bannerDetails.textColor;
    clockMinutes.style.textAlign = 'center';
    clockMinutes.style.letterSpacing = '2px';
    clockMinutes.innerText = '00';

    let clockSeconds = document.createElement('div');
    clockSeconds.style.background = 'green';
    clockSeconds.style.width = '55px';
    clockSeconds.style.height = 'auto';
    clockSeconds.style.margin = '0px 15px 0px 15px';
    clockSeconds.style.color = props.bannerDetails.textColor;
    clockSeconds.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    clockSeconds.style.fontSize = '48px';
    clockSeconds.style.fontColor = props.bannerDetails.textColor;
    clockSeconds.style.textAlign = 'center';
    clockSeconds.style.letterSpacing = '2px';
    clockSeconds.innerText = '00';

    let clockColon = document.createElement('div');
    clockColon.style.background = 'blue';
    clockColon.style.width = 'auto';
    clockColon.style.height = 'auto';
    clockColon.style.color = props.bannerDetails.textColor;
    clockColon.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    clockColon.style.fontSize = '48px';
    clockColon.style.fontColor = props.bannerDetails.textColor;
    clockColon.style.textAlign = 'center';
    clockColon.innerText = ':';

    let clockColonClone = clockColon.cloneNode(true);

    let clockTextIndicators = document.createElement('div');
    clockTextIndicators.style.background = 'magenta';
    clockTextIndicators.style.width = '100%';
    clockTextIndicators.style.height = 'auto';
    clockTextIndicators.style.padding = '10px 0px 10px 0px'
    clockTextIndicators.style.display = 'flex';
    clockTextIndicators.style.justifyContent = 'center';

    let hoursIndicator = document.createElement('p');
    hoursIndicator.style.background = 'cyan';
    hoursIndicator.style.width = '52px';
    hoursIndicator.style.height = 'auto';
    hoursIndicator.style.margin = '0px 0px';
    hoursIndicator.style.padding = '0px';
    hoursIndicator.innerText = props.clock.hours;
    hoursIndicator.color = props.clock.textColor;
    hoursIndicator.style.fontSize = '11px';
    hoursIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    hoursIndicator.style.textAlign = 'center';

    let minutesIndicator = document.createElement('p');
    minutesIndicator.style.background = 'cyan';
    minutesIndicator.style.width = '52px';
    minutesIndicator.style.height = 'auto';
    minutesIndicator.style.margin = '0px 47px';
    minutesIndicator.style.padding = '0px';
    minutesIndicator.innerText = props.clock.minutes;
    minutesIndicator.color = props.clock.textColor;
    minutesIndicator.style.fontSize = '11px';
    minutesIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    minutesIndicator.style.textAlign = 'center';

    let secondsIndicator = document.createElement('p');
    secondsIndicator.style.background = 'cyan';
    secondsIndicator.style.width = '52px';
    secondsIndicator.style.height = 'auto';
    secondsIndicator.style.margin = '0px 0px';
    secondsIndicator.style.padding = '0px';
    secondsIndicator.innerText = props.clock.seconds;
    secondsIndicator.color = props.clock.textColor;
    secondsIndicator.style.fontSize = '11px';
    secondsIndicator.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    secondsIndicator.style.textAlign = 'center';

    let popupButtonContainer = document.createElement('div');
    popupButtonContainer.style.background = 'yellow';
    popupButtonContainer.style.width = '100%';
    popupButtonContainer.style.height = 'auto';
    popupButtonContainer.style.display = 'flex';
    popupButtonContainer.style.justifyContent = 'space-between';

    let continueBtn = document.createElement('div');
    continueBtn.style.background = 'orange';
    continueBtn.style.width = '240px';
    continueBtn.style.height = 'auto';
    continueBtn.style.padding = '12px 0px 12px 0px';
    continueBtn.style.color = props.continueBtn.textColor;
    continueBtn.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif';
    continueBtn.style.fontSize = '16px';
    continueBtn.style.fontColor = props.bannerDetails.textColor;
    continueBtn.style.textAlign = 'center';
    continueBtn.innerText = props.continueBtn.text;

    let cancelBtn = continueBtn.cloneNode(true);
    cancelBtn.style.background = props.cancelBtn.backgroundColor;
    cancelBtn.innerText = props.cancelBtn.text;
    cancelBtn.style.color = props.cancelBtn.color;
    cancelBtn.style.border = 'solid 1px #000000';


    popup.appendChild(container);

    container.appendChild(popupOfferText);
    container.appendChild(popupOfferSubText);
    container.appendChild(popupClockContainer);
    container.appendChild(clockTextIndicators);
    container.appendChild(popupButtonContainer);
    
    popupClockContainer.appendChild(clockHours);
    popupClockContainer.appendChild(clockColon);
    popupClockContainer.appendChild(clockMinutes);
    popupClockContainer.appendChild(clockColonClone);
    popupClockContainer.appendChild(clockSeconds);

    clockTextIndicators.appendChild(hoursIndicator);
    clockTextIndicators.appendChild(minutesIndicator);
    clockTextIndicators.appendChild(secondsIndicator);

    popupButtonContainer.appendChild(continueBtn);
    popupButtonContainer.appendChild(cancelBtn);

    parentElement.appendChild(popup);

}
