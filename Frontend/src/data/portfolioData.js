export const personalInfo = {
    name: "Rasyid Halim Firdaus",
    title: "Data Analyst & AI / Fullstack Developer",
    subtitle: "S1 Teknik Informatika UNIKOM (IPK 3.36) & Certified BNSP Data Analyst",
    bioShort: "Fresh Graduate S1 Teknik Informatika Universitas Komputer Indonesia (UNIKOM) Bandung. Berpengalaman dalam Data Analytics, AI Biometrics (YOLOv8 & DeepFace di RSU Pindad), dan Full-Stack Web Development (Laravel & React).",
    bioLong: "Memiliki kompetensi kuat dalam mentransformasikan data kompleks menjadi wawasan bisnis strategis menggunakan SQL, Python, Power BI, Tableau, dan Excel. Tersertifikasi resmi BNSP Data Analyst dan Google Gemini. Berpengalaman merancang sistem AI Face Recognition Kiosk di RSU Pindad serta IT Warehouse Inventory Dashboard di PT. Pindad (Persero).",
    location: "Bandung, Indonesia",
    email: "rasyidhalm@gmail.com",
    phone: "+62 812-8109-2079",
    status: "Terbuka untuk Data Analyst & Software Engineer",
    avatar: "/images/rasyid.jpg",
    cvPdfUrl: "/CV_Rasyid_Halim_Firdaus.pdf",
    socialLinks: {
        github: "https://github.com/Rasyidhalim",
        linkedin: "https://www.linkedin.com/in/rasyid-halim-firdaus",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
    },
};

export const stats = [
    { value: "3.36", label: "IPK Teknik Informatika UNIKOM", icon: "GraduationCap" },
    { value: "BNSP", label: "Certified Data Analyst", icon: "Award" },
    { value: "Google", label: "Gemini Certified Student", icon: "Sparkles" },
    { value: "PINDAD", label: "Magang Fullstack BUMN", icon: "Briefcase" },
];

export const skillCategories = [
    { id: "all", label: "Semua Keahlian" },
    { id: "data", label: "Data Analytics & BI" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "fullstack", label: "Web & Full-Stack" },
    { id: "systems", label: "Hardware & Tools" },
];

export const skills = [
    { name: "Python", category: "data", level: "Mahir", percent: 94, desc: "Data Cleaning, Pandas, NumPy, Exploratory Data Analysis, FastAPI" },
    { name: "SQL & MySQL", category: "data", level: "Mahir", percent: 92, desc: "Complex Queries, Relational Database Design, Optimization, MySQL-to-RAM sync" },
    { name: "Power BI & Tableau", category: "data", level: "Ahli", percent: 95, desc: "Interactive Dashboard Design, Business Intelligence, Data Wrangling" },
    { name: "Microsoft Excel", category: "data", level: "Ahli", percent: 94, desc: "Advanced Formulas, Pivot Table, Data Processing, BNSP Certified" },
    { name: "YOLOv8 & DeepFace", category: "ai", level: "Mahir", percent: 90, desc: "Biometric Face Recognition, Video Stream Processing, Cosine Similarity" },
    { name: "Laravel", category: "fullstack", level: "Mahir", percent: 88, desc: "REST API, Eloquent ORM, Microservices Integration, Warehouse Dashboard" },
    { name: "React & Vue.js", category: "fullstack", level: "Mahir", percent: 86, desc: "Component Architecture, Interactive Kiosk UI, Tailwind CSS, Responsive Design" },
    { name: "PHP & JavaScript", category: "fullstack", level: "Mahir", percent: 88, desc: "Backend Logic, Asynchronous APIs, Modern ES6+, DOM Manipulation" },
    { name: "Hardware & Network", category: "systems", level: "Ahli", percent: 92, desc: "Computer Hardware Assembly (AP2SC 90.62), MikroTik, Linux Server" },
    { name: "Git & GitHub", category: "systems", level: "Mahir", percent: 90, desc: "Version Control, Repository Management, Team Collaboration" },
];

export const projectCategories = [
    { id: "all", label: "Semua Galeri Proyek" },
    { id: "ai", label: "AI & Biometrics" },
    { id: "fullstack", label: "Fullstack Dashboard" },
    { id: "data", label: "Data Analytics & BI" },
];

