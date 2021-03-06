$(document).ready(function() {
	// Prevent saving images
	$(document).on('contextmenu.img', 'img', false)
	// Internationalization
	if (navigator.language.indexOf('zh') === 0) {
		$(':lang(zh)').show()
		$('[lang="en-us"]:not(html)').hide()
	} else if (navigator.language.indexOf('en-GB') === 0) {
		$(':lang(en-GB)').show()
		$(':lang(en-GB) + [lang="en-us"]').hide()
	}
})
