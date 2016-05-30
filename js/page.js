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
	// Share on WeChat
	var shareData = {
//		'appid':appid,
		'img_url':'http://yodasws.github.io/wedding/img/engagement.jpg',
		'link':'http://yodasws.github.io/wedding/',
		'img_width':'639','img_height':'426',
		'desc':'Wedding. 2016.06.29',
		'title':'Sam & Jiaxin'
	}
	$(document).on('WeixinJSBridgeReady',function(){
		WeixinJSBridge.on('menu:share:appmessage', function(argv){
			WeixinJSBridge.invoke('sendAppMessage',shareData,function(res){
				_report('send_msg',res.err_msg)
			})
		})
		WeixinJSBridge.on('menu:share:timeline', function(argv){
			WeixinJSBridge.invoke('shareTimeline',shareData,function(res){
				_report('timeline',res.err_msg)
			})
		})
		WeixinJSBridge.on('menu:share:weibo',function(argv){
			WeixinJSBridge.invoke('shareWeibo',{
				'content':shareData.desc,
				'url':shareData.link,
			},function(res){
				_report('weibo',res.err_msg)
			})
		}, false)
	})
})
