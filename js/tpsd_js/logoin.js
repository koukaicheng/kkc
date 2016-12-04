(function() {
	$('#submit').click(function() {
		var email = $('#email').val();
		var username = $('#username').val();
		var company = $('#company').val();
		var password = $("#password").val();
		var password1 = $('#password1').val();
		if(email != '' && username != '' && company != '' && password != ''&& password1 != '') {
			if(email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
				if (password == password1) {
					return true;
					
				} else{
					alert("密码填写不正确");
					return false;
				}
			} else {
				alert("邮箱格式有误");
				return false;
			}
		} else {
			alert("请填写完整表单");
			return false;
		}
	});
	window.history.forward(1);
})()