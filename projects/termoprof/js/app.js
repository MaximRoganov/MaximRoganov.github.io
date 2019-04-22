$(document).on('ready', function() {
    var firstLineheight = $('.header-first-line').height();
    $(window).on('scroll', function() {
        if (!$('header').hasClass('fixed')) {
            if ($(window).scrollTop() > firstLineheight) {

                $('header').addClass('fixed');
            }

        } else {
            if ($(window).scrollTop() <= firstLineheight) {

                $('header').removeClass('fixed');
            }
        }
    });

    $('.quest_block_item a').on('click', function(e) {
        $(this).toggleClass('active');
        $(this).next('.toggleSample').collapse('toggle');
        $(this).parent().toggleClass('active');
        e.preventDefault();
    });

    $('.big_slider').slick({
        infinite: true,
        dots: true,
        appendDots: $('.big_slider_dots_wrap'),
                responsive: [{
                breakpoint: 750,
                settings: {
                   arrows: false
                }
            }

        ]
    });
    $('.show_more').on('click', function(e) {
        var target = $(this).data('target');
        $(target).toggleClass('active');
        e.preventDefault();
    });
    $('.small-slider').slick({
        infinite: true,
        slidesToShow: 4,
        appendArrows: $('.small-slider-arrows-wrap'),
        responsive: [{
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('input[type="file"]').styler();


    $('#add_file').on('click', function(e) {
        var insertNumb = $(this).parents('form').find('input[type="file"]').length;
        if (insertNumb >= 5) {
            return false;
        }
        $(this).before('<input type="file" name="filey' + insertNumb + '">');
        $('input[type="file"]').styler();
        $('.jq-file__browse').off();
        $('.jq-file__browse').on('click', function(e) {
            if ($(this).parent().index('.jq-file') !== 0) {
                $(this).parent().remove();
            } else {
                $(this).parent().find('input').val('');
                $(this).parent().find('.jq-file__name').text('Файл не выбран');

            }

        });
        e.preventDefault();
    });

    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });
    $('.toggle-button').on('click', function() {
        slideout.toggle();
        $('.slideout-panel').toggleClass('active');
        $('header').toggleClass('black');
    });
    $('#close').on('click', function() {
        slideout.close();
        $('.slideout-panel').toggleClass('active');
        $('header').toggleClass('black');
    });

    var fixed = document.getElementById('panel2');

    slideout.on('beforeopen', function() {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(256px)';
    });

    slideout.on('beforeclose', function() {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(0px)';
    });

    slideout.on('open', function() {
        fixed.style.transition = '';
    });

    slideout.on('close', function() {
        fixed.style.transition = '';
    });

});
