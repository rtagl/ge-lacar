function heroBanner (parent, header, text, alignment, image, headerDropShadow, subDropShadow){

    //GET PARENT ELEMENT FOR HERO BANNER
    var parentElement = document.querySelector(parent);
    parentElement.innerHTML = '';

    //CREATE HERO BANNER ELEMENT
    var banner = document.createElement('div');
    banner.classList.add('ge-hero-banner');
    banner.style.backgroundImage = 'url('+image[0]+')';
    banner.style.width = '100%';
    banner.style.height = '200px';
    banner.style.backgroundSize = 'cover';
    banner.style.display = 'flex';
    banner.style.flexDirection = 'column';
    banner.style.justifyContent = 'center';
    banner.style.alignItems = 'center';
    banner.style.overflow = 'hidden';
    banner.style.margin = '0px auto 0px auto';

    //CREATE TEXT CONTAINER
    var textContainer = document.createElement('div');
    //textContainer.style.background = 'blue'
    textContainer.style.width = '65%';
    textContainer.style.height = 'auto';

    //CREATE HEADER TEXT
    var headerText = document.createElement('h1');
    headerText.innerText = header.toUpperCase();
    headerText.style.width = '100%';
    headerText.style.height = 'auto';
    headerText.style.textAlign = alignment;
    headerText.style.color = '#ffffff';
    headerText.style.fontFamily = 'kapra, Helvetica';
    headerText.style.fontSize = '96px';
    headerText.style.fontWeight = '400';
    headerText.style.letterSpacing = '5px';
    headerText.style.margin = '0px 0px 0px 0px';
    headerText.style.padding = '0px 0px 0px 0px';
   
    if(headerDropShadow){
        headerText.style.textShadow = headerDropShadow.hShift +' '+ headerDropShadow.vShift +' '+headerDropShadow.blur +' '+ headerDropShadow.color;
    }

    //CREATE SUB TEXT
    var subText = document.createElement('p');
    subText.innerText = text.toUpperCase();
    subText.style.width = '100%';
    subText.style.height = 'auto';
    subText.style.textAlign = alignment;
    subText.style.color = '#ffffff';
    subText.style.fontFamily = 'ProximaNova-Light';
    subText.style.fontSize = '44px';
    headerText.style.fontWeight = '400';
    subText.style.margin = '-14px 0px 0px 0px';
    subText.style.padding = '0px';
    subText.classList.add('hero-subtext');

    if(subDropShadow){
        subText.style.textShadow = subDropShadow.hShift +' '+ subDropShadow.vShift +' '+ subDropShadow.blur +' '+ subDropShadow.color;
    }

    //APPEND TEXT CONTAINER TO BANNER ELEMENT
    banner.appendChild(textContainer);

    //APPEND HEADER TO TEXT CONTAINER ELEMENT
    textContainer.appendChild(headerText);

    //APPEND TEXT TO BANNER ELEMENT
    textContainer.appendChild(subText);

    //APPEND HERO BANNER TO PARENT ELEMENT
    parentElement.appendChild(banner);

    //RESIZE HERO BANNER DIV WHEN SCREEN IS LESS THAN 750 PIXELS WIDE
    function resizeBanner(){
        var banner = document.querySelector('.ge-hero-banner');
        var screenWidth = window.innerWidth;
        
        if(window.matchMedia("(min-width: 1930px)").matches){
            banner.style.width = '1920px';
        }else if(window.matchMedia("(min-width: 1920px)").matches){
            banner.style.width = '100%';
        }else if(window.matchMedia("(min-width: 1200px)").matches){
            banner.style.height = '150px';
            //banner.style.backgroundPositionX = '-70px';
            headerText.style.fontSize = '76px';
            subText.style.fontSize = '34px';
        }else if(window.matchMedia("(min-width: 900px)").matches){
            banner.style.height = '150px';
            //banner.style.backgroundPositionX = '-70px';
            headerText.style.fontSize = '56px';
            subText.style.fontSize = '24px';
        }else if(window.matchMedia("(min-width: 750px)").matches){
            banner.style.height = '150px';
            //banner.style.backgroundPositionX = '-70px';
            headerText.style.fontSize = '46px';
            subText.style.fontSize = '24px';
        }else if(window.matchMedia("(min-width: 400px)").matches){
            banner.style.height = '200px';
            //banner.style.backgroundPositionX = '0px';
            headerText.style.fontSize = '46px';
            subText.style.fontSize = '44px';
        }else if(window.matchMedia("(min-width: 300px)").matches){
            headerText.style.fontSize = '36px';
            subText.style.fontSize = '34px';
        }
 
        if(image.length === 2){
            if(screenWidth >= 750){
                banner.style.backgroundImage = 'url('+image[0]+')';
            }else{
                banner.style.backgroundImage = 'url('+image[1]+')';
            }
        }
    }

    //INITIALIZE RESPONSIVE FUNCTIONS
    resizeBanner();

    //LISTEN TO SCREEN RESIZE EVENT
    window.addEventListener('resize', function(){
        resizeBanner();
    });

}

window.addEventListener('load', function(){
    heroBanner(
        '.parent',
        'ninos gratis',
        'Ahorra hasta 150$ USD', 
        'center',
        [
            'http://sb.monetate.net/img/1/388/2344664.jpg',
            'http://sb.monetate.net/img/1/388/2344663.jpg'
        ],
        {
            hShift: '4px',
            vShift: '4px',
            blur: '5px',
            color: 'rgba(0, 0, 135, 0.75)',
        },
        {
            hShift: '4px',
            vShift: '4px',
            blur: '5px',
            color: 'rgba(0, 0, 135, 0.75)',
        }
    );
});