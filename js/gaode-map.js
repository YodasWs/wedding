$(document).ready(function(){
	var map = new AMap.Map('gaodeMap', {
		keyboardEnable:true,
		lang: 'zh_en'
	}),
		marker
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
		});
	})
})
