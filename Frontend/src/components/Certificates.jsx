import React, { useState } from 'react';
import { Award, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Copy, Check, Sparkles, ExternalLink, Download, FileText, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Daftar Sertifikasi Resmi & Kredensial Profesional Rasyid Halim Firdaus
 * Berdasarkan dokumen asli PDF yang telah diverifikasi
 */
const certificates = [
    {
        id: 1,
        title: "Sertifikat Kompetensi Analis Data (Data Analyst)",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP Informatika",
        issuerShort: "BNSP Indonesia",
        year: "2026 – 2029",
        status: "KOMPETEN",
        statusType: "emerald",
        credentialId: "63111 2521 6 0041241 2026",
        regNumber: "TIK.317.03533 2026",
        image: "/images/certificates/cert-bnsp.jpg",
        pdf: "/certificates/sertifikat-bnsp.pdf",
        category: "data-ai",
        gradient: "from-amber-500/20 via-emerald-500/10 to-teal-500/20",
        badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
        borderColor: "hover:border-emerald-500/40",
        skills: ["Data Analytics", "SQL & Database", "Python", "Power BI", "Data Wrangling", "Excel"],
        summary: "Sertifikasi kompetensi resmi negara dari Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia bidang Data Analytics dengan kualifikasi Analis Data (Data Analyst). Berlaku resmi hingga September 2029.",
    },
    {
        id: 2,
        title: "Gemini Certified Student (University)",
        issuer: "Google for Education",
        issuerShort: "Google AI",
        year: "2026 – 2029",
        status: "OFFICIALLY CERTIFIED",
        statusType: "sky",
        credentialId: "GOOGLE-GEMINI-AI-2026",
        regNumber: "Issued: 27/08/2026",
        image: "/images/certificates/cert-ai.jpg",
        pdf: "/certificates/sertif-ai.pdf",
        category: "data-ai",
        gradient: "from-sky-500/20 via-indigo-500/10 to-purple-500/20",
        badgeBg: "bg-sky-500/10 border-sky-500/30 text-sky-400",
        borderColor: "hover:border-sky-500/40",
        skills: ["Google Gemini AI", "Prompt Engineering", "Large Language Models", "Generative AI"],
        summary: "Kualifikasi resmi dari Google for Education membuktikan penguasaan fundamental teknologi Google AI, kecerdasan buatan generatif, alur kerja prompt cerdas, dan integrasi model LLM.",
    },
    {
        id: 3,
        title: "Sertifikasi Hardware & Jaringan Komputer",
        issuer: "Direktorat AP2SC Universitas Komputer Indonesia",
        issuerShort: "AP2SC UNIKOM",
        year: "2025 / 2026",
        status: "PREDIKAT: ISTIMEWA (90.62)",
        statusType: "purple",
        credentialId: "UNIKOM-AP2SC-4127-2026",
        regNumber: "NIM: 10122150",
        image: "/images/certificates/cert-hardware.jpg",
        pdf: "/certificates/hardware.pdf",
        category: "systems",
        gradient: "from-purple-500/20 via-indigo-500/10 to-pink-500/20",
        badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
        borderColor: "hover:border-purple-500/40",
        skills: ["Networking (95)", "Instalasi OS (90)", "Troubleshooting (90)", "Merakit PC (87.5)"],
        summary: "Lulus dengan predikat 'Istimewa' (Nilai Rata-rata 90.62/100) dalam ujian komprehensif perakitan komputer, instalasi sistem operasi, konfigurasi jaringan komputer, dan troubleshooting hardware.",
    },
    {
        id: 4,
        title: "Surat Keterangan Prakerin / Magang Divisi TI",
        issuer: "PT. PINDAD (Persero) Bandung",
        issuerShort: "PT. Pindad (BUMN)",
        year: "Sep 2025 – Okt 2025",
        status: "SELESAI DENGAN BAIK",
        statusType: "amber",
        credentialId: "Sket/108/P/BD/X/2025",
        regNumber: "Divisi Teknologi Informasi",
        image: "/images/certificates/cert-pindad.jpg",
        pdf: "/certificates/surat-lulus-magang.pdf",
        category: "career",
        gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
        badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        borderColor: "hover:border-amber-500/40",
        skills: ["IT Warehouse Dashboard", "Inventory Tracking", "Database Management", "Fullstack Web"],
        summary: "Surat keterangan resmi pelaksanaan Praktek Kerja Industri (PRAKERIN) di BUMN PT. Pindad Bandung pada Divisi Teknologi Informasi, mengembangkan sistem dashboard inventaris gudang IT internal.",
    },
    {
        id: 5,
        title: "English Proficiency Test (TOEFL Equivalent)",
        issuer: "Language Center Universitas Komputer Indonesia",
        issuerShort: "UNIKOM LC",
        year: "2025 – 2027",
        status: "SKOR TOTAL: 437",
        statusType: "teal",
        credentialId: "11.25.05005",
        regNumber: "Listening: 49 | Structure: 40 | Reading: 42",
        image: "/images/certificates/cert-toefl.jpg",
        pdf: "/certificates/toefl.pdf",
        category: "career",
        gradient: "from-teal-500/20 via-cyan-500/10 to-indigo-500/20",
        badgeBg: "bg-teal-500/10 border-teal-500/30 text-teal-400",
        borderColor: "hover:border-teal-500/40",
        skills: ["Technical English", "Listening Comprehension", "Reading", "Grammar & Structure"],
        summary: "Sertifikasi kemahiran berbahasa Inggris resmi dari Language Center UNIKOM dengan skor total 437. Berlaku resmi untuk kebutuhan akademis dan profesional hingga November 2027.",
    },
];

const categoryTabs = [
    { id: 'all',      label: 'Semua Kredensial (5)' },
    { id: 'data-ai',  label: 'Data Analytics & AI' },
    { id: 'systems',  label: 'Hardware & Jaringan' },
    { id: 'career',   label: 'Pengalaman & Bahasa' },
];

// ── Lightbox Modal Viewer ──────────────────────────────────────────────────
function Lightbox({ cert, onClose, onPrev, onNext, hasPrev, hasNext, darkMode }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(cert.credentialId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={onClose}
        >
            <div
                className={`relative max-w-4xl w-full max-h-[92vh] rounded-3xl border overflow-hidden shadow-2xl flex flex-col transition-all ${
                    darkMode ? 'bg-slate-900 border-slate-700/80 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Modal */}
                <div className={`flex items-center justify-between px-5 sm:px-6 py-4 border-b shrink-0 ${
                    darkMode ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50'
                }`}>
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm sm:text-base font-bold leading-tight truncate">{cert.title}</p>
                            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'} truncate`}>
                                {cert.issuer} &bull; <span className="font-mono">{cert.year}</span>
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-xl border transition-colors shrink-0 ml-3 ${
                            darkMode
                                ? 'border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                                : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        aria-label="Tutup"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
                    {/* High-res Image Preview */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 bg-slate-950 flex items-center justify-center min-h-[300px] max-h-[58vh]">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="max-h-[58vh] w-auto max-w-full object-contain mx-auto"
                        />
                    </div>

                    {/* Meta Info Bar */}
                    <div className={`p-4 sm:p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
                        darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                        <div>
                            <span className={`text-[11px] block font-mono uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Nomor Registrasi / Kredensial:
                            </span>
                            <div className="flex items-center gap-2 mt-0.5">
                                <span className="font-mono text-xs sm:text-sm font-bold text-amber-400">
                                    {cert.credentialId}
                                </span>
                                <button
                                    onClick={handleCopy}
                                    title="Salin ID"
                                    className={`p-1 rounded-md text-xs border transition-all ${
                                        copied
                                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                            : darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                                    }`}
                                >
                                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                            {cert.regNumber && (
                                <p className={`text-xs mt-1 font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {cert.regNumber}
                                </p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <a
                                href={cert.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-500/25"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Buka PDF Asli</span>
                            </a>
                            <a
                                href={cert.pdf}
                                download
                                className={`px-4 py-2 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition-colors ${
                                    darkMode
                                        ? 'border-slate-700 bg-slate-800 text-slate-200 hover:text-white'
                                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span>Unduh</span>
                            </a>
                        </div>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {cert.summary}
                    </p>
                </div>

                {/* Footer Navigation */}
                <div className={`px-6 py-3 border-t flex items-center justify-between shrink-0 ${
                    darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
                }`}>
                    <div className="flex items-center gap-2">
                        {hasPrev && (
                            <button
                                onClick={onPrev}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1 transition-all ${
                                    darkMode ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white' : 'border-slate-200 bg-white text-slate-700'
                                }`}
                            >
                                <ChevronLeft className="w-4 h-4" />
                                <span>Sebelumnya</span>
                            </button>
                        )}
                        {hasNext && (
                            <button
                                onClick={onNext}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1 transition-all ${
                                    darkMode ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white' : 'border-slate-200 bg-white text-slate-700'
                                }`}
                            >
                                <span>Selanjutnya</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className={`px-4 py-1.5 rounded-xl text-xs font-semibold border ${
                            darkMode ? 'border-slate-700 text-slate-300 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Certificates({ darkMode }) {
    const [selectedTab, setSelectedTab] = useState('all');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    const filteredCerts = selectedTab === 'all'
        ? certificates
        : certificates.filter((c) => c.category === selectedTab);

    const handleCopyId = (e, id, code) => {
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section id="certificates" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 backdrop-blur-md ${
                        darkMode ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' : 'bg-amber-50 border border-amber-200 text-amber-700 shadow-sm'
                    }`}>
                        <Award className="w-3.5 h-3.5" />
                        <span>KREDENSIAL &amp; SERTIFIKASI PROFESIONAL</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Sertifikasi Kompetensi &amp; Pengakuan Resmi
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Dokumentasi sertifikasi resmi terverifikasi dari BNSP Republik Indonesia, Google for Education, BUMN PT. Pindad, dan UNIKOM Bandung.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {categoryTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                                selectedTab === tab.id
                                    ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-500/25'
                                    : darkMode
                                    ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                                    : 'bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-indigo-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid 5 Kartu Sertifikat Berfoto Nyata */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCerts.map((cert) => {
                        const originalIndex = certificates.findIndex((c) => c.id === cert.id);
                        return (
                            <div
                                key={cert.id}
                                onClick={() => setLightboxIndex(originalIndex)}
                                className={`group relative rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${
                                    darkMode
                                        ? `bg-slate-900/50 border-slate-800/80 ${cert.borderColor} shadow-lg shadow-black/20 hover:shadow-indigo-500/10`
                                        : `bg-white/90 backdrop-blur-md border-slate-200/90 ${cert.borderColor} shadow-[0_4px_24px_rgba(99,102,241,0.06)] hover:shadow-[0_16px_36px_rgba(99,102,241,0.15)]`
                                }`}
                                style={{
                                    boxShadow: darkMode
                                        ? 'inset 0 1px 0 rgba(255,255,255,0.06)'
                                        : 'inset 0 1px 0 rgba(255,255,255,1)',
                                }}
                            >
                                {/* Decorative ambient top glow */}
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                                <div>
                                    {/* Thumbnail Foto Sertifikat Asli */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                                        {/* Badge Kategori & Status di atas thumbnail */}
                                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                                                {cert.issuerShort}
                                            </span>
                                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-md bg-slate-950/80 ${cert.badgeBg}`}>
                                                {cert.status}
                                            </span>
                                        </div>

                                        {/* Hover Zoom Indicator */}
                                        <div className="absolute inset-0 bg-indigo-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                                            <div className="px-3.5 py-1.5 rounded-xl bg-white/90 text-indigo-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                                <ZoomIn className="w-3.5 h-3.5 text-indigo-600" />
                                                <span>Buka Kredensial</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Info */}
                                    <div className="p-5 sm:p-6">
                                        <h3 className={`text-base sm:text-lg font-bold tracking-tight mb-1.5 line-clamp-2 group-hover:text-indigo-400 transition-colors ${
                                            darkMode ? 'text-white' : 'text-slate-900'
                                        }`}>
                                            {cert.title}
                                        </h3>
                                        <p className={`text-xs mb-3 font-medium ${darkMode ? 'text-indigo-300/80' : 'text-indigo-600'}`}>
                                            {cert.issuer} &bull; <span className="font-mono">{cert.year}</span>
                                        </p>

                                        <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                                            darkMode ? 'text-slate-300' : 'text-slate-600'
                                        }`}>
                                            {cert.summary}
                                        </p>

                                        {/* Competency Skill Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {cert.skills.slice(0, 4).map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                                                        darkMode ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60' : 'bg-slate-100 text-slate-700'
                                                    }`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {cert.skills.length > 4 && (
                                                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-medium ${
                                                    darkMode ? 'text-slate-500' : 'text-slate-400'
                                                }`}>
                                                    +{cert.skills.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer: Credential ID + Preview CTA */}
                                <div className={`px-5 sm:px-6 py-3 border-t flex items-center justify-between ${
                                    darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/70'
                                }`}>
                                    <div className="flex items-center gap-1.5 min-w-0">
                                        <span className={`text-[10px] font-mono shrink-0 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>ID:</span>
                                        <span className="font-mono text-[11px] font-semibold text-amber-400 truncate max-w-[130px]" title={cert.credentialId}>
                                            {cert.credentialId}
                                        </span>
                                        <button
                                            onClick={(e) => handleCopyId(e, cert.id, cert.credentialId)}
                                            title="Salin ID Kredensial"
                                            className={`p-1 rounded-md transition-all shrink-0 ${
                                                copiedId === cert.id
                                                    ? 'text-emerald-400'
                                                    : darkMode ? 'text-slate-500 hover:text-slate-200' : 'text-slate-400 hover:text-slate-700'
                                            }`}
                                        >
                                            {copiedId === cert.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setLightboxIndex(originalIndex)}
                                        className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 transition-colors shrink-0"
                                    >
                                        <ZoomIn className="w-3.5 h-3.5" />
                                        <span>Lihat</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <Lightbox
                    cert={certificates[lightboxIndex]}
                    darkMode={darkMode}
                    onClose={() => setLightboxIndex(null)}
                    onPrev={() => setLightboxIndex((i) => Math.max(0, i - 1))}
                    onNext={() => setLightboxIndex((i) => Math.min(certificates.length - 1, i + 1))}
                    hasPrev={lightboxIndex > 0}
                    hasNext={lightboxIndex < certificates.length - 1}
                />
            )}
        </section>
    );
}
