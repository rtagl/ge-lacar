window.addEventListener('load', function(){

    peopleWatching({
        icon: 'https://sb.monetate.net/img/1/388/1982062.png',
        people: 'people',
        watching: 'watching',
        textColor: '#ffffff',
        data: peopleWatchingData
    });

});

function peopleWatching(props){

    var pageURL = window.location.href;
    var target = document.querySelector('.itinerary-panel-header');
    var itineraries = document.querySelectorAll('.itinerary-card-component');
    var overlays = document.querySelectorAll('.overlay');

    //FOR TESTING PURPOSES 
    //var pageURL = 'https://www.royalcaribbean.com/lac/es/cruises/?itineraryPanel=AL6CU002-2019-11-30';
    //var pageURL = 'https://www.royalcaribbean.com/lac/es/cruises/itinerary/6-night-caribbean-from-fort-lauderdale-on-majesty/AL4CU002?sail-date=2019-11-30&country=ARG&currency=USD'

    //ITINERARIES CLICK EVENTS
    function itinerariesClickEvents(itineraries){
        if(itineraries.length !== 0){

            itineraries.forEach(function(itinerary){
                itinerary.addEventListener('click', function(){
                    renderComponent(
                        checkURL(pageURL), 
                        peopleWatchingComponent(
                            props, 
                            setPeopleNumber(checkCriteria(props.data, processItineraryCriterea(checkURL(pageURL))))), 
                        target
                    );
                });
            });

        }
    }

    //OVERLAYS CLICK EVENTS
    function deleteComponentOnOverlayClick(overlays){
        if(overlays.length !== 0){{
            overlays.forEach(function(ol){
                ol.addEventListener('click', function(){
                    document.getElementById('ge_people-watching').remove();
                })
            });
        }}
    }

    //CREATE PEOPLE WATCHIN COMPONENT
    function peopleWatchingComponent(details, numberOfPeople){

        var empty = document.createElement('div');
        empty.setAttribute('id', 'ge_people-watching');

        var component = document.createElement('div');
        component.style.background = '#ff6a6f';
        component.style.width = 'auto';
        component.style.height = '18px';
        component.style.padding = '7px 0px';
        component.style.display = 'flex';
        component.style.justifyContent = 'center';
        component.style.alignItems = 'center';
        component.setAttribute('id', 'ge_people-watching');
        
        var eyeSpan = document.createElement('img');
        eyeSpan.style.width = '20px';
        eyeSpan.style.height = '20px';
        eyeSpan.style.margin = '0px 5px 0px 5px';
        eyeSpan.setAttribute('src', details.icon);
        eyeSpan.style.cssFloat = 'left';

        var numberSpan = document.createElement('span');
        numberSpan.style.width = 'auto';
        numberSpan.style.height = 'auto';
        numberSpan.style.textAlign = 'center';
        numberSpan.style.fontFamily = 'ProximaNova-Bold, Helvetica';
        numberSpan.style.fontSize = '18px';
        numberSpan.style.margin = '0px 5px 0px 5px';
        numberSpan.style.padding = '0px';
        numberSpan.style.color = details.textColor;
        numberSpan.innerText = numberOfPeople;
        numberSpan.style.cssFloat = 'left';


        var peopleSpan = document.createElement('span');
        peopleSpan.style.width = 'auto';
        peopleSpan.style.height = 'auto';
        peopleSpan.style.textAlign = 'center';
        peopleSpan.style.fontFamily = 'ProximaNova-Bold, Helvetica';
        peopleSpan.style.fontSize = '18px';
        peopleSpan.style.margin = '0px 5px 0px 5px';
        peopleSpan.style.color = details.textColor;
        peopleSpan.innerText = details.people;
        peopleSpan.style.cssFloat = 'left';

        var  watchingSpan = document.createElement('span');
        watchingSpan.style.width = 'auto';
        watchingSpan.style.height = 'auto';
        watchingSpan.style.textAlign = 'center';
        watchingSpan.style.fontFamily = 'ProximaNova-Regular, Helvetica';
        watchingSpan.style.fontSize = '18px';
        watchingSpan.style.margin = '0px 5px 0px 5px';
        watchingSpan.style.color = details.textColor;
        watchingSpan.innerText = details.watching;
        watchingSpan.style.cssFloat = 'left';

        component.appendChild(eyeSpan);
        component.appendChild(numberSpan);
        component.appendChild(peopleSpan);
        component.appendChild(watchingSpan);

        if(numberOfPeople === 0){
            return empty;
        }else{
            return component;
        }

    }

    //CHECK IF PAGE URL IS VALID 
    function checkURL(url){
        if(url.indexOf('itinerary') !== -1 && url.indexOf('itineraryPanel') === -1){
            return {valid: true, page: 'productView', url: url};
        }else if(url.indexOf('itineraryPanel') !== -1){
            return {valid: true, page: 'cruiseSearch', url: url};
        }else{
            return {valid: false, page: 'none', url: url}
        }
    }

    //PROCESS THE ITINERARY CRITERIA FROM URL
    function processItineraryCriterea(data){
        
        function productViewStrategy(){
            var urlSplit = data.url.split('?');
            var urlData = urlSplit[0].split('/');
            var queryData = urlSplit[1].split('&');

            var itineraryData = urlData.filter(function(data){
                return  data.indexOf('night') !== -1 ? data : null;
            });

            var itineraryDataSplit = itineraryData[0].split('-');

            let queryDataSplit = [];
            queryData.forEach(function(data){
                queryDataSplit.push(data.split('=')[0]);
                queryDataSplit.push(data.split('=')[1]);
            });

            let dataObject = {};
            for(var i = 0; i < queryDataSplit.length; i+=2){
                if(queryDataSplit[i] === 'sail-date' || queryDataSplit[i+1] === 'sail-date'){
                    dataObject['sailDate'] = queryDataSplit[i+1];
                }else{
                    dataObject[queryDataSplit[i]] = queryDataSplit[i+1];
                }
            }

            dataObject.numberOfNights = itineraryDataSplit[0];
            dataObject.itinerary = itineraryDataSplit.slice(itineraryDataSplit.indexOf('night')+1, itineraryDataSplit.indexOf('from')).join(' ');
            dataObject.departure = itineraryDataSplit.slice(itineraryDataSplit.indexOf('from')+1, itineraryDataSplit.indexOf('on')).join(' ');
            dataObject.shipCode = urlData[urlData.length -1].substring(0, 2);

            return dataObject;
        }

        function cruiseSearchStrategy(){

            var dataObject = {};

            var urlSplit = data.url.split('=');
            var urlSplitData = urlSplit[1].split('-');

            function getNumberOfNights(packageCode){
                var numberOfNights = packageCode.split('');
                var numbers = numberOfNights.filter(function(el, i){
                    if(!isNaN(parseInt(el))){
                        if(i === 2 || i === 3){
                            return el;
                        }
                    }
                });

                if(numbers.length === 1){
                    return parseInt(numbers[0]);
                }else{
                    return parseInt('' + numbers[0] + numbers[1]);
                }
            }

            dataObject.sailDate = urlSplitData[1]+'-'+urlSplitData[2]+'-'+urlSplitData[3];
            dataObject.shipCode = urlSplitData[0].substring(0,2);
            dataObject.numberOfNights = getNumberOfNights(urlSplitData[0]).toString();

            return dataObject;
        }

        if(data.page === 'productView'){
            return productViewStrategy();
        }else if(data.page === 'cruiseSearch'){
            return cruiseSearchStrategy();
        }else{
            return {

            };
        }
    }

    //CHECK PRODUCT CRITERIA
    function checkCriteria(data, criteria){

        var nightsDataObject = data.map(function(d){
            var operator = '';
            var value = '';

            if(d.criteria.nights !== undefined){
                operator = d.criteria.nights.split('')[0]+d.criteria.nights.split('')[1];
                value = d.criteria.nights.split('')[2];
            }else if(d.criteria.nights === undefined){
                operator = null;
                value = null;
            }

            return {operator: operator, value: value}
        });

        var numberOfPeople = '';
        data.forEach(function(d, i){

            var checkedCriteria = [];

            //CHECK SHIP-CODES 
            if(d.criteria.ships === undefined || criteria.shipCode === undefined || d.criteria.ships.indexOf(criteria.shipCode) !== -1){
                checkedCriteria.push(true);
            }else{
                checkedCriteria.push(false);
            }

            //CHECK DEPARTURES 
            if(d.criteria.departures === undefined || criteria.departure === undefined || d.criteria.departures.join('').split(' ').join('').toLowerCase().indexOf(criteria.departure.split(' ').join('')) !== -1){
                checkedCriteria.push(true);
            }else{
                checkedCriteria.push(false);
            }

            //CHECK ITINERARY
            if(d.criteria.itinerary === undefined || criteria.itinerary === undefined || d.criteria.itinerary.join('').split(' ').join('').toLowerCase().indexOf(criteria.itinerary.split(' ').join('')) !== -1){
                checkedCriteria.push(true);
            }else{
                checkedCriteria.push(false);
            }
            
            //CHECK NUMBER OF NIGHTS
            if(nightsDataObject[i] !== null){
                switch(nightsDataObject[i].operator){
                    case '>=':
                        parseInt(criteria.numberOfNights) >= parseInt(nightsDataObject[i].value) ? checkedCriteria.push(true) : checkedCriteria.push(false);
                    break;
                    case '<=':
                        parseInt(criteria.numberOfNights) <= parseInt(nightsDataObject[i].value) ? checkedCriteria.push(true) : checkedCriteria.push(false);
                    break;
                }
            }


            //CHECK THAT ALL CRITERIA IS TRUE
            if(checkedCriteria.indexOf(false) === -1){
                numberOfPeople = d.views;
            }else{
                numberOfPeople = null;
            }

        });

        return numberOfPeople;

    }

    //RENDER THE COMPONENT 
    function renderComponent(truthyURL, component, target){

        if(truthyURL.valid === true && target !== null){
            target.appendChild(component);
        }else{
            console.log('page not relevant');
        }

    }

    //SET THE NUMBER OF PEOPLE WATCHING
    function setPeopleNumber(data){

        var currentTime = new Date();

        var time = {
            day: '',
            month: new Date().getMonth()+1,
            date: new Date().getDate(),
            year: new Date().getFullYear(),
        }

        switch(new Date().getDay()){
            case 1:
                time.day = 'Mon';
            break;
            case 2:
                time.day = 'Tue';
            break;
            case 3:
                time.day = 'Wed';
            break;
            case 4:
                time.day = 'Thu';
            break;
            case 5:
                time.day = 'Fri';
            break;
            case 6:
                time.day = 'Sat';
            break;
            case 7:
                time.day = 'Sun';
            break;
        }

        var hours = {
            amHours:{
                start: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'00:00:00'),
                end: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'08:59:59')
            },
            bizHours:{
                start: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'09:00:00'),
                end: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'17:59:59')
            },
            pmHours:{
                start: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'18:00:00'),
                end: new Date(time.day+' '+time.month+' '+time.date+' '+time.year+' '+'11:59:59')
            }
        }

        if(currentTime >= hours.amHours.start && currentTime <= hours.amHours.end && data !== null){
            return Math.floor(Math.random()*(data.am[1]-data.am[0]+1)+data.am[0]);
        }else if(currentTime >= hours.bizHours.start && currentTime <= hours.bizHours.end && data !== null){
            return Math.floor(Math.random()*(data.business[1]-data.business[0]+1)+data.business[0]);
        }else if(currentTime >= hours.pmHours.start && currentTime <= hours.pmHours.end && data !== null){
            return Math.floor(Math.random()*(data.pm[1]-data.pm[0]+1)+data.pm[0]);
        }else if(data === null){
            return 0;
        }

    }

    //RENDER THE COMPONENT
    renderComponent(
        checkURL(pageURL), 
        peopleWatchingComponent(props, setPeopleNumber(checkCriteria(props.data, processItineraryCriterea(checkURL(pageURL))))), 
        target
    );

    //DELETE COMPONENT ON OVERLAY CLICK
    deleteComponentOnOverlayClick(overlays);

    //CREATE COMPONENT ON ITINERARY CLICK
    itinerariesClickEvents(itineraries);

}

