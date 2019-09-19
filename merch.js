(function(){
    var findThese = ['itinerary-search-results section.itinerary-search-results-list itinerary-card'];
    flicker(findThese);

    function doEXP(){
        console.log('testing merch');


        //LOCATION
        var url = document.location.href;

        //TIME
        //set to US EST or EDT
        var timeZone = _mx.royal.timeZone();
        var today = new Date();
        var monthArray = ['none','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var todayDate = today.getDate();
        var todayMonth = today.getMonth()+1;
        var todayYear = today.getFullYear();
        var todayNew = monthArray[(todayMonth)]+' '+todayDate+' '+todayYear+' 00:00:00'+timeZone;
        var monthFromNow = new Date(new Date().setDate(new Date(todayNew).getDate() + 30));

        var dayStart = ' 00:00:00'+timeZone;
        var dayEnd = ' 23:59:59'+timeZone;

        //IMAGE PATHS
        var pathD = 'https://www.royalcaribbean.com/content/dam/royal/';
        var pathM = 'https://sb.monetate.net/img/1/388/';
        var pathR = 'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/';
        var pathT = 'https://s7d1.scene7.com/is/image/TargetRCCI/';

        //COLORS
        // +++ standard palette from 2018 guide +++
        var black = '#000000';
        var white = '#ffffff';
        var pink_Dark = '#642F6C';
        var pink_Medium = '#8A1B61';
        var pink_Light = '#CE0F69';
        var pink_Pale = '#EF4A81';
        var orange_Dark = '#B7312C';
        var orange_Medium = '#C05131';
        var orange_Light = '#E35205';
        var orange_Pale = '#ED8B00';
        var yellow_Dark = '#C69214';
        var yellow_Medium = '#FFB500';
        var yellow_Light = '#F2C75C';
        var yellow_Pale = '#F5E1A4';
        var green_Dark = '#115740';
        var green_Medium = '#A8AD00';
        var green_Light = '#4B9560';
        var green_Pale = '#ADCAB8';
        var blue_Dark = '#131E29';
        var blue_Medium = '#5461C8';
        var blue_Light = '#71C5E8';
        var blue_Pale = '#ABCAE9';
        // +++ custom commonly used colors +++
        var blue_Navy = '#15264C';
        var blue_Hyperlink = '#0073BB';
        var blue_Mykonos = '#005EDC';
        var yellow_Gold = '#F9C700';
        var grey_Medium = '#666666';

        var primary = 'primary';
        var secondary = 'secondary';
        var tertiary = 'tertiary';

        var chinaPorts = ['Beijing','Hong Kong','Shanghai','Shenzhen'];

        var data = [
            
            {
              schedule:[['Sep 10 2019'+dayStart, 'Sep 30 2019 23:59:59'+timeZone]],
                pill:{
                    text: '50% off 2nd Guest', // *required: what the pill says
                    color: {
                      background: '#1192FF'
                    },
                    id: 'mxBogo50'// *required: unique. pills with the same id cannot be placed together
                },
                criteria:{
                    sailingRange:[['Oct 21 2019' + dayStart, 'Apr 30 2021' + dayEnd]],
                    departures: ['Singapore']
                }
            },

            {
              schedule:[['Sep 10 2019'+dayStart, 'Sep 30 2019 23:59:59'+timeZone]],
                pill:{
                    text: 'Kids sail free', // *required: what the pill says
                    color: {
                      background: '#1192FF'
                    },
                    id: 'mxKids'// *required: unique. pills with the same id cannot be placed together
                },
                criteria:{
                    sailingRange:[['Jan 02 2020' + dayStart, 'Jan 23 2020' + dayEnd],
                                 ['Jan 25 2020' + dayStart, 'Mar 17 2020' + dayEnd],
                                 ['Mar 19 2020' + dayStart, 'May 28 2020' + dayEnd],
                                 ['May 30 2020' + dayStart, 'Jun 19 2020' + dayEnd]],
                    departures: ['Singapore']
                }
            },
            {
              schedule:[['Sep 16 2019'+dayStart, 'Sep 22 2019 23:59:59'+timeZone]],
                         
                pill:{
                    text: 'SENIOR SPECIAL', // *required: what the pill says
                    color: {
                      background: '#1192FF'
                    },
                    id: 'mx_senior'// *required: unique. pills with the same id cannot be placed together
                },
                criteria:{
                    sailingRange:[['Nov 16 2019' + dayStart, 'Dec 27 2019' + dayEnd],
                                 ['Dec 29 2019' + dayStart, 'Jan 01 2020' + dayEnd],
                                 ['Jan 03 2020' + dayStart, 'Jan 23 2020' + dayEnd],
                                 ['Jan 25 2020' + dayStart, 'Feb 14 2020' + dayEnd],
                                 ['Feb 16 2020' + dayStart, 'Feb 23 2020' + dayEnd],
                                 ['Feb 25 2020' + dayStart, 'Apr 30 2020' + dayEnd],
                                 ['May 03 2020' + dayStart, 'Jun 23 2020' + dayEnd]],
                    departures: ['Singapore']
                }
                /*exclusions:{
                    // individuals:[
                    // {
                    sailDate:['2019-11-16', '2019-11-21', '2019-11-25', '2019-12-05']
                    // }
                    //]
                }*/
            },
            {
              schedule: [['Aug 28 2019' + dayStart, 'Sep 09 2019 23:59:59' + timeZone]],
                pill:{
                  text: '50% OFF: "WE PICK"', // *required: what the pill says
                    color: {
                      background: '#1192FF'
                    },
                    id: 'mx_50off'// *required: unique. pills with the same id cannot be placed together
                },
                criteria:{
                    sailingRange:[['Oct 25 2019' + dayStart, 'Dec 27 2019' + dayEnd],
                                 ['Dec 29 2020' + dayStart, 'Jan 01 2020' + dayEnd],
                                 ['Jan 03 2020' + dayStart, 'Jan 08 2020' + dayEnd],
                                 ['Jan 10 2020' + dayStart, 'Jan 23 2020' + dayEnd],
                                 ['Jan 25 2020' + dayStart, 'Feb 14 2020' + dayEnd],
                                 ['Feb 16 2020' + dayStart, 'Feb 23 2020' + dayEnd],
                                 ['Feb 25 2020' + dayStart, 'Apr 26 2020' + dayEnd],
                                 ['May 03 2020' + dayStart, 'Jun 19 2020' + dayEnd]],
                    departures: ['Singapore']
                }
            },
            {
              schedule: [['Sept 25 2019' + dayStart, 'Sep 30 2019 23:59:59' + timeZone]],
                pill:{
                    text: 'UP TO $300 OF ONBOARD CREDIT', // *required: what the pill says
                    color: {
                      background: '#1192FF'
                    },
                    id: 'mx_obc'// *required: unique. pills with the same id cannot be placed together
                },
                criteria:{
                    sailingRange:[['Oct 21 2019' + dayStart, 'Apr 30 2021' + dayEnd]],
                    departures: ['Singapore']
                },
                exclusions:{
                }
            }
        ];

        var newData = [];
        if (url.toLowerCase().indexOf('&showall=') > -1 || url.toLowerCase().indexOf('?showall=') > -1) {
            _mx.royal.searchMerch(data);
        } else {
            for (var i = 0; i < data.length; i++) {
                var thisData = data[i];
                if (thisData.schedule && thisData.schedule != '') {
                    if (thisData.schedule === true) {
                        newData.push(thisData);
                    } else if (_mx.time.checkDates(today,thisData.schedule)) {
                        newData.push(thisData);
                    }
                }
            }
            if (newData.length > 0) {
                _mx.royal.searchMerch(newData);
            }
        }
    }

    function flicker(ele){
        var timeStamp = Date.parse(new Date());
        var newID = 'flicker-'+timeStamp;
        if (typeof ele === 'object') {
            ele = ele.toString();
        }
        if (typeof ele === 'string') {
            var css = ele+' { display: none !important; }';
            ele = ele.split(',');
        }
        flickerON();
        (function checkLoaded(){
            var q = 0;
            var check = false;
            for (var i = ele.length - 1; i >= 0; i--) {
                if(document.querySelector(ele[i])){
                    check = true;
                    q = q +1;
                } else {
                    check = false;
                }
            }
            if (q === ele.length && check && document.readyState == 'complete' && typeof _mx !=='undefined') {
                flickerOFF();
                doEXP();

            } else {
                window.requestAnimationFrame(checkLoaded);
            }
        })();

        function flickerON(){
            if (!document.querySelector('#'+newID)) {
                var styler = document.createElement('style');
                styler.type = 'text/css';
                styler.id = newID;
                styler.appendChild(document.createTextNode(css));
                document.head.appendChild(styler);
            }
        }
        function flickerOFF(){
            var removeThis = document.querySelector('#'+newID);
            if (removeThis) {
                document.head.removeChild(removeThis);
            }
        }
    }

    if (typeof _mx === 'undefined' && !document.querySelector('#mxLib')) {
        var mxInject = document.createElement('script');
        mxInject.id = 'mxLib';
        mxInject.src = 'https://rcci.s3.amazonaws.com/multiplica_lib-latest.js';
        mxInject.type = 'text/javascript';
        document.head.appendChild(mxInject);
      console.log('breakpoint 3');
    }

    var findThese = ['itinerary-search-results section.itinerary-search-results-list itinerary-card'];
    flicker(findThese);
})();


$('.itinerary-card-component').on("click", function(){
    if($(this).find('li.mxKids, li.mx_secondguest,li.mx_summersavings, li.mx_savethirty, li.mxBogo50 ').length !== 0) {
        localStorage.setItem('bookingPill', 'discountPrices');
        console.log('has class mx_');
    }else {
        localStorage.removeItem('bookingPill');
        console.log('no class mx_');
    }
});


function doEXPtest(thirdStep) {
    //if (!window.matchMedia('(min-width: 992px)').matches) {
    //   return;
    //}
    if (window.location.href.indexOf("/booking/create/superCategory") > -1 || window.location.href.indexOf("/sgp/en/booking/create/superCategory") > -1){
        thirdStep = true;
    }
    var pillValue = localStorage.getItem('bookingPill');
    if (pillValue == 'discountPrices'){
        console.log('testing localS 1');
        if(!$('app-price-summary div').hasClass('price')) {
            $('<div class="price">Price Includes Discount</div>').appendTo('app-price-summary');
            console.log('testing localS 2');
        }
    } else {
        console.log('noLocalStorage');
        return false;
        localStorage.removeItem('bookingPill');
    }
}


jQuery(document).ready(function () {
    console.log('document ready');
    doEXPtest();

});

$(document).on('click', "button[data-selector='occupancy-continue']", function() {
    console.log('keydown');
    doEXPtest(true);
});