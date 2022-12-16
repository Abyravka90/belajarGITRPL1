function main() {
    var year = 1990;
    var month = 06;
    var day = 11;
     
    console.log(getWeekDay(year, month, day)); 
 }
 
 function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
     return names [d.getDay()]
 }
 var y = prompt('masukan tahun lahir anda')
 var m = prompt('masukan tahun bulan anda')
 var d = prompt('masukan tahun tanggal anda')
 var dDay = getWeekDay (y, (m-1),d)
 console.log(dDay)
 alert('hari lahir anda adalah hari' + dDay)