export const projects = [
    {
        id: 1,
        title: "Biometric Face Recognition Kiosk - RSU Pindad",
        folderTitle: "Biometric Face Kiosk",
        folderSubtitle: "Real-time facial verification & 128-D FaceNet kiosk at RSU Pindad.",
        actionText: "Click folder to explore",
        category: "ai",
        categoryLabel: "AI & Computer Vision",
        githubUrl: "https://github.com/Rasyidhalim/Face-recognition-peserta-jppk",
        metrics: ["Latensi <300ms", "FaceNet 128-D", "FastAPI + Laravel"],
        tags: ["FastAPI", "Python", "YOLOv8", "DeepFace (FaceNet)", "Laravel REST API", "Vue.js", "MySQL-RAM"],
        summary: "Sistem Kiosk pengenalan wajah biometrik real-time untuk verifikasi pasien JPPK RSU Pindad tanpa kartu. Menggunakan video stream 200-frame untuk ekstraksi embedding akurasi tinggi serta pencocokan Cosine Similarity instan.",
        highlight: "Implementasi Nyata & Karya Skripsi di RSU Pindad Bandung",
        image: "/images/rsu-pindad/grafik_embedding.png",
        gallery: [
            { url: "/images/rsu-pindad/grafik_embedding.png", caption: "Distribusi Vektor Embedding FaceNet 128-D & Cosine Similarity" },
            { url: "/images/rsu-pindad/confusion_matrix.png", caption: "Confusion Matrix Hasil Evaluasi Akurasi Pengenalan Wajah" }
        ],
        features: [
            "Pencocokan biometrik berlatensi ultra-rendah (<300ms) dengan mekanisme cache RAM",
            "Ekstraksi fitur 128-dimensi FaceNet dengan YOLOv8 face localization & MediaPipe",
            "Integrasi arsitektur microservices FastAPI AI backend dan Laravel REST API",
            "Penyimpanan database data pasien JPPK dan jadwal poliklinik terpadu"
        ]
    },
    {
        id: 2,
        title: "IT Warehouse & Asset Logistics Management - PT. Pindad",
        folderTitle: "IT Warehouse Logistics",
        folderSubtitle: "Enterprise hardware inventory tracking and multi-department logistics.",
        actionText: "Click document to open PDF",
        category: "fullstack",
        categoryLabel: "Enterprise Dashboard",
        docUrl: "/certificates/surat lulus magang.pdf",
        metrics: ["Asset Tracking", "Multi-Department", "Log Audit Otomatis"],
        tags: ["Laravel", "PHP", "MySQL", "Inventory Tracking", "Hardware Logistics", "Tailwind"],
        summary: "Dashboard inventaris IT komprehensif di PT. Pindad (Persero) untuk memonitor ketersediaan hardware, pelacakan unit, riwayat pemeliharaan, serta log aktivitas operasional secara real-time.",
        highlight: "Internship Fullstack Developer di PT. Pindad (Persero)",
        image: "/images/pindad-warehouse/dashboard_utama.jpeg",
        gallery: [
            { url: "/images/pindad-warehouse/dashboard_utama.jpeg", caption: "Dashboard Utama & Ringkasan Status Manufaktur TI" },
            { url: "/images/pindad-warehouse/manajemen_manufaktur.jpeg", caption: "Form & Tabel Inventaris Manajemen Manufaktur TI" },
            { url: "/images/pindad-warehouse/peminjaman_tools.jpeg", caption: "Sistem Peminjaman & Pengembalian Tools" },
            { url: "/images/pindad-warehouse/laporan_inventaris.jpeg", caption: "Laporan Inventaris Gudang Terpadu & Fitur Export Excel" }
        ],
        features: [
            "Pelacakan siklus hidup aset hardware komputer dan periferal departemen TI",
            "Sistem pencatatan log masuk/keluar barang dengan otorisasi pengguna",
            "Dashboard analitik ringkas status inventaris dan kebutuhan peremajaan perangkat",
            "Terverifikasi resmi melalui Surat Keputusan Prakerin PT. Pindad (Persero)"
        ]
    },
    {
        id: 3,
        title: "Executive Business Intelligence & Sales Analytics",
        folderTitle: "BNSP Data Analyst",
        folderSubtitle: "Data analysis assignment and project documentation.",
        actionText: "Click document to open PDF",
        category: "data",
        categoryLabel: "Business Intelligence",
        docUrl: "/certificates/Sertifikat BNSP.pdf",
        metrics: ["BNSP Certified", "Multi-Source ETL", "Predictive KPI"],
        tags: ["Power BI", "Tableau", "SQL", "Python", "Data Wrangling", "BNSP"],
        summary: "Dashboard visualisasi analitik penjualan dan segmentasi demografis pelanggan. Menampilkan metrik performa multi-chart, analisis tren pendapatan, dan KPI prediktif berdasarkan standar kompetensi kerja nasional.",
        highlight: "Sertifikasi Kompetensi BNSP Data Analyst Resmi",
        image: "/images/bnsp-analytics/dashboard_penjualan.jpeg",
        gallery: [
            { url: "/images/bnsp-analytics/dashboard_penjualan.jpeg", caption: "Dashboard Eksekutif Penjualan Elektronik Multi-Chart" },
            { url: "/images/bnsp-analytics/tren_wilayah.jpeg", caption: "Visualisasi Analisis Tren Penjualan Berdasarkan Wilayah" },
            { url: "/images/bnsp-analytics/tren_produk.jpeg", caption: "Distribusi Pangsa Pasar Penjualan Berdasarkan Produk" },
            { url: "/images/bnsp-analytics/tren_bulanan.jpeg", caption: "Grafik Tren Fluktuasi Penjualan Bulanan (Sale Date)" },
            { url: "/images/bnsp-analytics/data_cleaning.jpeg", caption: "Data Profiling & Validasi Kualitas Data 100% Valid (Power Query)" }
        ],
        features: [
            "Pembersihan dan validasi dataset kompleks menggunakan Python (Pandas/NumPy) dan SQL",
            "Desain dashboard eksekutif interaktif multi-chart di Power BI & Tableau",
            "Segmentasi pola belanja pelanggan dan analisis profitabilitas produk",
            "Sesuai standar unit kompetensi SKKNI Badan Nasional Sertifikasi Profesi (BNSP)"
        ]
    }
];

