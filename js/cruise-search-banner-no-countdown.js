function countDown(parent, offer, countries){

  //COMPONENT CONTAINER
  var parentElement = document.querySelector(parent);

  //CREATE COMPONENT
  var countDownContainer = document.createElement('div');
  //countDownContainer.style.background = 'red';
  countDownContainer.style.width = parentElement.clientWidth+'px';
  countDownContainer.style.height = '68px';
  countDownContainer.style.display = 'flex';
  countDownContainer.style.justifyContent = 'space-between';
  //countDownContainer.classList.add("countdown-container");
  countDownContainer.style.margin = '0px auto 0px auto';
  countDownContainer.style.overflow = 'hidden';

  //CREATE OFFER CONTAINER
  var offerContainer = document.createElement('div');
  offerContainer.style.background = '#15264C';
  offerContainer.style.width = '100%';
  offerContainer.style.height = '68px';
  //offerContainer.style.transform = 'skewX(-28deg)';
  offerContainer.style.margin = '0px 0px 0px 0px';
  offerContainer.style.display = 'flex';
  offerContainer.style.justifyContent = 'center';
  offerContainer.style.alignItems = 'center';

  //CREATE OFFER TEXT CONTAINER
  var offerTextContainer = document.createElement('div');
  //offerTextContainer.style.background = 'red';
  offerTextContainer.style.width = '100%';
  offerTextContainer.style.height = '54px';
  //offerTextContainer.style.transform = 'skewX(28deg)';
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

  //APPEND OFFER CONTAINER TO COUNTDOWN CONTAINER
  countDownContainer.appendChild(offerContainer);

  //APPEND CLOCK CONTAINER TO COUNTDOWN CONTAINER
  //countDownContainer.appendChild(clockContainer);

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

  //SET MOBILE LAYOUT
  function mobileLayout(){
    
      //var stackSetting = offerOverCountdown;
      
      countDownContainer.style.height = '136px';
      countDownContainer.style.flexDirection = 'column';
      countDownContainer.style.alignItems = 'center';

      offerContainer.style.width = '100%';
      offerContainer.style.height = '68px';
      //offerContainer.style.transform = 'skewX(0deg)';
      offerContainer.style.margin = '0px';

    }
    
  //SET DESKTOP LAYOUT;
  function desktopLayout(){
      countDownContainer.style.height = '68px';
      countDownContainer.style.flexDirection = 'row';

      offerContainer.style.width = '100%';
      offerContainer.style.height = '68px';
      //offerContainer.style.transform = 'skewX(-28deg)';
      offerContainer.style.margin = '0px 0px 0px 0px';
      offerContainer.style.display = 'flex';
      offerContainer.style.justifyContent = 'center';
      offerContainer.style.alignItems = 'center';

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

  //INVOKE setTimeDigits() FIRST TO AVOID BLANK DIGITS ON LOAD
  //THE setTimeDigits() WILL ONLY RUN FOR COUNTRIES THAT ARE FOUND ON THE WINDOW HREF
  var url = window.location.href;

  countries.forEach(function(country){
      if(url.indexOf(country) !== -1){
          //setTimeDigits(country);
          countryInUrl = country;
      }
  });
  
}

window.addEventListener('load', function(){

  countDown(
      '.parent',
      {
          offer:     'INOLTRE: FINO A 35% DI SCONTO',
          text:      '+ PREZZI SPECIALI',
          subText:   'FAMIGLIA'
      },
      ['lac', 'deu']
  );
});