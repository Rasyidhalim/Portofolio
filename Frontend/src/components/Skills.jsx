import React, { useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';

// ── Tool logo data ──────────────────────────────────────────────────────────

const webDevTools = [
    { name: 'Laravel',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'React',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'PHP',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'JavaScript',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'FastAPI',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'MySQL',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'HTML5',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

const dataAnalysisTools = [
    { name: 'Python',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Pandas',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'MySQL',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Jupyter',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Tensorflow',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'OpenCV',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'VS Code',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'GitHub',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Power BI',    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Tableau',     src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
    { name: 'Excel',       src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
];


// ── Marquee strip ───────────────────────────────────────────────────────────

function MarqueeStrip({ tools, reverse = false, darkMode }) {
    const doubled = [...tools, ...tools];

    return (
        <div className="relative overflow-hidden w-full">
            {/* fade edges */}
            <div
                className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
                style={{ background: `linear-gradient(to right, ${darkMode ? '#090d16' : '#f8fafc'}, transparent)` }}
            />
            <div
                className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
                style={{ background: `linear-gradient(to left, ${darkMode ? '#090d16' : '#f8fafc'}, transparent)` }}
            />

            <div className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {doubled.map((tool, idx) => (
                    <div
                        key={idx}
                        className={`
                            flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border
                            transition-all duration-300 hover:scale-110 cursor-default select-none shrink-0
                            backdrop-blur-md
                            ${darkMode
                                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-indigo-500/50'
                                : 'bg-white/90 border-slate-200/90 hover:border-indigo-400 hover:bg-white shadow-[0_2px_12px_rgba(99,102,241,0.08)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.18)]'}
                        `}
                        style={{
                            boxShadow: darkMode
                                ? '0 2px 16px rgba(99,102,241,0.10), inset 0 1px 0 rgba(255,255,255,0.08)'
                                : '0 4px 16px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,1)',
                        }}
                    >
                        <img
                            src={tool.src}
                            alt={tool.name}
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className={`text-[10px] font-semibold whitespace-nowrap ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Main Skills section ─────────────────────────────────────────────────────

export default function Skills({ darkMode }) {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        darkMode ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm'
                    }`}>
                        <Cpu className="w-3.5 h-3.5" />
                        <span>TEKNOLOGI &amp; TOOLS</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Tech Stack yang Saya Gunakan
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Koleksi tools dan teknologi yang saya gunakan sehari-hari dalam pengembangan.
                    </p>
                </div>

                {/* ── Web Developer Strip ── */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <span className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
                        <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">
                            Web Developer
                        </span>
                        <span className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
                    </div>
                    <MarqueeStrip tools={webDevTools} reverse={false} darkMode={darkMode} />
                </div>

                {/* ── Data Analysis Strip ── */}
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
                        <span className="px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                            Data Analysis
                        </span>
                        <span className={`h-px flex-1 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
                    </div>
                    <MarqueeStrip tools={dataAnalysisTools} reverse={true} darkMode={darkMode} />
                </div>
            </div>
        </section>
    );
}
