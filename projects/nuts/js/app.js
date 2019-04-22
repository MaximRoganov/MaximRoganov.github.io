function rightline(){
    var halfpad = ($(document).width() - $('.container').width()) / 2 ;
   $('.header-top-line-l').width(halfpad);
}
$(document).ready(function() {

    $('#hamb').on('click', function() {

        $('#menu').addClass('active');
        $('body').addClass('off');
    });

    $('#nav-close').on('click', function(e) {

        $('#menu').removeClass('active');
        $('body').removeClass('off');
        e.preventDefault();
    });





    $(document).on('click', function(e) {
        if ($('#menu').hasClass('active')) {

            if ($(e.target).closest('.left-menu').length || $(e.target).closest('.hamburger_wrap').length) {
                return;
            }
            $('#menu').removeClass('active');
            $('body').removeClass('off');
        }


    });
    /*    $('input[name="phone"]').mask('0 (000) 000 00 00');*/
    $('select').styler({
        selectSmartPositioning: false
    });
    $("input[type='radio']").styler();
    $("input[type='checkbox']").styler();
    $("input[type='file']").styler();









    $("#main-slider").slick({
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('#product-slider').fotorama({
  nav: 'thumbs',
  thumbwidth: 77,
  thumbheight: 55,
  thumbmargin: 20

});

rightline();

$(window).on('resize',rightline);

});