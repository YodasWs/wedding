Math.randInt=function(min,max){var min=min||0,max=max||Number.MAX_SAFE_INTEGER;return Math.floor(Math.random()*(max-min+1))+min};
$(document).ready(function(){
	var flip = function() {
		$(this).flip()
		setTimeout(flip.bind(this), Math.randInt(5,10) * 1000)
	}
	$.fn.flip = function() {
		var $t = $(this)
			i = $t.children('img.active').index()
		if (i <= 0) i = $t.children('img').length
		$t.children('img.active').removeClass('active')
		$t.children('img:nth-child(' + i + ')').addClass('active')
	}
	$('figure').each(function() {
		if ($(this).children('img').length <= 1) return
		$(this).children('img:first-child').addClass('active')
		setTimeout(flip.bind(this), Math.randInt(5,10) * 1000)
		$(this).addClass('activated')
	})
})
