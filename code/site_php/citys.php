<?php
	$city_name = $_GET["name"];
	$mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  }
  $mysql->query('set names utf8');
  $sqlstr = 'select * from site where site_area="'.$city_name.'"';
$result=$mysql->query($sqlstr);

$myArray = array();
//fetch_assoc：查询出每一条在result中的数据
while ($record = $result->fetch_assoc()) {
    array_push($myArray,$record);

}
$a = json_encode($myArray);
echo $a;
?>