pills({
    pillDetails: {
        color: 'red',
        text: ' Buy one get one free',
        class: 'pill_bogo'
    },
    pillCriteria: {
        shipCodes: ['NV', 'OA', 'MJ'],
        promoDates: [
            {
                startDate: 'Sep 18 2019', 
                endDate: 'Oct 22 2019' 
            },
            {
                startDate: 'Oct 24 2019',
                endDate: 'Nov 05 2019'
            }
        ],
        sailingDates: [
            {
                startDate: 'Oct 1 2019', 
                endDate: 'Nov 1 2019'   
            },
            {
                startDate: 'Jan 1 2020',
                endDate: 'Dec 31 2020'
            }
        ],
        numberOfNights: [0, 9],
        departurePorts: ['Fort Lauderdale', 'Miami'],
    },
    pillExclusions: {
        shipCodes: ['NV'],
        numberOfNights: [6, 9],
        // departurePorts: ['Miami', 'Fort Lauderdale'],
        // destinationPorts: ['Nassau'],
        // departureDates: [
        //     {
        //         startDate: 'Oct 28 2019',
        //         endDate:' Nov 13 2019'
        //     },
        //     {
        //         startDate:'Apr 15 2020',
        //         endDate: 'Apr 17 2020'
        //     }
        // ],
        // otherPills: ['mx_savings']
    }
});

