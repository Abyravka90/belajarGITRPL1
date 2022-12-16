<?php
$star = "";

for($b=5; $b > 0; $b--){
    for ($c = 0; $c< $b; $c++){
        $star +="*";
    }
    
}
echo($star);
?>