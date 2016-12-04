$(function() {
	$('.total_title div img').click(function(event) {
		if(event.target == $('.total_title div img')[0]) {
			$('.total_industry')[0].style.display = "block";
			$('.total_city')[0].style.display = "none";
			$('.total_progress')[0].style.display = "none";
			$('.total_title div img')[0].src = "../../php/img/enterProject/细分行业.png";
			$('.total_title div img')[1].src = "../../php/img/enterProject/融资阶段2.png";
			$('.total_title div img')[2].src = "../../php/img/enterProject/城市地区2.png";
		} else if(event.target == $('.total_title div img')[1]) {
			$('.total_industry')[0].style.display = "none";
			$('.total_city')[0].style.display = "none";
			$('.total_progress')[0].style.display = "block";
			$('.total_title div img')[0].src = "../../php/img/enterProject/细分行业2.png";
			$('.total_title div img')[1].src = "../../php/img/enterProject/融资阶段.png";
			$('.total_title div img')[2].src = "../../php/img/enterProject/城市地区2.png";

		} else if(event.target == $('.total_title div img')[2]) {
			$('.total_industry')[0].style.display = "none";
			$('.total_city')[0].style.display = "block";
			$('.total_progress')[0].style.display = "none";
			$('.total_title div img')[0].src = "../../php/img/enterProject/细分行业2.png";
			$('.total_title div img')[1].src = "../../php/img/enterProject/融资阶段2.png";
			$('.total_title div img')[2].src = "../../php/img/enterProject/城市地区.png";

		}
	});
});

