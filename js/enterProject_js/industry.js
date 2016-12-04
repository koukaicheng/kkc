(function() {
	function getvl(name) {
		var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
		if(reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
		return "";
	};
	var type = getvl("type"); //类型
	var industry = getvl("industry");
	var num = getvl("num");
	var total_cont = $(".total_cont");
	var detial_list = $(".detial_list");
	//	console.log(detial_list)
	var page = $(".tcdPageCode");
	total_cont.text("相关公司:" + num + "个");
	if(type == "细分行业") {
		var divs = $(".xfhy div");
		divs.removeClass();
		for(var i = 0; i < divs.length; i++) {
			if(industry == divs[i].innerHTML) {
				$(divs[i]).addClass("active")
			}
		}
	}
	if(type == "融资阶段") {
		var divs = $(".rzjd div");
		divs.removeClass();
		for(var i = 0; i < divs.length; i++) {
			if(industry == divs[i].innerHTML) {
				$(divs[i]).addClass("active")
			}
		}
	}
	if(type == "城市地区") {
		var divs = $(".csdq div");
		divs.removeClass();
		for(var i = 0; i < divs.length; i++) {
			if(industry == divs[i].innerHTML) {
				$(divs[i]).addClass("active")
			}
		}
	}
	var num_value = Math.floor(num / 10);
	if(num_value >= 1) {
		page.createPage({
			pageCount: num_value + 1,
			current: 1,
			backFn: function(p) {
				$(".detial_list tr").remove();
				var a = (p - 1) * 10;
				console.log(a)
				$.ajax({
					type: "get",
					url: "../../php/code/enterProject_php/industry.php?type="+type+"&industry="+industry+"&num="+a,
					async: true,
					success: function(obj) {
						var my = JSON.parse(obj);
						console.log(my)
						for(var i = 0; i < my.length; i++) {
							var tr = $("<tr/>");
							detial_list.append(tr);
							var td1 = $("<td/>");
							tr.append(td1);
							var div1 = $("<div/>");
							td1.append(div1);
							var img = $("<img/>");
							img[0].src = "../../php/img/enterProject/" + my[i].project_img;
							div1.append(img);
							var div2 = $("<div/>");
							td1.append(div2);
							var h4 = $("<h4/>");
							h4.text(my[i].project_title);
							div2.append(h4);
							var p = $("<p/>");
							p.text(my[i].project_detail);
							div2.append(p);
							var td2 = $("<td/>");
							td2.text(my[i].project_xfhy)
							tr.append(td2);
							var td3 = $("<td/>");
							td3.text(my[i].project_rzjd)
							tr.append(td3);
							var td4 = $("<td/>");
							td4.text(my[i].project_city)
							tr.append(td4);
							var td5 = $("<td/>");
							td5.text(my[i].project_state)
							tr.append(td5);
						}
					}
				});
			}
		});
		$.ajax({
			type: "get",
			url: "../../php/code/enterProject_php/industry.php?type=" + type + "&industry=" + industry + "&num=0",
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				for(var i = 0; i < my.length; i++) {
					var tr = $("<tr/>");
					detial_list.append(tr);
					var td1 = $("<td/>");
					tr.append(td1);
					var div1 = $("<div/>");
					td1.append(div1);
					var img = $("<img/>");
					img[0].src = "../../php/img/enterProject/" + my[i].project_img;
					div1.append(img);
					var div2 = $("<div/>");
					td1.append(div2);
					var h4 = $("<h4/>");
					h4.text(my[i].project_title);
					div2.append(h4);
					var p = $("<p/>");
					p.text(my[i].project_detail);
					div2.append(p);
					var td2 = $("<td/>");
					td2.text(my[i].project_xfhy)
					tr.append(td2);
					var td3 = $("<td/>");
					td3.text(my[i].project_rzjd)
					tr.append(td3);
					var td4 = $("<td/>");
					td4.text(my[i].project_city)
					tr.append(td4);
					var td5 = $("<td/>");
					td5.text(my[i].project_state)
					tr.append(td5);
				}
			}
		});
	} else {
		$.ajax({
			type: "get",
			url: "../../php/code/enterProject_php/industry.php?type=" + type + "&industry=" + industry + "&num=0",
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				console.log(my)
				for(var i = 0; i < my.length; i++) {
					var tr = $("<tr/>");
					detial_list.append(tr);
					var td1 = $("<td/>");
					tr.append(td1);
					var div1 = $("<div/>");
					td1.append(div1);
					var img = $("<img/>");
					img[0].src = "../../php/img/enterProject/" + my[i].project_img;
					div1.append(img);
					var div2 = $("<div/>");
					td1.append(div2);
					var h4 = $("<h4/>");
					h4.text(my[i].project_title);
					div2.append(h4);
					var p = $("<p/>");
					p.text(my[i].project_detail);
					div2.append(p);
					var td2 = $("<td/>");
					td2.text(my[i].project_xfhy)
					tr.append(td2);
					var td3 = $("<td/>");
					td3.text(my[i].project_rzjd)
					tr.append(td3);
					var td4 = $("<td/>");
					td4.text(my[i].project_city)
					tr.append(td4);
					var td5 = $("<td/>");
					td5.text(my[i].project_state)
					tr.append(td5);
				}
			}
		});
	}
})()