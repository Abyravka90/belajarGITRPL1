<?php
    //const 
    define("phi", 3,14);

    //volume Tabung
    $r = 7;
    $tTabung = 10;
    $volTabung = phi*pow($r, 7)*$tTabung;
       echo 'volume tabung=' .round($volTabung);

?>