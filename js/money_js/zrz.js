(function() {
	$('#submit').click(function() {
		var company_name = $('.company_name').val();
		var project_name = $('.project_name').val();
		var description = $('.description').val();
		var connact_name = $('.connact_name').val();
		var connact_phone = $('.connact_phone').val();
		var connact_email = $('.connact_email').val();
		var amount = $(".amount").val();
		var up = document.getElementById("file");
		if(connact_name != '' && connact_phone != '' && connact_email != '' && company_name != '' && amount != '' && project_name != '' && description != '') {
			if(connact_phone.length == 11 && connact_phone.match(/^[1][34578][0-9]{9}$/)) {
				if(connact_email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
					if(amount.match(/^[0-9]{1,}$/g)) {

						if(up.value.length != 0) {
							var fileSize = up.files[0].size;
							if(fileSize <= 10000000) {
								var fileType = up.files[0].type.split("/")[1];
								if(fileType == "pdf" || fileType == "ppt" || fileType == "pptx" || fileType == "doc" || fileType == "docx") {
									var fd = new FormData();
									//想form表单中封装数据（图片等）;
									//格式：key,value
									//fd.append("file",up.files[0]);
									//如果在上传文件的同时需要更多的参数，服务器在接受非文件类型参数时是用post方式来接收
									//      fd.append("aaa","123");
									var rest = new XMLHttpRequest();
									rest.open('post', "../../php/code/money_php/zrz.php", true);

									rest.onreadystatechange = function(arr) {
										if(rest.readyState == 4 && rest.status == 200) {
											alert("上传成功，请点击确定");
										}
									}
									rest.send(fd);
									return true;
								} else {
									alert("上传计划书的格式不正确");
									return false;
								}
							} else {
								alert("上传文件过大,请上传小于10M的计划书");
								return false;
							}
						} else {
							alert("请上传商业计划书");
							return false;
						}

					} else {
						alert("输入的目标融资金额有误")
						return false;
					}
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
		window.history.forward(1); 
	})
})()