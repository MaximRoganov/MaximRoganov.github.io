function getHalfWidth() {
    var containerWidth = $('.container').width();
    var docWidth = $('body').width();
    var currentHalf = (docWidth - containerWidth) / 2;
    return currentHalf;
}

$(document).ready(function() {
    if (getHalfWidth() > 110) {

        $('.img-outer-width').addClass('active');

    } else {

        $('.img-outer-width').removeClass('active');

    }

    $('.navbar li a').on('click', function(event) {
        event.preventDefault();

        var elemId = $(this).attr('href');

        $('html, body').animate({ scrollTop: $(elemId).position().top }, 2000);

    });

});

$(window).resize(function() {

    if (getHalfWidth() > 110) {

        $('.img-outer-width').addClass('active');

    } else {

        $('.img-outer-width').removeClass('active');

    }

});