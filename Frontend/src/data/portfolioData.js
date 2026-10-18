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
    { value: "PINDAD", label: "Pengalaman AI & Fullstack", icon: "Briefcase" },
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
        category: "ai",
        categoryLabel: "AI & Computer Vision",
        githubUrl: "https://github.com/Rasyidhalim/Face-recognition-peserta-jppk",
        metrics: ["Latensi <300ms", "FaceNet 128-D", "FastAPI + Laravel"],
        tags: ["FastAPI", "Python", "YOLOv8", "DeepFace (FaceNet)", "Laravel REST API", "Vue.js", "MySQL-RAM"],
        summary: "Sistem Kiosk pengenalan wajah biometrik real-time untuk verifikasi pasien JPPK RSU Pindad tanpa kartu. Menggunakan video stream 200-frame untuk ekstraksi embedding akurasi tinggi serta pencocokan Cosine Similarity instan.",
        highlight: "Implementasi Nyata & Karya Skripsi di RSU Pindad Bandung",
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
        category: "fullstack",
        categoryLabel: "Enterprise Dashboard",
        docUrl: "/certificates/surat lulus magang.pdf",
        metrics: ["Asset Tracking", "Multi-Department", "Log Audit Otomatis"],
        tags: ["Laravel", "PHP", "MySQL", "Inventory Tracking", "Hardware Logistics", "Tailwind"],
        summary: "Dashboard inventaris IT komprehensif di PT. Pindad (Persero) untuk memonitor ketersediaan hardware, pelacakan unit, riwayat pemeliharaan, serta log aktivitas operasional secara real-time.",
        highlight: "Internship Fullstack Developer di PT. Pindad (Persero)",
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
        category: "data",
        categoryLabel: "Business Intelligence",
        docUrl: "/certificates/Sertifikat BNSP.pdf",
        metrics: ["BNSP Certified", "Multi-Source ETL", "Predictive KPI"],
        tags: ["Power BI", "Tableau", "SQL", "Python", "Data Wrangling", "BNSP"],
        summary: "Dashboard visualisasi analitik penjualan dan segmentasi demografis pelanggan. Menampilkan metrik performa multi-chart, analisis tren pendapatan, dan KPI prediktif berdasarkan standar kompetensi kerja nasional.",
        highlight: "Sertifikasi Kompetensi BNSP Data Analyst Resmi",
        features: [
            "Pembersihan dan validasi dataset kompleks menggunakan Python (Pandas/NumPy) dan SQL",
            "Desain dashboard eksekutif interaktif multi-chart di Power BI & Tableau",
            "Segmentasi pola belanja pelanggan dan analisis profitabilitas produk",
            "Sesuai standar unit kompetensi SKKNI Badan Nasional Sertifikasi Profesi (BNSP)"
        ]
    },
    {
        id: 4,
        title: "Synapse AI & Data Analytics Workspace",
        category: "ai",
        categoryLabel: "Modern Web Platform",
        metrics: ["Modular UI", "REST API Ready", "Dark / Light Mode"],
        tags: ["React", "TypeScript", "Tailwind CSS", "Data Analytics UI"],
        summary: "Antarmuka ruang kerja analitik berbasis web dengan visualisasi data interaktif, live code preview, serta pemrosesan data responsif untuk kebutuhan eksplorasi data science.",
        highlight: "Eksplorasi Modern React & Frontend Engineering",
        features: [
            "Arsitektur komponen modular berbasis React dan Tailwind CSS",
            "Kompatibilitas tema ganda (Dark Mode & Light Mode) dengan transisi halus",
            "Visualisasi bagan performa interaktif dan manajemen state terstruktur"
        ]
    }
];

