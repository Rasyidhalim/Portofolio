import React, { useState } from 'react';
import { projectCategories, projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
    FolderGit2, 
    Cpu, 
    Layers, 
    BarChart3, 
    ExternalLink, 
    FileText, 
    CheckCircle2, 
    ArrowRight, 
    Sparkles, 
    Code2 
} from 'lucide-react';
import { use3dTilt } from '../utils/use3dTilt';

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
            return <Cpu className="w-4 h-4 text-sky-400" />;
        case 'fullstack':
            return <Layers className="w-4 h-4 text-emerald-400" />;
        case 'data':
            return <BarChart3 className="w-4 h-4 text-amber-400" />;
        default:
            return <Code2 className="w-4 h-4 text-indigo-400" />;
    }
}

function ProjectCard({ project, onClick, darkMode }) {
    const { ref, style, handleMouseMove, handleMouseLeave } = use3dTilt(6);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full flex flex-col"
        >
            <div
                style={style}
                className={`h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl border transition-all duration-300 relative group ${
                    darkMode
                        ? 'bg-slate-900/50 border-slate-800/90 hover:border-indigo-500/50 hover:bg-slate-900/80 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-indigo-500/10'
                        : 'bg-white/95 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] hover:border-indigo-300'
                }`}
            >
                {/* Subtle Gradient Accent on top */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                    {/* Header Row: Category Badge + Links */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            darkMode 
                                ? 'bg-slate-800/90 border border-slate-700/70 text-slate-200' 
                                : 'bg-slate-100 border border-slate-200 text-slate-800'
                        }`}>
                            {getCategoryIcon(project.category)}
                            <span>{project.categoryLabel || project.category}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={`p-2 rounded-xl transition-all ${
                                        darkMode 
                                            ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60' 
                                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
                                    }`}
                                    title="Buka Repositori GitHub"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                            )}
                            {project.docUrl && (
                                <a
                                    href={project.docUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={`p-2 rounded-xl transition-all ${
                                        darkMode 
                                            ? 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' 
                                            : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                                    }`}
                                    title="Lihat Dokumen Resmi Terverifikasi"
                                >
                                    <FileText className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-2.5 transition-colors group-hover:text-indigo-400 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        {project.title}
                    </h3>

                    {/* Highlight Badge */}
                    {project.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold mb-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span>{project.highlight}</span>
                        </div>
                    )}

                    {/* Summary */}
                    <p className={`text-sm leading-relaxed mb-5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                        {project.summary}
                    </p>

                    {/* Key Technical Metrics */}
                    {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-5">
                            {project.metrics.map((metric, mIdx) => (
                                <div 
                                    key={mIdx}
                                    className={`p-2 rounded-xl text-center border ${
                                        darkMode 
                                            ? 'bg-slate-950/60 border-slate-800 text-slate-300' 
                                            : 'bg-slate-50 border-slate-200/80 text-slate-700'
                                    }`}
                                >
                                    <span className="text-[11px] font-mono font-bold block truncate">
                                        {metric}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Feature Highlights */}
                    {project.features && (
                        <div className="space-y-2 mb-6">
                            {project.features.slice(0, 3).map((feat, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                                        {feat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer: Tags & Action */}
                <div className="pt-5 border-t border-slate-800/40">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium ${
                                    darkMode 
                                        ? 'bg-slate-800/80 text-slate-300 border border-slate-700/50' 
                                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={() => onClick(project)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                            darkMode
                                ? 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30'
                                : 'bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 hover:border-indigo-600 shadow-sm'
                        }`}
                    >
                        <span>Lihat Rincian Teknis &amp; Arsitektur</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Projects({ darkMode }) {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeTab === 'all'
        ? projects
        : projects.filter((p) => p.category === activeTab);

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Galeri */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        darkMode ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm'
                    }`}>
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>KARYA &amp; PROYEK REKAYASA</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Karya Rekayasa &amp; Proyek Terpilih
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Implementasi sistem AI Biometrik di RSU Pindad, arsitektur IT Warehouse di PT. Pindad (Persero), dan analisis Business Intelligence bersertifikasi BNSP.
                    </p>
                </div>

                {/* Filter Tab Kategori */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                                activeTab === cat.id
                                    ? 'bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-500/20'
                                    : darkMode
                                    ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                                    : 'bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-sm hover:border-indigo-300'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid Galeri Proyek */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filtered.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Detail Proyek (Tanpa Gambar AI) */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                darkMode={darkMode}
            />
        </section>
    );
}
