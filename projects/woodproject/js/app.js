function getHalfWidth() {
    var containerWidth = $('.container').width();
    var docWidth = $('body').width();
    var currentHalf = (docWidth - containerWidth) / 2;
    return currentHalf;
}
$(document).ready(function() {
    /*   (function() {

           function initialize() {

               var pos = new google.maps.LatLng(45.0175917, 39.0525518);

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
                   title: 'TEST'
               });

           }

           if ($('#map').length) {
               initialize();
           }

       })();*/



    /*$('#menu-hamb').on('click',function(){

        $('#left-menu').toggleClass('active');

    });
    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('#left-menu').removeClass('active');
    })

    $('.top-menu a').on('click', function(event) {
        event.preventDefault();

        var elemId = $(this).attr('href');

        $('html, body').animate({ scrollTop: $(elemId).position().top }, 2000);

    });*/
    $('#menu-hamb').on('click', function() {

        $('#left-menu').toggleClass('active');

    });
    $('#nav-close').on('click', function(e) {
        e.preventDefault();
        $('#left-menu').removeClass('active');
    })


});