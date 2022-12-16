function lulus(){
    let jumlah = (10);
    let nilai=[68,95,54,84,77,75,63,74,69,80,71,63]
    //for ini atau of
    for (let s of nilai) {
        if (s >= 70) {
          jumlah++;
        }
      }
      console.log(`jumlah siswa : ${nilai.length}`);
      console.log(`jumlah siswa yang lulus ${jumlah}`);
    };

lulus();