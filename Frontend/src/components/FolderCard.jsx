import React from 'react';
import { 
    ExternalLink, 
    FileText, 
    CheckCircle2, 
    Sparkles, 
    Layers, 
    Cpu, 
    BarChart3, 
    Code2,
    Eye,
    FolderOpen,
    ShieldCheck,
    ScanFace,
    Terminal,
    Database,
    LineChart
} from 'lucide-react';

// GitHub Octocat SVG
function GithubIcon({ className = "w-4 h-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

// Custom preview cards inside the folder for each project
function FolderInsideCards({ project, darkMode }) {
    if (project.id === 1) {
        // Biometric Face Recognition Kiosk
        return (
            <>
                {/* Left Card: Terminal / Microservices */}
                <div className="folder-card-item folder-card-left bg-slate-900 border border-slate-700/80 rounded-xl p-2.5 text-white shadow-xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="text-[9px] font-mono text-slate-400">FastAPI</span>
                        </div>
                        <div className="text-[10px] font-mono text-red-400 font-semibold truncate">
                            POST /verify/face
                        </div>
                        <div className="text-[9px] font-mono text-slate-400 mt-1">
                            &gt; Latency: &lt;300ms
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[8px] font-mono text-rose-400">
                        <span>● YOLOv8 Active</span>
                        <span>RAM Cache</span>
                    </div>
                </div>

                {/* Center Card: Face Recognition Camera Viewport */}
                <div className="folder-card-item folder-card-center bg-slate-950 border border-red-500/40 rounded-xl p-2.5 text-white shadow-2xl flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-[9px] font-bold text-slate-200">KIOSK VERIFY</span>
                        </div>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 font-mono">RSU Pindad</span>
                    </div>

                    {/* Camera simulation viewport with face target */}
                    <div className="my-1.5 py-2 px-3 rounded-lg bg-slate-900/90 border border-dashed border-rose-500/40 relative flex flex-col items-center justify-center">
                        <div className="w-9 h-9 rounded-full border-2 border-rose-400/80 flex items-center justify-center relative">
                            <ScanFace className="w-5 h-5 text-rose-400" />
                            <div className="absolute inset-0 border border-rose-400/40 rounded-full animate-ping opacity-30" />
                        </div>
                        <span className="text-[9px] font-bold text-rose-400 mt-1 font-mono tracking-wider">
                            MATCH: 98.4%
                        </span>
                        <span className="text-[8px] text-slate-400">Pasien Terverifikasi</span>
                    </div>

                    <div className="text-[8px] font-mono text-slate-400 text-center truncate">
                        FaceNet 128-D Cosine Sim
                    </div>
                </div>

                {/* Right Card: Embedding vector visualization */}
                <div className="folder-card-item folder-card-right bg-slate-900 border border-slate-700/80 rounded-xl p-2.5 text-white shadow-xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-800">
                            <span className="text-[9px] font-bold text-red-400">Embedding</span>
                            <span className="text-[8px] text-slate-400 font-mono">200 Frames</span>
                        </div>
                        <div className="h-9 w-full bg-slate-950/80 rounded p-1 flex items-end gap-0.5 justify-around">
                            <div className="w-1.5 bg-red-600 rounded-t h-[40%]" />
                            <div className="w-1.5 bg-red-500 rounded-t h-[75%]" />
                            <div className="w-1.5 bg-rose-400 rounded-t h-[95%]" />
                            <div className="w-1.5 bg-red-500 rounded-t h-[60%]" />
                            <div className="w-1.5 bg-rose-300 rounded-t h-[85%]" />
                            <div className="w-1.5 bg-red-600 rounded-t h-[50%]" />
                        </div>
                    </div>
                    <div className="text-[8px] font-mono text-slate-400 text-right">
                        Threshold: 0.70
                    </div>
                </div>
            </>
        );
    }

    if (project.id === 2) {
        // IT Warehouse & Asset Logistics (PT. Pindad) - Using Real Dashboard Screenshots
        return (
            <>
                {/* Left Card: Peminjaman Tools Screenshot */}
                <div className="folder-card-item folder-card-left bg-slate-900 border border-slate-700/80 rounded-xl overflow-hidden shadow-xl flex flex-col">
                    <div className="px-2 py-1 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-[8px] font-mono text-rose-400 font-semibold truncate">Peminjaman Tools</span>
                    </div>
                    <div className="relative flex-1 bg-slate-950 overflow-hidden">
                        <img 
                            src="/images/pindad-warehouse/peminjaman_tools.jpeg" 
                            alt="Peminjaman & Pengembalian Tools" 
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 left-1.5 text-[7.5px] font-mono text-white/90 bg-slate-900/80 px-1 rounded">
                            Tools DB
                        </span>
                    </div>
                </div>

                {/* Center Card: Dashboard Utama Screenshot (Hero) */}
                <div className="folder-card-item folder-card-center bg-slate-950 border border-red-500/40 rounded-xl overflow-hidden shadow-2xl flex flex-col">
                    <div className="px-2.5 py-1 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                            <span className="text-[9px] font-extrabold text-white tracking-wide">PT. PINDAD</span>
                        </div>
                        <span className="text-[8px] px-1.5 py-0.2 rounded bg-rose-950/40 text-rose-300 font-mono">
                            TI Warehouse
                        </span>
                    </div>
                    <div className="relative flex-1 bg-slate-950 overflow-hidden">
                        <img 
                            src="/images/pindad-warehouse/dashboard_utama.jpeg" 
                            alt="Dashboard Utama Inventaris PT. Pindad" 
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 left-2 text-[8px] font-bold text-white bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700/80">
                            Dashboard Manufaktur &amp; Tools
                        </span>
                    </div>
                </div>

                {/* Right Card: Laporan Inventaris Gudang Screenshot */}
                <div className="folder-card-item folder-card-right bg-slate-900 border border-slate-700/80 rounded-xl overflow-hidden shadow-xl flex flex-col">
                    <div className="px-2 py-1 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-[8px] font-mono text-red-400 font-semibold truncate">Laporan Gudang</span>
                        <span className="text-[7.5px] px-1 rounded bg-[#107c41]/25 text-[#107c41] dark:text-[#22a559] border border-[#107c41]/40 font-bold">Excel</span>
                    </div>
                    <div className="relative flex-1 bg-slate-950 overflow-hidden">
                        <img 
                            src="/images/pindad-warehouse/laporan_inventaris.jpeg" 
                            alt="Laporan Inventaris Gudang PT. Pindad" 
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 right-1.5 text-[7.5px] font-mono text-rose-400 bg-slate-900/80 px-1 rounded">
                            Export Ready
                        </span>
                    </div>
                </div>
            </>
        );
    }

    // Project 3: BNSP Data Analyst - Using Real BI Dashboard & Power Query Screenshots
    return (
        <>
            {/* Left Card: Data Cleaning Power Query Profiling */}
            <div className="folder-card-item folder-card-left bg-slate-900 border border-slate-700/80 rounded-xl overflow-hidden shadow-xl flex flex-col">
                <div className="px-2 py-1 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[8px] font-mono text-rose-400 font-bold truncate">100% Valid</span>
                </div>
                <div className="relative flex-1 bg-slate-950 overflow-hidden">
                    <img 
                        src="/images/bnsp-analytics/data_cleaning.jpeg" 
                        alt="Data Profiling & Power Query 100% Valid" 
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-1 left-1.5 text-[7.5px] font-mono text-rose-300 bg-slate-900/90 px-1 rounded border border-rose-800/40">
                        Power Query ETL
                    </span>
                </div>
            </div>

            {/* Center Card: Dashboard Penjualan Elektronik (Hero Chart) */}
            <div className="folder-card-item folder-card-center bg-slate-950 border border-amber-500/50 rounded-xl overflow-hidden shadow-2xl flex flex-col">
                <div className="px-2.5 py-1 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-[9px] font-bold text-white tracking-wide">SALES DASHBOARD</span>
                    </div>
                    <span className="text-[8px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono font-semibold">
                        BNSP Certified
                    </span>
                </div>
                <div className="relative flex-1 bg-slate-950 overflow-hidden">
                    <img 
                        src="/images/bnsp-analytics/dashboard_penjualan.jpeg" 
                        alt="Dashboard Penjualan Elektronik BNSP" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-1 left-2 text-[8px] font-bold text-white bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700/80">
                        Tren Bulanan &amp; Wilayah
                    </span>
                </div>
            </div>

            {/* Right Card: Tren Penjualan Wilayah Stacked Chart */}
            <div className="folder-card-item folder-card-right bg-slate-900 border border-slate-700/80 rounded-xl overflow-hidden shadow-xl flex flex-col">
                <div className="px-2 py-1 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[8px] font-mono text-amber-400 font-semibold truncate">Tren Wilayah</span>
                    <span className="text-[7.5px] px-1 rounded bg-rose-600 text-white font-bold">PDF</span>
                </div>
                <div className="relative flex-1 bg-slate-950 overflow-hidden">
                    <img 
                        src="/images/bnsp-analytics/tren_wilayah.jpeg" 
                        alt="Tren Penjualan Berdasarkan Wilayah" 
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-1 right-1.5 text-[7.5px] font-mono text-amber-300 bg-slate-900/80 px-1 rounded">
                        5 Wilayah Utama
                    </span>
                </div>
            </div>
        </>
    );
}

export default function FolderCard({ project, onClick, darkMode }) {
    const handleDocumentClick = (e) => {
        if (project.docUrl) {
            e.stopPropagation();
            window.open(project.docUrl, '_blank', 'noopener,noreferrer');
        } else {
            onClick(project);
        }
    };

    const isPdfAction = project.actionText?.toLowerCase().includes('pdf') || project.docUrl;

    return (
        <div
            onClick={() => onClick(project)}
            className={`group relative rounded-[28px] border transition-all duration-300 flex flex-col justify-between cursor-pointer p-6 sm:p-8 select-none ${
                darkMode
                    ? 'bg-[#121318]/90 border-zinc-800/90 hover:border-red-500/40 hover:bg-[#15161d] shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-red-500/10'
                    : 'bg-white/95 border-slate-200/90 hover:border-red-300/80 hover:bg-red-50/20 shadow-[0_4px_24px_rgba(220,38,38,0.04)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.1)]'
            }`}
        >
            {/* Quick action icons on top-right */}
            <div className="absolute top-4 right-5 flex items-center gap-2 z-30">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-xl transition-all ${
                            darkMode
                                ? 'bg-zinc-800/80 hover:bg-zinc-700 text-slate-300 hover:text-white border border-zinc-700/60'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
                        }`}
                        title="Buka Repositori GitHub"
                    >
                        <GithubIcon className="w-3.5 h-3.5" />
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
                                ? 'bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30'
                                : 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-200'
                        }`}
                        title="Buka Dokumen PDF Resmi"
                    >
                        <FileText className="w-3.5 h-3.5" />
                    </a>
                )}
            </div>

            {/* Folder Visual Presentation */}
            <div className="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center my-3 perspective-[1000px] overflow-visible">
                <div className="folder-stage relative w-[270px] sm:w-[290px] h-[180px] sm:h-[190px] flex items-end justify-center">
                    
                    {/* Layer 1: Back Folder Plate with Top-Right Tab */}
                    <svg
                        viewBox="0 0 290 185"
                        className="folder-back-svg absolute bottom-0 w-[270px] sm:w-[290px] h-[175px] sm:h-[185px] transition-transform duration-300 z-0 drop-shadow-sm"
                    >
                        <defs>
                            <linearGradient id={`folder-back-grad-${project.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={darkMode ? "#6a707a" : "#7d8490"} />
                                <stop offset="100%" stopColor={darkMode ? "#4d525c" : "#616874"} />
                            </linearGradient>
                        </defs>
                        {/* Apple / macOS style folder back silhouette with tab on top right */}
                        <path
                            d="M 16 38 
                               L 124 38 
                               C 136 38, 144 24, 154 14 
                               C 160 8, 168 8, 176 8 
                               L 272 8 
                               C 282 8, 288 14, 288 24 
                               L 288 168 
                               C 288 178, 280 185, 270 185 
                               L 20 185 
                               C 10 185, 2 178, 2 168 
                               L 2 54 
                               C 2 44, 8 38, 16 38 Z"
                            fill={`url(#folder-back-grad-${project.id})`}
                            stroke={darkMode ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.4)"}
                            strokeWidth="1"
                        />
                    </svg>

                    {/* Layer 2: Inside Preview Cards (Nestled in the folder pocket) */}
                    <div className="folder-cards-container absolute bottom-[18px] w-[260px] sm:w-[275px] h-[135px] flex items-end justify-center pointer-events-auto z-10">
                        <FolderInsideCards project={project} darkMode={darkMode} />
                    </div>

                    {/* Layer 3: Front Folder Flap (Tilts forward on hover) */}
                    <div 
                        className="folder-front-flap absolute bottom-0 w-[270px] sm:w-[290px] h-[126px] sm:h-[132px] rounded-b-[20px] rounded-t-[10px] z-20 transition-all duration-400 origin-bottom select-none pointer-events-none"
                        style={{
                            background: darkMode 
                                ? 'linear-gradient(180deg, #818791 0%, #686d77 100%)' 
                                : 'linear-gradient(180deg, #9198a3 0%, #787e8a 100%)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.32)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.15)',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        {/* Subtle inner seam / flap detail */}
                        <div className="absolute top-2 left-6 right-6 h-[1px] bg-white/10" />
                    </div>
                </div>
            </div>

            {/* Folder Information & Action Text below */}
            <div className="mt-4 text-center flex flex-col items-center">
                {/* Title */}
                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1.5 transition-colors group-hover:text-red-600 dark:group-hover:text-red-400 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                    {project.folderTitle || project.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-xs sm:text-sm leading-relaxed max-w-sm mb-3.5 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                    {project.folderSubtitle || project.summary}
                </p>

                {/* Action CTA */}
                <button
                    onClick={isPdfAction && project.docUrl ? handleDocumentClick : () => onClick(project)}
                    className={`inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group-hover:translate-x-0.5 ${
                        darkMode 
                            ? 'text-slate-400 group-hover:text-red-300' 
                            : 'text-slate-500 group-hover:text-red-600'
                    }`}
                >
                    {isPdfAction ? (
                        <FileText className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                        <FolderOpen className="w-3.5 h-3.5 text-red-500" />
                    )}
                    <span>{project.actionText || "Click folder to explore"}</span>
                </button>
            </div>
        </div>
    );
}
