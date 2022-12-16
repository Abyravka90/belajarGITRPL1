alert("Luas Persegi Panjang");
var p = prompt("Masukkan Panjang");
var l = prompt("Masukkan Lebar");

window.onload = function () {

var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);
};

function myFunction() {
var hasil = alert(p * l);
btn.removeEventListener("click", myFunction);
return hasil;
}