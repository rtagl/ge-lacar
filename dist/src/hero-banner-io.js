function heroBannerIo(props){

    var parent = document.querySelector(props.parent);
    parent.innerHTML = '';

    var container = document.createElement('div');
    container.style.width = '1920px';
    container.style.height = 'auto';
    container.style.margin = '0px auto';

    var heroImage = document.createElement('img');
    heroImage.style.width = '100%';
    heroImage.style.height = 'auto';
    heroImage.src = props.desktop;

    container.appendChild(heroImage);
    parent.appendChild(container);

    function setLayout(){

        if(window.innerWidth >= 1920){
            container.style.width = '1920px';
        }else if(window.innerWidth <= 1919){
            container.style.width = '100%';
        }

        if(window.innerWidth >= 769){
            heroImage.src = props.desktop;
        }else{
            heroImage.src = props.mobile;
        }

    }

    window.addEventListener('resize', function(){
        setLayout();
    });

    setLayout();

}

heroBannerIo({
    parent: '.parent',
    desktop: 'http://sb.monetate.net/img/1/388/2627830.jpg',
    mobile: 'http://sb.monetate.net/img/1/388/2627832.jpg'
});