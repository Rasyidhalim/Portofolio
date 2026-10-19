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
        id: "exp-rsu-pindad",
        period: "Jan 2026 – Jun 2026",
        role: "AI & Fullstack Developer (Magang Proyek AI)",
        company: "RSU Pindad Bandung",
        logo: "/images/rsu-pindad/logo-rs-pindad.png",
        location: "Bandung, Indonesia",
        type: "internship",
        category: "software",
        badge: "Magang Proyek AI Terapan",
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
        role: "Fullstack Developer (Magang BUMN Resmi)",
        company: "PT. Pindad (Persero) Bandung",
        logo: "/images/rsu-pindad/logo-rs-pindad.png",
        location: "Bandung, Indonesia",
        type: "internship",
        category: "software",
        badge: "Magang Prakerin BUMN",
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
        role: "IT Support & Hardware (Magang Industri)",
        company: "PT. Teknologi Inti Makmur",
        location: "Bandung, Indonesia",
        type: "internship",
        category: "hardware",
        badge: "Magang Industri",
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
