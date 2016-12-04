(function() {
	$('#submit').click(function() {
		var company_name = $('.company_name').val();
		var project_name = $('.project_name').val();
		var description = $('.description').val();
		var financ_stage = $("input:radio[name='financ_stage']:checked").val();
		var connact_name = $('.connact_name').val();
		var connact_phone = $('.connact_phone').val();
		var connact_email = $('.connact_email').val();
		var category = $("input:radio[name='category']:checked").val();
		var city = $("input:radio[name='city']:checked").val();
		var position = $('.position').val();
		var industry = $('.industry').val();
		var wechat = $(".wechat").val();
		if(category != null) {
			if(category == '299') {
				if(connact_name != '' && connact_phone != '' && connact_email != '' && city != null && company_name != '' && industry != '' && position != '' && wechat != '') {
					if(connact_phone.length == 11 && connact_phone.match(/^[1][34578][0-9]{9}$/)) {
						if(connact_email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
							window.location.assign("http://127.0.0.1/%E6%A1%94%E5%AD%90%E7%A9%BA%E9%97%B4/html/html/index.html")
							return true;
						} else {
							alert("邮箱格式有误");
							return false;
						}
					} else {
						alert("手机位数有误");
						return false;
					}
				} else {
					alert("请填写完整表单");
					return false;
				}
			} else if(category == '999') {
				if(connact_name != '' && connact_phone != '' && connact_email != '' && city != null && company_name != '' && industry != '' && position != '' && wechat != '') {
					if(connact_phone.length == 11 && connact_phone.match(/^[1][34578][0-9]{9}$/)) {
						if(connact_email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
							return true;
						} else {
							alert("邮箱格式有误");
							return false;
						}
					} else {
						alert("手机位数有误");
						return false;
					}
				} else {
					alert("请填写完整表单");
					return false;
				}
			}
		} else {
			alert("请选择套餐类型");
			return false;
		}
		
	});
	window.history.forward(1); 
})()