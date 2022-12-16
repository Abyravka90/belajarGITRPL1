var p = prompt('masukan nilai panjang', '');
var l = prompt('masukan nilai lebar', '');
var t = prompt('masukan nilai tinggi', '');
var luas = 0.33 /p*t*l; 
window.onload =     
function (){
    var btn = document.getElementById('demo');
    btn.addEventListener("click", myfunction, false);

    function myfunction(){
    alert (luas);
    btn.removeEventListener("click", myfunction, false);    
    }
}