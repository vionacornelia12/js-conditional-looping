# Javascript Dasar Looping

#### Note: To run exercise number 1, 4, and 5, you can open file 'num1.html', 'num4.html', and 'num5.html'. Thank you.

### Exercise 1
###### Code JavaScript di atas merupakan sebuah loop for yang digunakan untuk menampilkan tulisan "User ke - " diikuti dengan nomor dari 1 hingga 100 di halaman web menggunakan method document.write().
###### Pertama, variabel i dideklarasikan dengan nilai awal 1 menggunakan kata kunci let, kemudian dievaluasi setiap kali iterasi loop. Loop akan berjalan selama nilai i kurang dari atau sama dengan 100, dan setiap iterasi nilai i akan ditambahkan 1.
###### Setiap kali iterasi dilakukan, method document.write() digunakan untuk menampilkan teks "User ke - " diikuti dengan nilai i dan tag "br" untuk membuat baris baru. Ini akan menghasilkan daftar "User ke - 1", "User ke - 2", "User ke - 3", dan seterusnya hingga "User ke - 100".

### Exercise 2
###### Pada awalnya, sebuah variabel nilai_awal diinisialisasi dengan nilai 0.
###### Kemudian, for loop dijalankan sebanyak 10 kali dengan menggunakan variabel i sebagai penghitung loop. Setiap kali perulangan dijalankan, nilai nilai_awal akan ditambahkan dengan 2 dan hasilnya akan ditampilkan di console menggunakan fungsi console.log.
###### Pada akhir perulangan, nilai nilai_awal akan berubah sesuai dengan hasil penjumlahan sebanyak 10 kali. Oleh karena itu, pada setiap iterasi, nilai nilai_awal akan bertambah 2 menjadi 2, 4, 6, 8, 10, 12, 14, 16, 18, dan 20.

### Exercise 3
###### Pada awal perulangan, variabel i diinisialisasi dengan nilai 0.
###### Selama perulangan dijalankan, setiap nilai dari i akan diperiksa untuk menentukan apakah itu bilangan ganjil atau genap. Ini dilakukan dengan menggunakan operator modulo % untuk memeriksa apakah nilai i habis dibagi 2 atau tidak.
###### Jika sisa pembagian i dengan 2 sama dengan 0, maka i dianggap sebagai bilangan genap dan pesan "i merupakan bilangan genap" akan ditampilkan di console menggunakan fungsi console.log. Jika sisa pembagian i dengan 2 bukan 0, maka i dianggap sebagai bilangan ganjil dan pesan "i merupakan bilangan ganjil" akan ditampilkan di console.
###### Setelah perulangan selesai dijalankan, program akan menampilkan hasil pesan yang muncul di console untuk setiap bilangan dari 0 hingga 20. Oleh karena itu, hasil dari program ini adalah sebuah daftar bilangan dan apakah setiap bilangan tersebut ganjil atau genap.

### Exercise 4
###### Pertama-tama, variabel count diinisialisasi dengan nilai 0. Kemudian, fungsi showConfirm() dijalankan. Fungsi ini memanggil confirm() untuk menampilkan dialog konfirmasi di browser dan menanyakan apakah pengguna ingin mengulang atau tidak.
###### Jika pengguna memilih untuk mengulang (yaitu memilih OK), variabel count akan ditambahkan dengan 1 dan fungsi showConfirm() akan dipanggil kembali secara rekursif untuk menampilkan dialog konfirmasi lagi. Proses ini akan terus berlanjut sampai pengguna memilih untuk tidak mengulang lagi.
###### Jika pengguna memilih untuk tidak mengulang (yaitu memilih Cancel), fungsi showConfirm() akan keluar dari rekursi dan menampilkan pesan alert yang menyatakan berapa kali perulangan telah dilakukan (yaitu berapa kali pengguna memilih OK).
###### Dalam hal ini, pengguna dapat mengulang konfirmasi sebanyak yang mereka inginkan, dan setiap kali mereka memilih untuk mengulang, variabel count akan bertambah satu. Hal ini memungkinkan program untuk menghitung berapa kali pengguna memilih untuk mengulang.

### Exercise 5
###### Pada awalnya, sebuah konstanta answer diinisialisasi dengan nilai string "Impact Byte". Kemudian, program akan meminta pengguna untuk menebak kepanjangan dari singkatan IB dengan menggunakan fungsi prompt.
###### Ketika pengguna memberikan jawaban, program akan memeriksa apakah jawaban tersebut sama dengan nilai answer menggunakan operator !==. Jika jawaban yang diberikan oleh pengguna tidak sama dengan nilai answer, program akan terus meminta jawaban dari pengguna dengan menggunakan fungsi prompt dan memberikan pesan "Maaf, jawaban kamu salah. Silakan coba lagi".
###### Jika jawaban yang diberikan oleh pengguna sama dengan nilai answer, perulangan while akan berhenti dan program akan menampilkan pesan "Selamat jawaban kamu benar!" menggunakan fungsi alert.
###### Dalam hal ini, program akan meminta pengguna untuk terus mencoba menebak kepanjangan dari IB sampai jawaban yang benar diberikan. Ini dilakukan dengan menggunakan perulangan while dan memeriksa jawaban pengguna menggunakan operator !==.