// Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
// Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
// Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " merupakan bilangan genap");
    } else {
      console.log(i + " merupakan bilangan ganjil");
    }
}