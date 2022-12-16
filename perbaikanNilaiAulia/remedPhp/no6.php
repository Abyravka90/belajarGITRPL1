<?php
$nilaiPwpb = 90;
if($nilaiPwpb>85){
    echo "A";
} else if ($nilaiPwpb>75 && $nilaiPwpb <=85) {
    echo "B";
} else if ($nilaiPwpb >=60 && $nilai <= 75) {
    echo "C";
} else {
    echo "D";
}
?>