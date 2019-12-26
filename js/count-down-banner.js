function countDownBanner(props){

    function parent(parentElement){
        return document.querySelector(parentElement);
    }

    function container(){
        //creates and controls the banner and clock container
        var container = document.createElement('div');
        container.style.background = 'red';
        container.style.width = '100%';
        container.style.height = '68px';
        container.style.overflow = 'hidden';
        container.style.display = 'flex';
        container.style.justifyContent = 'flex-start';

        function setContainerLayout(){
            if(window.innerWidth >= 1920){
                container.style.width = '1920px';
            }else if(window.innerWidth <= 1919){
                container.style.width = '100%';
            }

            if(window.innerWidth <= 768){
                container.style.height = '136px';
                container.style.flexDirection = 'column';
            }else if(window.innerWidth >= 769){
                container.style.height = '68px';
                container.style.flexDirection = 'row';
            }
        }

        window.addEventListener('resize', function(){
            setContainerLayout();
        });

        setContainerLayout();

        return container;
    }

    function banner(data){
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
        var subTextFontSize = []
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
               // text.style.background = 'green';
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

        function setFontSizes(load){
            //RECODE 
            if(window.innerWidth >= 300 && window.innerWidth <= 1400){
                textNodes.forEach(function(node, i){
                    node.style.fontSize = Math.round(window.innerWidth / 100) + (parseInt(textFontSize[i]) / 2) + 'px';
                });
    
                subTextNodes.forEach(function(node, i){
                    node.style.fontSize = Math.round(window.innerWidth / 250) + (parseInt(subTextFontSize[i]) / 2) + 'px';
                });
            }else if(window.innerWidth >= 1401){
                textNodes.forEach(function(node, i){
                    node.style.fontSize = textFontSize[i];
                });
    
                subTextNodes.forEach(function(node, i){
                    node.style.fontSize = subTextFontSize[i];
                });
            }

            if(load === true && window.innerWidth <= 414){
                textNodes.forEach(function(node, i){
                    node.style.fontSize = Math.round(414 / 100) + (parseInt(textFontSize[i]) / 2) + 'px';
                });
    
                subTextNodes.forEach(function(node, i){
                    node.style.fontSize = Math.round(300 / 250) + (parseInt(subTextFontSize[i]) / 2) + 'px';
                });
            }
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
            setFontSizes();
            setBannerLayout();
        });
        
        setFontSizes(true);
        setBannerLayout();
        
        banner.appendChild(bannerContent);

        return banner;
    }

    function clock(data){
        //creates and controls the clock
        var clockWrapper = document.createElement('div');
        clockWrapper.style.background = 'blue';
        clockWrapper.style.width = '35%';
        clockWrapper.style.height = '68px';

        return clockWrapper;

    }

    function layout(data){
        //controls the banner and clock stacking functionality
    }

    var parentElement = parent(props.parent);
    var containerComponent = container();
    var bannerComponent = banner(props.textFields);
    var clockComponent = clock();

    containerComponent.appendChild(bannerComponent);
    containerComponent.appendChild(clockComponent);

    parentElement.appendChild(containerComponent);

}

document.addEventListener('DOMContentLoaded', function(){

    countDownBanner({
        parent: '.parent',
        textFields:[
            {
                text:{
                    text: 'hello world',
                    textSize: '48px',
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
                    textSize: '28px',
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
                    textSize: '28px',
                    textAlign: 'center',
                },
                subtext: {
                    text: 'I\'m subtext',
                    textSize: '12px',
                    textAlign: 'center',
                }
            },
        ],
    });

});

// countDownBanner(
//     {
//         textFields:[
//             {
//                 text:{
//                     text: 'hello world',
//                     textSize: '22px',
//                     textAlign: 'center',
//                 } 
//             },
//             {
//                 text:{
//                     text: 'hello world',
//                     textSize: '22px',
//                     textAlign: 'center',
//                 },
//                 subtext: {
//                     text: 'I\'m subtext',
//                     textSize: '12px',
//                     textAlign: 'center',
//                 }
//             }
//         ],
//         clock: {
//             showHide: false,
//             showDays: {
//                 greaterThan: 72,
//                 text: 'days left'
//             },
//             showHours: {
//                 lessThan: 72,
//                 text: 'hours left'
//             },
//             hideOnExpiration: true,
//             dst: false
//         },
//         layout: false
//     }
// );