function pills(data){

    //REMOVE METHOD POLYFILL FOR IE 9 OR HIGHER
    (function (arr) {
        arr.forEach(function (item) {
          if (item.hasOwnProperty('remove')) {
            return;
          }
          Object.defineProperty(item, 'remove', {
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
        });
      })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

    //STORES THE FINAL COMPARED AND MATCHED VALUES
    var comparedValues = [];

    //GET ALL ITITNERARIES ON PAGE
    var itineraries = document.querySelectorAll('.itinerary-card-component');
    var itineraryDetails = [];
    var timeZone = '';
    var country = window.location.href.split('/')[3];

    //SETS TIME ZONE BASED ON COUNTRY FOUND IN URL
    switch(country){
        case 'lac':
            timeZone = 'GMT-0300';
        break;
        case 'deu':
        case 'esp':
        case 'ita':
        case 'nor':
        case 'swe':
            timeZone = 'GMT+0200';
        break;
        case 'mex':
            timeZone = 'GMT-0500';
        break;
        default:
            timeZone =  'GMT-0500';
    }

    //CREATES DATE OBJECTS FROM CRITERIA SAILING DATES
    var criteriaSailDates = [];
    if(data.pillCriteria.sailingDates){
        var sailDates = data.pillCriteria.sailingDates
        for(var i = 0; i < sailDates.length; i++){
            criteriaSailDates.push(new Date(sailDates[i].startDate+' '+timeZone));
            criteriaSailDates.push(new Date(sailDates[i].endDate+' '+timeZone));
        }
        // data.pillCriteria.sailingDates.forEach(function(sailDate){
        //     criteriaSailDates.push(new Date(sailDate.startDate+' '+timeZone));
        //     criteriaSailDates.push(new Date(sailDate.endDate+' '+timeZone));
        // });
    }else{
        criteriaSailDates.push(new Date());
        criteriaSailDates.push(new Date(Date.now()+1000*60*60*24*365*2));
    }
    
    //CREATES DATE OBJECTS FROM PROMO SAILING DATES
    var criteriaPromoDates = [];
    if(data.pillCriteria.promoDates){
        var promoDates = data.pillCriteria.promoDates
        for(var i = 0; i < promoDates.length; i++){
            criteriaPromoDates.push(new Date(promoDates[i].startDate+' '+timeZone));
            criteriaPromoDates.push(new Date(promoDates[i].endDate+' '+timeZone));
        }
        // data.pillCriteria.promoDates.forEach(function(promoDate){
        //     criteriaPromoDates.push(new Date(promoDate.startDate+' '+timeZone));
        //     criteriaPromoDates.push(new Date(promoDate.endDate+' '+timeZone));
        // }); 
    }else{
        criteriaPromoDates.push(new Date());
        criteriaPromoDates.push(new Date(Date.now()+1000*60*60*24*30));
    }

    //LOOP OVER AL ITINERARIES AND COLLECT RELEVANT DATA
    for(var i = 0; i < itineraries.length; i++){
        itineraryDetails.push(crawlItineraries(itineraries[i]));
    }
    // itineraries.forEach(function(itinerary){
    //     itineraryDetails.push(crawlItineraries(itinerary));
    // });

    //lOOP OVER ITINERARY DETAILS AND COMPARE AGAINST CRITERIA
    for(var i = 0; i < itineraryDetails.length; i++){
        comparedValues.push(compareCriteria(itineraryDetails[i], data.pillCriteria));
        comparedValues[i].push(checkExclusions(itineraryDetails[i], data.pillExclusions));
    }
    // itineraryDetails.forEach(function(itineraryDetail, i){
    //     comparedValues.push(compareCriteria(itineraryDetail, data.pillCriteria));
    //     comparedValues[i].push(checkExclusions(itineraryDetail, data.pillExclusions));
    // });
    
    //VALIDATES THE ITINERARY TO SEE OF IT TAKES A PILL
    function crawlItineraries(itinerary){
        //SHIP CODES
        var shipCode = itinerary.attributes.shipcode.value;
        
        //SAIL DATE
        var sailDate = itinerary.attributes.saildate.value;
        
        //DEPARTURE PORTS
        var portString = itinerary.children[0].children[1].children[2].innerText;
        var portStringArray = portString.substring(portString.lastIndexOf(":")+2, portString.lastIndexOf(",")).split(',');
        var port = portStringArray[0];

        //NUMBER OF NIGHTS
        var numberOfNights = itinerary.children[0].children[1].children[0].innerText.split(' ')[0];

        //DESTINATION PORTS
        var destinationPortsStrinArray = itinerary.children[0].children[1].children[4].innerText.split(':\n').pop().split(' | ')
        var destinationPorts = [];
        for(var i = 0; i < destinationPortsStrinArray.length; i++){
            destinationPorts.push(destinationPortsStrinArray[i].split(',')[0]);
        }
        // destinationPortsStrinArray.forEach(function(port){
        //     destinationPorts.push(port.split(',')[0]);
        // });

        //OTHER PILLS
        var existingPills = itinerary.children[0].children[1].children[3].children[0].children;
        var pillClasses = [];
        for(var i = 0; i < existingPills.length; i++){
            if(existingPills[i].classList){
                pillClasses.push(existingPills[i].attributes.class.value);
            }else{
                pillClasses.push('no pill class');
            }
        }

        var pills = [];
        for(var i = 0; i < pillClasses.length; i++){
            if(pillClasses[i].indexOf(' ') !== -1){
                pills.push(pillClasses[i].split(' '));
            }else{
                pills.push(pillClasses[i]);
            }
        }
        // pillClasses.forEach(function(pill){
        //     if(pill.indexOf(' ') !== -1){
        //         pills.push(pill.split(' '));
        //     }else{
        //         pills.push(pill);
        //     }
        // });

        return ({
            shipCode: shipCode,
            sailDate: sailDate,
            departurePort: port,
            numberOfNights: numberOfNights,
            destinationPorts: destinationPorts,
            pills: pills
        });

    }

    //COMPARES PILL CRITERIA AND MATCHES IT TO ITINERARIES
    function compareCriteria(itineraryDetail, criteria){

        var matched = [];

        //CHECK THAT CRITERIA SHIPCODE IS IN ITINERARY
        if(criteria.shipCodes){
            if(criteria.shipCodes.indexOf(itineraryDetail.shipCode) !== -1){
                matched.push(true);
            }else{
                matched.push(false);
            }
        }
        
        //CHECK THAT CRITIRIA NUMBER OF NIGHTS IS EQUAL TO ITINERARY'S
        if(criteria.numberOfNights){

            if( Number(itineraryDetail.numberOfNights) >= criteria.numberOfNights[0] &&
                Number(itineraryDetail.numberOfNights) <= criteria.numberOfNights[1]
            ){
                matched.push(true);
            }else{
                matched.push(false);
            }
        }

        //CHECK THAT CRITERIA DEPARTURE PORT IS IN ITINERARY
        if(criteria.departurePorts){
            if(criteria.departurePorts.indexOf(itineraryDetails.departurePorts) !== -1){
                matched.push(true);
            }else{
                matched.push(true);
            }
        }   

        //CHECK THAT CRITERIA SAILING DATES MATCH ITINERARY
        if(criteria.sailingDates){
            matched.push(checkSailDates(criteriaSailDates, itineraryDetail.sailDate));
        }
        
        //CHECK THAT CRITERIA PROMO DATES MATCH ITINERARY
        if(criteria.promoDates){
            matched.push(checkPromoDates(criteriaPromoDates));
        }

        return matched.length !== 0?matched:true;
    }

    //CHECKS ITINERARY SAIL DATE IS WITHIN THE CRITERIA SAILING DATES TIME RANGE
    function checkSailDates(sailDatesObjects, sailDate){

        var date = sailDate.split('-');

        switch(date[1]){
            case '01':
                date[1] = 'Jan';
            break;
            case '02':
                date[1] = 'Feb';
            break;
            case '03':
                date[1] = 'Mar';
            break;
            case '04':
                date[1] = 'Apr';
            break;
            case '05':
                date[1] = 'May';
            break;
            case '06':
                date[1] = 'Jun';
            break;
            case '07':
                date[1] = 'Jul';
            break;
            case '08':
                date[1] = 'Aug';
            break;
            case '08':
                date[1] = 'Sep';
            break;
            case '10':
                date[1] = 'Oct';
            break;
            case '11':
                date[1] = 'Nov';
            break;
            case '12':
                date[1] = 'Dec';
            break;
        }
        
        var itineraryDate = new Date(date[1]+' '+date[2]+' '+date[0]+' '+'00:00:00'+' '+timeZone);
        var dates = [];

        for(var i = 0; i < sailDatesObjects.length; i+=2){
            if(itineraryDate >= sailDatesObjects[i] && itineraryDate <= sailDatesObjects[i+1]){
                dates.push(true);
            }else{
                dates.push(false);
            }
        }

        if(dates.indexOf(true) !== -1){
            return true;
        }else{
            return false;
        }

    }

    //CHECKS CURRENT DATE IS WITHIN THE CRITERIA PROMO DATES TIME RANGE
    function checkPromoDates(promoDatesObjects){

        var currentDate = new Date();
        var dates = [];

        for(var i = 0; i < promoDatesObjects.length; i+=2){
            if(promoDatesObjects[i] <= currentDate && promoDatesObjects[i+1] >= currentDate){
                dates.push(true);
            }else{
                dates.push(false);
            }
        }

        if(dates.indexOf(true) !== -1){
            return true;
        }else{
            return false;
        }

    }

    //CHECK EXCLUSIONS
    function checkExclusions(itineraryDetail, exclusions){

        var checked = []; 

        //CHECK SHIPCODES
        if(exclusions.shipCodes){
            if(exclusions.shipCodes.indexOf(itineraryDetail.shipCode) !== -1){
                checked.push(false);
            }else{
                checked.push(true);
            }
        }

        //CHECK DEPARTURE PORTS
        if(exclusions.departurePorts){
            if(exclusions.departurePorts.indexOf(itineraryDetail.departurePort) === -1){
                checked.push(true);
            }else{
                checked.push(false);
            }
        }

        //CHECK DESTINATION PORTS BOTH VARIABLES ARE ARRAYS OF STRINGS
        if(exclusions.destinationPorts){
            var destinationPorts = exclusions.destinationPorts.join('');

            if(itineraryDetail.destinationPorts.indexOf(destinationPorts) === -1){
                checked.push(true);
            }else{
                checked.push(false);
            }
        }

        //CHECK DEPATURE DATES
        if(exclusions.departureDates){

            var departureDates = [];

            for(var i = 0; i < exclusions.departureDates.length; i++){
                departureDates.push(new Date(exclusions.departureDates[i].startDate+' '+timeZone));
                departureDates.push(new Date(exclusions.departureDates[i].endDate+' '+timeZone));
            }
            // exclusions.departureDates.forEach(function(date){
            //     departureDates.push(new Date(date.startDate+' '+timeZone));
            //     departureDates.push(new Date(date.endDate+' '+timeZone));
            // });

            if(checkSailDates(departureDates, itineraryDetail.sailDate) === true){
                checked.push(false);
            }else{
                checked.push(true);
            }

        }

        //CHECK EXCLUSIONS NUMBER OF NIGHTS
        if(exclusions.numberOfNights){
            if( Number(itineraryDetail.numberOfNights) < exclusions.numberOfNights[0] ||
                Number(itineraryDetail.numberOfNights) > exclusions.numberOfNights[1]
            ){
                checked.push(true);
            }else{
                checked.push(false);
            }
        }

        //CHECK OTHER PILLS BOTH VARIABLES ARE ARRAYS OF STRINGS
        if(exclusions.otherPills){
            for(var i = 0; i < itineraryDetail.pills.length; i++){
                for(var j = 0; j < exclusions.otherPills.length; j++){
                    if(itineraryDetail.pills[i].indexOf(exclusions.otherPills[j]) === -1){
                        checked.push(true);
                    }else{
                        checked.push(false);
                    }
                }
            }
            // itineraryDetail.pills.forEach(function(pill){
            //     exclusions.otherPills.forEach(function(otherPill){
            //         if(pill.indexOf(otherPill) === -1){
            //             checked.push(true);
            //         }else{
            //             checked.push(false);
            //         }
            //     });
            // });
        }

        //POLYFILL FOR IE11 MISSING Object.keys() METHOD
        if(!Object.keys) Object.keys = function(o){
            if(o !== Object(o)){
                throw new TypeError('Object.keys called on a non-object');
            }

            var k =[];
            var p;

            for(p in o){
                if(Object.prototype.hasOwnProperty.call(o,p)){
                    k.push(p);
                } 
            } 

            return k;
        }

        //CHECK IF THERE ARE EXLUSIONS THAT ARE CONTINGENT
        //UPON OTHER EXCLUSIONS
        //AND SET THE RETURN OF THE FUNCTION
        if(Object.keys(exclusions).length > 1){
            //SET THE RETURN OF THE FUNCTION
            var contingentCount = 0;

            for(var i = 0; i < checked.length; i++){
                if(checked[i] === false){
                    contingentCount++
                }
            }
            // checked.forEach(function(check){
            //     if(check === false){
            //         contingentCount++;
            //     }
            // });

            if(contingentCount === checked.length){
                return false;
            }else{
                return true;
            }
        }else{
            //SET THE RETURN OF THE FUNCTION
            if(checked.length == 0){
                return true;
            }else if(checked.indexOf(false) === -1){
                return true;
            }else{
                return false;
            }
        }

    }

    //CREATES THE PILL DOM ELEMENT 
    function createPill(pillDetails){
        //CREATE PILL LIST ITEM
        var pillListItem = document.createElement('li');
        pillListItem.style.background = 'green';
        pillListItem.style.width = 'auto';
        pillListItem.style.height = 'auto';
        pillListItem.style.padding = '0px 10px 0px 10px';
        pillListItem.style.margin = '10px 7px 5px 0px';
        pillListItem.style.display = 'inline-flex';
        pillListItem.style.color = '#ffffff';
        pillListItem.style.fontFamily = 'proxima-bold, Helvetica Neue, Roboto, Arial, sans-serif';
        pillListItem.style.letterSpacing = '0.75px';
        pillListItem.style.lineHeight = '25px';
        pillListItem.style.fontSize = '10px';
        pillListItem.style.fontWeight = '400';
        pillListItem.innerText = "This pill needs text";
        pillListItem.classList.add('pill_default');

        if(pillDetails.color){
            pillListItem.style.background = pillDetails.color;
        }else{
            console.log('The pill color was not specified, default will be set');
        }

        if(pillDetails.text){
            pillListItem.innerText = pillDetails.text.toUpperCase();
        }else{
            console.log('The pill text was not specified, default will be set');
        }

        if(pillDetails.class){
            pillListItem.classList.add(pillDetails.class);
        }else{
            console.log('The pill class was not specified, default will be set');
        }

        return pillListItem;
    }

    //INJECT PILL INTO ITINERARY
    function injectPill(targetItinerary, pillListItem){
        targetItinerary.appendChild(pillListItem);
    }

    //SELECT TARGET ITINERAY AND INJECT THE PILLs 
    function targetAndInjectPill(itineraries, values){

        for(var i = 0; i < values.length; i++){
            if(values[i].indexOf(false) === -1){
                var target = itineraries[i].children[0].children[1].children[3].children[0];
                injectPill(target, createPill(data.pillDetails));
            }
        }
        // values.forEach(function(cv, i){
        //     if(cv.indexOf(false) === -1){
        //         var target = itineraries[i].children[0].children[1].children[3].children[0]
        //         callback(target, createPill(data.pillDetails));
        //     }
        // });

    }

    //REFRESH PILLS ON PAGE URL CHANGE
    function refreshPills(){
        var pillOnPage = document.querySelectorAll('.'+data.pillDetails.class);

        if(pillOnPage.length > 0){
            for(var i = 0; i < pillOnPage.length; i++){
                pillOnPage[i].remove();
            }
            // pillOnPage.forEach(function(pill){
            //     pill.remove();
            // });
            targetAndInjectPill(itineraries, comparedValues);
        }
    }

    function paginationClicks(){
        var nextPage = document.querySelector('.mat-paginator-navigation-next');
        var prevPage = document.querySelector('.mat-paginator-navigation-previous');
        var nightsFilter = document.querySelectorAll('.mat-button-toggle-label');

        for(var i = 0; i < nightsFilter.length; i++){
            nightsFilter[i].addEventListener('click', function(){
                domObserver(data, true);
            });
        }
        // nightsFilter.forEach(function(btn){
        //     btn.addEventListener('click', function(){
        //         domObserver(data, true);
        //     });
        // });

        nextPage.addEventListener('click', function(){
            domObserver(data, true);
        });

        prevPage.addEventListener('click', function(){
            domObserver(data, true);
        });
    }

    targetAndInjectPill(itineraries, comparedValues);
    refreshPills();
    paginationClicks();

}

function domObserver(data, reset){
    var target = document.querySelectorAll('.itinerary-card-component');
    var timer = setInterval(function(){
        var newTarget = document.querySelectorAll('.itinerary-card-component');
        for(var i = 0; i < target.length; i++){
            if( target[i].attributes.destinationcode !== newTarget[i].attributes.destinationcode ||
                target[i].attributes.shipcode        !== newTarget[i].attributes.shipcode        ||
                target[i].attributes.packagecode     !== newTarget[i].attributes.packagecode     ||
                target[i].attributes.saildate        !== newTarget[i].attributes.saildate        || 
                target[i].attributes.saildate_first  !== newTarget[i].attributes.saildate_first  ||
                target[i].attributes.saildate_last   !== newTarget[i].attributes.saildate_last   ||
                target[i] === undefined || 
                newTarget[i] === undefined
            ){  
                pills(data);
                clearInterval(timer);
                break;
            }
        }
    }, 500);
}