(function() {
	var num_arr = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	];
	var type_arr = [
		[],
		[],
		[],
		[],
		[]
	];
	var city_arr = [
		[],
		[],
		[]
	];
	$.ajax({
		type: "get",
		url: "../../php/code/enterProject_php/enterProject2.php",
		async: true,
		success: function(obj) {
			var my = JSON.parse(obj);
			for(var i = 0; i < my.length; i++) {
				switch(my[i].project_xfhy) {
					case "智能硬件":
						num_arr[0].push(my[i].project_xfhy);
						break;
					case "文化娱乐":
						num_arr[1].push(my[i].project_xfhy);
						break;
					case "电子商务":
						num_arr[2].push(my[i].project_xfhy);
						break;
					case "社交网络":
						num_arr[3].push(my[i].project_xfhy);
						break;
					case "媒体门户":
						num_arr[4].push(my[i].project_xfhy);
						break;
					case "工具软件":
						num_arr[5].push(my[i].project_xfhy);
						break;
					case "金融":
						num_arr[6].push(my[i].project_xfhy);
						break;
					case "医疗健康":
						num_arr[7].push(my[i].project_xfhy);
						break;
					case "消费生活":
						num_arr[8].push(my[i].project_xfhy);
						break;
					case "企业服务":
						num_arr[9].push(my[i].project_xfhy);
						break;
					case "旅游户外":
						num_arr[10].push(my[i].project_xfhy);
						break;
					case "房产家居":
						num_arr[11].push(my[i].project_xfhy);
						break;
					case "游戏":
						num_arr[12].push(my[i].project_xfhy);
						break;
					case "在线教育":
						num_arr[13].push(my[i].project_xfhy);
						break;
					case "汽车交通":
						num_arr[14].push(my[i].project_xfhy);
						break;
					case "其他":
						num_arr[15].push(my[i].project_xfhy);
						break;
				}
				switch(my[i].project_rzjd) {
					case "未融资":
						type_arr[0].push(my[i].project_rzjd);
						break;
					case "种子/天使":
						type_arr[1].push(my[i].project_rzjd);
						break;
					case "Pre-A":
						type_arr[2].push(my[i].project_rzjd);
						break;
					case "A轮":
						type_arr[3].push(my[i].project_rzjd);
						break;
					case "B轮及以上":
						type_arr[4].push(my[i].project_rzjd);
						break;
				}
				switch(my[i].project_city) {
					case "上海":
						city_arr[0].push(my[i].project_city);
						break;
					case "武汉":
						city_arr[1].push(my[i].project_city);
						break;
					case "绍兴":
						city_arr[2].push(my[i].project_city);
						break;
				}
			}
			//细分行业
			$.ajax({
				type: "get",
				url: "../../php/code/enterProject_php/enterProject.php",
				async: true,
				success: function(obj) {
					var my = JSON.parse(obj);

					function creat(arr) {
						for(var i = 0; i < arr.length; i++) {
							var div = document.createElement('div');
							div.className = "dd"
							$('.total_industry')[0].appendChild(div);
							var img = document.createElement('img');
							div.appendChild(img);
							img.src = "../../php/img/enterProject/" + arr[i].title_img;
							var div2 = document.createElement('div');
							div2.className = "dd2";
							div.appendChild(div2);
							div2.innerHTML = arr[i].title_p;
							var br = document.createElement('br');
							div2.appendChild(br);
							var span = document.createElement('span');
							span.innerHTML = num_arr[i].length + "家";
							div2.appendChild(span);
							$(div).on("click", function() {
								window.location.assign("industry.html?type=细分行业&industry=" + num_arr[$(this).index()][0] + "&num=" + num_arr[$(this).index()].length)
							})
						}
					}
					creat(my)
				}
			});
			//融资阶段
			$.ajax({
				type: "get",
				url: "../../php/code/enterProject_php/rockect.php",
				async: true,
				success: function(obj) {
					var my = JSON.parse(obj);

					function creat(arr) {
						var add = ["未融资", "种子天使", "Pre－A", "A轮", "B轮及以上"];
						//	    	    console.log(add)
						for(var i = 0; i < arr.length; i++) {
							var a = $('<a/>');
							$('.total_progress').append(a);
							var div = $('<div/>');
							a.append(div);
							var img = $('<img/>');
							img[0].src = "../../php/img/enterProject/" + arr[i].rocket_img;
							div.append(img);
							var h1 = $('<h1/>');
							for(var j = 0; j < add.length; j++) {
								$(h1)[0].innerHTML = add[i] + "<br>" + "的公司";
							}
							div.append(h1);
							var span = $('<span/>');
							div.append(span);
							span.text(type_arr[i].length+"家");
							$(a).on("click", function() {
								window.location.assign("industry.html?type=融资阶段&industry=" + type_arr[$(this).index()][0] + "&num=" + type_arr[$(this).index()].length)
							})
						}
					}
					creat(my)
				}
			});
			//城市地区
			var Arr = [{
				bag: "shanghai.png",
				region: "上海",
				img: "address.png",
				title: "入驻上海桔子空间的公司"
			}, {
				bag: "wuhan.png",
				region: "武汉",
				img: "address.png",
				title: "入驻武汉桔子空间的公司"
			}, {
				bag: "shaoxing.png",
				region: "绍兴",
				img: "address.png",
				title: "入驻绍兴桔子空间的公司"
			}];
			creat(Arr);
			var div_city = $(".city");
			var city_nums = $(".ss")
			for (var i = 0;i < div_city.length;i++) {
				$(div_city[i]).on("click",function(){
					window.location.assign("industry.html?type=城市地区&industry=" + city_arr[$(this).index()][0] + "&num=" + city_arr[$(this).index()].length)
				})
				$(city_nums[i]).text(city_arr[i].length+"家")
			}
		}

	});

	function creat(arr) {
		for(var i = 0; i < arr.length; i++) {
			var div = $('<div/>');
			div.addClass("city");
			$('.total_city').append(div);
			var img = $('<img/>');
			img.addClass("ii")
			div.append(img);
			img[0].src = "../../php/img/enterProject/" + arr[i].bag;
			var dd = $('<div/>');
			div.append(dd);
			dd.addClass("dd");
			var img1 = $('<img/>');
			dd.append(img1);
			img1[0].src = "../../php/img/enterProject/" + arr[i].img;
			var span = $("<span/>");
			dd.append(span);
			span.text(arr[i].region);
			var strong = $('<strong/>');
			dd.append(strong);
			strong.text(arr[i].title);
			var ss = $("<span/>");
			strong.append(ss);
			ss.addClass("ss");
		}
	}

})()