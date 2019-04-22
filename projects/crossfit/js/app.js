function getHalfWidth() {
    var containerWidth = $('.container').width();
    var docWidth = $('body').width();
    var currentHalf = (docWidth - containerWidth) / 2;
    return currentHalf;
}
$(document).ready(function() {

    $('.navbar li a').on('click', function(event) {
        event.preventDefault();

        var elemId = $(this).attr('href');

        $('html, body').animate({ scrollTop: $(elemId).position().top }, 2000);

    });




    $('.header-bottom-bg').width(getHalfWidth() + $('.header-bottom-right').width());
    $('.header-bottom-title-dupl').height($('.header-bottom-title').outerHeight());

    $(window).on('resize', function() {
        $('.header-bottom-bg').width(getHalfWidth() + $('.header-bottom-right').width());
        $('.header-bottom-title-dupl').height($('.header-bottom-title').outerHeight());
    });



    $('.gallery-item-link').magnificPopup({
        type: 'image'
        // other options
    });



    $('.our-clients-bottom-content-items').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000
            }
        }]
    });

    $('#clients-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        adaptiveHeight:true
    });


    $('.bottom-content-link').click(function(event) {
        event.preventDefault();
        var slideno = $(this).data('slide');
        $('#clients-slider').slick('slickGoTo', slideno - 1);
    });




    var highlightColor = '#0f0f0f',
        $table = $('.table-content-table'),
        previousColumnIndex;


    $table.on('mouseover', 'th, td', function() {
        var $cell = $(this),
            index = $cell.index();
        previousColumnIndex = $cell.index();
        index = previousColumnIndex;
        console.log($table.find('tr').children());

        $table.find('tr').each(function() {
            $(this).children().eq(index).css('background-color', highlightColor);
        });
    });
    $table.on('mouseout', 'th, td', function() {
        $table.find('tr').each(function() {
            $(this).children().eq(previousColumnIndex).css('background-color', '');
        });
    });







});
(function() {

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

})();