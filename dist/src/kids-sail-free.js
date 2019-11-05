ksf(
    {
        details:{
            backgroundColor: '#cc1d69',
            text: 'niños gratis (edades 0-12)',
            textColor: '#ffffff'
        },
        numberOfNights: 5,
        shipCodes:['MJ', 'AD'],
        dates:[
            {
                start: 'Nov 23 2020', 
                end: 'Dec 20 2020'
            },
            {
                start: 'Apr 01 2020',
                end: 'Aug 10 2020'
            }
        ],
        destinations: [
            destinationCodes.CARIB,
            destinationCodes.BAHAM
        ],
    }
);

function ksf(props){

    //var pageURL = 'https://www.royalcaribbean.com/lac/es/booking/occupancy?accessCabin=false&connectedRooms=false&destinationCode=CARIB&packageCode=MJ5CU004&sailDate=2019-12-09&selectedCurrencyCode=USD&shipCode=MJ'
    //var target = document.querySelector('.column.small-10.large-2.amount');
    var pageURL = window.location.href;
    var target = document.querySelectorAll('.column.small-10.large-2.amount')[1];
    var currentPage = digestURL(pageURL).page;

    //DELETE ORIGINAL ELEMENT
    document.querySelectorAll('.legend')[1].remove();

    function createKSFcomponent(target, details){
        var ksfContainer = document.createElement('div');
        ksfContainer.style.background = details.backgroundColor;
        ksfContainer.style.width = '145px';
        ksfContainer.style.height = 'auto';
        ksfContainer.innerText = details.text.toUpperCase();
        ksfContainer.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif'
        ksfContainer.style.fontSize = '18px';
        ksfContainer.style.fontWeight = '400';
        ksfContainer.style.textAlign = 'center';
        ksfContainer.style.margin = '0px auto 0px auto';
        ksfContainer.style.padding = '6px 0px';
        ksfContainer.style.color = details.textColor;
        //ksfContainer.style.letterSpacing = '3.2px';

        target.appendChild(ksfContainer);
    }

    function digestURL(url){
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

    function checkCriteriaNumberOfNights(numberOfNightsURL, numberOfNightsCriteria){
        if(numberOfNightsCriteria === undefined){
            return true;
        }else if(numberOfNightsCriteria === ''){
            return true;
        }else if(numberOfNightsCriteria === numberOfNightsURL){
            return true;
        }else{
            return false;
        }
    }

    function checkCriteriaDateRange(sailing, dateRange){

        var sailDate = sailing.split('-');
        var sailDateYear = sailDate[0];
        var sailDateMonth = '';
        var sailDateDay = sailDate[2];

        //SWITCH NUMBERED MONTHS TO TEXT MONTHS, BECAUSE IE!
        switch(sailDate[1]){
            case '01':
                sailDateMonth = 'Jan';
            break;
            case '02':
                sailDateMonth = 'Feb';
            break;
            case '03':
                sailDateMonth = 'Mar';
            break;
            case '04':
                sailDateMonth = 'Apr';
            break;
            case '05':
                sailDateMonth = 'May';
            break;
            case '06':
                sailDateMonth = 'Jun';
            break;
            case '07':
                sailDateMonth = 'Jul';
            break;
            case '08':
                sailDateMonth = 'Aug';
            break;
            case '09':
                sailDateMonth = 'Sep';
            break;
            case '10':
                sailDateMonth = 'Oct';
            break;
            case '11':
                sailDateMonth = 'Nov';
            break;
            case '12':
                sailDateMonth = 'Dec';
            break;
        }

        var sailDate = new Date(sailDateMonth+' '+sailDateDay+', '+sailDateYear);

        var dateRanges = [];
        if(dateRanges === undefined || dateRanges.length === 0){

            return true;

        }else{

            dateRange.forEach(function(dateRange){
                dateRanges.push(new Date(dateRange.start));
                dateRanges.push(new Date(dateRange.end));
            });

        }
        

        var checked = [];
        for(var i = 0; i < dateRanges.length; i+=2){

            if(sailDate >= dateRanges[i] && sailDate <= dateRanges[i+1]){
                checked.push(true);
            }else{
                checked.push(false);
            }

        }

        if(checked.indexOf(true) !== -1){
            return true;
        }else{
            return false;
        }
        
    }

    function checkCriteriaShipCode(shipCode, shipCodes){
        if(shipCodes === undefined){
            return true;
        }else if(shipCodes.indexOf(shipCode) !== -1){
            return true
        }else if(shipCodes.length === 0){
            return true;
        }else{
            return false;
        }
    }

    function checkCriteriaDestinationCode(currentDestination, destinationCodes){
        if(destinationCodes === undefined){
            return true;
        }else if(destinationCodes.indexOf(currentDestination) !== -1){
            return true;
        }else if(destinationCodes.length === 0){
            return true;
        }else{
            return false;
        }
    }

    function validateCriteria(){
        var criteriaValues = [];
        var data = digestURL(pageURL);
        criteriaValues.push(checkCriteriaNumberOfNights(getNumberOfNights(data.packageCode), props.numberOfNights));
        criteriaValues.push(checkCriteriaDateRange(data.sailDate, props.dates));
        criteriaValues.push(checkCriteriaShipCode(data.shipCode, props.shipCodes));
        criteriaValues.push(checkCriteriaDestinationCode(data.destinationCode, props.destinations));

        if(criteriaValues.indexOf(false) !== -1){
            return false;
        }else{
            return true;
        }

    }

    function validatePage(page){
        if(page.indexOf('occupancy') !==  -1){
            return true;
        }else{
            return false
        }
    }

    function renderComponent(criteria, page){
        if(criteria === true && page === true){
            createKSFcomponent(target, props.details)
        }else{
            console.log('ksf does not apply');
        }
    }

    renderComponent(validateCriteria(), validatePage(currentPage));

}