$(document).on('ready',function(){
$('.map_buttons .pill').on('click',function(){

	$('.map_buttons .pill').removeClass('active');
	$(this).addClass('active');


});

/*map dots*/
$('.dots_on_listen').on('click',function(){
	var parent = $(this).parent();
	var content = parent.find('.dots_content');
	var top = content.outerHeight() + 10;
	if(parent.hasClass('active') ){
		$('.dots_wrap').removeClass('active');
		return;
	}else{
		$('.dots_wrap').removeClass('active');
		content.css({top:-top});
		parent.addClass('active');
	}
});
/*map dots - end*/

	
	$('#top_menu').slicknav({
		prependTo: "#mobile_menu_wrap",
		label:''
	});

		var combinedMenuItems = $('#top_menu2').find('li').clone();
	
		$('#mobile_menu_wrap .nav').append(combinedMenuItems);




	$('#open_mobile_menu').on('click',function(){

		$('#top_menu').slicknav('toggle');
	});
	
	$('select').styler();
	$('input[type="file"]').styler();

	$('.jq-file__browse').text("Прикрепить документы");

    $('[data-toggle="popover"]').popover({
        trigger: 'click',
        html: true,
        content: function() {
          return $(this).next('.data_content').html();
        }
    });
    $('[data-toggle="popover"]').on('show.bs.popover', function () {
  		$('[data-toggle="popover"]').not(this).popover('hide');
	});

	$('#top_banner_slider').slick({
		arrows:true,
		responsive: [
    {
      breakpoint: 771,
      settings: {
        arrows:false
      }
    }]
	});

	$('#logo_slider').slick({
		arrows:false,
		slidesToShow:5,
		dots:true,
		responsive: [
    {
      breakpoint: 771,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow:1
      }
    }]
	});


	$('.gal_fade').colorbox({
		rel:'group1'
	});

	$('.gal_fade').on('click',function(){

		if($(window).width() + 17 <= 767){
			return false;
		}

	});
});