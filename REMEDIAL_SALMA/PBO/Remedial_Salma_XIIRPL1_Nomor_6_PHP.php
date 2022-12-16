<?
switch ($nilai){
    case 1:($nilai > 85);
    echo"A";
    break;
    case 2:($nilai > 75 && $nilai<=85);
    echo"B";
    break;
    case 3:($nilai >= 60 && $nilai <=75);
    echo"C";
    break;
    default:
    echo "D";
}
?>