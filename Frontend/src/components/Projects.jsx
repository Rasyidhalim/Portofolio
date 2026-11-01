import React, { useState } from 'react';
import { projectCategories, projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import FolderCard from './FolderCard';
import '../styles/projects.css';

export default function Projects({ darkMode }) {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeTab === 'all'
        ? projects
        : projects.filter((p) => p.category === activeTab);

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Galeri - Matching User Screenshot */}
                <div className="max-w-3xl mb-10 text-left">
                    <p className="text-xs uppercase font-bold tracking-[0.25em] text-neutral-500 mb-2.5">
                        SELECTED WORK
                    </p>
                    <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3.5 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        Featured Projects.
                    </h2>
                    <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${
                        darkMode ? 'text-neutral-400' : 'text-slate-600'
                    }`}>
                        Explore my software development and data analytics work. Click a folder to see the project details.
                    </p>
                </div>

                {/* Filter Tab Kategori */}
                <div className="flex flex-wrap items-center gap-2 mb-10">
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
                                activeTab === cat.id
                                    ? darkMode
                                        ? 'bg-white text-slate-950 font-bold shadow-md shadow-white/10'
                                        : 'bg-slate-900 text-white font-bold shadow-md'
                                    : darkMode
                                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid Galeri Proyek - Folder Animasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
                    {filtered.map((project) => (
                        <FolderCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                            darkMode={darkMode}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Detail Proyek Lengkap */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                darkMode={darkMode}
            />
        </section>
    );
}
