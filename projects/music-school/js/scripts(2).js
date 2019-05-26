$(document).bind('ready',function(){

var timeoutId,intervalId,bgPos = 0;


// бг у глаза при наведении
$('#first_eye_content').bind('mouseover',function(){

	$('.blue_line_layer').css({'opacity':'1'});

});
$('#first_eye_content').bind('mouseout',function(){
	$('.blue_line_layer').css({'opacity':'0'});
	
});






//прокрутка орнамента при наведении на глаз
$('#first_eye_content').find('a').bind('mouseover',function(){
intervalId = setInterval(function() {
	bgPos = bgPos - 1;
	if(bgPos == -1910){
		bgPos = 0;
	}
  		$('.ornament_layer').css({'background-position-x':bgPos+'px'  })
	}, 5);
   timeoutId = setTimeout(function(){
   	 $('.blur').css({'-webkit-filter':'blur(2px)'});
   },1000);
});

$('#first_eye_content').find('a').bind('mouseout',function(){
	clearInterval(intervalId);
	clearTimeout(timeoutId);
	$('.blur').css({'-webkit-filter':'blur(30px)'});

});

//открытие слайдера при клике на глаз
$('#first_eye_content').find('a').bind('click',function(){
	$('#top_main_carousel_2').css({'opacity':1});

	$(this).trigger('mouseout');

	// $(this).unbind('mouseout').unbind('mouseover');
	// $('#first_eye_content').unbind('mouseout').unbind('mouseover');

	var parentHeight = $('.content_layer').parent().height();
	$('.content_layer').css({'top':parentHeight - $('.content_layer').height() });
	$('.content_layer_2').css({'top':parentHeight,'opacity':'0'});
	$('#first_eye_content').css({'opacity':0});
	setTimeout(function(){
		$('#first_eye_content').hide();
		$('#second_eye_content').show().css({'opacity':'1'});


	},500);
	$('.blur').css({'-webkit-filter':'blur(0)'});
	$('.blue_layer').css({'opacity':0}).hide();
	$('.blue_line_layer').hide();
	$('.ornament_layer').css({'opacity':0}).hide();
	$('#prev').css({'display':'block'});
	$('#next').css({'display':'block'});

	return false;
});


//закрытие глаза при клике на глаз
$('#second_eye_content').find('a').bind('click',function(){
	$('#top_main_carousel_2').css({'opacity':0});
	
	$('.content_layer').css({'top':110 });
	$('.content_layer_2').css({'top':230,'opacity':'1'});
	$('#second_eye_content').css({'opacity':'0'});
	setTimeout(function(){
		$('#second_eye_content').hide();
		$('#first_eye_content').show().css({'opacity':'1'});

	},500);

	
	$('.blue_layer').show().css({'opacity':0.7});
	$('.blue_line_layer').show();
	$('.ornament_layer').show().css({'opacity':1});
	$('.blur').css({'-webkit-filter':'blur(30px)'});
	$('#prev').css({'display':'none'});
	$('#next').css({'display':'none'});
	return false;
});


//инициализация слайдеров
var owl = $(".owl-carousel"),owl2 = $(".owl-carousel_2");

  owl.owlCarousel({
  	items:1,
  	center:true,
  	startPosition:1,
  	smartSpeed:2000,
  	mouseDrag: false,
  	animateOut: 'fadeOut'

  });
  owl2.owlCarousel({
  	center:true,
  	startPosition:1,
  	mouseDrag: false,
  	smartSpeed:2000,
  	autoWidth:true

  });



//переключение слайдеров
  $('#next').bind('click',function(){

  	owl.trigger('next.owl.carousel');
  	owl2.trigger('next.owl.carousel');

  });


 $('#prev').bind('click',function(){

  	owl.trigger('prev.owl.carousel');
  	owl2.trigger('prev.owl.carousel');

  });




//подсчет высоты блоков с музыкальными отделениями
var smallH,bigH;
$('.big_cat_part_inner_item').each(function(){

	smallH = $(this).find('.caption').height();
	bigH = $(this).height();

	$(this).height(smallH);

	$(this).attr('smallH',smallH);
	$(this).attr('bigH',bigH);

});

//анимация блоков с музыкальными отделениями
var smallInterval,pos = 0;
  $('.big_cat_part_inner_item').bind('mouseover',function(){

  	$(this).css({'height':$(this).attr('bigH')});
  	var ornam = $(this).find('.ornam');
  	smallInterval =	setInterval(function(){
  		pos = pos - 1;
  		ornam.css({'background-position-x':pos + 'px'});
  	},5);
  });
   $('.big_cat_part_inner_item').bind('mouseout',function(){

   	clearInterval(smallInterval);
  	$(this).css({'height':$(this).attr('smallH')});


  });









function menuAnim(obj){

var hei = $('#menu_wrap_lvl3_wrap').find('.header__menu-level3').innerHeight();


if($('#menu_wrap_lvl3_wrap').height() != 0){

	$('#menu_wrap_lvl3_wrap').css({'height':0});

	$("#menu_wrap_lvl3_wrap").on("transitionend", function(event){   

		$('#menu_wrap_lvl3_wrap').css({'height':hei});

	});
}else{

	$('#menu_wrap_lvl3_wrap').css({'height':hei});

}
		







}

   //menu_part
$('.header__menu-level2').find('a').bind('click',function(){
	$('.header__menu-level2').find('a').removeClass('header__menu-level2-active');
	$(this).addClass('header__menu-level2-active');

    menuAnim();
	return false;
});

   // /menu_part


});