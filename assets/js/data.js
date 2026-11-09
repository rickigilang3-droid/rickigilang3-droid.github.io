/**
 * Portfolio Data Configuration - Ricki Gilang Saputra
 * Konfigurasi lengkap profil, keahlian, studi kasus proyek, dan perjalanan karir.
 */
const PORTFOLIO_DATA = {
    profile: {
        name: "Ricki Gilang Saputra",
        handle: "rickigilang.dev",
        role: "Mahasiswa Teknologi Informasi @ UBSI",
        rolesTyping: [
            "Mahasiswa Teknologi Informasi @ UBSI",
            "Full-Stack Web Developer",
            "Backend & Database Enthusiast",
            "MySQL & Supabase Specialist",
            "Open Source Explorer"
        ],
        location: "Jakarta, Indonesia",
        campus: "Universitas Bina Sarana Informatika (UBSI)",
        status: "🟢 Mahasiswa Aktif UBSI • Open for Projects & Internships",
        bio: "Mahasiswa aktif program studi S1 Teknologi Informasi di Universitas Bina Sarana Informatika (UBSI). Berfokus pada perancangan sistem web performa tinggi, pemodelan basis data terstruktur (MySQL & Supabase), serta rekayasa perangkat lunak modern yang bersih, efisien, dan menyelesaikan masalah nyata di masyarakat.",
        avatar: "assets/images/profile.jpg",
        avatarSpiderman: "assets/images/profile_spiderman.jpg",
        email: "rickigilang3@gmail.com",
        whatsapp: "6281388796229",
        discord: "ricki_dev#1337",
        github: "https://github.com/rickigilang3-droid",
        githubUsername: "rickigilang3-droid",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        resumeUrl: "#"
    },

    stats: [
        { label: "Proyek Nyata Teruji", value: "7+", icon: "folder-check", desc: "Produksi & Open Source" },
        { label: "Database Engine", value: "MySQL & Supabase", icon: "database", desc: "Relasional & Cloud BaaS" },
        { label: "Git Repository", value: "Verified", icon: "git-commit", desc: "GitHub @rickigilang3-droid" },
        { label: "Status Akademik", value: "UBSI TI", icon: "graduation-cap", desc: "Mahasiswa Aktif S1" }
    ],

    skills: [
        {
            category: "Frontend & Modern UI",
            items: [
                { name: "JavaScript (ES6+)", level: "Advanced", icon: "code" },
                { name: "TypeScript", level: "Intermediate", icon: "file-code" },
                { name: "React.js / Next.js", level: "Advanced", icon: "layers" },
                { name: "Vue.js", level: "Intermediate", icon: "box" },
                { name: "Tailwind CSS", level: "Expert", icon: "palette" },
                { name: "HTML5 / Semantic Web", level: "Expert", icon: "layout" }
            ]
        },
        {
            category: "Backend & Systems Architecture",
            items: [
                { name: "PHP / Laravel", level: "Advanced", icon: "cpu" },
                { name: "Node.js / Express", level: "Advanced", icon: "server" },
                { name: "Python (Analitik & Scripting)", level: "Intermediate", icon: "terminal" },
                { name: "RESTful API Design", level: "Advanced", icon: "network" },
                { name: "Authentication & JWT", level: "Advanced", icon: "lock" }
            ]
        },
        {
            category: "Database & Cloud Infrastructure",
            items: [
                { name: "MySQL (Relational / Indexing)", level: "Advanced", icon: "database" },
                { name: "Supabase (PostgreSQL / BaaS)", level: "Advanced", icon: "database" },
                { name: "Query Optimization", level: "Advanced", icon: "zap" },
                { name: "Git & Version Control", level: "Advanced", icon: "git-branch" },
                { name: "Docker & Linux Rice", level: "Intermediate", icon: "container" }
            ]
        }
    ],

    projects: [
        {
            id: "ar-shoes-studio",
            title: "AR Shoes Studio — 3D & Augmented Reality Product Experience",
            category: "frontend",
            badgeMetric: "👟 3D WebGL & AR",
            description: "Platform visualisasi interaktif sepatu dalam 3D 360°, penyesuaian warna real-time, inspeksi detail material tiap bagian, dan pengalaman mencoba sepatu di ruangan nyata via Augmented Reality (AR).",
            longDescription: "Aplikasi web interaktif 3D & Augmented Reality mutakhir yang menghadirkan pengalaman belanja masa depan. Pengguna dapat memutar model 3D sepatu secara 360 derajat, menjelajahi hotspot anatomi sol dan material, mengganti varian warna secara real-time, serta memproyeksikan sepatu ke dalam ruangan nyata menggunakan teknologi WebXR / QuickLook AR di smartphone.",
            image: "assets/images/project_ar_shoes.jpg",
            tags: ["Three.js", "WebGL", "WebXR", "Vite", "3D Modeling", "Vercel"],
            demoUrl: "https://ar-shoes-puma.vercel.app/",
            githubUrl: "https://github.com/rickigilang3-droid",
            featured: true,
            metrics: [
                { label: "Rendering Engine", value: "WebGL 60FPS" },
                { label: "Fitur AR", value: "WebXR Space" },
                { label: "Interaksi", value: "360° Orbit" }
            ],
            coreFeatures: [
                "Manipulasi 3D orbital rotasi 360 derajat dengan kontrol zoom dan panning mulus",
                "Fitur 'View in Your Space' (Augmented Reality) untuk memproyeksikan produk ke lantai ruangan nyata",
                "Sistem kustomisasi varian warna sepatu dinamis secara instan tanpa reload",
                "Hotspot anotasi anatomi sepatu untuk menjelaskan fitur teknologi bantalan dan sirkulasi udara"
            ],
            challengeSolution: "Mengoptimalkan performa rendering model 3D berkualitas tinggi agar tetap ringan berjalan di 60 FPS pada browser mobile tanpa lag. Diatasi dengan kompresi geometri glTF/GLB dan dynamic level-of-detail (LOD)."
        },
        {
            id: "certiva-amelia",
            title: "Certiva - Portal Verifikasi Publik Sertifikat & Ijazah Digital",
            category: "tools",
            badgeMetric: "🔐 Kriptografi SHA-256",
            description: "Platform verifikasi keaslian sertifikat dan ijazah digital publik berbasis kriptografi hash SHA-256, scanner QR Code kamera real-time, dan audit integritas dokumen PDF.",
            longDescription: "Sistem verifikasi sertifikat dan dokumen akademik digital modern yang dirancang untuk mencegah pemalsuan dokumen penting. Dilengkapi pemindai QR Code kamera langsung di browser, validasi nomor seri sertifikat instan, ekstraksi dokumen PDF otomatis, dan pengecekan hash kriptografis yang menjamin dokumen 100% otentik dan belum dimanipulasi.",
            image: "assets/images/project_certiva.jpg",
            tags: ["Vite", "JavaScript", "QR Scanner", "Crypto Hash", "PDF Integrity", "Vercel"],
            demoUrl: "https://certiva-amelia.vercel.app/",
            githubUrl: "https://github.com/rickigilang3-droid",
            featured: true,
            metrics: [
                { label: "Validasi Hash", value: "SHA-256" },
                { label: "Deteksi QR", value: "Real-Time" },
                { label: "Integritas Dokumen", value: "100% Valid" }
            ],
            coreFeatures: [
                "Verifikasi nomor seri unik sertifikat secara instan melalui basis data publik",
                "Integrasi kamera pemindai QR Code langsung di browser tanpa instalasi aplikasi tambahan",
                "Modul bedah dan verifikasi integritas file dokumen digital PDF secara otomatis",
                "Badge status keabsahan dokumen real-time dengan rincian institusi penerbit dan tanggal terbit resmi"
            ],
            challengeSolution: "Memproses pemindaian QR Code dan parsing dokumen PDF secara langsung di sisi client browser tanpa latensi tinggi. Diselesaikan dengan kompresi stream frame video kamera dan web worker background verification."
        },
        {
            id: "rs-amelia-medika",
            title: "RS Amelia Medika - Sistem Informasi Manajemen Rumah Sakit & Klinik",
            category: "fullstack",
            badgeMetric: "🏥 SIMRS Terpadu",
            description: "Sistem informasi manajemen rumah sakit & klinik terpadu untuk alur pendaftaran pasien, antrean poli teratur, rekam medis elektronik (RME), jadwal dokter, dan billing farmasi.",
            longDescription: "Platform Sistem Informasi Manajemen Rumah Sakit (SIMRS) modern yang dirancang untuk mendigitalkan seluruh alur pelayanan klinik dan rumah sakit. Menghubungkan proses pendaftaran pasien, nomor antrean poli, rekam medis elektronik (RME) yang aman dan terpusat, sistem transaksi apotek farmasi, hingga pemantauan operasional terpusat secara real-time.",
            image: "assets/images/project_rs_amelia.jpg",
            tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "Medical EHR", "Vercel"],
            demoUrl: "https://rs-amelia-medika.vercel.app/",
            githubUrl: "https://github.com/rickigilang3-droid",
            featured: true,
            metrics: [
                { label: "Alur Pelayanan", value: "Terintegrasi" },
                { label: "Waktu Tunggu", value: "-60% Antrean" },
                { label: "Hosting", value: "Cloud Vercel" }
            ],
            coreFeatures: [
                "Pendaftaran pasien online dan manajemen alur antrean poliklinik secara terstruktur",
                "Pencatatan Rekam Medis Elektronik (RME) terpadu yang aman untuk dokter & tenaga medis",
                "Modul resep obat, katalog farmasi, dan kalkulasi tagihan pelayanan otomatis",
                "Dashboard monitoring operasional klinik terpusat dengan laporan transaksi berkala"
            ],
            challengeSolution: "Mengintegrasikan berbagai unit pelayanan klinik (admisi pendaftaran, poli dokter, farmasi, kasir) ke dalam satu siklus data terpadu tanpa hambatan komunikasi. Diselesaikan dengan arsitektur RESTful API yang modular dan state management tersinkronisasi."
        },
        {
            id: "bbca-stock-analytics",
            title: "BBCA Stock Analytics & Technical Dashboard",
            category: "tools",
            badgeMetric: "📈 99.8% Data Sync",
            description: "Platform analitik finansial kuantitatif saham PT Bank Central Asia Tbk (BBCA) dengan candlestick visualizer interaktif, moving average, RSI, dan kalkulator return dividen.",
            longDescription: "Aplikasi analitik finansial modern yang dirancang khusus untuk memetakan dan menganalisis fluktuasi historis harga saham BBCA. Dibangun dengan memadukan Python untuk data aggregation, Next.js untuk antarmuka super cepat, dan Supabase untuk sinkronisasi watchlist pengguna secara real-time.",
            image: "assets/images/project_bbca.jpg",
            tags: ["Python", "Next.js", "Supabase", "Chart.js", "Financial API"],
            demoUrl: "https://analisis-saham-bbca-2o1r.vercel.app/login",
            githubUrl: "https://github.com/rickigilang3-droid/analisis-saham-bbca",
            featured: true,
            metrics: [
                { label: "Data Latency", value: "< 100ms" },
                { label: "Teknikal", value: "MA & RSI" },
                { label: "Database", value: "Supabase BaaS" }
            ],
            coreFeatures: [
                "Visualisasi candlestick real-time dengan toggle timeframe (Daily, Weekly, Monthly)",
                "Indikator teknikal terintegrasi: Simple Moving Average (SMA 20/50/200) dan Relative Strength Index (RSI)",
                "Kalkulator proyeksi dividen tahunan dan estimasi capital gain investor",
                "Sinkronisasi watchlist berbasis cloud dengan Supabase database"
            ],
            challengeSolution: "Tantangan utama adalah menyajikan ratusan baris data tick saham tanpa lag pada browser. Solusinya dengan menerapkan data aggregation di sisi Python backend dan virtualized canvas rendering menggunakan Chart.js di frontend."
        },
        {
            id: "school-academic-portal",
            title: "EduPortal & SPP - Sistem Informasi Sekolah & Pembayaran SPP Online",
            category: "fullstack",
            badgeMetric: "🏫 SPP & SIM Sekolah",
            description: "Platform portal web sekolah terpadu dan sistem pembayaran SPP online untuk SMK Travina Prima dengan pelacakan tagihan siswa, absensi, e-rapor, dan cetak bukti transaksi digital.",
            longDescription: "Sistem informasi manajemen sekolah dan tata kelola pembayaran SPP komprehensif yang dirancang untuk SMK Travina Prima. Memfasilitasi pendaftaran calon siswa, profil sekolah kejuruan (TKJ & TKR), monitoring tagihan dan riwayat pelunasan SPP siswa secara transparan, serta sistem administrasi akademik multi-role (Admin Tata Usaha, Guru, Siswa, dan Bendahara Sekolah).",
            image: "assets/images/project_eduportal.jpg",
            tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "SPP Online", "Vercel"],
            demoUrl: "https://pembayaran-spp-orpin.vercel.app/",
            githubUrl: "https://github.com/rickigilang3-droid",
            featured: true,
            metrics: [
                { label: "Transaksi SPP", value: "Real-Time" },
                { label: "Multi-Role", value: "4 Akses" },
                { label: "Platform", value: "Cloud Vercel" }
            ],
            coreFeatures: [
                "Portal profil sekolah modern interaktif SMK Travina Prima (Jurusan TKJ & TKR)",
                "Sistem monitoring tagihan dan pencatatan pembayaran SPP siswa terintegrasi",
                "Multi-tier authentication aman untuk Admin Tata Usaha, Guru, dan Siswa/Wali Murid",
                "Cetak bukti kwitansi transaksi SPP dan rekapitulasi laporan keuangan sekolah"
            ],
            challengeSolution: "Menghubungkan data tagihan bulanan siswa dengan verifikasi pelunasan kas sekolah secara akurat. Diselesaikan dengan pemodelan ledger database transaksi dan sinkronisasi status pembayaran otomatis."
        },
        {
            id: "umkm-commerce-hub",
            title: "UMKM Showcase & Digital Catalog Marketplace",
            category: "frontend",
            badgeMetric: "⚡ Speed Index 98/100",
            description: "Platform etalase digital UMKM lokal modern berkonsep mobile-first dengan filter instan, kalkulator estimasi ongkos kirim, dan direct checkout ke WhatsApp.",
            longDescription: "Solusi digitalisasi UMKM untuk mendongkrak penjualan produk lokal tanpa potongan komisi pihak ketiga. Pengunjung dapat mengeksplorasi katalog produk dengan pencarian instan dan langsung melakukan transaksi pemesanan melalui WhatsApp penjual dengan format invoice otomatis.",
            image: "assets/images/project_umkm.jpg",
            tags: ["React.js", "Supabase", "Tailwind CSS", "WhatsApp API"],
            demoUrl: "https://github.com/rickigilang3-droid",
            githubUrl: "https://github.com/rickigilang3-droid",
            featured: true,
            metrics: [
                { label: "Lighthouse Score", value: "98/100" },
                { label: "Checkout", value: "1-Click WA" },
                { label: "BaaS", value: "Supabase" }
            ],
            coreFeatures: [
                "Tampilan antarmuka mobile-first ultra-responsif dengan performa loading instan",
                "Fitur dynamic filtering berdasarkan kategori produk, rentang harga, dan status stok",
                "Keranjang belanja lokal tanpa login rumit yang menyusun pesanan otomatis",
                "One-Click checkout langsung mengarahkan ke WhatsApp admin penjual dengan rincian invoice"
            ],
            challengeSolution: "Membuat checkout semudah mungkin bagi masyarakat awam tanpa alur pendaftaran berbelit. Diatasi dengan integrasi template URL WhatsApp generator dinamis yang langsung merinci barang dan total harga."
        },
        {
            id: "ecohub-waste-bank",
            title: "EcoHub - Sistem Manajemen Bank Sampah Digital",
            category: "backend",
            badgeMetric: "♻️ Smart Eco Ledger",
            description: "Platform pencatatan tabungan sampah warga terintegrasi, konversi timbangan kilogram ke saldo rupiah, penimbangan komunitas, dan analitik jejak karbon.",
            longDescription: "Aplikasi tata kelola bank sampah modern yang mendorong partisipasi warga dalam pelestarian lingkungan hidup. Sistem mencatat penimbangan sampah terpilah (plastik, kardus, logam, minyak jelantah), mengonversinya secara otomatis ke saldo tabungan warga, dan menampilkan grafik reduksi limbah.",
            image: "assets/images/project_ecohub.jpg",
            tags: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS", "Chart.js"],
            demoUrl: "https://github.com/rickigilang3-droid/EcoHub-main",
            githubUrl: "https://github.com/rickigilang3-droid/EcoHub-main",
            featured: true,
            metrics: [
                { label: "Konversi Timbangan", value: "Otomatis" },
                { label: "Audit Transaksi", value: "100% Valid" },
                { label: "Database", value: "MySQL Ledger" }
            ],
            coreFeatures: [
                "Buku tabungan digital nasabah bank sampah dengan riwayat setoran transparan",
                "Katalog harga dinamis per kilogram untuk setiap jenis kategori sampah daur ulang",
                "Modul kasir dan timbangan digital komunitas dengan cetak struk penimbangan",
                "Dashboard analitik lingkungan yang memvisualisasikan total kilogram sampah yang berhasil diselamatkan"
            ],
            challengeSolution: "Mencegah kesalahan kalkulasi saldo akibat fluktuasi harga komoditas daur ulang. Diselesaikan dengan membuat history snapshot table pada database MySQL sehingga transaksi lama tidak terpengaruh oleh update harga baru."
        }
    ],

    experiences: [
        {
            period: "2023 - Sekarang",
            role: "S1 Teknologi Informasi (Mahasiswa Aktif)",
            company: "Universitas Bina Sarana Informatika (UBSI)",
            type: "Pendidikan Formal & Riset",
            description: "Mendalami rekayasa perangkat lunak, algoritma pemrograman, desain & normalisasi basis data relasional (MySQL), cloud database (Supabase), serta arsitektur komputasi web modern."
        },
        {
            period: "2024 - Sekarang",
            role: "Full-Stack Web Developer & Open Source Explorer",
            company: "Independent / Project-Based",
            type: "Praktik & Portofolio Nyata",
            description: "Merancang dan mendeploy aplikasi berorientasi solusi nyata: Platform Analisis Saham BBCA, Portal Akademik Sekolah (EduPortal), Web Marketplace Katalog UMKM, dan Sistem Bank Sampah Komunitas (EcoHub)."
        },
        {
            period: "2023 - 2024",
            role: "Database & Backend Engineering Specialization",
            company: "Self-Driven Study & Implementation",
            type: "Fokus Keahlian",
            description: "Mendalami optimasi query SQL, indexing data berskala besar di MySQL, serta implementasi BaaS (Backend-as-a-Service) modern dengan Supabase / PostgreSQL untuk kecepatan delivery aplikasi."
        }
    ]
};
