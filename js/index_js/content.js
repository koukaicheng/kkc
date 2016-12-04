(function(){
	//合作详情
	$.ajax({
		type:"get",
		url:"../../php/code/index_php/hdxq.php",
		async:true,
		success:function(obj){
			var my = JSON.parse(obj)
//			console.log(my);
			var hdxq = $("#hdxq");
			function creatDiv (arr) {
				for (var i = 0;i < arr.length;i++) {
					var div = $("<div/>");
					div.addClass("hdxq_list");
					div[0].data = arr[i];
					hdxq.append(div);
					var date = $("<span/>");
					date.addClass("hdxq_date");
					date.text(arr[i].activity_time);
					div.append(date);
					var title = $("<p/>");
					title.addClass("hdxq_title");
					title.text(arr[i].activity_title);
					div.append(title);
					var sort = $("<span/>");
					sort.addClass("hdxq_sort");
					sort.text(arr[i].activity_sort);
					div.append(sort);
					var img = $("<img/>");
					img.addClass("hdxq_img");
					img[0].src = "../img/index_img/dw.png";
					div.append(img);
					var address = $("<p/>");
					address.addClass("hdxq_address");
					address.text(arr[i].activity_address);
					div.append(address);
					var state = $("<a/>");
					state.addClass("hdxq_state");
					state.text(arr[i].activity_state);
					div.append(state);
					div.on("click",function(){
						window.location.assign(this.data.activity_url);
					})
				}
			}
			creatDiv(my);
			var a = $("<a/>");
			a[0].href="activity_day.html?name=全部活动"
			a.text("全部活动");
			a.addClass("hdxq_a");
			hdxq.append(a);
		}
	});
	//合作公司
	var hover_title = $(".active");
	var partner_pic = $(".partner_pic");
	$.ajax({
		type:"get",
		url:"../../php/code/index_php/hzgs.php?name=战略伙伴",
		async:true,
		success:function(obj){
			var my = JSON.parse(obj)
			for (var j = 0;j < my.length;j++) {
				var hover = $("<a/>");
				hover.addClass("hover_a");
				partner_pic.append(hover);
				var img = $("<img/>");
				img[0].src = "../../php/img/index_hezuo/" + my[j].index_img;
				hover.append(img);
			}
		}
	});
	for (var i = 0;i < hover_title.length;i++) {
		$(hover_title[i]).on("mouseover",function(){
			var as = $(".hover_a");
			for (var a = 0;a < as.length;a++) {
				as[a].remove();
			}
			var title = this.innerHTML;
			$.ajax({
				type:"get",
				url:"../../php/code/index_php/hzgs.php?name="+title,
				async:true,
				success:function(obj){
					var my = JSON.parse(obj)
//					console.log(my);
					for (var j = 0;j < my.length;j++) {
						var hover = $("<a/>");
						hover.addClass("hover_a");
						partner_pic.append(hover);
						var img = $("<img/>");
						img[0].src = "../../php/img/index_hezuo/" + my[j].index_img;
						hover.append(img);
					}
				}
			});
			for (var f = 0;f < hover_title.length;f++) {
				$(hover_title[f]).css({
					color: "black",
					borderBottom:"none"
				})
			}
			$(this).css({
				color:"rgb(228,82,46)",
				borderBottom: "2px solid rgb(228,82,46)"
			})
		})
	}
	
	
})()
