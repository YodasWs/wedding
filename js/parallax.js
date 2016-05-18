$(document).ready(function(){
	var frameRatio = 2 / 3,
		resizeFrame = function() {
			$(this).parent('figure.parallax').css('height', $(this).height() * frameRatio + 'px')
		}
	// Set Good Frame Size on Img Load
	$('figure.parallax').each(function() {
		var $img = $(this)
		$img.children('img').each(function() {
			if (this.complete) resizeFrame.apply(this)
		}).on('load', resizeFrame)
	})
	// Parallax
	$(document).on('scroll.parallax', function(e) {
		e.posScroll = $(document).scrollTop()
		var winHeight = $(window).height()
		$('figure.parallax > img').each(function() {
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
	}).trigger('scroll.parallax')
	// Recalculate on Window Resize
	$(window).on('resize.parallax', function() {
console.log($(window).width())
		if ($(window).width() < 400) {
			$('figure.parallax').removeClass('parallax').addClass('noparallax').css('height', '')
				.children('img').css('top', '')
		} else {
			$('figure.noparallax').removeClass('noparallax').addClass('parallax')
				.children('img').each(resizeFrame)
		}
	}).trigger('resize.parallax')
})
