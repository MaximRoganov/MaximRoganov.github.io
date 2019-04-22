$(window).on('load', function() {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('#p_prldr');
    $svg_anm.fadeOut();
    $preloader.delay(1500).fadeOut('slow');
});

$(document).ready(function() {
    if (document.getElementById("video")) {
        var vid = document.getElementById("video");
        vid.play();
    }


    /*---*/
    $('.select_style').styler();
    /*---*/

    var continuousElements1 = document.getElementsByClassName('title_1__black');
    for (var i = 0; i < continuousElements1.length; i++) {
        new Waypoint({
            element: continuousElements1[i],
            handler: function() {
                $(this.element).addClass('active');
            },
            offset: '100%'
        })
    }


    var continuousElements2 = document.getElementsByClassName('title_1__yellow');
    for (var i = 0; i < continuousElements2.length; i++) {
        new Waypoint({
            element: continuousElements2[i],
            handler: function() {
                $(this.element).addClass('active');
            },
            offset: '100%'
        })
    }
    /*---*/

    if (document.getElementById('scene')) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }



    /*---*/


    new WOW().init();


    /*---*/

    $(".js_nice_scroll").niceScroll({
        cursorcolor: "#1f1d1e",
        cursoropacitymin: 1,
        cursorborder: "0",
        cursorwidth: "2px",
        background: "#1f1d1e"

    });

    /*---*/
    $('.price-list__inner button').on('click', function() {
        $('#js-overlay').fadeIn('1000');
        $('#popup').fadeIn('1000');
    });

    /* $('.js_button').on('click', function() {
         $('#js-overlay').fadeIn('1000');
         $('#popup').fadeIn('1000');
     });*/

    $('.close_popup').on('click', function() {
        $('#js-overlay').fadeOut('1000');
        $('#popup').fadeOut('1000');
    });
    $('#js-overlay').on('click', function() {
        $('#js-overlay').fadeOut('1000');
        $('#popup').fadeOut('1000');
    });

    /*---*/



    $('#scrollTop').on('click', function() {

        $(window).scrollTop(0);
    });

    /*---*/

    $('.close_big_popup').on('click', function() {

        $('body').removeClass('overflow');

        setTimeout(function() { $('.big_popup').removeClass('active hide'); }, 250)
        $('.big_popup').addClass('hide');

    });
    $('#close_big_popup_final').on('click', function() {

        $('body').removeClass('overflow');

        setTimeout(function() {
            $('.big_popup').removeClass('active hide');
            $('#slick').slick('slickGoTo', 0);
            document.getElementById("form1").reset();
            document.getElementById("form2").reset();
        }, 250)
        $('.big_popup').addClass('hide');

    });

    $('.js_button').on('click', function() {

        $('body').addClass('overflow');



        setTimeout(function() {
            $('#big_popup4').removeClass('active hide2');
            $('#show-big_popup4').removeClass('on');
            $('#big_popup2').addClass('active');
            setTimeout(function() { $('#slick').slick('resize'); }, 250)
        }, 250)
        $('#big_popup4').addClass('hide2')

    });



    $('#show-big_popup4').on('click', function() {
        if ($('#big_popup4').hasClass('active')) {
            $('body').toggleClass('overflow');
            setTimeout(function() {
                $('#big_popup4').removeClass('active hide2');
                $('#show-big_popup4').toggleClass('on');
            }, 250)
            $('#big_popup4').addClass('hide2');
        } else {
            $('body').toggleClass('overflow');
            $('#big_popup4').toggleClass('active');
            $('#show-big_popup4').toggleClass('on');
        }


    });




    /*---*/
    $('#slick').slick({
        arrows: false,
        draggable: false
    });





    /*---*/


    var validator = new FormValidator('form1', [{
        name: 'name',
        display: 'required',
        rules: 'required'
    }, {
        name: 'email',
        display: 'required',
        rules: 'valid_email|required'
    }, {
        name: 'phone',
        display: 'required',
        rules: 'required'
    }], function(errors, event) {
        event.preventDefault();
        if (errors.length > 0) {
            // Show the errors
            $('.big_popup__input_wrap').removeClass('active');
            for (var i = 0; i <= errors.length; i++) {
                $(errors[i].element).parent('.big_popup__input_wrap').addClass('active');
            }

        } else {
            $('.big_popup__input_wrap').removeClass('active');
            $('#slick').slick('slickGoTo', 1);
        }
    });

    $('#show_one_big_popup').on('click', function() {
        $('#slick').slick('slickGoTo', 0);
    });

    var validator = new FormValidator('form2', [{
        name: 'site_type',
        display: 'required',
        rules: 'required'
    }, {
        name: 'site_type',
        display: 'required',
        rules: 'required'
    }, {
        name: 'brif-file',
        display: 'required',
        rules: 'required'
    }], function(errors, event) {
        event.preventDefault();
        if (errors.length > 0) {
            // Show the errors
            $('.big_popup__input_wrap').removeClass('active');
            for (var i = 0; i <= errors.length; i++) {
                $(errors[i].element).parents('.big_popup__input_wrap').addClass('active');
            }

        } else {
            $('.big_popup__input_wrap').removeClass('active');


            var fd = new FormData;
            var $input = $("#brif-file");
            fd.append('name', $('#form1').find('input[name="name"]').val());
            fd.append('email', $('#form1').find('input[name="email"]').val());
            fd.append('phone', $('#form1').find('input[name="phone"]').val());
            fd.append('site_type', $('#form2').find('select[name="site_type"]').find(":selected").val());
            fd.append('site_theme', $('#form2').find('select[name="site_theme"]').find(":selected").val())
            fd.append('file', $input.prop('files')[0]);


            console.log(fd);





            var request = $.ajax({
                url: "validate.php",
                method: "POST",
                processData: false,
                contentType: false,
                data: fd,
                dataType: "html"
            });

            request.done(function(msg) {


                var response = JSON.parse(msg);
                console.log(response);

                if (response["response"] == 'error') {

                    console.log('error');

                } else if (response["response"] == 'success') {

                    console.log('sucess');

                }



            });

            request.fail(function(jqXHR, textStatus) {
                console.log(textStatus);
            });

            $('#slick').slick('slickGoTo', 2);
        }
    });








    var validator = new FormValidator('form3', [{
        name: 'name',
        display: 'required',
        rules: 'required'
    }, {
        name: 'email',
        display: 'required',
        rules: 'valid_email|required'
    }, {
        name: 'phone',
        display: 'required',
        rules: 'required'
    }, {
        name: 'site_type',
        display: 'required',
        rules: 'required'
    }], function(errors, event) {
        event.preventDefault();
        if (errors.length > 0) {
            // Show the errors
            $('.popup__input_wrap').removeClass('active');
            for (var i = 0; i <= errors.length; i++) {
                $(errors[i].element).parents('.popup__input_wrap').addClass('active');
            }

        } else {
            $('.popup__input_wrap').removeClass('active');


            var fd = new FormData;

            fd.append('name', $('#form3').find('input[name="name"]').val());
            fd.append('email', $('#form3').find('input[name="email"]').val());
            fd.append('phone', $('#form3').find('input[name="phone"]').val());
            fd.append('site_type', $('#form3').find('select[name="site_type"]').find(":selected").val());



            var request = $.ajax({
                url: "validate.php",
                method: "POST",
                processData: false,
                contentType: false,
                data: fd,
                dataType: "html"
            });

            request.done(function(msg) {


                var response = JSON.parse(msg);
                console.log(response);

                if (response["response"] == 'error') {

                    console.log('error');

                } else if (response["response"] == 'success') {

                    console.log('sucess');
                    $('#js-overlay').fadeOut('1000');
                    $('#popup').fadeOut('1000');

                }



            });

            request.fail(function(jqXHR, textStatus) {
                console.log(textStatus);
            });

        }
    });


    /*---*/

    $('#to-brif-file').on('click', function(e) {
        e.preventDefault();
        $('#brif-file').trigger('click');

    });












});
$(window).on('resize', function() {

    $('#slick').slick('resize');

});



/*$(function() {
            $.pixlayout({clip: true, src: "maket.jpg", show:true, center:true, top:0, left:0, pervious: false});
});*/