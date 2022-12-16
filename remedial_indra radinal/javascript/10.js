function lulus(){
    const jumlah=0;
    nilai= [68,95,54,84,77,75,63,74,69,80,71,63]
    for(const s=0; s<nilai.length; s+=1){
        if(nilai[s]>=70){
            jumlah+=1;
        }
    }

    console.log('jumlah siswa ='+nilai.length)
    console.log('jumlah siswa yang lulus'+jumlah)
}
lulus()