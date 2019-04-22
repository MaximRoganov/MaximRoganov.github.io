$(document).ready(function() {

    $('#hamb').on('click', function() {

        $('#menu').addClass('active');
        $('body').addClass('off');
    });

    $('#nav-close').on('click', function(e) {

        $('#menu').removeClass('active');
        $('body').removeClass('off');
        e.preventDefault();
    });





    $(document).on('click', function(e) {
        if ($('#menu').hasClass('active')) {

            if ($(e.target).closest('.left-menu').length || $(e.target).closest('.hamburger_wrap').length) {
                return;
            }
            $('#menu').removeClass('active');
            $('body').removeClass('off');
        }


    });







    $('input[name="phone"]').mask('0 (000) 000 00 00');
    $("input[type='radio']").styler();

    $('#programs-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            }

        ]
    });







    $('#sertifications-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    arrows: false
                }
            }

        ]
    });
    $('.sertifications-slider-prev').on('click', function(e) {
        $('#sertifications-slider').slick('slickPrev');
        e.preventDefault();
    });
    $('.sertifications-slider-next').on('click', function(e) {
        $('#sertifications-slider').slick('slickNext');
        e.preventDefault();
    });



    $('#feedbacks-slider').flipster({
        scrollwheel: false,
        nav: 'after',
        touch: 'true'
    });
    if ($('.feedbacks-slider-item').outerWidth() >= $('.feedbacks-slider').outerWidth()) {
        $('.feedbacks-slider-item').outerWidth($('.feedbacks-slider').outerWidth());
    }



    $('#articles__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }

        ]
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true 
    });

    $('.sertifications-slider__img').magnificPopup({
        type: 'image'
    });

    if ($('#product-slider-top').length) {
        var $product1 = $('#product-slider-top').fotorama();
        var fotorama = $product1.data('fotorama');
        console.log(fotorama);
        fotorama.setOptions({
            nav: "thumbs",
            thumbheight: "105px",
            thumbwidth: "105px",
            width: '100%',
            maxwidth: '600px',
            allowfullscreen: true,
            arrows: false,
            click: false
        });
    }



    var razn = ($(window).width() - $(".container").innerWidth()) / 2;
    $('.ucab-part-left__filler').width(razn);



    var topLineHeight = $('header').outerHeight() - $('.header-menu-wrap').outerHeight();

    function topLineFix() {
        if ($(window).scrollTop() >= topLineHeight) {
            $('.header-menu-wrap').addClass('active');
        } else if ($(window).scrollTop() < topLineHeight) {
            $('.header-menu-wrap').removeClass('active');
        }
    }

    topLineFix();



    $(window).on('scroll', function() {
        topLineFix();
    });




});