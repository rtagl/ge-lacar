function heroBannerIo(props){

    var parent = document.querySelector(props.parent);
    parent.innerHTML = '';

    var container = document.createElement('div');
    //container.style.background = 'pink';
    container.style.width = '1920px';
    container.style.height = 'auto';
    container.style.margin = '0px auto';
    container.style.overflow = 'hidden';

    var heroImage = document.createElement('img');
    heroImage.style.width = '100%';
    heroImage.style.height = 'auto';
    heroImage.style.margin = '0px 0px 0px 0px';
    heroImage.style.padding = '0px 0px 0px 0px';
    heroImage.src = props.desktop;
    heroImage.style.float = 'left';

    var textContainer = document.createElement('div');
    //textContainer.style.background = 'rgba(250, 250, 250, 0.5)';
    textContainer.style.width = '100%';
    textContainer.style.position = 'absolute';
    textContainer.style.display = 'flex';
    textContainer.style.justifyContent = 'center';
    textContainer.style.alignItems = 'center';

    var textWrapper = document.createElement('div');
    //textWrapper.style.background = 'blue';
    textWrapper.style.width = '95%';
    textWrapper.style.display = 'flex';
    textWrapper.style.justifyContent = props.textFieldAlign ? props.textFieldAlign: 'center';
    textWrapper.style.alignItems = 'center';

    var textFieldsWrapper = document.createElement('div');
    //textFieldsWrapper.style.background = 'orange';
    textFieldsWrapper.style.width = 'auto';
    textFieldsWrapper.style.display = 'flex';
    textFieldsWrapper.style.flexDirection = 'column';
    textFieldsWrapper.style.justifyContent = 'space-between';
    textFieldsWrapper.style.alignItems = 'center';

    var contentTextWrapper = document.createElement('div');
    //contentTextWrapper.style.background = 'red';
    contentTextWrapper.style.width = 'auto';
    contentTextWrapper.style.display = 'flex';
    contentTextWrapper.style.flexDirection = 'column';
    contentTextWrapper.style.justifyContent = 'center';
    contentTextWrapper.style.alignItems = 'center';
    contentTextWrapper.style.margin = '13px 0px 0px 0px';

    var header = document.createElement('h1');
    //header.style.background = 'green';
    header.style.width = 'auto';
    header.innerText = props.header && props.header.text ? props.header.text : '';
    header.style.fontSize = props.header && props.header.textSize ? props.header.textSize : '48px';
    header.style.textAlign = 'center';
    header.style.color = props.header && props.header.textColor ? props.header.textColor: '#fff';
    header.style.fontSize = '48px';
    header.style.fontFamily = 'kapra, Helvetica';
    header.style.letterSpacing = '5px';
    header.style.margin = '0px';
    header.style.padding = '0px';
    header.style.textTransform = 'uppercase';

    var paragraph = document.createElement('p');
    //paragraph.style.background = 'yellow';
    paragraph.style.width = 'auto';
    paragraph.innerText = props.paragraph && props.paragraph.text ? props.paragraph.text : '';
    paragraph.style.fontSize = props.paragraph && props.paragraph.textSize ? props.paragraph.textSize : '24px';
    paragraph.style.textAlign = 'center';
    paragraph.style.color = props.paragraph && props.paragraph.textColor ? props.paragraph.textColor: '#fff';
    paragraph.style.fontFamily = 'ProximaNova-Light';
    paragraph.style.margin = '0px';
    paragraph.style.padding = '0px';
    paragraph.style.textTransform = 'uppercase';

    var disclaimer = document.createElement('p');
    //disclaimer.style.background = 'pink';
    disclaimer.style.width = 'auto';
    disclaimer.innerText = props.disclaimer && props.disclaimer.text ? props.disclaimer.text : '';
    disclaimer.style.fontSize = props.disclaimer && props.disclaimer.textSize ? props.disclaimer.textSize : '10px';
    disclaimer.style.textAlign = 'center';
    disclaimer.style.color = props.disclaimer && props.disclaimer.textColor ? props.disclaimer.textColor: '#fff';
    disclaimer.style.fontFamily = 'ProximaNova-Light';
    disclaimer.style.margin = '0px';
    disclaimer.style.padding = '0px';
    disclaimer.style.textTransform = 'uppercase';

    contentTextWrapper.appendChild(header);
    contentTextWrapper.appendChild(paragraph);

    textFieldsWrapper.appendChild(contentTextWrapper);
    textFieldsWrapper.appendChild(disclaimer);

    textContainer.appendChild(textWrapper);
    textWrapper.appendChild(textFieldsWrapper);

    container.appendChild(heroImage);
    container.appendChild(textContainer);
    parent.appendChild(container);

    function setLayout(){

        if(window.innerWidth >= 1920){
            container.style.width = '1920px';
        }else if(window.innerWidth <= 1919){
            container.style.width = '100%';
        }

        if(window.innerWidth >= 768){
            heroImage.src = props.desktop;
        }else{
            heroImage.src = props.mobile;
        }

        if(window.innerWidth >= 768 && window.innerWidth <= 1920){
            container.style.height = Math.floor((200 / 1920) * window.innerWidth) - 2 + 'px';
            textContainer.style.height = Math.floor((200 / 1920) * window.innerWidth) - 2 + 'px';
            textContainer.style.width = heroImage.offsetWidth + 'px';
            textFieldsWrapper.style.height = Math.floor((200 / 1920) * window.innerWidth) - 20 + 'px';
        }else if(window.innerWidth >= 0 && window.innerWidth <= 767){
            container.style.height = Math.floor((280 / 750) * window.innerWidth) - 6 + 'px';
            textContainer.style.height = Math.floor((280 / 750) * window.innerWidth) - 6 + 'px';
            textContainer.style.width = heroImage.offsetWidth + 'px';
            textFieldsWrapper.style.height = Math.floor((280 / 750) * window.innerWidth) - 20 + 'px';
        }

        if(window.innerWidth >= 770 && window.innerWidth <= 900){
            textFieldsWrapper.style.justifyContent = 'center';
        }else{
            textFieldsWrapper.style.justifyContent = 'space-between';
        }

    }

    function setFontSizes(){
        if(window.innerWidth >= 768 && window.innerWidth <= 1920){
            header.style.fontSize = Math.floor((parseInt(header.style.fontSize) / 2) + (window.innerWidth / 50)) + 'px';
            paragraph.style.fontSize = Math.floor((parseInt(paragraph.style.fontSize) / 2) + (window.innerWidth / 100)) + 'px';
            disclaimer.style.fontSize = Math.floor((parseInt(disclaimer.style.fontSize) / 2) + (window.innerWidth / 275)) + 'px';
        }else if(window.innerWidth >= 0 && window.innerWidth <= 767){
            header.style.fontSize = Math.floor((parseInt(header.style.fontSize) / 2) + (window.innerWidth / 25)) + 'px';
            paragraph.style.fontSize = Math.floor((parseInt(paragraph.style.fontSize) / 2) + (window.innerWidth / 50)) + 'px';
            disclaimer.style.fontSize = Math.floor((parseInt(disclaimer.style.fontSize) / 2) + (window.innerWidth / 100)) + 'px';
        }
    }

    window.addEventListener('resize', function(){
        setLayout();
        setFontSizes();
    });

    setLayout(); 
    setFontSizes();

}

document.addEventListener('DOMContentLoaded', function(){
    heroBannerIo({
        parent: '.parent',
        desktop: 'http://sb.monetate.net/img/1/388/2626401.jpg',
        mobile: 'http://sb.monetate.net/img/1/388/2626402.jpg',
        header: {
            text: 'Hello world',
            textSize: '48px',
            textAlign: 'center',
            textColor: '#fff'
        },
        paragraph:{
            text: 'I\'m a pickle morty!!!',
            textSize: '24px',
            textAlign: 'center',
            textColor: '#fff'
        },
        disclaimer: {
            text: 'pickles are great but they are not incuded for free.',
            textSize: '12px',
            textAlign: 'center',
            textColor: '#fff'
        },
        textFieldAlign: 'center'
    });
});