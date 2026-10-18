import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ darkMode }) {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

            if (currentScrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            if (totalScroll > 0) {
                const scrollPercentage = (currentScrollY / totalScroll) * 100;
                setProgress(Math.min(100, Math.max(0, scrollPercentage)));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Calculate circular stroke
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            title="Kembali ke Atas"
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group focus:outline-none ${
                visible
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
            }`}
            style={{
                background: darkMode
                    ? 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.7) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.85) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: darkMode ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: darkMode
                    ? '0 8px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
                    : '0 8px 30px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,1)',
            }}
        >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
                {/* Track */}
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke={darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}
                    strokeWidth="2.5"
                />
                {/* Progress */}
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    stroke="url(#scrollGradient)"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-[stroke-dashoffset] duration-150 ease-out"
                />
                <defs>
                    <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Arrow Icon */}
            <ArrowUp
                className={`w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-active:scale-90 ${
                    darkMode ? 'text-indigo-300 group-hover:text-white' : 'text-indigo-600 group-hover:text-indigo-900'
                }`}
            />
        </button>
    );
}
