(function() {
	$('#botton').click(function() {
		var email = $('#email').val();
		var password = $("#password").val();
		if (email != '' && password != '') {
			$.ajax({
				type:"get",
				url:"../../php/code/tpsd_php/loginup.php",
				async:true,
				success:function(obj){
					var my = JSON.parse(obj);
					for (var i = 0;i < my.length;i++) {
						if (email == my[i].zc_email) {
							if (password == my[i].zc_password) {
								window.location.assign("index.html");
								return true;
							} else{
								alert("密码输入错误");
								return false;
							}
						} else{
							alert("邮箱账号错误");
							return false;
						}
					}
				}
			});
			
		} else{
			alert("请填写完整表单");
			return false;
		}
		window.history.forward(1);
	})
})()