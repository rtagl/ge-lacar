/*
    MA04S213-2019-10-07
    
    MA         = shipCode
    04         = numberOfNight
    s          = destination
    213        = differentiators
    2019-10-07 = sailDate
*/

//FIX DEPARTURE PORTS ON EXCLUSIONS

function pill(pillDetails, shipCodes, promoDates, sailingDates, numberOfNights, departurePorts, exclusions){
    let target = document.querySelector('.itinerary-promotions'); 
}

window.addEventListener('load', ()=>{
    pills(
        {
            pillDetails: {
                color: '#110000',
                text: ' Buy one get one free',
                class: 'pill_bogo'
            },
            pillCriteria: {
                shipCodes: ['NV', 'EM'],
                promoDates: [
                    {
                        startDate: 'Sep 18 2019 10:00:00', 
                        endDate: 'Oct 22 2019 10:00:00' 
                    },
                    {
                        startDate: 'Oct 24 2019 10:00:00',
                        endDate: 'Nov 05 2019 10:00:00'
                    }
                ],
                sailingDates: [
                    {
                        startDate: 'Oct 20 2019 10:00:00', 
                        endDate: 'Oct 27 2019 10:00:00'   
                    },
                    {
                        startDate: 'Oct 28 2019 10:00:00',
                        endDate: 'Nov 02 2019 10:00:00'
                    }
                ],
                numberOfNights: 3,
                departurePorts: ['Fort Lauderdale', 'Miami'],
            },
            pillExclusions: {
                //shipCodes: ['NE'],
                //numberOfNights: [7,9],
                //departurePorts: ['Miami', 'Sidney', 'Orlando'],
                //destinationPorts: ['Mexico', 'Puerto Rico'],
                // departureDates: [
                //     {
                //         startDate: 'Sep 25 2019',
                //         endDate:' Oct 13 2019'
                //     },
                //     {
                //         startDate:'Oct 26 2019',
                //         endDate: 'Nov 13 2019'
                //     }
                // ],
                //otherPills: ['pill_yoda', 'pill_dawg']
            }
        }
    );
});

