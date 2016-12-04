<?php
	$sqrz_project = $_POST["project_name"];
	$sqrz_description = $_POST["description"];
	$sqrz_industry = $_POST["industry"];
	$sqrz_name = $_POST["connact_name"];
	$sqrz_position = $_POST["position"];
	$sqrz_phone = $_POST["connact_phone"];
	$sqrz_email = $_POST["connact_email"];
	$sqrz_month = $_POST["month"];
	$sqrz_seat_num = $_POST["seat_num"];
	$sqrz_space = $_POST["space"];
	$sqrz_financ_stage = $_POST["financ_stage"];
	$sqrz_origin = $_POST["origin"];
  //由于上传过来的是图片，文件类型接受用$_FILES;
  // print_r ($_FILES);
  //print_r ($_POST);
  //获得临时文件路径
  	$arr = $_FILES["file"];
	$tmp = $arr["tmp_name"];
	$houzhui = extend($arr["name"]);
	$time = time().mt_rand(0,100);
	$timer = $time;
  	$mysql = new mysqli("localhost","root","","orangeSpace");
  	if ($mysql->connect_errno) {
    		die($mysql->connect_errno);
  	};
  	$mysql->query('set names utf8');
  	if(strlen($sqrz_name)!=0){
  		$sqlstr = "insert into sqrz(project_name,description,industry,connact_name,position,connact_phone,connact_email,month,seat_num,file,space,financ_stage,origin) values (\"".$sqrz_project."\",\"".$sqrz_description."\",\"".$sqrz_industry."\",\"".$sqrz_name."\",\"".$sqrz_position."\",\"".$sqrz_phone."\",\"".$sqrz_email."\",\"".$sqrz_month."\",\"".$sqrz_seat_num."\",\"".$timer."\",\"".$sqrz_space."\",\"".$sqrz_financ_stage."\",\"".$sqrz_origin."\")";
  	$result = $mysql->query($sqlstr);
	$a = move_uploaded_file($tmp,"../../../business_plan/{$timer}.{$houzhui}");
	echo $a;
	header("location: http://127.0.0.1/%E6%A1%94%E5%AD%90%E7%A9%BA%E9%97%B4/html/html/index.html");
  	}
 	
  //获取文件类型后缀
function extend($file_name){
    $extend = pathinfo($file_name);
    $extend = strtolower($extend["extension"]);
    return $extend;
}


 ?>
