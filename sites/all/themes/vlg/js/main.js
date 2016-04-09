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
	});

	$('.text-slider').slick ({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows:false,
		autoplay: false,
	});



	$(".v-grid-template__wrap , .scroll-block").mCustomScrollbar({
		theme:"rounded-dots-dark",
		scrollButtons: {enable:true}
	});

	$(".nav-btn").click(function(e){
		e.preventDefault;	
		$(this).toggleClass('active');
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

	new WOW().init();

	//

	/*$('.village-slider .village-pagin-nav a').click(function(e){
		e.preventDefault();

		var $index = $(this).parents('li').index();

		$('.village-slider').slick('slickGoTo', $index);
	});*/

	//

	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	//
	$('.info-text-btn').click(function(e){
		e.preventDefault();

		$(this).parents('.text-block').find('.dropdown').slideToggle();
	});
	// experiments
	//$('.village-nav a').hover(function(){if($(this).next().hasClass('submenu')){$(this).next().addClass('active')}});
	//$('.submenu.active').mouseout(function(){$(this).removeClass('active')});
	function windowSize(){
    if ($(window).width() <= '992'){
        $('.v-grid-template__list-img').height($(window).height()/2);
    } else {$('.v-grid-template__list-img').removeAttr('style');}
}
$(window).on('load resize',windowSize);

$('.page-node .village-pagin-nav .menu li a, .page-villages .villcat li a').click(function(){ var x = $(this).parent().parent().children();
	$('.village-slider').slick('slickGoTo',(x.index($(this).parent())));
	return false;
});
	
});})(jQuery, Drupal, this, this.document);

jQuery(document).ready(function() {
		jQuery('ul.sf-menu').superfish({
			delay:       1000,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
		});
	});