function pills(data){

    //STORES THE FINAL COMPARED AND MATCHED VALUES
    let comparedValues = [];

    //GET ALL ITITNERARIES ON PAGE
    let itineraries = document.querySelectorAll('.itinerary-card-component');

    let itineraryDetails = [];

    let timeZone = '';
    let country = 'https://www.royalcaribbean.com/lac/es/core/header.html?g11n=false'.split('/')[3];

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
    }

    //CREATES DATE OBJECTS FROM CRITERIA SAILING DATES
    let criteriaSailDates = [];
    data.pillCriteria.sailingDates.forEach((sailDate)=>{
        criteriaSailDates.push(new Date(sailDate.startDate+' '+timeZone));
        criteriaSailDates.push(new Date(sailDate.endDate+' '+timeZone));
    });
    
    //CREATES DATE OBJECTS FROM PROMO SAILING DATES
    let criteriaPromoDates = [];
    data.pillCriteria.promoDates.forEach((promoDate)=>{
        criteriaPromoDates.push(new Date(promoDate.startDate+' '+timeZone));
        criteriaPromoDates.push(new Date(promoDate.endDate+' '+timeZone));
    });

    //CREATE DATE OBJECTS FROM EXCLUSION DATES
    let exclusionsDepartureDates = [];
    if(data.pillExclusions.departureDates){
        data.pillExclusions.departureDates.forEach((excludedDate)=>{
            exclusionsDepartureDates.push(new Date(excludedDate.startDate+' '+timeZone));
            exclusionsDepartureDates.push(new Date(excludedDate.endDate+' '+timeZone));
        });
    }

    //LOOP OVER AL ITINERARIES AND COLLECT RELEVANT DATA
    itineraries.forEach((itinerary)=>{
        itineraryDetails.push(crawlItineraries(itinerary));
    });

    //lOOP OVER ITINERARY DETAILS AND COMPARE AGAINST CRITERIA
    itineraryDetails.forEach((itineraryDetail, i)=>{
        comparedValues.push(compareCriteria(itineraryDetail, data.pillCriteria));
        comparedValues[i].push(checkExclusions(itineraryDetail, data.pillExclusions));
    });

    //VALIDATES THE ITINERARY TO SEE OF IT TAKES A PILL
    function crawlItineraries(itinerary){
        //SHIP CODES
        let shipCode = itinerary.attributes.shipcode.value;
        
        //SAIL DATE
        let sailDate = itinerary.attributes.saildate.value;
        
        //DEPARTURE PORTS
        let portString = itinerary.children[0].children[1].children[2].innerText;
        let portStringArray = portString.substring(portString.lastIndexOf(":")+2, portString.lastIndexOf(",")).split(',');
        let port = portStringArray[0];

        //NIGHTS
        let numberOfNights = itinerary.children[0].innerText.split(' ')[0];

        //DESTINATION PORTS
        let destinationPortsStrinArray = itinerary.children[0].children[1].children[4].innerText.split(':\n').pop().split(' | ')
        let destinationPorts = [];
        destinationPortsStrinArray.forEach((port)=>{
            destinationPorts.push(port.split(',')[0]);
        });

        //OTHER PILLS
        let existingPills = itinerary.children[0].children[1].children[3].children[0].children;
        let pills = [];
        for(let i = 0; i < existingPills.length; i++){
            if(existingPills[i].attributes.class){
                pills.push(existingPills[i].attributes.class.value);
            }else{
                pills.push('no pill class');
            }
        }

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

        let matched = [];

        //CHECK THAT CRITERIA SHIPCODE IS IN ITINERARY
        if(criteria.shipCodes.indexOf(itineraryDetail.shipCode) !== -1){
            matched.push(true);
        }else{
            matched.push(false);
        }
        
        //CHECK THAT CRITIRIA NUMBER OF NIGHTS IS EQUAL TO ITINERARY'S
        if(criteria.numberOfNights === Number(itineraryDetail.numberOfNights)){
            matched.push(true);
        }else{
            matched.push(false);
        }

        //CHECK THAT CRITERIA DEPARTURE PORT IS IN ITINERARY
        if(criteria.departurePorts.indexOf(itineraryDetails.departurePorts) !== -1){
            matched.push(true);
        }else{
            matched.push(true);
        }

        //CHECK THAT CRITERIA SAILING DATES MATCH ITINERARY
        matched.push(checkSailDates(criteriaSailDates, itineraryDetail.sailDate));
        
        //CHECK THAT CRITERIA PROMO DATES MATCH ITINERARY
        matched.push(checkPromoDates(criteriaPromoDates));
        
        return matched;
    }

    //CHECKS ITINERARY SAIL DATE IS WITHIN THE CRITERIA SAILING DATES TIME RANGE
    function checkSailDates(sailDatesObjects, sailDate){

        let date = sailDate.split('-');
        let parsedDateString = new Date(date[1]+' '+date[2]+' '+date[0]+' '+'00:00:00'+' '+timeZone);
        let dates = [];

        for(let i = 0; i < sailDatesObjects.length; i+=2){
            if(parsedDateString > sailDatesObjects[i] && parsedDateString < sailDatesObjects[i+1]){
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

        let currentDate = new Date();
        let dates = [];

        for(let i = 0; i < promoDatesObjects.length; i+=2){
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

        let checked = [];

        //CHECK SHIPCODES
        if(exclusions.shipCodes){
            if(exclusions.shipCodes.indexOf(itineraryDetail.shipCode) === -1){
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
            let destinationPorts = exclusions.destinationPorts.join('');

            if(itineraryDetail.destinationPorts.indexOf(destinationPorts) === -1){
                checked.push(true);
            }else{
                checked.push(false);
            }
        }

        //CHECK DEPATURE DATES
        if(exclusions.departureDates){

            let departureDates = [];

            exclusions.departureDates.forEach((date)=>{
                departureDates.push(new Date(date.startDate+' '+timeZone));
                departureDates.push(new Date(date.endDate+' '+timeZone));
            });

            if(checkSailDates(departureDates, itineraryDetail.sailDate)){
                checked.push(true);
            }else{
                checked.push(false);
            }

        }

        //CHECK EXCLUSIONS NUMBER OF NIGHTS
        if(exclusions.numberOfNights){
            if( Number(itineraryDetail.numberOfNights) <= exclusions.numberOfNights[0] ||
                Number(itineraryDetail.numberOfNights) >= exclusions.numberOfNights[1]
            ){
                checked.push(false);
            }else{
                checked.push(true);
            }
        }

        //CHECK OTHER PILLS BOTH VARIABLES ARE ARRAYS OF STRINGS
        if(exclusions.otherPills){
            let pills = exclusions.otherPills.join('');

            if(itineraryDetail.pills.indexOf(pills) !== -1){
                checked.push(false);
            }else{
                checked.push(true);
            }

        }

        //SET THE RETURN OF THE FUNCTION
        if(checked.indexOf(false) === -1 && checked.length !== 0){
            return false;
        }else{  
            return true;
        }

    }

    //CREATES THE PILL DOM ELEMENT 
    function createPill(pillDetails){
        //CREATE PILL LIST ITEM
        let pillListItem = document.createElement('li');
        pillListItem.style.background = 'green';
        pillListItem.style.width = 'auto';
        pillListItem.style.height = 'auto';
        pillListItem.style.padding = '5px 10px 0px 10px';
        pillListItem.style.margin = '0px';
        pillListItem.innerText = "This pill needs text";
        pillListItem.classList.add('pill_default');

        if(pillDetails.color){
            pillListItem.style.background = pillDetails.color;
        }else{
            console.log('The pill color was not specified, default will be set');
        }

        if(pillDetails.text){
            pillListItem.innerText = pillDetails.text;
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
    function targetAndInjectPill(itineraries, values, callback){

        values.forEach((cv, i)=>{
            if(cv.indexOf(false) === -1){
                let target = itineraries[i].children[0].children[1].children[3].children[0]
                callback(target, createPill(data.pillCriteria));
            }
        });

    }

    targetAndInjectPill(itineraries, comparedValues, injectPill);

}





