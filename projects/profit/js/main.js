$(function () {
    $('#slider-1').on('slidestop change keypress', function( event, ui ) {
        var $debt = Math.round(Number($("#slider-1").val()));
        var $total = $debt * 0.2;
        $('#totalhas').text($total);
    });

});
jQuery(function($){
    $('[type="tel"]').mask("+7(999) 999-99-99");
});
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
    var tab_count = $(this).attr('data-count');
		$('ul.tabs li').removeClass('actived');
		$('.tab-content').removeClass('actived');

		$(this).addClass('actived');
		$("#"+tab_id).addClass('actived');
    $("span.crnt").html(tab_count);

	})

})
$(document).ready(function(){
	
	$('ul.tabed li').click(function(){
		var tab_ided = $(this).attr('data-tabed');
    var tab_counter = $(this).attr('data-counted');
		$('ul.tabed li').removeClass('actived');
		$('.tab-contented').removeClass('actived');

		$(this).addClass('actived');
		$("#"+tab_ided).addClass('actived');
    $("span.crnt2").html(tab_counter);

	})

})
$(document).ready(function(){
    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
})
$(document).ready(function(){
    $(".navbar").on("click","li.scroll a, a.scroll", function (event) {
      slideout.close();
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
/*
$(document).ready(function(){
	$('.popform').validate({
  rules: {
    inp_phone: {
    required: true
    }
  },
  messages: {
    inp_phone: 'Введите телефон'
  }
});
})

$(document).ready(function(){
	$('.mainform1').validate({
  rules: {
    inp_phone: {
    required: true
    }
  },
  messages: {
    inp_phone: "Введите телефон"
  }
});
})

$(document).ready(function(){
	$('.firform').validate({
  rules: {
    inp_phone: {
    required: true
    }
  },
  messages: {
    inp_phone: "Введите телефон"
  }
});
})
*/