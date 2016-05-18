$(document).ready(function(){
	var posMenu = $('nav').offset().top,
		padHeader = $('header').css('padding-bottom')
	// Determine Nav Height
	if (padHeader) {
		$('header').css('padding-bottom', 'calc(' + padHeader + ' + ' + $('nav').outerHeight(true) + 'px)');
	} else {
		$('header').css('padding-bottom', $('nav').outerHeight(true) + 'px');
	}
	// Sticky Nav
	$(document).on('scroll.menu', function(e) {
		e.posScroll = $(document).scrollTop()
		if ($(document).scrollTop() >= posMenu && $('nav.stuck').length == 0) {
			$('nav').addClass('stuck').removeClass('unstuck')
		} else if ($(document).scrollTop() < posMenu && $('nav.unstuck').length == 0) {
			$('nav').addClass('unstuck').removeClass('stuck')
		}
	}).trigger('scroll.menu')
	// Recalculate on Window Resize
	$(window).on('resize.scroll', function(){
		$(document).trigger('scroll')
	})
})
