function leftPadWidth(){

	var rightWidth = ($(document).width() - $('.container').width() ) / 2;
	$('.dop-pad-block').width(rightWidth);
}

$(document).on('ready',function(){


	leftPadWidth();

	$(window).on('resize',function(){

			leftPadWidth();
	});

	lightbox.option({
      'albumLabel':'',
      'disableScrolling':true,
      'fadeDuration': 200,
      'resizeDuration': 300
    })

	$('input[name="phone"]').mask('+7 (000) 000 00 00');

	$('select,input[type="file"],input[type="radio"]').styler();

	$(function(){
		$('#top-menu').slicknav({
			label:"Меню",
			prependTo:$('.second-line .container'),
			init: function(){
				$('.slicknav_menu').find('.slicknav_menutxt').prepend('<i class="glyphicon glyphicon-menu-hamburger"></i>');
			}

		});
	})

	$("#simple_slider").slick({
		responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows:false
      }
    }]
		
	});

	$("#feedback_slider").slick({
		dots:true,
		responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows:false
      }
    }]
	});





	(function() {

      if($('#map-wrap').length) {

        ymaps.ready(init);

        var myMap, 
            myPlacemark;

        }

        function init(){ 

            myMap = new ymaps.Map("map-wrap", {
                center: [55.522001, 37.262738],
                zoom: 16,
                controls: []
            });
            
            myPlacemark = new ymaps.Placemark([55.522001, 37.262738], {}, {
              iconLayout: 'default#image',
                iconImageHref: 'img/icons/baloon.png',
                iconImageSize: [40, 53], 
                iconImageOffset: [-40, -53] 
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls.add('zoomControl');

          myMap.behaviors.disable('scrollZoom');

        }



        if($('#contacts-map').length) {

        ymaps.ready(init2);

        var myMap, 
            myPlacemark;

        }

        function init2(){ 

            myMap = new ymaps.Map("contacts-map", {
                center: [55.522001, 37.262738],
                zoom: 16,
                controls: []
            });
            
            myPlacemark = new ymaps.Placemark([55.522001, 37.262738], {}, {
              iconLayout: 'default#image',
                iconImageHref: 'img/icons/baloon.png',
                iconImageSize: [40, 53], 
                iconImageOffset: [-40, -53] 
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls.add('zoomControl');

          myMap.behaviors.disable('scrollZoom');

        }


        

  })();

});