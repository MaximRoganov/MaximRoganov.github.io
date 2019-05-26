$(document).ready(function() {
// checkbox
$( '.row_table input[type="radio"]' ).click(function() {
	$('.row_table .col-xs-4').removeClass('shadow_in');	
	$(this).parent().parent().parent().addClass('shadow_in');
});
// mask
  $('.phone_form').mask('+7 000 000-00-00');
// tabs 
$('.tabs_menu').pwstabs({
  effect: 'none'
});
//select menu
  $('.selectpicker').styler({
    selectPlaceholder:'Выберите тип фасовки'  
  });
// parallax

  if($('#setHeight').length) {
      var windowHeight = $(window).height(); 
      var heightToBlock = $('#setHeight').offset().top; 
      var toScrolled;
      var elementCssTop; 
      var parallaxArr = [];
      var parallaxArr2 = [];
      var parallaxArr3 = [];
      var parallaxArr4 = [];

      var olHeight = parseInt($('.parallax-bg1:last-child').css('top')) + 50;
      $('#setHeight').css({'height': olHeight + 'px'});

      $('.parallax-bg1').each(function() {
        parallaxArr.push(parseInt($(this).css('top')));
      });
      $('.parallax-bg2').each(function() {
        parallaxArr2.push(parseInt($(this).css('top')));
      });
      $('.parallax-bg3').each(function() {
        parallaxArr3.push(parseInt($(this).css('top')));
      });
      $('.parallax-bg4').each(function() {
        parallaxArr4.push(parseInt($(this).css('top')));
      });

      $(window).bind('scroll',function(e) {
        toScrolled = $(window).scrollTop() + windowHeight; // Высота моего окна
        parallaxScroll(toScrolled);
      });
  }
	function getValueTop(element) {
	  return parseInt($(element).css('top'));
	}
	function setValueTop(element, valueCss) {
	  $(element).css({'top':valueCss});

	}
 
function parallaxScroll(toScrolled) {

  if(toScrolled >= (heightToBlock) && toScrolled <= (heightToBlock  + $('#setHeight').height() + windowHeight) ) {

    var parallaxNum = toScrolled - heightToBlock;

    $('.parallax-bg1').each(function(index) {

      var number;
      for(var i = 0;i < parallaxArr.length;i++) {

          if(i == index) {
            number = parallaxArr[i];
          }
        }

      var valueCss = (0 - parallaxNum) / 10 + number;



      setValueTop(this, valueCss);

    });

    $('.parallax-bg2').each(function(index) { // parallax 2

      var number2;
      for(var i = 0;i < parallaxArr2.length;i++) {

          if(i == index) {
            number2 = parallaxArr2[i];
          }
        }

      var valueCss2 = (0 - parallaxNum) / 18 + number2;



      setValueTop(this, valueCss2);

    });

    $('.parallax-bg3').each(function(index) { // parallax 2

      var number3;
      for(var i = 0;i < parallaxArr3.length;i++) {

          if(i == index) {
            number3 = parallaxArr3[i];
          }
        }

      var valueCss3 = (0 - parallaxNum) / 60 + number3;



      setValueTop(this, valueCss3);

    });

    $('.parallax-bg4').each(function(index) { // parallax 2

      var number4;
      for(var i = 0;i < parallaxArr4.length;i++) {

          if(i == index) {
            number4 = parallaxArr4[i];
          }
        }
      var valueCss4 = (0 - parallaxNum) / 25 + number4;
      setValueTop(this, valueCss4);

    });
  } 
}
// slider
  $('.bxslider').bxSlider({
    slideWidth: 260,
    slideMargin: 134,
    maxSlides: 3,
    moveSlides: 1,
    pager: false
  });
// colorbox
$('a.gallery').colorbox({
  transition: 'elastic',
  title: false,
  close: '',
  opacity: 0.5
});

$('.btn3').colorbox({
  inline:true,
  title:'',
  href:'.pop_up',
  previous: '',
  next: '',
  current: '',
  close: '',
  className: 'pop_up2',
  opacity: 0.5
});
// google maps
function initialize() {     
  var LatLng = new google.maps.LatLng(48.63930899,63.03405762);
  var settings = {
    zoom: 5,
    scrollwheel: false,
    center: LatLng,
    mapTypeControl: false
  }

  var map = new google.maps.Map(document.getElementById("googleMap"), settings); 
  var companyPos = new google.maps.LatLng(55.3516375, 86.0417943);
  var companyPos2 = new google.maps.LatLng(45.0177111, 38.9599793);


  var markerNew = new google.maps.MarkerImage('images/marker.png',
  new google.maps.Size(26,39)
  );

  var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: markerNew
  });
  var companyMarker2 = new google.maps.Marker({
    position: companyPos2,
    map: map,
    icon: markerNew
  });
  var infobox = new InfoBox({
           content: document.getElementById("infobox"),
           pixelOffset: new google.maps.Size(-510, -38),
           zIndex: null,
           boxStyle: {
              opacity: 1
          },
          closeBoxMargin: "",
          closeBoxURL: ""
      });
  var infoboxTwo = new InfoBox({
           content: document.getElementById("infobox2"),
           pixelOffset: new google.maps.Size(40, -38),
           zIndex: null,
           boxStyle: {
              opacity: 1
          },
          closeBoxMargin: "",
          closeBoxURL: ""
      });
      infobox.open(map, companyMarker);
      infoboxTwo.open(map, companyMarker2);
}
if($('.map_console').length) {
  initialize() 
}

});