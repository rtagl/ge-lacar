function peopleWatching(props){

    var state = {
        clicks:[]
    }

    var getItineraries = function(){
        return document.querySelectorAll('li.collapsable');
    }

    var createPeopleWatchingComponent = function(){
        var component = document.createElement('div');
        component.style.background = '#ff6a6f';
        component.style.width = '100%';
        component.style.height = '18px';
        component.style.padding = '7px 0px';
        component.style.margin = '-142px 0px 0px 0px';
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

    var show = function(element){
        if(element.style.marginTop === '-110px'){
            element.style.marginTop = '-142px'
        }
        if(element.style.marginTop === '-142px'){
            setTimeout(function(){
                var timer = setInterval(function(){
                    if(element.style.marginTop === '-110px'){
                        clearInterval(timer);
                    }else{
                        element.style.marginTop = parseInt(element.style.marginTop) + 16 + 'px';
                    }
                }, 50);
            }, 300);
        }
    }

    var hide = function(element){
        element.style.margin = '-110px 0px 0px 0px';
    }

    var handlePaginationsClicks = function(){
        //code
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

    var getSidePanel = function(){
        return document.querySelector('.itinerary-panel-sidenav');
    }

    var updatePeopleWatchingNumber = function(id){
        var click = state.clicks.find(function(click){
            return click.id === id;
        });

        return click.peopleWatching;
    }

    var check = function(cbShow, cbHide, element){

        var lis = document.querySelectorAll('li.collapsable');
        var ids = [];
    
        lis.forEach(function(li){
            ids.push(li.id);
        });
    
        document.onclick = function(e){
            for(var i = 0; i < ids.length; i++){
                if(window.location.href.indexOf(ids[i]) !== -1){
                    cbShow(element);
                    break;
                }
                if(window.location.href.indexOf(ids[i]) === -1){
                    cbHide(element);
                }
            }
        }
    
    }

    function main(){
        if(window.location.href.indexOf('cruises') !== -1){

            var itineraries = getItineraries();
            var peopleWatchingComponent = createPeopleWatchingComponent();
            var sidePanel = getSidePanel();

            sidePanel.appendChild(peopleWatchingComponent.component);

            itineraries.forEach(function(itinerary){
                itinerary.addEventListener('click', function(){
                    updateItinerearyClicks(itinerary.attributes.id.value);
                    peopleWatchingComponent.numberSpan.innerText = updatePeopleWatchingNumber(itinerary.attributes.id.value);
                });
            });

            check(show, hide, peopleWatchingComponent.component);
        }
    }

    main();

}

peopleWatching({
    people: 'people',
    watching: 'watching'
});
