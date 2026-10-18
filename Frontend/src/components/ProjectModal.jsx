import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Code2, ExternalLink, FileText, Cpu, Layers, BarChart3 } from 'lucide-react';

// GitHub Octocat SVG
function GithubIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

function getCategoryIcon(cat) {
    switch (cat) {
        case 'ai':
            return <Cpu className="w-5 h-5 text-sky-400" />;
        case 'fullstack':
            return <Layers className="w-5 h-5 text-emerald-400" />;
        case 'data':
            return <BarChart3 className="w-5 h-5 text-amber-400" />;
        default:
            return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
}

export default function ProjectModal({ project, isOpen, onClose, darkMode }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Dialog Card */}
            <div
                className={`relative w-full max-w-3xl rounded-3xl border overflow-hidden shadow-2xl transition-all z-10 my-6 ${
                    darkMode
                        ? 'bg-slate-900 border-slate-700/80 text-slate-100 shadow-indigo-500/10'
                        : 'bg-white border-slate-200 text-slate-900 shadow-slate-400/30'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className={`p-6 sm:p-8 border-b ${
                    darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50/70'
                }`}>
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                                darkMode 
                                    ? 'bg-slate-800 border-slate-700 text-indigo-400' 
                                    : 'bg-white border-slate-200 text-indigo-600 shadow-sm'
                            }`}>
                                {getCategoryIcon(project.category)}
                            </div>
                            <div>
                                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/15 text-indigo-400 border border-indigo-500/25 mb-1">
                                    {project.categoryLabel || project.category}
                                </span>
                                <h3 className={`text-xl sm:text-2xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-full transition-colors ${
                                darkMode 
                                    ? 'hover:bg-slate-800 text-slate-400 hover:text-white' 
                                    : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
                            }`}
                            aria-label="Tutup rincian proyek"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {project.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold mt-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span>{project.highlight}</span>
                        </div>
                    )}
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                    {/* Key Metrics */}
                    {project.metrics && (
                        <div>
                            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-2.5">
                                Metrik &amp; Karakteristik Utama
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                {project.metrics.map((metric, idx) => (
                                    <div 
                                        key={idx}
                                        className={`p-3 rounded-2xl border text-center font-mono font-bold text-xs ${
                                            darkMode 
                                                ? 'bg-slate-950/60 border-slate-800 text-indigo-300' 
                                                : 'bg-indigo-50/50 border-indigo-100 text-indigo-900'
                                        }`}
                                    >
                                        {metric}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Summary */}
                    <div>
                        <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-2">
                            Ikhtisar Proyek
                        </h4>
                        <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            {project.summary}
                        </p>
                    </div>

                    {/* Features Breakdown */}
                    {project.features && (
                        <div>
                            <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-3">
                                Fitur &amp; Implementasi Rekayasa
                            </h4>
                            <div className="space-y-2.5">
                                {project.features.map((feat, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                            {feat}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tech Badges */}
                    <div>
                        <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-2.5">
                            Teknologi &amp; Alat yang Digunakan
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`px-3 py-1 rounded-xl text-xs font-mono font-semibold border ${
                                        darkMode
                                            ? 'bg-slate-800/80 border-slate-700 text-indigo-300'
                                            : 'bg-slate-100 border-slate-200 text-slate-800'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal Footer with Actions */}
                <div className={`p-5 sm:px-8 border-t flex flex-wrap items-center justify-between gap-3 ${
                    darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                    <div className="flex flex-wrap items-center gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors shadow-sm"
                            >
                                <GithubIcon className="w-4 h-4 text-indigo-400" />
                                <span>Lihat Repositori GitHub</span>
                                <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                        )}

                        {project.docUrl && (
                            <a
                                href={project.docUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 transition-colors"
                            >
                                <FileText className="w-4 h-4" />
                                <span>Dokumen Resmi Terverifikasi</span>
                                <ExternalLink className="w-3 h-3 opacity-70" />
                            </a>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm ml-auto"
                    >
                        Tutup Rincian
                    </button>
                </div>
            </div>
        </div>
    );
}
