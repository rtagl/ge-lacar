window.addEventListener('load', function(){

    //INVOKE INIT();
    init('.parent', function(){
        heroBanner(
            '.parent',
            'ninos gratis',
            'Ahorra hasta 150$ USD', 
            'center',
            [
                'http://sb.monetate.net/img/1/388/2344664.jpg',
                'http://sb.monetate.net/img/1/388/2344663.jpg'
            ]
        );
        countDown(
            '.parent',
            'Sep 17 2019 10:00:00', // month-day-year-hours-minutes-seconds
            'Sep 17 2019 11:00:00', // month-day-year-hours-minutes-seconds
            {
                offer:     'ADEMAS: ',
                text:      '50% Descuento',
                subText:   'en el segundo pasejero',
                timerText: 'oferta termina en:'
            },
            ['lac', 'deu']
        );
    });

    oldBrowserPopUp();
    
});

