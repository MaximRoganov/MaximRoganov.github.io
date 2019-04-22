var flag = 0;
$(document).ready(function() {
    $('.questions__item__title').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).next().slideUp('300');
            $(this).removeClass('active');
        } else {
            $(this).next().slideDown('300');
            $(this).addClass('active');
        }

    });

    if (flag === 0) {
        if ($(window).scrollTop() + $(window).height() >= $('.about-company-items').offset().top) {
            flag = 1;

            $('.about-company-item__title').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
        }
    }

    if ($(window).scrollTop() > 0) {
        if (!$('.header__first-line').hasClass('active')) {
            $('.header__first-line').addClass('active');
        }
    } else {
        if ($('.header__first-line').hasClass('active')) {
            $('.header__first-line').removeClass('active');
        }
    }



    new WOW().init();


    $('#mobile-menu-trigger').on('click', function(e) {
        e.preventDefault();

        $('.popup_block').addClass('active');
        $('body').addClass('overflow');


    });
    $('#close-menu').on('click', function(e) {
        e.preventDefault();

        setTimeout(function() {
            $('.popup_block').removeClass('active progress');
            $('body').removeClass('overflow');
        }, 250)

        $('.popup_block').addClass('progress');

    });
    $('.mobile_menu__link').on('click', function(e) {
        e.preventDefault();

        setTimeout(function() {
            $('.popup_block').removeClass('active progress');
            $('body').removeClass('overflow');
        }, 250)

        $('.popup_block').addClass('progress');

    });

});

$(window).on('scroll', function() {
    if (flag === 0) {
        if ($(window).scrollTop() + $(window).height() >= $('.about-company-items').offset().top) {
            flag = 1;

            $('.about-company-item__title').spincrement({
                thousandSeparator: "",
                duration: 2000
            });
        }
    }

    if ($(window).scrollTop() > 0) {
        if (!$('.header__first-line').hasClass('active')) {
            $('.header__first-line').addClass('active');
        }
    } else {
        if ($('.header__first-line').hasClass('active')) {
            $('.header__first-line').removeClass('active');
        }
    }
});