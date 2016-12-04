(function(){
	var citys = $(".city_view");
	var areas = $(".area");
	var b = 0;
	for (var i = 0;i < citys.length;i++) {
		var city_name = citys[i].innerHTML;
		$.ajax({
			type:"get",
			url:"../../php/code/site_php/citys.php?name="+city_name,
			async:true,
			success:function(obj){
				var arr = JSON.parse(obj);
				console.log(arr);
				for (var j = 0;j < arr.length;j++) {
					var list = $("<div/>");
					list.addClass("list");
					$(areas[b]).append(list);
					var left = $("<div/>");
					left.addClass("left");
					list.append(left);
					var a = $("<a/>");
					a[0].href = arr[j].site_url;
					left.append(a);
					var h3 = $("<h3/>");
					a.append(h3);
					var img = $("<img/>");
					img.css("marginRight","15px")
					img[0].src = "../img/site.img/dw.png";
					img.addClass("img");
					h3.append(img);
					var p = $("<span/>");
					p.text(arr[j].site_title);
					p.css({
						display:"inline",
						cursor:"pointer"
					});
					h3.append(p);
					var num = $("<p/>");
					num.text(arr[j].site_num+"工位");
					left.append(num);
					var address = $("<p/>");
					address.text(arr[j].site_adress);
					left.append(address);
					var phone = $("<p/>");
					phone.text("联系电话："+arr[j].site_phone);
					left.append(phone);
					var name = $("<p/>");
					name.text("联系人："+arr[j].site_name);
					left.append(name);
					var right = $("<div/>");
					right.addClass("right");
					list.append(right);
					var image = $("<img/>");
					image[0].src = "../../php/img/site/"+arr[j].site_img;
					right.append(image);
				}
				b++;
			}
		});
	}
})()
