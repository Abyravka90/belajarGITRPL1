function hari() {
    var dept=500;
    var climb=50;
    var tdr=15;
    var hari=0;
    for(workdone=0;workdone<=dept;) {
        hari=hari+1
        workdone=workdone+climb;
        if(workdone>=dept){
            break;
        }
        workdone = workdone - tdr;
    }
    console.log(hari)
}
main()