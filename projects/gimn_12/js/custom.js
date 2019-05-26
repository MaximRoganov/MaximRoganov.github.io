$(document).bind('ready',function(){


  $('.lvl_one li a').bind('click',function(){

    var iskClass = '.submenu_' + $(this).data('menu-id');

    $('.lvl_two').find('.nav').hide();

    if($('.lvl_three').parent().height() != 0){

                  $('.lvl_three').parent().height(0);

              }


    if($('.lvl_two').find(iskClass).length){



      if($('.lvl_two').parent().height() != 0){

          $('.lvl_two').parent().height(0);
          $('.lvl_two').parent().one($.support.transition.end,function() {

              $('.lvl_two').find(iskClass).show();
              $('.lvl_two').parent().height($('.lvl_two').height());

          });


    }else{

              $('.lvl_two').find(iskClass).show();
              $('.lvl_two').parent().height($('.lvl_two').height());



    }

    }else{
      $('.lvl_two').parent().height(0);
    }

 
        return false;

  });










   $('.lvl_two li a').bind('click',function(){

    var iskClass = '.submenu_' + $(this).data('menu-id');

    $('.lvl_three').find('.nav').hide();


    if($('.lvl_three').find(iskClass).length){



      if($('.lvl_three').parent().height() != 0){

          $('.lvl_three').parent().height(0);
          $('.lvl_three').parent().one($.support.transition.end,function() {

              $('.lvl_three').find(iskClass).show();
              $('.lvl_three').parent().height($('.lvl_two').height());

          });


    }else{

              $('.lvl_three').find(iskClass).show();
              $('.lvl_three').parent().height($('.lvl_two').height());
    }

    }else{
      $('.lvl_three').parent().height(0);
    }

 
        return false;

  });







var pads = ($(window).width() - $('.container').width())/2;

var pads_green_round = 72.5 + pads;

$('.green_round').css({'right':72.5 + pads});







    $('.green_round').bind("mouseenter", function() {
      if(!$(this).hasClass("active_green_round")){
    $(this).css({'right':72.5 + pads - 25 ,'top':247-25,'height':200,'width':200});
    //$(this).find('.text').css({'top':25 - 247,'right':25 - 834});
}
});

$('.green_round').bind("mouseleave", function() {
  if(!$(this).hasClass("active_green_round")){
    $(this).css({'right':72.5 + pads  ,'top':247,'height':200-50,'width':200-50});
//$(this).find('.text').css({'top':247,'right':834});

}
});


 









$('.green_round').bind('click',function(){






 


  var elemH = $('.slider_wrap').height();
 
  $(this).css({'width':'100%','top':'0','right':'0'}).height(elemH).addClass('active_green_round');
  
  $(this).find('.text').css({'opacity':'1','top': '0','right': pads +22.5});




  

$(this).one($.support.transition.end,function() {

              $(this).css({'border-radius':'0px'});

          });


$('.bigTextgreen').css({'left':-449.5 + pads});
$('.bigText').css({'left':'-1000px'});



});


/*$(".car").owlCarousel({
  center:true,
  autoWidth:true


});

*/


/*
$('carousel_wrap').width($(window).width());

$('div.carousel>div').bind('click',function(){

              var imgWidth = $(this).find('img').width();

 





//случай первый - ширина блока обертки заходит за пределы окна
if($(this).position().left + $(this).width() > $(window).width()){

  
$('div.carousel').css({'right':500});


}


//случай второй - ширина картинки при увеличении заходит за пределы окна
if($(this).position().left + imgWidth > $(window).width()){

  
}







            $('div.carousel>div').removeClass('active');

            $(this).addClass('active');


          $('div.carousel>div').width(319);

         
          if(imgWidth > 350){
            $(this).width(imgWidth);
          }





});*/


 
  



});
