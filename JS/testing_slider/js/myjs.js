$(document).ready(function () {
    $('.slider').slick({
        arrows: true,           // false удалить стрелки
        dots: true,             // false удалить точки перелистования
        adaptiveHeight: true,   // меняется высота трэка
        slidesToShow: 1,        //сколько элемнтов в трэка за рах
        slidesToScroll: 1,      //сколько картинок меняется при челчке
        speed: 1000,            // скорость перелистования
        easing: 'linear',
        infinite: true,          //заканчисается ли, если закончился в arrow дается class slick disabled
        initialSlide: 2,         //стартовый слайд
        autoplay: false,          // самопосебе лисатется
        autoplaySpeed: 1000,        // время самолистания
        pauseOnHover: false,      // пайза при наведений
        pauseOnFocus: false,       // пауза при фокусе
        pauseOnDotsHover: false,  //пауза при наведений на точки
        draggable: true,          //swipe in comp
        swipe: true,              //swipe in phone
        touchThreshold: 10,    //сколько части экрана нужно пролистать что листатась
        touchMove: false,       //не двигается при свайпе но свайпается
        waitForAnimate: true,  //ждать некоторые время после клика перелистования,
        centerMode: false,      // первый в центре
        variableWidth: false,     //на сколько возможно пытается вместить слайды в трэк с права не помещающиеся вырезает
        rows: 1,                     //сколько ряда
        slidesPerRow: 1,            //сколько column in one row
        vertical: false,               //стоит указать slider_item указать height и в родителе block
        verticalSwiping: false,         //двигается вверх вних при touch
        fade: false,                     //не двигает при touch постепенно исчезает и появляется

    })
})