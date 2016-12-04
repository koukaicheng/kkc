(function(){
	var caret = $(".caret");
	console.log(caret);
	//融资服务
	var rzfu = $(".rzfu");
	var rzfu_menu = $(".rzfu_menu");
	var rzfu_state = false;
	//品牌活动
	var pphd = $(".pphd");
	var pphd_menu = $(".pphd_menu");
	var pphd_state = false;
	rzfu.on("click",function(){
		if (rzfu_state == false || pphd_state == true) {
			rzfu_menu.css("display","block");
			$(caret[0]).css("transform","rotateZ(135deg)");
			rzfu_menu.animate({
				height:"68px"
			},300,function(){
				rzfu_state = true;
			});
			$(caret[1]).css("transform","rotateZ(-45deg)");
			pphd_menu.animate({
				height:"0px"
			},300,function(){
				pphd_menu.css("display","none");
				pphd_state = false;
			});
		}
		if (rzfu_state == true) {
			$(caret[0]).css("transform","rotateZ(-45deg)");
			rzfu_menu.animate({
				height:"0px"
			},300,function(){
				rzfu_menu.css("display","none");
				rzfu_state = false;
			});
		}
	});
	pphd.on("click",function(){
		if (pphd_state == false || rzfu_state == true) {
			pphd_menu.css("display","block");
			$(caret[1]).css("transform","rotateZ(135deg)");
			pphd_menu.animate({
				height:"101px"
			},300,function(){
				pphd_state = true;
			});
			$(caret[0]).css("transform","rotateZ(-45deg)");
			rzfu_menu.animate({
				height:"0px"
			},300,function(){
				rzfu_menu.css("display","none");
				rzfu_state = false;
			});
		}
		if (pphd_state == true) {
			$(caret[1]).css("transform","rotateZ(-45deg)");
			pphd_menu.animate({
				height:"0px"
			},300,function(){
				pphd_menu.css("display","none");
				pphd_state = false;
			});
		}
	})
})()
	