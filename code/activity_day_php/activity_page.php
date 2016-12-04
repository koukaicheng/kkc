<?php
	$activity_name = $_GET["name"];
	$mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  }
  $mysql->query('set names utf8');
  if($activity_name == "全部活动"){
  	$sqlstr = 'select * from 0';
  }else{
  	$sqlstr = 'select * from index_activity where activity_sort="'.$activity_name.'"';
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