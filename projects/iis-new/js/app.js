function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;

    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }

    if (dec_point === undefined) {
        dec_point = ",";
    }

    if (thousands_sep === undefined) {
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");

    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);

    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

    return km + kw + kd;
}


function calc() {

    //Сумма к ивестированию
    var my_sum = parseInt($("#total_switcher_input__dubl").val());

    //Номер стратегии или цели 
    var my_goal = parseInt($('#calculate__step1 .calculate__step__item__checkbox.active').attr('data-goal'));

    //Сумма вычета
    var my_vychet = $('#calculate__step1 .calculate__step__item__checkbox.active').attr('data-vychet');

    //Процентная ставка
    /*var my_percent = parseFloat($('#calculate__step1 .calculate__step__item__checkbox.active').attr('data-percent'));*/

    //Периодичность
    var my_mes = parseInt($('#calculate__step2 .calculate__step__item__checkbox.active').attr('data-mes'));

    //Наименование подходящей стратегии
    //не нужно для арифместических расчетов
    var my_strategy = $('#calculate__step1 .calculate__step__item__checkbox.active').attr('data-strategy');

    //Наименование периодичности
    //не нужно для арифместических расчетов
    var my_mestext = $('#calculate__step2 .calculate__step__item__checkbox.active').attr('data-mestext');


    //Получу налоговый вычет за 1 год
    var my_vychet_d;
    if (my_sum * 0.13 < 52000) {

        my_vychet_d = my_sum * 0.13 * 3;

    } else {
        my_vychet_d = 52000 * 3;
    }


    var period_vznos,
        potenz_invest_doh_3year,
        nal_vych_3year,
        my_cap_3year,
        sredn_vzvesh_summ,
        potenz_dohod_in_year,
        vnesy_svoi_3year;







    if (my_goal == 1) {



        period_vznos = my_sum / my_mes;

        potenz_invest_doh_3year = my_sum * 3 * 0.15;

        nal_vych_3year = my_vychet_d;

        my_cap_3year = (my_sum * 3) + potenz_invest_doh_3year + nal_vych_3year;

        sredn_vzvesh_summ = my_sum * 2;

        potenz_dohod_in_year = (potenz_invest_doh_3year + nal_vych_3year) / sredn_vzvesh_summ / 3;

        vnesy_svoi_3year = my_sum * 3;


    } else if (my_goal == 2) {



        period_vznos = my_sum / my_mes;

        potenz_invest_doh_3year = my_sum * 3 * 0.095;

        nal_vych_3year = my_vychet_d;

        my_cap_3year = (my_sum * 3) + potenz_invest_doh_3year + nal_vych_3year;

        sredn_vzvesh_summ = my_sum * 1.625;

        potenz_dohod_in_year = (potenz_invest_doh_3year + nal_vych_3year) / sredn_vzvesh_summ / 3;

        vnesy_svoi_3year = my_sum * 3;





    } else if (my_goal == 3) {



        period_vznos = my_sum / my_mes;

        potenz_invest_doh_3year = my_sum * 3 * 0.08;

        nal_vych_3year = my_vychet_d;

        my_cap_3year = (my_sum * 3) + potenz_invest_doh_3year + nal_vych_3year;

        sredn_vzvesh_summ = my_sum * 1.54105;

        potenz_dohod_in_year = (potenz_invest_doh_3year + nal_vych_3year) / sredn_vzvesh_summ / 3;

        vnesy_svoi_3year = my_sum * 3;




    }

    $('#for_time').text(my_mestext);

    $('#my3').text(my_strategy);
    $('#my4').text(my_vychet);

    $('#my1').text(number_format(my_cap_3year, 2, ',', ' ') + ' руб.');
    $('#my2').text(number_format(potenz_dohod_in_year * 100, 2, ',', ' ') + ' %');
    $('#my5').text(number_format(period_vznos, 2, ',', ' ') + ' руб.');
    $('#my6').text(number_format(vnesy_svoi_3year, 2, ',', ' ') + ' руб.');
    $('#my7').text(number_format(potenz_invest_doh_3year, 2, ',', ' ') + ' руб.');
    $('#my8').text(number_format(nal_vych_3year, 2, ',', ' ') + ' руб.');
}




