// Data Silabus Mobile Development BPROTIC
// Berdasarkan dokumen silabus terbaru (React Native Expo & Ionic)

const mobileData = {
    "react-native": {
        "metadata": {
            name: "React Native (Expo)",
            badge: "Expo & TypeScript",
            description: "Pengembangan aplikasi mobile native lintas platform (Android & iOS) dengan React Native, Expo, dan TypeScript."
        },
        "weeks": {
            "1": {
                title: "Setup React Native, Expo & Dasar TypeScript",
                subtitle: "Lokasi pembuatan project, struktur folder maintainable, instalasi Expo, sintaks TypeScript, dan komponen pertama.",
                content: `
                    <!-- Pengantar Materi -->
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="bi bi-info-circle-fill fs-2 text-info me-3"></i>
                                    <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 1 Mobile?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Selamat datang di divisi Mobile Development BPROTIC! Di pertemuan perdana ini, kita akan mempelajari fondasi pengembangan aplikasi mobile modern menggunakan ekosistem <strong>React Native</strong> dengan toolchain <strong>Expo</strong> dan bahasa <strong>TypeScript</strong>.
                                </p>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-info fw-bold"><i class="bi bi-phone me-2"></i>Kenapa React Native?</h6>
                                            <p class="small text-light-50 mb-0">Sekali tulis kode (JavaScript/TypeScript), aplikasi dapat berjalan secara native di Android dan iOS dengan performa tinggi.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-primary fw-bold"><i class="bi bi-lightning-charge me-2"></i>Kenapa Expo?</h6>
                                            <p class="small text-light-50 mb-0">Expo menyederhanakan konfigurasi Android Studio/Xcode yang rumit. Kamu bisa langsung preview aplikasi di HP fisikmu lewat aplikasi <strong>Expo Go</strong>.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-shield-check me-2"></i>Peran TypeScript</h6>
                                            <p class="small text-light-50 mb-0">TypeScript memberikan <em>static typing</em> sehingga bug/error dapat dicegah lebih awal sebelum kode dijalankan di HP user.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- PENTING: Lokasi Penyimpanan File Project -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="card border-warning bg-dark-lighter shadow-lg">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="badge bg-warning text-dark fs-6 me-3 px-3 py-2 fw-bold"><i class="bi bi-exclamation-triangle-fill me-1"></i>PENTING</span>
                                    <h4 class="fw-bold mb-0 text-warning">Di Mana Kita Harus Membuat File Project Mobile?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Sebagai pemula, kamu mungkin terbiasa menyimpan semua project web di dalam <code>C:\\laragon\\www\\</code>. <strong>Namun untuk project Mobile, aturannya berbeda!</strong>
                                </p>
                                
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="p-3 bg-danger bg-opacity-10 border border-danger rounded h-100">
                                            <h6 class="text-danger fw-bold"><i class="bi bi-x-circle-fill me-2"></i>JANGAN Simpan di C:\\laragon\\www\\</h6>
                                            <p class="small text-light-50 mb-0">
                                                Folder <code>www</code> Laragon hanya untuk server Apache/PHP. React Native tidak menggunakan Apache, melainkan server <strong>Node.js (Metro Bundler)</strong> sendiri. Menaruh project mobile di Laragon www akan membuat indexing server lambat dan rawan konflik file.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="p-3 bg-success bg-opacity-10 border border-success rounded h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-check-circle-fill me-2"></i>REKOMENDASI Lokasi Folder Project:</h6>
                                            <p class="small text-light-50 mb-2">Simpan di folder kerja khusus kamu, contohnya:</p>
                                            <ul class="small text-light-50 ps-3 mb-0">
                                                <li><code>D:\\Projects\\bprotic-mobile\\</code> (Sangat direkomendasikan jika ada drive D)</li>
                                                <li><code>C:\\Projects\\bprotic-mobile\\</code></li>
                                                <li><code>C:\\Users\\[NamaKamu]\\Documents\\bprotic-mobile\\</code></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 1: Setup Environment -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Setup Environment (Node.js & Expo Go)</h2>
                        </div>
                        <p class="text-light-50 fs-5">Sebelum membuat aplikasi mobile, persiapkan peralatan dasar berikut di laptop dan smartphone kamu:</p>
                        
                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-info"><i class="bi bi-tools me-2"></i>Daftar Kebutuhan:</h5>
                                <ol class="text-light-50 lh-lg mb-0 mt-3 fs-6">
                                    <li><strong>Node.js (LTS Version):</strong> Pastikan kamu sudah menginstal Node.js versi LTS (v20+ disarankan). Cek di terminal dengan mengetik <code>node -v</code>.</li>
                                    <li><strong>VS Code:</strong> Code editor utama dengan ekstensi disarankan: <em>React Native Tools</em>, <em>ES7+ React/Redux/React-Native snippets</em>, dan <em>Prettier</em>.</li>
                                    <li><strong>Expo Go App (Di Smartphone):</strong> Download aplikasi gratis <strong>Expo Go</strong> di Google Play Store (Android) atau App Store (iOS). Ini digunakan untuk testing aplikasi langsung di HP kamu tanpa perlu install emulator berat!</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 2: Membuat Project Expo -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Inisialisasi Project Expo & Menjalankan di HP</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">Buka <strong>Terminal / PowerShell</strong> di folder kerja kamu (misal di <code>D:\\Projects</code> atau <code>C:\\Projects</code>), lalu jalankan perintah berikut:</p>
                        
                        <div class="row">
                            <div class="col-12 mb-4">
                                <div class="p-4 bg-dark-lighter border border-secondary rounded">
                                    <h6 class="text-secondary fw-bold mb-3"><i class="bi bi-terminal me-2"></i>Perintah Terminal:</h6>
                                    <pre><code class="language-bash"># 1. Masuk ke folder kerja (contoh di C:\\Projects atau D:\\Projects)
cd C:\\Projects

# 2. Buat project baru bernama bprotic-mobile berbasis TypeScript
npx create-expo-app@latest bprotic-mobile --template blank-typescript

# 3. Masuk ke direktori project yang baru saja dibuat
cd bprotic-mobile

# 4. Buka project di Visual Studio Code
code .

# 5. Jalankan server Expo development
npx expo start</code></pre>
                                </div>
                            </div>
                            <div class="col-12 mb-4">
                                <div class="card bg-dark border-info shadow-sm">
                                    <div class="card-body p-4">
                                        <h5 class="fw-bold text-info mb-3"><i class="bi bi-qr-code-scan me-2"></i>Cara Preview di HP Fisik:</h5>
                                        <ol class="text-light-50 lh-lg fs-6 mb-0">
                                            <li>Setelah menjalankan <code>npx expo start</code>, terminal akan menampilkan sebuah <strong>QR Code</strong> besar.</li>
                                            <li>Pastikan laptop dan HP kamu terhubung ke <strong>jaringan WiFi yang sama</strong> (atau gunakan hotspot HP ke laptop).</li>
                                            <li>Buka aplikasi <strong>Expo Go</strong> di HP kamu, pilih <strong>"Scan QR Code"</strong> dan arahkan kamera ke layar terminal.</li>
                                            <li>Tunggu proses <em>bundling</em> selesai, dan aplikasi mobile langsung berjalan di HP kamu secara realtime!</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 3: Struktur Folder yang Maintainable -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                            <h2 class="fw-bold mb-0 text-primary">Struktur File & Folder yang Maintainable (Clean Architecture)</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Untuk membuat aplikasi yang mudah dirawat (<em>maintainable</em>) dan siap berkembang hingga modul 10 (konsumsi REST API Laravel & build APK), <strong>jangan menaruh semua kode di dalam satu file App.tsx</strong>. Terapkan pemisahan modular di dalam folder <code>src/</code>:
                        </p>

                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h6 class="text-info fw-bold mb-3"><i class="bi bi-folder-symlink me-2"></i>Pohon Struktur Direktori Proyek Mobile:</h6>
                                <pre><code class="language-bash">bprotic-mobile/
├── assets/                    # Gambar, logo BPROTIC, ikon aplikasi, splash screen
├── src/                       # FOLDER UTAMA: Seluruh kode aplikasi disimpan di sini
│   ├── components/            # Komponen UI modular yang dapat dipakai ulang (reusable)
│   │   └── MemberCard.tsx     # Komponen kartu profil anggota
│   ├── screens/               # Halaman tampilan aplikasi (Home, Profile, Todo, dll)
│   │   └── HomeScreen.tsx     # Halaman utama beranda
│   ├── types/                 # Definisi Tipe & Interface TypeScript
│   │   └── member.types.ts    # Model data profil mahasiswa/anggota
│   ├── services/              # Logika komunikasi REST API (persiapan koneksi Laravel di minggu 6)
│   ├── constants/             # Konfigurasi warna, ukuran font, URL API endpoint
│   │   └── theme.ts           # Skema warna aplikasi (Dark theme / Light theme)
│   └── utils/                 # Fungsi bantuan (format tanggal, angka rupiah, validator)
├── App.tsx                    # Root Entry Point: Bersih & hanya memanggil Screen utama
├── app.json                   # Konfigurasi Expo (nama app, bundle identifier, icon)
├── tsconfig.json              # Konfigurasi compiler TypeScript
└── package.json               # Daftar dependencies & scripts</code></pre>

                                <div class="row g-3 mt-3">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary">
                                            <span class="badge bg-info text-dark mb-2">src/types/</span>
                                            <p class="small text-light-50 mb-0">Menampung semua <code>interface</code> TypeScript agar struktur data tidak tercecer dan bisa di-share antar file.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary">
                                            <span class="badge bg-primary mb-2">src/components/</span>
                                            <p class="small text-light-50 mb-0">Menampung potongan UI mandiri. Jika tampilan kartu ingin diubah, cukup edit file komponen ini tanpa merusak screen.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary">
                                            <span class="badge bg-success mb-2">src/screens/</span>
                                            <p class="small text-light-50 mb-0">Menyatukan komponen, logika state, dan navigasi tiap halaman agar alur aplikasi terisolasi dengan rapi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 4: Hands-on Pembuatan File Modular -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 4</span>
                            <h2 class="fw-bold mb-0 text-primary">Hands-on: Membangun Aplikasi Modular Pertama</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Sekarang mari kita buat file-file modular tersebut di dalam proyek <code>bprotic-mobile</code> kamu di VS Code:
                        </p>

                        <!-- File 1: types -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 1</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>bprotic-mobile/src/types/member.types.ts</strong>
                                </div>
                                <span class="small text-secondary">Definisi Interface TypeScript</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder baru <code>src/types/</code> di VS Code, lalu buat file <code>member.types.ts</code>:</p>
                                <pre><code class="language-typescript">// src/types/member.types.ts
// Interface mendefinisikan bentuk data profil anggota BPROTIC

export interface MemberData {
    id: number;
    name: string;
    nim: string;
    division: string;
    track: string;
    skills: string[];
}</code></pre>
                            </div>
                        </div>

                        <!-- File 2: components -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-primary me-2">File 2</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-primary"></i>bprotic-mobile/src/components/MemberCard.tsx</strong>
                                </div>
                                <span class="small text-secondary">Reusable UI Component</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder baru <code>src/components/</code> di VS Code, lalu buat file <code>MemberCard.tsx</code>:</p>
                                <pre><code class="language-typescript">// src/components/MemberCard.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MemberData } from '../types/member.types';

// Props menerima data bertipe MemberData
interface MemberCardProps {
    member: MemberData;
}

export const MemberCard: React.FC&lt;MemberCardProps&gt; = ({ member }) => {
    return (
        &lt;View style={styles.card}&gt;
            &lt;View style={styles.badgeContainer}&gt;
                &lt;Text style={styles.badge}&gt;{member.track}&lt;/Text&gt;
            &lt;/View&gt;
            
            &lt;Text style={styles.greeting}&gt;Halo, Selamat Datang! 👋&lt;/Text&gt;
            &lt;Text style={styles.name}&gt;{member.name}&lt;/Text&gt;
            &lt;Text style={styles.nim}&gt;NIM: {member.nim}&lt;/Text&gt;
            &lt;Text style={styles.division}&gt;{member.division}&lt;/Text&gt;

            &lt;View style={styles.divider} /&gt;

            &lt;Text style={styles.skillsTitle}&gt;Keahlian Teknis:&lt;/Text&gt;
            &lt;View style={styles.skillsWrapper}&gt;
                {member.skills.map((skill, index) => (
                    &lt;View key={index} style={styles.skillPill}&gt;
                        &lt;Text style={styles.skillText}&gt;{skill}&lt;/Text&gt;
                    &lt;/View&gt;
                ))}
            &lt;/View&gt;
        &lt;/View&gt;
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 20,
        padding: 24,
        width: '100%',
        maxWidth: 340,
        borderWidth: 1,
        borderColor: '#334155',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    badgeContainer: {
        alignItems: 'center',
        marginBottom: 12,
    },
    badge: {
        backgroundColor: '#7c3aed',
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        letterSpacing: 0.5,
    },
    greeting: {
        fontSize: 14,
        color: '#94a3b8',
        textAlign: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f8fafc',
        textAlign: 'center',
    },
    nim: {
        fontSize: 13,
        color: '#64748b',
        textAlign: 'center',
        marginTop: 2,
    },
    division: {
        fontSize: 14,
        color: '#38bdf8',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 4,
    },
    divider: {
        height: 1,
        backgroundColor: '#334155',
        marginVertical: 16,
    },
    skillsTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#cbd5e1',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    skillsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    skillPill: {
        backgroundColor: '#0f172a',
        borderWidth: 1,
        borderColor: '#38bdf8',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    skillText: {
        color: '#38bdf8',
        fontSize: 11,
        fontWeight: '600',
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- File 3: App.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-success me-2">File 3</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-success"></i>bprotic-mobile/App.tsx</strong>
                                </div>
                                <span class="small text-secondary">Root Entry Point</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buka file <code>App.tsx</code> yang ada di root project kamu, lalu ganti isinya menjadi kode bersih berikut:</p>
                                <pre><code class="language-typescript">// App.tsx
import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { MemberData } from './src/types/member.types';
import { MemberCard } from './src/components/MemberCard';

export default function App() {
    // Data contoh anggota yang mengimplementasikan MemberData
    const sampleMember: MemberData = {
        id: 1,
        name: "Ahmad Farras",
        nim: "20240801001",
        division: "Mobile Development",
        track: "BPROTIC MOBILE COURSE",
        skills: ["React Native", "TypeScript", "Expo Go", "Tailwind"]
    };

    return (
        &lt;SafeAreaView style={styles.safeArea}&gt;
            &lt;StatusBar barStyle="light-content" backgroundColor="#0f172a" /&gt;
            &lt;View style={styles.container}&gt;
                &lt;MemberCard member={sampleMember} /&gt;
            &lt;/View&gt;
        &lt;/SafeAreaView&gt;
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0f172a',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- Output Phone Mockup -->
                        <div class="row">
                            <div class="col-12 mb-4">
                                <div class="p-4 bg-dark border border-info rounded text-center">
                                    <h6 class="text-info fw-bold mb-3 text-start"><i class="bi bi-phone me-2"></i>Hasil Preview di Layar Smartphone (Expo Go):</h6>
                                    
                                    <div class="phone-mockup">
                                        <div class="phone-notch">
                                            <div class="phone-notch-camera"></div>
                                        </div>
                                        <div class="phone-screen d-flex flex-column justify-content-center align-items-center">
                                            <div class="p-4 rounded-4 w-100 text-center shadow-lg" style="background-color: #1e293b; border: 1px solid #334155;">
                                                <span class="badge mb-3 px-3 py-1 rounded-pill" style="background-color: #7c3aed; font-size: 10px;">BPROTIC MOBILE COURSE</span>
                                                <div class="text-light-50 small mb-1">Halo, Selamat Datang! 👋</div>
                                                <h4 class="fw-bold text-white mb-0">Ahmad Farras</h4>
                                                <div class="text-secondary small mb-1">NIM: 20240801001</div>
                                                <div class="text-info small fw-bold mb-3">Mobile Development</div>
                                                
                                                <hr style="border-color: #334155;" class="my-2">
                                                
                                                <div class="text-start mb-2">
                                                    <span style="font-size: 10px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Keahlian Teknis:</span>
                                                </div>
                                                <div class="d-flex flex-wrap gap-1 justify-content-start">
                                                    <span class="badge bg-dark text-info border border-info px-2 py-1" style="font-size: 9px;">React Native</span>
                                                    <span class="badge bg-dark text-info border border-info px-2 py-1" style="font-size: 9px;">TypeScript</span>
                                                    <span class="badge bg-dark text-info border border-info px-2 py-1" style="font-size: 9px;">Expo Go</span>
                                                    <span class="badge bg-dark text-info border border-info px-2 py-1" style="font-size: 9px;">Tailwind</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tugas Studi Kasus -->
                    <section class="mt-5 pt-3">
                        <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                            <div class="card-body p-5">
                                <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 1 Mobile</h3>
                                <p class="text-light-50 mb-4 fs-5">Setelah berhasil menyusun project dengan arsitektur maintainable di atas, buatlah <strong>Kartu Profil Anggota Pribadi</strong> dengan spesifikasi:</p>
                                
                                <div class="p-4 bg-dark-lighter rounded border border-secondary">
                                    <ol class="text-light-50 lh-lg fs-5 mb-0">
                                        <li class="mb-3">Simpan file tipe data di <code>src/types/member.types.ts</code> dan tambahkan properti <code>email: string</code> serta <code>githubUsername: string</code>.</li>
                                        <li class="mb-3">Simpan komponen tampilan di <code>src/components/MemberCard.tsx</code> dan tambahkan baris ikon kontak email & GitHub tersebut.</li>
                                        <li class="mb-3">Di <code>App.tsx</code>, isi datanya dengan identitas asli kamu dan minimal <strong>4 keahlian teknis</strong> yang ingin kamu kuasai.</li>
                                        <li>Buka di smartphone lewat <strong>Expo Go</strong>, ambil screenshot layar HP kamu untuk dipresentasikan di pertemuan berikutnya!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            "2": {
                title: "UI, Component, State & Interaction",
                subtitle: "Komponen interaktif React Native (TextInput, Button, Pressable), styling modern, props, useState, dan event handling.",
                content: `
                    <!-- Pengantar Pertemuan 2 -->
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="bi bi-ui-checks-grid fs-2 text-info me-3"></i>
                                    <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 2 Mobile?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Di pertemuan kedua ini, kita naik level dari tampilan statis menjadi <strong>aplikasi mobile yang interaktif dan dinamis</strong>. Kita akan mempelajari bagaimana aplikasi merespon sentuhan jari user, menerima input formulir teks, mengelola memori tampilan menggunakan React Hook <code>useState</code>, dan memberikan feedback visual.
                                </p>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-info fw-bold"><i class="bi bi-input-cursor-text me-2"></i>TextInput & Form</h6>
                                            <p class="small text-light-50 mb-0">Komponen bawaan React Native untuk menangkap ketikan user seperti nama, tugas, dan nominal.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-primary fw-bold"><i class="bi bi-arrow-repeat me-2"></i>React State (useState)</h6>
                                            <p class="small text-light-50 mb-0">Tempat penyimpanan data internal komponen. Begitu state diupdate, layar mobile otomatis me-render ulang (re-render) tampilan.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-hand-index-thumb me-2"></i>TouchableOpacity & Event</h6>
                                            <p class="small text-light-50 mb-0">Tombol interaktif dengan efek opacity redup lembut saat ditekan (feedback sentuhan jari user).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- PENTING: Struktur File Maintainable untuk Modul 2 -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="card border-info bg-dark-lighter shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-info mb-3"><i class="bi bi-diagram-3-fill me-2"></i>Struktur File Maintainable Modul 2:</h5>
                                <p class="text-light-50 fs-6 mb-3">
                                    Agar kode tidak menumpuk dalam ratusan baris di <code>App.tsx</code>, kita memecah studi kasus ini menjadi 4 file yang teratur:
                                </p>
                                <ul class="text-light-50 lh-lg fs-6 mb-0">
                                    <li><code>📁 src/types/todo.types.ts</code> : Menampung model data tipe <code>TodoItem</code>.</li>
                                    <li><code>📁 src/components/TodoCard.tsx</code> : Komponen kartu baris tugas (checkbox & tombol hapus).</li>
                                    <li><code>📁 src/screens/TodoScreen.tsx</code> : Halaman utama yang mengelola logika form, state <code>useState</code>, dan daftar tugas.</li>
                                    <li><code>📁 App.tsx</code> : Root entry point yang hanya bertugas memanggil <code>TodoScreen</code>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 1: Konsep State (useState) -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Konsep State (useState) & Event Handling</h2>
                        </div>
                        <p class="text-light-50 fs-5">Berbeda dengan web yang menggunakan <code>document.getElementById</code>, di React Native kita tidak pernah memanipulasi elemen layar secara manual. Semua tampilan dikendalikan oleh <strong>State</strong>.</p>
                        
                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-info"><i class="bi bi-lightbulb me-2"></i>Rumus useState di TypeScript:</h5>
                                <p class="text-light-50 mb-3"><code>const [nilai, setNilai] = useState&lt;tipeData&gt;(nilaiAwal);</code></p>
                                <ul class="text-light-50 lh-lg mb-0 fs-6">
                                    <li><code>nilai</code>: Variabel penyimpan data saat ini.</li>
                                    <li><code>setNilai</code>: Fungsi khusus untuk mengubah nilai. Ketika dipanggil, React otomatis me-render ulang tampilan layar HP.</li>
                                    <li>Event <code>onChangeText</code> pada <code>&lt;TextInput&gt;</code> digunakan untuk mencatat setiap huruf yang diketik.</li>
                                    <li>Event <code>onPress</code> pada <code>&lt;TouchableOpacity&gt;</code> digunakan saat user menekan tombol.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 2: Implementasi File per File -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Hands-on: Form Input & Daftar Tugas Interaktif</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">Mari kita buat 4 file berikut di dalam folder <code>bprotic-mobile/</code> kamu:</p>

                        <!-- File 1: types -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 1</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>bprotic-mobile/src/types/todo.types.ts</strong>
                                </div>
                                <span class="small text-secondary">Definisi Model Todo</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buka folder <code>src/types/</code>, buat file baru <code>todo.types.ts</code>:</p>
                                <pre><code class="language-typescript">// src/types/todo.types.ts

export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}</code></pre>
                            </div>
                        </div>

                        <!-- File 2: components/TodoCard -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-primary me-2">File 2</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-primary"></i>bprotic-mobile/src/components/TodoCard.tsx</strong>
                                </div>
                                <span class="small text-secondary">Komponen Card Tugas</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buka folder <code>src/components/</code>, buat file baru <code>TodoCard.tsx</code>:</p>
                                <pre><code class="language-typescript">// src/components/TodoCard.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TodoItem } from '../types/todo.types';

interface TodoCardProps {
    item: TodoItem;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoCard: React.FC&lt;TodoCardProps&gt; = ({ item, onToggle, onDelete }) => {
    return (
        &lt;View style={styles.card}&gt;
            &lt;TouchableOpacity 
                style={styles.content} 
                onPress={() => onToggle(item.id)}
            &gt;
                &lt;View style={[styles.checkbox, item.completed && styles.checkboxActive]}&gt;
                    {item.completed && &lt;Text style={styles.checkmark}&gt;✓&lt;/Text&gt;}
                &lt;/View&gt;
                &lt;Text style={[styles.text, item.completed && styles.textCompleted]}&gt;
                    {item.text}
                &lt;/Text&gt;
            &lt;/TouchableOpacity&gt;
            
            &lt;TouchableOpacity 
                style={styles.deleteBtn} 
                onPress={() => onDelete(item.id)}
            &gt;
                &lt;Text style={styles.deleteText}&gt;✕&lt;/Text&gt;
            &lt;/TouchableOpacity&gt;
        &lt;/View&gt;
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 14,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#334155',
        marginBottom: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#64748b',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    checkboxActive: {
        backgroundColor: '#10b981',
        borderColor: '#10b981',
    },
    checkmark: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: '#f8fafc',
        flex: 1,
    },
    textCompleted: {
        textDecorationLine: 'line-through',
        color: '#64748b',
    },
    deleteBtn: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#334155',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteText: {
        color: '#ef4444',
        fontSize: 12,
        fontWeight: 'bold',
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- File 3: screens/TodoScreen -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-warning text-dark me-2">File 3</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-warning"></i>bprotic-mobile/src/screens/TodoScreen.tsx</strong>
                                </div>
                                <span class="small text-secondary">Screen & State Logic</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder baru <code>src/screens/</code> di VS Code, lalu buat file <code>TodoScreen.tsx</code>:</p>
                                <pre><code class="language-typescript">// src/screens/TodoScreen.tsx
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import { TodoItem } from '../types/todo.types';
import { TodoCard } from '../components/TodoCard';

export const TodoScreen: React.FC = () => {
    // 1. State Input Teks
    const [inputText, setInputText] = useState&lt;string&gt;('');

    // 2. State Daftar Tugas
    const [todos, setTodos] = useState&lt;TodoItem[]&gt;([
        { id: '1', text: 'Setup Expo & Install Expo Go', completed: true },
        { id: '2', text: 'Susun Struktur Folder Maintainable', completed: true },
        { id: '3', text: 'Buat Komponen Form Interaktif', completed: false }
    ]);

    // 3. Menambah Tugas Baru
    const handleAddTodo = () => {
        if (inputText.trim() === '') {
            Alert.alert('Perhatian', 'Harap isi teks tugas sebelum menambahkan!');
            return;
        }

        const newTodo: TodoItem = {
            id: Date.now().toString(),
            text: inputText.trim(),
            completed: false
        };

        setTodos([newTodo, ...todos]);
        setInputText(''); // Reset form
    };

    // 4. Toggle Status Selesai
    const handleToggleComplete = (id: string) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // 5. Hapus Tugas
    const handleDeleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        &lt;View style={styles.container}&gt;
            {/* Header */}
            &lt;View style={styles.header}&gt;
                &lt;Text style={styles.subtitle}&gt;BPROTIC MOBILE COURSE&lt;/Text&gt;
                &lt;Text style={styles.title}&gt;Daftar Tugas Praktik 📝&lt;/Text&gt;
            &lt;/View&gt;

            {/* Form Input Bar */}
            &lt;View style={styles.inputContainer}&gt;
                &lt;TextInput
                    style={styles.textInput}
                    placeholder="Ketik tugas baru kamu di sini..."
                    placeholderTextColor="#64748b"
                    value={inputText}
                    onChangeText={setInputText}
                /&gt;
                &lt;TouchableOpacity style={styles.addButton} onPress={handleAddTodo}&gt;
                    &lt;Text style={styles.addButtonText}&gt;+ Tambah&lt;/Text&gt;
                &lt;/TouchableOpacity&gt;
            &lt;/View&gt;

            {/* List Tugas */}
            &lt;FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    &lt;TodoCard 
                        item={item} 
                        onToggle={handleToggleComplete} 
                        onDelete={handleDeleteTodo} 
                    /&gt;
                )}
            /&gt;
        &lt;/View&gt;
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 20,
        marginTop: 10,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#7c3aed',
        letterSpacing: 1,
        marginBottom: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f8fafc',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#1e293b',
        color: '#f8fafc',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#334155',
        fontSize: 14,
    },
    addButton: {
        backgroundColor: '#7c3aed',
        borderRadius: 12,
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    addButtonText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 14,
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- File 4: App.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-success me-2">File 4</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-success"></i>bprotic-mobile/App.tsx</strong>
                                </div>
                                <span class="small text-secondary">Clean Entry Point</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Di <code>App.tsx</code> root, kita hanya perlu memanggil <code>TodoScreen</code>:</p>
                                <pre><code class="language-typescript">// App.tsx
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
    return (
        &lt;SafeAreaView style={styles.safeArea}&gt;
            &lt;StatusBar barStyle="light-content" backgroundColor="#0f172a" /&gt;
            &lt;TodoScreen /&gt;
        &lt;/SafeAreaView&gt;
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0f172a',
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- Output Phone Mockup -->
                        <div class="row">
                            <div class="col-12 mb-4">
                                <div class="p-4 bg-dark border border-info rounded text-center">
                                    <h6 class="text-info fw-bold mb-3 text-start"><i class="bi bi-phone me-2"></i>Hasil Preview Interaktif di Smartphone (Expo Go):</h6>
                                    
                                    <div class="phone-mockup">
                                        <div class="phone-notch">
                                            <div class="phone-notch-camera"></div>
                                        </div>
                                        <div class="phone-screen text-start">
                                            <div class="mb-3">
                                                <div style="font-size: 10px; color: #a855f7; font-weight: 700; letter-spacing: 0.5px;">BPROTIC MOBILE COURSE</div>
                                                <div style="font-size: 16px; font-weight: bold; color: #fff;">Daftar Tugas Praktik 📝</div>
                                            </div>

                                            <!-- Simulated Input -->
                                            <div class="d-flex gap-2 mb-3">
                                                <div class="p-2 rounded-3 text-secondary small flex-grow-1" style="background: #1e293b; border: 1px solid #334155; font-size: 11px;">
                                                    Ketik tugas baru kamu di sini...
                                                </div>
                                                <div class="p-2 rounded-3 text-white small fw-bold px-3 d-flex align-items-center" style="background: #7c3aed; font-size: 11px;">
                                                    + Tambah
                                                </div>
                                            </div>

                                            <!-- Simulated Tasks -->
                                            <div class="d-flex flex-column gap-2">
                                                <div class="p-2 rounded-3 d-flex align-items-center justify-content-between" style="background: #1e293b; border: 1px solid #334155;">
                                                    <div class="d-flex align-items-center">
                                                        <div class="me-2 rounded d-flex align-items-center justify-content-center" style="width: 18px; height: 18px; background: #10b981; font-size: 10px; color: #fff;">✓</div>
                                                        <span class="text-decoration-line-through text-secondary small" style="font-size: 11px;">Setup Expo & Install Expo Go</span>
                                                    </div>
                                                    <span class="badge bg-secondary" style="font-size: 9px;">✕</span>
                                                </div>

                                                <div class="p-2 rounded-3 d-flex align-items-center justify-content-between" style="background: #1e293b; border: 1px solid #334155;">
                                                    <div class="d-flex align-items-center">
                                                        <div class="me-2 rounded d-flex align-items-center justify-content-center" style="width: 18px; height: 18px; background: #10b981; font-size: 10px; color: #fff;">✓</div>
                                                        <span class="text-decoration-line-through text-secondary small" style="font-size: 11px;">Susun Struktur Folder Maintainable</span>
                                                    </div>
                                                    <span class="badge bg-secondary" style="font-size: 9px;">✕</span>
                                                </div>

                                                <div class="p-2 rounded-3 d-flex align-items-center justify-content-between" style="background: #1e293b; border: 1px solid #7c3aed;">
                                                    <div class="d-flex align-items-center">
                                                        <div class="me-2 rounded" style="width: 18px; height: 18px; border: 2px solid #64748b;"></div>
                                                        <span class="text-white small fw-bold" style="font-size: 11px;">Buat Komponen Form Interaktif</span>
                                                    </div>
                                                    <span class="badge bg-danger bg-opacity-50 text-white" style="font-size: 9px;">✕</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tugas Studi Kasus Modul 2 -->
                    <section class="mt-5 pt-3">
                        <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                            <div class="card-body p-5">
                                <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 2 Mobile</h3>
                                <p class="text-light-50 mb-4 fs-5">Kembangkan aplikasi interaktif di atas menjadi <strong>Sistem Pencatatan Uang Saku / Pengeluaran Harian (Expense Tracker)</strong> dengan struktur maintainable:</p>
                                
                                <div class="p-4 bg-dark-lighter rounded border border-secondary">
                                    <ol class="text-light-50 lh-lg fs-5 mb-0">
                                        <li class="mb-3">Buat model data di <code>src/types/expense.types.ts</code> (id, title, amount, category, date).</li>
                                        <li class="mb-3">Buat komponen item kartu di <code>src/components/ExpenseCard.tsx</code>.</li>
                                        <li class="mb-3">Buat screen utama di <code>src/screens/ExpenseScreen.tsx</code> dengan form input (Judul & Nominal), validasi form tidak boleh kosong, dan kartu total pengeluaran di bagian atas.</li>
                                        <li class="mb-3">Panggil <code>ExpenseScreen</code> di <code>App.tsx</code> agar root entry tetap bersih.</li>
                                        <li>Jalankan di smartphone melalui <strong>Expo Go</strong> dan demonstrasikan interaktivitas tambah & hapus pengeluarannya!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            "3": {
                title: "Navigation & Multi Page (Expo Router)",
                subtitle: "Expo Router, file-based routing, Stack layout, Link, router.push, dynamic route [id], passing parameter, dan alur list-detail.",
                content: `
                    <!-- Pengantar Materi -->
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="bi bi-signpost-split-fill fs-2 text-info me-3"></i>
                                    <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 3 Mobile?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Aplikasi mobile di dunia nyata tidak pernah hanya memiliki satu layar. Di pertemuan ini, kita akan mempelajari konsep <strong>Navigasi & Multi-Page</strong> menggunakan standar resmi industri terbaru: <strong>Expo Router</strong>.
                                </p>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-info fw-bold"><i class="bi bi-folder2-open me-2"></i>File-Based Routing</h6>
                                            <p class="small text-light-50 mb-0">Mirip seperti web, nama file dan folder di dalam direktori <code>app/</code> otomatis menjadi URL rute halaman. Tanpa konfigurasi routing rumit!</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-primary fw-bold"><i class="bi bi-arrow-left-right me-2"></i>Passing Parameter</h6>
                                            <p class="small text-light-50 mb-0">Mengirim data ID dari halaman List ke halaman Detail menggunakan Dynamic Route <code>[id].tsx</code> dan React Hook <code>useLocalSearchParams()</code>.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-layers me-2"></i>Native Stack Header</h6>
                                            <p class="small text-light-50 mb-0">Otomatis mendapatkan animasi transisi layar halus khas iOS/Android lengkap dengan tombol kembali (Back Button) bawaan sistem operasi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- PENTING: Lokasi Project & Struktur Expo Router -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Struktur Folder Maintainable (Expo Router)</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Simpan project di folder kerja kamu (misal <code>D:\\Projects\\bprotic-mobile\\</code> atau <code>C:\\Projects\\bprotic-mobile\\</code>). <br>
                            Susun struktur file berbasis clean architecture berikut di VS Code:
                        </p>

                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h6 class="text-info fw-bold mb-3"><i class="bi bi-folder-symlink me-2"></i>Pohon Struktur File:</h6>
                                <pre><code class="language-bash">bprotic-mobile/
├── app/                        # [ROUTER] Seluruh rute layar didaftarkan di sini
│   ├── _layout.tsx             # [LAYOUT] Stack Navigator utama & konfigurasi header dark theme
│   ├── index.tsx               # [HALAMAN 1] Layar Utama: Katalog Daftar Kursus (List Screen)
│   └── detail/
│       └── [id].tsx            # [HALAMAN 2] Layar Detail Dinamis: Menangkap parameter id
├── src/
│   ├── types/
│   │   └── course.types.ts     # [TYPES] Interface TypeScript model data Course
│   └── data/
│       └── courses.data.ts     # [DATA] Array data mock daftar kursus BPROTIC
├── app.json
└── package.json</code></pre>

                                <div class="p-3 bg-dark rounded border border-info mt-3">
                                    <h6 class="text-info fw-bold mb-2"><i class="bi bi-lightbulb-fill me-2"></i>Aturan Penting Expo Router:</h6>
                                    <ul class="text-light-50 small mb-0 lh-lg">
                                        <li>File <code>app/index.tsx</code> otomatis menjadi halaman pertama yang terbuka saat aplikasi dibuka (rute <code>/</code>).</li>
                                        <li>File dengan kurung siku seperti <code>app/detail/[id].tsx</code> adalah <strong>Dynamic Route</strong>. Rute ini bisa menangani <code>/detail/1</code>, <code>/detail/2</code>, dst.</li>
                                        <li>File <code>app/_layout.tsx</code> bertindak sebagai pembungkus (wrapper) semua layar dengan Stack Animation native.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 2: Implementasi File per File -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Implementasi Kode Lengkap per File</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">Mari kita buat 5 file berikut satu per satu di VS Code:</p>

                        <!-- File 1: src/types/course.types.ts -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 1</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/types/course.types.ts</strong>
                                </div>
                                <span class="small text-secondary">Definisi Interface Kursus</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/types/</code> lalu buat file <code>course.types.ts</code>:</p>
                                <pre><code class="language-typescript">// src/types/course.types.ts
export interface CourseItem {
    id: string;
    title: string;
    category: string;
    level: string;
    mentor: string;
    description: string;
    duration: string;
}</code></pre>
                            </div>
                        </div>

                        <!-- File 2: src/data/courses.data.ts -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-primary me-2">File 2</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-primary"></i>src/data/courses.data.ts</strong>
                                </div>
                                <span class="small text-secondary">Mock Data Array Kursus</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/data/</code> lalu buat file <code>courses.data.ts</code>:</p>
                                <pre><code class="language-typescript">// src/data/courses.data.ts
import { CourseItem } from '../types/course.types';

export const COURSES: CourseItem[] = [
    {
        id: '1',
        title: 'Backend Web Development & REST API',
        category: 'Web Development',
        level: 'Pemula s/d Mahir',
        mentor: 'Ahmad Farras (Tech Lead Web)',
        duration: '10 Pertemuan (20 Jam)',
        description: 'Pelajari dasar PHP native, MySQL, arsitektur MVC, hingga pembuatan REST API production-ready menggunakan framework Laravel 11.'
    },
    {
        id: '2',
        title: 'React Native & Mobile App Development',
        category: 'Mobile Track',
        level: 'Pemula s/d Menengah',
        mentor: 'BPROTIC Mobile Lead',
        duration: '10 Pertemuan (20 Jam)',
        description: 'Membangun aplikasi mobile lintas platform (Android & iOS) dengan Expo, TypeScript, State Management, dan integrasi API Laravel.'
    },
    {
        id: '3',
        title: 'UI/UX Design for Mobile Apps',
        category: 'Design Track',
        level: 'Semua Tingkat',
        mentor: 'Creative Lead BPROTIC',
        duration: '6 Pertemuan (12 Jam)',
        description: 'Pahami prinsip User Experience, Wireframing, Desain UI modern dengan Figma, dan implementasi Design System ke kode mobile.'
    }
];</code></pre>
                            </div>
                        </div>

                        <!-- File 3: app/_layout.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-warning text-dark me-2">File 3</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-warning"></i>app/_layout.tsx</strong>
                                </div>
                                <span class="small text-secondary">Root Stack Layout & Navigation Theme</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buka atau buat file <code>app/_layout.tsx</code> untuk mengatur tema header navigasi:</p>
                                <pre><code class="language-typescript">// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        &lt;&gt;
            &lt;StatusBar style="light" /&gt;
            &lt;Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0f172a',
                    },
                    headerTintColor: '#38bdf8',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#f8fafc',
                    },
                    contentStyle: {
                        backgroundColor: '#0f172a',
                    },
                }}
            &gt;
                {/* Halaman List Kursus */}
                &lt;Stack.Screen
                    name="index"
                    options={{
                        title: 'Katalog Kursus BPROTIC',
                    }}
                /&gt;
                {/* Halaman Detail Dinamis */}
                &lt;Stack.Screen
                    name="detail/[id]"
                    options={{
                        title: 'Rincian Kursus',
                        headerBackTitle: 'Kembali',
                    }}
                /&gt;
            &lt;/Stack&gt;
        &lt;/&gt;
    );
}</code></pre>
                            </div>
                        </div>

                        <!-- File 4: app/index.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-success me-2">File 4</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-success"></i>app/index.tsx</strong>
                                </div>
                                <span class="small text-secondary">Halaman List Katalog (Halaman Utama)</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buat atau ubah file <code>app/index.tsx</code>:</p>
                                <pre><code class="language-typescript">// app/index.tsx
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { COURSES } from '../src/data/courses.data';
import { CourseItem } from '../src/types/course.types';

export default function HomeScreen() {
    // Fungsi berpindah halaman ke detail dengan parameter id
    const handleOpenDetail = (item: CourseItem) => {
        router.push('/detail/' + item.id);
    };

    return (
        &lt;View style={styles.container}&gt;
            &lt;View style={styles.header}&gt;
                &lt;Text style={styles.subtitle}&gt;BPROTIC MOBILE LEARNING&lt;/Text&gt;
                &lt;Text style={styles.title}&gt;Pilih Jalur Belajar 🚀&lt;/Text&gt;
                &lt;Text style={styles.infoText}&gt;
                    Klik pada kartu kursus di bawah untuk melihat rincian silabus & mentor.
                &lt;/Text&gt;
            &lt;/View&gt;

            &lt;FlatList
                data={COURSES}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    &lt;TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.7}
                        onPress={() => handleOpenDetail(item)}
                    &gt;
                        &lt;View style={styles.cardHeader}&gt;
                            &lt;Text style={styles.badge}&gt;{item.category}&lt;/Text&gt;
                            &lt;Text style={styles.levelText}&gt;{item.level}&lt;/Text&gt;
                        &lt;/View&gt;

                        &lt;Text style={styles.cardTitle}&gt;{item.title}&lt;/Text&gt;
                        &lt;Text style={styles.mentorText}&gt;Mentor: {item.mentor}&lt;/Text&gt;

                        &lt;View style={styles.cardFooter}&gt;
                            &lt;Text style={styles.durationText}&gt;⏱ {item.duration}&lt;/Text&gt;
                            &lt;Text style={styles.actionLink}&gt;Lihat Detail →&lt;/Text&gt;
                        &lt;/View&gt;
                    &lt;/TouchableOpacity&gt;
                )}
            /&gt;
        &lt;/View&gt;
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#0f172a',
    },
    header: {
        marginBottom: 20,
        marginTop: 8,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#7c3aed',
        letterSpacing: 1,
        marginBottom: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f8fafc',
        marginBottom: 6,
    },
    infoText: {
        fontSize: 13,
        color: '#94a3b8',
    },
    listContent: {
        gap: 14,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#1e293b',
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: '#334155',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    badge: {
        backgroundColor: '#7c3aed',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    levelText: {
        fontSize: 12,
        color: '#38bdf8',
        fontWeight: '500',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f8fafc',
        marginBottom: 6,
    },
    mentorText: {
        fontSize: 13,
        color: '#cbd5e1',
        marginBottom: 14,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#334155',
        paddingTop: 12,
    },
    durationText: {
        fontSize: 12,
        color: '#94a3b8',
    },
    actionLink: {
        fontSize: 13,
        color: '#38bdf8',
        fontWeight: 'bold',
    },
});</code></pre>
                            </div>
                        </div>

                        <!-- File 5: app/detail/[id].tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-warning text-dark me-2">File 5</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-warning"></i>app/detail/[id].tsx</strong>
                                </div>
                                <span class="small text-secondary">Halaman Detail Dinamis (Passing Params)</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>app/detail/</code> lalu buat file <code>[id].tsx</code> (wajib pakai kurung siku!):</p>
                                <pre><code class="language-typescript">// app/detail/[id].tsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { COURSES } from '../../src/data/courses.data';

export default function DetailScreen() {
    // 1. Tangkap parameter id dari URL dinamis
    const { id } = useLocalSearchParams&lt;{ id: string }&gt;();

    // 2. Cari kursus yang memiliki ID sesuai parameter
    const course = COURSES.find((c) => c.id === id);

    if (!course) {
        return (
            &lt;View style={styles.centerContainer}&gt;
                &lt;Text style={styles.notFoundText}&gt;Kursus tidak ditemukan!&lt;/Text&gt;
                &lt;TouchableOpacity style={styles.backBtn} onPress={() => router.back()}&gt;
                    &lt;Text style={styles.backBtnText}&gt;Kembali ke Katalog&lt;/Text&gt;
                &lt;/TouchableOpacity&gt;
            &lt;/View&gt;
        );
    }

    return (
        &lt;ScrollView style={styles.container} contentContainerStyle={styles.content}&gt;
            &lt;View style={styles.badgeRow}&gt;
                &lt;Text style={styles.badge}&gt;{course.category}&lt;/Text&gt;
                &lt;Text style={styles.levelBadge}&gt;{course.level}&lt;/Text&gt;
            &lt;/View&gt;

            &lt;Text style={styles.title}&gt;{course.title}&lt;/Text&gt;

            &lt;View style={styles.infoBox}&gt;
                &lt;View style={styles.infoItem}&gt;
                    &lt;Text style={styles.infoLabel}&gt;Mentor Pengampu:&lt;/Text&gt;
                    &lt;Text style={styles.infoValue}&gt;{course.mentor}&lt;/Text&gt;
                &lt;/View&gt;
                &lt;View style={styles.infoItem}&gt;
                    &lt;Text style={styles.infoLabel}&gt;Total Durasi:&lt;/Text&gt;
                    &lt;Text style={styles.infoValue}&gt;{course.duration}&lt;/Text&gt;
                &lt;/View&gt;
            &lt;/View&gt;

            &lt;Text style={styles.sectionHeader}&gt;Deskripsi Kurikulum:&lt;/Text&gt;
            &lt;Text style={styles.descText}&gt;{course.description}&lt;/Text&gt;

            &lt;View style={styles.actionContainer}&gt;
                &lt;TouchableOpacity
                    style={styles.enrollBtn}
                    onPress={() => Alert.alert('Sukses', 'Kamu telah terdaftar di kelas ' + course.title + '!')}
                &gt;
                    &lt;Text style={styles.enrollText}&gt;Ambil Kelas Ini Sekarang&lt;/Text&gt;
                &lt;/TouchableOpacity&gt;

                &lt;TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}&gt;
                    &lt;Text style={styles.cancelText}&gt;← Kembali ke Katalog&lt;/Text&gt;
                &lt;/TouchableOpacity&gt;
            &lt;/View&gt;
        &lt;/ScrollView&gt;
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
    },
    content: {
        padding: 20,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
        padding: 20,
    },
    notFoundText: {
        fontSize: 18,
        color: '#f87171',
        marginBottom: 16,
    },
    badgeRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 14,
    },
    badge: {
        backgroundColor: '#7c3aed',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 8,
    },
    levelBadge: {
        backgroundColor: 'rgba(56, 189, 248, 0.15)',
        color: '#38bdf8',
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(56, 189, 248, 0.3)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f8fafc',
        marginBottom: 20,
        lineHeight: 32,
    },
    infoBox: {
        backgroundColor: '#1e293b',
        borderRadius: 14,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#334155',
        gap: 12,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabel: {
        fontSize: 13,
        color: '#94a3b8',
    },
    infoValue: {
        fontSize: 13,
        color: '#f8fafc',
        fontWeight: 'bold',
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f8fafc',
        marginBottom: 8,
    },
    descText: {
        fontSize: 14,
        color: '#cbd5e1',
        lineHeight: 22,
        marginBottom: 30,
    },
    actionContainer: {
        gap: 12,
    },
    enrollBtn: {
        backgroundColor: '#7c3aed',
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',
    },
    enrollText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    cancelBtn: {
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#334155',
    },
    cancelText: {
        color: '#94a3b8',
        fontWeight: '600',
        fontSize: 14,
    },
    backBtn: {
        backgroundColor: '#334155',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    backBtnText: {
        color: '#f8fafc',
        fontWeight: 'bold',
    },
});</code></pre>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 3: Hasil Preview Layar Smartphone -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                            <h2 class="fw-bold mb-0 text-primary">Hasil Preview Alur Navigasi (List → Detail)</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Berikut visualisasi transisi layar saat kartu kursus di-klik di HP kamu via Expo Go:
                        </p>

                        <div class="row g-4 justify-content-center">
                            <!-- Mockup 1: Halaman List -->
                            <div class="col-md-6 mb-4">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <h6 class="text-info fw-bold mb-3"><i class="bi bi-phone me-2"></i>Layar 1: Beranda (app/index.tsx)</h6>
                                    
                                    <div class="phone-mockup">
                                        <div class="phone-notch"><div class="phone-notch-camera"></div></div>
                                        <div class="phone-screen text-start">
                                            <div class="p-2 border-bottom border-secondary mb-3 d-flex justify-content-between">
                                                <strong class="text-white small">Katalog Kursus BPROTIC</strong>
                                                <span class="text-info small">3 Kelas</span>
                                            </div>

                                            <div class="p-3 rounded-3 mb-2" style="background: #1e293b; border: 1px solid #7c3aed;">
                                                <span class="badge mb-1" style="background: #7c3aed; font-size: 9px;">Web Development</span>
                                                <div class="text-white fw-bold small">Backend Web & REST API</div>
                                                <div class="text-secondary small" style="font-size: 10px;">Mentor: Ahmad Farras</div>
                                                <div class="text-info small fw-bold text-end mt-1" style="font-size: 10px;">Lihat Detail →</div>
                                            </div>

                                            <div class="p-3 rounded-3 mb-2" style="background: #1e293b; border: 1px solid #334155;">
                                                <span class="badge mb-1" style="background: #7c3aed; font-size: 9px;">Mobile Track</span>
                                                <div class="text-white fw-bold small">React Native & Expo</div>
                                                <div class="text-secondary small" style="font-size: 10px;">Mentor: Mobile Lead</div>
                                                <div class="text-info small fw-bold text-end mt-1" style="font-size: 10px;">Lihat Detail →</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Mockup 2: Halaman Detail -->
                            <div class="col-md-6 mb-4">
                                <div class="p-3 bg-dark border border-info rounded text-center">
                                    <h6 class="text-warning fw-bold mb-3"><i class="bi bi-phone me-2"></i>Layar 2: Detail (app/detail/[id].tsx)</h6>
                                    
                                    <div class="phone-mockup">
                                        <div class="phone-notch"><div class="phone-notch-camera"></div></div>
                                        <div class="phone-screen text-start">
                                            <div class="p-2 border-bottom border-secondary mb-3 d-flex align-items-center">
                                                <span class="text-info me-2 small fw-bold">← Kembali</span>
                                                <strong class="text-white small">Rincian Kursus</strong>
                                            </div>

                                            <span class="badge mb-2" style="background: #7c3aed; font-size: 9px;">Web Development</span>
                                            <h6 class="fw-bold text-white mb-2">Backend Web & REST API</h6>
                                            
                                            <div class="p-2 rounded-3 mb-3 small" style="background: #1e293b; border: 1px solid #334155; font-size: 10px;">
                                                <div><span class="text-secondary">Mentor:</span> Ahmad Farras</div>
                                                <div><span class="text-secondary">Durasi:</span> 10 Pertemuan</div>
                                            </div>

                                            <p class="text-secondary small mb-3" style="font-size: 10px; line-height: 1.4;">
                                                Pelajari dasar PHP native, MySQL, arsitektur MVC, hingga pembuatan REST API production-ready menggunakan framework Laravel 11.
                                            </p>

                                            <div class="btn btn-sm w-100 text-white fw-bold py-2 rounded-3" style="background: #7c3aed; font-size: 11px;">
                                                Ambil Kelas Ini Sekarang
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tugas Studi Kasus Modul 3 Mobile -->
                    <section class="mt-5 pt-3">
                        <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                            <div class="card-body p-5">
                                <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 3 Mobile</h3>
                                <p class="text-light-50 mb-4 fs-5">
                                    Buatlah aplikasi <strong>Katalog Kuliner Nusantara</strong> multi-halaman dengan alur navigasi List → Detail:
                                </p>
                                
                                <div class="p-4 bg-dark-lighter rounded border border-secondary">
                                    <ol class="text-light-50 lh-lg fs-5 mb-0">
                                        <li class="mb-3">Buat model data <code>FoodItem</code> di <code>src/types/food.types.ts</code> (id, nama, asal_kota, estimasi_harga, resep_deskripsi).</li>
                                        <li class="mb-3">Buat data array minimal <strong>4 kuliner khas daerah</strong> di <code>src/data/food.data.ts</code>.</li>
                                        <li class="mb-3">Di <code>app/index.tsx</code>, tampilkan kartu makanan dalam format FlatList. Ketika salah satu makanan diklik, lakukan navigasi menggunakan <code>router.push('/detail/' + item.id)</code>.</li>
                                        <li class="mb-3">Di <code>app/detail/[id].tsx</code>, tangkap parameter ID, tampilkan seluruh rincian kuliner dan bahan-bahannya, serta sediakan tombol kembali.</li>
                                        <li>Jalankan di smartphone fisik via <strong>Expo Go</strong> dan demonstrasikan transisi navigasinya!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            "4": { title: "Component & Struktur Code Modular", subtitle: "Reusable component, pemisahan UI dan logic, folder structure, dan separation of concern." },
            "5": { title: "CRUD Lokal & Local Storage (AsyncStorage)", subtitle: "State management, CRUD lokal array/object, dan persistence data device." },
            "6": { title: "HTTP & Consume REST API Laravel", subtitle: "Konsep HTTP request, JSON, fetch/axios, async/await, dan integrasi API Laravel." },
            "7": { title: "CRUD melalui REST API", subtitle: "POST, PUT, DELETE, request body, handling response, dan error handling." },
            "8": { title: "Relasi Data & API Integration", subtitle: "Menampilkan data hasil relasi API, nested JSON, dan multiple endpoints." },
            "9": { title: "Search, Filter & UI/UX Feedback", subtitle: "Fitur pencarian, filter data, loading indicator, Alert, dan Toast notification." },
            "10": { title: "Finalisasi & Build APK (EAS Build)", subtitle: "Testing, debugging, konfigurasi EAS Build, build Android, dan generate APK." }
        }
    },

    "ionic": {
        "metadata": {
            name: "Ionic Framework",
            badge: "Ionic CLI & TypeScript",
            description: "Pengembangan aplikasi hybrid mobile modern berbasis web teknologi dengan Ionic CLI dan Capacitor."
        },
        "weeks": {
            "1": {
                title: "Setup Ionic & Dasar TypeScript",
                subtitle: "Lokasi project terpisah dari Laragon, struktur modular Ionic, sintaks dasar TypeScript, array & object.",
                content: `
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <h4 class="fw-bold text-white mb-3"><i class="bi bi-info-circle-fill text-info me-2"></i>Tentang Track Ionic Framework</h4>
                                <p class="text-light-50 fs-5 mb-0">Ionic memungkinkan developer menggunakan komponen UI mobile siap pakai berbasis standar web modern yang dikompilasi ke aplikasi native melalui Capacitor.</p>
                            </div>
                        </div>
                    </section>
                    
                    <!-- PENTING: Lokasi Project Ionic -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="card border-warning bg-dark-lighter shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-warning mb-2"><i class="bi bi-exclamation-triangle-fill me-2"></i>Lokasi Pembuatan Project Ionic:</h5>
                                <p class="text-light-50 fs-6 mb-0">
                                    Sama seperti React Native, simpan project Ionic di luar <code>C:\\laragon\\www\\</code> (misal: <code>D:\\Projects\\bprotic-ionic\\</code> atau <code>C:\\Projects\\bprotic-ionic\\</code>) karena Ionic dijalankan menggunakan server development Node.js lokal sendiri.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Instalasi Ionic CLI & Pembuatan Project</h2>
                        </div>
                        <div class="p-4 bg-dark-lighter border border-secondary rounded">
                            <pre><code class="language-bash"># 1. Install Ionic CLI secara global
npm install -g @ionic/cli

# 2. Masuk ke folder kerja (di luar Laragon www)
cd C:\\Projects

# 3. Buat project baru
ionic start bprotic-ionic blank --type=react

# 4. Masuk ke direktori dan jalankan
cd bprotic-ionic
ionic serve</code></pre>
                        </div>
                    </section>

                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Struktur File Maintainable pada Ionic</h2>
                        </div>
                        <div class="p-4 bg-dark-lighter border border-secondary rounded">
                            <pre><code class="language-bash">bprotic-ionic/
├── src/
│   ├── components/            # Komponen UI Ionic reusable
│   ├── pages/                 # Halaman aplikasi (IonPage, IonContent, dll)
│   ├── theme/                 # variables.css (styling & tema warna Ionic)
│   ├── types/                 # Definisi Interface TypeScript
│   └── App.tsx                # Setup IonApp & React Router
├── capacitor.config.ts        # Konfigurasi native Capacitor untuk Android APK
└── package.json</code></pre>
                        </div>
                    </section>
                `
            },
            "2": {
                title: "UI, Data Binding & Interaction",
                subtitle: "Komponen UI Ionic, data binding dua arah, interpolasi data, event handling onIonInput & onClick.",
                content: `
                    <!-- Pengantar Materi -->
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="bi bi-info-circle-fill fs-2 text-info me-3"></i>
                                    <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 2 Ionic?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Di pertemuan kedua ini, kita akan mengubah tampilan statis menjadi <strong>aplikasi mobile yang interaktif dan dinamis</strong> menggunakan ekosistem <strong>Ionic React</strong>. Kita akan mempelajari bagaimana komponen bawaan Ionic beradaptasi secara native, cara menangkap ketikan pengguna melalui <em>Data Binding</em>, menampilkan data dinamis (<em>Interpolasi</em>), dan merespon sentuhan tombol.
                                </p>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-info fw-bold"><i class="bi bi-columns-gap me-2"></i>Komponen UI Bawaan</h6>
                                            <p class="small text-light-50 mb-0">Ionic menyediakan <code>IonCard</code>, <code>IonInput</code>, <code>IonItem</code>, dan <code>IonButton</code> yang otomatis beradaptasi dengan gaya iOS (Cupertino) dan Android (Material Design).</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-primary fw-bold"><i class="bi bi-arrow-repeat me-2"></i>Data Binding & Interpolasi</h6>
                                            <p class="small text-light-50 mb-0">Menghubungkan input teks dengan memori state React (<code>useState</code>) dan menampilkan nilai variabel ke layar HP secara real-time menggunakan kurung kurawal <code>{nilai}</code>.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-hand-index-thumb me-2"></i>Event Handling & Action</h6>
                                            <p class="small text-light-50 mb-0">Menggunakan event khusus Ionic seperti <code>onIonInput</code> untuk membaca ketikan formulir dan <code>onClick</code> pada tombol untuk memicu fungsi logika.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- PENTING: Rekomendasi Struktur File Maintainable Modul 2 Ionic -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="card border-info bg-dark-lighter shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-info mb-3"><i class="bi bi-diagram-3-fill me-2"></i>Struktur File Maintainable Modul 2:</h5>
                                <p class="text-light-50 fs-6 mb-3">
                                    Agar kode tidak menumpuk dalam ratusan baris di <code>Home.tsx</code>, kita membagi kode project menjadi folder modular yang rapi:
                                </p>
                                <ul class="text-light-50 lh-lg fs-6 mb-0">
                                    <li><code>📁 src/types/student.types.ts</code> : Menampung interface model data <code>StudentItem</code>.</li>
                                    <li><code>📁 src/components/StudentCard.tsx</code> : Komponen kartu peserta (reusable UI) dengan badge dan tombol hapus.</li>
                                    <li><code>📁 src/pages/Home.tsx</code> : Halaman utama yang mengelola form input Ionic, state data, dan daftar peserta kursus.</li>
                                    <li><code>📁 src/App.tsx</code> : Root entry point Ionic setup yang membungkus komponen dalam <code>IonApp</code>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 1: Konsep UI Component & Data Binding di Ionic -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Konsep Data Binding & Event Handling di Ionic</h2>
                        </div>
                        <p class="text-light-50 fs-5">Di Ionic React, form input biasanya dibungkus di dalam <code>IonItem</code> agar memiliki garis pembatas dan padding standar aplikasi mobile native.</p>
                        
                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h5 class="fw-bold text-info"><i class="bi bi-lightbulb me-2"></i>Mekanisme Two-Way Binding di Ionic React:</h5>
                                <p class="text-light-50 mb-3"><code>&lt;IonInput value={nama} onIonInput={(e) =&gt; setNama(e.detail.value!)} /&gt;</code></p>
                                <ul class="text-light-50 lh-lg mb-0 fs-6">
                                    <li><code>value={nama}</code>: Menampilkan isi state ke dalam kotak input.</li>
                                    <li><code>onIonInput</code>: Event khusus Ionic yang terpanggil setiap kali pengguna mengetik huruf di keyboard HP. Nilai teks diambil dari <code>e.detail.value!</code>.</li>
                                    <li><code>onClick</code> pada <code>&lt;IonButton&gt;</code>: Memicu fungsi JavaScript untuk menambahkan data ke array state.</li>
                                    <li><strong>Interpolasi Data</strong>: Menampilkan data ke dalam JSX menggunakan ekspresi <code>{item.nama}</code> dan perulangan array <code>data.map((item) =&gt; ...)</code>.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 2: Implementasi File per File -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Hands-on: Form Input & Daftar Peserta Kursus Interaktif</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">Mari kita buat dan lengkapi 4 file berikut di dalam folder project Ionic kamu (<code>bprotic-ionic/</code>):</p>

                        <!-- File 1: types -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 1</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/types/student.types.ts</strong>
                                </div>
                                <span class="small text-secondary">Definisi Interface Data</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/types/</code> lalu buat file <code>student.types.ts</code>:</p>
                                <pre><code class="language-typescript">// src/types/student.types.ts

export interface StudentItem {
    id: string;
    nama: string;
    kelas: string;
    status: "Aktif" | "Cuti";
}</code></pre>
                            </div>
                        </div>

                        <!-- File 2: components/StudentCard -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-primary me-2">File 2</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/components/StudentCard.tsx</strong>
                                </div>
                                <span class="small text-secondary">Komponen Kartu Reusable</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/components/</code> lalu buat file <code>StudentCard.tsx</code>:</p>
                                <pre><code class="language-tsx">// src/components/StudentCard.tsx
import React from 'react';
import { 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonBadge, 
    IonButton, 
    IonIcon 
} from '@ionic/react';
import { trashOutline, personCircleOutline } from 'ionicons/icons';
import { StudentItem } from '../types/student.types';

interface StudentCardProps {
    student: StudentItem;
    onDelete: (id: string) =&gt; void;
}

export const StudentCard: React.FC&lt;StudentCardProps&gt; = ({ student, onDelete }) =&gt; {
    return (
        &lt;IonCard className="ion-margin-bottom" style={{ borderRadius: '14px', border: '1px solid #334155' }}&gt;
            &lt;IonCardHeader className="ion-padding-bottom"&gt;
                &lt;div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}&gt;
                    &lt;div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}&gt;
                        &lt;IonIcon icon={personCircleOutline} style={{ fontSize: '24px', color: '#38bdf8' }} /&gt;
                        &lt;IonCardTitle style={{ fontSize: '18px', fontWeight: 'bold' }}&gt;
                            {student.nama}
                        &lt;/IonCardTitle&gt;
                    &lt;/div&gt;
                    &lt;IonBadge color={student.status === 'Aktif' ? 'success' : 'warning'}&gt;
                        {student.status}
                    &lt;/IonBadge&gt;
                &lt;/div&gt;
                &lt;IonCardSubtitle style={{ marginTop: '4px', color: '#94a3b8' }}&gt;
                    Kelas: {student.kelas}
                &lt;/IonCardSubtitle&gt;
            &lt;/IonCardHeader&gt;

            &lt;IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}&gt;
                &lt;span style={{ fontSize: '12px', color: '#64748b' }}&gt;ID: {student.id}&lt;/span&gt;
                &lt;IonButton 
                    fill="clear" 
                    color="danger" 
                    size="small" 
                    onClick={() =&gt; onDelete(student.id)}
                &gt;
                    &lt;IonIcon slot="icon-only" icon={trashOutline} /&gt;
                &lt;/IonButton&gt;
            &lt;/IonCardContent&gt;
        &lt;/IonCard&gt;
    );
};</code></pre>
                            </div>
                        </div>

                        <!-- File 3: pages/Home.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-success me-2">File 3</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/pages/Home.tsx</strong>
                                </div>
                                <span class="small text-secondary">Halaman Interaktif & Form</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark-text me-1 text-warning"></i>Buka file <code>src/pages/Home.tsx</code> dan ganti isinya dengan kode berikut:</p>
                                <pre><code class="language-tsx">// src/pages/Home.tsx
import React, { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonList,
    IonToast
} from '@ionic/react';
import { personAddOutline } from 'ionicons/icons';
import { StudentItem } from '../types/student.types';
import { StudentCard } from '../components/StudentCard';

const Home: React.FC = () =&gt; {
    // 1. State data peserta (array)
    const [students, setStudents] = useState&lt;StudentItem[]&gt;([
        { id: '1', nama: 'Farras Subahan', kelas: 'Mobile Dev Expo', status: 'Aktif' },
        { id: '2', nama: 'Budi Santoso', kelas: 'Web Dev Laravel', status: 'Aktif' }
    ]);

    // 2. State untuk form input (Two-Way Binding)
    const [namaInput, setNamaInput] = useState&lt;string&gt;('');
    const [kelasInput, setKelasInput] = useState&lt;string&gt;('');

    // 3. State notifikasi Toast
    const [showToast, setShowToast] = useState&lt;boolean&gt;(false);
    const [toastMessage, setToastMessage] = useState&lt;string&gt;('');

    // 4. Handler tombol Tambah Peserta
    const handleAddStudent = () =&gt; {
        if (!namaInput.trim() || !kelasInput.trim()) {
            setToastMessage('Harap lengkapi nama dan kelas!');
            setShowToast(true);
            return;
        }

        const newStudent: StudentItem = {
            id: Date.now().toString(),
            nama: namaInput.trim(),
            kelas: kelasInput.trim(),
            status: 'Aktif'
        };

        setStudents([newStudent, ...students]);
        setNamaInput('');
        setKelasInput('');
        setToastMessage('Berhasil menambahkan peserta baru!');
        setShowToast(true);
    };

    // 5. Handler tombol Hapus
    const handleDeleteStudent = (id: string) =&gt; {
        setStudents(students.filter(student =&gt; student.id !== id));
        setToastMessage('Peserta berhasil dihapus.');
        setShowToast(true);
    };

    return (
        &lt;IonPage&gt;
            &lt;IonHeader&gt;
                &lt;IonToolbar color="primary"&gt;
                    &lt;IonTitle&gt;BPROTIC Kursus Mobile&lt;/IonTitle&gt;
                &lt;/IonToolbar&gt;
            &lt;/IonHeader&gt;

            &lt;IonContent fullscreen className="ion-padding"&gt;
                {/* Form Input Card */}
                &lt;IonCard style={{ borderRadius: '16px', margin: '0 0 20px 0' }}&gt;
                    &lt;IonCardContent&gt;
                        &lt;h4 style={{ fontWeight: 'bold', marginBottom: '16px', color: '#38bdf8' }}&gt;
                            &lt;IonIcon icon={personAddOutline} style={{ marginRight: '8px' }} /&gt;
                            Tambah Peserta Baru
                        &lt;/h4&gt;

                        &lt;IonItem lines="full" style={{ marginBottom: '12px' }}&gt;
                            &lt;IonLabel position="stacked"&gt;Nama Lengkap&lt;/IonLabel&gt;
                            &lt;IonInput 
                                placeholder="Contoh: Siti Rahma" 
                                value={namaInput}
                                onIonInput={(e) =&gt; setNamaInput(e.detail.value || '')}
                                clearInput
                            /&gt;
                        &lt;/IonItem&gt;

                        &lt;IonItem lines="full" style={{ marginBottom: '16px' }}&gt;
                            &lt;IonLabel position="stacked"&gt;Pilihan Kelas&lt;/IonLabel&gt;
                            &lt;IonInput 
                                placeholder="Contoh: Mobile Development (Ionic)" 
                                value={kelasInput}
                                onIonInput={(e) =&gt; setKelasInput(e.detail.value || '')}
                                clearInput
                            /&gt;
                        &lt;/IonItem&gt;

                        &lt;IonButton 
                            expand="block" 
                            color="primary" 
                            onClick={handleAddStudent}
                            style={{ fontWeight: 'bold' }}
                        &gt;
                            Simpan Peserta
                        &lt;/IonButton&gt;
                    &lt;/IonCardContent&gt;
                &lt;/IonCard&gt;

                {/* Ringkasan & Total */}
                &lt;div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}&gt;
                    &lt;h5 style={{ fontWeight: 'bold', margin: 0 }}&gt;Daftar Peserta Terdaftar&lt;/h5&gt;
                    &lt;span style={{ fontSize: '14px', color: '#94a3b8' }}&gt;
                        Total: &lt;strong style={{ color: '#38bdf8' }}&gt;{students.length}&lt;/strong&gt; Orang
                    &lt;/span&gt;
                &lt;/div&gt;

                {/* List Peserta Dinamis */}
                &lt;IonList lines="none"&gt;
                    {students.map((student) =&gt; (
                        &lt;StudentCard 
                            key={student.id} 
                            student={student} 
                            onDelete={handleDeleteStudent} 
                        /&gt;
                    ))}
                &lt;/IonList&gt;

                {/* Feedback Toast Notification */}
                &lt;IonToast
                    isOpen={showToast}
                    onDidDismiss={() =&gt; setShowToast(false)}
                    message={toastMessage}
                    duration={1800}
                    position="bottom"
                /&gt;
            &lt;/IonContent&gt;
        &lt;/IonPage&gt;
    );
};

export default Home;</code></pre>
                            </div>
                        </div>

                        <!-- File 4: App.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-secondary me-2">File 4</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/App.tsx</strong>
                                </div>
                                <span class="small text-secondary">Root Setup & Themes</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark-text me-1 text-warning"></i>Pastikan <code>src/App.tsx</code> merender komponen <code>Home</code>:</p>
                                <pre><code class="language-tsx">// src/App.tsx
import React from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

import Home from './pages/Home';

setupIonicReact();

const App: React.FC = () =&gt; (
    &lt;IonApp&gt;
        &lt;Home /&gt;
    &lt;/IonApp&gt;
);

export default App;</code></pre>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 3: Simulasi Output Tampilan Mobile (Posisi di Bawah Code) -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                            <h2 class="fw-bold mb-0 text-primary">Simulasi Output Tampilan Mobile</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Jalankan perintah <code>ionic serve</code> di terminal kamu. Aplikasi akan berjalan di browser dengan preview interaktif tampilan smartphone:
                        </p>

                        <div class="row justify-content-center">
                            <div class="col-md-6 mb-4">
                                <div class="p-3 bg-dark border border-info rounded text-center">
                                    <h6 class="text-info fw-bold mb-3"><i class="bi bi-phone me-2"></i>Simulasi Aplikasi Ionic (Home.tsx)</h6>
                                    <div class="phone-mockup">
                                        <div class="phone-notch"><div class="phone-notch-camera"></div></div>
                                        <div class="phone-screen text-start">
                                            <!-- Ionic App Bar -->
                                            <div class="p-2 border-bottom border-secondary mb-3 d-flex align-items-center justify-content-between" style="background: #0284c7;">
                                                <strong class="text-white small">BPROTIC Kursus Mobile</strong>
                                                <i class="bi bi-person-circle text-white small"></i>
                                            </div>

                                            <!-- Form Card Preview -->
                                            <div class="p-3 rounded-3 mb-3" style="background: #1e293b; border: 1px solid #334155;">
                                                <div class="text-info fw-bold small mb-2"><i class="bi bi-person-plus me-1"></i> Tambah Peserta Baru</div>
                                                <div class="mb-2">
                                                    <span class="text-secondary" style="font-size: 8px;">NAMA LENGKAP</span>
                                                    <div class="bg-dark p-1 rounded border border-secondary text-white small" style="font-size: 10px;">Siti Rahma</div>
                                                </div>
                                                <div class="mb-2">
                                                    <span class="text-secondary" style="font-size: 8px;">PILIHAN KELAS</span>
                                                    <div class="bg-dark p-1 rounded border border-secondary text-white small" style="font-size: 10px;">Mobile Dev (Ionic)</div>
                                                </div>
                                                <div class="btn btn-primary btn-sm w-100 py-1" style="font-size: 10px; font-weight: bold;">Simpan Peserta</div>
                                            </div>

                                            <!-- List Header -->
                                            <div class="d-flex justify-content-between align-items-center mb-2 px-1">
                                                <span class="text-white fw-bold" style="font-size: 9px;">Daftar Peserta</span>
                                                <span class="text-info" style="font-size: 8px;">Total: 2 Orang</span>
                                            </div>

                                            <!-- Item 1 -->
                                            <div class="p-2 rounded-2 mb-2" style="background: #1e293b; border: 1px solid #38bdf8;">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <strong class="text-white small" style="font-size: 10px;">Farras Subahan</strong>
                                                    <span class="badge bg-success text-dark" style="font-size: 7px;">Aktif</span>
                                                </div>
                                                <span class="text-secondary d-block" style="font-size: 8px;">Kelas: Mobile Dev Expo</span>
                                                <div class="d-flex justify-content-between align-items-center mt-1">
                                                    <span class="text-muted" style="font-size: 7px;">ID: 17288910</span>
                                                    <i class="bi bi-trash text-danger" style="font-size: 9px;"></i>
                                                </div>
                                            </div>

                                            <!-- Item 2 -->
                                            <div class="p-2 rounded-2 mb-2" style="background: #1e293b; border: 1px solid #334155;">
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <strong class="text-white small" style="font-size: 10px;">Budi Santoso</strong>
                                                    <span class="badge bg-success text-dark" style="font-size: 7px;">Aktif</span>
                                                </div>
                                                <span class="text-secondary d-block" style="font-size: 8px;">Kelas: Web Dev Laravel</span>
                                                <div class="d-flex justify-content-between align-items-center mt-1">
                                                    <span class="text-muted" style="font-size: 7px;">ID: 17288911</span>
                                                    <i class="bi bi-trash text-danger" style="font-size: 9px;"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tugas Studi Kasus Modul 2 Ionic -->
                    <section class="mt-5 pt-3">
                        <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                            <div class="card-body p-5">
                                <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 2 Ionic</h3>
                                <p class="text-light-50 mb-4 fs-5">
                                    Kembangkan aplikasi di atas menjadi <strong>Aplikasi Catatan Pengeluaran Harian Mahasiswa (Expense Tracker)</strong> dengan ketentuan:
                                </p>
                                <div class="p-4 bg-dark-lighter rounded border border-secondary">
                                    <ol class="text-light-50 lh-lg fs-5 mb-0">
                                        <li class="mb-3">Buat tipe data <code>ExpenseItem</code> di <code>src/types/expense.types.ts</code> (id, judul, nominal, kategori).</li>
                                        <li class="mb-3">Buat input form menggunakan <code>IonInput</code> untuk Judul dan Nominal, serta <code>IonSelect</code> untuk memilih Kategori (Makanan, Transportasi, Kuliah).</li>
                                        <li class="mb-3">Tampilkan total akumulasi pengeluaran di bagian atas layar secara otomatis menggunakan kalkulasi <code>reduce()</code>.</li>
                                        <li class="mb-3">Tambahkan fitur tombol hapus pengeluaran dengan konfirmasi atau notifikasi <code>IonToast</code>.</li>
                                        <li>Jalankan di browser menggunakan <code>ionic serve</code> dan demonstrasikan interaktivitasnya!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            "3": {
                title: "Navigation & Multi Page (Ionic React Navigation)",
                subtitle: "IonReactRouter, IonRouterOutlet, dynamic route /detail/:id, useParams, IonBackButton, dan alur list-detail.",
                content: `
                    <!-- Pengantar Materi -->
                    <section class="mb-5">
                        <div class="card bg-dark-lighter border-info shadow-sm">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="bi bi-compass-fill fs-2 text-info me-3"></i>
                                    <h4 class="fw-bold mb-0 text-white">Apa yang Dipelajari di Pertemuan 3 Ionic?</h4>
                                </div>
                                <p class="text-light-50 fs-5 mb-3">
                                    Di ekosistem <strong>Ionic Framework</strong>, sistem navigasi dibangun di atas <code>@ionic/react-router</code> (pengembangan dari React Router DOM). Ionic menyediakan transisi layar animasi mobile yang elegan serta komponen tombol kembali (Back Button) bawaan iOS dan Android.
                                </p>
                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-info fw-bold"><i class="bi bi-diagram-3 me-2"></i>IonRouterOutlet</h6>
                                            <p class="small text-light-50 mb-0">Wadah utama tempat bertukarnya halaman (screen stack) dengan animasi transisi native.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-primary fw-bold"><i class="bi bi-link-45deg me-2"></i>routerLink Prop</h6>
                                            <p class="small text-light-50 mb-0">Komponen seperti <code>&lt;IonItem&gt;</code> dan <code>&lt;IonButton&gt;</code> memiliki prop bawaan <code>routerLink</code> untuk berpindah halaman tanpa reload.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="p-3 bg-dark rounded border border-secondary h-100">
                                            <h6 class="text-success fw-bold"><i class="bi bi-arrow-left-circle me-2"></i>IonBackButton</h6>
                                            <p class="small text-light-50 mb-0">Tombol kembali otomatis yang mengenali riwayat halaman sebelumnya secara cerdas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 1: Struktur File Maintainable Ionic -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 1</span>
                            <h2 class="fw-bold mb-0 text-primary">Struktur Folder Maintainable Ionic Multi-Page</h2>
                        </div>
                        <p class="text-light-50 fs-5 mb-4">
                            Buka project <code>bprotic-ionic</code> kamu (di <code>D:\\Projects\\bprotic-ionic\\</code> atau <code>C:\\Projects\\bprotic-ionic\\</code>). Susun file berikut:
                        </p>

                        <div class="card bg-dark-lighter border-secondary mb-4 shadow-sm">
                            <div class="card-body p-4">
                                <h6 class="text-info fw-bold mb-3"><i class="bi bi-folder-symlink me-2"></i>Pohon Struktur File:</h6>
                                <pre><code class="language-bash">bprotic-ionic/
├── src/
│   ├── types/
│   │   └── course.types.ts     # [TYPES] Interface TypeScript CourseItem
│   ├── data/
│   │   └── courses.data.ts     # [DATA] Array mock data kursus
│   ├── pages/
│   │   ├── Home.tsx            # [HALAMAN 1] Layar Utama List Kursus
│   │   └── Detail.tsx          # [HALAMAN 2] Layar Detail dengan useParams & IonBackButton
│   └── App.tsx                 # [ROUTER SETUP] Setup IonApp, IonReactRouter, & Route
├── capacitor.config.ts
└── package.json</code></pre>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 2: Implementasi File per File -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 2</span>
                            <h2 class="fw-bold mb-0 text-primary">Implementasi Kode Lengkap per File</h2>
                        </div>

                        <!-- File 1: src/types/course.types.ts -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 1</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-info"></i>src/types/course.types.ts</strong>
                                </div>
                                <span class="small text-secondary">Definisi Model Tipe Data</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/types/</code> lalu buat file <code>course.types.ts</code>:</p>
                                <pre><code class="language-typescript">// src/types/course.types.ts
export interface CourseItem {
    id: string;
    title: string;
    category: string;
    level: string;
    mentor: string;
    description: string;
    duration: string;
}</code></pre>
                            </div>
                        </div>

                        <!-- File 2: src/data/courses.data.ts -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-primary me-2">File 2</span>
                                    <strong class="text-white"><i class="bi bi-file-earmark-code me-1 text-primary"></i>src/data/courses.data.ts</strong>
                                </div>
                                <span class="small text-secondary">Mock Data Array Kursus</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-folder-plus me-1 text-warning"></i>Buat folder <code>src/data/</code> lalu buat file <code>courses.data.ts</code>:</p>
                                <pre><code class="language-typescript">// src/data/courses.data.ts
import { CourseItem } from '../types/course.types';

export const COURSES: CourseItem[] = [
    {
        id: '1',
        title: 'Backend Web & Laravel REST API',
        category: 'Web Development',
        level: 'Pemula s/d Mahir',
        mentor: 'Ahmad Farras',
        duration: '10 Pertemuan',
        description: 'Membangun API menggunakan PHP, MySQL, MVC, dan Laravel 11.'
    },
    {
        id: '2',
        title: 'Ionic & Capacitor Hybrid Mobile',
        category: 'Mobile Track',
        level: 'Pemula s/d Menengah',
        mentor: 'Ionic Lead BPROTIC',
        duration: '10 Pertemuan',
        description: 'Membangun aplikasi hybrid cross-platform dengan Ionic React dan Capacitor.'
    }
];</code></pre>
                            </div>
                        </div>

                        <!-- File 3: src/pages/Home.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-warning text-dark me-2">File 3</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-warning"></i>src/pages/Home.tsx</strong>
                                </div>
                                <span class="small text-secondary">Layar List Katalog (Home Screen)</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buat file <code>src/pages/Home.tsx</code>:</p>
                                <pre><code class="language-typescript">// src/pages/Home.tsx
import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonNote
} from '@ionic/react';
import { COURSES } from '../data/courses.data';

export const Home: React.FC = () => {
    return (
        &lt;IonPage&gt;
            &lt;IonHeader&gt;
                &lt;IonToolbar color="dark"&gt;
                    &lt;IonTitle&gt;Katalog Kursus BPROTIC&lt;/IonTitle&gt;
                &lt;/IonToolbar&gt;
            &lt;/IonHeader&gt;
            &lt;IonContent className="ion-padding" color="dark"&gt;
                &lt;h2 style={{ color: '#38bdf8', fontWeight: 'bold', marginTop: '10px' }}&gt;
                    Pilih Jalur Belajar 🚀
                &lt;/h2&gt;
                &lt;p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}&gt;
                    Klik pada salah satu kursus di bawah untuk membaca rincian lengkapnya:
                &lt;/p&gt;

                &lt;IonList inset={true} style={{ background: '#1e293b', borderRadius: '16px' }}&gt;
                    {COURSES.map((course) => (
                        &lt;IonItem
                            key={course.id}
                            routerLink={'/detail/' + course.id}
                            detail={true}
                            style={{ '--background': '#1e293b', '--color': '#f8fafc' }}
                        &gt;
                            &lt;IonLabel&gt;
                                &lt;h3 style={{ fontWeight: 'bold', fontSize: '16px', color: '#f8fafc' }}&gt;
                                    {course.title}
                                &lt;/h3&gt;
                                &lt;p style={{ color: '#94a3b8' }}&gt;Mentor: {course.mentor}&lt;/p&gt;
                                &lt;IonNote style={{ color: '#38bdf8' }}&gt;⏱ {course.duration}&lt;/IonNote&gt;
                            &lt;/IonLabel&gt;
                            &lt;IonBadge slot="end" color="primary"&gt;
                                {course.category}
                            &lt;/IonBadge&gt;
                        &lt;/IonItem&gt;
                    ))}
                &lt;/IonList&gt;
            &lt;/IonContent&gt;
        &lt;/IonPage&gt;
    );
};
export default Home;</code></pre>
                            </div>
                        </div>

                        <!-- File 4: src/pages/Detail.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-success me-2">File 4</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-success"></i>src/pages/Detail.tsx</strong>
                                </div>
                                <span class="small text-secondary">Layar Detail dengan useParams & IonBackButton</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Buat file <code>src/pages/Detail.tsx</code>:</p>
                                <pre><code class="language-typescript">// src/pages/Detail.tsx
import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { COURSES } from '../data/courses.data';

export const Detail: React.FC = () => {
    // 1. Ambil id dari parameter URL
    const { id } = useParams&lt;{ id: string }&gt;();

    // 2. Cocokkan dengan data kursus
    const course = COURSES.find((c) => c.id === id);

    return (
        &lt;IonPage&gt;
            &lt;IonHeader&gt;
                &lt;IonToolbar color="dark"&gt;
                    &lt;IonButtons slot="start"&gt;
                        {/* Tombol Back otomatis bawaan Ionic */}
                        &lt;IonBackButton defaultHref="/home" text="Kembali" /&gt;
                    &lt;/IonButtons&gt;
                    &lt;IonTitle&gt;Rincian Kursus&lt;/IonTitle&gt;
                &lt;/IonToolbar&gt;
            &lt;/IonHeader&gt;
            &lt;IonContent className="ion-padding" color="dark"&gt;
                {course ? (
                    &lt;IonCard style={{ background: '#1e293b', borderRadius: '16px', border: '1px solid #334155' }}&gt;
                        &lt;IonCardHeader&gt;
                            &lt;IonCardSubtitle style={{ color: '#38bdf8' }}&gt;
                                {course.category} • {course.level}
                            &lt;/IonCardSubtitle&gt;
                            &lt;IonCardTitle style={{ color: '#f8fafc', fontWeight: 'bold' }}&gt;
                                {course.title}
                            &lt;/IonCardTitle&gt;
                        &lt;/IonCardHeader&gt;
                        &lt;IonCardContent style={{ color: '#cbd5e1', lineHeight: '1.6' }}&gt;
                            &lt;p style={{ marginBottom: '12px' }}&gt;
                                &lt;strong&gt;Mentor:&lt;/strong&gt; {course.mentor}&lt;br /&gt;
                                &lt;strong&gt;Durasi:&lt;/strong&gt; {course.duration}
                            &lt;/p&gt;
                            &lt;hr style={{ borderColor: '#334155' }} /&gt;
                            &lt;p style={{ marginTop: '12px' }}&gt;{course.description}&lt;/p&gt;
                            &lt;IonButton expand="block" color="primary" style={{ marginTop: '24px' }}&gt;
                                Ambil Kursus Ini
                            &lt;/IonButton&gt;
                        &lt;/IonCardContent&gt;
                    &lt;/IonCard&gt;
                ) : (
                    &lt;p style={{ color: '#f87171', textAlign: 'center', marginTop: '40px' }}&gt;
                        Kursus tidak ditemukan!
                    &lt;/p&gt;
                )}
            &lt;/IonContent&gt;
        &lt;/IonPage&gt;
    );
};
export default Detail;</code></pre>
                            </div>
                        </div>

                        <!-- File 5: src/App.tsx -->
                        <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between bg-dark p-3 rounded-top border border-secondary border-bottom-0">
                                <div>
                                    <span class="badge bg-info text-dark me-2">File 5</span>
                                    <strong class="text-white"><i class="bi bi-filetype-tsx me-1 text-info"></i>src/App.tsx</strong>
                                </div>
                                <span class="small text-secondary">Setup IonReactRouter & Daftar Rute</span>
                            </div>
                            <div class="p-4 bg-dark-lighter border border-secondary rounded-bottom">
                                <p class="text-light-50 small mb-2"><i class="bi bi-file-earmark me-1 text-info"></i>Di <code>src/App.tsx</code>, daftarkan rute <code>/home</code> dan <code>/detail/:id</code>:</p>
                                <pre><code class="language-typescript">// src/App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const App: React.FC = () => (
    &lt;IonApp&gt;
        &lt;IonReactRouter&gt;
            &lt;IonRouterOutlet&gt;
                &lt;Route exact path="/home" component={Home} /&gt;
                &lt;Route exact path="/detail/:id" component={Detail} /&gt;
                &lt;Route exact path="/"&gt;
                    &lt;Redirect to="/home" /&gt;
                &lt;/Route&gt;
            &lt;/IonRouterOutlet&gt;
        &lt;/IonReactRouter&gt;
    &lt;/IonApp&gt;
);

export default App;</code></pre>
                            </div>
                        </div>
                    </section>

                    <!-- Tahap 3: Mockup Preview Ionic -->
                    <section class="mb-5 pb-4 border-bottom border-secondary">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-primary fs-6 me-3">Tahap 3</span>
                            <h2 class="fw-bold mb-0 text-primary">Hasil Preview Layar Smartphone (Ionic Navigation)</h2>
                        </div>
                        <div class="row g-4 justify-content-center">
                            <div class="col-md-6 mb-4">
                                <div class="p-3 bg-dark border border-secondary rounded text-center">
                                    <h6 class="text-info fw-bold mb-3"><i class="bi bi-phone me-2"></i>Layar 1: List (Home.tsx)</h6>
                                    <div class="phone-mockup">
                                        <div class="phone-notch"><div class="phone-notch-camera"></div></div>
                                        <div class="phone-screen text-start">
                                            <div class="p-2 border-bottom border-secondary mb-3 d-flex justify-content-between">
                                                <strong class="text-white small">Katalog Kursus BPROTIC</strong>
                                                <span class="badge bg-primary" style="font-size: 8px;">Ionic</span>
                                            </div>
                                            <div class="p-2 rounded-2 mb-2 d-flex justify-content-between align-items-center" style="background: #1e293b; border: 1px solid #334155;">
                                                <div>
                                                    <div class="text-white fw-bold small">Backend Web & REST API</div>
                                                    <div class="text-secondary small" style="font-size: 9px;">Mentor: Ahmad Farras</div>
                                                </div>
                                                <span class="text-info small fw-bold">›</span>
                                            </div>
                                            <div class="p-2 rounded-2 mb-2 d-flex justify-content-between align-items-center" style="background: #1e293b; border: 1px solid #334155;">
                                                <div>
                                                    <div class="text-white fw-bold small">Ionic & Capacitor Mobile</div>
                                                    <div class="text-secondary small" style="font-size: 9px;">Mentor: Ionic Lead</div>
                                                </div>
                                                <span class="text-info small fw-bold">›</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 mb-4">
                                <div class="p-3 bg-dark border border-info rounded text-center">
                                    <h6 class="text-warning fw-bold mb-3"><i class="bi bi-phone me-2"></i>Layar 2: Detail (Detail.tsx)</h6>
                                    <div class="phone-mockup">
                                        <div class="phone-notch"><div class="phone-notch-camera"></div></div>
                                        <div class="phone-screen text-start">
                                            <div class="p-2 border-bottom border-secondary mb-3 d-flex align-items-center">
                                                <span class="text-info me-2 small fw-bold">‹ Kembali</span>
                                                <strong class="text-white small">Rincian Kursus</strong>
                                            </div>
                                            <div class="p-3 rounded-3" style="background: #1e293b; border: 1px solid #334155;">
                                                <span class="badge bg-info text-dark mb-1" style="font-size: 8px;">Web Development</span>
                                                <h6 class="fw-bold text-white small mb-1">Backend Web & Laravel REST API</h6>
                                                <p class="text-secondary small mb-2" style="font-size: 9px;">Membangun API menggunakan PHP, MySQL, MVC, dan Laravel 11.</p>
                                                <div class="btn btn-primary btn-sm w-100 py-1" style="font-size: 10px;">Ambil Kursus Ini</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Tugas Studi Kasus Modul 3 Ionic -->
                    <section class="mt-5 pt-3">
                        <div class="card bg-primary bg-opacity-10 border-primary border-2 shadow-lg">
                            <div class="card-body p-5">
                                <h3 class="fw-bold text-primary mb-4"><i class="bi bi-journal-code me-3"></i>Tugas & Studi Kasus: Modul 3 Ionic</h3>
                                <p class="text-light-50 mb-4 fs-5">
                                    Kembangkan aplikasi di atas menjadi <strong>Katalog Acara & Workshop BPROTIC (Event Directory)</strong> dengan fitur:
                                </p>
                                <div class="p-4 bg-dark-lighter rounded border border-secondary">
                                    <ol class="text-light-50 lh-lg fs-5 mb-0">
                                        <li class="mb-3">Buat model <code>EventItem</code> di <code>src/types/event.types.ts</code> (id, nama_acara, tanggal, pemateri, kuota, lokasi).</li>
                                        <li class="mb-3">Buat minimal <strong>3 data acara</strong> di <code>src/data/events.data.ts</code>.</li>
                                        <li class="mb-3">Buat halaman List di <code>Home.tsx</code> dengan komponen <code>IonList</code> dan <code>routerLink</code>.</li>
                                        <li class="mb-3">Buat halaman Detail di <code>Detail.tsx</code> dengan <code>IonBackButton</code> dan tombol konfirmasi "Daftar Acara".</li>
                                        <li>Jalankan di browser menggunakan <code>ionic serve</code> dan uji transisi navigasinya!</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                `
            },
            "4": { title: "Service & Struktur Code", subtitle: "Service pattern, separation of concern, struktur code modular." },
            "5": { title: "CRUD Lokal & Local Storage", subtitle: "CRUD sederhana, penyimpanan data lokal, persistence data device." },
            "6": { title: "HTTP & Consume REST API", subtitle: "HTTP request, JSON, GET API, service consume API Laravel." },
            "7": { title: "CRUD melalui REST API", subtitle: "POST, PUT, DELETE, request body, integrasi form dengan Laravel." },
            "8": { title: "Relasi Data & API Integration", subtitle: "Menampilkan data hasil relasi API dan passing data antar halaman." },
            "9": { title: "Search, Filter & UI/UX Feedback", subtitle: "Search, filter data, loading indicator, Alert, Toast feedback." },
            "10": { title: "Finalisasi & Build APK", subtitle: "Testing, debugging, Capacitor, build Android dan generate file APK." }
        }
    }
};
