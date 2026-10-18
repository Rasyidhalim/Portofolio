import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, skills, experiences, certifications } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose, darkMode }) {
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

    if (!isOpen) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/85 backdrop-blur-sm print:hidden"
                onClick={onClose}
            ></div>

            {/* Resume Container */}
            <div
                className={`relative w-full max-w-4xl rounded-3xl border overflow-hidden shadow-2xl z-10 my-8 print:my-0 print:border-none print:shadow-none print:rounded-none ${
                    darkMode
                        ? 'bg-[#0b1120] border-slate-700/80 text-slate-100'
                        : 'bg-white border-slate-200 text-slate-900'
                }`}
            >
                {/* Modal Top Bar */}
                <div className={`p-4 border-b flex items-center justify-between print:hidden ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-400" />
                        <span className="font-bold text-sm">Curriculum Vitae - {personalInfo.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Direct PDF Download button */}
                        <a
                            href={personalInfo.cvPdfUrl}
                            download="CV_Rasyid_Halim_Firdaus.pdf"
                            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                            title="Unduh File PDF Dokumen Asli"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF Asli</span>
                        </a>

                        <button
                            onClick={handlePrint}
                            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                            title="Cetak atau Simpan sebagai PDF"
                        >
                            <Printer className="w-3.5 h-3.5" />
                            <span>Cetak</span>
                        </button>

                        <button
                            onClick={onClose}
                            className={`p-1.5 rounded-lg border ${
                                darkMode ? 'border-slate-700 text-slate-400 hover:text-white' : 'border-slate-300 text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Resume Printable Sheet */}
                <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 space-y-8">
                    {/* Header: Photo, Name, Title & Contact */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-700/60 print:border-slate-300">
                        <div className="flex items-center gap-5">
                            <img
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                className="w-20 h-24 object-cover object-top rounded-xl border-2 border-indigo-500/50 shadow-md"
                            />
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-1 text-indigo-400 print:text-indigo-700">
                                    {personalInfo.name}
                                </h1>
                                <h2 className="text-base sm:text-lg font-bold text-slate-300 print:text-slate-800">
                                    {personalInfo.title}
                                </h2>
                                <p className="text-xs text-sky-400 font-mono mt-0.5">
                                    {personalInfo.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-700 shrink-0">
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                                <span>{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                                <a
                                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline text-emerald-400 font-medium"
                                >
                                    Chat via WhatsApp
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                                <span>{personalInfo.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5 text-amber-400" />
                                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                                    LinkedIn: Rasyid Halim Firdaus
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section: Ringkasan Eksekutif */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-2 border-b border-indigo-500/30 pb-1 inline-block">
                            Ringkasan Profil (Summary)
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-700">
                            {personalInfo.bioLong}
                        </p>
                    </div>

                    {/* Section: Sertifikasi Resmi */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-indigo-500/30 pb-1 inline-block">
                            Sertifikasi &amp; Pelatihan Profesional
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {certifications.map((cert, idx) => (
                                <div
                                    key={idx}
                                    className={`p-3 rounded-xl border text-xs ${
                                        darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                                    }`}
                                >
                                    <div className="font-bold text-indigo-400 mb-0.5">{cert.title}</div>
                                    <div className="text-[11px] font-semibold text-slate-200">{cert.issuer}</div>
                                    <div className="text-[10px] text-emerald-400 font-mono mt-1">{cert.status} &bull; {cert.period}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Pengalaman Kerja & Proyek Nyata */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4 border-b border-indigo-500/30 pb-1 inline-block">
                            Pengalaman Kerja &amp; Proyek Industri
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-5 border-l-2 border-indigo-500/40">
                                    <div className="flex flex-wrap items-center justify-between gap-1">
                                        <h4 className="text-sm font-bold text-slate-200 print:text-slate-900">
                                            {exp.role} &mdash; <span className="text-indigo-400 font-semibold">{exp.company}</span>
                                        </h4>
                                        <span className="text-xs font-semibold text-slate-400 print:text-slate-600">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-300 print:text-slate-700 mt-1 mb-2">
                                        {exp.description}
                                    </p>
                                    {exp.highlights && (
                                        <ul className="space-y-1">
                                            {exp.highlights.map((h, i) => (
                                                <li key={i} className="text-[11px] sm:text-xs text-slate-400 print:text-slate-600 flex items-start gap-1.5">
                                                    <span className="text-indigo-400 font-bold">&bull;</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Keahlian Teknis */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-3 border-b border-indigo-500/30 pb-1 inline-block">
                            Tech Stack &amp; Kompetensi
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className={`p-2.5 rounded-xl border text-xs ${
                                        darkMode
                                            ? 'bg-slate-900/60 border-slate-800'
                                            : 'bg-slate-50 border-slate-200 text-slate-800'
                                    }`}
                                >
                                    <div className="font-bold flex items-center justify-between">
                                        <span>{skill.name}</span>
                                        <span className="text-[10px] text-indigo-400 font-mono">{skill.percent}%</span>
                                    </div>
                                    <div className="text-[11px] text-slate-400 mt-0.5 truncate">{skill.level} &bull; {skill.category}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
