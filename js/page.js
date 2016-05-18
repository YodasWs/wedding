$(document).ready(function() {
	$(document).on('contextmenu.img', 'img', false)
	var lang = navigator.languages[0] || navigator.language
	if (lang.indexOf('zh') === 0) {
		$(':lang(zh)').show()
		$('[lang="en-us"]:not(html)').hide()
	} else if (lang.indexOf('en-GB') === 0) {
		$(':lang(en-GB)').show()
		$(':lang(en-GB) + [lang="en-us"]').hide()
	}
})
