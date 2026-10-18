import { useState, useEffect } from 'react';

/**
 * Custom Hook untuk memantau posisi scroll halaman, reading progress, dan menentukan section aktif di Navbar
 * @param {Array<string>} sectionIds - Daftar ID section yang dipantau
 */
export function useScrollSpy(
    sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact']
) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(sectionIds[0] || 'hero');
    const [scrollProgress, setScrollProgress] = useState(0);

    const idsKey = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);

            // Hitung reading progress bar (0 - 100%)
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (currentScrollY / totalHeight) * 100;
                setScrollProgress(Math.min(100, Math.max(0, progress)));
            }

            // Deteksi section yang sedang aktif di viewport
            const scrollPos = currentScrollY + 120;
            const sections = sectionIds.map((id) => document.getElementById(id));

            for (let i = sections.length - 1; i >= 0; i--) {
                const sec = sections[i];
                if (sec && sec.offsetTop <= scrollPos) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Trigger immediately to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, [idsKey]);

    /**
     * Scroll halus dengan kompensasi tinggi sticky navbar (default 80px)
     */
    const scrollToSection = (id, offset = 80) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = Math.max(0, elementPosition - offset);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return { scrolled, activeSection, scrollProgress, scrollToSection };
}

