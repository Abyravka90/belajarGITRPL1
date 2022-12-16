var tabung = {
  jari: 7,
  tinggi: 21,
  PI: 3.14,
};
tabung.hasil = () => {
  return Math.round((1 / 2) * tabung.PI * Math.pow(tabung.jari, 2) * tabung.tinggi);
};

console.log(tabung.hasil());
