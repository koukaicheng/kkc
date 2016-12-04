<?php
$name = $_GET["name"];
if(isset($_GET["kk"])){
	$obj = $_GET["kk"];	
};
$mysql = new mysqli("localhost","root","","orangeSpace");

 if ($mysql->connect_errno) {
   die($mysql->connect_errno);
 }
 $mysql->query('set names utf8');
 
 if($name=="xcsp"){
  	$sqlstr = "select * from xcsp where xchd_sx=\"".$obj."\"";
 }else{
 	$sqlstr = 'select * from '.$name;
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