export const experiences = [
    {
        id: "exp-rsu-pindad",
        period: "Jan 2026 – Jun 2026",
        role: "AI & Fullstack Developer (Project)",
        company: "RSU Pindad Bandung",
        logo: "/images/rsu-pindad/logo-rs-pindad.png",
        location: "Bandung, Indonesia",
        type: "work",
        githubUrl: "https://github.com/Rasyidhalim/Face-recognition-peserta-jppk",
        tags: ["FastAPI", "Python", "Laravel", "YOLOv8", "FaceNet", "MySQL", "Vue.js / Blade"],
        description: "Merancang dan mendeploy sistem Kiosk pengenalan wajah biometrik real-time untuk verifikasi pasien JPPK menggunakan YOLOv8, MediaPipe, dan DeepFace (FaceNet 128-D).",
        highlights: [
            "Membangun arsitektur microservices performa tinggi mengintegrasikan FastAPI Python AI backend, Laravel REST API, dan antarmuka web Vue.js",
            "Mengoptimalkan pemindaian biometrik dengan mekanisme sinkronisasi database MySQL-to-RAM dan algoritma Cosine Similarity untuk pencocokan berlatensi ultra-rendah (<300ms)",
            "Merekrut fitur ekstraksi biometrik hybrid memproses 200-frame video stream untuk menghasilkan face embeddings berakurasi tinggi (Super DNA)",
            "Penulis karya ilmiah skripsi: 'Pembangunan Aplikasi Peserta JPPK Berbasis Face Recognition Terintegrasi WhatsApp API Sebagai Solusi Layanan Tanpa Kartu'"
        ],
        media: [
            {
                title: "Confusion Matrix - Evaluasi Akurasi AI",
                caption: "Matrix pengujian akurasi identifikasi wajah peserta terdaftar & tidak dikenal (FaceNet 128-D)",
                image: "/images/rsu-pindad/confusion_matrix.png",
                badge: "Akurasi Model AI"
            },
            {
                title: "FaceNet 128-Dimensi Embedding Vector",
                caption: "Visualisasi sebaran vektor fitur biometrik wajah untuk kalkulasi Cosine Similarity",
                image: "/images/rsu-pindad/grafik_embedding.png",
                badge: "Vector 128-D"
            }
        ]
    },
    {
        id: "exp-pt-pindad",
        period: "Sep 2025 – Oct 2025",
        role: "Fullstack Developer (Internship)",
        company: "PT. Pindad (Persero) Bandung",
        logo: "/images/rsu-pindad/logo-rs-pindad.png",
        location: "Bandung, Indonesia",
        type: "work",
        docUrl: "/certificates/surat lulus magang.pdf",
        tags: ["Fullstack Web", "Inventory Logistics", "PHP", "MySQL", "Bootstrap"],
        description: "Merancang dan mengembangkan dashboard manajemen gudang IT full-stack untuk memantau inventaris hardware dan operasional logistik departemen TI & Inovasi.",
        highlights: [
            "Membangun antarmuka front-end responsif dan mengelola server logic back-end dengan database untuk menyederhanakan pelacakan barang dan update log",
            "Berkolaborasi dalam siklus hidup pengembangan perangkat lunak (SDLC) untuk menjamin akurasi integrasi data dan stabilitas sistem alur kerja gudang"
        ],
        media: [
            {
                title: "Surat Keputusan Kelulusan Prakerin Resmi PT Pindad",
                caption: "Sertifikat resmi kelulusan magang dengan nomor surat, pas foto, stempel basah PT. Pindad (Persero)",
                image: "/images/certificates/cert-pindad.jpg",
                badge: "Sertifikat Resmi",
                docUrl: "/certificates/surat lulus magang.pdf"
            }
        ]
    },
    {
        id: "exp-tim",
        period: "Jan 2019 – Jun 2019",
        role: "IT Support & Hardware (Internship)",
        company: "PT. Teknologi Inti Makmur",
        location: "Bandung, Indonesia",
        type: "work",
        docUrl: "/certificates/hardware.pdf",
        tags: ["Hardware Troubleshooting", "PC Assembly", "LAN / Networking", "Maintenance"],
        description: "Merakit, memprogram perangkat monitoring hardware kustom, dan melakukan pemeliharaan infrastruktur operasional secara real-time.",
        highlights: [
            "Melakukan monitoring sistem berkala, pemeliharaan hardware, dan troubleshooting guna meminimalkan downtime teknis",
            "Menangani isu hardware, software, dan jaringan harian untuk kelancaran operasional internal"
        ],
        media: [
            {
                title: "Sertifikasi Hardware & Perakitan Komputer (AP2SC UNIKOM)",
                caption: "Predikat Nilai Istimewa (90.62) perakitan PC, troubleshooting komponen, dan infrastruktur sistem",
                image: "/images/certificates/cert-hardware.jpg",
                badge: "Nilai 90.62 Istimewa",
                docUrl: "/certificates/hardware.pdf"
            }
        ]
    },
    {
        id: "exp-unikom",
        period: "Sep 2022 – Nov 2026",
        role: "Sarjana Komputer (S.Kom) - Teknik Informatika",
        company: "Universitas Komputer Indonesia (UNIKOM) Bandung",
        logo: "/images/unikom-logo.png",
        location: "Bandung, Indonesia",
        type: "education",
        tags: ["Data Analytics", "Machine Learning", "Database Systems", "AI", "Business Intelligence"],
        description: "Lulus dengan predikat Sangat Memuaskan (IPK 3.36 / 4.00). Fokus studi pada Data Analytics, Machine Learning, Database Management Systems, AI, Data Mining, dan Business Intelligence.",
        highlights: [
            "Penelitian skripsi implementasi Face Recognition Kiosk di RSU Pindad",
            "Sertifikasi Kompetensi Analis Data Nasional (BNSP) dan Google AI Gemini Certified",
            "Aktif dalam riset teknologi dan rekayasa kecerdasan buatan terapan"
        ],
        media: [
            {
                title: "Sertifikat Kompetensi Analis Data Resmi BNSP",
                caption: "Lisensi kompetensi analis data Republik Indonesia (SKKNI) No. Reg. TIK 1526 01487 2026",
                image: "/images/certificates/cert-bnsp.jpg",
                badge: "BNSP Kompeten",
                docUrl: "/certificates/Sertifikat BNSP.pdf"
            },
            {
                title: "Google AI Gemini Certified Student",
                caption: "Sertifikasi Artificial Intelligence, LLM Workflows, and Prompt Engineering Google for Education",
                image: "/images/certificates/cert-ai.jpg",
                badge: "Google Certified",
                docUrl: "/certificates/sertif ai.pdf"
            }
        ]
    },
    {
        id: "exp-smkn4",
        period: "Jul 2019 – Jul 2022",
        role: "Teknik Komputer dan Jaringan (TKJ)",
        company: "SMKN 4 Bandung",
        location: "Bandung, Indonesia",
        type: "education",
        tags: ["MikroTik", "Cisco", "Linux Server", "Switching & Routing", "Fiber Optics"],
        description: "Mempelajari infrastruktur jaringan, routing, switching, konfigurasi MikroTik & Cisco, serta administrasi server Linux/Windows (DNS, DHCP, Web Server).",
        highlights: [
            "Menguasai perakitan hardware komputer, instalasi OS, keamanan jaringan, dan troubleshooting sistematis"
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
