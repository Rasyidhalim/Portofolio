import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollSpy } from '../utils/useScrollSpy';

export default function Navbar({ darkMode, setDarkMode, onOpenCv }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { id: 'hero',         label: 'Beranda' },
        { id: 'about',        label: 'Tentang' },
        { id: 'skills',       label: 'Keahlian' },
        { id: 'projects',     label: 'Proyek' },
        { id: 'experience',   label: 'Pengalaman' },
        { id: 'certificates', label: 'Sertifikat' },
        { id: 'contact',      label: 'Kontak' },
    ];

    const { scrolled, activeSection, scrollProgress, scrollToSection } = useScrollSpy(
        navLinks.map((l) => l.id)
    );

    const handleNavClick = (id) => {
        setMobileMenuOpen(false);
        scrollToSection(id);
    };

    /* ── Liquid-glass style helpers ─────────────────────────────────────── */
    const glassBtn = darkMode
        ? {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.10)',
        }
        : {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.60) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.60)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
        };

    const glassBtnCTA = {
        background: 'linear-gradient(135deg, rgba(99,102,241,0.85) 0%, rgba(14,165,233,0.75) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.20)',
        boxShadow: '0 4px 20px rgba(99,102,241,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? darkMode
                        ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
                        : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md'
                    : 'bg-transparent py-2'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    {/* ── Brand Logo: foto Rasyid ── */}
                    <button
                        onClick={() => handleNavClick('hero')}
                        className="group flex items-center gap-2.5 text-left focus:outline-none"
                    >
                        {/* Photo avatar — liquid glass frame */}
                        <div
                            className="relative w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shrink-0"
                            style={{
                                boxShadow: '0 0 0 2px rgba(99,102,241,0.6), 0 4px 16px rgba(99,102,241,0.30), inset 0 1px 0 rgba(255,255,255,0.15)',
                            }}
                        >
                            <img
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                className="w-full h-full object-cover object-top"
                            />
                            {/* online dot */}
                            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#090d16] z-10" />
                        </div>

                        <div>
                            <span className={`font-extrabold text-base sm:text-lg tracking-tight block leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {personalInfo.name}
                            </span>
                            <span className="text-[11px] font-medium tracking-wider uppercase text-sky-400 flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5 inline" /> Data &amp; AI Dev
                            </span>
                        </div>
                    </button>

                    {/* ── Desktop Navigation ── */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeSection === link.id
                                        ? 'text-indigo-400 font-semibold'
                                        : darkMode
                                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                                }`}
                            >
                                {activeSection === link.id && (
                                    <span
                                        className={`absolute inset-0 rounded-lg -z-10 ${
                                            darkMode
                                                ? 'bg-gradient-to-r from-indigo-500/15 via-sky-500/15 to-purple-500/15 border border-indigo-500/30'
                                                : 'bg-indigo-50 border border-indigo-200'
                                        }`}
                                    />
                                )}
                                {link.label}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 shadow-[0_0_8px_rgba(99,102,241,0.9)]" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* ── Right Action Buttons ── */}
                    <div className="hidden sm:flex items-center gap-3">
                        {/* Dark / Light toggle — liquid glass */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${
                                darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-slate-600 hover:text-slate-900'
                            }`}
                            style={glassBtn}
                            aria-label="Toggle theme"
                            title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        {/* Resume / CV — liquid glass */}
                        <button
                            onClick={onOpenCv}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 ${
                                darkMode ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                            }`}
                            style={glassBtn}
                        >
                            Resume / CV
                        </button>

                        {/* CTA Hubungi — liquid glass gradient */}
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="group relative overflow-hidden px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-1.5"
                            style={glassBtnCTA}
                        >
                            {/* shimmer overlay */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                            <span>Hubungi Saya</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>

                    {/* ── Mobile: dark toggle + hamburger ── */}
                    <div className="flex sm:hidden items-center gap-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-lg transition-all ${
                                darkMode ? 'text-amber-400' : 'text-slate-700'
                            }`}
                            style={glassBtn}
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 rounded-lg transition-all ${
                                darkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}
                            style={glassBtn}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile Drawer ── */}
            {mobileMenuOpen && (
                <div
                    className={`sm:hidden border-b px-4 pt-2 pb-6 space-y-1 ${
                        darkMode ? 'bg-[#090d16]/95 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
                    }`}
                    style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                                activeSection === link.id
                                    ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                                    : darkMode
                                    ? 'hover:bg-slate-800/60 text-slate-300'
                                    : 'hover:bg-slate-100 text-slate-700'
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}

                    <div className="pt-3 flex flex-col gap-2">
                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenCv(); }}
                            className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                darkMode ? 'text-slate-200' : 'text-slate-700'
                            }`}
                            style={glassBtn}
                        >
                            Lihat Resume / CV
                        </button>
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="w-full text-center py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                            style={glassBtnCTA}
                        >
                            Hubungi Saya
                        </button>
                    </div>
                </div>
            )}

            {/* ── Glowing Scroll Progress Bar ── */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </header>
    );
}
