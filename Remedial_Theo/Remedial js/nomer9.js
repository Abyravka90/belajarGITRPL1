var a = prompt("masukkan alas");
var t = prompt("masukkan tinggi");
var v = (1 / 3) * a * t;

window.onload =
function() {
    var btn = document.getElementById('demo')
    btn.addEventListener('click', myfunction, false)
    function myfunction () {
        alert(jumlah)
        btn.removeEventListener('click', myfunction, false)
    }
}