//take arguments
// shipCode<string>, sailings<array of strings>, numOfNights<array of strings>, departures<array of strings>, itinerary<array of strings>
// .itinerary-visiting-ports 

/*
    MA04S213-2019-10-07
    
    MA         = shipCode
    04         = numberOfNight
    s          = destination
    213        = differentiators
    2019-10-07 = sailDate
*/

// var data = {
//     schedule:[['Sep 10 2019'+dayStart, 'Sep 30 2019 23:59:59'+timeZone]],
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

function pill(shipNames, sailings, nights, departures, itineraries, color, text){

    let itinerary = document.querySelectorAll('.collapsable');
    let ports = document.querySelectorAll('.itinerary-visiting-ports');
    let ships = document.querySelectorAll('.itinerary-description');
    let itineraryArray = [];
    let packageCodes = document.querySelectorAll('.itinerary-card-component');

    let prevBtn = document.querySelector('.mat-paginator-navigation-previous');
    let nextBtn = document.querySelector('.mat-paginator-navigation-next');


    //GET ALL ITINERARIES PUSH THEM TO THE ITINERARY ARRAY
    for(let i = 0; i < itinerary.length; i++){
        if(itinerary[i].classList.value.indexOf('mat-paginator') === -1){
            itineraryArray.push(itinerary[i]);
        }
    }

    console.log(packageCodes);

    // for(let i = 0; i < ports.length; i++){
    //     console.log(ports[i].innerText);
    //     console.log(ships[i].innerText);
    // }

    // prevBtn.addEventListener('click', ()=>{
    //     console.log('prev');
    // });

    // nextBtn.addEventListener('click', ()=>{
    //     console.log('next');
    // });

}

window.addEventListener('load', ()=>{
    pill();

    document.addEventListener('click', (event)=>{

        console.log(window.location);
    });  

});


