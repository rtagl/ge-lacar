function oldBrowserPopUp(){
    function browserName(userBrowser){

        var user = userBrowser;
    
        //CHECK FOR MOZ-FIREFOX
        if(user.indexOf('Firefox') !== -1){
            return firefoxStrategy(user)
        }
        //CHECK FOR GOO-CHROME
        if(user.indexOf('Chrome') !== -1 && user.indexOf('Edge') === -1){
            return chromeStrategy(user)
        }
        //CHECK FOR MS-IE
        if(user.indexOf('Trident') !== -1){
            return IEStrategy(user)
        }
        //CHECK FOR MS-EDGE
        if(user.indexOf('Edge') !== -1){
            return edgeStrategy(user)
        }
        //CHECK FOR APL-SAFARI
        if(user.indexOf('Macintosh') !== -1 && user.indexOf('Safari') !== -1 && user.indexOf('Version')){
            return safariStrategy(user)
        }
    
    }

    //FIREFOX GET BROWSER TYPE AND VERSION 
    function firefoxStrategy(user){
        var strArray = user.split('/');
        return { 
            name:'Firefox', 
            ver: strArray[strArray.length - 1]
        };
    }

    //CHROME GET BROWSER TYPE AND VERSION
    function chromeStrategy(user){
        var strArray = user.split(' ');
        var version;
        var vr;

        if(user.indexOf('Macintosh') !== -1){
            version =  strArray[11].substring(strArray[11].lastIndexOf('/')+1, strArray[11].lastIndexOf('.'));
            vr = version.split('.');
         }else if(user.indexOf('Windows')){
            version = strArray[9].substring(strArray[9].lastIndexOf('/')+1, strArray[9].lastIndexOf('.'));
            vr = version.split('.');
         }

        return {
            name: 'Chrome',
            ver: vr[0]
        };
    }

    //MS-IE GET BROWSER TYPE AND VERSION
    function IEStrategy(user){
        var strArray = user.split(' ');
        return { 
            name:'Internet Explorer', 
            ver: strArray[3]
        };
    }

    //MS-EDGE GET BROWSER TYPE AND VERSION
    function edgeStrategy(user){
        var strArray = user.split('/');
        var version = strArray[strArray.length - 1].split('.')[0];
        return {
            name:'Edge', 
            ver: version
        }
    }

    //SAFARI GET BROWSER TYPE AND VERSION
    function safariStrategy(user){
        var strArray = user.split(' ');
        var version = strArray[11];
        return {
            name: 'Safari',
            ver: version
        }
    }

    //CHECK IF USER BROWSER IS WELL SUPPORTED BY OUR WEBSITE
    function checkSupport(browser){

        browser = {
            name: browser.name,
            ver: parseInt(browser.ver)
        }

        if(browser.name === 'Firefox' && browser.ver < 21){
            return true;
        }

        if(browser.name === 'Chrome' && browser.ver < 23){
            return true;
        }

        if(browser.name == 'Internet Explorer'  && browser.ver < 11){
            return true;
        }

        if(browser.name === 'Edge' && browser.ver < 10){
            return true;
        }

        if(browser.name === 'Safari' && browser.ver < 6){
            return true;
        }

        if(browser.name === null || browser.name === undefined){

        }

    }

    //CREATE VISIUAL ELEMENTS OF THE POP UP
    function popUp(support){

        //CREATE POP UP CONTAINER
        var popUpContainer = document.createElement('div');
        popUpContainer.style.background = 'red';
        popUpContainer.style.width = '100%';
        popUpContainer.style.height = 'auto';
        popUpContainer.style.padding = '12px 0px 12px 0px';
        popUpContainer.style.fontFamily = 'helvetica';
        popUpContainer.style.fontSize = '16px';
        popUpContainer.style.fontWeight = 'bold';
        popUpContainer.style.color = '#fff';
        popUpContainer.style.display = 'flex';
        popUpContainer.style.justifyContent = 'center';
        popUpContainer.style.alignItems = 'center';
        popUpContainer.style.opacity = 1;
        popUpContainer.innerText = 'Your browser is out of date! This may affect your experience';
        popUpContainer.style.textAlign = 'center';
        popUpContainer.style.position = 'absolute';

        //CREATE POP UP CLOSER BUTTON
        var popUpCloseBtn = document.createElement('div');
        popUpCloseBtn.style.width = '16px';
        popUpCloseBtn.style.height = 'auto';
        popUpCloseBtn.style.margin = '2px 0px 0px 5px';
        popUpCloseBtn.style.padding = '0px 2px 0px 2px';
        popUpCloseBtn.style.border = '1px solid #fff';
        popUpCloseBtn.style.borderRadius = '1px'
        popUpCloseBtn.innerText = 'X';
        popUpCloseBtn.style.textAlign = 'center';
        popUpCloseBtn.style.fontWeight = '100';
        popUpCloseBtn.style.cursor = 'pointer';


        //REGISTER CLICK EVENT FOR POP UP CLOSE BUTTON
        popUpCloseBtn.addEventListener('click', function(){
            setInterval(function(){
              if(popUpContainer.style.opacity > 0){
                popUpContainer.style.opacity -= 0.05;
              }
            }, 50);
            setTimeout(function(){
                popUpContainer.remove();
            }, 500);
            //popUpContainer.remove();
        });

        //APPEND CLOSE BUTTON TO POP UP CONTAINER
        popUpContainer.appendChild(popUpCloseBtn);

        //APPEND POP TO DOCUMENT
        if(support){
            document.body.insertBefore(popUpContainer, document.body.children[0]);
        }

    }

    //INVOKE POP UP FUNCTION AND PASS BROSWERNAME WHICH RETURNS BROWSER NAME AND VERSION
    var browser = browserName(navigator.userAgent);
    var support = checkSupport(browser);
    popUp(support);

}

