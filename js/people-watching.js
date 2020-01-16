function peopleWatching(props){

    var state = {
        clicks:[],
        itineraries: []
    }

    var createPeopleWatchingComponent = function(){
        var component = document.createElement('div');
        component.style.background = '#ff6a6f';
        component.style.width = '100%';
        component.style.height = '18px';
        component.style.padding = '7px 0px';
        component.style.margin = '-162px 0px 0px 0px';
        component.style.zIndex = 999;
        component.style.display = 'flex';
        component.style.justifyContent = 'center';
        component.style.alignItems = 'center';
        component.setAttribute('id', 'ge_people-watching');

        var eyeSpan = document.createElement('img');
        eyeSpan.style.width = '20px';
        eyeSpan.style.height = '20px';
        eyeSpan.style.margin = '0px 5px 0px 5px';
        eyeSpan.setAttribute('src', 'https://sb.monetate.net/img/1/388/1982062.png');
        eyeSpan.style.cssFloat = 'left';

        var numberSpan = document.createElement('span');
        numberSpan.style.width = 'auto';
        numberSpan.style.height = 'auto';
        numberSpan.style.textAlign = 'center';
        numberSpan.style.fontFamily = 'ProximaNova-Bold, Helvetica';
        numberSpan.style.fontSize = '18px';
        numberSpan.style.margin = '0px 3px 0px 3px';
        numberSpan.style.padding = '0px';
        numberSpan.style.color = 'white';
        numberSpan.style.cssFloat = 'left';
        numberSpan.innerText = '100';

        var peopleSpan = document.createElement('span');
        peopleSpan.style.width = 'auto';
        peopleSpan.style.height = 'auto';
        peopleSpan.style.textAlign = 'center';
        peopleSpan.style.fontFamily = 'ProximaNova-Bold, Helvetica';
        peopleSpan.style.fontSize = '18px';
        peopleSpan.style.margin = '0px 3px 0px 3px';
        peopleSpan.style.color = 'white';
        peopleSpan.innerText = props.people;
        peopleSpan.style.cssFloat = 'left';
        peopleSpan.style.textTransform = 'capitalize';

        var  watchingSpan = document.createElement('span');
        watchingSpan.style.width = 'auto';
        watchingSpan.style.height = 'auto';
        watchingSpan.style.textAlign = 'center';
        watchingSpan.style.fontFamily = 'ProximaNova-Regular, Helvetica';
        watchingSpan.style.fontSize = '18px';
        watchingSpan.style.margin = '0px 3px 0px 3px';
        watchingSpan.style.color = 'white';
        watchingSpan.innerText = props.watching;
        watchingSpan.style.cssFloat = 'left';
        watchingSpan.style.textTransform = 'capitalize';

        component.appendChild(eyeSpan);
        component.appendChild(numberSpan);
        component.appendChild(peopleSpan);
        component.appendChild(watchingSpan);

        return {
            component: component,
            eyeSpan: eyeSpan,
            numberSpan: numberSpan,
            peopleSpan: peopleSpan,
            watchingSpan: watchingSpan,
        }
    }

    var adjustSidePanelElements = function(){
        document.querySelectorAll('.itinerary-panel-section').forEach(function(section){
            section.style.marginTop = '20px';
        });

        document.querySelectorAll('.itinerary-panel-details-section').forEach(function(detail){
            detail.style.marginTop = '20px';
        });

        document.querySelectorAll('.mat-button-wrapper')[1].style.marginTop = '20px';
    }

    var show = function(element){
        if(element.style.marginTop === '-130px'){
            element.style.marginTop = '-162px'
        }
        if(element.style.marginTop === '-162px'){
            setTimeout(function(){
                var timer = setInterval(function(){
                    if(element.style.marginTop === '-130px'){
                        clearInterval(timer);
                    }else{
                        element.style.marginTop = parseInt(element.style.marginTop) + 16 + 'px';
                    }
                }, 50);
            }, 300);
        }
    }

    var hide = function(element){
        element.style.margin = '-130px 0px 0px 0px';
    }

    var getItineraries = function(){
        if(state.itineraries.length === 0){

            document.querySelectorAll('li.collapsable').forEach(function(itinerary){
                state.itineraries.push(itinerary.attributes.id.value);
            });

        }else if(state.itineraries.length !== 0){
            
            var itineraries = [];
            document.querySelectorAll('li.collapsable').forEach(function(itinerary){
                itineraries.push(itinerary.attributes.id.value);
            });
            
            console.log(itineraries.join());
            console.log(state,itineraries.join());
            
            itineraries.join() !== state.itineraries.join() ? state.itineraries = itineraries : null ;

        }
        return document.querySelectorAll('li.collapsable');
    }

    var addClickEventsToItinerary = function(cbUpdateClicks, cbUpdateNumberOfPeople){
        state.itineraries.forEach(function(itinerary){
            document.getElementById(itinerary).addEventListener('click', function(){
                cbUpdateClicks(itinerary);
                cbUpdateNumberOfPeople(itinerary);
            })
        });
    }

    var updateItinerearyClicks = function(id){
        var click = state.clicks.find(function(click){
            return click.id === id;
        });

        if(click){
            click.count ++;
           if((Math.floor(Math.random() * (5 - 1 + 1) + 1)) === 5){
             click.peopleWatching += Math.floor(Math.random() * (10 - 3 + 1) + 3);
           }else if((Math.floor(Math.random() * (5 - 1 + 1) + 1)) === 1){
             click.peopleWatching -= Math.floor(Math.random() * (7 - 3 + 1) + 3);
           }
        }else{
            state.clicks.push({
                count: 1,
                id: id,
                peopleWatching: Math.floor(Math.random() * (100 - 60 + 1) + 60),
            });
        }
    }

    var handlePaginationsClicks = function(){
        document.onclick = function(e){
            if( e.target.dataset.selector === 'search-apply-button' ||
                e.target.innerText === 'apply' ||
                e.target.innerText === 'add' ||
                e.target.innerText === 'clear' ||
                e.target.dataset.selector === 'search-2to5-nights' ||
                e.target.dataset.selector === 'search-6to8-nights' ||
                e.target.dataset.selector === 'search-9to11-nights' ||
                e.target.dataset.selector === 'search-12plus-nights' ||
                e.target.classList.value.indexOf('mat-button-toggle-label-content') !== -1 ||
                e.target.classList.value.indexOf('mat-paginator-decrement') !== -1 ||
                e.target.classList.value.indexOf('mat-paginator-increment') !== -1 ||
                e.target.classList.value.indexOf('mat-paginator-navigation-next') !== -1 ||
                e.target.classList.value.indexOf('mat-paginator-navigation-previous') !== -1
            ){  
                console.log('NAV LINK FOR PAGINATION CLICKED!!!!!!!!');
                return true;
            }
        }
    }

    // var updateItineraries = function(){

    //     var itineraries = document.querySelectorAll('li.collapsable');

    //     var itineraryIDs = [];
    //     itineraries.forEach(function(itinerary){
    //         itineraryIDs.push(itinerary.attributes.id.value);
    //     });

    //     console.log(state.itineraries);

    //     if(state.itineraries.length !== 0 && itineraryIDs.join() === state.itineraries.join()){
    //         return false;
    //     }else{
    //         return true;
    //     }

    // }

    var getSidePanel = function(){
        return document.querySelector('.itinerary-panel-sidenav');
    }

    var updatePeopleWatchingNumber = function(id){
        var click = state.clicks.find(function(click){
            return click.id === id;
        });

        return click.peopleWatching;
    }

    var checkURL = function(cbShow, cbHide, element){

        var lis = document.querySelectorAll('li.collapsable');
        var ids = [];
    
        lis.forEach(function(li){
            ids.push(li.id);
        });

        document.addEventListener('click', function(){
            for(var i = 0; i < ids.length; i++){
                if(window.location.href.indexOf(ids[i]) !== -1){
                    cbShow(element);
                    break;
                }
                if(window.location.href.indexOf(ids[i]) === -1){
                    cbHide(element);
                }
            }
        });
    
    }

    function main(){

        // check page is cruises
            // get itineraries off page
            // add clicks to itineraries
            // listen to clicks on pagination and filter buttons
                // get itineraries off page
                // check if itineraries are different from stored itineraries
                // update stored itineraries
                // add clicks to new itineraries
            // add component to sidepanel
            // update people watching number


        if(window.location.href.indexOf('cruises') !== -1){

            var itineraries = getItineraries();
            var peopleWatchingComponent = createPeopleWatchingComponent();
            var sidePanel = getSidePanel();

            var pageClicks = handlePaginationsClicks();

            console.log('kjadvklja,kjnadsdiuhqglkjndfgad', pageClicks);

            if(pageClicks === true){
                getItineraries();
                addClickEventsToItinerary();
            }

            sidePanel.appendChild(peopleWatchingComponent.component);
            checkURL(show, hide, peopleWatchingComponent.component);

        }
    }

    main();

}

peopleWatching({
    people: 'people',
    watching: 'watching'
});

window.addEventListener('DOMContentLoaded', function(){
    peopleWatching({
        people: 'people',
        watching: 'watching'
    });
})

