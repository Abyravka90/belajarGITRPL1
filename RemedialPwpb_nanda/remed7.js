function getWeekDay(year, month, date){
    var names = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var date = new Date (year, month, date);
    var day = date.getDay()
    return names[day]
   }
  
   var y = prompt('masukan tahun lahir kamu')
   var m = prompt('masukan bulan lahir kamu')
   var d = prompt('masukan tanggal lahir kamu')
   var bDay = getWeekDay(y,(m-1),d)
   console.log(bDay)