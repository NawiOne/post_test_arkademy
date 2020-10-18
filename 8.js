const cetak_gambar = (num) => {
  let str = "";
  if (num %2 === 0) {
    return "Angka harus bilangan ganjil";
  }

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i === Math.round(num / 2)) {
        str += " *";
      } else {
        if (j > 1 && j < num) {
          str += " =";
        } else str += " *";
      }
    }
    str += "\n";
  }
  return str
};

console.log(cetak_gambar(7));
console.log(cetak_gambar(5));