export const aboutPersonas = {
    dataAnalyst: {
        id: "dataAnalyst",
        tabLabel: "Data Analyst",
        tabSub: "Business Intelligence & SQL",
        roleTitle: "Data Analyst & Business Intelligence Specialist",
        badge: "Certified Data Analyst",
        headline: "Mentransformasikan Data Kompleks Menjadi Wawasan Bisnis Strategis & Keputusan Presisi",
        bioLong: "Memiliki kompetensi teruji dalam mentransformasikan data mentah yang heterogen menjadi wawasan bisnis strategis yang dapat ditindaklanjuti (actionable insights). Tersertifikasi resmi oleh Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia bidang Data Analytics dan Google Gemini AI.",
        bioSecondary: "Ahli dalam pembersihan data (ETL & Data Wrangling), analisis data eksploratif (EDA) dengan Python dan SQL, serta merancang dashboard Business Intelligence multi-dimensi interaktif menggunakan Power BI, Tableau, dan Advanced Microsoft Excel untuk mendukung pengambilan keputusan manajemen eksekutif.",
        highlights: [
            { label: "Sertifikasi Resmi", value: "BNSP Analis Data & Google Gemini AI", icon: "Award" },
            { label: "Tools Utama", value: "SQL, Python, Power BI, Tableau, Excel", icon: "Database" },
            { label: "Fokus Analisis", value: "Business Intelligence, KPI, Wrangling & EDA", icon: "BarChart3" },
            { label: "Metodologi", value: "Standard Kompetensi Kerja Nasional (SKKNI)", icon: "ShieldCheck" }
        ],
        pillars: [
            {
                icon: "BarChart3",
                title: "Business Intelligence & Interactive Dashboards",
                desc: "Desain visualisasi interaktif multi-chart di Power BI & Tableau untuk pelacakan KPI eksekutif, tren pendapatan, dan segmentasi performa bisnis secara dinamis."
            },
            {
                icon: "Database",
                title: "Advanced SQL & Database Modeling",
                desc: "Penulisan query analitik mendalam, subqueries, complex joins, indexing, serta pemodelan skema relasional untuk eksplorasi dan ekstraksi dataset berskala besar."
            },
            {
                icon: "LineChart",
                title: "Exploratory Data Analysis (EDA) & Wrangling",
                desc: "Pembersihan dataset mentah, penanganan missing values & outliers, validasi integritas data kuantitatif, dan eksplorasi korelasi menggunakan Python Pandas & NumPy."
            },
            {
                icon: "FileSpreadsheet",
                title: "Spreadsheet Analytics & Executive Reporting",
                desc: "Pemrosesan data presisi menggunakan Advanced Microsoft Excel (Pivot Table, XLOOKUP, Nested Formulas, Data Modeling) sesuai standar uji kompetensi resmi BNSP."
            }
        ],
        tags: ["Power BI", "Tableau", "SQL & MySQL", "Python (Pandas, NumPy)", "Advanced Excel", "ETL", "SKKNI BNSP"],
        actionLink: "projects",
        actionCategory: "data",
        actionText: "Eksplorasi Proyek Data Analyst"
    },
    softwareDev: {
        id: "softwareDev",
        tabLabel: "Software Development",
        tabSub: "Fullstack Web & AI Engineering",
        roleTitle: "Software Developer & AI Engineer",
        badge: "Full-Stack & Applied AI",
        headline: "Merancang Arsitektur Web Skalabel, API Berkinerja Tinggi & Sistem AI Terapan",
        bioLong: "Memiliki keahlian rekayasa perangkat lunak ujung-ke-ujung (full-stack engineering) dengan fokus pada pembuatan sistem web yang tangguh, aman, dan berkinerja tinggi. Berpengalaman langsung merancang sistem Kiosk Pengenalan Wajah Biometrik (Face Recognition) real-time di RSU Pindad.",
        bioSecondary: "Mahir mengintegrasikan arsitektur microservices antara FastAPI Python (Computer Vision: YOLOv8 & DeepFace FaceNet 128-D) dan Laravel REST API, dengan mekanisme sinkronisasi database MySQL-to-RAM untuk mencapai latensi ultra-rendah (<300ms). Berpengalaman juga membangun dashboard inventaris IT di PT. Pindad (Persero).",
        highlights: [
            { label: "Pendidikan & Nilai", value: "S1 Teknik Informatika UNIKOM (IPK 3.36 / S.Kom)", icon: "GraduationCap" },
            { label: "Implementasi Nyata", value: "Kiosk AI Biometrik Pasien di RSU Pindad", icon: "BrainCircuit" },
            { label: "Pengalaman Industri", value: "IT Warehouse Dashboard di PT. Pindad (Persero)", icon: "Briefcase" },
            { label: "Keahlian Khusus", value: "Microservices, RAM Caching Latensi <300ms, REST API", icon: "Layers" }
        ],
        pillars: [
            {
                icon: "Layers",
                title: "Full-Stack Web Architecture",
                desc: "Pengembangan sistem web modular dari backend tangguh (Laravel REST API, FastAPI) hingga antarmuka front-end responsif dan dinamis (React, Vue.js, Tailwind CSS)."
            },
            {
                icon: "BrainCircuit",
                title: "Applied AI & Computer Vision Integration",
                desc: "Penerapan model deep learning (YOLOv8, MediaPipe, FaceNet 128-D) ke dalam sistem produksi nyata dengan pemrosesan video stream berakurasi tinggi."
            },
            {
                icon: "Cpu",
                title: "High-Performance & Low Latency (<300ms)",
                desc: "Optimasi latensi pemrosesan biometrik dengan teknik cache database MySQL-to-RAM dan kalkulasi Cosine Similarity instan pada perangkat Kiosk."
            },
            {
                icon: "Server",
                title: "RESTful APIs & Microservices Integration",
                desc: "Perancangan arsitektur microservices terpisah yang saling berkomunikasi secara asinkron, aman, dan siap untuk deployment skala industri."
            }
        ],
        tags: ["FastAPI", "Python", "Laravel", "React", "Vue.js", "Tailwind CSS", "MySQL", "YOLOv8", "DeepFace"],
        actionLink: "projects",
        actionCategory: "ai",
        actionText: "Eksplorasi Proyek Software & AI"
    }
};

