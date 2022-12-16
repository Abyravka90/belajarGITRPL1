function main() {
    var depth = 500;
    var climb = 50;
var slip = 15;
var day = 0;
    for(workdone=0;workdone<=depth;) {
        day = day + 1;
        workdone=workdone+climb;
        if(workdone>=depth){
            break;
        }
        workdone = workdone - slip;
        
    }
 console.log(day)
}
main()