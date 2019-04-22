$(document).ready(function() {
 $("#top-slider").slick({
        arrows: true,
        dots: false
    });
 (function() {

        function initialize() {

            var pos = new google.maps.LatLng(55.681551, 37.450914);

            var settings = {
                zoom: 17,
                scrollwheel: false,
                center: pos,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            };


            var map = new google.maps.Map(document.getElementById("map"), settings);




            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'ул. Наташи Ковшовой, д.15, Москва, 119361'
            });

        }

        if ($('#map').length) {
            initialize();
        }

    })();

});