import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return true;
    });

    const [isCvOpen, setIsCvOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className={`relative min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
            darkMode ? 'bg-[#090d16] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
        }`}>
            {/* Ambient Background Meshes for Light Mode */}
            {!darkMode && (
                <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-indigo-200/35 via-sky-100/30 to-transparent rounded-full blur-3xl opacity-80" />
                    <div className="absolute top-[30%] -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/25 to-indigo-100/20 rounded-full blur-3xl opacity-70" />
                    <div className="absolute top-[60%] -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-purple-200/25 via-indigo-100/20 to-transparent rounded-full blur-3xl opacity-70" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                        }}
                    />
                </div>
            )}

            {/* 3D Interactive Canvas Background */}
            <ThreeBackground darkMode={darkMode} />

            {/* Header Navigation */}
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onOpenCv={() => setIsCvOpen(true)}
            />

            {/* Main Sections */}
            <main>
                <Hero
                    darkMode={darkMode}
                    onOpenCv={() => setIsCvOpen(true)}
                />
                <About
                    darkMode={darkMode}
                />
                <Skills
                    darkMode={darkMode}
                />
                <Projects
                    darkMode={darkMode}
                />
                <Experience
                    darkMode={darkMode}
                />
                <Certificates
                    darkMode={darkMode}
                />
                <Contact
                    darkMode={darkMode}
                    onOpenCv={() => setIsCvOpen(true)}
                />
            </main>

            {/* Footer */}
            <Footer darkMode={darkMode} />

            {/* CV Modal Preview */}
            <CvModal
                isOpen={isCvOpen}
                onClose={() => setIsCvOpen(false)}
                darkMode={darkMode}
            />

            {/* Floating Back to Top with Scroll Progress Ring */}
            <ScrollToTop darkMode={darkMode} />
        </div>
    );
}
