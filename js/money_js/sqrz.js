(function() {
	var up = document.getElementById("file");
//	up.onchange = function(){
//		var fileType = up.files[0].type.split("/")[1];
//		var fileSize = up.files[0].size;
//		console.log(fileType);
//		console.log(fileSize)
//	}
	
	
	$('#submit').click(function() {
		var project_name = $('.project_name').val();//项目名称
		var description = $('.description').val();//描述项目
		var connact_name = $('.connact_name').val();//姓名
		var position = $(".position").val();//职位
		var connact_phone = $('.connact_phone').val();//手机号码
		var connact_email = $('.connact_email').val();//邮箱
		var month = $(".month").val();//租赁月数
		var seat_num = $(".seat_num").val();//工位个数
		var up = document.getElementById("file");
		if(project_name != '' && description != '' && connact_name != '' && position != '' && connact_phone != '' && connact_email != '' && month != '' && seat_num != '') {
			if(connact_phone.length == 11 && connact_phone.match(/^[1][34578][0-9]{9}$/)) {
				if(connact_email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
					if(month.match(/^[0-9]{1,}$/g)) {
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
									rest.open('post', "../../php/code/money_php/sqrz.php", true);

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
						alert("输入的租赁月数有误")
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