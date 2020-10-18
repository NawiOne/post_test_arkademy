<h3>Nama : Nawirudin</h3>
<h3>Track : Fullstack Mobile</h3>
<h3>Batch : 17 - 1</h3>

<h4>Teori</h4>

 1. Perbedaan umum Library dan Framework yaitu, 
    jika libary adalah sekumpulan kode snippet yang sudah dibuat orang lain untuk mempermudah seorang programmer untuk membuat sebuah program, dan kita bisa memanggilnya dimana       saja. sedangkan Framework adalah kerangka kerja yang telah dibuat agar programmer tidak membuat kode dari 0. jika Framework sudah menyediakan kerangka program dan kita             mengisi kode untuk mengisi bagian program yang belum ada, Library tidak ada kerangka dan kita bebas menggunakannya. Biasanya dalam Framework, kita sudah dibuatkan berbagai         structur folder yang memang sudah ditentukan oleh framework tersebut.
    
 2. Perbedaan Working directory, Index, dan Head
    * Working directory adalah tempat menyimpan file-file perubahan dari sebuah repo di lokal komputer kita namun belum masuk repo git nya. dan disini kita bisa mengubah dari isi       file repo kita.
    * Index (staging area) adalah tempat menyimpan file dari working directory yang sudah siap untuk kita commit.
    * setelah perubahan file yang telah ada di Index kita commit, maka akan terkirim ke Head, dimana ini menandakan bahwa repo git telah sama dengan file lokal yang ada dikomputer. dan siap untuk di kirim (push) ke repo remote.
    
 3. untuk mengupdate remote repository dari local repository bisa menggunakan perintah git push <nama remote> <branch>. contoh : ``` git push origin master ```.
 
 4. http method
 
        * GET
        * HEAD
        * POST
        * PUT
        * DELETE
        * CONNECT
        * OPTIONS
        * TRACE
        
  5. mencari data menggunakan SQL bisa menggunakan query ``` SELECT user FROM users WHERE user = 'Arkademy';```
  
  6. perbedaan Authorization dan Authentication
        * Authentication adalah proses pembuktian identitas atau data dari seorang user untuk memvalidasi bahwa user tersebut benar-benar orang yang dimaksud
        * Authorization adalah hak akses atau layanan apa saja yang dapat di akses oleh user sesuai data yang telah dicek atau diverifikasi sebelumnya.
        
  7. Framework Express adalah sebuah framework dari node js yang digunakan untuk mengembangkan sebuah aplikasi web. sebenarnya kita bisa saja menggunakan murni nodejs tanpa  menggunakan Express. namun dengan adanya Expressjs, pengembangan akan jauh lebih cepat.
  
   8. Middleware adalah 
      sebuah software untuk mengubungkan bagian program yang berbeda. Middleware bisa berisi proses yang kemudian akan berlanjut ke bagian program lain. contoh penerapan  middleware bisa kita lihat di aplikasi ExpressJS yang biasanya digunakan utnuk cek Authorization sebuah user, atau untuk keperluan upload file ke database.

 9.  perbedaan Class component dan Functional component
        * Class Component menggunakan Class untuk membuat component,  Functional Component mennggunakan function untuk membuat component
        * Class Component memiliki state dan props, Functional Component memiliki props namun tidak memiliki state (bisa menggunakan react hooks)
        * Class Component mempunyai lifecycles component (siklus hidup component), Functional Component tidak memiliki lifecycles (bisa menggunakan react hooks)
        
 10. Redux adalah 
        library untuk state management yang bisa digunakan pada aplikasi berbasis javascript. Redux bisa diibaratkan seperti sebuah database disisi frontend. di redux kita bisa menyimpan kode untuk pemanggilan API, menyimpan data dari API, dan lain-lain. jika kita menggunakan react, redux sangat membantu kita untuk menghubungkan data atau state ke berbagai komponent yang berbeda.
  
11. Microservice adalah sebuah arsitektur dalam pengembangan sebuah aplikasi dimana aplikasi dibagi menjadi beberapa service. didalam aplikasi biasanya terdapat client side,server side, dan juga database. dalam arsitektur microservise, client side dan server side akan memiliki service yang berdiri sendiri, dan biasanya akan ada peran API untuk menghubungkan keduanya. 
  
 12. content-type adalah sebuah HTTP Headers yang berguna untuk mengindikasikan atau memberi tahu tipe konten dari sebuah sumber daya (resource).
  
 13. CDN (Content Delivery Network) adalah sekumpulan server yang biasanya terletak diberbagai lokasi. Tujuan adanya CDN ini adalah untuk mempercepat pengiriman data ke berbagai sumber (dalam hal ini adalah website) tanpa harus request ke server hosting utama. jadi misalkan kita request sebuah data dari sebuah website (misalkan kita requset file bootstrap cdn), nah website tersebut sudah menggunakan CDN yang lokasinya paling dekat dengan yang meminta request, jadi pengiriman data akan lebih dekat dan menghemat bandwidth. manfaat CDN yaitu mempercepat pengiriman data, menghemat bandwidth, menaikan kecepatan website, dan masih banyak lagi.
 
 14. Error CORS terjadi apabila 
 15. Perbedaan cookie, sessionStorage, dan localStorage yait
     * cookie adalah tempat penyimpanan didalam browser yang memiliki masa expired sesuai pengaturan yang kita buat (1 jam, 1 hari, dan lain-lain). biasanya cookie dipakai untuk menyimpan data login, atau yang lainnya.
     * sessionLogin berfungsi sama dengan cookie, namun data yang disimpan bersifat sementara dan akan hilang ketika browser ditutup.
     * localStorage juga sama berfungsi untuk menyimpan data di storage browser, namun localStorage tidak memiliki masa expired, dan data akan tetap ada meski browser ditutup atau komputer dimatikan. data localStorage bisa hilang jika kita memang sengaja menghapusnya dengan clear data browser atau menggunakan perintah program.
  
  
   
