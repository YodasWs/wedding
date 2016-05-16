$(document).ready(function(){
	var posMenu = $('nav').offset().top,
		padHeader = $('header').css('padding-bottom'),
		frameRatio = 2 / 3,
		resizeFrame = function() {
			$(this).parent('div.img').css('height', $(this).height() * frameRatio + 'px')
		}
	// Set Good Frame Size on Img Load
	$('div.img').each(function() {
		var $img = $(this)
		$img.children('img').each(function() {
			if (this.complete) resizeFrame()
		}).on('load', resizeFrame)
	})
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
	// Parallax
	}).on('scroll.parallax', function(e) {
		var winHeight = $(window).height()
		$('div.img > img').each(function() {
			var $img = $(this),
				$par = $img.parent(),
				scrollTop, scrollBtm
			$par.offset = $par.offset().top
			scrollTop = $par.offset - winHeight
			$par.height = $par.height()
			if (e.posScroll + winHeight < $par.offset) return
			if (e.posScroll > $par.offset + $par.height) return
			scrollBtm = winHeight + $par.height - $('nav').outerHeight()
			if (scrollTop < 0) {
				scrollTop = 0
				scrollBtm = $par.offset + $par.height - $('nav').outerHeight()
			}
			$img.css({
				top: (scrollTop - e.posScroll) / scrollBtm * $img.height() * (1 - frameRatio) + 'px'
			})
		})
	}).trigger('scroll')
	// Recalculate on Window Resize
	$(window).on('resize.scroll', function(){
		$(document).trigger('scroll')
	}).on('resize.img', function() {
		$('div.img > img').each(resizeFrame)
	})
})
