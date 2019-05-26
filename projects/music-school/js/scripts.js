
//Проверка на поддержку transition в браузерах

// if ($.support.transition) {
// 
// } else {
//
// }
$.support.transition = (function(){ 
    var thisBody = document.body || document.documentElement,
    thisStyle = thisBody.style,
    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
    
    return support; 
})();

//Проверка на поддержку transition в браузерах - конец

//Главный слайдер - позиция навигационных стрелок
  function navpos(){
	var onePad	= ($(window).width() - $('.container').width()) / 2,
		left = 60;

	$('#prev').css({'left':onePad - left});
	$('#next').css({'right':onePad - left});
  }
//Главный слайдер - позиция навигационных стрелок - конец


$(document).bind('ready',function() {

	// инициализация - Главный слайдер - позиция навигационных стрелок
	 $(window).bind('resize',function(){
			navpos();
   	});

	navpos();

	// инициализация - Главный слайдер - позиция навигационных стрелок - конец


$('#show-info').click(function() {
	$('.information-text').css({'height':'auto'});
	$(this).hide();
	return false;
});


$('#tabs-run a').click(function() {

	var activeElem = $('.filter-date__active').length ? 'filter-date__active' : 'department__menu-active';

	$('#tabs-run a').removeClass(activeElem);
	$(this).addClass(activeElem);

	var id = $(this).attr('id');

	$('.tabs-all').hide();

	$('.group-in').hide();

	$('.tabs-all').each(function() {
		var tabs = $(this).attr('data-tabs');

		if(tabs == id) {
			$(this).show();

			return false;
		}

	});

	return false;
});

$('.department__groups-list a').click(function() {

	$('.tabs-all').hide();

	var id = $(this).attr('id');

	$('.group-in').each(function() {
		var tabs = $(this).attr('data-info');


		if(tabs == id) {
			id = null;

			$(this).show()

			return false;
		}

	});


	return false;
});


$('.group-in__close').click(function(){
	$('.group-in').hide();

	$('.department__groups').show();

	return false;
});

// colorbox

if($('.video').length) {
	$(".video .album__item a").colorbox({
		iframe:true, 
		innerWidth:992, 
		innerHeight:570,
		opacity: 0.5
	});
}



// бг у глаза при наведении + прокрутка орнамента при наведении на глаз

var timeoutId,
	intervalId,
	bgPos = 0,
	content_layer = $('#first_eye_content').parents('.content_layer');

	function start_animate(){

		$('.blue_line_layer').css({'opacity':'1'});

		intervalId = setInterval(function() {

		bgPos = bgPos - 1;

		if(bgPos == -1910){

			bgPos = 0;

		}

  		$('.ornament_layer').css({'background-position':bgPos+'px '+'-120px'});

		}, 15);

    	timeoutId = setTimeout(function(){

   		$('#top_main_carousel').css({'-webkit-filter':'blur(2px)'});

    	},1000);

	}

	function stop_animate(){

		clearInterval(intervalId);

		clearTimeout(timeoutId);

		$('#top_main_carousel').css({'-webkit-filter':'blur(30px)'});

		$('.blue_line_layer').css({'opacity':'0'});

	}


content_layer.bind('mouseover',function(){
 
	start_animate();
	
});

content_layer.bind('mouseout',function(){

	stop_animate();
	
});

// бг у глаза при наведении + прокрутка орнамента при наведении на глаз - конец







//открытие -закрытие слайдера при клике на глаз
$('#first_eye_content').find('a').bind('click',function(){

//вырубим ховер на content_layer 
	content_layer.unbind();
	stop_animate();
	$('#top_main_carousel').css({'-webkit-filter':'blur(0px)'});


//вырубим ховер на content_layer - конец

	$('#top_main_carousel_2').css({'opacity':1});

	$(this).trigger('mouseout');


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
	$('#top_main_carousel').css({'-webkit-filter':'blur(0px)'});
	$('#prev').css({'display':'block'});
	$('#next').css({'display':'block'});


	return false;
});



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
	$('#top_main_carousel').css({'-webkit-filter':'blur(30px)'});
	$('#prev').css({'display':'none'});
	$('#next').css({'display':'none'});

	content_layer.bind('mouseover',function(){
 
		start_animate();
	
	});
	
	content_layer.bind('mouseout',function(){

		stop_animate();
	
	});

	return false;
});
//открытие -закрытие слайдера при клике на глаз - конец


