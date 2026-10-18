import React from 'react';
import { Layers, ShieldCheck, Zap, Award, GraduationCap, MapPin, Mail, Calendar, Coffee, User, BrainCircuit, BarChart3, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ darkMode }) {
    const pillars = [
        {
            icon: BarChart3,
            title: "Data Analytics & Business Intelligence",
            desc: "Pembersihan dataset mentah, pemodelan data relasional, eksplorasi data (EDA), dan visualisasi KPI interaktif dengan Power BI & Tableau bersertifikasi BNSP.",
        },
        {
            icon: BrainCircuit,
            title: "Artificial Intelligence & Biometrics",
            desc: "Pengalaman praktis mengimplementasikan Computer Vision (YOLOv8 & DeepFace/FaceNet) untuk verifikasi identitas real-time pada Kiosk Pasien RSU Pindad.",
        },
        {
            icon: Layers,
            title: "Full-Stack Web Engineering",
            desc: "Mengintegrasikan backend performa tinggi (FastAPI Python & Laravel REST API) dengan antarmuka front-end responsif dan dinamis (React, Vue, Tailwind CSS).",
        },
        {
            icon: Database,
            title: "Sistem Basis Data & Optimasi",
            desc: "Perancangan skema relasional MySQL, query indexing, dan mekanisme caching sinkronisasi MySQL-to-RAM untuk pencocokan Cosine Similarity berlatensi ultra-rendah.",
        },
    ];

    const details = [
        { label: "Nama Lengkap", value: personalInfo.name, icon: User },
        { label: "Domisili", value: personalInfo.location, icon: MapPin },
        { label: "Pendidikan", value: "S1 Teknik Informatika UNIKOM", icon: GraduationCap },
        { label: "Status Akademik", value: "Lulusan Baru (IPK 3.36 / 4.00)", icon: Award },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        darkMode ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm'
                    }`}>
                        <User className="w-3.5 h-3.5" />
                        <span>TENTANG SAYA</span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                        darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
                    }`}>
                        Kombinasi Analitik Data, AI &amp; Rekayasa Web
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Menerjemahkan data kompleks menjadi keputusan bisnis yang presisi, serta merancang sistem AI terapan dengan dampak nyata di industri.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Bio Narrative & Quick Details */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className={`p-8 rounded-3xl border transition-all ${
                            darkMode
                                ? 'bg-slate-900/50 border-slate-800 shadow-xl shadow-black/20'
                                : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_8px_30px_rgba(99,102,241,0.06)]'
                        }`}>
                            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Latar Belakang &amp; Nilai Profesional
                            </h3>
                            <p className={`text-sm sm:text-base leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {personalInfo.bioLong}
                            </p>
                            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                Selama studi di Universitas Komputer Indonesia (UNIKOM) dan magang di BUMN PT. Pindad serta proyek RSU Pindad, saya terbiasa memecahkan masalah rekayasa data nyata mulai dari ekstraksi 200 frame video stream hingga arsitektur microservices terintegrasi.
                            </p>

                            {/* Details List */}
                            <div className={`mt-8 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                                darkMode ? 'border-slate-800/60' : 'border-slate-100'
                            }`}>
                                {details.map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                                darkMode ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600 shadow-sm'
                                            }`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</div>
                                                <div className={`text-sm font-semibold truncate ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{item.value}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Pillars & Expertise Cards */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                                        darkMode
                                            ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-lg shadow-black/20'
                                            : 'bg-white/85 backdrop-blur-md border-slate-200/90 hover:border-indigo-300 hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                                    }`}
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center mb-4 shadow-md shadow-indigo-500/20">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {pillar.title}
                                    </h4>
                                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
