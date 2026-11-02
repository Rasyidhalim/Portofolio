import React, { useState } from 'react';
import { 
    BarChart3, 
    Database, 
    LineChart, 
    FileSpreadsheet, 
    Layers, 
    BrainCircuit, 
    Cpu, 
    Server, 
    Code2, 
    Award, 
    ShieldCheck, 
    GraduationCap, 
    Briefcase, 
    Sparkles, 
    ArrowRight, 
    ExternalLink, 
    CheckCircle2, 
    User,
    ChevronRight
} from 'lucide-react';
import { personalInfo, aboutPersonas } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
    BarChart3,
    Database,
    LineChart,
    FileSpreadsheet,
    Layers,
    BrainCircuit,
    Cpu,
    Server,
    Code2,
    Award,
    ShieldCheck,
    GraduationCap,
    Briefcase,
    Sparkles,
    User
};

export default function About({ darkMode }) {
    const [activePersonaKey, setActivePersonaKey] = useState('dataAnalyst');
    const currentPersona = aboutPersonas[activePersonaKey];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
    };

    const isDataAnalyst = activePersonaKey === 'dataAnalyst';

    return (
        <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
            {/* Ambient Background Glow tailored to active persona */}
            <div 
                className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-700 opacity-25 ${
                    isDataAnalyst 
                        ? (darkMode ? 'bg-amber-500/15' : 'bg-amber-200/30')
                        : (darkMode ? 'bg-red-500/15' : 'bg-red-300/25')
                }`} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        darkMode ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-red-50 border border-red-200 text-red-700 shadow-sm'
                    }`}>
                        <User className="w-3.5 h-3.5" />
                        <span>TENTANG SAYA &bull; PROFIL DUA ARAH</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-red-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Dua Fokus Spesialisasi Profesional
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Pilih spesialisasi di bawah untuk melihat fokus kompetensi, keahlian teknis, dan portofolio terkait:
                    </p>
                </div>

                {/* ── INTERACTIVE PERSONA SWITCHER (DUA BIJI BISA DI GANTI-GANTI) ── */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className={`p-2 rounded-3xl border backdrop-blur-xl transition-all duration-300 grid grid-cols-1 sm:grid-cols-2 gap-2.5 ${
                        darkMode 
                            ? 'bg-zinc-900/80 border-zinc-800 shadow-xl shadow-black/40' 
                            : 'bg-white/90 border-slate-200 shadow-lg shadow-red-500/5'
                    }`}>
                        {/* Tab 1: Data Analyst */}
                        <button
                            type="button"
                            onClick={() => setActivePersonaKey('dataAnalyst')}
                            className={`group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 ${
                                isDataAnalyst
                                    ? darkMode
                                        ? 'bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-zinc-900 border border-amber-500/40 shadow-lg shadow-amber-500/10'
                                        : 'bg-gradient-to-r from-amber-50 to-yellow-50/80 border border-amber-300 shadow-md shadow-amber-500/10'
                                    : darkMode
                                    ? 'hover:bg-zinc-800/60 border border-transparent text-slate-400 hover:text-white'
                                    : 'hover:bg-slate-50 border border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                                isDataAnalyst
                                    ? 'bg-gradient-to-tr from-amber-500 to-yellow-500 text-white shadow-md shadow-amber-500/30'
                                    : darkMode
                                    ? 'bg-zinc-800 text-slate-400'
                                    : 'bg-slate-100 text-slate-600'
                            }`}>
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <span className={`text-base font-bold ${
                                        isDataAnalyst 
                                            ? (darkMode ? 'text-amber-300' : 'text-amber-900') 
                                            : (darkMode ? 'text-slate-200' : 'text-slate-800')
                                    }`}>
                                        Data Analyst
                                    </span>
                                    {isDataAnalyst && (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                            Aktif
                                        </span>
                                    )}
                                </div>
                                <p className={`text-xs truncate ${isDataAnalyst ? (darkMode ? 'text-amber-200/80' : 'text-amber-700') : (darkMode ? 'text-slate-400' : 'text-slate-500')}`}>
                                    BI &bull; SQL &bull; Python &bull; BNSP
                                </p>
                            </div>
                        </button>

                        {/* Tab 2: Software Development */}
                        <button
                            type="button"
                            onClick={() => setActivePersonaKey('softwareDev')}
                            className={`group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 ${
                                !isDataAnalyst
                                    ? darkMode
                                        ? 'bg-gradient-to-r from-red-600/30 via-rose-600/20 to-zinc-900 border border-red-500/50 shadow-lg shadow-red-500/10'
                                        : 'bg-gradient-to-r from-red-50 to-rose-50/80 border border-red-300 shadow-md shadow-red-500/10'
                                    : darkMode
                                    ? 'hover:bg-zinc-800/60 border border-transparent text-slate-400 hover:text-white'
                                    : 'hover:bg-slate-50 border border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                                !isDataAnalyst
                                    ? 'bg-gradient-to-tr from-red-600 to-rose-500 text-white shadow-md shadow-red-500/30'
                                    : darkMode
                                    ? 'bg-zinc-800 text-slate-400'
                                    : 'bg-slate-100 text-slate-600'
                            }`}>
                                <Code2 className="w-6 h-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <span className={`text-base font-bold ${
                                        !isDataAnalyst 
                                            ? (darkMode ? 'text-red-300' : 'text-red-800') 
                                            : (darkMode ? 'text-slate-200' : 'text-slate-800')
                                    }`}>
                                        Software Development
                                    </span>
                                    {!isDataAnalyst && (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                            Aktif
                                        </span>
                                    )}
                                </div>
                                <p className={`text-xs truncate ${!isDataAnalyst ? (darkMode ? 'text-red-200/80' : 'text-red-700') : (darkMode ? 'text-slate-400' : 'text-slate-500')}`}>
                                    FastAPI &bull; Laravel &bull; React &bull; AI Kiosk
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* ── DYNAMIC PERSONA CONTENT GRID ── */}
                <div key={activePersonaKey} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-3 duration-300">
                    {/* Left Column: Bio Narrative & Specific Highlights */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className={`p-8 rounded-3xl border transition-all ${
                            darkMode
                                ? 'bg-zinc-900/60 border-zinc-800 shadow-xl shadow-black/25'
                                : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-[0_8px_30px_rgba(220,38,38,0.06)]'
                        }`}>
                            {/* Role Badge */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                    isDataAnalyst
                                        ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30'
                                        : 'bg-red-500/15 text-red-400 border border-red-500/30'
                                }`}>
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>{currentPersona.roleTitle}</span>
                                </span>

                                <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {personalInfo.name}
                                </span>
                            </div>

                            {/* Headline */}
                            <h3 className={`text-xl sm:text-2xl font-bold leading-snug mb-4 ${
                                darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                                {currentPersona.headline}
                            </h3>

                            {/* Narrative Paragraphs */}
                            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {currentPersona.bioLong}
                            </p>
                            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {currentPersona.bioSecondary}
                            </p>

                            {/* Highlights Grid */}
                            <div className={`mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                                darkMode ? 'border-zinc-800/80' : 'border-slate-100'
                            }`}>
                                {currentPersona.highlights.map((item, idx) => {
                                    const IconComponent = iconMap[item.icon] || Award;
                                    return (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                                                isDataAnalyst
                                                    ? darkMode ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-100/80 text-amber-900'
                                                    : darkMode ? 'bg-red-500/15 text-red-400' : 'bg-red-50 text-red-600'
                                            }`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                                    {item.label}
                                                </div>
                                                <div className={`text-sm font-semibold leading-tight mt-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Quick Action Link for the Selected Persona */}
                            <div className="mt-8 pt-6 border-t border-zinc-800/40 flex flex-wrap items-center gap-3">
                                <button
                                    onClick={() => scrollToSection(currentPersona.actionLink)}
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-md active:scale-95 ${
                                        isDataAnalyst
                                            ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/25'
                                            : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-red-600/25'
                                    }`}
                                >
                                    <span>{currentPersona.actionText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                {isDataAnalyst ? (
                                    <button
                                        onClick={() => scrollToSection('certificates')}
                                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                                            darkMode 
                                                ? 'border-zinc-700 bg-zinc-800/60 text-slate-200 hover:border-amber-500/50' 
                                                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-amber-400'
                                        }`}
                                    >
                                        <Award className="w-4 h-4 text-amber-500" />
                                        <span>Lihat Lisensi BNSP</span>
                                    </button>
                                ) : (
                                    <a
                                        href={personalInfo.socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                                            darkMode 
                                                ? 'border-zinc-700 bg-zinc-800/60 text-slate-200 hover:border-red-500/40' 
                                                : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-red-300 hover:text-red-700'
                                        }`}
                                    >
                                        <Code2 className="w-4 h-4 text-red-500" />
                                        <span>GitHub Repository</span>
                                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Technology Pill Tags */}
                        <div className={`p-4 rounded-2xl border flex flex-wrap items-center gap-2 ${
                            darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-white/80 border-slate-200'
                        }`}>
                            <span className={`text-xs font-semibold uppercase tracking-wider ${
                                darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                                Stack Inti:
                            </span>
                            {currentPersona.tags.map((tag, tIdx) => (
                                <span
                                    key={tIdx}
                                    className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium border ${
                                        isDataAnalyst
                                            ? darkMode 
                                                ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' 
                                                : 'bg-amber-50 text-amber-800 border-amber-200'
                                            : darkMode 
                                                ? 'bg-red-500/10 text-red-300 border-red-500/20' 
                                                : 'bg-red-50 text-red-700 border-red-200'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: 4 Pillars of Competencies */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentPersona.pillars.map((pillar, index) => {
                            const IconComponent = iconMap[pillar.icon] || BarChart3;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                                        darkMode
                                            ? 'bg-zinc-900/50 border-zinc-800 hover:border-red-500/40 hover:bg-zinc-900/80 shadow-lg shadow-black/20'
                                            : 'bg-white/85 backdrop-blur-md border-slate-200/90 hover:border-red-300 hover:shadow-[0_12px_32px_rgba(220,38,38,0.12)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                                    }`}
                                >
                                    <div>
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md ${
                                            isDataAnalyst
                                                ? 'bg-gradient-to-tr from-amber-500 to-yellow-500 text-white shadow-amber-500/20'
                                                : 'bg-gradient-to-tr from-red-600 to-rose-500 text-white shadow-red-500/20'
                                        }`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                            {pillar.title}
                                        </h4>
                                        <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {pillar.desc}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-zinc-800/30 flex items-center gap-1.5 text-xs font-semibold">
                                        <span className={isDataAnalyst ? 'text-amber-500 dark:text-amber-400' : 'text-red-500 dark:text-red-400'}>
                                            Kompetensi Teruji
                                        </span>
                                        <CheckCircle2 className={`w-3.5 h-3.5 ${isDataAnalyst ? 'text-amber-500 dark:text-amber-400' : 'text-red-500 dark:text-red-400'}`} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
