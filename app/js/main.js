$(document).ready(function() {
	$('.h-nav__mobbtn').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		return false;
	});

	$('.f-buttons__bottom').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

	if ($(window).width() < 991) {
		$('.c-categories-original').on('click', function() {
			$('.c-name').removeClass('c-categories__active');
			$(this).addClass('c-categories__active');
			$('.c-categories-poddelka-b').hide();
			$('.c-categories-original-b').show();
		});
		$('.c-categories-poddelka').on('click', function() {
			$('.c-name').removeClass('c-categories__active');
			$(this).addClass('c-categories__active');
			$('.c-categories-original-b').hide();
			$('.c-categories-poddelka-b').show();
		});
	}

	$('.callback__input-phone').mask("(999) 999-9999");
	/*modal*/
	$('.c-card__slide-link').fancybox();
	$('.h-phone__callme').fancybox();
	$('.h-mobphone').fancybox();
	$('.c-trailers__info').fancybox();

	/*sliders*/
	$('.card-img__slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		autoHeight:true
	});
	$('.c-trailers__slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
	$('.c-photos__slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
	$('.c-card__slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
});