$(document).ready(function() {
	$('.h-nav__mobbtn').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		return false;
	});
});