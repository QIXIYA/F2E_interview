<?php
include "conn.php";
if(isset($_POST['tel']) && isset($_POST['pass'])){
    $tel=$_POST['tel'];
    $password=$_POST['pass'];

    $result=$conn->query("select * from UNIQLO where tell='$tel' and password='$password' ");
    if($result->fetch_assoc()){//登录成功
        echo true;
    }else{//登录失败
        echo false;
    }

}