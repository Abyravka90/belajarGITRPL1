<?php

$username = readline("Masukkan nama : ");
$password = readline("Masukkan password : ");
$umur = 19;

if ($umur < 18) {
    echo 'Kamu berhasil masuk';
    echo "\n";
}else{
    echo "Maaf kamu belum bisa masuk";
    echo "\n";
}


?>