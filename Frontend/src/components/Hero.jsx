import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Award, GraduationCap, Mail } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo, stats } from '../data/portfolioData';
import { use3dTilt } from '../utils/use3dTilt';

const roles = [
    "Data Analyst & BI Specialist",
    "AI & Computer Vision Developer",
    "Fullstack Web Engineer",
    "BNSP Certified Data Analyst"
];

export default function Hero({ darkMode, onOpenCv }) {
    // 3D Tilt Hook terpisah di src/utils/use3dTilt.js
    const { ref: photoRef, style: tiltStyle, glareStyle, handleMouseMove, handleMouseLeave } = use3dTilt(14);

    // Typewriter effect state
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 35 : 75;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentRole.slice(0, displayText.length + 1);
                setDisplayText(nextText);
                if (nextText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                const nextText = currentRole.slice(0, displayText.length - 1);
                setDisplayText(nextText);
                if (nextText === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            {/* Latar Belakang Teks Nama Bergerak (Kinetic Marquee di hero.css) */}
            <div className="hero-marquee-bg">
                <div className="hero-marquee-track hero-marquee-track-1">
                    <span className="mx-4">{personalInfo.name} &bull; DATA ANALYST &bull; AI DEVELOPER &bull;</span>
                    <span className="mx-4">{personalInfo.name} &bull; DATA ANALYST &bull; AI DEVELOPER &bull;</span>
                </div>
                <div className="hero-marquee-track hero-marquee-track-2">
                    <span className="mx-4">UNIKOM BANDUNG &bull; FULLSTACK &bull; BNSP CERTIFIED &bull;</span>
                    <span className="mx-4">UNIKOM BANDUNG &bull; FULLSTACK &bull; BNSP CERTIFIED &bull;</span>
                </div>
            </div>

            {/* Efek Cahaya Radial Ambient */}
            <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow ${
                darkMode ? 'bg-gradient-to-tr from-indigo-600/25 via-sky-500/20 to-purple-600/20' : 'bg-gradient-to-tr from-indigo-300/35 via-sky-200/30 to-purple-200/30'
            }`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge Status Ketersediaan */}
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 backdrop-blur-md transition-all ${
                        darkMode ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-300' : 'bg-white/90 border border-indigo-200 text-indigo-700 shadow-sm'
                    }`}>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>{personalInfo.status}</span>
                    </div>

                    {/* Foto 3D di Posisi Tengah */}
                    <div className="hero-photo-wrapper">
                        {/* Badge Melayang Kiri: UNIKOM */}
                        <div className={`hero-floating-badge hero-badge-left ${darkMode ? 'bg-slate-900/90 text-slate-100 border-indigo-500/40' : 'bg-white/95 text-slate-800 border-indigo-200'}`}>
                            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                <GraduationCap className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold text-indigo-400">UNIKOM</div>
                                <div className="text-xs font-extrabold">IPK 3.36 (S.Kom)</div>
                            </div>
                        </div>

                        {/* Badge Melayang Kanan: BNSP */}
                        <div className={`hero-floating-badge hero-badge-right ${darkMode ? 'bg-slate-900/90 text-slate-100 border-emerald-500/40' : 'bg-white/95 text-slate-800 border-emerald-200'}`}>
                            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                <Award className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] uppercase font-bold text-emerald-400">BNSP</div>
                                <div className="text-xs font-extrabold">Certified Data Analyst</div>
                            </div>
                        </div>

                        {/* Kartu Foto 3D */}
                        <div
                            ref={photoRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ perspective: '1000px' }}
                            className="relative group cursor-pointer"
                        >
                            <div className="hero-outer-glow"></div>

                            <div
                                style={tiltStyle}
                                className={`hero-photo-card ${darkMode ? 'bg-slate-900/85' : 'bg-white/95'}`}
                            >
                                <div className="hero-photo-img-box">
                                    <img
                                        src={personalInfo.avatar}
                                        alt={personalInfo.name}
                                        className="hero-photo-img"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
                                    <div style={glareStyle} className="absolute inset-0 pointer-events-none"></div>

                                    <div className="absolute bottom-3 left-3 right-3 text-left">
                                        <div className="text-white font-extrabold text-base leading-tight tracking-wide">
                                            {personalInfo.name}
                                        </div>
                                        <div className="text-[11px] text-sky-300 font-mono flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            <span>Informatics Engineer &bull; UNIKOM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Teks Judul & Profil */}
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
                            <span className={darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 bg-clip-text text-transparent'}>
                                {personalInfo.name}
                            </span>
                        </h1>

                        {/* Dynamic Typewriter Role */}
                        <div className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-2xl border font-mono font-bold text-base sm:text-2xl mb-6 shadow-sm backdrop-blur-md transition-all ${
                            darkMode
                                ? 'bg-gradient-to-r from-indigo-500/15 via-sky-500/15 to-purple-500/15 border-indigo-500/30'
                                : 'bg-white/90 border-indigo-200/90 shadow-[0_4px_24px_rgba(99,102,241,0.12)]'
                        }`}>
                            <span className={darkMode ? 'text-sky-400 select-none' : 'text-sky-600 select-none'}>&lt;</span>
                            <span className={darkMode ? 'text-indigo-200' : 'text-indigo-700 font-extrabold'}>
                                {displayText || '\u00A0'}
                            </span>
                            <span className={`inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-0.5 rounded-sm animate-pulse ${
                                darkMode ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.5)]'
                            }`} />
                            <span className={darkMode ? 'text-sky-400 select-none' : 'text-sky-600 select-none'}>/&gt;</span>
                        </div>

                        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {personalInfo.bioShort}
                        </p>

                        {/* Tombol Aksi */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                            <a
                                href={personalInfo.cvPdfUrl}
                                download="CV_Rasyid_Halim_Firdaus.pdf"
                                className="px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 active:scale-95"
                            >
                                <Download className="w-4 h-4" />
                                <span>Unduh CV (PDF)</span>
                            </a>

                            <button
                                onClick={onOpenCv}
                                className={`px-5 py-3.5 rounded-xl font-bold border transition-all active:scale-95 ${
                                    darkMode ? 'border-slate-700 bg-slate-900/60 text-slate-200' : 'border-slate-200 bg-white/90 text-slate-800 hover:border-indigo-300 hover:text-indigo-600 shadow-sm'
                                }`}
                            >
                                Pratinjau CV Digital
                            </button>

                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`px-5 py-3.5 rounded-xl font-bold border transition-all active:scale-95 flex items-center gap-2 ${
                                    darkMode
                                        ? 'text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/10'
                                        : 'text-indigo-600 border-indigo-300/80 bg-indigo-50/70 hover:bg-indigo-100 shadow-sm'
                                }`}
                            >
                                <span>Lihat Foto Proyek</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Tautan Kontak */}
                        <div className="flex items-center justify-center gap-3">
                            <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Terhubung:
                            </span>
                            <a
                                href={personalInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                                    darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
                                }`}
                                title="LinkedIn"
                            >
                                <LinkedinIcon className="w-4 h-4" />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                                    darkMode ? 'border-slate-800 bg-slate-900/80 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
                                }`}
                                title="Kirim Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Statistik Bawah */}
                <div className={`mt-16 pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 ${
                    darkMode ? 'border-slate-800/60' : 'border-slate-200/80'
                }`}>
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 text-center ${
                                darkMode
                                    ? 'bg-slate-900/50 border-slate-800'
                                    : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.08)] hover:shadow-[0_12px_28px_-6px_rgba(99,102,241,0.18)] hover:border-indigo-300'
                            }`}
                        >
                            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 font-mono">
                                {item.value}
                            </div>
                            <div className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
