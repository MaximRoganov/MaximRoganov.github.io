var href;
$(document).on('ready',function(){

$('.colorbox').colorbox();


$('.catalog_nav_item').on('click',function(e){

$('.catalog_nav_item').removeClass('active');

$(this).addClass('active');

$('.catalog_products').hide();

href = $(this).attr('href');

$(href).show();

e.preventDefault();
});

});