(function() {
	var select = $(".select_category");
	var page = $(".tcdPageCode");
	var hdxq = $("#hdxq");

	function ajax_qq(value,num) {
		$.ajax({
			type: "get",
			url: "../../php/code/activity_day_php/activity.php?name="+value+"&num="+num,
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				function creatDiv(arr) {
					var lists = $(".hdxq_list");
					for(var i = 0; i < lists.length; i++) {
						lists[i].remove()
					}
					for(var i = 0; i < arr.length; i++) {
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
					var states = $(".hdxq_state");
					for(var i = 0; i < states.length; i++) {
						if(states[i].innerHTML == "已结束") {
							$(states[i]).css({
								background: "rgb(243,243,243)",
								color: "black"
							})
						}
					}
				}
				creatDiv(my);
			}
		});
	}

	function getvl(name) {
		var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
		if(reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
		return "";
	};
	var name = getvl("name");
//	console.log(name);

	function ajax_QQ(value) {
//		$(".prevPage").unbind("onclick");
//		$(".nextPage").unbind("onclick");
		page.empty();
		$.ajax({
			type: "get",
			url: "../../php/code/activity_day_php/activity_page.php?name=" + value,
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				var num1 = Math.floor(my.length / 10);
				if(num1 > 1) {
					page.empty();
					page.createPage({
						pageCount: num1 + 1,
						current: 1,
						backFn: function(p) {
							var a = (p - 1) * 10;
							console.log(p);
							ajax_qq(value, a);
						}
					});
				}
			}
		});
		ajax_qq(value,0);
	}
	ajax_QQ(name);
	select.val(name);
	select.on("change",function(){
		var spans = $(".spans");
		for (var i = 0;i < spans.length;i++) {
			$(spans[i]).remove()
		}
		value = this.value;
		ajax_QQ(value);
	})

})()