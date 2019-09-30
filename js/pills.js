window.addEventListener('load', ()=>{
    pills(
        {
            pillDetails: {
                color: 'red',
                text: ' Buy one get one free',
                class: 'pill_bogo'
            },
            pillCriteria: {
                shipCodes: ['NV', 'OA', 'MJ'],
                // promoDates: [
                //     {
                //         startDate: 'Sep 18 2019 10:00:00', 
                //         endDate: 'Oct 22 2019 10:00:00' 
                //     },
                //     {
                //         startDate: 'Oct 24 2019 10:00:00',
                //         endDate: 'Nov 05 2019 10:00:00'
                //     }
                // ],
                // sailingDates: [
                //     {
                //         startDate: 'Oct 20 2019 10:00:00', 
                //         endDate: 'Oct 27 2019 10:00:00'   
                //     },
                //     {
                //         startDate: 'Oct 28 2019 10:00:00',
                //         endDate: 'Nov 03 2019 10:00:00'
                //     }
                // ],
                // numberOfNights: [3, 9],
                // departurePorts: ['Fort Lauderdale', 'Miami'],
            },
            pillExclusions: {
                //shipCodes: ['NV'],
                //numberOfNights: [4, 9],
                //departurePorts: ['Miami', 'Fort Lauderdale'],
                //destinationPorts: ['Nassau'],
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
                //otherPills: ['mx_savings']
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
    if(data.pillCriteria.sailingDates){
        data.pillCriteria.sailingDates.forEach((sailDate)=>{
            criteriaSailDates.push(new Date(sailDate.startDate+' '+timeZone));
            criteriaSailDates.push(new Date(sailDate.endDate+' '+timeZone));
        });
    }else{
        criteriaSailDates.push(new Date());
        criteriaSailDates.push(new Date(Date.now()+1000*60*60*24*365*2));
    }
    
    //CREATES DATE OBJECTS FROM PROMO SAILING DATES
    let criteriaPromoDates = [];
    if(data.pillCriteria.promoDates){
        data.pillCriteria.promoDates.forEach((promoDate)=>{
            criteriaPromoDates.push(new Date(promoDate.startDate+' '+timeZone));
            criteriaPromoDates.push(new Date(promoDate.endDate+' '+timeZone));
        }); 
    }else{
        criteriaPromoDates.push(new Date());
        criteriaPromoDates.push(new Date(Date.now()+1000*60*60*24*30));
    }
    console.log(criteriaPromoDates);
    
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
        let pillClasses = [];
        for(let i = 0; i < existingPills.length; i++){
            if(existingPills[i].classList){
                pillClasses.push(existingPills[i].attributes.class.value);
            }else{
                pillClasses.push('no pill class');
            }
        }

        let pills = [];
        pillClasses.forEach((pill)=>{
            if(pill.indexOf(' ') !== -1){
                pills.push(pill.split(' '));
            }else{
                pills.push(pill);
            }
        });

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
        if(criteria.shipCodes){
            if(criteria.shipCodes.indexOf(itineraryDetail.shipCode) !== -1){
                matched.push(true);
            }else{
                matched.push(false);
            }
        }
        
        //CHECK THAT CRITIRIA NUMBER OF NIGHTS IS EQUAL TO ITINERARY'S
        if(criteria.numberOfNights){
            if( criteria.numberOfNights[0] <= Number(itineraryDetail.numberOfNights) ||
                criteria.numberOfNights[1] >= Number(itineraryDetail.numberOfNights)
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
            itineraryDetail.pills.forEach((pill)=>{
                exclusions.otherPills.forEach((otherPill)=>{
                    if(pill.indexOf(otherPill) === -1){
                        checked.push(true);
                    }else{
                        checked.push(false);
                    }
                });
            });
        }

        //CHECK IF THERE ARE EXLUSIONS THAT ARE CONTINGENT
        //AND SET THE RETURN OF THE FUNCTION
        if(Object.keys(exclusions).length > 1){
            //SET THE RETURN OF THE FUNCTION
            let contingentCount = 0;

            checked.forEach((check)=>{
                if(check === false){
                    contingentCount++;
                }
            });

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
        let pillListItem = document.createElement('li');
        pillListItem.style.background = 'green';
        pillListItem.style.width = 'auto';
        pillListItem.style.height = 'auto';
        pillListItem.style.padding = '5px 10px 5px 10px';
        pillListItem.style.margin = '0px 7px 7px 0px';
        pillListItem.style.color = '#ffffff';
        pillListItem.style.fontFamily = 'proxima-bold, Helvetica Neue, Roboto, Arial, sans-serif';
        pillListItem.style.letterSpacing = '0.75px';
        pillListItem.style.fontSize = '12px';
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
    function targetAndInjectPill(itineraries, values, callback){

        values.forEach((cv, i)=>{
            if(cv.indexOf(false) === -1){
                let target = itineraries[i].children[0].children[1].children[3].children[0]
                callback(target, createPill(data.pillDetails));
            }
        });

    }

    targetAndInjectPill(itineraries, comparedValues, injectPill);

}