<?php
$hysq_tc = $_POST["category"];
$hysq_name = $_POST["connact_name"];
$hysq_phone = $_POST["connact_phone"];
$hysq_email = $_POST["connact_email"];
$hysq_wxh = $_POST["wechat"];
$hysq_company = $_POST["company_name"];
$hysq_post = $_POST["position"];
$hysq_industry = $_POST["industry"];
$hysq_city = $_POST["city"];
$hysq_tjr = $_POST["referee"];
$hysq_bz = $_POST["note"];
  $mysql = new mysqli("localhost","root","","orangeSpace");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  };
  $mysql->query('set names utf8');
  
$sqlstr = "insert into hysq(hysq_tc,hysq_name,hysq_phone,hysq_email,hysq_wxh,hysq_company,hysq_post,hysq_industry,hysq_city,hysq_tjr,hysq_bz) values (\"".$hysq_tc."\",\"".$hysq_name."\",\"".$hysq_phone."\",\"".$hysq_email."\",\"".$hysq_wxh."\",\"".$hysq_company."\",\"".$hysq_post."\",\"".$hysq_industry."\",\"".$hysq_city."\",\"".$hysq_tjr."\",\"".$hysq_bz."\")";
  $result = $mysql->query($sqlstr);
  $b = ["state"=>$result];
  $c = json_encode($b);
//echo $c;
header("location: http://127.0.0.1/%E6%A1%94%E5%AD%90%E7%A9%BA%E9%97%B4/html/html/index.html");
 ?>
