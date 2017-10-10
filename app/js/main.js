$(document).ready(function() {
	$('.h-nav__mobbtn').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		return false;
	});

	/*sliders*/
	$('.c-trailers__slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true
	});
});