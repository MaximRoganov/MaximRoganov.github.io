
$(document).bind('ready',function(){





	var allSlider = $('.all_relates_slider');
	allSlider.owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        loop:false,
        center:true,
        margin:0,
        touchDrag: false,
        mouseDrag: false,
        smartSpeed:1000,
         URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: '0',
        onInitialized:function(){
        	var holder = '';

           /* function addControls(){
                      $('.all_relates_bottom_wrap').append('<div class="all_realtes_next"></div>');
                      $('.all_relates_bottom_wrap').prepend('<div class="all_realtes_before"></div>');
                      
                    



                    var animTimer,
                        slider = $('.all_relates_bottom_slider');

              
                         
                    


                    var sliderleft = slider.position().left,
                        leftWidth = 0;

                  

                    $('.all_relates_slider').find('.owl-item').each(function(index){
                                if(index > 7){

                                     leftWidth = leftWidth + 85;

                                }
                               
                    });

                  



                      $('.all_realtes_before').bind('mouseenter',function() {
                    
                                    


                                 animTimer = setInterval(function(){

                                    
                                     if(sliderleft < 0 ){
                                       sliderleft =  sliderleft + 5;

                                        slider.css({'left':sliderleft});

                                    } 

                                 },50);

                      });

                    $('.all_realtes_before').bind('mouseleave',function() {
                    clearInterval(animTimer);

                      

                    });





                     $('.all_realtes_next').bind('mouseenter',function() {
                    

                                 animTimer = setInterval(function(){

                                    if( -leftWidth < sliderleft ){

                                        sliderleft =  sliderleft - 5;
                                        slider.css({'left':sliderleft});
                                   }
     

                                 },50);

                      });

                    $('.all_realtes_next').bind('mouseleave',function() {

                    clearInterval(animTimer);

                      

                    });








                }*/




        	$('.all_relates_slider').find('.owl-item').each(function(index,value){
        		if(index === 0){
        			holder = holder + '<div class="all_relates_bottom_slider_item active"><a href="#'+ index + '"></a></div>';
        		}else{
        			holder = holder + '<div class="all_relates_bottom_slider_item"><a href="#'+ index + '"></a></div>';
        		}
        		

        	});


        	$('.all_relates_bottom_slider').html(holder);


                
               /* if($('.all_relates_slider').find('.owl-item').length > 8){

                    $('.all_relates_bottom_slider').wrap('<div class="over_all_relates_bottom_slider"></div>');

                    addControls();
                }*/

                
          


        	
        },
         onTranslated:function(){
         		var indexof ='';
         	$('.all_relates_slider').find('.owl-item').each(function(){
         			if($(this).hasClass('active')){

         					
         					indexof = $(this).index();

         					$('.all_relates_bottom_slider_item').removeClass('active');
         					$('.all_relates_bottom_slider_item').eq(indexof).addClass('active');

         			}

         	});

         }
    });







