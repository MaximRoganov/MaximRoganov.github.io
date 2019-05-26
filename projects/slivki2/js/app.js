
$(document).on("ready", function() {


$('.number_group .plus').on('click',function(){

var input =  $(this).parents('form').find('input[name="count"]');
var newVal = +input.val() + 1;

$(this).siblings('.number').text(newVal);
input.val(newVal);

});

$('.number_group .minus').on('click',function(){



var input =  $(this).parents('form').find('input[name="count"]');
if(input.val() == 1){
    return;
}
var newVal = +input.val() - 1;


$(this).siblings('.number').text(newVal);
input.val(newVal);

});


    // Карта
    $('input, select').styler();
    (function() {

        function initialize() {


            var styleArr = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#f0f4af" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }];

            var styledMap = new google.maps.StyledMapType(styleArr, {
                name: "Styled Map"
            });

            var LatLng = new google.maps.LatLng(55.846650, 37.453094);

            var settings = {
                zoom: 15,
                scrollwheel: false,
                center: LatLng,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }
            };

            var map = new google.maps.Map(document.getElementById("contact_card"), settings);

            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var pos = new google.maps.LatLng(55.846650, 37.453094);

            var markerNew = new google.maps.MarkerImage('../img/icons/dot.png',
                new google.maps.Size(34, 40)
            );

            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: markerNew
            });

        }

        if ($('#contact_card').length) {
            initialize();
        }

    })();


    $('#menu').slicknav({
        prependTo: "#mobile_menu",
        label:""
    });
    $('#mobile_menu_but').on('click',function(e){
        $('#menu').slicknav('toggle');
        e.preventDefault();
    });
    




});