export const experiences = [
    {
        id: "exp-pt-pindad",
        period: "Sep 2025 – Okt 2025",
        role: "Fullstack Developer (Magang BUMN Resmi)",
        company: "PT. Pindad (Persero) Bandung",
        logo: "/images/rsu-pindad/logo-rs-pindad.png",
        location: "Bandung, Indonesia",
        type: "internship",
        category: "software",
        badge: "Magang Prakerin BUMN Resmi",
        docUrl: "/certificates/surat lulus magang.pdf",
        tags: ["Fullstack Web", "Inventory Logistics", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
        description: "Merancang dan mengembangkan dashboard manajemen gudang IT full-stack untuk memantau inventaris hardware manufaktur dan operasional logistik departemen TI & Layanan Inovasi PT. Pindad (Persero).",
        highlights: [
            "Membangun antarmuka web responsif dan modul backend inventory tracking dengan otorisasi pengguna",
            "Merancang sistem pencatatan log masuk/keluar barang (peminjaman & pengembalian tools) serta manajemen inventaris manufaktur TI",
            "Mengimplementasikan fitur pelaporan dan export data ke Microsoft Excel untuk efisiensi audit berkala",
            "Terverifikasi resmi melalui Surat Keputusan Kelulusan Prakerin PT. Pindad (Persero) dengan predikat Selesai dengan Baik"
        ],
        media: [
            {
                title: "Surat Keputusan Kelulusan Prakerin Resmi PT Pindad",
                caption: "Sertifikat resmi kelulusan magang dengan nomor surat, pas foto, stempel basah PT. Pindad (Persero)",
                image: "/images/certificates/cert-pindad.jpg",
                badge: "Sertifikat Resmi",
                docUrl: "/certificates/surat lulus magang.pdf"
            },
            {
                title: "Dashboard Utama Inventaris & Ringkasan Status",
                caption: "Tampilan visualisasi ringkasan status inventaris hardware manufaktur TI dan tools di PT. Pindad",
                image: "/images/pindad-warehouse/dashboard_utama.jpeg",
                badge: "Tangkapan Layar Sistem"
            },
            {
                title: "Form & Tabel Inventaris Manufaktur TI",
                caption: "Manajemen input barang, pencatatan kode asset, nama pegawai, lokasi gudang, dan status barang",
                image: "/images/pindad-warehouse/manajemen_manufaktur.jpeg",
                badge: "Tangkapan Layar Sistem"
            },
            {
                title: "Sistem Peminjaman & Pengembalian Tools",
                caption: "Pencatatan sirkulasi peminjaman peralatan teknis (tools) departemen TI",
                image: "/images/pindad-warehouse/peminjaman_tools.jpeg",
                badge: "Tangkapan Layar Sistem"
            },
            {
                title: "Laporan Inventaris Gudang & Fitur Export Excel",
                caption: "Audit log inventaris gudang komprehensif dengan fitur export format spreadsheet",
                image: "/images/pindad-warehouse/laporan_inventaris.jpeg",
                badge: "Tangkapan Layar Sistem"
            }
        ]
    }
];

export const certifications = [
    {
        title: "Sertifikat Kompetensi Analis Data (Data Analyst)",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        period: "Sep 2026 – Sep 2029",
        status: "KOMPETEN",
        desc: "Sertifikasi kompetensi resmi negara bidang Data Analytics. Pembersihan data, analisis dataset kompleks untuk wawasan bisnis strategis, dan dashboard interaktif Power BI & Excel."
    },
    {
        title: "Gemini Certified Student (University)",
        issuer: "Google for Education",
        period: "Agu 2026 – Agu 2029",
        status: "OFFICIALLY CERTIFIED",
        desc: "Menguasai alur kerja kecerdasan buatan terapan, integrasi Large Language Models (LLM), prompt engineering, dan teknologi Google AI."
    },
    {
        title: "Sertifikasi Hardware & Jaringan Komputer",
        issuer: "Direktorat AP2SC UNIKOM Bandung",
        period: "Tahun Akademik 2025/2026",
        status: "PREDIKAT: ISTIMEWA (90.62)",
        desc: "Predikat Istimewa (90.62/100): Ujian perakitan komputer (87.5), instalasi OS (90), troubleshooting (90), dan konfigurasi jaringan networking (95)."
    },
    {
        title: "Surat Keterangan Prakerin Divisi TI",
        issuer: "PT. PINDAD (Persero) Bandung",
        period: "Sep 2025 – Okt 2025",
        status: "SELESAI DENGAN BAIK",
        desc: "Pelaksanaan PRAKERIN resmi di BUMN PT. Pindad pada Divisi Teknologi Informasi, mengembangkan sistem IT Warehouse Management Dashboard internal."
    },
    {
        title: "English Proficiency Test (TOEFL Equivalent)",
        issuer: "Language Center UNIKOM",
        period: "Nov 2025 – Nov 2027",
        status: "SKOR: 437",
        desc: "Sertifikasi kemahiran bahasa Inggris berstandar akademik UNIKOM dengan skor 437 (Listening: 49, Structure: 40, Reading: 42)."
    }
];
