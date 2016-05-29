$(document).ready(function(){
	var infowindow,
		marker,
		map
	map = new AMap.Map('gaodeMap', {
		center: [114.3062,34.788516],
		keyboardEnable:true,
		lang: 'zh_en',
		zoom: 13
	})
	AMap.plugin(['AMap.ToolBar', 'AMap.OverView'], function() {
		map.addControl(new AMap.OverView({isOpen: false}))
		map.addControl(new AMap.ToolBar())
	})
	marker = new AMap.Marker({
		position: [114.3062,34.788516],
		map: map
	})
	infowindow = new AMap.InfoWindow ({
		content: '<div lang="zh">河南省开封市花好月圆酒店</div>' +
			'<div lang="en-us">HuaHaoYueYuan Hotel, Kaifeng, China</div>',
		offset: new AMap.Pixel(0, -30),
		size: new AMap.Size(230, 0)
	})
	infowindow.open(map, marker.getPosition())
	AMap.event.addListener(marker, 'click', function() {
		if (infowindow.getIsOpen())
			infowindow.close()
		else
			infowindow.open(map, marker.getPosition())
	})
})
