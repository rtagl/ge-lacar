//take arguments
// shipCode<string>, sailings<array of strings>, numOfNights<array of strings>, departures<array of strings>, itinerary<array of strings>
// .itinerary-visiting-ports 
// .itinerary-promotions

/*
    MA04S213-2019-10-07
    
    MA         = shipCode
    04         = numberOfNight
    s          = destination
    213        = differentiators
    2019-10-07 = sailDate
*/

// var data = {
//     schedule:[['Sep 10 2019', 'Sep 30 2019 23:59:59']],
//     pill:{
//         text: '50% off 2nd Guest', // *required: what the pill says
//         color: {
//         background: '#1192FF'
//         },
//         id: 'mxBogo50'// *required: unique. pills with the same id cannot be placed together
//     },
//     criteria:{
//         sailingRange:[['Oct 21 2019' + dayStart, 'Apr 30 2021' + dayEnd]],
//         departures: ['Singapore'],
//         ships: ['OA', 'EM']
//     },
//     exclusions:{
//         ships: ['AL']
//     }
// };

//get all itinerary elements
//loop through them and get all all ship codes, saildates, departure ports, 
//check range of promotions
//check rannge of sail dates
//check nights
//check departurePorts
//check itineraries
//set pill color
//set pill text

//sailing dates cover a range or valid departure dates for the promotions
//get departure date from dom
//match departure dates to valid depature dates 

//check if item shipcode matches the pill shipcodes 
//check if item sailDate is within pill sailing dates
//check if item number of nights matched pill number of nights
//check if item departure port matches pill departure ports

function pill(pillDetails, shipCodes, promoDates, sailingDates, numberOfNights, departurePorts, itineraries, exclusions){

    let target = document.querySelector('.itinerary-promotions');

    let pillListItem = document.createElement('li');
    pillListItem.style.background = 'green';
    pillListItem.style.width = 'auto';
    pillListItem.style.height = 'auto';
    pillListItem.style.padding = '5px 10px 0px 10px';
    pillListItem.style.margin = '0px';
    pillListItem.innerText = "This pill needs text";
    
    let itineraryElements = document.querySelectorAll('.itinerary-card-component');
    let itineraryDescriptions = document.querySelectorAll('.itinerary-description');

    let shipCodesArr = [];
    let sailDatesArr = [];
    let departurePortsArr = [];

    let promoDatesObjects = [];
    let sailingDatesObjects = [];

    let timeZone = '';
    let country = 'https://www.royalcaribbean.com/lac/es/core/header.html?g11n=false'.split('/')[3];

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

    // let prevBtn = document.querySelector('.mat-paginator-navigation-previous');
    // let nextBtn = document.querySelector('.mat-paginator-navigation-next');

    //GET SHIP CODES AND SAILDATES
    itineraryElements.forEach((node)=>{
        shipCodesArr.push(node.attributes.shipcode.value);
        sailDatesArr.push(node.attributes.saildate.value);
    });

    //GET PROMO DATE OBJECTS PUSH THEN TO DATE OBJECT ARRAY
    promoDates.forEach((promo)=>{
        promoDatesObjects.push(new Date(promo.startDate));
        promoDatesObjects.push(new Date(promo.endDate));
    });

    //GET DATE OBJECTS PUSH THEM TO DATE OBJECT ARRAY
    sailingDates.forEach((sail)=>{
        sailingDatesObjects.push(new Date(sail.startDate));
        sailingDatesObjects.push(new Date(sail.endDate));
    });

    //GET DEPARTURE PORTS
    itineraryDescriptions.forEach((node)=>{
        let nodeText = node.innerText.substring(node.innerText.lastIndexOf(":")+2, node.innerText.lastIndexOf(",")).split(',');
        departurePortsArr.push(nodeText[0]);
    });

    //CHECK FOR PILL REQUIREMENTS
    if(pillDetails !== null || pillDetails !== ''){
        pillListItem.style.background = pillDetails.color;
        pillListItem.innerText = pillDetails.text;
        pillListItem.setAttribute('id', pillDetails.id);
    }

    //CHECK APPLICABLE SHIPCODES
    if(shipCodes.length !== 0 || shipCodes !== null){
        check(shipCodesArr, shipCodes);
    }

    //CHECK APPLICABLE PROMODATES
    if(promoDates.length !== 0 || promoDates !== null){
        checkPromoDates(promoDatesObjects);
    }

    //CHECK ALL SHIP CODES AND COMPARE
    function check(arrOne, arrTwo){

        let str = arrTwo.join('');

        for(let i = 0; i < arrOne.length; i++){
            if(str.indexOf(arrOne[i]) !== -1){
                console.log(i);
            }
        }

    }

    //CHECK THE PROMO DATES
    function checkPromoDates(promoDatesObjects){

        let currentDate = new Date();

        console.log(currentDate);

        for(let i = 0; i < promoDatesObjects.length; i+=2){
            if(promoDatesObjects[i] < currentDate && promoDatesObjects[i+1] > currentDate){
                console.log('good to go');
            }else{
                console.log('no go');
            }
        }
    }

    let sailDate = 

    function checkSailDates(sailsDatesObjects, sailDate){

        

    }
    

}

window.addEventListener('load', ()=>{
    pill(
        //PILL DETAILS
        {
            color: '#110000',
            text: 'Buy one get one free',
            id: 'pill_bogo'
        },

        //SHIPCODES
        ['NV', 'EM'],
        
        //PROMO DATES
        [
            {
                startDate: 'Sep 18 2019 10:00:00', 
                endDate: 'Oct 22 2019 10:00:00'    
            },
            {
                startDate: 'Oct 24 2019 10:00:00',
                endDate: 'Nov 05 2019 10:00:00'
            }
        ],

        //SAILING DATES
        [
            {
                startDate: 'Sep 20 2019 10:00:00', 
                endDate: 'Oct 21 2019 10:00:00'   
            },
            {
                startDate: 'Oct 25 2019 10:00:00',
                endDate: 'Nov 02 2019 10:00:00'
            }
        ],
        
        //NUMBER OF NIGHTS
        3, 

        //DEPARTURE PORTS
        ['Fort Lauderdale', 'Miami'],

        //ITINERARIES
        null,

        //EXCLUSIONS
        {
            ships:['EM', 'NE', 'OA', 'AL'],
            numberOfNights: [7, 9],
            averageCost: '200-400', //from-to
            departurePorts: ['Miami', 'Sidney', 'Orlando'],
            destinationPorts: ['Mexico', 'Puerto Rico'],
            departureDates: [
                {
                    startDate: 'Sep 25 2019',
                    endDate:' Oct 13 2019'
                },
                {
                    startDate:'Oct 15 2019',
                    endDate: 'Oct 27 2019'
                }
            ],
            otherPills: ['pill_ksf', 'pill_obc']
        }
    );
});





