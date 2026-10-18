import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ darkMode }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`border-t transition-colors ${
            darkMode
                ? 'bg-[#060910] border-slate-800/80 text-slate-400'
                : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand & Tagline */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 text-white font-black flex items-center justify-center shadow-md">
                            RF
                        </div>
                        <div>
                            <div className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {personalInfo.name}
                            </div>
                            <div className="text-xs text-indigo-400">
                                {personalInfo.title}
                            </div>
                        </div>
                    </div>

                    {/* Tech Badge */}
                    <div className="flex items-center gap-2 text-xs font-medium">
                        <span>Dibangun dengan</span>
                        <span className="font-semibold text-sky-400">React</span>
                        <span>&bull;</span>
                        <span className="font-semibold text-rose-400">Laravel</span>
                        <span>&bull;</span>
                        <span className="font-semibold text-teal-400">Tailwind CSS</span>
                    </div>

                    {/* Socials & Back to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <a
                                href={personalInfo.socialLinks.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <GithubIcon className="w-4 h-4" />
                            </a>
                            <a
                                href={personalInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-lg hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon className="w-4 h-4" />
                            </a>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className={`p-2.5 rounded-xl border transition-all ${
                                darkMode
                                    ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'
                            }`}
                            title="Kembali ke Atas"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800/40 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
