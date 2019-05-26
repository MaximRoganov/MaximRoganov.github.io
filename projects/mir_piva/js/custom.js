
var visioFlag = 0,
        posa,
        posaTop;

/*show or hide top menu*/
    function showHideMenu(item){

        if(visioFlag == 0){

             visioFlag = 1;
            $('.top_menu').show();
            item.addClass('active');

            posaTop = posaTop + $('.top_menu').height();

        }else if(visioFlag == 1){

            visioFlag = 0;

            $('.top_menu').hide();

            item.removeClass('active');

            posaTop = posaTop - $('.top_menu').height();

        }

    }
/* /show or hide top menu*/


    /*cabinet position*/

    function topCabPos(posaTop){

            if($(document).scrollTop() >=  posaTop){

                $('.second_top_row').css({'position':'fixed','top':0});

                    }else if($(document).scrollTop() <  posaTop){

                        $('.second_top_row').css({'position':'static'});

                    }

    }
    /* /cabinet position*/

/* close all popup forms*/
    function closePopup(){
        $('.popup_form').each(function(){

                if(!$(this).hasClass('hidden')){

                    $(this).addClass('hidden');
                }

        });
        
    }
    /* /close all popup forms*/

    $(document).ready(function(){



           


            $('.call_join_form').bind('click',function(){

                var offset = $(this).parents('.actions_accordeon').offset();
                var offsetTop = offset.top;

                if($('.join_form').hasClass('hidden')){

                    $('.join_form').css({'top':offsetTop}).removeClass('hidden');
                    $('.join_form').find('input[type=hidden]').val($(this).parents('.actions_accordeon').find('.caption').eq(0).text());
                    
                     $('.join_form').find('form').bind('submit',function(){

               

                                closePopup();
                                $('.sucess_form').css({'top':$(window).scrollTop() +100}).removeClass('hidden');

                                $('.sucess_form').find('.form_close').bind('click',function(){

                                     $('.sucess_form').addClass('hidden');

                                    return false;
                                });

                                return false;

                             });

                }else{

                        $('.join_form').addClass('hidden');

                }
                
                return false;
            });




              $('.login_form').find('.form_close').bind('click',function(){

                    if(!$('.login_form').hasClass('hidden')){
                            $('.login_form').addClass('hidden');

                    }else{
                        $('.login_form').removeClass('hidden');
                    }
                        return false;
                });
                 $('.join_form').find('.form_close').bind('click',function(){

                    if(!$('.join_form').hasClass('hidden')){
                            $('.join_form').addClass('hidden');

                    }else{
                        $('.join_form').removeClass('hidden');
                    }
                    return false;

                });

                $('.username').bind('click',function(){

                    if(!$('.login_form').hasClass('hidden')){
                            $('.login_form').addClass('hidden');

                    }else{
                        $('.login_form').removeClass('hidden');
                    }

                });


                $('.actions_accordeon .caption').bind('click',function(){
                    $('.actions_accordeon td').removeClass('active');
                    $(this).parent('td').addClass('active');
                        return false;
                });

                $('#filter1').find('a').bind('click',function(){
                        $('#filter1').find('a').removeClass('active');
                        $(this).addClass('active');
                        var data = $(this).attr('value');
                        $('.ac_cont').hide();
                        $(data).show();
                        
                        return false;
                });

                var lastActiveItem;
                $('.city_change').find('.city_change_butt').bind('click',function(){


                    if($(this).hasClass('active')){

                        $(this).removeClass('active');

                        $('.city_menu').removeClass('active');
                        lastActiveItem.addClass('active');
                        

                    }else{
                        //открыть меню

                           $(this).addClass('active');
                          $('.city_menu').addClass('active');

                        $('.city').each(function(){
                                if($(this).hasClass('active')){

                                    lastActiveItem = $(this);

                                }

                          });

                          $('.city_menu a').bind('click',function(){

                                var idItem = '#' + $(this).attr('value');
                                $('.city').removeClass('active');
                                $(idItem).addClass('active');
                                console.log(idItem);
                                $('.city_menu').removeClass('active');
                                $('.city_change_butt').removeClass('active');

                                $('.current_city').text('Ваш город ' + $(this).text());
                                return false;
                          });


                           $('.city').removeClass('active');

                    }

                    return false;

                });


                $('.mobile_menu').bind('click',function(){

                        showHideMenu($(this));

                });

                    posa = $('.second_top_row').offset();
                    posaTop = posa.top;


               $(window).bind('scroll',function(){

                    topCabPos(posaTop);
                

               });
                



            $('.middle_slider').owlCarousel({
                loop:true,
                margin:40,
                nav:true,
                navText:[,],
                center:true

            });
               $('.partners_block').owlCarousel({
                loop:true,
                margin:40,
                nav:false,
                navText:[,],
                center:true

            });
              


    });    
