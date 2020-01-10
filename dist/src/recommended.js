function recommended(props){

    var createRibbon = function(text){

        var ribbon = document.createElement('div');
        ribbon.innerText = text;
        ribbon.style.background = '#e43';
        ribbon.style.width = '200px';
        ribbon.style.color = '#ffffff';
        ribbon.style.fontSize =  '1rem';
        ribbon.style.fontFamily = 'proxima-nova, helvetica, arial'
        ribbon.style.lineHeight = '40px';
        ribbon.style.position = 'absolute';
        ribbon.style.textAlign = 'center';
        ribbon.style.textTransform = 'uppercase';
        ribbon.style.transform = 'rotate(45deg)';
        ribbon.style.webkitTransform = 'rotate(45deg)';
        ribbon.style.zIndex = 999;
        ribbon.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
        ribbon.style.left = 'auto';
        ribbon.style.right = '-60px';
        ribbon.style.top = '24px';
        
        return ribbon;
    }

    createRibbon();

    var getParent = function(parents){

        var parentElements = [];

        for(var i = 0; i < parents.length; i++){
            switch(parents[i]){
                case 'interior':
                    parentElements.push( document.querySelector('section[data-selector="superCategory-interior"]') );
                break;
                case 'ocean':
                    parentElements.push( document.querySelector('section[data-selector="superCategory-ocean-view"]') );
                break;
                case 'balcony':
                    parentElements.push( document.querySelector('section[data-selector="superCategory-balcony"]') );
                break;
                case 'suite':
                    parentElements.push( document.querySelector('section[data-selector="superCategory-suites"]') );
                break;
            }
        }

        for(var i = 0; i  < parentElements.length; i++){
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

    var processCriteria = function(criteria, sailingDetails){
        var results = [];
    
        criteria.forEach(function(c, i){
            c.destination === sailingDetails.destinationCode ? results.push(true) : results.push(false);
            c.ships.indexOf(sailingDetails.shipCode) !== -1 ? results.push(true) : results.push(false);

            new Date(sailingDetails.sailDate) >= new Date(c.sailDate.start) && 
            new Date(sailingDetails.sailDate) <= new Date(c.sailDate.end) ? results.push(true) : results.push(false)

        });
        
        return results.indexOf(false) === -1 ? true : false;
    }

    var main = function(){
        var sailingDetails = processURL('https://www.royalcaribbean.com/gbr/en/booking/superCategory?accessCabin=false&connectedRooms=false&destinationCode=EUROP&packageCode=AN05Q021&roomIndex=1&sailDate=2020-10-27&selectedCurrencyCode=GBP&shipCode=AN')
        var result = processCriteria(props.criteria, sailingDetails);
        var ribbon = createRibbon(props.text);
        var parents = getParent(props.roomType);

        if(result === true){
            parents.forEach(function(parent){
                parent.appendChild(ribbon);
            })
        }   

    }

    main();

}

recommended({
    roomType: ['interior'],
    text: 'recomendado',
    criteria: [
        {
            destination: 'EUROP',
            ships: ['AN'],
            sailDate: {
                start: 'Jan 01 2020',
                end: 'Dec 31 2020'
            }
        }
    ]
});