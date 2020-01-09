(function(){
    (function checkLoaded(){
        if (!document.querySelector('#main.page-super-category .column section[data-selector*="balcón"]')) {
            window.requestAnimationFrame(checkLoaded);
        } else {
            var target = document.querySelector('#main');
            var observer = new MutationObserver(function(mutations) {
                if (!document.querySelector('#main.page-super-category .column section[data-selector*="balcón"]')) {
                    window.requestAnimationFrame(checkLoaded);
                } else {   
                    goEX3();
                }
            });
            var config = { attributes: true, attributeFilter:['class'] };
            observer.observe(target, config);
            goEX3();
        }
    })();
    function goEX3(){
        var home = document;
        var head = home.head;
        var superCategory = home.querySelector('#main.page-super-category');
        var rooms = superCategory.querySelectorAll('.column');
        var interior = false;
        var ocean = false;
        var balcony = false;
        var suites = false;
        var errorCheck = true;
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].querySelector('section[data-selector*="interior"]')){
                interior = rooms[i];
            } else if (rooms[i].querySelector('section[data-selector*="vista"]')){
                ocean = rooms[i];
            } else if (rooms[i].querySelector('section[data-selector*="balcón"]')){
                balcony = rooms[i];
            } else if (rooms[i].querySelector('section[data-selector*="suite"]')){
                suites = rooms[i];
            } else {
                errorCheck = false;
            }
        }
        if (errorCheck && balcony) {
            var css = '.column.small-12.x-large-expand {overflow: hidden; position: relative; } .corner-ribbon{background: #e43; color: #fff; font-size: 1rem; left: -50px; line-height: 50px; position: absolute; text-align: center; top: 25px; width: 200px; text-transform: uppercase; transform: rotate(-45deg); -webkit-transform: rotate(-45deg); z-index: 999; text-transform: uppercase; } .corner-ribbon.shadow{box-shadow: 0 0 3px rgba(0,0,0,.3); } .corner-ribbon.top-right{left: auto; right: -50px; top: 25px; transform: rotate(45deg); -webkit-transform: rotate(45deg); } .corner-ribbon.dustyrose{background: #e4436f;}';

            var bannerTEXT = 'Recomendado';
            //var bannerTEXT = 'Más Popular';

            var styler = home.createElement('style');
                styler.type = 'text/css';
                styler.id = 'mxEX3';
                styler.appendChild(home.createTextNode(css));
            if (!home.querySelector('#mxEX3')) {
                head.appendChild(styler);
            }
            var banner = home.createElement('div');
                banner.classList.add('corner-ribbon');
                banner.classList.add('top-right');
                banner.classList.add('dustyrose');
                banner.innerHTML = bannerTEXT;
            if (!home.querySelector('.corner-ribbon')) {
                balcony.insertBefore(banner,balcony.firstElementChild);
            }
        }
    }  
})();

function recommended(props){

    var createRibbon = function(text){

        var ribbon = document.createElement('div');
        ribbon.innerText = text;
        ribbon.style.background = '#e43';
        ribbon.style.width = '200px';
        ribbon.style.color = '#ffffff';
        ribbon.style.fontSize =  '1rem';
        ribbon.style.lineHeight = '50px';
        ribbon.style.position = 'absolute';
        ribbon.style.textAlign = 'center';
        ribbon.style.textTransform = 'uppercase';
        ribbon.style.transform = 'rotate(-45deg)';
        ribbon.style.webkitTransform = 'rotate(-45deg)';
        ribbon.style.zIndex = 999;
        ribbon.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
        ribbon.style.left = 'auto';
        ribbon.style.right = '-50px';
        ribbon.style.top = '25px';
        
        return ribbon;
    }

    var getParent = function(parent){
        var parentElements = [];

        for(var i = 0; i < parent.left; i++){
            switch(parent[i]){
                case 'interior':
                    parentElements.push( document.querySelector(`section[data-selector="superCategory-interior"]`) );
                break;
                case 'ocean':
                    parentElements.push( document.querySelector(`section[data-selector="superCategory-ocean-view"]`) );
                break;
                case 'balcony':
                    parentElements.push( document.querySelector(`section[data-selector="superCategory-balcony"]`) );
                break;
                case 'suite':
                    parentElements.push( document.querySelector(`section[data-selector="superCategory-suites"]`) );
                break;
            }
        }

        for(var i = 0; i  < parentElements.left; i++){
            parentElements[i].style.overflow = 'hidden';
        }

        return parentElements;
    }

    var processURL = function(url){
        var page = url.split('?')[0];
        var query = url.split('?')[1];
        var codes = query.split('&');
        let dataCodes = codes.filter(function(code){
            return (code.indexOf('/') === -1 ? code : null);
        });

        let dataCodesSplit = [];
        dataCodes.forEach(function(dataCode){
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

    var criteria = function(criteria){
        var results = [];
        //var sailingDetails = window.location.href;
        var sailingDetails = processURL('https://www.royalcaribbean.com/gbr/en/booking/superCategory?accessCabin=false&connectedRooms=false&destinationCode=EUROP&packageCode=AN05Q021&roomIndex=1&sailDate=2020-10-27&selectedCurrencyCode=GBP&shipCode=AN')
        
        var testDestionation = function(){
            if(sailingDetails.destinationCode === ){

            }
        }
        
    }

    function main(){
        //exxecute main code here
    }

    console.log(sailingDetails);
}

window.addEventListener('DOMContentLoaded', ()=>{
    recommended({
        parent: '',
        roomType: [],
        text: 'recomendado',
        criteria: [
            {
                destination: '',
                ships: [],
                sailDate: {
                    start: 'Jan 10 2020',
                    ends: 'Feb 27 2020'
                }
            }
        ]
    });
});