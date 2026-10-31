.const courseData = {
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
    // ==========================================
    // PERTEMUAN 4: OOP & MVC DASAR
    // ==========================================
    "4": {
        title: "OOP & MVC Dasar",
        subtitle: "Class, object, method, konsep MVC, pemisahan logic, struktur aplikasi, serta implementasi CRUD berbasis OOP & MVC murni.",
        content: `
<section class="mb-5">
    <div class="card bg-dark-lighter border-info shadow-sm">
        <div class="card-body p-4 p-md-5">
            <div class="d-flex align-items-center mb-3">
                <div class="p-3 bg-info bg-opacity-10 text-info rounded-circle me-3">
                    <i class="bi bi-compass-fill fs-2"></i>
                </div>
                <div>
                    <span class="badge bg-info text-dark fw-bold mb-1 px-3 py-1 text-uppercase">Pondasi Web Developer Profesional</span>
                    <h3 class="fw-bold mb-0 text-white">Selamat Datang di Pertemuan 4: OOP & MVC Dasar!</h3>
                </div>
            </div>
            
            <p class="text-light-50 fs-5 lh-base mb-4">
                Jika di Pertemuan 1, 2, dan 3 kamu sudah berhasil membuat halaman PHP dinamis dan sistem CRUD sederhana menggunakan cara <strong>prosedural (menulis kode dari atas ke bawah secara berurutan)</strong>, maka hari ini kita akan menaiki tangga level berikutnya yang sangat penting: <strong>Object-Oriented Programming (OOP)</strong> dan pola arsitektur <strong>Model-View-Controller (MVC)</strong>.
            </p>

            <div class="alert alert-primary bg-primary bg-opacity-10 border-primary text-light d-flex align-items-start mb-4 p-3 rounded-3" role="alert">
                <i class="bi bi-lightbulb-fill text-warning fs-3 me-3 flex-shrink-0 mt-1"></i>
                <div>
                    <h5 class="alert-heading fw-bold text-info mb-1">Mengapa Materi Hari Ini Sangat Krusial?</h5>
                    <p class="mb-0 text-light-50 fs-6">
                        OOP dan MVC adalah <strong>jembatan wajib paling utama</strong> sebelum kamu melangkah ke <strong>Pertemuan 5 (Pengenalan Framework Laravel)</strong>. Framework modern raksasa di industri seperti Laravel, Symfony, Spring Boot, hingga ASP.NET 100% dibangun di atas fondasi OOP dan MVC. Memahami materi ini hari ini akan membuat belajar Laravel minggu depan terasa sangat mudah, menyenangkan, dan masuk akal!
                    </p>
                </div>
            </div>

            <!-- 3 Pilar Keunggulan -->
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-secondary h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-puzzle-fill text-primary fs-4 me-2"></i>
                            <h6 class="text-primary fw-bold mb-0">Kode Rapi & Modular</h6>
                        </div>
                        <p class="small text-light-50 mb-0">Kode tidak lagi menumpuk ribuan baris di satu file. Setiap fitur dipisah menjadi modul kecil yang mandiri dan mudah dikelola.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-secondary h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-arrow-repeat text-success fs-4 me-2"></i>
                            <h6 class="text-success fw-bold mb-0">Reusability Tinggi</h6>
                        </div>
                        <p class="small text-light-50 mb-0">Tulis sekali, pakai berkali-kali! Logika bisnis yang sudah dibuat dalam sebuah <em>Class</em> bisa dipakai ulang tanpa perlu copy-paste kode.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-secondary h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-shield-check text-info fs-4 me-2"></i>
                            <h6 class="text-info fw-bold mb-0">Standar Industri Nyata</h6>
                        </div>
                        <p class="small text-light-50 mb-0">Membuatmu siap bekerja dalam tim software engineer profesional karena struktur folder dan pemisahan tugasnya rapi dan terstandarisasi.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mb-5 pb-4 border-bottom border-secondary">
    <div class="d-flex align-items-center mb-3">
        <span class="badge bg-danger fs-6 me-3">Refleksi Kritis</span>
        <h2 class="fw-bold mb-0 text-danger">Mengapa Kode Prosedural Mulai Bikin Pusing? ("Spaghetti Code")</h2>
    </div>

    <p class="text-light-50 fs-5">
        Bayangkan kamu disuruh merawat sebuah website toko online yang memiliki 50 halaman. Selama ini kita menulis kode dengan cara <strong>prosedural biasa</strong>. Mari kita bedah apa yang terjadi di balik layar dan mengapa para programmer profesional akhirnya beralih ke OOP dan MVC:
    </p>

    <div class="row g-4 mt-2">
        <div class="col-lg-6">
            <div class="card bg-dark border-danger h-100 shadow-sm">
                <div class="card-header bg-danger bg-opacity-10 border-danger d-flex align-items-center justify-content-between">
                    <span class="fw-bold text-danger"><i class="bi bi-x-circle-fill me-2"></i>Gaya Lama: Procedural (Spaghetti Code)</span>
                    <span class="badge bg-danger">Mulai Sulit Dirawat</span>
                </div>
                <div class="card-body p-4">
                    <p class="text-light-50 small mb-3">Dalam 1 file (misalnya <code>produk.php</code>), semua hal diaduk jadi satu bagaikan semangkuk mie instan yang kusut:</p>
                    <ul class="text-light-50 small lh-lg mb-3">
                        <li><strong class="text-warning">Koneksi Database:</strong> Ditulis langsung di baris teratas.</li>
                        <li><strong class="text-warning">Logika Form POST/GET:</strong> Bercampur dengan cek tombol simpan.</li>
                        <li><strong class="text-warning">Query SQL (SELECT/INSERT):</strong> Menempel langsung di tengah kode.</li>
                        <li><strong class="text-warning">Tampilan HTML & CSS:</strong> Di-echo atau dicampur aduk dengan tag PHP <code>&lt;?php ?&gt;</code> bolak-balik.</li>
                    </ul>
                    <div class="p-3 bg-dark-lighter rounded border border-secondary">
                        <h6 class="text-danger small fw-bold mb-1"><i class="bi bi-exclamation-triangle-fill me-1"></i>Dampaknya Bagi Programmer:</h6>
                        <p class="text-light-50 small mb-0">
                            Jika nama tabel atau kolom database berubah, kamu harus mencari dan mengganti kode di 20 file berbeda satu per satu. Jika desainer web ingin mengubah tampilan CSS, ia berisiko tinggi merusak kode database PHP!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card bg-dark border-success h-100 shadow-sm">
                <div class="card-header bg-success bg-opacity-10 border-success d-flex align-items-center justify-content-between">
                    <span class="fw-bold text-success"><i class="bi bi-check-circle-fill me-2"></i>Gaya Modern: OOP & MVC Arsitektur</span>
                    <span class="badge bg-success">Standar Industri</span>
                </div>
                <div class="card-body p-4">
                    <p class="text-light-50 small mb-3">Kode dipecah dengan prinsip <strong>Separation of Concerns</strong> (Setiap bagian punya 1 tugas spesifik):</p>
                    <ul class="text-light-50 small lh-lg mb-3">
                        <li><strong class="text-info">Model:</strong> Khusus bertugas memasak query SQL dan urusan database saja.</li>
                        <li><strong class="text-info">View:</strong> Murni menangani tampilan antarmuka (HTML, Bootstrap, CSS) tanpa mikir SQL.</li>
                        <li><strong class="text-info">Controller:</strong> Otak pengatur lalu lintas data yang menghubungkan Model ke View.</li>
                        <li><strong class="text-info">OOP Class:</strong> Membungkus data dan aksi menjadi entitas yang rapi dan terorganisir.</li>
                    </ul>
                    <div class="p-3 bg-dark-lighter rounded border border-secondary">
                        <h6 class="text-success small fw-bold mb-1"><i class="bi bi-stars me-1"></i>Keuntungannya Bagi Kamu:</h6>
                        <p class="text-light-50 small mb-0">
                            Website menjadi sangat mudah diperbaiki (debugging), gampang dikembangkan fiturnya, aman dari bentrok saat bekerja bareng tim, dan kodenya terlihat sangat elegan dan profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mb-5 pb-4 border-bottom border-secondary">
    <div class="d-flex align-items-center mb-3">
        <span class="badge bg-primary fs-6 me-3">Konsep 1</span>
        <h2 class="fw-bold mb-0 text-primary">Memahami OOP (Object-Oriented Programming) Tanpa Rumit</h2>
    </div>

    <p class="text-light-50 fs-5 mb-4">
        Apa itu <strong>OOP</strong>? Jangan terintimidasi oleh namanya yang terdengar teknis! Sederhananya, OOP adalah <strong>cara berpikir dalam memprogram yang meniru cara kerja benda-benda nyata di dunia sekitar kita</strong>.
    </p>

    <!-- Card Analogi Dunia Nyata OOP -->
    <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
        <div class="card-header bg-dark border-secondary py-3">
            <h5 class="fw-bold text-info mb-0"><i class="bi bi-binoculars-fill me-2"></i>2 Analogi Dunia Nyata yang Sangat Mengena</h5>
        </div>
        <div class="card-body p-4">
            <div class="row g-4">
                <!-- Analogi 1: Cetakan Kue -->
                <div class="col-md-6 border-end-md border-secondary">
                    <div class="d-flex align-items-center mb-3">
                        <div class="p-2 bg-warning bg-opacity-10 text-warning rounded-circle me-3">
                            <i class="bi bi-cup-hot-fill fs-3"></i>
                        </div>
                        <h5 class="fw-bold text-white mb-0">Analogi 1: Cetakan Kue & Kue Donat</h5>
                    </div>
                    <p class="text-light-50 fs-6 lh-base mb-3">
                        Pernahkah kamu melihat cetakan kue berbentuk donat atau kue putri salju di dapur?
                    </p>
                    <ul class="text-light-50 small lh-lg mb-0">
                        <li><strong>Class (Cetakan Kue):</strong> Cetakan besi itu sendiri. Cetakan tersebut <em>bukanlah kue yang bisa dimakan</em>, melainkan hanya cetak biru (blueprint) atau pola rancangan.</li>
                        <li><strong>Object (Kue Nyata):</strong> Saat adonan dituangkan ke cetakan dan dipanggang, lahirlah sebuah donat asli yang bisa dipegang dan dimakan. Ini adalah <em>Object</em> (hasil nyata dari cetakan). Dari 1 cetakan, kamu bisa mencetak 100 kue berbeda rasa!</li>
                        <li><strong>Property (Ciri-Ciri Kue):</strong> Topping cokelat, taburan kacang, diameter 8 cm, rasa vanila.</li>
                        <li><strong>Method (Aksi/Perilaku):</strong> Mengembang saat dioven, meleleh saat dipanaskan.</li>
                    </ul>
                </div>

                <!-- Analogi 2: Pabrik Mobil -->
                <div class="col-md-6">
                    <div class="d-flex align-items-center mb-3">
                        <div class="p-2 bg-info bg-opacity-10 text-info rounded-circle me-3">
                            <i class="bi bi-car-front-fill fs-3"></i>
                        </div>
                        <h5 class="fw-bold text-white mb-0">Analogi 2: Blueprint Pabrik & Mobil Nyata</h5>
                    </div>
                    <p class="text-light-50 fs-6 lh-base mb-3">
                        Insinyur mobil tidak langsung memotong besi sembarangan saat membuat mobil baru di pabrik:
                    </p>
                    <ul class="text-light-50 small lh-lg mb-0">
                        <li><strong>Class (Desain Blueprint Mobil):</strong> Gambar teknis di atas kertas yang menetapkan bahwa mobil harus punya 4 roda, setir, mesin, dan warna.</li>
                        <li><strong>Object (Mobil Fisik di Jalanan):</strong> Pabrik mencetak mobil pertama: <code>$avanzaHitam</code>, lalu mencetak mobil kedua: <code>$ferrariMerah</code>. Keduanya sama-sama berasal dari cetakan mobil, tapi punya fisik dan spesifikasi masing-masing.</li>
                        <li><strong>Property (Karakteristik):</strong> Warna cat, merk, jumlah bensin di tangki, kecepatan maksimal.</li>
                        <li><strong>Method (Kemampuan/Fungsi):</strong> <code>tancapGas()</code>, <code>injakRem()</code>, <code>bunyikanKlakson()</code>.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 5 Pilar Anatomi OOP -->
    <h4 class="fw-bold text-white mt-5 mb-3"><i class="bi bi-diagram-3-fill text-primary me-2"></i>Membedah 5 Elemen Inti Anatomi OOP</h4>
    <p class="text-light-50 fs-6 mb-4">Mari kita bedah sintaks kode PHP resmi untuk setiap bagian anatomi tersebut, agar kamu paham luar dalam:</p>

    <div class="row g-4">
        <!-- 1. Class & Object -->
        <div class="col-lg-6">
            <div class="p-4 bg-dark-lighter rounded border border-secondary h-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-primary mb-0"><i class="bi bi-1-circle-fill me-2"></i>Class & Object (new)</h5>
                    <span class="badge bg-primary">Pola & Kelahiran</span>
                </div>
                <p class="text-light-50 small">
                    <strong>Class</strong> dideklarasikan dengan kata kunci <code>class NamaClass</code>. Sedangkan untuk melahirkan <strong>Object</strong> nyata di memori komputer, kita menggunakan kata kunci ajaib <code>new</code>:
                </p>
                <pre><code class="language-php">&lt;?php
// 1. Membuat Blueprint / Cetakan
class Mobil {
    // Di sinilah isi spesifikasi mobil nantinya...
}

// 2. Instansiasi (Mencetak Objek Nyata ke Memori)
$mobilSaya = new Mobil(); 
$mobilKamu = new Mobil(); 
?&gt;</code></pre>
                <p class="text-light-50 small mt-3 mb-0">
                    <i class="bi bi-info-circle text-info me-1"></i> Variabel <code>$mobilSaya</code> dan <code>$mobilKamu</code> sekarang adalah dua objek independen yang memiliki identitasnya masing-masing.
                </p>
            </div>
        </div>

        <!-- 2. Property & Method -->
        <div class="col-lg-6">
            <div class="p-4 bg-dark-lighter rounded border border-secondary h-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-info mb-0"><i class="bi bi-2-circle-fill me-2"></i>Property & Method</h5>
                    <span class="badge bg-info text-dark">Data & Perilaku</span>
                </div>
                <p class="text-light-50 small">
                    <strong>Property</strong> adalah variabel yang melekat pada objek (ciri fisik). <strong>Method</strong> adalah fungsi yang ada di dalam class (kemampuan/aksi):
                </p>
                <pre><code class="language-php">&lt;?php
class Mobil {
    // PROPERTY (Ciri-ciri fisik)
    public $warna;
    public $merk;

    // METHOD (Kemampuan / Aksi yang bisa dilakukan)
    public function tancapGas() {
        return "Ngeeeenggg...! Kecepatan bertambah!";
    }
}

$avanza = new Mobil();
$avanza->warna = "Putih Mutiara"; // Mengisi Property
$avanza->merk = "Toyota Avanza";

echo $avanza->tancapGas(); // Menjalankan Method (Aksi)
?&gt;</code></pre>
                <p class="text-light-50 small mt-3 mb-0">
                    <i class="bi bi-arrow-right-short text-warning me-1"></i> Tanda panah <code>-&gt;</code> adalah operator di PHP untuk mengakses property atau memanggil method milik sebuah objek.
                </p>
            </div>
        </div>

        <!-- 3. Memahami Misteri $this -->
        <div class="col-lg-6">
            <div class="p-4 bg-dark-lighter border border-warning rounded h-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-warning mb-0"><i class="bi bi-3-circle-fill me-2"></i>Misteri $this Terpecahkan!</h5>
                    <span class="badge bg-warning text-dark">Kata Ganti "Saya"</span>
                </div>
                <p class="text-light-50 small">
                    Banyak pemula bingung: <em>"Kenapa harus pakai <code>$this-&gt;nama</code>? Kenapa tidak langsung <code>$nama</code> saja?"</em>
                </p>
                <div class="p-3 bg-dark rounded border border-secondary mb-3">
                    <h6 class="text-warning small fw-bold mb-1"><i class="bi bi-person-badge me-2"></i>Analogi Kata Ganti Diri Sendiri:</h6>
                    <p class="text-light-50 small mb-0">
                        Bayangkan ada 10 orang di dalam satu ruangan kelas. Jika pemateri berkata <em>"Sebutkan nama!"</em>, orang-orang akan bingung nama siapa. Tapi jika seseorang berkata <em>"Nama <strong>saya</strong> adalah Budi"</em>, kata <strong>"saya"</strong> merujuk spesifik ke tubuh orang itu sendiri! Di PHP, <code>$this</code> adalah kata ganti <strong>"diri saya sendiri"</strong>.
                    </p>
                </div>
                <pre><code class="language-php">&lt;?php
class Siswa {
    public $nama;

    public function sapa() {
        // Menggunakan $this untuk menunjuk nama miliknya sendiri
        return "Halo, nama saya adalah " . $this->nama;
    }
}

$siswa1 = new Siswa();
$siswa1->nama = "Fajar";

$siswa2 = new Siswa();
$siswa2->nama = "Annisa";

echo $siswa1->sapa(); // Output: Halo, nama saya adalah Fajar
echo $siswa2->sapa(); // Output: Halo, nama saya adalah Annisa
?&gt;</code></pre>
            </div>
        </div>

        <!-- 4. __construct Magic Method -->
        <div class="col-lg-6">
            <div class="p-4 bg-dark-lighter border border-success rounded h-100">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-success mb-0"><i class="bi bi-4-circle-fill me-2"></i>Constructor (__construct)</h5>
                    <span class="badge bg-success">Akta Kelahiran Otomatis</span>
                </div>
                <p class="text-light-50 small">
                    Apa itu <code>__construct()</code>? Ini adalah <em>Magic Method</em> bawaan PHP yang <strong>dieksekusi secara otomatis pada detik pertama objek diciptakan dengan kata kunci <code>new</code></strong>.
                </p>
                <div class="p-3 bg-dark rounded border border-secondary mb-3">
                    <h6 class="text-success small fw-bold mb-1"><i class="bi bi-bell-fill me-2"></i>Analogi Bayi Baru Lahir:</h6>
                    <p class="text-light-50 small mb-0">
                        Saat seorang bayi baru lahir ke dunia, dokter langsung memberikan nama, memotong tali pusar, dan mencatat berat badan secara otomatis. Di kode, constructor bertugas memberikan data awal saat objek lahir!
                    </p>
                </div>
                <pre><code class="language-php">&lt;?php
class Produk {
    public $judul;
    public $harga;

    // Otomatis berjalan saat: new Produk("...", ...) dipanggil!
    public function __construct($judulAwal, $hargaAwal) {
        $this->judul = $judulAwal;
        $this->harga = $hargaAwal;
    }

    public function getDetail() {
        return "{$this->judul} seharga Rp " . number_format($this->harga);
    }
}

// Langsung disuntikkan nilainya saat instansiasi (Sangat praktis!)
$buku = new Produk("Mastering Laravel 11", 125000);
echo $buku->getDetail(); 
// Output: Mastering Laravel 11 seharga Rp 125.000
?&gt;</code></pre>
            </div>
        </div>
    </div>

    <!-- Visual Flowchart OOP -->
    <div class="card bg-dark border-primary mt-4 shadow-sm">
        <div class="card-body p-4">
            <h5 class="fw-bold text-primary mb-3"><i class="bi bi-diagram-2-fill me-2"></i>Alur Kerja Objek di Memori Komputer (OOP Lifecycle Flow)</h5>
            <div class="row text-center g-3">
                <div class="col-md-3">
                    <div class="p-3 bg-dark-lighter rounded border border-secondary h-100">
                        <span class="badge bg-secondary mb-2">Langkah 1</span>
                        <h6 class="text-white fw-bold">Definisi Class</h6>
                        <p class="small text-light-50 mb-0">Programmer menulis pola blueprint class beserta property & method-nya di dalam file PHP.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 bg-dark-lighter rounded border border-info h-100">
                        <span class="badge bg-info text-dark mb-2">Langkah 2</span>
                        <h6 class="text-info fw-bold">Instansiasi (new)</h6>
                        <p class="small text-light-50 mb-0">Sintaks <code>new NamaClass()</code> memesan petak memori RAM komputer untuk entitas objek baru.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 bg-dark-lighter rounded border border-warning h-100">
                        <span class="badge bg-warning text-dark mb-2">Langkah 3</span>
                        <h6 class="text-warning fw-bold">Constructor Bekerja</h6>
                        <p class="small text-light-50 mb-0"><code>__construct()</code> otomatis mengisi data default / koneksi database ke property objek.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="p-3 bg-dark-lighter rounded border border-success h-100">
                        <span class="badge bg-success mb-2">Langkah 4</span>
                        <h6 class="text-success fw-bold">Akses & Interaksi</h6>
                        <p class="small text-light-50 mb-0">Aplikasi memanggil method objek (misal: <code>$user->login()</code>) untuk menghasilkan aksi & data.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mb-5 pb-4 border-bottom border-secondary">
    <div class="d-flex align-items-center mb-3">
        <span class="badge bg-success fs-6 me-3">Konsep 2</span>
        <h2 class="fw-bold mb-0 text-success">Membedah Arsitektur MVC (Model - View - Controller)</h2>
    </div>

    <p class="text-light-50 fs-5 mb-4">
        Sekarang kita masuk ke topik arsitektur terpopuler dalam rekayasa perangkat lunak modern: <strong>MVC (Model - View - Controller)</strong>. MVC bukanlah bahasa pemrograman baru, melainkan <strong>pola pembagian peran kerja (arsitektur)</strong> agar kode aplikasi tersusun rapi, bersih, dan mudah dirawat.
    </p>

    <!-- Analogi Spektakuler Restoran Bintang 5 -->
    <div class="card bg-dark-lighter border-warning mb-5 shadow-lg">
        <div class="card-header bg-warning bg-opacity-10 border-warning py-3">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="fw-bold text-warning mb-0"><i class="bi bi-shop me-2"></i>Analogi Restoran Mewah: Memahami MVC dalam 3 Menit!</h5>
                <span class="badge bg-warning text-dark px-3 py-1 fw-bold">Sangat Mudah Dipahami</span>
            </div>
        </div>
        <div class="card-body p-4 p-md-5">
            <p class="text-light-50 fs-6 lh-base mb-4">
                Bayangkan kamu sedang makan malam di sebuah <strong>Restoran Bintang 5</strong>. Bagaimana alur kerja sebuah restoran berjalan tertib dan teratur tanpa terjadi kekacauan? Mari kita amati para pemerannya:
            </p>

            <div class="row g-4">
                <!-- 1. Pelanggan / Browser -->
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-secondary h-100 text-center">
                        <div class="p-3 bg-secondary bg-opacity-10 text-white rounded-circle d-inline-block mb-3">
                            <i class="bi bi-person-raised-hand fs-1"></i>
                        </div>
                        <h5 class="text-white fw-bold">1. Pelanggan (User / Browser)</h5>
                        <p class="small text-light-50 mb-0">
                            Tamu duduk di meja, membuka daftar menu, lalu memilih makanan (misal: mengklik tombol <em>"Pesan Nasi Goreng Spesial"</em> di website). Pelanggan <strong>TIDAK PERNAH</strong> dan <strong>TIDAK BOLEH</strong> nyelonong masuk langsung ke dapur restoran!
                        </p>
                    </div>
                </div>

                <!-- 2. Controller / Waiter -->
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-warning h-100 text-center">
                        <div class="p-3 bg-warning bg-opacity-10 text-warning rounded-circle d-inline-block mb-3">
                            <i class="bi bi-person-badge fs-1"></i>
                        </div>
                        <h5 class="text-warning fw-bold">2. Waiter / Pelayan (CONTROLLER)</h5>
                        <p class="small text-light-50 mb-0">
                            Pelayan menghampiri tamu, mencatat pesanan, lalu berjalan ke dapur menyerahkan nota pesanan ke koki. Ketika makanan sudah matang, pelayan mengambil piring saji dan membawanya kembali ke meja pelanggan. <strong>Controller adalah jembatan koordinasi serbabisa!</strong>
                        </p>
                    </div>
                </div>

                <!-- 3. Model / Dapur & Kulkas -->
                <div class="col-md-4">
                    <div class="p-3 bg-dark rounded border border-info h-100 text-center">
                        <div class="p-3 bg-info bg-opacity-10 text-info rounded-circle d-inline-block mb-3">
                            <i class="bi bi-fire fs-1"></i>
                        </div>
                        <h5 class="text-info fw-bold">3. Koki & Dapur (MODEL)</h5>
                        <p class="small text-light-50 mb-0">
                            Koki tidak berhadapan langsung dengan tamu. Koki bekerja di dapur, membuka kulkas penyimpanan bahan baku (<strong>Database MySQL</strong>), mengolah resep query, dan memasak makanan hingga matang sempurna berupa data siap saji.
                        </p>
                    </div>
                </div>

                <!-- 4. View / Plating & Piring Saji -->
                <div class="col-md-6">
                    <div class="p-3 bg-dark rounded border border-success h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-palette-fill text-success fs-3 me-3"></i>
                            <div>
                                <h6 class="text-success fw-bold mb-0">4. Piring Saji & Garnish Plating (VIEW)</h6>
                                <span class="badge bg-success bg-opacity-25 text-success small">Tampilan Visual Cantik</span>
                            </div>
                        </div>
                        <p class="small text-light-50 mb-0">
                            Makanan yang matang tidak langsung dilempar begitu saja! Bagian plating menaruhnya di atas piring porselen yang elegan, memberi taburan bawang goreng, saus dekoratif, dan daun parsley (<strong>HTML, CSS Bootstrap, JavaScript</strong>) agar sedap dipandang mata dan nikmat disantap user.
                        </p>
                    </div>
                </div>

                <!-- 5. Front Controller / Resepsionis -->
                <div class="col-md-6">
                    <div class="p-3 bg-dark rounded border border-primary h-100">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-door-open-fill text-primary fs-3 me-3"></i>
                            <div>
                                <h6 class="text-primary fw-bold mb-0">5. Pintu Masuk / Resepsionis (FRONT CONTROLLER)</h6>
                                <span class="badge bg-primary bg-opacity-25 text-primary small">File index.php Utama</span>
                            </div>
                        </div>
                        <p class="small text-light-50 mb-0">
                            Ketika tamu baru datang di pintu gerbang restoran, meja resepsionis (<code>index.php</code>) menyapa pertama kali, menanyakan keperluan URL tamu, lalu mengarahkan tamu tersebut ke Pelayan (Controller) yang tepat. Semua pintu masuk terpusat lewat 1 gerbang utama!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Visual Alur Diagram End-to-End MVC Hulu ke Hilir -->
    <h4 class="fw-bold text-white mb-3"><i class="bi bi-signpost-split-fill text-info me-2"></i>Alur Lengkap Request MVC dari Hulu ke Hilir (End-to-End)</h4>
    <p class="text-light-50 fs-6 mb-4">Bagaimana data mengalir saat seorang pengguna membuka halaman website atau mengklik tombol Simpan? Mari telusuri 7 langkah rantai estafet berikut:</p>

    <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
        <div class="card-body p-4">
            <div class="d-flex flex-column gap-3">
                
                <!-- Step 1 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-primary d-flex align-items-start">
                    <span class="badge bg-primary me-3 fs-6 px-3 py-2">Langkah 1</span>
                    <div>
                        <h6 class="text-primary fw-bold mb-1"><i class="bi bi-browser-chrome me-2"></i>User Beraksi di Browser (HTTP Request)</h6>
                        <p class="text-light-50 small mb-0">User mengetik alamat URL di browser (misal: <code>http://toko.test/index.php?page=produk</code>) atau mengklik tombol <em>"Tambah Produk"</em>.</p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-info d-flex align-items-start">
                    <span class="badge bg-info text-dark me-3 fs-6 px-3 py-2">Langkah 2</span>
                    <div>
                        <h6 class="text-info fw-bold mb-1"><i class="bi bi-box-arrow-in-right me-2"></i>Front Controller (index.php) Menyambut & Meneruskan Request</h6>
                        <p class="text-light-50 small mb-0">File <code>index.php</code> membaca parameter URL dan menentukan: <em>"Oh, user ingin melihat halaman produk, panggil <strong>ProductController</strong>!"</em></p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-warning d-flex align-items-start">
                    <span class="badge bg-warning text-dark me-3 fs-6 px-3 py-2">Langkah 3</span>
                    <div>
                        <h6 class="text-warning fw-bold mb-1"><i class="bi bi-gear-wide-connected me-2"></i>Controller Menganalisis Tugas & Memanggil Model</h6>
                        <p class="text-light-50 small mb-0">Method <code>index()</code> pada <code>ProductController</code> berjalan. Controller sadar bahwa ia membutuhkan data daftar barang, maka ia menyuruh <code>ProductModel</code>: <em>"Tolong ambilkan semua produk di gudang!"</em></p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-danger d-flex align-items-start">
                    <span class="badge bg-danger me-3 fs-6 px-3 py-2">Langkah 4</span>
                    <div>
                        <h6 class="text-danger fw-bold mb-1"><i class="bi bi-database-fill me-2"></i>Model Mengambil Data dari Database MySQL</h6>
                        <p class="text-light-50 small mb-0"><code>ProductModel</code> mengeksekusi SQL: <code>SELECT * FROM products ORDER BY id DESC</code>. Database mengembalikan sekumpulan data array mentah, lalu Model menyerahkannya kembali ke Controller.</p>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-secondary d-flex align-items-start">
                    <span class="badge bg-secondary me-3 fs-6 px-3 py-2">Langkah 5</span>
                    <div>
                        <h6 class="text-white fw-bold mb-1"><i class="bi bi-arrow-left-right me-2"></i>Controller Meneruskan Data Bersih ke View</h6>
                        <p class="text-light-50 small mb-0">Controller menerima data produk dari Model, lalu memanggil file antarmuka (misal: <code>views/product_list.php</code>) sambil menyuntikkan variabel data produk tersebut.</p>
                    </div>
                </div>

                <!-- Step 6 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-success d-flex align-items-start">
                    <span class="badge bg-success me-3 fs-6 px-3 py-2">Langkah 6</span>
                    <div>
                        <h6 class="text-success fw-bold mb-1"><i class="bi bi-filetype-html me-2"></i>View Merender Tampilan HTML & CSS yang Elegan</h6>
                        <p class="text-light-50 small mb-0">File View melakukan perulangan <code>foreach</code> untuk membungkus data produk ke dalam tabel Bootstrap, menambahkan tombol Edit/Hapus, dan memoles warnanya.</p>
                    </div>
                </div>

                <!-- Step 7 -->
                <div class="p-3 bg-dark rounded border-start border-4 border-primary d-flex align-items-start">
                    <span class="badge bg-primary me-3 fs-6 px-3 py-2">Langkah 7</span>
                    <div>
                        <h6 class="text-primary fw-bold mb-1"><i class="bi bi-check2-circle me-2"></i>Browser Menampilkan Hasil Akhir ke Mata Pengguna</h6>
                        <p class="text-light-50 small mb-0">Server mengirimkan kode HTML lengkap ke browser pengunjung, dan halaman web tampil sempurna dalam hitungan milidetik!</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<section class="mb-5 pb-4 border-bottom border-secondary">
    <div class="d-flex align-items-center mb-3">
        <span class="badge bg-info text-dark fs-6 me-3">Persiapan Level-Up</span>
        <h2 class="fw-bold mb-0 text-info">Mengapa Belajar OOP & MVC Hari Ini Wajib Sebelum Masuk Laravel?</h2>
    </div>

    <p class="text-light-50 fs-5 mb-4">
        Banyak siswa yang langsung melompat belajar <strong>Laravel</strong> tanpa memahami dasar OOP dan MVC sering merasa pusing dan mengeluh: <em>"Kenapa Laravel filenya banyak sekali? Di mana naruh kode SQL-nya? Kenapa ada tanda panah -&gt; di mana-mana?"</em>.
    </p>

    <!-- Kartu Komparasi 1:1 -->
    <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
        <div class="card-body p-4">
            <h5 class="fw-bold text-white mb-3"><i class="bi bi-arrows-angle-contract text-primary me-2"></i>Peta Kesamaan 1-ke-1 (PHP Native MVC vs Laravel Framework):</h5>
            <p class="text-light-50 small mb-3">Perhatikan bahwa apa yang kita pelajari hari ini memiliki padanan yang identik 100% di dalam arsitektur Laravel:</p>
            
            <div class="table-responsive">
                <table class="table table-dark table-hover border-secondary align-middle mb-0">
                    <thead class="table-active">
                        <tr class="text-info">
                            <th style="width: 25%;">Komponen Arsitektur</th>
                            <th style="width: 35%;">Yang Kita Pelajari Hari Ini (Native OOP-MVC)</th>
                            <th style="width: 40%;">Di Framework Laravel (Pertemuan 5 Nanti)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bold"><i class="bi bi-door-closed text-primary me-2"></i>Pintu Masuk & Routing</td>
                            <td><code>index.php</code> (Mengecek query string <code>?page=...</code>)</td>
                            <td><code>routes/web.php</code> (Mendefinisikan Route::get & Route::post)</td>
                        </tr>
                        <tr>
                            <td class="fw-bold"><i class="bi bi-controller text-warning me-2"></i>Controller</td>
                            <td><code>controllers/ProductController.php</code> (Class controller)</td>
                            <td><code>app/Http/Controllers/ProductController.php</code></td>
                        </tr>
                        <tr>
                            <td class="fw-bold"><i class="bi bi-database text-info me-2"></i>Model & Database</td>
                            <td><code>models/ProductModel.php</code> (Class query SQL)</td>
                            <td><code>app/Models/Product.php</code> (Eloquent ORM Class)</td>
                        </tr>
                        <tr>
                            <td class="fw-bold"><i class="bi bi-layout-text-window-reverse text-success me-2"></i>View / Tampilan</td>
                            <td><code>views/products/index.php</code> (HTML + Bootstrap)</td>
                            <td><code>resources/views/products/index.blade.php</code> (Blade Engine)</td>
                        </tr>
                        <tr>
                            <td class="fw-bold"><i class="bi bi-hdd-network text-secondary me-2"></i>Koneksi Database</td>
                            <td><code>config/Database.php</code> (Class PDO Connection)</td>
                            <td><code>.env</code> & <code>config/database.php</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Tabel Komparasi Prosedural vs MVC -->
    <div class="row g-4 mt-2">
        <div class="col-12">
            <h5 class="fw-bold text-white mb-3"><i class="bi bi-bar-chart-steps text-info me-2"></i>Perbandingan Menyeluruh: Procedural Spaghetti vs Clean MVC</h5>
            <div class="table-responsive">
                <table class="table table-dark table-striped border-secondary align-middle">
                    <thead>
                        <tr class="text-light">
                            <th>Aspek Penilaian</th>
                            <th class="text-danger">Gaya Prosedural Lama (Spaghetti)</th>
                            <th class="text-success">Gaya Arsitektur OOP & MVC</th>
                        </tr>
                    </thead>
                    <tbody class="small text-light-50">
                        <tr>
                            <td class="fw-bold text-white">Struktur File</td>
                            <td>1 file mengerjakan segalanya (koneksi, query, form, HTML).</td>
                            <td>Terorganisir rapi dalam folder <code>models/</code>, <code>views/</code>, dan <code>controllers/</code>.</td>
                        </tr>
                        <tr>
                            <td class="fw-bold text-white">Kemudahan Debugging</td>
                            <td>Jika ada error baris 85, harus membaca 500 baris kode yang campur aduk.</td>
                            <td>Sangat cepat! Error SQL langsung ke Model, error tombol/UI langsung ke View, error alur langsung ke Controller.</td>
                        </tr>
                        <tr>
                            <td class="fw-bold text-white">Kerja Tim (Kolaborasi)</td>
                            <td>Rawan konflik git karena backend dev dan frontend dev mengedit file yang sama.</td>
                            <td>Sangat aman! Programmer backend fokus di Controller/Model, desainer frontend fokus di View.</td>
                        </tr>
                        <tr>
                            <td class="fw-bold text-white">Kesiapan Belajar Framework</td>
                            <td>Akan kaget dan bingung melihat sintaks Laravel atau CodeIgniter.</td>
                            <td>Transisi mulus tanpa hambatan karena pola pikirnya sudah terbiasa dengan MVC!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3 px-3 py-2">Tahap 1</span>
                    <h2 class="fw-bold mb-0 text-primary">Setup Database & Skema Tabel di Laragon</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Kita akan membuat database baru bernama <code>db_bprotic_oop</code> beserta tabel <code>products</code> yang menyimpan inventaris barang teknologi lengkap dengan dummy data awal.
                </p>

                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h6 class="text-info fw-bold mb-0"><i class="bi bi-database-fill-gear me-2"></i>SQL Schema Script (db_bprotic_oop):</h6>
                            <span class="badge bg-dark border border-secondary text-info px-3 py-2 font-monospace">MySQL / MariaDB</span>
                        </div>
                        <pre><code class="language-sql">-- =========================================================
-- BPROTIC COURSE - TRACK WEB DEVELOPMENT (PERTEMUAN 4)
-- Database Name: db_bprotic_oop
-- =========================================================

-- 1. Buat Database Baru jika belum ada
CREATE DATABASE IF NOT EXISTS db_bprotic_oop;
USE db_bprotic_oop;

-- 2. Buat Tabel Produk dengan Tipe Data Presisi
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_produk VARCHAR(150) NOT NULL,
    kategori VARCHAR(60) NOT NULL,
    harga INT NOT NULL,
    stok INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Masukkan Data Dummy Awal untuk Pengujian CRUD
INSERT INTO products (nama_produk, kategori, harga, stok) VALUES
('MacBook Pro M3 14 Inch', 'Elektronik', 28999000, 7),
('Keychron Q1 Pro Wireless Mechanical Keyboard', 'Aksesoris', 2950000, 15),
('Dell UltraSharp 27 4K UHD Monitor', 'Elektronik', 9800000, 10),
('Logitech MX Master 3S Ergonomic Mouse', 'Aksesoris', 1450000, 25),
('Sony WH-1000XM5 Wireless Headphones', 'Audio', 4999000, 12);</code></pre>

                        <div class="p-3 bg-dark rounded border border-secondary mt-3">
                            <h6 class="text-white fw-bold mb-2"><i class="bi bi-terminal-check me-2 text-success"></i>Langkah Eksekusi di phpMyAdmin:</h6>
                            <ol class="small text-light-50 mb-0 lh-lg">
                                <li>Pastikan aplikasi <strong>Laragon</strong> aktif dan tombol <strong>Start All</strong> sudah menyala (Apache & MySQL berwarna hijau).</li>
                                <li>Klik tombol <strong>Database</strong> di Laragon atau buka browser di URL <code>http://localhost/phpmyadmin</code>.</li>
                                <li>Klik tab <strong>SQL</strong> pada menu navigasi atas.</li>
                                <li>Salin dan tempel kode query SQL di atas ke dalam kolom textarea.</li>
                                <li>Klik tombol <strong>Kirim / Go</strong> di pojok kanan bawah. Database <code>db_bprotic_oop</code> beserta tabel <code>products</code> telah siap digunakan!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

<section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3 px-3 py-2">Tahap 2</span>
                    <h2 class="fw-bold mb-0 text-primary">Struktur Direktori MVC & Alur Kerja Front Controller</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Buat folder project baru bernama <code>bprotic-oop-mvc</code> di dalam direktori <code>C:\\laragon\\www\\</code>. 
                    Susun folder dan file persis sesuai pola arsitektur berikut:
                </p>

                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <h6 class="text-info fw-bold mb-3"><i class="bi bi-folder-tree me-2"></i>Pohon Struktur File Project:</h6>
                        <pre><code class="language-bash">C:\\laragon\\www\\bprotic-oop-mvc\\
├── config/
│   └── Database.php             # [CONFIG] Class koneksi database berbasis PDO (PHP Data Objects)
├── models/
│   └── Product.php              # [MODEL] Class model penyedia query CRUD dengan PDO Prepared Statements
├── controllers/
│   └── ProductController.php    # [CONTROLLER] Class pengatur alur logika bisnis, validasi, dan response view
├── views/
│   ├── layouts/
│   │   ├── header.php           # [VIEW LAYOUT] Header HTML, CSS Dark Theme, Font & Navigasi
│   │   └── footer.php           # [VIEW LAYOUT] Footer HTML, Bootstrap Bundle JS & Skrip JS Modal
│   └── products/
│       └── index.php            # [VIEW UTAMA] Tampilan tabel katalog produk & Modal Bootstrap
└── index.php                    # [FRONT CONTROLLER] Satu-satunya gerbang masuk & Simple Router</code></pre>

                        <!-- Diagram Alur Request MVC -->
                        <div class="p-4 bg-dark rounded-4 border border-info border-opacity-25 mt-4">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-arrow-repeat me-2"></i>Alur Permintaan (Request Lifecycle) MVC:</h6>
                            <div class="row g-3 text-center">
                                <div class="col-md-2 col-6">
                                    <div class="p-3 bg-dark-lighter rounded-3 border border-secondary h-100">
                                        <i class="bi bi-browser-chrome fs-2 text-warning mb-2 d-block"></i>
                                        <strong class="text-white d-block small">1. Browser</strong>
                                        <span class="text-secondary" style="font-size: 0.75rem;">Akses URL index.php</span>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6">
                                    <div class="p-3 bg-dark-lighter rounded-3 border border-primary h-100">
                                        <i class="bi bi-signpost-split-fill fs-2 text-primary mb-2 d-block"></i>
                                        <strong class="text-white d-block small">2. Front Router</strong>
                                        <span class="text-secondary" style="font-size: 0.75rem;">Membaca ?action</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-6">
                                    <div class="p-3 bg-dark-lighter rounded-3 border border-info h-100">
                                        <i class="bi bi-cpu-fill fs-2 text-info mb-2 d-block"></i>
                                        <strong class="text-white d-block small">3. Controller</strong>
                                        <span class="text-secondary" style="font-size: 0.75rem;">Validasi & Eksekusi Method</span>
                                    </div>
                                </div>
                                <div class="col-md-2 col-6">
                                    <div class="p-3 bg-dark-lighter rounded-3 border border-success h-100">
                                        <i class="bi bi-database-fill-check fs-2 text-success mb-2 d-block"></i>
                                        <strong class="text-white d-block small">4. Model & DB</strong>
                                        <span class="text-secondary" style="font-size: 0.75rem;">Prepared Statement PDO</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-12">
                                    <div class="p-3 bg-dark-lighter rounded-3 border border-danger h-100">
                                        <i class="bi bi-window-fullscreen fs-2 text-danger mb-2 d-block"></i>
                                        <strong class="text-white d-block small">5. View Render</strong>
                                        <span class="text-secondary" style="font-size: 0.75rem;">HTML dikirim kembali ke Browser</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3 px-3 py-2">Tahap 3</span>
                    <h2 class="fw-bold mb-0 text-primary">Implementasi Kode Lengkap File demi File</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Setiap file berikut ditulis dengan standar PHP 8.1+ dan dilengkapi komentar baris demi baris (<em>inline comments</em>) agar alur eksekusi dapat dipahami secara mendalam.
                </p>

                <!-- File 1: config/Database.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-info text-dark me-2 font-monospace">File 1</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-info"></i>config/Database.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-secondary">Class Database & Koneksi PDO</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-info me-1"></i>
                            Class ini mengisolasi konfigurasi database menggunakan teknik <strong>Encapsulation</strong> (properti private). Mengembalikan instance <code>PDO</code> dengan mode error exception.
                        </p>
                        <pre><code class="language-php">&lt;?php
// config/Database.php
// Class Database: Mengelola koneksi PDO (PHP Data Objects) secara terpusat

class Database {
    // Properti koneksi (Private agar data kredensial tidak dapat diakses langsung dari luar class)
    private string $host     = "localhost";
    private string $db_name  = "db_bprotic_oop";
    private string $username = "root";
    private string $password = "";
    
    // Properti untuk menyimpan instance koneksi PDO (Bisa bernilai objek PDO atau null)
    private ?PDO $conn = null;

    /**
     * Method untuk mendapatkan koneksi aktif ke database MySQL
     * @return PDO|null Objek PDO yang siap mengeksekusi query
     */
    public function getConnection(): ?PDO {
        // Hanya buat koneksi baru jika properti $conn masih kosong (Singleton-style caching)
        if ($this-&gt;conn === null) {
            try {
                // DSN (Data Source Name): format standar PDO untuk menentukan driver, host, database, dan charset
                $dsn = "mysql:host=" . $this-&gt;host . ";dbname=" . $this-&gt;db_name . ";charset=utf8mb4";
                
                // Opsi konfigurasi koneksi PDO
                $options = [
                    // Otomatis melempar Exception jika query SQL mengalami kegagalan/sintaks error
                    PDO::ATTR_ERRMODE            =&gt; PDO::ERRMODE_EXCEPTION,
                    // Format pengembalian data default sebagai array asosiatif (nama kolom sebagai key)
                    PDO::ATTR_DEFAULT_FETCH_MODE =&gt; PDO::FETCH_ASSOC,
                    // Mematikan emulasi prepared statement agar query dieksekusi secara native oleh MySQL
                    PDO::ATTR_EMULATE_PREPARES   =&gt; false,
                ];

                // Membuat objek PDO baru dengan kredensial yang ditentukan
                $this-&gt;conn = new PDO($dsn, $this-&gt;username, $this-&gt;password, $options);

            } catch (PDOException $exception) {
                // Tangkap error jika koneksi MySQL gagal (misal server mati atau password salah)
                die("Koneksi Database Gagal: " . $exception-&gt;getMessage());
            }
        }

        // Kembalikan objek koneksi yang berhasil dibuat
        return $this-&gt;conn;
    }
}
?&gt;</code></pre>

                        <!-- Bedah Konsep File 1 -->
                        <div class="row g-3 mt-2">
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-warning fw-bold small mb-1"><i class="bi bi-shield-lock me-1"></i>Kenapa Menggunakan PDO, Bukan MySQLi?</h6>
                                    <p class="small text-light-50 mb-0">PDO adalah antarmuka database standar industri modern di PHP. Mendukung 12 driver database berbeda (MySQL, PostgreSQL, SQLite, dll.), memiliki penanganan error Exception yang rapi, dan fitur Prepared Statement yang sangat kuat.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-info fw-bold small mb-1"><i class="bi bi-key me-1"></i>Apa itu Encapsulation (Private Property)?</h6>
                                    <p class="small text-light-50 mb-0">Dengan menandai variabel sebagai <code>private</code>, variabel tersebut hanya bisa diakses di dalam class itu sendiri. Pihak luar tidak bisa sengaja atau tidak sengaja mengubah nama host atau password database.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- File 2: models/Product.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-primary me-2 font-monospace">File 2</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-primary"></i>models/Product.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-primary">Class Model CRUD & Prepared Statement</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-primary me-1"></i>
                            Class Model memegang seluruh operasi database untuk entitas <code>products</code>. Menerima koneksi PDO melalui <strong>Constructor Dependency Injection</strong> dan kebal SQL Injection berkat parameter binding.
                        </p>
                        <pre><code class="language-php">&lt;?php
// models/Product.php
// Class Product: Model data yang berinteraksi langsung dengan tabel 'products'

class Product {
    // Properti penyimpan koneksi PDO
    private PDO $conn;
    
    // Nama tabel database yang dikelola oleh Model ini
    private string $table = "products";

    /**
     * Constructor: Dieksekusi otomatis saat objek baru dibuat (new Product)
     * Menggunakan konsep Dependency Injection untuk menerima objek koneksi PDO
     * @param PDO $db Objek koneksi database
     */
    public function __construct(PDO $db) {
        $this-&gt;conn = $db;
    }

    /**
     * 1. READ ALL: Mengambil seluruh daftar produk terurut dari yang paling baru
     * @return array Daftar baris produk dalam bentuk array asosiatif
     */
    public function getAll(): array {
        // Query SQL murni
        $sql = "SELECT id, nama_produk, kategori, harga, stok, created_at FROM {$this-&gt;table} ORDER BY id DESC";
        
        // Siapkan query dengan method prepare (Prepared Statement)
        $stmt = $this-&gt;conn-&gt;prepare($sql);
        
        // Jalankan query ke MySQL
        $stmt-&gt;execute();
        
        // Ambil semua hasil data sebagai array asosiatif
        return $stmt-&gt;fetchAll();
    }

    /**
     * 2. READ ONE: Mengambil satu data produk spesifik berdasarkan ID
     * @param int $id Primary key produk
     * @return array|null Baris data produk jika ditemukan, atau null jika tidak ada
     */
    public function getById(int $id): ?array {
        // Placeholder :id digunakan untuk mencegah SQL Injection
        $sql = "SELECT id, nama_produk, kategori, harga, stok, created_at FROM {$this-&gt;table} WHERE id = :id LIMIT 1";
        
        $stmt = $this-&gt;conn-&gt;prepare($sql);
        
        // Ikat parameter :id dengan tipe integer PDO
        $stmt-&gt;bindParam(':id', $id, PDO::PARAM_INT);
        $stmt-&gt;execute();
        
        // Ambil 1 baris hasil
        $result = $stmt-&gt;fetch();
        return $result ? $result : null;
    }

    /**
     * 3. CREATE: Menyimpan produk baru ke dalam tabel
     * @param array $data Data kiriman form ['nama_produk', 'kategori', 'harga', 'stok']
     * @return bool True jika berhasil disimpan, False jika gagal
     */
    public function create(array $data): bool {
        // Gunakan named placeholder (:nama_produk, :kategori, :harga, :stok)
        $sql = "INSERT INTO {$this-&gt;table} (nama_produk, kategori, harga, stok) 
                VALUES (:nama_produk, :kategori, :harga, :stok)";
        
        $stmt = $this-&gt;conn-&gt;prepare($sql);

        // Eksekusi langsung dengan memasukkan array asosiatif parameter
        return $stmt-&gt;execute([
            ':nama_produk' =&gt; $data['nama_produk'],
            ':kategori'    =&gt; $data['kategori'],
            ':harga'       =&gt; (int)$data['harga'],
            ':stok'        =&gt; (int)$data['stok']
        ]);
    }

    /**
     * 4. UPDATE: Memperbarui data produk yang sudah ada berdasarkan ID
     * @param int $id ID produk yang ingin diubah
     * @param array $data Data perubahan baru
     * @return bool True jika berhasil diupdate, False jika gagal
     */
    public function update(int $id, array $data): bool {
        $sql = "UPDATE {$this-&gt;table} 
                SET nama_produk = :nama_produk, 
                    kategori    = :kategori, 
                    harga       = :harga, 
                    stok        = :stok 
                WHERE id = :id";
        
        $stmt = $this-&gt;conn-&gt;prepare($sql);

        // Eksekusi statement dengan menggabungkan parameter data dan ID
        return $stmt-&gt;execute([
            ':id'          =&gt; $id,
            ':nama_produk' =&gt; $data['nama_produk'],
            ':kategori'    =&gt; $data['kategori'],
            ':harga'       =&gt; (int)$data['harga'],
            ':stok'        =&gt; (int)$data['stok']
        ]);
    }

    /**
     * 5. DELETE: Menghapus produk dari database berdasarkan ID
     * @param int $id ID produk yang akan dihapus
     * @return bool True jika berhasil dihapus, False jika gagal
     */
    public function delete(int $id): bool {
        $sql = "DELETE FROM {$this-&gt;table} WHERE id = :id";
        
        $stmt = $this-&gt;conn-&gt;prepare($sql);
        $stmt-&gt;bindParam(':id', $id, PDO::PARAM_INT);
        
        return $stmt-&gt;execute();
    }
}
?&gt;</code></pre>

                        <!-- Bedah Konsep File 2 -->
                        <div class="row g-3 mt-2">
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-success fw-bold small mb-1"><i class="bi bi-shield-check me-1"></i>Bagaimana Prepared Statement Mencegah SQL Injection?</h6>
                                    <p class="small text-light-50 mb-0">Pada query biasa, teks input berbahaya seperti <code>' OR '1'='1</code> bisa merusak struktur query. Dengan PDO Prepared Statement, database memisahkan antara <strong>struktur query</strong> dan <strong>data input</strong>, sehingga data input selalu diperlakukan murni sebagai nilai string/angka biasa.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-primary fw-bold small mb-1"><i class="bi bi-arrow-down-up me-1"></i>Apa itu Dependency Injection?</h6>
                                    <p class="small text-light-50 mb-0">Daripada membuat koneksi baru di dalam class (misal <code>$this->conn = new Database()</code>), Model Product menerimanya lewat constructor <code>__construct(PDO $db)</code>. Ini membuat kode sangat modular, mudah dites, dan hemat memori.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- File 3: controllers/ProductController.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-warning text-dark me-2 font-monospace">File 3</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-warning"></i>controllers/ProductController.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-warning">Class Controller Logika Bisnis</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-warning me-1"></i>
                            Controller adalah otak aplikasi: menerima input user, melakukan validasi, memerintahkan Model untuk manipulasi database, lalu memanggil View atau mengarahkan redirect HTTP.
                        </p>
                        <pre><code class="language-php">&lt;?php
// controllers/ProductController.php
// Class ProductController: Mengatur alur logika antara Model dan View

// Mengimpor file konfigurasi database dan model produk
require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../models/Product.php';

class ProductController {
    // Properti untuk menyimpan instance dari Model Product
    private Product $productModel;

    /**
     * Constructor Controller:
     * Menghubungkan ke database dan menginisialisasi objek Model Product
     */
    public function __construct() {
        // Buat objek database baru
        $database = new Database();
        $db = $database-&gt;getConnection();
        
        // Inisialisasi Model Product dengan mengoper koneksi PDO
        $this-&gt;productModel = new Product($db);
    }

    /**
     * METHOD 1: INDEX
     * Menampilkan halaman utama katalog produk
     */
    public function index(): void {
        // Ambil seluruh data produk melalui method Model
        $products = $this-&gt;productModel-&gt;getAll();

        // Muat bagian-bagian tampilan secara modular (Header -&gt; Halaman Produk -&gt; Footer)
        require_once __DIR__ . '/../views/layouts/header.php';
        require_once __DIR__ . '/../views/products/index.php';
        require_once __DIR__ . '/../views/layouts/footer.php';
    }

    /**
     * METHOD 2: STORE (CREATE)
     * Memproses data form POST penambahan produk baru
     */
    public function store(): void {
        // Pastikan hanya melayani request berjenis HTTP POST
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Ambil dan bersihkan input teks dengan fungsi trim()
            $nama     = trim($_POST['nama_produk'] ?? '');
            $kategori = trim($_POST['kategori'] ?? '');
            $harga    = (int)($_POST['harga'] ?? 0);
            $stok     = (int)($_POST['stok'] ?? 0);

            // Validasi: pastikan kolom wajib tidak kosong dan harga valid
            if (empty($nama) || empty($kategori) || $harga &lt;= 0) {
                // Alihkan kembali ke halaman utama dengan pesan error
                header("Location: index.php?status=error&amp;msg=Semua kolom wajib diisi dengan benar!");
                exit; // Selalu panggil exit setelah header redirect agar eksekusi script berhenti
            }

            // Kemas data ke dalam array
            $data = [
                'nama_produk' =&gt; $nama,
                'kategori'    =&gt; $kategori,
                'harga'       =&gt; $harga,
                'stok'        =&gt; $stok
            ];

            // Simpan ke database melalui model
            if ($this-&gt;productModel-&gt;create($data)) {
                header("Location: index.php?status=success&amp;msg=Produk baru berhasil ditambahkan!");
            } else {
                header("Location: index.php?status=error&amp;msg=Gagal menyimpan produk ke database.");
            }
            exit;
        }

        // Jika diakses selain POST, redirect ke index
        header("Location: index.php");
        exit;
    }

    /**
     * METHOD 3: UPDATE (EDIT)
     * Memproses data form POST pembaruan data produk
     */
    public function update(): void {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Ambil ID dan data form yang diedit
            $id       = (int)($_POST['id'] ?? 0);
            $nama     = trim($_POST['nama_produk'] ?? '');
            $kategori = trim($_POST['kategori'] ?? '');
            $harga    = (int)($_POST['harga'] ?? 0);
            $stok     = (int)($_POST['stok'] ?? 0);

            // Validasi ID dan kelengkapan data
            if ($id &lt;= 0 || empty($nama) || empty($kategori) || $harga &lt;= 0) {
                header("Location: index.php?status=error&amp;msg=ID produk tidak valid atau data belum lengkap!");
                exit;
            }

            $data = [
                'nama_produk' =&gt; $nama,
                'kategori'    =&gt; $kategori,
                'harga'       =&gt; $harga,
                'stok'        =&gt; $stok
            ];

            // Panggil method update dari model
            if ($this-&gt;productModel-&gt;update($id, $data)) {
                header("Location: index.php?status=success&amp;msg=Data produk berhasil diperbarui!");
            } else {
                header("Location: index.php?status=error&amp;msg=Gagal memperbarui data produk.");
            }
            exit;
        }

        header("Location: index.php");
        exit;
    }

    /**
     * METHOD 4: DELETE (HAPUS)
     * Menghapus data produk berdasarkan ID yang dikirim via GET
     */
    public function delete(): void {
        // Ambil ID produk dari query string URL
        $id = (int)($_GET['id'] ?? 0);

        // Pastikan ID valid (angka lebih dari nol)
        if ($id &gt; 0) {
            if ($this-&gt;productModel-&gt;delete($id)) {
                header("Location: index.php?status=success&amp;msg=Produk berhasil dihapus dari sistem!");
            } else {
                header("Location: index.php?status=error&amp;msg=Gagal menghapus produk dari database.");
            }
            exit;
        }

        header("Location: index.php?status=error&amp;msg=ID produk tidak valid.");
        exit;
    }
}
?&gt;</code></pre>

                        <!-- Bedah Konsep File 3 -->
                        <div class="row g-3 mt-2">
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-danger fw-bold small mb-1"><i class="bi bi-exclamation-octagon me-1"></i>Mengapa Wajib Menulis exit Setelah header()?</h6>
                                    <p class="small text-light-50 mb-0">Fungsi <code>header("Location: ...")</code> hanya mengirimkan header HTTP ke browser untuk melakukan redirect, namun <em>tidak</em> menghentikan PHP. Jika tanpa <code>exit;</code>, baris kode di bawahnya tetap akan dieksekusi di server!</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 bg-dark rounded border border-secondary h-100">
                                    <h6 class="text-info fw-bold small mb-1"><i class="bi bi-box-arrow-in-right me-1"></i>Bagaimana Variabel $products Sampai ke View?</h6>
                                    <p class="small text-light-50 mb-0">Di dalam method <code>index()</code>, variabel <code>$products = $this->productModel->getAll();</code> dibuat sebelum baris <code>require_once ... views/products/index.php</code>. Karena di-require di scope yang sama, file view otomatis mewarisi variabel <code>$products</code> tersebut!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- File 4: views/layouts/header.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-secondary me-2 font-monospace">File 4</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-secondary"></i>views/layouts/header.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-secondary">Template Header & Navbar Dark Theme</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-secondary me-1"></i>
                            Template header memuat deklarasi HTML, CDN Bootstrap 5, Font Google Plus Jakarta Sans, dan styling khusus dark mode yang konsisten.
                        </p>
                        <pre><code class="language-php">&lt;?php
// views/layouts/header.php
// Template Header &amp; Navigasi Aplikasi
?&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;BPROTIC OOP &amp; MVC - Katalog Produk Modern&lt;/title&gt;
    &lt;!-- Bootstrap 5.3 CSS CDN --&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
    &lt;!-- Bootstrap Icons CDN --&gt;
    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"&gt;
    &lt;!-- Google Fonts: Plus Jakarta Sans --&gt;
    &lt;link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"&gt;
    &lt;style&gt;
        body {
            background-color: #0b1120;
            color: #f1f5f9;
            font-family: 'Plus Jakarta Sans', sans-serif;
            min-height: 100vh;
        }
        .navbar-brand-gradient {
            font-weight: 800;
            letter-spacing: -0.5px;
            background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .card-custom {
            background-color: #111827;
            border: 1px solid #1f2937;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .table-custom {
            color: #f1f5f9;
        }
        .table-custom thead th {
            background-color: #0b1120;
            border-bottom: 2px solid #38bdf8;
            color: #94a3b8;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 14px 16px;
        }
        .table-custom tbody tr {
            border-bottom: 1px solid #1f2937;
            transition: all 0.2s ease;
        }
        .table-custom tbody tr:hover {
            background-color: rgba(56, 189, 248, 0.04);
        }
        .badge-kategori {
            background: rgba(56, 189, 248, 0.12);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.3);
            font-weight: 600;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 0.8rem;
        }
        .badge-stok {
            background: rgba(16, 185, 129, 0.12);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.3);
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 8px;
        }
        .modal-content {
            background-color: #111827;
            border: 1px solid #374151;
            color: #f1f5f9;
            border-radius: 20px;
        }
        .modal-header, .modal-footer {
            border-color: #1f2937;
        }
        .form-control, .form-select {
            background-color: #0b1120;
            border: 1px solid #374151;
            color: #f1f5f9;
            border-radius: 10px;
            padding: 10px 14px;
        }
        .form-control:focus, .form-select:focus {
            background-color: #0b1120;
            border-color: #38bdf8;
            color: #fff;
            box-shadow: 0 0 0 0.25rem rgba(56, 189, 248, 0.2);
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body class="pb-5"&gt;
    &lt;!-- Navbar Atas --&gt;
    &lt;nav class="navbar navbar-dark bg-dark bg-opacity-50 border-bottom border-secondary border-opacity-25 py-3 mb-5"&gt;
        &lt;div class="container"&gt;
            &lt;a class="navbar-brand d-flex align-items-center gap-2" href="index.php"&gt;
                &lt;i class="bi bi-boxes fs-3 text-info"&gt;&lt;/i&gt;
                &lt;span class="navbar-brand-gradient fs-4"&gt;BPROTIC MVC&lt;/span&gt;
                &lt;span class="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50 ms-2 small"&gt;OOP Native&lt;/span&gt;
            &lt;/a&gt;
            &lt;div class="d-flex align-items-center gap-3"&gt;
                &lt;span class="text-secondary small d-none d-md-inline"&gt;
                    &lt;i class="bi bi-shield-check text-success me-1"&gt;&lt;/i&gt;PDO Prepared Statements Active
                &lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/nav&gt;
    &lt;main class="container"&gt;</code></pre>
                    </div>
                </div>

                <!-- File 5: views/products/index.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-success me-2 font-monospace">File 5</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-success"></i>views/products/index.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-success">View Utama & Modal Bootstrap</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-success me-1"></i>
                            File tampilan utama yang menyajikan daftar produk dalam tabel interaktif, notifikasi alert, serta Modal Bootstrap untuk aksi Tambah dan Edit data.
                        </p>
                        <pre><code class="language-php">&lt;?php
// views/products/index.php
// Tampilan Utama: Header Halaman, Alert Notifikasi, Tabel Data, dan Modal CRUD
?&gt;

&lt;!-- Header Halaman &amp; Tombol Tambah --&gt;
&lt;div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3"&gt;
    &lt;div&gt;
        &lt;h2 class="fw-bold text-white mb-1"&gt;&lt;i class="bi bi-laptop me-2 text-info"&gt;&lt;/i&gt;Katalog Produk BPROTIC&lt;/h2&gt;
        &lt;p class="text-secondary mb-0"&gt;Implementasi CRUD berbasis OOP &amp; Pure MVC Architecture (PHP 8.1+)&lt;/p&gt;
    &lt;/div&gt;
    &lt;button type="button" class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm fw-semibold" data-bs-toggle="modal" data-bs-target="#modalTambah"&gt;
        &lt;i class="bi bi-plus-lg me-2"&gt;&lt;/i&gt;Tambah Produk
    &lt;/button&gt;
&lt;/div&gt;

&lt;!-- Alert Notifikasi Status (Success / Error) --&gt;
&lt;?php if (isset($_GET['status'])): ?&gt;
    &lt;?php if ($_GET['status'] === 'success'): ?&gt;
        &lt;div class="alert alert-success alert-dismissible fade show rounded-3 mb-4 d-flex align-items-center" role="alert"&gt;
            &lt;i class="bi bi-check-circle-fill fs-5 me-2"&gt;&lt;/i&gt;
            &lt;div&gt;&lt;?= htmlspecialchars($_GET['msg'] ?? 'Aksi berhasil dilakukan!'); ?&gt;&lt;/div&gt;
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
        &lt;/div&gt;
    &lt;?php elseif ($_GET['status'] === 'error'): ?&gt;
        &lt;div class="alert alert-danger alert-dismissible fade show rounded-3 mb-4 d-flex align-items-center" role="alert"&gt;
            &lt;i class="bi bi-exclamation-triangle-fill fs-5 me-2"&gt;&lt;/i&gt;
            &lt;div&gt;&lt;?= htmlspecialchars($_GET['msg'] ?? 'Terjadi kesalahan pada sistem!'); ?&gt;&lt;/div&gt;
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"&gt;&lt;/button&gt;
        &lt;/div&gt;
    &lt;?php endif; ?&gt;
&lt;?php endif; ?&gt;

&lt;!-- Card Tabel Data Produk --&gt;
&lt;div class="card card-custom overflow-hidden"&gt;
    &lt;div class="table-responsive"&gt;
        &lt;table class="table table-custom align-middle mb-0"&gt;
            &lt;thead&gt;
                &lt;tr&gt;
                    &lt;th class="ps-4" style="width: 5%;"&gt;No&lt;/th&gt;
                    &lt;th style="width: 35%;"&gt;Nama Produk&lt;/th&gt;
                    &lt;th style="width: 20%;"&gt;Kategori&lt;/th&gt;
                    &lt;th style="width: 15%;"&gt;Harga Satuan&lt;/th&gt;
                    &lt;th style="width: 10%;"&gt;Stok&lt;/th&gt;
                    &lt;th class="text-center" style="width: 15%;"&gt;Aksi&lt;/th&gt;
                &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody&gt;
                &lt;?php if (empty($products)): ?&gt;
                    &lt;tr&gt;
                        &lt;td colspan="6" class="text-center py-5 text-secondary"&gt;
                            &lt;i class="bi bi-inbox fs-1 d-block mb-2 text-secondary opacity-50"&gt;&lt;/i&gt;
                            &lt;span class="fs-6"&gt;Belum ada data produk di database.&lt;/span&gt;
                        &lt;/td&gt;
                    &lt;/tr&gt;
                &lt;?php else: ?&gt;
                    &lt;?php $no = 1; foreach ($products as $row): ?&gt;
                        &lt;tr&gt;
                            &lt;td class="ps-4 text-secondary"&gt;&lt;?= $no++; ?&gt;&lt;/td&gt;
                            &lt;td&gt;
                                &lt;strong class="text-white d-block"&gt;&lt;?= htmlspecialchars($row['nama_produk']); ?&gt;&lt;/strong&gt;
                                &lt;small class="text-secondary"&gt;Ditambahkan: &lt;?= date('d M Y', strtotime($row['created_at'])); ?&gt;&lt;/small&gt;
                            &lt;/td&gt;
                            &lt;td&gt;
                                &lt;span class="badge-kategori"&gt;&lt;?= htmlspecialchars($row['kategori']); ?&gt;&lt;/span&gt;
                            &lt;/td&gt;
                            &lt;td class="text-info fw-bold"&gt;
                                Rp &lt;?= number_format($row['harga'], 0, ',', '.'); ?&gt;
                            &lt;/td&gt;
                            &lt;td&gt;
                                &lt;span class="badge-stok"&gt;&lt;?= $row['stok']; ?&gt; pcs&lt;/span&gt;
                            &lt;/td&gt;
                            &lt;td class="text-center"&gt;
                                &lt;!-- Tombol Edit: Mengirim data produk ke Modal Edit via atribut data-* --&gt;
                                &lt;button type="button" 
                                    class="btn btn-warning btn-sm me-1 rounded-pill px-3 fw-medium btn-edit"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalEdit"
                                    data-id="&lt;?= $row['id']; ?&gt;"
                                    data-nama="&lt;?= htmlspecialchars($row['nama_produk']); ?&gt;"
                                    data-kategori="&lt;?= htmlspecialchars($row['kategori']); ?&gt;"
                                    data-harga="&lt;?= $row['harga']; ?&gt;"
                                    data-stok="&lt;?= $row['stok']; ?&gt;"&gt;
                                    &lt;i class="bi bi-pencil-square me-1"&gt;&lt;/i&gt;Edit
                                &lt;/button&gt;
                                
                                &lt;!-- Tombol Hapus: Mengarah ke Front Controller (index.php?action=delete&amp;id=...) --&gt;
                                &lt;a href="index.php?action=delete&amp;id=&lt;?= $row['id']; ?&gt;" 
                                   class="btn btn-danger btn-sm rounded-pill px-3 fw-medium"
                                   onclick="return confirm('Apakah Anda yakin ingin menghapus produk &lt;?= htmlspecialchars($row['nama_produk']); ?&gt;?');"&gt;
                                    &lt;i class="bi bi-trash3 me-1"&gt;&lt;/i&gt;Hapus
                                &lt;/a&gt;
                            &lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;?php endforeach; ?&gt;
                &lt;?php endif; ?&gt;
            &lt;/tbody&gt;
        &lt;/table&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- ================= MODAL TAMBAH PRODUK ================= --&gt;
&lt;div class="modal fade" id="modalTambah" tabindex="-1" aria-labelledby="modalTambahLabel" aria-hidden="true"&gt;
    &lt;div class="modal-dialog modal-dialog-centered"&gt;
        &lt;div class="modal-content shadow-lg"&gt;
            &lt;div class="modal-header"&gt;
                &lt;h5 class="modal-title text-primary fw-bold" id="modalTambahLabel"&gt;
                    &lt;i class="bi bi-plus-circle-fill me-2"&gt;&lt;/i&gt;Tambah Produk Baru
                &lt;/h5&gt;
                &lt;button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;!-- Form diarahkan ke Front Controller dengan query param ?action=store --&gt;
            &lt;form action="index.php?action=store" method="POST"&gt;
                &lt;div class="modal-body p-4"&gt;
                    &lt;div class="mb-3"&gt;
                        &lt;label class="form-label text-light fw-medium"&gt;Nama Produk&lt;/label&gt;
                        &lt;input type="text" name="nama_produk" class="form-control" placeholder="Contoh: iPad Air Gen 5" required&gt;
                    &lt;/div&gt;
                    &lt;div class="mb-3"&gt;
                        &lt;label class="form-label text-light fw-medium"&gt;Kategori&lt;/label&gt;
                        &lt;select name="kategori" class="form-select" required&gt;
                            &lt;option value=""&gt;-- Pilih Kategori --&lt;/option&gt;
                            &lt;option value="Elektronik"&gt;Elektronik&lt;/option&gt;
                            &lt;option value="Aksesoris"&gt;Aksesoris&lt;/option&gt;
                            &lt;option value="Audio"&gt;Audio&lt;/option&gt;
                            &lt;option value="Komputer"&gt;Komputer&lt;/option&gt;
                        &lt;/select&gt;
                    &lt;/div&gt;
                    &lt;div class="row"&gt;
                        &lt;div class="col-md-6 mb-3"&gt;
                            &lt;label class="form-label text-light fw-medium"&gt;Harga (Rp)&lt;/label&gt;
                            &lt;input type="number" name="harga" class="form-control" placeholder="Contoh: 10500000" min="1" required&gt;
                        &lt;/div&gt;
                        &lt;div class="col-md-6 mb-3"&gt;
                            &lt;label class="form-label text-light fw-medium"&gt;Stok Unit&lt;/label&gt;
                            &lt;input type="number" name="stok" class="form-control" placeholder="Contoh: 8" min="0" required&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="modal-footer"&gt;
                    &lt;button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal"&gt;Batal&lt;/button&gt;
                    &lt;button type="submit" class="btn btn-primary rounded-pill px-4 fw-bold"&gt;Simpan Produk&lt;/button&gt;
                &lt;/div&gt;
            &lt;/form&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- ================= MODAL EDIT PRODUK ================= --&gt;
&lt;div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true"&gt;
    &lt;div class="modal-dialog modal-dialog-centered"&gt;
        &lt;div class="modal-content shadow-lg"&gt;
            &lt;div class="modal-header"&gt;
                &lt;h5 class="modal-title text-warning fw-bold" id="modalEditLabel"&gt;
                    &lt;i class="bi bi-pencil-square me-2"&gt;&lt;/i&gt;Edit Data Produk
                &lt;/h5&gt;
                &lt;button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;!-- Form diarahkan ke Front Controller dengan query param ?action=update --&gt;
            &lt;form action="index.php?action=update" method="POST"&gt;
                &lt;!-- Input hidden menyimpan ID produk yang akan diperbarui --&gt;
                &lt;input type="hidden" name="id" id="edit_id"&gt;
                
                &lt;div class="modal-body p-4"&gt;
                    &lt;div class="mb-3"&gt;
                        &lt;label class="form-label text-light fw-medium"&gt;Nama Produk&lt;/label&gt;
                        &lt;input type="text" name="nama_produk" id="edit_nama_produk" class="form-control" required&gt;
                    &lt;/div&gt;
                    &lt;div class="mb-3"&gt;
                        &lt;label class="form-label text-light fw-medium"&gt;Kategori&lt;/label&gt;
                        &lt;select name="kategori" id="edit_kategori" class="form-select" required&gt;
                            &lt;option value="Elektronik"&gt;Elektronik&lt;/option&gt;
                            &lt;option value="Aksesoris"&gt;Aksesoris&lt;/option&gt;
                            &lt;option value="Audio"&gt;Audio&lt;/option&gt;
                            &lt;option value="Komputer"&gt;Komputer&lt;/option&gt;
                        &lt;/select&gt;
                    &lt;/div&gt;
                    &lt;div class="row"&gt;
                        &lt;div class="col-md-6 mb-3"&gt;
                            &lt;label class="form-label text-light fw-medium"&gt;Harga (Rp)&lt;/label&gt;
                            &lt;input type="number" name="harga" id="edit_harga" class="form-control" min="1" required&gt;
                        &lt;/div&gt;
                        &lt;div class="col-md-6 mb-3"&gt;
                            &lt;label class="form-label text-light fw-medium"&gt;Stok Unit&lt;/label&gt;
                            &lt;input type="number" name="stok" id="edit_stok" class="form-control" min="0" required&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="modal-footer"&gt;
                    &lt;button type="button" class="btn btn-secondary rounded-pill px-4" data-bs-dismiss="modal"&gt;Batal&lt;/button&gt;
                    &lt;button type="submit" class="btn btn-warning text-dark rounded-pill px-4 fw-bold"&gt;Perbarui Perubahan&lt;/button&gt;
                &lt;/div&gt;
            &lt;/form&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>

                <!-- File 6: views/layouts/footer.php -->
                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-secondary d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-secondary me-2 font-monospace">File 6</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-secondary"></i>views/layouts/footer.php</strong>
                        </div>
                        <span class="badge bg-dark border border-secondary text-secondary">Template Footer & Skrip JS Modal</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-secondary me-1"></i>
                            Template footer memuat penutup tag HTML, Bootstrap 5 JavaScript Bundle, dan logika JavaScript murni untuk menyalin data dari tombol edit ke form Modal Edit.
                        </p>
                        <pre><code class="language-php">&lt;?php
// views/layouts/footer.php
// Template Footer &amp; Injeksi Data JavaScript ke Modal Edit
?&gt;
    &lt;/main&gt;

    &lt;footer class="mt-5 text-center text-secondary small py-4 border-top border-secondary border-opacity-25"&gt;
        &lt;div class="container"&gt;
            &lt;p class="mb-0"&gt;BPROTIC Online Course &amp;copy; &lt;?= date('Y'); ?&gt; &amp;mdash; Track Web Development (Pertemuan 4: Pure OOP &amp; MVC Architecture)&lt;/p&gt;
        &lt;/div&gt;
    &lt;/footer&gt;

    &lt;!-- Bootstrap 5 Bundle JS CDN (Sudah termasuk modul Popper) --&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;

    &lt;!-- JavaScript untuk Otomatisasi Transfer Data ke Modal Edit --&gt;
    &lt;script&gt;
        document.addEventListener("DOMContentLoaded", () =&gt; {
            // Tangkap seluruh tombol yang memiliki class .btn-edit
            const editButtons = document.querySelectorAll(".btn-edit");
            
            editButtons.forEach(button =&gt; {
                button.addEventListener("click", () =&gt; {
                    // Ambil nilai dari atribut data-* tombol yang sedang di-klik
                    const id       = button.getAttribute("data-id");
                    const nama     = button.getAttribute("data-nama");
                    const kategori = button.getAttribute("data-kategori");
                    const harga    = button.getAttribute("data-harga");
                    const stok     = button.getAttribute("data-stok");

                    // Masukkan nilai ke elemen input modal edit secara otomatis
                    document.getElementById("edit_id").value          = id;
                    document.getElementById("edit_nama_produk").value = nama;
                    document.getElementById("edit_kategori").value    = kategori;
                    document.getElementById("edit_harga").value       = harga;
                    document.getElementById("edit_stok").value        = stok;
                });
            });
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                </div>

                <!-- File 7: index.php (Front Controller & Simple Router) -->
                <div class="card bg-dark-lighter border-info mb-4 shadow-sm">
                    <div class="card-header bg-dark p-3 border-info d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-info text-dark me-2 font-monospace">File 7 (Utama)</span>
                            <strong class="text-white"><i class="bi bi-filetype-php me-2 text-info"></i>index.php</strong>
                        </div>
                        <span class="badge bg-dark border border-info text-info">Front Controller & Simple Router</span>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-light-50 small mb-3">
                            <i class="bi bi-info-circle text-info me-1"></i>
                            File <code>index.php</code> di root direktori bertindak sebagai <strong>Front Controller</strong> (pintu gerbang tunggal). Semua request masuk ke sini dan diteruskan ke method controller menggunakan fitur modern <code>match</code> di PHP 8.
                        </p>
                        <pre><code class="language-php">&lt;?php
// index.php
// ==============================================================================
// FRONT CONTROLLER &amp; SIMPLE ROUTER
// Seluruh traffic dan request pengguna pertama kali akan diterima oleh file ini.
// Konsep ini persis seperti public/index.php yang digunakan oleh Framework Laravel!
// ==============================================================================

// 1. Muat Class Controller yang bertugas menangani request
require_once __DIR__ . '/controllers/ProductController.php';

// 2. Instansiasi objek Controller
$controller = new ProductController();

// 3. Tangkap parameter aksi dari URL query string (?action=...)
// Gunakan Null Coalescing Operator (??): jika parameter kosong, gunakan 'index' sebagai nilai default
$action = $_GET['action'] ?? 'index';

// Catatan bagi pengguna PHP < 8.0:
// Anda juga dapat menggunakan switch-case tradisional bila server belum mendukung 'match':
// switch ($action) {
//     case 'create': $controller->create(); break;
//     case 'store':  $controller->store(); break;
//     case 'edit':   $controller->edit((int)($_GET['id'] ?? 0)); break;
//     case 'update': $controller->update((int)($_GET['id'] ?? 0)); break;
//     case 'delete': $controller->delete((int)($_GET['id'] ?? 0)); break;
//     default:       $controller->index(); break;
// }

// 4. Simple Router menggunakan sintaks match expression (PHP 8.1+)
// Mengarahkan ke method controller yang sesuai berdasarkan nilai $action
match ($action) {
    'index'  =&gt; $controller-&gt;index(),  // Tampilkan tabel utama
    'store'  =&gt; $controller-&gt;store(),  // Simpan data produk baru (POST)
    'update' =&gt; $controller-&gt;update(), // Update data produk yang diedit (POST)
    'delete' =&gt; $controller-&gt;delete(), // Hapus data produk berdasarkan ID (GET)
    default  =&gt; $controller-&gt;index(),  // Jika action tidak dikenal, default ke index
};
?&gt;</code></pre>

                        <!-- Bedah Konsep File 7 -->
                        <div class="p-3 bg-dark rounded border border-info mt-3">
                            <h6 class="text-info fw-bold mb-1"><i class="bi bi-door-open-fill me-2"></i>Keunggulan Pola Front Controller:</h6>
                            <p class="small text-light-50 mb-0">
                                Pada PHP lama, kita memiliki banyak file seperti <code>tambah.php</code>, <code>proses_tambah.php</code>, <code>edit.php</code>, <code>hapus.php</code> yang tersebar dan rentan bocor ke publik. Dengan Front Controller, seluruh aplikasi dikendalikan oleh satu gerbang utama (<code>index.php</code>). Kita dapat dengan mudah menambahkan middleware keamanan, logging, maupun autentikasi hanya di satu titik terpusat!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

<section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3 px-3 py-2">Tahap 4</span>
                    <h2 class="fw-bold mb-0 text-primary">Cara Menjalankan & Pengujian Lengkap di Laragon</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Setelah seluruh 7 file dibuat dengan benar, saatnya menjalankan aplikasi di browser melalui server lokal Laragon.
                </p>

                <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <h6 class="text-info fw-bold mb-3"><i class="bi bi-play-circle-fill me-2"></i>Cara Mengakses Project:</h6>
                                <ol class="small text-light-50 lh-lg mb-4">
                                    <li>Buka browser (Google Chrome, Firefox, atau Edge).</li>
                                    <li>Ketikkan alamat virtual host otomatis Laragon:<br>
                                        <a href="http://bprotic-oop-mvc.test" target="_blank" class="btn btn-outline-info btn-sm mt-1 mb-2 font-monospace">
                                            <i class="bi bi-box-arrow-up-right me-1"></i>http://bprotic-oop-mvc.test
                                        </a><br>
                                        <em>(Atau gunakan fallback: <code>http://localhost/bprotic-oop-mvc/</code> jika virtual host belum aktif).</em>
                                    </li>
                                    <li>Halaman katalog produk BPROTIC MVC bertema dark mode akan langsung tampil!</li>
                                </ol>

                                <h6 class="text-success fw-bold mb-3"><i class="bi bi-clipboard2-check-fill me-2"></i>Checklist Pengujian Operasi CRUD:</h6>
                                <ul class="small text-light-50 lh-lg mb-0">
                                    <li><i class="bi bi-check2-circle text-success me-2"></i><strong>READ:</strong> Pastikan 5 data dummy dari database <code>db_bprotic_oop</code> muncul di tabel.</li>
                                    <li><i class="bi bi-check2-circle text-success me-2"></i><strong>CREATE:</strong> Klik tombol "+ Tambah Produk", isi nama produk, pilih kategori, isi harga & stok, lalu klik Simpan. Notifikasi hijau sukses harus muncul dan data bertambah di baris paling atas.</li>
                                    <li><i class="bi bi-check2-circle text-success me-2"></i><strong>UPDATE:</strong> Klik tombol "Edit" pada salah satu produk. Modal akan terbuka dengan data yang sudah terisi otomatis. Ubah harga atau nama, lalu klik "Perbarui Perubahan". Data di tabel harus terupdate secara instan.</li>
                                    <li><i class="bi bi-check2-circle text-success me-2"></i><strong>DELETE:</strong> Klik tombol "Hapus", konfirmasi dialog browser dengan klik "OK". Data tersebut akan lenyap dari database dan tabel me-refresh dengan pesan konfirmasi.</li>
                                </ul>
                            </div>

                            <div class="col-lg-6">
                                <!-- Mockup Tampilan Preview -->
                                <div class="card bg-dark border-info shadow-lg p-3">
                                    <div class="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom border-secondary border-opacity-50">
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="rounded-circle bg-danger" style="width: 10px; height: 10px;"></span>
                                            <span class="rounded-circle bg-warning" style="width: 10px; height: 10px;"></span>
                                            <span class="rounded-circle bg-success" style="width: 10px; height: 10px;"></span>
                                            <span class="text-secondary small ms-2 font-monospace" style="font-size: 0.75rem;">http://bprotic-oop-mvc.test/</span>
                                        </div>
                                        <span class="badge bg-primary bg-opacity-25 text-info border border-info border-opacity-25 small">Live Mockup</span>
                                    </div>

                                    <div class="p-3 rounded-3" style="background: #111827; border: 1px solid #1f2937;">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <div>
                                                <h6 class="fw-bold text-white mb-0"><i class="bi bi-laptop me-1 text-info"></i>Katalog Produk BPROTIC</h6>
                                                <span class="text-secondary" style="font-size: 0.7rem;">Pure OOP &amp; MVC Architecture</span>
                                            </div>
                                            <span class="badge bg-primary px-2 py-1" style="font-size: 0.7rem;">+ Tambah Produk</span>
                                        </div>

                                        <div class="alert alert-success py-2 px-3 small rounded-2 mb-3 d-flex align-items-center" style="font-size: 0.75rem;">
                                            <i class="bi bi-check-circle-fill me-2"></i>Produk baru berhasil ditambahkan!
                                        </div>

                                        <div class="table-responsive">
                                            <table class="table table-dark table-sm align-middle mb-0" style="font-size: 0.75rem;">
                                                <thead>
                                                    <tr class="text-secondary">
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
                                                        <td class="fw-bold text-white">MacBook Pro M3 14 Inch</td>
                                                        <td><span class="badge bg-info bg-opacity-10 text-info">Elektronik</span></td>
                                                        <td class="text-info fw-bold">Rp 28.999.000</td>
                                                        <td><span class="badge bg-success bg-opacity-10 text-success">7 pcs</span></td>
                                                        <td class="text-center">
                                                            <span class="badge bg-warning text-dark p-1 me-1"><i class="bi bi-pencil-square"></i></span>
                                                            <span class="badge bg-danger p-1"><i class="bi bi-trash3"></i></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td class="fw-bold text-white">Keychron Q1 Pro Wireless</td>
                                                        <td><span class="badge bg-info bg-opacity-10 text-info">Aksesoris</span></td>
                                                        <td class="text-info fw-bold">Rp 2.950.000</td>
                                                        <td><span class="badge bg-success bg-opacity-10 text-success">15 pcs</span></td>
                                                        <td class="text-center">
                                                            <span class="badge bg-warning text-dark p-1 me-1"><i class="bi bi-pencil-square"></i></span>
                                                            <span class="badge bg-danger p-1"><i class="bi bi-trash3"></i></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td class="fw-bold text-white">Dell UltraSharp 27 4K UHD</td>
                                                        <td><span class="badge bg-info bg-opacity-10 text-info">Elektronik</span></td>
                                                        <td class="text-info fw-bold">Rp 9.800.000</td>
                                                        <td><span class="badge bg-success bg-opacity-10 text-success">10 pcs</span></td>
                                                        <td class="text-center">
                                                            <span class="badge bg-warning text-dark p-1 me-1"><i class="bi bi-pencil-square"></i></span>
                                                            <span class="badge bg-danger p-1"><i class="bi bi-trash3"></i></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-warning text-dark fs-6 me-3 px-3 py-2">Tahap 5</span>
                    <h2 class="fw-bold mb-0 text-warning">Cheat Sheet &amp; Troubleshooting Error Populer Pemula</h2>
                </div>
                <p class="text-light-50 fs-5 mb-4">
                    Saat pertama kali beralih ke OOP dan MVC, ada beberapa kendala umum yang sering dialami oleh programmer pemula. Simpan panduan solusi cepat berikut:
                </p>

                <div class="row g-3">
                    <!-- Error 1 -->
                    <div class="col-md-6">
                        <div class="p-4 bg-dark-lighter rounded-4 border border-secondary border-opacity-50 h-100 shadow-sm">
                            <div class="d-flex align-items-center text-danger mb-2">
                                <i class="bi bi-bug-fill fs-5 me-2"></i>
                                <strong class="small font-monospace">Error: Call to undefined method</strong>
                            </div>
                            <p class="small text-light-50 mb-2">
                                Contoh: <code>Fatal error: Uncaught Error: Call to undefined method Product::creat()</code>
                            </p>
                            <div class="p-2 bg-dark rounded border border-danger border-opacity-25 text-white small">
                                <strong class="text-info">Penyebab &amp; Solusi:</strong> Ada salah ketik (typo) pada nama method saat memanggilnya di Controller (seharusnya <code>create()</code> bukan <code>creat()</code>). Periksa kembali nama method di file Model.
                            </div>
                        </div>
                    </div>

                    <!-- Error 2 -->
                    <div class="col-md-6">
                        <div class="p-4 bg-dark-lighter rounded-4 border border-secondary border-opacity-50 h-100 shadow-sm">
                            <div class="d-flex align-items-center text-danger mb-2">
                                <i class="bi bi-bug-fill fs-5 me-2"></i>
                                <strong class="small font-monospace">Error: Cannot modify header information</strong>
                            </div>
                            <p class="small text-light-50 mb-2">
                                Contoh: <code>Warning: Cannot modify header information - headers already sent by...</code>
                            </p>
                            <div class="p-2 bg-dark rounded border border-danger border-opacity-25 text-white small">
                                <strong class="text-info">Penyebab &amp; Solusi:</strong> Anda melakukan <code>echo</code>, <code>print_r</code>, atau ada spasi kosong di luar tag <code>&lt;?php ?&gt;</code> sebelum fungsi <code>header("Location: ...")</code> dipanggil. Pastikan tidak ada output sebelum redirect!
                            </div>
                        </div>
                    </div>

                    <!-- Error 3 -->
                    <div class="col-md-6">
                        <div class="p-4 bg-dark-lighter rounded-4 border border-secondary border-opacity-50 h-100 shadow-sm">
                            <div class="d-flex align-items-center text-danger mb-2">
                                <i class="bi bi-bug-fill fs-5 me-2"></i>
                                <strong class="small font-monospace">Error: Failed opening required / Class not found</strong>
                            </div>
                            <p class="small text-light-50 mb-2">
                                Contoh: <code>Fatal error: Failed opening required '../config/Database.php'</code>
                            </p>
                            <div class="p-2 bg-dark rounded border border-danger border-opacity-25 text-white small">
                                <strong class="text-info">Penyebab &amp; Solusi:</strong> Path file require_once keliru. Selalu gunakan konstanta ajaib PHP <code>__DIR__</code> (seperti <code>__DIR__ . '/../config/Database.php'</code>) agar path bersifat absolut dan aman dari folder manapun file dipanggil.
                            </div>
                        </div>
                    </div>

                    <!-- Error 4 -->
                    <div class="col-md-6">
                        <div class="p-4 bg-dark-lighter rounded-4 border border-secondary border-opacity-50 h-100 shadow-sm">
                            <div class="d-flex align-items-center text-danger mb-2">
                                <i class="bi bi-bug-fill fs-5 me-2"></i>
                                <strong class="small font-monospace">Error: Unknown database 'db_bprotic_oop'</strong>
                            </div>
                            <p class="small text-light-50 mb-2">
                                Contoh: <code>PDOException: SQLSTATE[HY000] [1049] Unknown database</code>
                            </p>
                            <div class="p-2 bg-dark rounded border border-danger border-opacity-25 text-white small">
                                <strong class="text-info">Penyebab &amp; Solusi:</strong> Database belum dibuat di phpMyAdmin atau nama database di <code>config/Database.php</code> berbeda huruf kapitalnya. Jalankan kembali script Tahap 1 di phpMyAdmin.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Perbandingan Prosedural vs OOP Native vs Laravel -->
                <div class="card bg-dark border-secondary mt-4">
                    <div class="card-body p-4">
                        <h6 class="text-white fw-bold mb-3"><i class="bi bi-table me-2 text-info"></i>Tabel Komparasi: Evolusi Coding PHP Anda</h6>
                        <div class="table-responsive">
                            <table class="table table-dark table-bordered table-sm align-middle mb-0 small">
                                <thead>
                                    <tr class="text-info text-center">
                                        <th>Aspek</th>
                                        <th>PHP Prosedural (Modul 1-3)</th>
                                        <th>PHP OOP &amp; MVC Native (Modul 4)</th>
                                        <th>Framework Laravel (Modul 5+)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="fw-bold text-white">Struktur Kode</td>
                                        <td class="text-secondary">Fungsi terpisah &amp; file aksi tercecer</td>
                                        <td class="text-warning">Class, Method &amp; Folder MVC Teratur</td>
                                        <td class="text-success">MVC Standar Industri + Artisan CLI</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white">Akses Database</td>
                                        <td class="text-secondary">mysqli_query &amp; manual escape</td>
                                        <td class="text-warning">PDO Connection &amp; Prepared Statement</td>
                                        <td class="text-success">Eloquent ORM (Active Record)</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white">Routing URL</td>
                                        <td class="text-secondary">File fisik langsung (tambah.php, hapus.php)</td>
                                        <td class="text-warning">Front Controller Router (index.php?action=...)</td>
                                        <td class="text-success">Route::get() &amp; Route::post() di routes/web.php</td>
                                    </tr>
                                    <tr>
                                        <td class="fw-bold text-white">Keamanan</td>
                                        <td class="text-secondary">Rentan bila lupa escape string</td>
                                        <td class="text-warning">Aman dari SQL Injection via Parameter Binding</td>
                                        <td class="text-success">Perlindungan otomatis CSRF, XSS &amp; SQLi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

<section class="mt-5 pt-3">
                <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                    <div class="card-body p-4 p-md-5">
                        <div class="d-flex align-items-center mb-4">
                            <div class="p-3 bg-primary bg-opacity-25 text-primary rounded-circle me-3">
                                <i class="bi bi-mortarboard-fill fs-2"></i>
                            </div>
                            <div>
                                <div class="d-flex align-items-center gap-2 mb-1">
                                    <span class="badge bg-warning text-dark fs-6 px-3 py-1">Challenge Mandiri</span>
                                    <h3 class="fw-bold text-white mb-0">Tugas &amp; Studi Kasus: Modul 4 Web</h3>
                                </div>
                                <p class="text-secondary mb-0">Uji Pemahaman OOP &amp; MVC Anda Sebelum Melangkah ke Dunia Laravel</p>
                            </div>
                        </div>

                        <p class="text-light-50 fs-5 mb-4 leading-relaxed">
                            Buat aplikasi baru bernama <strong>Sistem Manajemen Mahasiswa / Anggota Kursus BPROTIC</strong> dengan menerapkan struktur 100% OOP, PDO, dan arsitektur MVC seperti modul di atas:
                        </p>
                        
                        <div class="p-4 bg-dark rounded-4 border border-secondary mb-4">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-list-task me-2"></i>Kriteria Penilaian &amp; Persyaratan:</h6>
                            <ol class="text-light-50 lh-lg fs-6 mb-0">
                                <li class="mb-2">Buat database baru bernama <code>db_bprotic_kampus</code> dengan tabel <code>students</code> (kolom: <code>id</code>, <code>nim</code>, <code>nama_lengkap</code>, <code>jurusan</code>, <code>email</code>, <code>status_aktif</code>, <code>created_at</code>).</li>
                                <li class="mb-2">Buat struktur folder lengkap: <code>config/Database.php</code>, <code>models/Student.php</code>, <code>controllers/StudentController.php</code>, <code>views/layouts/</code>, <code>views/students/index.php</code>, dan <code>index.php</code>.</li>
                                <li class="mb-2">Gunakan <strong>Class Student</strong> di Model dengan method <code>getAll()</code>, <code>getById($id)</code>, <code>create($data)</code>, <code>update($id, $data)</code>, dan <code>delete($id)</code> menggunakan PDO Prepared Statement.</li>
                                <li class="mb-2">Gunakan <strong>Class StudentController</strong> dengan method <code>index()</code>, <code>store()</code>, <code>update()</code>, dan <code>delete()</code>.</li>
                                <li class="mb-2">Terapkan form penambahan mahasiswa dan edit mahasiswa menggunakan <strong>Modal Bootstrap 5</strong> tanpa reload pindah halaman.</li>
                                <li>Pastikan seluruh alur melalui <strong>Front Controller</strong> <code>index.php</code> menggunakan query string <code>?action=...</code>.</li>
                            </ol>
                        </div>

                        <div class="p-3 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 d-flex align-items-center">
                            <i class="bi bi-rocket-takeoff-fill fs-3 text-success me-3"></i>
                            <div class="small text-light-50">
                                <strong class="text-white">Gerbang Masuk Menuju Pertemuan 5 (Framework Laravel):</strong><br>
                                Ketika Anda telah menyelesaikan tugas studi kasus ini, selamat! Anda sudah memiliki mental model yang sangat kuat tentang bagaimana sebuah framework web modern bekerja. Di Pertemuan 5 nanti, kita akan melihat bagaimana Laravel mengotomatisasi konsep yang baru saja Anda pelajari ini!
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<section class="mb-5">
    <div class="card bg-dark border-info shadow-sm">
        <div class="card-body p-4 p-md-5">
            <div class="d-flex align-items-center mb-3"><span class="badge bg-info text-dark fs-6 me-3 px-3 py-1">Inspirasi &amp; Refleksi</span><h4 class="fw-bold text-info mb-0"><i class="bi bi-award-fill me-2"></i>Pesan Pedagogi: Mindset Sukses Belajar OOP &amp; MVC</h4></div>
            <p class="text-light-50 fs-6 lh-base mb-4">
                Sebagai pemula, sangat wajar jika di 10 menit pertama kamu merasa: <em>"Wah, dulu satu file saja beres, sekarang kok filenya dipecah jadi banyak?"</em>.<br>
                Ingatlah analogi lemari pakaian: Jika semua baju, celana, kaos kaki, dan jas ditumpuk di satu keranjang besar tanpa sekat, memang terasa cepat saat melemparnya pertama kali. Namun saat kamu buru-buru mencari kaos kaki berpasangan, kamu akan membongkar seluruh isi kamar! Dengan lemari bersekat rapi (MVC), setiap pakaian berada di laci yang tepat, rapi, dan mudah diambil kapan saja.
            </p>

            <div class="p-3 bg-dark-lighter rounded border border-secondary mb-0">
                <h6 class="text-white fw-bold mb-2"><i class="bi bi-bookmark-check-fill text-warning me-2"></i>Kamus Cepat Istilah Penting:</h6>
                <div class="row g-2 small text-light-50">
                    <div class="col-md-6">
                        <ul class="mb-0">
                            <li><code>Class</code>: Cetakan kue / cetak biru (blueprint).</li>
                            <li><code>Object</code>: Kue fisik hasil cetakan yang hidup di memori (via <code>new</code>).</li>
                            <li><code>Property</code>: Variabel / ciri fisik milik objek.</li>
                            <li><code>Method</code>: Fungsi / aksi kemampuan yang bisa dilakukan objek.</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="mb-0">
                            <li><code>$this</code>: Kata ganti penunjuk <em>"diri saya sendiri"</em>.</li>
                            <li><code>__construct()</code>: Fungsi yang otomatis menyala saat objek baru lahir.</li>
                            <li><code>Model</code>: Bagian yang berurusan dengan data & query SQL.</li>
                            <li><code>View</code>: Bagian tampilan antarmuka visual (HTML & CSS).</li>
                            <li><code>Controller</code>: Pelayan koordinator yang menghubungkan Model & View.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        `
    },
    "5": { title: "Pengenalan Laravel", subtitle: "Struktur Laravel, routing, controller, view, migration, model." },
    "6": { title: "Laravel CRUD & Eloquent", subtitle: "Migration, model, controller, Eloquent ORM, form dan CRUD." },
    "7": { title: "REST API Laravel", subtitle: "Konsep REST API, endpoint, HTTP method, response JSON, GET, POST, PUT, DELETE." },
    "8": { title: "Relasi, Validasi & API Testing", subtitle: "Relasi one-to-many, request validation, status code, error response, testing API menggunakan Postman." },
    "9": { title: "Fitur Lanjutan & Penyempurnaan API", subtitle: "Search, filter, pagination, penyempurnaan response API dan handling error siap dikonsumsi Mobile." },
    "10": { title: "Final Project", subtitle: "Pengembangan project berdasarkan kategori, integrasi fitur, testing dan debugging aplikasi Laravel lengkap." }
};

