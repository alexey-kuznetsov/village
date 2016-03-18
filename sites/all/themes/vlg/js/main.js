(function ($, Drupal, window, document, undefined) {
$(document).ready(function () {	

	$('.village-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.village-slider .arrow__prev'),
		nextArrow: $('.village-slider .arrow__next'),

	});

	$('.village-img-slider').slick ({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows:false,
		fade: true,
		autoplay: false,
		autoplaySpeed: 2000,
		speed: 1000,
	})

	$(".v-grid-template__wrap").mCustomScrollbar({
		theme:"rounded-dots-dark",
		scrollButtons: {enable:true}
	});

	var video = document.getElementById('main-video');
	video.volume = 0.3;

   
	$(".nav-btn").click(function(){		
		$(".header__nav").toggleClass("flipInX");
		$(".header__nav").toggleClass("fadeOutUpBig");
		$(".header__nav").slideToggle(500);
	})
	

	$("#btn-mob").click(function(e){	
		e.preventDefault();

		$(this).toggleClass('active');		
		$('#overlay').fadeToggle();	

		$(".header__block").slideToggle(500);
		$(".content-wrap").toggleClass("move")
		$(".header__nav").toggleClass("active");
	});  

	$('#overlay').click(function(){
		$('#overlay').fadeOut();
		$('.header__nav,#btn-mob').removeClass('active');		
		$(".header__block").slideToggle(500);
		$(".content-wrap").toggleClass("move")
	});			


	if (window.innerWidth < 993){
		$(".header__nav").removeClass("fadeOutUpBig");

		$(".col__title").click(function(e){
			e.preventDefault();

			$(this).next(".nav__list").slideToggle(400);

			$(".col__title").not(this).next(".nav__list").slideUp();
		})
	};
});
})(jQuery, Drupal, this, this.document);
