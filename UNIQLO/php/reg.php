<?php
include "conn.php";
if(isset($_POST['pass'])){
    $tell=$_POST['tel'];

    $password=$_POST['pass'];

    // header('location:http://10.31.158.18/UNIQLO/src/login.html');

    $conn->query("insert UNIQLO values(null,'$tell','$password',NOW())");
    
}
//后端获取前端的用户名和数据库进行匹配。
if(isset($_POST['tel'])){
    $tel=$_POST['tel'];
    $result=$conn->query("select * from UNIQLO where tell='$tel'");

    if($result->fetch_assoc()){
        echo true;
                // echo json_encode($result->fetch_assoc());
    }else{
        echo false;
    }
}


//根据form内部name值获取前端表单提交的值
// if(isset($_POST['submit'])){
//     $phone=$_POST['mobilephone'];
//     $password=sha1($_POST['password']);
//     $conn->query("insert UNIQLO values(null,'$phone','$password',NOW())");
//     //设置跳转的地址
//     header('location:http://10.31.158.18/UNIQLO/src/login.html');
// }
