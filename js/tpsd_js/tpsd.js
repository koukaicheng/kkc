(function() {
	var list_arr = [
		["OA系统", "项目管理", "团队IM", "文档管理"],
		["工商注册", "社保代缴", '商标注册', '法务咨询', '财务代账', '招聘服务', '电子设备租赁', '政策申报', '办公场地', '保险服务'],
		['客户服务', '新媒体', '视频推广', '地推', '消息推送', '广告平台', '用户调研', 'CRM', 'SEO', 'H5', '活动发布'],
		['云服务', '数据分析', '安全服务', '域名注册', 'SDK', '技术外包', '云测试'],
		['股权众筹', 'FA', '媒体报道', '股权投资', '路演平台']
	];
	var img_arr = [
		["rongziU.png", "houqinU.png", "jishuU.png", "xiaolvU.png", "yunyingU.png"],
		["rongzi.png", "houqin.png", "jishu.png", "xiaolv.png", "yunying.png"]
	];
	var lis = $(".title ul li");
	var detail = $(".detail");
	var list = $(".list");
	var num = $(".num");
	var name = $(".name");
	for(var i = 0; i < lis.length; i++) {
		$(lis[i]).on("click", function() {
			for(var j = 0; j < img_arr[1].length; j++) {
				$(".title ul li")[j].childNodes[1].src = "../img/tpsd_img/" + img_arr[0][j];
			}
			$('.title ul li').removeClass('active');
			$(".title .detail span").remove();
			$('.title').animate({
				height: '260px'
			});
			$(this).addClass("active");
			this.childNodes[1].src = "../img/tpsd_img/" + img_arr[1][$(this).index()];
			detail.css({
				display: "block"
			})
			for(var j = 0; j < list_arr[$(this).index()].length; j++) {
				var span = $("<span/>");
				span.text(list_arr[$(this).index()][j]);
				detail.append(span);
				span.on("click", function() {
					list.empty();
					var value = this.innerHTML;
					$.ajax({
						type: "get",
						url: "../../php/code/tpsd_php/tpsd.php?name="+value,
						async: true,
						success: function(obj) {
							var my = JSON.parse(obj);
							for(var i = 0; i < my.length; i++) {
								var a = $("<a/>");
								list.append(a);
								var div1 = $("<div/>");
								div1.addClass("list_content");
								a.append(div1);
								var div2 = $("<div/>");
								div2.addClass("list_logo");
								div1.append(div2);
								var img = $("<img/>");
								img[0].src = "../../php/img/tpsd_img/" + my[i].tpsd_img;
								div2.append(img);
								var h3 = $("<h3/>");
								h3.text(my[i].tpsd_title);
								div1.append(h3);
								var p = $("<p/>");
								p.text(my[i].tpsd_detail);
								div1.append(p);
								var span1 = $("<span/>");
								span1.text(my[i].tpsd_address);
								div1.append(span1);
								var span2 = $("<span/>");
								span2.addClass("keyword");
								span2.text(my[i].tpsd_type);
								div1.append(span2);
							}
							num.text(my.length);
						}
					});
					name.text(value);
				})
			}
		})
	}
	$.ajax({
		type: "get",
		url: "../../php/code/tpsd_php/tpsd.php?name=全部",
		async: true,
		success: function(obj) {
			var my = JSON.parse(obj);
			for(var i = 0; i < my.length; i++) {
				var a = $("<a/>");
				list.append(a);
				var div1 = $("<div/>");
				div1.addClass("list_content");
				a.append(div1);
				var div2 = $("<div/>");
				div2.addClass("list_logo");
				div1.append(div2);
				var img = $("<img/>");
				img[0].src = "../../php/img/tpsd_img/" + my[i].tpsd_img;
				div2.append(img);
				var h3 = $("<h3/>");
				h3.text(my[i].tpsd_title);
				div1.append(h3);
				var p = $("<p/>");
				p.text(my[i].tpsd_detail);
				div1.append(p);
				var span1 = $("<span/>");
				span1.text(my[i].tpsd_address);
				div1.append(span1);
				var span2 = $("<span/>");
				span2.addClass("keyword");
				span2.text(my[i].tpsd_type);
				div1.append(span2);
			}
			num.text(my.length)
		}
	});
})()