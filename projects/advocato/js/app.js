$(document).ready(function() {
    $('#feedback_slider').slick({
        slidesToShow: 5,
        arrows: false
    });


    $('#hamb').on('click',function(){
    	$('#menu').addClass('active');
    });
    $('#nav-close').on('click',function(e){

    	$('#menu').removeClass('active');
    	e.preventDefault();
    });
    
});