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
    },

    // ==========================================
    // PERTEMUAN 3: CRUD PHP DENGAN MODAL & STRUKTUR MVC
    // ==========================================
    "3": {
        title: "CRUD PHP (Single Page with Modal & Arsitektur MVC)",
        subtitle: "Implementasi Create, Read, Update, Delete menggunakan Modal Bootstrap tanpa reload pindah halaman, dengan struktur modular menyerupai MVC.",
        content: `
            <!-- Pengantar Materi -->
            <section class="mb-5">
                <div class="card bg-dark-lighter border-info shadow-sm">
                    <div class="card-body p-4">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-layers-fill fs-2 text-info me-3"></i>
                            <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 3 Web?</h4>
                        </div>
                        <p class="text-light-50 fs-5 mb-3">
                            Di pertemuan ini, kita akan membangun aplikasi <strong>CRUD (Create, Read, Update, Delete)</strong> yang sesungguhnya. Operasi ini merupakan fondasi dasar dari seluruh sistem aplikasi web di dunia industri.
                        </p>
                        
                        <div class="row g-3 mt-1">
                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-info fw-bold"><i class="bi bi-window-stack me-2"></i>CRUD via Modal (Single Page)</h6>
                                    <p class="small text-light-50 mb-0">Pengguna tidak perlu bolak-balik berpindah halaman (misal ke <code>tambah.php</code> atau <code>edit.php</code>). Semua form muncul lewat popup <strong>Modal Bootstrap</strong> di halaman yang sama!</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-primary fw-bold"><i class="bi bi-diagram-3 me-2"></i>Struktur Menyerupai MVC</h6>
                                    <p class="small text-light-50 mb-0">Kode dipisahkan menjadi <code>config</code>, <code>models</code>, <code>actions</code>, dan <code>views</code> agar siswa terbiasa dengan konsep <em>Separation of Concerns</em> sebelum masuk ke Laravel.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-success fw-bold"><i class="bi bi-palette me-2"></i>Styling Modern Siap Pakai</h6>
                                    <p class="small text-light-50 mb-0">Tersedia styling CSS siap pakai untuk pemateri, tabel rapi, badge kategori, dan interaktivitas JavaScript untuk transfer data ke modal edit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 1: Setup Database & Tabel -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                    <h2 class="fw-bold mb-0 text-primary">Setup Database & Tabel di phpMyAdmin</h2>
                </div>
                <p class="text-light-50 fs-5">Buka <strong>phpMyAdmin</strong> melalui Laragon (klik tombol Database atau akses <code>http://localhost/phpmyadmin</code>), lalu jalankan SQL berikut pada menu <strong>SQL</strong>:</p>

                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h6 class="text-info fw-bold mb-0"><i class="bi bi-database me-2"></i>SQL Query (db_bprotic_toko):</h6>
                            <span class="badge bg-dark border border-secondary text-light">MySQL</span>
                        </div>
                        <pre><code class="language-sql">-- 1. Buat Database Baru
CREATE DATABASE IF NOT EXISTS db_bprotic_toko;
USE db_bprotic_toko;

-- 2. Buat Tabel Produk
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    harga INT NOT NULL,
    stok INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Isi Data Dummy Awal
INSERT INTO products (nama_produk, kategori, harga, stok) VALUES
('Laptop Asus Vivobook 14', 'Elektronik', 8500000, 12),
('Mouse Wireless Silent Logitech', 'Aksesoris', 180000, 30),
('Keyboard Mechanical RGB', 'Aksesoris', 450000, 18),
('Monitor Gaming 24 Inch 144Hz', 'Elektronik', 2100000, 8);</code></pre>
                    </div>
                </div>
            </section>

            <!-- Tahap 2: Struktur File Menyerupai MVC -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                    <h2 class="fw-bold mb-0 text-primary">Rekomendasi Struktur Folder (Arsitektur Menyerupai MVC)</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Buat folder project baru bernama <code>bprotic-crud</code> di dalam direktori Laragon kamu: <br>
                    <code>C:\\laragon\\www\\bprotic-crud\\</code>. Susun struktur file seperti berikut:
                </p>

                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <h6 class="text-info fw-bold mb-3"><i class="bi bi-folder-symlink me-2"></i>Pohon Struktur File:</h6>
                        <pre><code class="language-bash">C:\\laragon\\www\\bprotic-crud\\
├── config/
│   └── database.php        # [CONFIG] Koneksi database MySQL terpusat
├── models/
│   └── product_model.php   # [MODEL] Seluruh fungsi query SQL (SELECT, INSERT, UPDATE, DELETE)
├── actions/
│   └── product_action.php  # [CONTROLLER/ACTION] Pemroses input form POST & GET
├── assets/
│   ├── css/
│   │   └── style.css       # [CSS] Styling kustom UI modern & clean
│   └── js/
│       └── script.js       # [JS] Logika isi otomatis data ke Modal Edit
└── index.php               # [VIEW] Halaman utama (Tabel data, Modal Tambah, & Modal Edit)</code></pre>

                        <div class="row g-3 mt-3">
                            <div class="col-md-3">
                                <div class="p-3 bg-dark rounded border border-secondary text-center h-100">
                                    <span class="badge bg-secondary mb-2">config/</span>
                                    <h6 class="text-white fw-bold">Konfigurasi</h6>
                                    <p class="small text-light-50 mb-0">Hanya bertugas membuat koneksi database.</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="p-3 bg-dark rounded border border-secondary text-center h-100">
                                    <span class="badge bg-info text-dark mb-2">models/</span>
                                    <h6 class="text-info fw-bold">Model (Data)</h6>
                                    <p class="small text-light-50 mb-0">Hanya berurusan dengan SQL query. Tanpa HTML!</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="p-3 bg-dark rounded border border-secondary text-center h-100">
                                    <span class="badge bg-warning text-dark mb-2">actions/</span>
                                    <h6 class="text-warning fw-bold">Controller/Action</h6>
                                    <p class="small text-light-50 mb-0">Menerima form, memanggil model, lalu redirect.</p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="p-3 bg-dark rounded border border-secondary text-center h-100">
                                    <span class="badge bg-success mb-2">index.php</span>
                                    <h6 class="text-success fw-bold">View (Tampilan)</h6>
                                    <p class="small text-light-50 mb-0">Menampilkan tabel & modal dialog interaktif.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tahap 3: Implementasi File per File -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                    <h2 class="fw-bold mb-0 text-primary">Implementasi Kode Lengkap per File</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">Buat setiap file berikut di VS Code pada folder <code>C:\\laragon\\www\\bprotic-crud\\</code>:</p>

                <!-- File 1: config/database.php -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-info text-dark me-2">File 1</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-1 text-info"></i>config/database.php</strong>
                        </div>
                        <span class="small text-secondary">Koneksi Database MySQL</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>config</code>, lalu buat file <code>database.php</code>:</p>
                        <pre><code class="language-php">&lt;?php
// config/database.php
// Konfigurasi koneksi MySQL Laragon

$host = "localhost";
$user = "root";
$pass = "";
$db   = "db_bprotic_toko";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi Database Gagal: " . mysqli_connect_error());
}
?&gt;</code></pre>
                    </div>
                </div>

                <!-- File 2: models/product_model.php -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-primary me-2">File 2</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-1 text-primary"></i>models/product_model.php</strong>
                        </div>
                        <span class="small text-secondary">Model Query Database</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>models</code>, lalu buat file <code>product_model.php</code>:</p>
                        <pre><code class="language-php">&lt;?php
// models/product_model.php
// Kumpulan fungsi pengolahan data query produk

// 1. READ: Ambil seluruh data produk
function getAllProducts($conn) {
    $sql = "SELECT * FROM products ORDER BY id DESC";
    $result = mysqli_query($conn, $sql);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

// 2. READ: Ambil 1 produk berdasarkan ID
function getProductById($conn, $id) {
    $id = (int)$id;
    $sql = "SELECT * FROM products WHERE id = $id LIMIT 1";
    $result = mysqli_query($conn, $sql);
    return mysqli_fetch_assoc($result);
}

// 3. CREATE: Tambah produk baru
function createProduct($conn, $nama, $kategori, $harga, $stok) {
    $nama     = mysqli_real_escape_string($conn, $nama);
    $kategori = mysqli_real_escape_string($conn, $kategori);
    $harga    = (int)$harga;
    $stok     = (int)$stok;

    $sql = "INSERT INTO products (nama_produk, kategori, harga, stok) 
            VALUES ('$nama', '$kategori', $harga, $stok)";
    return mysqli_query($conn, $sql);
}

// 4. UPDATE: Ubah data produk
function updateProduct($conn, $id, $nama, $kategori, $harga, $stok) {
    $id       = (int)$id;
    $nama     = mysqli_real_escape_string($conn, $nama);
    $kategori = mysqli_real_escape_string($conn, $kategori);
    $harga    = (int)$harga;
    $stok     = (int)$stok;

    $sql = "UPDATE products SET 
            nama_produk = '$nama', 
            kategori = '$kategori', 
            harga = $harga, 
            stok = $stok 
            WHERE id = $id";
    return mysqli_query($conn, $sql);
}

// 5. DELETE: Hapus produk
function deleteProduct($conn, $id) {
    $id = (int)$id;
    $sql = "DELETE FROM products WHERE id = $id";
    return mysqli_query($conn, $sql);
}
?&gt;</code></pre>
                    </div>
                </div>

                <!-- File 3: actions/product_action.php -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-warning text-dark me-2">File 3</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-1 text-warning"></i>actions/product_action.php</strong>
                        </div>
                        <span class="small text-secondary">Controller / Pemroses Aksi Form</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>actions</code>, lalu buat file <code>product_action.php</code>:</p>
                        <pre><code class="language-php">&lt;?php
// actions/product_action.php
// Pemroses logika bisnis & form handler (Controller Sederhana)

require_once '../config/database.php';
require_once '../models/product_model.php';

$action = $_REQUEST['action'] ?? '';

// --- AKSI 1: TAMBAH PRODUK (CREATE) ---
if ($action === 'create' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama     = trim($_POST['nama_produk'] ?? '');
    $kategori = trim($_POST['kategori'] ?? '');
    $harga    = (int)($_POST['harga'] ?? 0);
    $stok     = (int)($_POST['stok'] ?? 0);

    if (empty($nama) || empty($kategori) || $harga &lt;= 0) {
        header("Location: ../index.php?status=error&msg=Data tidak boleh kosong!");
        exit;
    }

    if (createProduct($conn, $nama, $kategori, $harga, $stok)) {
        header("Location: ../index.php?status=success&msg=Produk berhasil ditambahkan!");
    } else {
        header("Location: ../index.php?status=error&msg=Gagal menyimpan produk.");
    }
    exit;
}

// --- AKSI 2: UBAH PRODUK (UPDATE) ---
elseif ($action === 'update' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $id       = (int)($_POST['id'] ?? 0);
    $nama     = trim($_POST['nama_produk'] ?? '');
    $kategori = trim($_POST['kategori'] ?? '');
    $harga    = (int)($_POST['harga'] ?? 0);
    $stok     = (int)($_POST['stok'] ?? 0);

    if ($id &lt;= 0 || empty($nama) || empty($kategori)) {
        header("Location: ../index.php?status=error&msg=ID atau data tidak valid!");
        exit;
    }

    if (updateProduct($conn, $id, $nama, $kategori, $harga, $stok)) {
        header("Location: ../index.php?status=success&msg=Produk berhasil diperbarui!");
    } else {
        header("Location: ../index.php?status=error&msg=Gagal memperbarui produk.");
    }
    exit;
}

// --- AKSI 3: HAPUS PRODUK (DELETE) ---
elseif ($action === 'delete') {
    $id = (int)($_GET['id'] ?? 0);

    if ($id &gt; 0 && deleteProduct($conn, $id)) {
        header("Location: ../index.php?status=success&msg=Produk berhasil dihapus!");
    } else {
        header("Location: ../index.php?status=error&msg=Gagal menghapus produk.");
    }
    exit;
}

// Jika request tidak valid
header("Location: ../index.php");
exit;
?&gt;</code></pre>
                    </div>
                </div>

                <!-- File 4: assets/css/style.css -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-info text-dark me-2">File 4</span>
                            <strong class="text-white"><i class="bi bi-filetype-css me-1 text-info"></i>assets/css/style.css</strong>
                        </div>
                        <span class="small text-secondary">Styling Modern Siap Pakai</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>assets/css</code>, lalu buat file <code>style.css</code>:</p>
                        <pre><code class="language-css">/* assets/css/style.css */
body {
    background-color: #0f172a;
    color: #f8fafc;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-main {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.table-custom {
    color: #f8fafc;
}

.table-custom thead {
    background-color: #0f172a;
    border-bottom: 2px solid #38bdf8;
}

.table-custom tbody tr {
    border-bottom: 1px solid #334155;
    transition: background 0.2s ease;
}

.table-custom tbody tr:hover {
    background-color: rgba(56, 189, 248, 0.05);
}

.badge-kategori {
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.modal-content {
    background-color: #1e293b;
    border: 1px solid #334155;
    color: #f8fafc;
    border-radius: 16px;
}

.modal-header {
    border-bottom: 1px solid #334155;
}

.modal-footer {
    border-top: 1px solid #334155;
}

.form-control, .form-select {
    background-color: #0f172a;
    border: 1px solid #334155;
    color: #f8fafc;
    border-radius: 8px;
}

.form-control:focus, .form-select:focus {
    background-color: #0f172a;
    border-color: #38bdf8;
    color: #fff;
    box-shadow: 0 0 0 0.25rem rgba(56, 189, 248, 0.25);
}</code></pre>
                    </div>
                </div>

                <!-- File 5: assets/js/script.js -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-warning text-dark me-2">File 5</span>
                            <strong class="text-white"><i class="bi bi-filetype-js me-1 text-warning"></i>assets/js/script.js</strong>
                        </div>
                        <span class="small text-secondary">JavaScript Transfer Data Modal Edit</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>assets/js</code>, lalu buat file <code>script.js</code>:</p>
                        <pre><code class="language-javascript">// assets/js/script.js
// Mengisi data secara instan ke Modal Edit saat tombol edit di-klik

document.addEventListener("DOMContentLoaded", () => {
    const editButtons = document.querySelectorAll(".btn-edit");
    
    editButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Ambil data dari atribut tombol
            const id       = btn.getAttribute("data-id");
            const nama     = btn.getAttribute("data-nama");
            const kategori = btn.getAttribute("data-kategori");
            const harga    = btn.getAttribute("data-harga");
            const stok     = btn.getAttribute("data-stok");

            // Masukkan data ke dalam input field Modal Edit
            document.getElementById("edit_id").value          = id;
            document.getElementById("edit_nama_produk").value = nama;
            document.getElementById("edit_kategori").value    = kategori;
            document.getElementById("edit_harga").value       = harga;
            document.getElementById("edit_stok").value        = stok;
        });
    });
});</code></pre>
                    </div>
                </div>

                <!-- File 6: index.php -->
                <div class="mb-4">
                    <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                        <div>
                            <span class="badge bg-success me-2">File 6</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-1 text-success"></i>index.php</strong>
                        </div>
                        <span class="small text-secondary">View Utama & Modal Bootstrap</span>
                    </div>
                    <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                        <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buat file <code>index.php</code> di root <code>C:\\laragon\\www\\bprotic-crud\\index.php</code>:</p>
                        <pre><code class="language-php">&lt;?php
// index.php - View Utama (Single Page CRUD dengan Modal Bootstrap)
require_once 'config/database.php';
require_once 'models/product_model.php';

// Ambil data produk melalui model
$products = getAllProducts($conn);
?&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;CRUD Produk BPROTIC&lt;/title&gt;
    &lt;!-- Bootstrap 5 & Icons CDN --&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"&gt;
    &lt;!-- Custom Style --&gt;
    &lt;link rel="stylesheet" href="assets/css/style.css"&gt;
&lt;/head&gt;
&lt;body class="py-5"&gt;

    &lt;div class="container"&gt;
        &lt;!-- Header & Tombol Tambah --&gt;
        &lt;div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3"&gt;
            &lt;div&gt;
                &lt;span class="badge bg-primary px-3 py-1 rounded-pill mb-2"&gt;BPROTIC WEB COURSE&lt;/span&gt;
                &lt;h2 class="fw-bold text-white mb-1"&gt;📦 Manajemen Data Produk&lt;/h2&gt;
                &lt;p class="text-secondary mb-0"&gt;Sistem CRUD Single Page dengan Modal Bootstrap & Arsitektur MVC&lt;/p&gt;
            &lt;/div&gt;
            &lt;button type="button" class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#modalTambah"&gt;
                &lt;i class="bi bi-plus-circle-fill me-2"&gt;&lt;/i&gt;Tambah Produk
            &lt;/button&gt;
        &lt;/div&gt;

        &lt;!-- Notifikasi Feedback (Alert) --&gt;
        &lt;?php if (isset($_GET['status'])): ?&gt;
            &lt;?php if ($_GET['status'] === 'success'): ?&gt;
                &lt;div class="alert alert-success alert-dismissible fade show rounded-3 mb-4" role="alert"&gt;
                    &lt;i class="bi bi-check-circle-fill me-2"&gt;&lt;/i&gt;&lt;?= htmlspecialchars($_GET['msg'] ?? 'Operasi berhasil!'); ?&gt;
                    &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
                &lt;/div&gt;
            &lt;?php elseif ($_GET['status'] === 'error'): ?&gt;
                &lt;div class="alert alert-danger alert-dismissible fade show rounded-3 mb-4" role="alert"&gt;
                    &lt;i class="bi bi-exclamation-triangle-fill me-2"&gt;&lt;/i&gt;&lt;?= htmlspecialchars($_GET['msg'] ?? 'Terjadi kesalahan!'); ?&gt;
                    &lt;button type="button" class="btn-close" data-bs-dismiss="alert"&gt;&lt;/button&gt;
                &lt;/div&gt;
            &lt;?php endif; ?&gt;
        &lt;?php endif; ?&gt;

        &lt;!-- Tabel Produk --&gt;
        &lt;div class="card card-main overflow-hidden"&gt;
            &lt;div class="table-responsive"&gt;
                &lt;table class="table table-custom table-hover align-middle mb-0"&gt;
                    &lt;thead&gt;
                        &lt;tr&gt;
                            &lt;th class="ps-4" style="width: 5%;"&gt;No&lt;/th&gt;
                            &lt;th style="width: 35%;"&gt;Nama Produk&lt;/th&gt;
                            &lt;th style="width: 20%;"&gt;Kategori&lt;/th&gt;
                            &lt;th style="width: 15%;"&gt;Harga&lt;/th&gt;
                            &lt;th style="width: 10%;"&gt;Stok&lt;/th&gt;
                            &lt;th class="text-center" style="width: 15%;"&gt;Aksi&lt;/th&gt;
                        &lt;/tr&gt;
                    &lt;/thead&gt;
                    &lt;tbody&gt;
                        &lt;?php if (empty($products)): ?&gt;
                            &lt;tr&gt;
                                &lt;td colspan="6" class="text-center py-5 text-secondary"&gt;
                                    &lt;i class="bi bi-inbox fs-1 d-block mb-2"&gt;&lt;/i&gt;Belum ada data produk.
                                &lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;?php else: ?&gt;
                            &lt;?php $no = 1; foreach ($products as $row): ?&gt;
                                &lt;tr&gt;
                                    &lt;td class="ps-4 text-secondary"&gt;&lt;?= $no++; ?&gt;&lt;/td&gt;
                                    &lt;td&gt;&lt;strong class="text-white"&gt;&lt;?= htmlspecialchars($row['nama_produk']); ?&gt;&lt;/strong&gt;&lt;/td&gt;
                                    &lt;td&gt;&lt;span class="badge-kategori"&gt;&lt;?= htmlspecialchars($row['kategori']); ?&gt;&lt;/span&gt;&lt;/td&gt;
                                    &lt;td class="text-info fw-bold"&gt;Rp &lt;?= number_format($row['harga'], 0, ',', '.'); ?&gt;&lt;/td&gt;
                                    &lt;td&gt;&lt;span class="badge bg-dark border border-secondary"&gt;&lt;?= $row['stok']; ?&gt; unit&lt;/span&gt;&lt;/td&gt;
                                    &lt;td class="text-center"&gt;
                                        &lt;!-- Tombol Edit (Memicu Modal Edit Tanpa Pindah Halaman) --&gt;
                                        &lt;button type="button" 
                                            class="btn btn-warning btn-sm me-1 btn-edit"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalEdit"
                                            data-id="&lt;?= $row['id']; ?&gt;"
                                            data-nama="&lt;?= htmlspecialchars($row['nama_produk']); ?&gt;"
                                            data-kategori="&lt;?= htmlspecialchars($row['kategori']); ?&gt;"
                                            data-harga="&lt;?= $row['harga']; ?&gt;"
                                            data-stok="&lt;?= $row['stok']; ?&gt;"&gt;
                                            &lt;i class="bi bi-pencil-square"&gt;&lt;/i&gt;
                                        &lt;/button&gt;
                                        
                                        &lt;!-- Tombol Hapus --&gt;
                                        &lt;a href="actions/product_action.php?action=delete&id=&lt;?= $row['id']; ?&gt;" 
                                           class="btn btn-danger btn-sm"
                                           onclick="return confirm('Apakah Anda yakin ingin menghapus produk ini?');"&gt;
                                            &lt;i class="bi bi-trash"&gt;&lt;/i&gt;
                                        &lt;/a&gt;
                                    &lt;/td&gt;
                                &lt;/tr&gt;
                            &lt;?php endforeach; ?&gt;
                        &lt;?php endif; ?&gt;
                    &lt;/tbody&gt;
                &lt;/table&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- ================= MODAL TAMBAH PRODUK ================= --&gt;
    &lt;div class="modal fade" id="modalTambah" tabindex="-1"&gt;
        &lt;div class="modal-dialog modal-dialog-centered"&gt;
            &lt;div class="modal-content shadow-lg"&gt;
                &lt;div class="modal-header"&gt;
                    &lt;h5 class="modal-title text-primary fw-bold"&gt;&lt;i class="bi bi-plus-circle me-2"&gt;&lt;/i&gt;Tambah Produk Baru&lt;/h5&gt;
                    &lt;button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"&gt;&lt;/button&gt;
                &lt;/div&gt;
                &lt;form action="actions/product_action.php" method="POST"&gt;
                    &lt;input type="hidden" name="action" value="create"&gt;
                    &lt;div class="modal-body p-4"&gt;
                        &lt;div class="mb-3"&gt;
                            &lt;label class="form-label text-light"&gt;Nama Produk&lt;/label&gt;
                            &lt;input type="text" name="nama_produk" class="form-control" placeholder="Contoh: Headset Gaming" required&gt;
                        &lt;/div&gt;
                        &lt;div class="mb-3"&gt;
                            &lt;label class="form-label text-light"&gt;Kategori&lt;/label&gt;
                            &lt;select name="kategori" class="form-select" required&gt;
                                &lt;option value=""&gt;-- Pilih Kategori --&lt;/option&gt;
                                &lt;option value="Elektronik"&gt;Elektronik&lt;/option&gt;
                                &lt;option value="Aksesoris"&gt;Aksesoris&lt;/option&gt;
                                &lt;option value="Komputer"&gt;Komputer&lt;/option&gt;
                            &lt;/select&gt;
                        &lt;/div&gt;
                        &lt;div class="row"&gt;
                            &lt;div class="col-md-6 mb-3"&gt;
                                &lt;label class="form-label text-light"&gt;Harga (Rp)&lt;/label&gt;
                                &lt;input type="number" name="harga" class="form-control" placeholder="Contoh: 350000" required&gt;
                            &lt;/div&gt;
                            &lt;div class="col-md-6 mb-3"&gt;
                                &lt;label class="form-label text-light"&gt;Stok Unit&lt;/label&gt;
                                &lt;input type="number" name="stok" class="form-control" placeholder="Contoh: 15" required&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="modal-footer"&gt;
                        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Batal&lt;/button&gt;
                        &lt;button type="submit" class="btn btn-primary px-4 fw-bold"&gt;Simpan Produk&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- ================= MODAL EDIT PRODUK ================= --&gt;
    &lt;div class="modal fade" id="modalEdit" tabindex="-1"&gt;
        &lt;div class="modal-dialog modal-dialog-centered"&gt;
            &lt;div class="modal-content shadow-lg"&gt;
                &lt;div class="modal-header"&gt;
                    &lt;h5 class="modal-title text-warning fw-bold"&gt;&lt;i class="bi bi-pencil-square me-2"&gt;&lt;/i&gt;Edit Data Produk&lt;/h5&gt;
                    &lt;button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"&gt;&lt;/button&gt;
                &lt;/div&gt;
                &lt;form action="actions/product_action.php" method="POST"&gt;
                    &lt;input type="hidden" name="action" value="update"&gt;
                    &lt;input type="hidden" name="id" id="edit_id"&gt;
                    &lt;div class="modal-body p-4"&gt;
                        &lt;div class="mb-3"&gt;
                            &lt;label class="form-label text-light"&gt;Nama Produk&lt;/label&gt;
                            &lt;input type="text" name="nama_produk" id="edit_nama_produk" class="form-control" required&gt;
                        &lt;/div&gt;
                        &lt;div class="mb-3"&gt;
                            &lt;label class="form-label text-light"&gt;Kategori&lt;/label&gt;
                            &lt;select name="kategori" id="edit_kategori" class="form-select" required&gt;
                                &lt;option value="Elektronik"&gt;Elektronik&lt;/option&gt;
                                &lt;option value="Aksesoris"&gt;Aksesoris&lt;/option&gt;
                                &lt;option value="Komputer"&gt;Komputer&lt;/option&gt;
                            &lt;/select&gt;
                        &lt;/div&gt;
                        &lt;div class="row"&gt;
                            &lt;div class="col-md-6 mb-3"&gt;
                                &lt;label class="form-label text-light"&gt;Harga (Rp)&lt;/label&gt;
                                &lt;input type="number" name="harga" id="edit_harga" class="form-control" required&gt;
                            &lt;/div&gt;
                            &lt;div class="col-md-6 mb-3"&gt;
                                &lt;label class="form-label text-light"&gt;Stok Unit&lt;/label&gt;
                                &lt;input type="number" name="stok" id="edit_stok" class="form-control" required&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class="modal-footer"&gt;
                        &lt;button type="button" class="btn btn-secondary" data-bs-dismiss="modal"&gt;Batal&lt;/button&gt;
                        &lt;button type="submit" class="btn btn-warning px-4 fw-bold text-dark"&gt;Perbarui Perubahan&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Scripts --&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
    &lt;script src="assets/js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                </div>
            </section>

            <!-- Tahap 4: Hasil Preview & Cara Eksekusi -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 4</span>
                    <h2 class="fw-bold mb-0 text-primary">Hasil Tampilan di Browser (Single Page Modal)</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Jalankan aplikasi dengan membuka URL <strong>http://bprotic-crud.test</strong> atau via klik kanan www di Laragon:
                </p>

                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card bg-dark border-info shadow-lg p-3">
                            <div class="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom border-secondary">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="rounded-circle bg-danger" style="width: 10px; height: 10px;"></span>
                                    <span class="rounded-circle bg-warning" style="width: 10px; height: 10px;"></span>
                                    <span class="rounded-circle bg-success" style="width: 10px; height: 10px;"></span>
                                    <span class="text-secondary small ms-2 font-monospace">http://bprotic-crud.test/</span>
                                </div>
                                <span class="badge bg-success">Single Page CRUD</span>
                            </div>

                            <!-- Mockup Tampilan Tabel -->
                            <div class="p-3 rounded-3" style="background: #1e293b; border: 1px solid #334155;">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h5 class="fw-bold text-white mb-0">📦 Manajemen Data Produk</h5>
                                        <small class="text-secondary">Daftar inventaris toko aktif</small>
                                    </div>
                                    <button class="btn btn-primary btn-sm rounded-pill px-3 fw-bold">+ Tambah Produk</button>
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-dark table-sm align-middle mb-0">
                                        <thead>
                                            <tr class="text-secondary small">
                                                <th>No</th>
                                                <th>Nama Produk</th>
                                                <th>Kategori</th>
                                                <th>Harga</th>
                                                <th>Stok</th>
                                                <th class="text-center">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td class="fw-bold text-white">Laptop Asus Vivobook 14</td>
                                                <td><span class="badge bg-info bg-opacity-25 text-info">Elektronik</span></td>
                                                <td class="text-info fw-bold">Rp 8.500.000</td>
                                                <td><span class="badge bg-dark">12 unit</span></td>
                                                <td class="text-center">
                                                    <span class="badge bg-warning text-dark p-2 me-1 cursor-pointer"><i class="bi bi-pencil-square"></i></span>
                                                    <span class="badge bg-danger p-2 cursor-pointer"><i class="bi bi-trash"></i></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td class="fw-bold text-white">Mouse Wireless Silent Logitech</td>
                                                <td><span class="badge bg-info bg-opacity-25 text-info">Aksesoris</span></td>
                                                <td class="text-info fw-bold">Rp 180.000</td>
                                                <td><span class="badge bg-dark">30 unit</span></td>
                                                <td class="text-center">
                                                    <span class="badge bg-warning text-dark p-2 me-1 cursor-pointer"><i class="bi bi-pencil-square"></i></span>
                                                    <span class="badge bg-danger p-2 cursor-pointer"><i class="bi bi-trash"></i></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tugas Studi Kasus Pertemuan 3 -->
            <section class="mt-5 pt-3">
                <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                    <div class="card-body p-5">
                        <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 3 Web</h3>
                        <p class="text-light-50 mb-4 fs-5">
                            Gunakan arsitektur menyerupai MVC dan modal di atas untuk membuat <strong>Sistem Manajemen Inventaris Perpustakaan Kampus</strong>:
                        </p>
                        
                        <div class="p-4 bg-dark-lighter rounded border border-secondary">
                            <ol class="text-light-50 lh-lg fs-5 mb-0">
                                <li class="mb-3">Buat database baru bernama <code>db_perpustakaan</code> dengan tabel <code>books</code> (kolom: <code>id</code>, <code>judul_buku</code>, <code>penulis</code>, <code>kategori</code>, <code>stok</code>).</li>
                                <li class="mb-3">Buat struktur folder MVC: <code>config/database.php</code>, <code>models/book_model.php</code>, <code>actions/book_action.php</code>, dan <code>index.php</code>.</li>
                                <li class="mb-3">Terapkan fitur tambah buku dan edit buku menggunakan <strong>Modal Bootstrap</strong> tanpa berpindah halaman.</li>
                                <li class="mb-3">Tambahkan konfirmasi sebelum menghapus buku.</li>
                                <li>Tampilkan pesan Alert notifikasi sukses warna hijau ketika data berhasil ditambahkan, diubah, maupun dihapus!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        `
    },

    // Metadata untuk Minggu 4 - 10 dari Silabus Web
    "4": { title: "OOP & MVC Dasar", subtitle: "Class, object, method, konsep MVC, pemisahan logic, struktur aplikasi." },
    "5": { title: "Pengenalan Laravel", subtitle: "Struktur Laravel, routing, controller, view, migration, model." },
    "6": { title: "Laravel CRUD & Eloquent", subtitle: "Migration, model, controller, Eloquent ORM, form dan CRUD." },
    "7": { title: "REST API Laravel", subtitle: "Konsep REST API, endpoint, HTTP method, response JSON, GET, POST, PUT, DELETE." },
    "8": { title: "Relasi, Validasi & API Testing", subtitle: "Relasi one-to-many, request validation, status code, error response, testing API menggunakan Postman." },
    "9": { title: "Fitur Lanjutan & Penyempurnaan API", subtitle: "Search, filter, pagination, penyempurnaan response API dan handling error siap dikonsumsi Mobile." },
    "10": { title: "Final Project", subtitle: "Pengembangan project berdasarkan kategori, integrasi fitur, testing dan debugging aplikasi Laravel lengkap." }
};

