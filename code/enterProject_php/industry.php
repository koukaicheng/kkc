<?php
	$type = $_GET["type"];
	$industry = $_GET["industry"];
	$num = $_GET["num"];
	$mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  }
  $mysql->query('set names utf8');
if($type == "细分行业"){
	$sqlstr = 'select * from enter_project where project_xfhy="'.$industry.'" limit '.$num.',10';
}
if($type == "融资阶段"){
	$sqlstr = 'select * from enter_project where project_rzjd="'.$industry.'" limit '.$num.',10';
}
if($type == "城市地区"){
	$sqlstr = 'select * from enter_project where project_city="'.$industry.'" limit '.$num.',10';
}
$result=$mysql->query($sqlstr);

$myArray = array();
//fetch_assoc：查询出每一条在result中的数据
while ($record = $result->fetch_assoc()) {
    array_push($myArray,$record);

}
$a = json_encode($myArray);
echo $a;
?>