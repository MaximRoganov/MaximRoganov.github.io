$(document).ready(function() {

    $('.slider-wrap').each(function() {

        $(this).magnificPopup({
            delegate: '.our-shops__slider__item__link',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    });

    $('.main__pluses__items').slick({
             responsive: [{
                 breakpoint: 9999,
                 settings: 'unslick'
             },{
             breakpoint: 992,
             settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                dots: false

             }
         },{
             breakpoint: 840,
             settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true
 
             }
         },{
             breakpoint: 768,
             settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
 
             }
         },{
             breakpoint: 576,
             settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
 
             }
         }]
    });

    $('.logos-slider').slick({
          responsive: [{
                 breakpoint: 9999,
                 settings: 'unslick'
             },{
             breakpoint: 992,
             settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                dots: false

             }
         },{
             breakpoint: 768,
             settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
 
             }
         },{
             breakpoint: 576,
             settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
 
             }
         }]
    });

    $('.answer__articles').slick({
          responsive: [{
                 breakpoint: 9999,
                 settings: 'unslick'
             },{
             breakpoint: 600,
             settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true

             }
         }]
    });

    $('#main-slider').slick({
        dots: true
    });
    $('.our-shops__slider').slick({
        slidesToShow: 2,
        infinite: false
    });
    $('#hamb__trigger').on('click', function() {
        $('.mobile-nav').addClass('active');
    });
    $('#hamb__trigger__close').on('click', function() {
        $('.mobile-nav').removeClass('active');
    });
    var myMap, myMap2;

    if ($('#yamap1').length) {

        ymaps.ready(function() {

            myMap = new ymaps.Map('yamap1', {
                center: [55.739666, 37.663458],
                zoom: 16,
                controls: ['zoomControl']

            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.behaviors.disable('scrollZoom');
            myMap.geoObjects
                .add(new ymaps.Placemark([55.739666, 37.663458], {
                    balloonContent: '',
                    hintContent: ''
                }, {
                    preset: 'islands#dotIcon',
                    iconColor: '#0b72d0'
                }));




        });

    }

    //yandex map - end

    if ($('#yamap2').length) {

        ymaps.ready(function() {

            myMap2 = new ymaps.Map('yamap2', {
                center: [55.784962, 37.634515],
                zoom: 15,
                controls: ['zoomControl']

            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap2.behaviors.disable('scrollZoom');
            myMap2.geoObjects
                .add(new ymaps.Placemark([55.784962, 37.634515], {
                    balloonContent: '',
                    hintContent: ''
                }, {
                    preset: 'islands#dotIcon',
                    iconColor: '#0b72d0'
                }));

        });

    }

    //yandex map - end


    $('.our-shops__buttons__item').on('click', function(e) {
        e.preventDefault();

        var shopId = $(this).data('shopid');
        var mapId = $(this).data('mapid');
        var sliderId = $(this).data('sliderid');

        $('.our-shops__buttons__item').removeClass('active');
        $(this).addClass('active');


        $('.our-shops__contacts').removeClass('active');
        $('#' + shopId).addClass('active');



        $('.yamap').removeClass('active');
        $('#' + mapId).addClass('active');

        $('.slider-wrap').addClass('elementInvisible');
        $('#' + sliderId).removeClass('elementInvisible');

        $(".our-shops__slider").slick('reinit');





    });

});

var startFlag = 0;
if($('.inner__header').length){
    startFlag = 1;
}
$(window).on('scroll',function(){

    if(window.pageYOffset > 0 && !$('header').hasClass('inner__header')){
        $('header').addClass('inner__header');
    }else if(window.pageYOffset == 0 && $('header').hasClass('inner__header')){
        if(startFlag == 0){
            $('header').removeClass('inner__header');
        }
        
    }

});