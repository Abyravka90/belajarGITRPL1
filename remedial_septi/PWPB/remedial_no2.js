var depth = 5000;
var day = 0;
for(let climb = 0; climb <= depth;) {
    day+=1;
    climb += 50;
    if (climb >= depth){
        break;
    }
    climb-=15;
}
console.log(day);