$(document).ready(function(){
	var infowindow,
		marker,
		map
	map = new AMap.Map('gaodeMap', {
		center: [114.3062,34.788516],
		keyboardEnable:true,
		lang: 'zh_en',
		zoom: 15
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
		content: "<h3>High moral map</h3><div>High Germany is China's leading digital map content, navigation and location-based services solutions provider.</div>",
		offset: new AMap.Pixel(0, -30),
		size: new AMap.Size(230,0)
	})
	AMap.event.addListener(marker, 'click', function() {
		if (infowindow.getIsOpen())
			infowindow.close()
		else
			infowindow.open(map, marker.getPosition())
	})
/*
	AMap.service('AMap.Geocoder', function() {
		geocoder = new AMap.Geocoder({
			city: "0371" // Kaifeng
		})
		 // Geocoding
		geocoder.getLocation("开封市花好月圆酒店", function (status, result) {
console.log(result)
			if (status === 'complete' && result.info === 'OK') {
				map.setCenter(result.geocodes[0].location)
				marker = new AMap.Marker({
					position: result.geocodes[0].location,
					map: map
				})
			}
		})
	})
/**/
})
