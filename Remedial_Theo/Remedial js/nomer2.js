function main() {
    var depth = parseInt(readLine(), 10);
    var climb = 50;
    var slip = 15;
    var day = 0;

    for (workdone=0; workdone<=depth;) 
        day = day + 1;
        workdone=workdone+climb;{
        
            if (workdone >=(depth)) {
        }
        workdone = workdone - slip
    }
    console.log(day)
}