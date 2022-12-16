//mencair tau hari lahir

var year = prompt("Insert your year of birth ")
var month = prompt("Insert your month of birth "); //remember javascript starts from 0, so 0 = january
var day = prompt("Insert your date of birth ");

alert('So your birth day is '+getWeekDay(year, month, day)); 


function getWeekDay(year, month, day) {
var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date(year, (month-1), day); //month dikurang satu karena array mulai dari 0
var day = date.getDay()
return names[day]
}