//инициализация слайдеров
var owl = $(".owl-carousel"),
	owl2 = $(".owl-carousel_2");

  owl.owlCarousel({

  	lazyLoad:true,
  	items:1,
  	startPosition:1,
  	loop:true,
  	center:true,
  	smartSpeed:2000,
  	mouseDrag: false,
    animateOut: 'fadeOut',
    smartSpeed:2000

  });

  owl2.owlCarousel({
  	center:true,
  	startPosition:1,
  	mouseDrag: false,
  	smartSpeed:2000,
  	autoWidth:true,
  	loop:true

  });
//инициализация слайдеров - конец


//переключение слайдеров
  $('#next').bind('click',function(){

  	owl.trigger('next.owl.carousel');
  	owl2.trigger('next.owl.carousel');

  });


 $('#prev').bind('click',function(){

  	owl.trigger('prev.owl.carousel');
  	owl2.trigger('prev.owl.carousel');

  });
//переключение слайдеров - конец



//подсчет и установка высоты блоков с музыкальными отделениями
var smallH,bigH;

$('.big_cat_part_inner_item').each(function(){

	smallH = $(this).find('.caption').height();
	bigH = $(this).height();

	$(this).height(smallH);
	$(this).attr('smallH',smallH);
	$(this).attr('bigH',bigH);

});
//подсчет и установка высоты блоков с музыкальными отделениями



//анимация блоков с музыкальными отделениями
var smallInterval,pos = 0;

  $('.big_cat_part_inner_item').bind('mouseover',function(){

  	$(this).css({'height':$(this).attr('bigH')});
  	var ornam = $(this).find('.ornam');
  	smallInterval =	setInterval(function(){
  		pos = pos - 1;
  		ornam.css({'background-position':pos + 'px'});
  	},15);
  });


   $('.big_cat_part_inner_item').bind('mouseout',function(){

   	clearInterval(smallInterval);
  	$(this).css({'height':$(this).attr('smallH')});


  });
//анимация блоков с музыкальными отделениями - конец







//Выпадающеее субменю

function menuAnim(obj){

var hei = $('#menu_wrap_lvl3_wrap').find('.header__menu-level3').innerHeight();




if($('#menu_wrap_lvl3_wrap').height() != 0){

	$('#menu_wrap_lvl3_wrap').css({'height':0});

	if ($.support.transition) {

		$("#menu_wrap_lvl3_wrap").on("transitionend", function(event){   

				$('#menu_wrap_lvl3_wrap').css({'height':hei});

		});

	} else {

		$('#menu_wrap_lvl3_wrap').css({'height':hei});

 	}

	
}else{

	$('#menu_wrap_lvl3_wrap').css({'height':hei});

}

}
//Выпадающеее субменю - конец

 //Выпадающеее субменю - события и активный класс
$('.header__menu-level2').find('a').bind('click',function(){

	if($(this).hasClass('header__menu-level2-active')){
		return false;
	}

	$('.header__menu-level2').find('a').removeClass('header__menu-level2-active');

	$(this).addClass('header__menu-level2-active');

    menuAnim();

	return false;

});
//Выпадающеее субменю - события и активный класс - конец


});


$(window).load(function(){

	// column - masonry в новостях

	$('.albums__row-col-wrap').masonry({
	  itemSelector: '.album__item',
	  columnWidth: ".album__item"
	});

});