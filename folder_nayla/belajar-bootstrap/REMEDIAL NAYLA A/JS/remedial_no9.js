var l = prompt('masukan nilai luas alas', '');
var t = prompt('masukan nilai tinggi', '');
var volume = 0.3*l*t;
alert('hasil =' +volume)
window.onload = function(){
    var btn = document.getElementById('demo');
    btn.addEventListener("click",myFunction);

    function myFunction(){
        alert('hasil' +volume);
        btn.removeEventListener("click", myFunction);
    }
    };