$(document).ready(function() {
    if (localStorage.getItem('gkcookie') != 1) {
        setTimeout(function() {
            $('.bottom_popup').slideDown(300);

        }, 500);

        $('#hide-bottom_popup').on('click', function(e) {
            e.preventDefault();
            $('.bottom_popup').slideUp(300);
            localStorage.setItem('gkcookie', 1);
        });
    }




    if (localStorage.getItem('showTip') != 1) {
        const tip = tippy.one('#to-tippy', {
            'arrow': true,
            'animation': 'scale',
            'trigger': 'focus',
            'hideonclick': false,
            'onHidden': function(initiance) {


                localStorage.setItem('showTip', 1);
            },
            'onShow': function(initiance) {
                if (localStorage.getItem('showTip') == 1) {
                    return false;

                }

                
            }
        });



        var waypoint = new Waypoint({
            element: document.querySelector('#calculate__step1'),
            handler: function(direction) {
                tip.show();
            },
            offset: '50%'
        });


    }



    $('.show-img').magnificPopup({
        type: 'image',
        closeMarkup: '<div class="popup-close type2 mfp-close">Х</div>',
        mainClass: "imagePopup"
    });

    $("#total_switcher_input").ionRangeSlider({
        min: 50000,
        max: 1000000,
        step: 10000,
        from: 400000,
        hide_min_max: true,
        onChange: function(value) {
            $('#slider-summ').text(value.from_pretty);
            $('#total_switcher_input__dubl').val(value.from);
            calc();
        },
        onStart: function(value) {
            $('#slider-summ').text(value.from_pretty);
            $('#total_switcher_input__dubl').val(value.from);
            calc();
        },
        onUpdate: function(value) {
            $('#slider-summ').text(value.from_pretty);
            $('#total_switcher_input__dubl').val(value.from);
            calc();
        },
        onFinish: function(value) {
            $('#slider-summ').text(value.from_pretty);
            $('#total_switcher_input__dubl').val(value.from);
            calc();
        }

    });

    var total_input = $("#total_switcher_input").data("ionRangeSlider");




    $('.show-popup').on('click', function(e) {
        e.preventDefault();

        var title = $(this).data('title');
        var text = $(this).data('text');
        var input = $(this).data('input');
        var string = "";
        var msgtitle = $(this).data('msgtitle');

        for (var values in input) {
            string += '<input type=\"text\" name=\"' + values + '\" id=\"' + values + '\" placeholder=\"' + input[values] + '\" />';
        }


        $('#popup').find('.popup_title').text(title);
        $('#popup').find('.popup_text').text(text);
        $('#popup .form-wrap').find('input').remove();
        $('#popup').find('.form-wrap').append($(string));
        $('#popup').find('.form-wrap').append('<input type=\"hidden\" name=\"msgtitle\" value=\"' + msgtitle + '\" />');

        $.magnificPopup.open({
            items: {
                src: $('#popup')
            },
            type: 'inline',
            showCloseBtn: false
        });
        setValidator();

    });
    $('.popup-close').on('click', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    $('.question_block__item__title a').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.question_block__item').find('.question_block__item__text').slideUp(250);
        } else {
            $(this).addClass('active');
            $(this).parents('.question_block__item').find('.question_block__item__text').slideDown(250);
        }


    });
    $('#show_all').on('click', function(e) {
        e.preventDefault();

        if ($('#show_all').hasClass('active')) {

            $('#show_all').text('Показать все');
            $('#show_all').removeClass('active');
            $('.question_block__item__sub-wrap').slideUp(500, function() {

                var height = $('.section10').offset().top;
                $(window).scrollTo('.section10', 500);

            });


        } else {

            $('#show_all').text('Скрыть');
            $('#show_all').addClass('active');
            $('.question_block__item__sub-wrap').slideDown(500);

        }

    });






    $('.calculate__step__item__checkbox').on('click', function() {

        $(this).parents('.calculate__step').find('.calculate__step__item__checkbox').removeClass('active');
        $(this).parents('.calculate__step').find('.calculate__step__item').removeClass('active');

        $(this).addClass('active');
        $(this).parents('.calculate__step__item').addClass('active');

    });


    $('#calculate__step1 .calculate__step__item__checkbox').on('click', function() {
        calc();
        $('#calculate__step2').slideDown(500);
    });

    $('#calculate__step2 .calculate__step__item__checkbox').on('click', function() {
        calc();
        $('#calculate__step3').slideDown(500);
        $('#calculate__step4').slideDown(500);
    });



    $('.reload_btn').on('click', function(e) {
        e.preventDefault();
        $('#calculate__step1 .calculate__step__item__checkbox').removeClass('active');
        $('#calculate__step1 .calculate__step__item').removeClass('active');
        $('#calculate__step1 .calculate__step__item').eq(0).addClass('active');
        $('#calculate__step1 .calculate__step__item').eq(0).find('.calculate__step__item__checkbox').addClass('active');

        $('#calculate__step2 .calculate__step__item__checkbox').removeClass('active');
        $('#calculate__step2 .calculate__step__item').removeClass('active');
        $('#calculate__step2 .calculate__step__item').eq(0).find('.calculate__step__item__checkbox').addClass('active');

        total_input.reset();

        calc();
    });










    function setValidator() {


        var validator = new FormValidator('popup_form', [{
                name: 'form_name',
                rules: 'required'
            }, {
                name: 'form_phone',
                rules: 'required'
            },
            {
                name: 'form_text',
                rules: 'required'
            }
        ], function(errors, event) {
            event.preventDefault();
            if (errors.length > 0) {
                // Show the errors
                $('#popup_form input').removeClass('error');
                for (var i = 0; i <= errors.length; i++) {
                    $(errors[i].element).addClass('error');
                }

                yaCounter29989884.reachGoal('order_invalid');
                ga('send', 'event', 'form', 'invalid', 'order');

            } else {



                var fd = new FormData();

                fd.append('msgtitle', $('#popup_form').find('input[name="msgtitle"]').val());

                fd.append('checking', $('#popup_form').find('input[name="checking"]').val());



                if ($('#popup_form').find('input[name="form_name"]').val()) {
                    fd.append('name', $('#popup_form').find('input[name="form_name"]').val());
                }

                if ($('#popup_form').find('input[name="form_phone"]').val()) {
                    fd.append('phone', $('#popup_form').find('input[name="form_phone"]').val());
                }

                if ($('#popup_form').find('input[name="form_text"]').val()) {
                    fd.append('text', $('#popup_form').find('input[name="form_text"]').val());
                }

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


                    if (response.response == 'error') {

                        console.log('error');

                    } else if (response.response == 'success') {

                        console.log('sucess');

                        $.magnificPopup.close();

                        $.magnificPopup.open({
                            items: {
                                src: $('#thx-popup')
                            },
                            type: 'inline',
                            showCloseBtn: false
                        });


                        yaCounter29989884.reachGoal('order');
                        ga('send', 'event', 'form', 'send', 'order');


                    }



                });

                request.fail(function(jqXHR, textStatus) {
                    console.log(textStatus);
                });






                var request2 = $.ajax({
                    url: "rest.php",
                    method: "POST",
                    processData: false,
                    contentType: false,
                    data: fd,
                    dataType: "html"
                });

                request2.done(function(msg) {


                    var response = JSON.parse(msg);


                    if (response.response == 'error') {

                        console.log('request2_error');

                    } else if (response.response == 'success') {

                        console.log('request2_sucess');


                    }



                });

                request2.fail(function(jqXHR, textStatus) {
                    console.log('request2_' + textStatus);
                });








            }
        });



    }




});