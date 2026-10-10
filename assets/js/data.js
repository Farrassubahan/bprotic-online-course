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
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (index.php):</h6>
                            <pre><code class="language-php">&lt;?php
// Mencetak output string sederhana ke layar
echo "Halo, Software Development!";
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
                    <div class="col-md-6 mb-3">
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
            <!-- Form & POST -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                    <h2 class="fw-bold mb-0 text-primary">Form HTML & Method POST</h2>
                </div>
                <p class="text-light-50 fs-5">Untuk menerima input dari user, kita menggunakan <strong>Form HTML</strong>. Di PHP, sangat disarankan menggunakan Method <code>POST</code> agar data yang dikirim lebih rahasia dan tidak terekspos di URL (seperti pada <code>GET</code>).</p>
                
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (index.php):</h6>
                            <pre><code class="language-html">&lt;!-- Atribut name sangat krusial sebagai identitas data --&gt;
&lt;form action="proses.php" method="POST"&gt;
    &lt;label&gt;Nama Produk:&lt;/label&gt;
    &lt;input type="text" name="name" required&gt;
    
    &lt;label&gt;Harga:&lt;/label&gt;
    &lt;input type="number" name="price" required&gt;
    
    &lt;button type="submit" name="submit"&gt;Simpan&lt;/button&gt;
&lt;/form&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
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

            <!-- Menangkap Data -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                    <h2 class="fw-bold mb-0 text-primary">Menangkap Data ($_POST) & Validasi</h2>
                </div>
                <p class="text-light-50 fs-5">Di file tujuan pengiriman form (misalnya <code>proses.php</code>), kita bisa mengambil nilai inputannya dengan Superglobal Variable <code>$_POST</code>. Kita juga wajib melakukan validasi (misalnya dengan <code>if/else</code>) agar form tidak diproses jika kosong.</p>
                
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (proses.php):</h6>
                            <pre><code class="language-php">&lt;?php
// Cek apakah tombol submit sudah ditekan
if (isset($_POST['submit'])) {
    $nama = $_POST['name'];
    $harga = $_POST['price'];

    // Validasi sederhana menggunakan If/Else
    if (empty($nama) || empty($harga)) {
        echo "Error: Data tidak boleh ada yang kosong!";
    } else {
        echo "Sukses: Produk $nama (Rp $harga) berhasil diterima.";
    }
}
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark border border-info rounded h-100 d-flex flex-column">
                            <h6 class="text-info fw-bold mb-3"><i class="bi bi-window me-2"></i>Jika Form Disubmit:</h6>
                            <div class="flex-grow-1 d-flex align-items-center bg-white text-success rounded p-3 font-monospace shadow-inner fs-5 fw-bold">
                                Sukses: Produk Laptop (Rp 8000000) berhasil diterima.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Koneksi DB -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                    <h2 class="fw-bold mb-0 text-primary">Koneksi PHP ke MySQL</h2>
                </div>
                <p class="text-light-50 fs-5">Pastikan kamu sudah membuat database di <strong>phpMyAdmin</strong>. Gunakan instruksi bawaan <code>mysqli_connect()</code> untuk menghubungkan skrip PHP ke database yang bersangkutan.</p>
                
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-code-slash me-2"></i>Contoh Kode (koneksi.php):</h6>
                            <pre><code class="language-php">&lt;?php
$host = "localhost";
$user = "root";     // Default username XAMPP/Laragon
$pass = "";         // Password default kosong
$db   = "db_toko";  // Pastikan nama DB ini persis seperti di phpMyAdmin

// Membuka koneksi
$conn = mysqli_connect($host, $user, $pass, $db);

// Cek jika gagal terhubung
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
echo "Koneksi Berhasil!";
?&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Create Read -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 4</span>
                    <h2 class="fw-bold mb-0 text-primary">CRUD: Menambah & Menampilkan Data</h2>
                </div>
                <p class="text-light-50 fs-5">Ini adalah esensi dari <strong>C</strong>reate dan <strong>R</strong>ead dalam konsep CRUD. Kita menggunakan SQL <code>INSERT INTO</code> untuk menyimpan, dan <code>SELECT</code> untuk membaca (menampilkan) data.</p>
                
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-database-add me-2"></i>Insert Data (Create):</h6>
                            <pre><code class="language-php">&lt;?php
// Mengeksekusi Query INSERT
$sql = "INSERT INTO products (name, price) 
        VALUES ('$nama', '$harga')";

mysqli_query($conn, $sql);
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-list-columns me-2"></i>Menampilkan Data (Read):</h6>
                            <pre><code class="language-php">&lt;?php
// Menarik data, lalu diproses berulang dengan while()
$result = mysqli_query($conn, "SELECT * FROM products");

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['name'] . " - Rp " . $row['price'] . "&lt;br&gt;";
}
?&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Update Delete -->
            <section class="mb-5 pb-4 border-bottom border-secondary">
                <div class="d-flex align-items-center mb-3">
                    <span class="badge bg-primary fs-6 me-3">Tahap 5</span>
                    <h2 class="fw-bold mb-0 text-primary">CRUD: Mengubah & Menghapus Data</h2>
                </div>
                <p class="text-light-50 fs-5">Untuk <strong>U</strong>pdate dan <strong>D</strong>elete, kita perlu mengidentifikasi baris spesifik mana yang diubah. Biasanya kita menyisipkan ID data melalui URL, yang lalu ditangkap menggunakan <code>$_GET</code>.</p>
                
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-pencil-square me-2"></i>Update Data:</h6>
                            <pre><code class="language-php">&lt;?php
$id = $_POST['id']; // ID dari form hidden
$nama_baru = $_POST['name'];

$sql = "UPDATE products SET name='$nama_baru' 
        WHERE id='$id'";

mysqli_query($conn, $sql);
?&gt;</code></pre>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="p-4 bg-dark-lighter border border-secondary rounded h-100">
                            <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-trash3 me-2"></i>Delete Data ($_GET):</h6>
                            <pre><code class="language-php">&lt;?php
// Menangkap parameter dari URL (misal: hapus.php?id=1)
$id = $_GET['id'];

$sql = "DELETE FROM products WHERE id='$id'";
mysqli_query($conn, $sql);
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
