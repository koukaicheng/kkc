<?php
$email = $_POST["email"];
$nickname = $_POST["nickname"];
$company = $_POST["company"];
$password = $_POST["password"];
  $mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  };
  $mysql->query('set names utf8');
  
$sqlstr = "insert into zhuce(zc_email,zc_name,zc_company,zc_password) values (\"".$email."\",\"".$nickname."\",\"".$company."\",\"".$password."\")";
  $result = $mysql->query($sqlstr);
//$b = ["state"=>$result];
//$c = json_encode($b);
//echo $c;
header("location: http://127.0.0.1/%E6%A1%94%E5%AD%90%E7%A9%BA%E9%97%B4/html/html/index.html");
 ?>
