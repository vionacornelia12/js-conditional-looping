# Javascript Dasar Looping

### Exercise 1
###### Code JavaScript di atas merupakan sebuah loop for yang digunakan untuk menampilkan tulisan "User ke - " diikuti dengan nomor dari 1 hingga 100 di halaman web menggunakan method document.write().
###### Pertama, variabel i dideklarasikan dengan nilai awal 1 menggunakan kata kunci let, kemudian dievaluasi setiap kali iterasi loop. Loop akan berjalan selama nilai i kurang dari atau sama dengan 100, dan setiap iterasi nilai i akan ditambahkan 1.
###### Setiap kali iterasi dilakukan, method document.write() digunakan untuk menampilkan teks "User ke - " diikuti dengan nilai i dan tag "<br>" untuk membuat baris baru. Ini akan menghasilkan daftar "User ke - 1", "User ke - 2", "User ke - 3", dan seterusnya hingga "User ke - 100".

### Exercise 2
###### Pada awalnya, sebuah variabel nilai_awal diinisialisasi dengan nilai 0.
###### Kemudian, for loop dijalankan sebanyak 10 kali dengan menggunakan variabel i sebagai penghitung loop. Setiap kali perulangan dijalankan, nilai nilai_awal akan ditambahkan dengan 2 dan hasilnya akan ditampilkan di console menggunakan fungsi console.log.
###### Pada akhir perulangan, nilai nilai_awal akan berubah sesuai dengan hasil penjumlahan sebanyak 10 kali. Oleh karena itu, pada setiap iterasi, nilai nilai_awal akan bertambah 2 menjadi 2, 4, 6, 8, 10, 12, 14, 16, 18, dan 20.

### Exercise 3
###### Pada awal perulangan, variabel i diinisialisasi dengan nilai 0.
###### Selama perulangan dijalankan, setiap nilai dari i akan diperiksa untuk menentukan apakah itu bilangan ganjil atau genap. Ini dilakukan dengan menggunakan operator modulo % untuk memeriksa apakah nilai i habis dibagi 2 atau tidak.
###### Jika sisa pembagian i dengan 2 sama dengan 0, maka i dianggap sebagai bilangan genap dan pesan "i merupakan bilangan genap" akan ditampilkan di console menggunakan fungsi console.log. Jika sisa pembagian i dengan 2 bukan 0, maka i dianggap sebagai bilangan ganjil dan pesan "i merupakan bilangan ganjil" akan ditampilkan di console.
###### Setelah perulangan selesai dijalankan, program akan menampilkan hasil pesan yang muncul di console untuk setiap bilangan dari 0 hingga 20. Oleh karena itu, hasil dari program ini adalah sebuah daftar bilangan dan apakah setiap bilangan tersebut ganjil atau genap.