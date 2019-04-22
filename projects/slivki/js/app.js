$(document).ready(function(){




    $('#hamb').on('click', function() {

        $('#menu').toggleClass('active');
        $('body').toggleClass('off');
    });

    $('#hamb-close').on('click', function(e) {

        $('#menu').removeClass('active');
        $('body').removeClass('off');
        e.preventDefault();
    });



$('input[type="checkbox"]').styler();


  if($('#map-section').length) {

        ymaps.ready(init);

        var myMap, 
            myPlacemark;

        }

        function init(){ 

            myMap = new ymaps.Map("map-section", {
                center: [55.754998, 37.618174],
                zoom: 16,
                controls: []
            });
            
            myPlacemark = new ymaps.Placemark([55.754998, 37.618174], {}, {
              iconLayout: 'default#image',
                iconImageHref: 'img/icons/dot.png',
                iconImageSize: [30, 40], 
                iconImageOffset: [-30, -40] 
            });

            myMap.geoObjects.add(myPlacemark);

            myMap.controls.add('zoomControl');

          myMap.behaviors.disable('scrollZoom');

        }
});