/*$('.all_relates_bottom_slider').find('.all_relates_bottom_slider_item').click(function(){
	$('.all_relates_bottom_slider_item').removeClass('active');
	$(this).addClass('active');

});*/


    



	var big_carousel = $('.big_carousel');

	big_carousel.owlCarousel({
        animateOut: 'fadeOut',
		items:1,
		nav: true,
		navText: [],
		onInitialized :function(){

			big_carousel.prepend('<div class="left_pal"></div><div class="right_pal"></div><div class="top_pal"></div><div class="bottom_pal"></div><div class="left_pal_sec"></div><div class="right_pal_sec"></div><div class="top_pal_sec"></div><div class="bottom_pal_sec"></div>');
		
		}

	});


        	

	


	 $('.bottom_hash_slider').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'one_1',
        touchDrag: false,
        mouseDrag: false,
        smartSpeed:1000
    });

     $('.top_hash_slider_item').bind('click',function(){


                $('.top_hash_slider_item').removeClass('active');
                $(this).addClass('active');
                var indexTot = $(this).index(),
                    allWidth = $('top_hash_slider').width,
                    widthHolder = 0;

                    $('.top_hash_slider_item').each(function(index,value){

                            if(index < indexTot){

                                widthHolder = 26 + widthHolder + $(this).width();

                            }





                    });

                $('.top_hash_slider').css({'left':-widthHolder});

                
            });



     var owl = $('.slider_top');
	 owl.owlCarousel({
	 	 items:3,
	 	 nav: true,
	 	 startPosition:0,
	 	 touchDrag: false,
	 	  URLhashListener:true,
        mouseDrag: false,
        center: true,
        smartSpeed:1000,
        fluidSpeed:1000,
        navText: [],
        });


       owl.on('changed.owl.carousel', function(event) {

        var currentItem = event.item.index;
          

                $('.slider_top_item').find('.spec_class').removeClass('spec_class');
                $('.slider_top').find('.owl-item').eq(currentItem - 1).find('.big').addClass('spec_class');     
    });

        owl.on('initialized.owl.carousel', function(event) {

        var currentItem = event.item.index;

        alert(currentItem);

        $('.slider_top').find('.owl-item').eq(currentItem - 1).find('.big').addClass('spec_class');
           
    });






	

	var docsPads = ( $(window).width() - $('.container').width() ) / 2,
        breadcrmbBlock = $("#top_breadcrumb"),
        breadwidth = $('#top_breadcrumb').width(),
		otherwidth =  $('#top_breadcrumb').width() - ($('#top_breadcrumb').find('.current').width()-10),
        timer;

	

		breadcrmbBlock.css({'width':breadwidth,'left':-otherwidth + docsPads});
       

        breadcrmbBlock.bind('mouseenter',function(){


             

         timer = setTimeout(function() {
        
                        
                        breadcrmbBlock.css({'left': 0});
                         }, 500);
                        
               


                
            
        

            
        });
        breadcrmbBlock.bind('mouseleave',function(){
            clearTimeout(timer);
              breadcrmbBlock.css({'left': -otherwidth + docsPads});

          
            
        });
	

$('.big_cap').bind('mouseenter',function(){
	var parent = $(this).parents('.cat_item');
	parent.addClass('active');
});
$('.big_cap').bind('mouseleave',function(){
	var parent = $(this).parents('.cat_item');
	parent.removeClass('active');
});


function vacancyInit(){
    $('.vacancy_wrap').find('.vacncies_details').each(function(index){
        var height = $(this).height();
        $(this).attr({'data-height': height});

       

            $(this).height(height);
            if(index !== 0){

             $(this).addClass('closest');
            }

       
        


    }); 

}

function vacancyClick(){

    $('.vacancy_na').find('h3').unbind();
    $('.vacancy_na').find('h3').bind('click',function(){
        var element = $(this);

        $('.vacancy_wrap').find('.bordered_b').addClass('vacancy_na');
        $('.vacancy_wrap').find('.vacncies_details').addClass('closest');
      
if($.support.transition){


$("body").bind($.support.transition.end, '.closest', function(event){    
    
    $(this).unbind();
    element.parents('.vacancy').removeClass('vacancy_na');
    element.parents('.col-xs-12').find('.vacncies_details').removeClass('closest');
    var scrool = element.parent().offset().top;
    window.scroll(0,scrool);
});

}else{

    element.parents('.vacancy').removeClass('vacancy_na');
    element.parents('.col-xs-12').find('.vacncies_details').removeClass('closest');
    var scrool = element.parent().offset().top;
    window.scroll(0,scrool);



}

        vacancyClick();

       
        

});


}
vacancyInit();
vacancyClick();


$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 85,
    itemMargin: 0,
    asNavFor: '#slider',
    prevText: "",
    nextText: ""

  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
    prevText: "",
    nextText: ""

  });


});