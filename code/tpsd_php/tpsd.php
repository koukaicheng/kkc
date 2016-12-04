<?php
  $name = $_GET["name"];
  $mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  }
  $mysql->query('set names utf8');
  if($name=="全部"){
  	$sqlstr = 'select * from tpsd';
  }else{
  	$sqlstr = 'select * from tpsd where tpsd_list="'.$name.'"';
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