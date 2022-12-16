function getweekday(year, mont, date){
    var name= ['sunday','tusday','wednesday','thursday','friday','saturday'];
    var date= new Date (year, mont, date);
    var day= date.getdDay()
    return names[day]
}

var y = prompt('masukan tahun lahir')
var m = prompt('masukan bulan lahir')
var d = prompt('masukan tanggal lahir')
var bDay = getweekday(y,(m-1),d)
console.log(bDay)