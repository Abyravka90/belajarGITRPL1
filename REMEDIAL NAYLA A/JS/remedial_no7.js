function birthOfCanal(year, month, day)
{
    var namaHari = ['minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    var d = new Date(year, month, day)
    var day = d.getDay();
    return namaHari[day];
}
var y = prompt('masukan tahun lahir kamu')
var m = prompt('masukan bulan lahir kamu')
var d = prompt('masukan tanggal lahir')
var dDay = birthOfCanal(y,(m-1),d)
alert('hari lahir anda adalah '+dDay)