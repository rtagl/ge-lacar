window.addEventListener('load', ()=>{

    iobd({
        details:{
            offerText: {
                AA: 'Save 4500 right now',
                A:  'Save 4000 right now',
                B:  'Save 3500 right now'
            },
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
    });

})

function iobd(props){

    function globals(){
        return {
            pageURL: window.location.href,
            currentPage: digestURL(window.location.href).page,
            targets: document.querySelectorAll('.promotions-container--wrap')
        }
    }

    function iobdComponent(details, target){

        var iobd = document.createElement('li');
        //iobd.style.background = 'red';
        iobd.style.width = '100%';
        iobd.style.height = 'auto';
        iobd.style.fontFamily = 'proxima, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif'
        iobd.style.fontSize = '14px';
        iobd.style.fontWeight = '400';
        iobd.style.textAlign = 'center';
        iobd.style.padding = '0px';
        iobd.style.color = window.innerWidth >= 640 && window.innerWidth <= 1199 ? iobd.style.color = 'rgb(74, 74 ,74)' : iobd.style.color = details.textColor ;
        iobd.style.listStyle = 'none';
        iobd.classList.add('ge_iobd-offer');
        iobd.style.display = 'flex';
        iobd.style.justifyContent = 'center';
        iobd.style.alignItems = 'center';

        var i = document.createElement('i');
        i.style.width = 'auto';
        i.style.height = 'auto';
        i.style.marginRight = '5px';
        i.innerText = 'done';
        i.classList.add('material-icons');
        i.classList.add('done-icon');
        i.classList.add('small-hdr-6');

        var p = document.createElement('p');
        p.style.width = 'auto';
        p.style.height = 'auto';
        p.style.textTransform = 'uppercase';
        p.innerText = details.text;

        iobd.appendChild(i);
        iobd.appendChild(p);

        target.appendChild(iobd);

        window.onresixe = function(){
            window.innerWidth >= 640 && window.innerWidth <= 1199 ? iobd.style.color = 'rgb(74, 74 ,74)' : iobd.style.color = details.textColor ;
        };

    }

    function digestURL(url){
        var page = url.split('?')[0];
        var query = url.split('?')[1];
        var codes = query.split('&');
        var dataCodes = codes.filter(function(code){
            return (code.indexOf('/') === -1 ? code : null);
        });

        var dataCodesSplit = [];
        dataCodes.forEach(function(dataCode){
            dataCodesSplit.push(dataCode.split('=')[0]);
            dataCodesSplit.push(dataCode.split('=')[1]);
        });

        var dataObject = {};
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

    function validatCriteria(){
        var criteria = [];
        var data = digestURL(globals().pageURL);
        criteria.push(checkCriteriaNumberOfNights(getNumberOfNights(data.packageCode), props.numberOfNights));
        criteria.push(checkCriteriaDateRange(data.sailDate, props.dates));
        criteria.push(checkCriteriaShipCode(data.shipCode, props.shipCodes));
        criteria.push(checkCriteriaDestinationCode(data.destinationCode, props.destinations));

        if(criteria.indexOf('false') !== -1){
            return false;
        }else{
            return true;
        }
    }  
    
    function renderComponents(criteria){
        
        var interval = setInterval(function(){
            if(criteria === true && globals().currentPage.indexOf('superCategory') !== -1){
                clearInterval(interval);
                loopAndRender();
            }
        }, 100)

        function loopAndRender(){

            document.querySelectorAll('.ge_iobd-offer').forEach(function(io){
                io.remove();
            })

            globals().targets.forEach(function(t, i){
                if(i === 0 || i === 1){
                    var propDetails = props.details;
                    propDetails.text = props.details.offerText.B;
                    iobdComponent(propDetails, t.children[0]);
                }else if(i === 2){
                    var propDetails = props.details;
                    propDetails.text = props.details.offerText.A;
                    iobdComponent(propDetails, t.children[0]);
                }else{
                    var propDetails = props.details;
                    propDetails.text = props.details.offerText.AA;
                    iobdComponent(propDetails, t.children[0]);
                }
            });

        }
    }

    function listen(callback){
        window.onpopstate = function(){
            callback();
        }
        document.onclick = function(e){
            e.target.id === 'occupancy-continue' ? callback() : null ;
        }
    }

    listen(function(){
        renderComponents(validatCriteria());
    });

    renderComponents(validatCriteria());

}

