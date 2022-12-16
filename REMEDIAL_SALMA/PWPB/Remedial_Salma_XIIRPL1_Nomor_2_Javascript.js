var depth = 31
var day = 0;
for(let climb = 0; climb <= depth;) {
    day+=1;
    climb += 7;
    if (climb >= depth){
        break;
    }
    climb-=2
}
console.log(day);