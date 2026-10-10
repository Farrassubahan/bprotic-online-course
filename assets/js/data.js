const courseData = {
    "1": {
        title: "Recap Setup & Dasar PHP",
        content: `
            <!-- Setup Laragon -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                    <h2 class="fw-bold mb-0 text-primary">Setup Environment (Laragon & PHP 8.3)</h2>
                </div>
                <p class="text-light-50 fs-5">Sebelum kita mulai membuat program PHP, kita membutuhkan server lokal. Kita akan menggunakan <strong>Laragon versi 6</strong> karena sangat ringan, cepat, dan pemula-friendly.</p>
                
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <h5 class="fw-bold text-info"><i class="bi bi-download me-2"></i>Langkah Instalasi:</h5>
                        <ol class="text-light-50 lh-lg mb-0 mt-3 fs-6">
                            <li>Download Laragon versi 6.0.0 melalui link resmi berikut:<br>
                                <a href="https://github.com/leokhoa/laragon/releases/download/6.0.0/laragon-wamp.exe" target="_blank" class="btn btn-outline-info mt-2 mb-3"><i class="bi bi-cloud-arrow-down-fill me-2"></i>Download Laragon v6.0.0</a>
                            </li>
                            <li>Install aplikasi seperti biasa (Next sampai selesai).</li>
                            <li>Laragon versi ini sudah ter-bundling menggunakan <strong>PHP versi 8.1</strong> yang support untuk membuat web menggunakan php native.</li>
                            <li>Pastikan kamu juga sudah menginstal <strong>phpMyAdmin</strong> di dalam Laragon untuk manajemen database. (Pertemuan sebelumnya sudah dipraktekkan).</li>
                            <li>Klik tombol <strong>Start All</strong> pada aplikasi Laragon untuk menjalankan server Apache dan MySQL secara bersamaan.</li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- Dasar PHP & Output -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                    <h2 class="fw-bold mb-0 text-primary">Output Pertama PHP</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">PHP adalah bahasa server-side. File PHP wajib disimpan di dalam direktori <code>C:\\laragon\\www\\nama-folder</code> agar bisa dieksekusi oleh server lokal.</p>
                
                <div class="card bg-dark border-info mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <h5 class="fw-bold text-info mb-3"><i class="bi bi-lightbulb-fill me-2"></i>Cara Cepat Membuka Project di Laragon:</h5>
                        <p class="text-light-50 fs-6 mb-3">Laragon sangat canggih karena otomatis membuatkan domain lokal berakhiran <strong>.test</strong> (misal: <code>http://bprotic-online-course.test</code>) sehingga kita tidak perlu lagi mengetik <code>localhost</code>.</p>
                        <ol class="text-light-50 lh-lg fs-6 mb-0">
                            <li>Klik <strong>Kanan</strong> pada area kosong di aplikasi Laragon.</li>
                            <li>Arahkan kursor ke menu <strong>www</strong>.</li>
                            <li>Klik pada nama folder project kamu (misal: <strong>bprotic-online-course</strong>).</li>
                            <li>Browser akan otomatis terbuka dan mengeksekusi file <code>index.php</code> milikmu.</li>
                        </ol>
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (index.php):</h6>
                            <pre><code class="language-php">&lt;?php
// Mencetak output string sederhana ke layar
echo "Halo, Software Development!";
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil di Browser:</h6>
                            <div class="flex-grow-1 d-flex align-items-center justify-content-center bg-white text-dark rounded p-3 fs-5 fw-bold shadow-inner">
                                Halo, Software Development!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Variabel -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                    <h2 class="fw-bold mb-0 text-primary">Pengenalan Variabel ($)</h2>
                </div>
                <p class="text-light-50 fs-5">Variabel di PHP wajib diawali dengan tanda dollar <code>$</code>. Digunakan untuk menyimpan nilai di memori (seperti teks atau angka) agar dapat dipanggil berulang kali.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode:</h6>
                            <pre><code class="language-php">&lt;?php
$productName = "Laptop";
$price = 8000000;

echo $productName;
echo "&lt;br&gt;"; // Baris baru HTML
echo $price;
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil di Browser:</h6>
                            <div class="flex-grow-1 bg-white text-dark rounded p-3 font-monospace shadow-inner fs-5">
                                Laptop<br>8000000
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Array & Foreach -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 4</span>
                    <h2 class="fw-bold mb-0 text-primary">Array & Perulangan (Foreach)</h2>
                </div>
                <p class="text-light-50 fs-5">Array adalah wadah khusus yang memungkinkan kita menyimpan <strong>banyak data</strong> sekaligus. Untuk menampilkan semua datanya, cara termudahnya adalah menggunakan perulangan <code>foreach</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode:</h6>
                            <pre><code class="language-php">&lt;?php
$products = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

// $item akan mengambil nilai satu per satu dari array
foreach ($products as $item) {
    echo $item . "&lt;br&gt;";
}
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil di Browser:</h6>
                            <div class="flex-grow-1 bg-white text-dark rounded p-3 font-monospace shadow-inner fs-5">
                                Laptop<br>Mouse<br>Keyboard
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Custom Function -->
            <section class="mb-5">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 5</span>
                    <h2 class="fw-bold mb-0 text-primary">Fungsi Kustom (Format Harga)</h2>
                </div>
                <p class="text-light-50 fs-5">Selain fungsi bawaan PHP, kita dapat membuat blok fungsi sendiri agar kode bisa digunakan berulang-ulang tanpa perlu menuliskannya dari awal.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode:</h6>
                            <pre><code class="language-php">&lt;?php
function formatHarga($angka) {
    // Menggunakan fungsi bawaan number_format()
    return "Rp " . number_format($angka, 0, ',', '.');
}

echo formatHarga(8000000);
?&gt;</code></pre>
                                                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil di Browser:</h6>
                            <div class="flex-grow-1 d-flex align-items-center bg-white text-dark rounded p-3 font-monospace shadow-inner fs-4 fw-bold">
                                Rp 8.000.000
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Tugas Studi Kasus -->
            <section class="mt-5 pt-3">
                <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                    <div class="card-body p-5">
                        <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 1</h3>
                        <p class="text-light-50 mb-4 fs-5">Buatlah sebuah file PHP baru di dalam folder project Laragon kamu. Selesaikan studi kasus berikut dan presentasikan di pertemuan selanjutnya:</p>
                        
                        <div class="p-4 bg-dark-lighter rounded border border-secondary">
                            <ol class="text-light-50 lh-lg fs-5 mb-0">
                                <li class="mb-3">Buatlah variabel array bernama <code>$mahasiswa</code> yang berisi minimal <strong>3 nama temanmu</strong>.</li>
                                <li class="mb-3">Buatlah sebuah fungsi bernama <code>sapaMahasiswa($nama)</code> yang akan me-return string: <em>"Halo, selamat datang [nama_mahasiswa]!"</em>.</li>
                                <li class="mb-3">Gunakan perulangan <code>foreach</code> untuk melakukan iterasi pada array <code>$mahasiswa</code>.</li>
                                <li>Di dalam perulangan tersebut, panggil fungsi <code>sapaMahasiswa()</code> dan cetak hasilnya menggunakan <code>echo</code> dengan tambahan <code>&lt;br&gt;</code> agar tercetak rapi berurutan ke bawah.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        `
    },

    "2": {
        title: "Form, Database & CRUD PHP",
        content: `
            <!-- Pengantar Materi -->
            <section class="mb-5">
                <div class="card bg-dark-lighter border-info shadow-sm">
                    <div class="card-body p-4">
                        <h4 class="fw-bold text-info mb-3"><i class="bi bi-info-circle-fill me-2"></i>Apa yang akan kita pelajari?</h4>
                        <p class="text-light-50 fs-5 mb-3">Pada pertemuan kedua ini, kita akan membawa aplikasi PHP kita ke tingkat selanjutnya dengan membuatnya menjadi sistem yang interaktif. Kita akan belajar cara berinteraksi dengan pengguna dan mengelola data ke dalam database. Materi hari ini mencakup:</p>
                        <ul class="text-light-50 fs-5 mb-0 lh-lg">
                            <li><strong>Form Handling:</strong> Menerima dan menangkap input dari pengguna menggunakan form HTML.</li>
                            <li><strong>Validasi Data:</strong> Memastikan data yang diinput aman dan tidak kosong.</li>
                            <li><strong>Koneksi Database:</strong> Menghubungkan skrip PHP dengan database MySQL (via phpMyAdmin).</li>
                            <li><strong>Operasi CRUD:</strong> Inti dari semua aplikasi web modern! Kita akan belajar cara <strong class="text-white">C</strong>reate (menambah), <strong class="text-white">R</strong>ead (menampilkan), <strong class="text-white">U</strong>pdate (mengubah), dan <strong class="text-white">D</strong>elete (menghapus) data.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Tahap 1: Setup Database MySQL di Laragon -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                    <h2 class="fw-bold mb-0 text-primary">Setup Database MySQL (phpMyAdmin)</h2>
                </div>
                <p class="text-light-50 fs-5">Sebelum kita mulai <em>ngoding</em>, kita wajib menyiapkan tempat penyimpanan datanya terlebih dahulu. Kita akan menggunakan <strong>MySQL</strong> melalui <em>interface</em> <strong>phpMyAdmin</strong> yang sudah ada di dalam Laragon.</p>
                
                <div class="card bg-dark border-info mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <h5 class="fw-bold text-info mb-3"><i class="bi bi-database-gear me-2"></i>Langkah-langkah Membuat Database & Tabel:</h5>
                        <ol class="text-light-50 lh-lg fs-6 mb-0">
                            <li>Buka aplikasi Laragon, dan pastikan server sudah berjalan (klik <strong>Start All</strong> jika belum).</li>
                            <li>Klik tombol <strong>Database</strong> di menu aplikasi Laragon (otomatis akan membuka browser menuju <code>http://localhost/phpmyadmin</code>).</li>
                            <li>Login dengan username: <strong>root</strong> (password biarkan kosong).</li>
                            <li>Buat database baru: Klik menu <strong>New</strong> di sebelah kiri, ketik nama database <code>db_toko</code>, lalu klik <strong>Create</strong>.</li>
                            <li>Setelah berhasil, klik database <code>db_toko</code> di panel kiri, lalu buat tabel baru bernama <code>products</code> dengan jumlah kolom <strong>3</strong>, tekan <strong>Go/Create</strong>.</li>
                            <li>Isi detail ketiga kolom tersebut sebagai berikut:
                                <ul class="mt-2 mb-2 bg-dark-lighter p-3 rounded">
                                    <li><strong>id</strong> : tipe <code>INT</code>, centang opsi <code>A_I</code> (Auto Increment), dan set sebagai <code>Primary Key</code>.</li>
                                    <li><strong>name</strong> : tipe <code>VARCHAR</code>, panjang nilai (length) <code>100</code>.</li>
                                    <li><strong>price</strong> : tipe <code>INT</code>.</li>
                                </ul>
                            </li>
                            <li>Klik tombol <strong>Save</strong> di bagian bawah. Database dan tabel kamu sekarang sudah siap digunakan!</li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- Tahap 2: Koneksi DB -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                    <h2 class="fw-bold mb-0 text-primary">Koneksi PHP ke MySQL</h2>
                </div>
                <p class="text-light-50 fs-5">Setelah tabel siap, kita perlu membuat "jembatan" agar file PHP kita bisa berkomunikasi dengan MySQL. Buatlah file baru bernama <code>koneksi.php</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (koneksi.php):</h6>
                            <pre><code class="language-php">&lt;?php
$host = "localhost";
$user = "root";     // Default username phpMyAdmin di Laragon
$pass = "";         // Password default selalu kosong
$db   = "db_toko";  // Pastikan nama DB ini persis seperti yang kita buat tadi

// Membuka koneksi menggunakan fungsi bawaan PHP
$conn = mysqli_connect($host, $user, $pass, $db);

// Cek jika gagal terhubung
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
// echo "Koneksi Berhasil!"; // (Hapus atau komentari baris ini jika web sudah live)
?&gt;</code></pre>
                            <p class="text-info mt-3 mb-0 fs-6"><i class="bi bi-info-circle-fill me-2"></i><strong>Cara Memakai Koneksi:</strong> Nantinya, file <code>koneksi.php</code> ini akan kita panggil di file-file lain menggunakan instruksi <code>include 'koneksi.php';</code> setiap kali kita butuh mengambil atau menyimpan data ke database.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 3: Form & POST -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                    <h2 class="fw-bold mb-0 text-primary">Form HTML & Method POST</h2>
                </div>
                <p class="text-light-50 fs-5">Selanjutnya, kita butuh sebuah halaman antarmuka (UI) untuk user menginput data. Buatlah file <code>index.php</code> yang berisikan <strong>Form HTML</strong>. Di PHP, sangat disarankan menggunakan Method <code>POST</code> agar data yang dikirim lebih rahasia.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (index.php):</h6>
                            <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
    &lt;title&gt;Aplikasi CRUD Toko&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Tambah Produk Baru&lt;/h2&gt;
    &lt;!-- Atribut action="proses.php" berarti form akan dikirim ke file tersebut --&gt;
    &lt;form action="proses.php" method="POST"&gt;
        &lt;label&gt;Nama Produk:&lt;/label&gt;&lt;br&gt;
        &lt;input type="text" name="name" required&gt;
        &lt;br&gt;&lt;br&gt;
        
        &lt;label&gt;Harga:&lt;/label&gt;&lt;br&gt;
        &lt;input type="number" name="price" required&gt;
        &lt;br&gt;&lt;br&gt;
        
        &lt;button type="submit" name="submit"&gt;Simpan Data&lt;/button&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil di Browser:</h6>
                            <div class="flex-grow-1 bg-white text-dark rounded p-4 shadow-inner">
                                <label class="fw-bold mb-1">Nama Produk:</label>
                                <input type="text" class="form-control mb-3" placeholder="Masukkan nama..." disabled>
                                <label class="fw-bold mb-1">Harga:</label>
                                <input type="number" class="form-control mb-3" placeholder="Masukkan harga..." disabled>
                                <button class="btn btn-primary w-100" disabled>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 4: Menangkap & Insert -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 4</span>
                    <h2 class="fw-bold mb-0 text-primary">C (Create) - Menangkap Data & Insert</h2>
                </div>
                <p class="text-light-50 fs-5">Buat file baru bernama <code>proses.php</code>. Di sinilah kita "menangkap" input user (dengan <code>$_POST</code>), memvalidasinya, lalu menyimpannya secara permanen ke database kita menggunakan query <code>INSERT INTO</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (proses.php):</h6>
                            <pre><code class="language-php">&lt;?php
// 1. Panggil koneksi database
include 'koneksi.php';

// 2. Cek apakah tombol submit sudah ditekan
if (isset($_POST['submit'])) {
    // 3. Tangkap datanya dari form
    $nama = $_POST['name'];
    $harga = $_POST['price'];

    // 4. Validasi data agar tidak kosong
    if (empty($nama) || empty($harga)) {
        echo "Error: Data tidak boleh kosong!";
    } else {
        // 5. Eksekusi Query INSERT ke tabel products
        $sql = "INSERT INTO products (name, price) VALUES ('$nama', '$harga')";
        
        if (mysqli_query($conn, $sql)) {
            echo "Sukses: Data berhasil disimpan! &lt;br&gt;";
            echo "&lt;a href='index.php'&gt;Kembali ke Halaman Utama&lt;/a&gt;";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    }
}
?&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 5: Menampilkan Data -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 5</span>
                    <h2 class="fw-bold mb-0 text-primary">R (Read) - Menampilkan Data (SELECT)</h2>
                </div>
                <p class="text-light-50 fs-5">Setelah data sukses tersimpan, kita harus bisa menampilkannya kembali ke layar. Kita biasanya meletakkannya di bawah Form pada file <code>index.php</code> menggunakan perulangan <code>while</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-list-columns me-2"></i>Menampilkan Data (index.php):</h6>
                            <pre><code class="language-php">&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;body&gt;
    &lt;!-- Asumsikan Form Input ada di bagian atas ini --&gt;
    &lt;hr&gt;

    &lt;h2&gt;Daftar Produk&lt;/h2&gt;
    &lt;table border="1" cellpadding="10" cellspacing="0"&gt;
        &lt;tr&gt;
            &lt;th&gt;Nama Produk&lt;/th&gt;
            &lt;th&gt;Harga&lt;/th&gt;
            &lt;th&gt;Aksi&lt;/th&gt;
        &lt;/tr&gt;
        &lt;?php
        include 'koneksi.php';
        $result = mysqli_query($conn, "SELECT * FROM products");
        
        while ($row = mysqli_fetch_assoc($result)) {
            echo "&lt;tr&gt;";
            echo "&lt;td&gt;" . $row['name'] . "&lt;/td&gt;";
            echo "&lt;td&gt;Rp " . number_format($row['price'], 0, ',', '.') . "&lt;/td&gt;";
            echo "&lt;td&gt;
                    &lt;a href='edit.php?id=" . $row['id'] . "'&gt;Edit&lt;/a&gt; | 
                    &lt;a href='hapus.php?id=" . $row['id'] . "' onclick='return confirm(\"Yakin ingin menghapus?\")'&gt;Hapus&lt;/a&gt;
                  &lt;/td&gt;";
            echo "&lt;/tr&gt;";
        }
        ?&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Hasil Output Tabel List:</h6>
                            <div class="flex-grow-1 bg-white text-dark rounded p-4 shadow-inner overflow-auto">
                                <table class="table table-bordered table-striped mb-0">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>Nama Produk</th>
                                            <th>Harga</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Laptop</td>
                                            <td>Rp 8.000.000</td>
                                            <td><a href="#" class="text-decoration-none">Edit</a> | <a href="#" class="text-danger text-decoration-none">Hapus</a></td>
                                        </tr>
                                        <tr>
                                            <td>Mouse</td>
                                            <td>Rp 150.000</td>
                                            <td><a href="#" class="text-decoration-none">Edit</a> | <a href="#" class="text-danger text-decoration-none">Hapus</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 6: Update Delete -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 6</span>
                    <h2 class="fw-bold mb-0 text-primary">U & D - Update dan Delete</h2>
                </div>
                <p class="text-light-50 fs-5">Untuk <strong>U</strong>pdate dan <strong>D</strong>elete, kita perlu mengidentifikasi baris spesifik mana yang diubah. Biasanya kita menyisipkan ID data melalui URL, yang lalu ditangkap menggunakan <code>$_GET</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-pencil-square me-2"></i>Update Data (edit.php):</h6>
                            <pre><code class="language-php">&lt;?php
include 'koneksi.php';

// 1. Tangkap ID dan ambil data lama dari DB
$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM products WHERE id='$id'");
$data = mysqli_fetch_assoc($result);

// 2. Jika form disubmit, lakukan UPDATE
if (isset($_POST['update'])) {
    $nama = $_POST['name'];
    $harga = $_POST['price'];

    mysqli_query($conn, "UPDATE products SET name='$nama', price='$harga' WHERE id='$id'");
    header("Location: index.php"); // Kembali ke halaman utama
    exit;
}
?&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;h2&gt;Edit Produk&lt;/h2&gt;
    &lt;form action="" method="POST"&gt;
        &lt;label&gt;Nama:&lt;/label&gt;
        &lt;input type="text" name="name" value="&lt;?php echo $data['name']; ?&gt;"&gt;
        &lt;br&gt;&lt;br&gt;
        &lt;label&gt;Harga:&lt;/label&gt;
        &lt;input type="number" name="price" value="&lt;?php echo $data['price']; ?&gt;"&gt;
        &lt;br&gt;&lt;br&gt;
        &lt;button type="submit" name="update"&gt;Simpan Perubahan&lt;/button&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-12 mb-4">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-trash3 me-2"></i>Delete Data (hapus.php):</h6>
                            <pre><code class="language-php">&lt;?php
// Panggil koneksi
include 'koneksi.php';

// Menangkap parameter ID dari URL (misal: hapus.php?id=1)
$id = $_GET['id'];

// Eksekusi penghapusan data
$sql = "DELETE FROM products WHERE id='$id'";
mysqli_query($conn, $sql);

// Otomatis kembalikan user ke halaman utama setelah data dihapus
header("Location: index.php");
exit;
?&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tugas Studi Kasus -->
            <section class="mt-5 pt-3">
                <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                    <div class="card-body p-5">
                        <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 2</h3>
                        <p class="text-light-50 mb-4 fs-5">Berdasarkan pemahaman form handling, database, dan CRUD yang telah kamu pelajari di atas, buatlah <strong>Sistem Manajemen Pendaftaran Mahasiswa</strong> dengan rincian berikut:</p>
                        
                        <div class="p-4 bg-dark-lighter rounded border border-secondary">
                            <ol class="text-light-50 lh-lg fs-5 mb-0">
                                <li class="mb-3">Buat database baru bernama <code>db_kampus</code> di phpMyAdmin.</li>
                                <li class="mb-3">Buat tabel <code>mahasiswa</code> dengan kolom (id AI, nim, nama, jurusan).</li>
                                <li class="mb-3">Buat halaman <code>index.php</code> yang menampilkan <strong>Form Pendaftaran</strong>. Form tersebut harus memvalidasi agar <em>NIM, Nama, dan Jurusan</em> tidak boleh kosong sebelum disimpan ke database.</li>
                                <li class="mb-3">Tampilkan data Mahasiswa yang sudah mendaftar di bawah Form tersebut dalam format tabel HTML.</li>
                                <li><strong>(Tantangan Bonus)</strong>: Tambahkan tombol "Hapus" berwarna merah di ujung tabel untuk tiap mahasiswa, yang mengarahkan ke script hapus data menggunakan Method <code>$_GET</code>.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        `
    }

    
};
