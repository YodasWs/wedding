$(document).ready(function(){
	var posMenu = $('nav').offset().top,
		padHeader = $('header').css('padding-bottom')
	if (padHeader) {
		$('header').css('padding-bottom', 'calc(' + padHeader + ' + ' + $('nav').outerHeight(true) + 'px)');
	} else {
		$('header').css('padding-bottom', $('nav').outerHeight(true) + 'px');
	}
	$(document).on('scroll.menu', function() {
		if ($(document).scrollTop() >= posMenu && $('nav.stuck').length == 0) {
			$('nav').addClass('stuck').removeClass('unstuck')
		} else if ($(document).scrollTop() < posMenu && $('nav.unstuck').length == 0) {
			$('nav').addClass('unstuck').removeClass('stuck')
		}
	}).on('scroll.paralax', function() {
		$('div.img').each(function() {
//			$(this).css('background-position', 
		})
	}).trigger('scroll')
})
