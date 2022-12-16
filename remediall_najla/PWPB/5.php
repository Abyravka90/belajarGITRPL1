<?php

$username = readline("Masukkan user : ");
$password = readline("Masukkan password : ");

if ($username == 'admin' && $password == 'password') {
    echo 'Selamat datang di halaman admin';
    echo "\n";
}else{
    echo "Username & Password salah";
    echo "\n";
}


?>