<?php
	$zrz_name = $_POST["connact_name"];
	$zrz_phone = $_POST["connact_phone"];
	$zrz_email = $_POST["connact_email"];
	$zrz_company = $_POST["company_name"];
	$zrz_project = $_POST["project_name"];
	$zrz_description = $_POST["description"];
	$zrz_amount = $_POST["amount"];
	$zrz_financ = $_POST["financ_stage"];
	$zrz_amounto = $_POST["amount_o"];
  //由于上传过来的是图片，文件类型接受用$_FILES;
  // print_r ($_FILES);
  //print_r ($_POST);
  //获得临时文件路径
  	$arr = $_FILES["aaa"];
	$tmp = $arr["tmp_name"];
	$houzhui = extend($arr["name"]);
	$time = time().mt_rand(0,100);
	$timer = $time;
  	$mysql = new mysqli("localhost","root","","orangeSpace");
  	if ($mysql->connect_errno) {
    		die($mysql->connect_errno);
  	};
  	$mysql->query('set names utf8');
  	if(strlen($zrz_name)!=0){
  		$sqlstr = "insert into zrz(project_name,company_name,description,connact_name,connact_phone,connact_email,financ_stage,amount,amount_o,aaa) values (\"".$zrz_project."\",\"".$zrz_company."\",\"".$zrz_description."\",\"".$zrz_name."\",\"".$zrz_phone."\",\"".$zrz_email."\",\"".$zrz_financ."\",\"".$zrz_amount."\",\"".$zrz_amounto."\",\"".$timer."\")";
  	$result = $mysql->query($sqlstr);
	$a = move_uploaded_file($tmp,"../../../business_plan/{$timer}.{$houzhui}");
	header("location: http://127.0.0.1/%E6%A1%94%E5%AD%90%E7%A9%BA%E9%97%B4/html/html/index.html");
  	}
 	
  //获取文件类型后缀
function extend($file_name){
    $extend = pathinfo($file_name);
    $extend = strtolower($extend["extension"]);
    return $extend;
}


 ?>
