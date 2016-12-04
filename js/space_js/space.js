(function() {
	(function() {
		var swiper_wrapper = $(".swiper-wrapper");
		$.ajax({
			type: "get",
			url: "../../php/code/space_php/space.php",
			async: true,
			success: function(obj) {
				var my = JSON.parse(obj);
				console.log(my);

				function creatDiv(arr) {
					for(var i = 0; i < arr.length; i++) {
						var div = $("<div/>");
						div.addClass("swiper-slide");
						div[0].data = arr[i];
						var a = $("<a/>"); //下面的添加a标签的href属性
						a.css("cursor", "pointer");
						var img = $("<img/>");
						img[0].src = "../../php/img/space/" + arr[i].space_img;
						img.css({
							display: "block",
							width: "100%"
						})
						a.append(img);
						div.append(a);
						swiper_wrapper.append(div);
					}
				}
				creatDiv(my);
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 30,
					loop: true,
					autoplay: 4000
				});
			}
		});
	})()
	$('.button').click(function() {
		window.location.href = "http://ad.juzilab.com/Index/calculate"
	})
	$('.fixed_bottom img').click(function() {
		window.location.href = "http://ad.juzilab.com/Index/calculate"
	})
	$(document).ready(function(e) {
		for(var i = 0; i < $('.list_container').length; i++) {
			$('.list_container')[i].style.height = ($(window).height()-160) + 'px';
		}
		height = $("body").height(); //获取内容高  
		screenheight = window.screen.availHeight; //获取屏幕高  
		bodyheight = document.body.clientHeight; //获取body高  
	});

	$(window).scroll(function() {
		scr = $(window).scrollTop();
		if(screenheight + scr > document.body.clientHeight - 100) {
			$('.fixed_bottom').slideUp('slow');
		} else {
			$('.fixed_bottom').slideDown('slow');
		}

	});
	document.getElementsByTagName("body")[0].onmousewheel = function(event) {
		scr = $(window).scrollTop();
		if(scr >= 0 && scr <= 470) {
			$('.fixed_left .icon1')[0].className = "icon1";
			$('.fixed_left .icon2')[0].className = "icon2";
			$('.fixed_left .icon3')[0].className = "icon3";
			$('.fixed_left .icon4')[0].className = "icon4";
		} else if(scr > 470 && scr <= 470 + $(window).height()) {
			$('.fixed_left .icon1')[0].className = "icon1 active";
			$('.fixed_left .icon2')[0].className = "icon2";
			$('.fixed_left .icon3')[0].className = "icon3";
			$('.fixed_left .icon4')[0].className = "icon4";
		} else if(scr > 470 + $(window).height() && scr <= 470 + $(window).height() * 2) {
			$('.fixed_left .icon1')[0].className = "icon1";
			$('.fixed_left .icon2')[0].className = "icon2 active";
			$('.fixed_left .icon3')[0].className = "icon3";
			$('.fixed_left .icon4')[0].className = "icon4";
		} else if(scr > 470 + $(window).height() * 2 && scr <= 470 + $(window).height() * 3) {
			$('.fixed_left .icon1')[0].className = "icon1";
			$('.fixed_left .icon2')[0].className = "icon2";
			$('.fixed_left .icon3')[0].className = "icon3 active";
			$('.fixed_left .icon4')[0].className = "icon4";
		} else if(scr > 470 + $(window).height() * 3 && scr <= 470 + $(window).height() * 4) {
			$('.fixed_left .icon1')[0].className = "icon1";
			$('.fixed_left .icon2')[0].className = "icon2";
			$('.fixed_left .icon3')[0].className = "icon3";
			$('.fixed_left .icon4')[0].className = "icon4 active";
		} else if(scr > 470 + $(window).height() * 4) {
			$('.fixed_left .icon1')[0].className = "icon1";
			$('.fixed_left .icon2')[0].className = "icon2";
			$('.fixed_left .icon3')[0].className = "icon3";
			$('.fixed_left .icon4')[0].className = "icon4";
		}
	}
	$('.icon1').click(function() {
		$('html, body').animate({
			scrollTop: 670
		}, 300);
		$('.fixed_left .icon1')[0].className = "icon1 active";
		$('.fixed_left .icon2')[0].className = "icon2";
		$('.fixed_left .icon3')[0].className = "icon3";
		$('.fixed_left .icon4')[0].className = "icon4";
	});
	$('.icon2').click(function() {
		$('html, body').animate({
			scrollTop: 670 + $(window).height()
		}, 300);
		$('.fixed_left .icon2')[0].className = "icon2 active";
		$('.fixed_left .icon1')[0].className = "icon1";
		$('.fixed_left .icon3')[0].className = "icon3";
		$('.fixed_left .icon4')[0].className = "icon4";
	});
	$('.icon3').click(function() {
		$('html, body').animate({
			scrollTop: 670 + $(window).height() * 2
		}, 300);
		$('.fixed_left .icon3')[0].className = "icon3 active";
		$('.fixed_left .icon1')[0].className = "icon1";
		$('.fixed_left .icon2')[0].className = "icon2";
		$('.fixed_left .icon4')[0].className = "icon4";
	});
	$('.icon4').click(function() {
		$('html, body').animate({
			scrollTop: 670 + $(window).height() * 3
		}, 300);
		$('.fixed_left .icon4')[0].className = "icon4 active";
		$('.fixed_left .icon1')[0].className = "icon1";
		$('.fixed_left .icon2')[0].className = "icon2";
		$('.fixed_left .icon3')[0].className = "icon3";
	});
})()