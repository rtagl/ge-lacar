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

    //POLYFILL FOR .remove 
    (function (arr) {
        for(var i = 0; i < arr.length; i++){
            if(arr[i].hasOwnProperty('remove')){
                return;
            }
            Object.defineProperty(arr[i], 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    if (this.parentNode === null) {
                        return;
                    }
                    this.parentNode.removeChild(this);
                }
            });
        }
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

    var pageURL = window.location.href;
    var target = document.querySelector('.itinerary__ParsysRight');
    var itineraries = document.querySelectorAll('.itinerary-card-component');
    var overlays = document.querySelectorAll('.overlay');
    var cruiseSearchTarget = document.querySelector('.itinerary-panel-sidenav');

    //FOR TESTING PURPOSES 
    //var pageURL = 'https://www.royalcaribbean.com/lac/es/cruises/?itineraryPanel=AL6CU002-2019-11-30';
    //var pageURL = 'https://www.royalcaribbean.com/lac/es/cruises/itinerary/6-night-caribbean-from-fort-lauderdale-on-majesty/AL4CU002?sail-date=2019-11-30&country=ARG&currency=USD'

    function markCurrentItineraries(itineraries){
        for(var i = 0; i < itineraries.length; i++){
            itineraries[i].className += ' ge_current-mark';
        }
    }

    //HANDLES PAGINATION CLICKS    
    function paginationClicks(compareCallback){
        var counter = 0;
        var timer = setInterval(function(){
            if( document.querySelector('.mat-paginator-navigation-next') &&
                document.querySelector('.mat-paginator-navigation-previous') &&
                document.querySelectorAll('.mat-button-toggle') &&
                document.querySelectorAll('.mat-button') 
            ){
                counter++;
                addClicks();
            }else if(counter === 10){
                clearInterval(timer);
            }
        }, 100);

        function addClicks(){
            var nextPage = document.querySelector('.mat-paginator-navigation-next');
            var prevPage = document.querySelector('.mat-paginator-navigation-previous');
            var nightsFilter = document.querySelectorAll('.mat-button-toggle');
            var applyButton = document.querySelectorAll('.mat-button');

            for(var i = 0; i < nightsFilter.length; i++){
                nightsFilter[i].addEventListener('click', function(){
                    compareCallback();
                });
            }

            for(var j = 0; j < applyButton.length; j++){
                applyButton[j].addEventListener('click', function(){
                    compareCallback();
                });
            }

            nextPage.addEventListener('click', function(){
                compareCallback();
            });

            prevPage.addEventListener('click', function(){
                compareCallback();
            });
        }

    }

    //COMPAREA OLD ITINERARIES WITH NEW ONE
    function compare(){
        var timer = setInterval(function(){
            if(document.querySelectorAll('.itinerary-card-component').length !== 0){
                var cards = document.querySelectorAll('.itinerary-card-component');
                for(var i = 0; i < cards.length; i++){
                    if(cards[i].getAttribute('class').indexOf('ge_current-mark') === -1){
                        clearInterval(timer);
                        itineraries = document.querySelectorAll('.itinerary-card-component');
                        markCurrentItineraries(itineraries);
                        itinerariesClickEvents(itineraries);
                    }
                }
            } 
        }, 500); 
    }

    //ITINERARIES CLICK EVENTS
    function itinerariesClickEvents(itineraries){
        if(itineraries.length !== 0){
            for(var i = 0; i < itineraries.length; i++){
                itineraries[i].addEventListener('click', function(){
                    removeDuplicates();
                    renderComponent(
                        checkURL(window.location.href), 
                        peopleWatchingComponent(
                            props, 
                            setPeopleNumber(checkCriteria(props.data, processItineraryCriteria(checkURL(window.location.href))))
                        ),
                        cruiseSearchTarget
                    );
                });
            }
        }
    }

    //OVERLAYS CLICK EVENTS
    function deleteComponentOnOverlayClick(overlays){
        if(overlays.length !== 0){{
            for(var i = 0; i < overlays.length; i++){
                overlays[i].addEventListener('click', function(){
                    document.getElementById('ge_people-watching').remove();
                });
            }
        }}
    }

    function removeDuplicates(){
        if(document.getElementById('ge_people-watching')){
            document.getElementById('ge_people-watching').remove();
        }
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
        numberSpan.style.margin = '0px 3px 0px 3px';
        numberSpan.style.padding = '0px';
        numberSpan.style.color = details.textColor;
        numberSpan.style.cssFloat = 'left';

        if(numberOfPeople === undefined || numberOfPeople === null){
            numberSpan.innerText = Math.floor(Math.random()*250+1)+80;
        }else{
            numberSpan.innerText = numberOfPeople;
        }

        var peopleSpan = document.createElement('span');
        peopleSpan.style.width = 'auto';
        peopleSpan.style.height = 'auto';
        peopleSpan.style.textAlign = 'center';
        peopleSpan.style.fontFamily = 'ProximaNova-Bold, Helvetica';
        peopleSpan.style.fontSize = '18px';
        peopleSpan.style.margin = '0px 3px 0px 3px';
        peopleSpan.style.color = details.textColor;
        peopleSpan.innerText = details.people;
        peopleSpan.style.cssFloat = 'left';

        var  watchingSpan = document.createElement('span');
        watchingSpan.style.width = 'auto';
        watchingSpan.style.height = 'auto';
        watchingSpan.style.textAlign = 'center';
        watchingSpan.style.fontFamily = 'ProximaNova-Regular, Helvetica';
        watchingSpan.style.fontSize = '18px';
        watchingSpan.style.margin = '0px 3px 0px 3px';
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
    function processItineraryCriteria(data){
        
        function productViewStrategy(){
            var urlSplit = data.url.split('?');
            var urlData = urlSplit[0].split('/');
            var queryData = urlSplit[1].split('&');

            var itineraryData = urlData.filter(function(data){
                return  data.indexOf('night') !== -1 ? data : null;
            });

            var itineraryDataSplit = itineraryData[0].split('-');

            var queryDataSplit = [];
            for(var i = 0; i < queryData.length; i++){
                queryDataSplit.push(queryData[i].split('=')[0]);
                queryDataSplit.push(queryData[i].split('=')[1]);
            }

            var dataObject = {};
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

        var numberOfPeople = {am:[10, 20], business:[75, 150], pm:[150, 250]};
        for(var i = 0; i < data.length; i++){
            var checkedCriteria = [];

            //CHECK SHIP-CODES 
            if(data[i].criteria.ships === undefined || criteria.shipCode === undefined || data[i].criteria.ships.indexOf(criteria.shipCode) !== -1){
                checkedCriteria.push(true);
            }else{
                checkedCriteria.push(false);
            }

            //CHECK DEPARTURES 
            if(data[i].criteria.departures === undefined || criteria.departure === undefined || data[i].criteria.departures.join('').split(' ').join('').toLowerCase().indexOf(criteria.departure.split(' ').join('')) !== -1){
                checkedCriteria.push(true);
            }else{
                checkedCriteria.push(false);
            }

            //CHECK ITINERARY
            if(data[i].criteria.itinerary === undefined || criteria.itinerary === undefined || data[i].criteria.itinerary.join('').split(' ').join('').toLowerCase().indexOf(criteria.itinerary.split(' ').join('')) !== -1){
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
                numberOfPeople = data[i].views;
            }
        }

        return numberOfPeople;

    }

    //RENDER THE COMPONENT 
    function renderComponent(truthyURL, component, target){
        if(truthyURL.page === 'cruiseSearch'){
            var timer = setInterval(function(){
                if(document.querySelector('.itinerary-panel-details')){
                    document.querySelector('.itinerary-panel-details').style.paddingTop = '30px';
                    target = cruiseSearchTarget;
                    clearInterval(timer);
                }

                if(truthyURL.valid === true && target !== null){
                    target.insertBefore(component, target.children[0]);
                }

            }, 100);
        }else if(truthyURL.page === 'productView'){
            if(truthyURL.valid === true && target !== null){
                target.insertBefore(component, target.children[0]);
            }
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
        peopleWatchingComponent(props, setPeopleNumber(checkCriteria(props.data, processItineraryCriteria(checkURL(pageURL))))), 
        target
    );

    //DELETE COMPONENT ON OVERLAY CLICK
    deleteComponentOnOverlayClick(overlays);
+
    //CREATE COMPONENT ON ITINERARY CLICK
    itinerariesClickEvents(itineraries);

    //ADD CLASS TO ALL CURRENT ITINERARIES
    markCurrentItineraries(itineraries);

    //ADD CLICK EVENT TO PAGINATION BUTTONS
    paginationClicks(compare);

}

