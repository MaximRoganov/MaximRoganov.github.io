// Responsive js foundation
var zoneFlag = 0;

function changeWhenResize() {

    var documentWidth = $(window).width();

/*    if (documentWidth > 1200 && (zoneFlag === 0 || zoneFlag != 'xl')) {

        zoneFlag = 'xl';
        //do something

    }
    if (documentWidth <= 1200 && documentWidth > 992 && (zoneFlag === 0 || zoneFlag != 'lg')) {

        zoneFlag = 'lg';
        //do something

    }*/

    if (/*documentWidth <= 992 && */documentWidth > 768 && (zoneFlag === 0 || zoneFlag != 'md')) {

        zoneFlag = 'md';
        //do something

        $('.service-wrap_slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true
        });

        $('#inner-slider').on('init', function() {
            $('#inner-slider').find('.slick-active').prev().addClass('prev');
            $('#inner-slider').find('.slick-active').next().addClass('next');
        });
        $('#inner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('#inner-slider').find('.slick-slide').removeClass('prev next');
        });
        $('#inner-slider').on('afterChange', function() {
            $('#inner-slider').find('.slick-active').prev().addClass('prev');
            $('#inner-slider').find('.slick-active').next().addClass('next');
        });
        $('#inner-slider_prev').on('click', function() {
            secondSlider.slick('prev');
        });
        $('#inner-slider_next').on('click', function() {
            secondSlider.slick('next');
        });

        var secondSlider = $('#inner-slider').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            swipe: false,
            arrows: false
        });


    }

    if (documentWidth <= 768 && (zoneFlag === 0 || zoneFlag != 'sm')) {

        zoneFlag = 'sm';
        //do something
        $('.service-wrap_slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            adaptiveHeight: true
        });

        $('.news-items').slick({
            variableWidth: true,
            centerMode: true,
            nextArrow: '<div class ="top-slider_next"></div>',
            prevArrow: '<div class="top-slider_prev"></div>'
        });


        $('#inner-slider').on('init', function() {
            $('#inner-slider').find('.slick-active').prev().addClass('prev');
            $('#inner-slider').find('.slick-active').next().addClass('next');
        });
        $('#inner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('#inner-slider').find('.slick-slide').removeClass('prev next');
        });
        $('#inner-slider').on('afterChange', function() {
            $('#inner-slider').find('.slick-active').prev().addClass('prev');
            $('#inner-slider').find('.slick-active').next().addClass('next');
        });
        $('#inner-slider_prev').on('click', function() {
            secondSlider.slick('prev');
        });
        $('#inner-slider_next').on('click', function() {
            secondSlider.slick('next');
        });

        var secondSlider = $('#inner-slider').slick({
            slidesToShow: 1,
            arrows: false
        });
    }


}

function mobilemenures() {
    var someheight = $('header').height();
    $('#menu').css('top', someheight);
    $('#menu').css('height', $(window).height() - someheight);
    $('#overlay').css('top', someheight);
}
$(window).on('resize', function() {
    mobilemenures();
});
$(document).ready(function() {


    $('#menu').addClass('load');

    changeWhenResize();

    var topSlider = $('#top-slider').slick({
        arrows: false
    });

    $('#top-slider_prev').on('click', function() {
        topSlider.slick('prev');
    });
    $('#top-slider_next').on('click', function() {
        topSlider.slick('next');
    });




    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });

    slideout.on('beforeopen', function(translated) {
        mobilemenures();
        $('#menu').addClass('open');
    });
    slideout.on('beforeclose', function(translated) {
        $('#menu').removeClass('open');
    });

    $('#hamb').on('click', function() {
        slideout.toggle();
        $('#hamb').toggleClass('open');
    });












});
