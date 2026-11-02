import React, { useState, useEffect } from 'react';
import { experiences } from '../data/portfolioData';
import { 
    Briefcase, 
    GraduationCap, 
    Award, 
    MapPin, 
    CheckCircle2, 
    ExternalLink, 
    FileText, 
    Eye, 
    X, 
    Image as ImageIcon
} from 'lucide-react';

// GitHub Octocat SVG
function GithubIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

export default function Experience({ darkMode }) {
    const [activeModalMedia, setActiveModalMedia] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setActiveModalMedia(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (activeModalMedia) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeModalMedia]);

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        darkMode ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-red-50 border border-red-200 text-red-700 shadow-sm'
                    }`}>
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>PENGALAMAN MAGANG</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-red-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Pengalaman Magang &amp; Rekam Jejak Industri
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Rekam jejak pelaksanaan program magang resmi di BUMN PT. Pindad (Persero) Bandung sebagai Fullstack Developer, didukung dokumentasi visual sistem dan surat keputusan kelulusan prakerin resmi.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-red-500/30 space-y-12">
                    {experiences.map((item, index) => {
                            return (
                                <div key={item.id || index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-red-500 flex items-center justify-center shadow-md shadow-red-500/30 group-hover:scale-125 transition-transform duration-300">
                                        {index === 0 && (
                                            <span className="absolute -inset-1 rounded-full bg-red-400/50 animate-ping pointer-events-none" />
                                        )}
                                        <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-red-400'}`}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div
                                        className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                                            darkMode
                                                ? 'bg-zinc-900/40 border-zinc-800/80 hover:border-red-500/40 hover:bg-zinc-900/70 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
                                                : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(220,38,38,0.04)] hover:shadow-[0_12px_32px_rgba(220,38,38,0.1)] hover:border-red-300'
                                        }`}
                                    >
                                        {/* Period & Category Header */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                                                    {item.period}
                                                </span>
                                                <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                                                    {item.badge || 'Magang Industri'}
                                                </span>
                                                {index === 0 && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                                        <span>Proyek Terkini</span>
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                                <MapPin className="w-3.5 h-3.5 text-red-500" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        {/* Role, Company & Brand Logo Header */}
                                        <div className="flex items-start justify-between gap-4 mt-2 mb-3">
                                            <div>
                                                <h3 className={`text-lg sm:text-xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                                    {item.role}
                                                </h3>
                                                <h4 className="text-sm sm:text-base font-semibold text-red-600 dark:text-red-400 mt-0.5 flex items-center gap-2">
                                                    <span>{item.company}</span>
                                                </h4>
                                            </div>

                                            {/* Institution / Company Logo */}
                                            {item.logo && (
                                                <div className={`w-12 h-12 rounded-2xl p-2 shrink-0 border flex items-center justify-center transition-transform hover:scale-105 ${
                                                    darkMode 
                                                        ? 'bg-zinc-800/80 border-zinc-700/60 shadow-inner' 
                                                        : 'bg-white border-slate-200 shadow-sm'
                                                }`}>
                                                    <img 
                                                        src={item.logo} 
                                                        alt={item.company} 
                                                        className="w-full h-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Technology Tags */}
                                        {item.tags && (
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {item.tags.map((tag, tIdx) => (
                                                    <span 
                                                        key={tIdx}
                                                        className={`text-[11px] px-2.5 py-0.5 rounded-lg font-mono font-medium ${
                                                            darkMode 
                                                                ? 'bg-zinc-800/70 text-slate-300 border border-zinc-700/50' 
                                                                : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Description */}
                                        <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {item.description}
                                        </p>

                                        {/* Highlights */}
                                        {item.highlights && item.highlights.length > 0 && (
                                            <div className="space-y-2 pt-3 border-t border-slate-800/40">
                                                {item.highlights.map((h, i) => (
                                                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                                                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                                            {h}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* DOKUMENTASI & BUKTI VISUAL GALLERY */}
                                        {item.media && item.media.length > 0 && (
                                            <div className="mt-6 pt-5 border-t border-red-500/20">
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                                                        <ImageIcon className="w-3.5 h-3.5" />
                                                        <span>Dokumentasi &amp; Bukti Visual</span>
                                                    </div>
                                                    <span className={`text-[11px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                                        Klik gambar untuk memperbesar
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                                    {item.media.map((med, mIdx) => (
                                                        <div
                                                            key={mIdx}
                                                            onClick={() => setActiveModalMedia({ ...med, company: item.company, role: item.role })}
                                                            className={`group/media relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                                                darkMode 
                                                                    ? 'bg-zinc-950/60 border-zinc-800 hover:border-red-500/50 hover:shadow-red-500/10' 
                                                                    : 'bg-slate-50 border-slate-200 hover:border-red-300 hover:shadow-red-100'
                                                            }`}
                                                        >
                                                            {/* Image Container */}
                                                            <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                                                                <img
                                                                    src={med.image}
                                                                    alt={med.title}
                                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-108"
                                                                    loading="lazy"
                                                                />
                                                                {/* Hover Dark Overlay with Zoom Eye */}
                                                                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/media:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
                                                                    <Eye className="w-4 h-4 text-red-300" />
                                                                    <span>Lihat Bukti</span>
                                                                </div>

                                                                {/* Badge overlay on image */}
                                                                {med.badge && (
                                                                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
                                                                        {med.badge}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {/* Caption below image */}
                                                            <div className="p-2.5">
                                                                <h5 className={`text-xs font-bold line-clamp-1 group-hover/media:text-red-500 transition-colors ${
                                                                    darkMode ? 'text-slate-200' : 'text-slate-800'
                                                                }`}>
                                                                    {med.title}
                                                                </h5>
                                                                <p className={`text-[11px] line-clamp-2 mt-0.5 ${
                                                                    darkMode ? 'text-slate-400' : 'text-slate-500'
                                                                }`}>
                                                                    {med.caption}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Buttons: GitHub Repo & Official Docs */}
                                        {(item.githubUrl || item.docUrl) && (
                                            <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-slate-800/30">
                                                {item.githubUrl && (
                                                    <a
                                                        href={item.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                                            darkMode
                                                                ? 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-red-500/40 shadow-sm'
                                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 hover:border-red-300 shadow-sm'
                                                        }`}
                                                    >
                                                        <GithubIcon className="w-3.5 h-3.5 text-red-500" />
                                                        <span>GitHub: Face-recognition-peserta-jppk</span>
                                                        <ExternalLink className="w-3 h-3 text-slate-400" />
                                                    </a>
                                                )}

                                                {item.docUrl && (
                                                    <a
                                                        href={item.docUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                                                            darkMode
                                                                ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30'
                                                                : 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-200'
                                                        }`}
                                                    >
                                                        <FileText className="w-3.5 h-3.5 text-red-500" />
                                                        <span>Dokumen Resmi Terverifikasi (PDF)</span>
                                                        <ExternalLink className="w-3 h-3 opacity-70" />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
            </div>

            {/* LIGHTBOX MODAL UNTUK PREVIEW DOKUMENTASI */}
            {activeModalMedia && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setActiveModalMedia(null)}
                >
                    <div 
                        className={`relative max-w-4xl w-full rounded-3xl overflow-hidden border shadow-2xl transition-all ${
                            darkMode 
                                ? 'bg-zinc-900 border-zinc-700 shadow-red-500/10' 
                                : 'bg-white border-slate-200 shadow-slate-400/30'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className={`flex items-center justify-between px-6 py-4 border-b ${
                            darkMode ? 'border-zinc-800 bg-zinc-900/80' : 'border-slate-100 bg-slate-50/80'
                        }`}>
                            <div className="flex items-center gap-2.5">
                                {activeModalMedia.badge && (
                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/30">
                                        {activeModalMedia.badge}
                                    </span>
                                )}
                                <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {activeModalMedia.company}
                                </span>
                            </div>

                            <button
                                onClick={() => setActiveModalMedia(null)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                    darkMode 
                                        ? 'hover:bg-zinc-800 text-slate-400 hover:text-white' 
                                        : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
                                }`}
                                aria-label="Tutup modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body / Image Viewer */}
                        <div className="p-4 sm:p-6 bg-slate-950/50 flex items-center justify-center max-h-[65vh] overflow-hidden">
                            <img 
                                src={activeModalMedia.image} 
                                alt={activeModalMedia.title}
                                className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-lg border border-zinc-800"
                            />
                        </div>

                        {/* Modal Footer / Description & Actions */}
                        <div className={`p-6 border-t ${darkMode ? 'border-zinc-800 bg-zinc-900' : 'border-slate-100 bg-white'}`}>
                            <h4 className={`text-lg font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {activeModalMedia.title}
                            </h4>
                            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {activeModalMedia.caption}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-zinc-800/30">
                                <a 
                                    href={activeModalMedia.image} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border ${
                                        darkMode 
                                            ? 'bg-zinc-800 hover:bg-zinc-700 text-slate-300 border-zinc-700' 
                                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                                    }`}
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span>Buka Gambar Asli (Resolusi Penuh)</span>
                                </a>

                                {activeModalMedia.docUrl && (
                                    <a 
                                        href={activeModalMedia.docUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/25 hover:opacity-95"
                                    >
                                        <FileText className="w-3.5 h-3.5" />
                                        <span>Buka Dokumen PDF Resmi</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
