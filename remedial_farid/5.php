<?php

$username = readline("Masukkan username : ");
$password = readline("Masukkan password : ");

if ($username == 'admin' && $password == 'password') {
    echo 'Selamat datang ';
    echo "\n";
}else{
    echo "ERROR";
    echo "\n";
}


?>