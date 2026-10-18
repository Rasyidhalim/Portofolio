import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from './SocialIcons';

export default function Contact({ darkMode, onOpenCv }) {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const waNumber = personalInfo.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${waNumber}`;
    const linkedinUrl = personalInfo.socialLinks.linkedin;

    return (
        <>
            {/* ─── Floating Contact Buttons (right edge) ─────────────── */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
                {/* WhatsApp */}
                <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Chat via WhatsApp"
                    className="group flex items-center overflow-hidden
                               pl-3 pr-3 py-3 rounded-l-2xl border border-r-0
                               transition-all duration-300
                               bg-emerald-500/20 border-emerald-500/40 text-emerald-400
                               hover:bg-emerald-500/30 hover:text-emerald-300
                               backdrop-blur-md shadow-lg"
                    style={{
                        maxWidth: '3.25rem',
                        transition: 'max-width 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(16,185,129,0.15)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.maxWidth = '11rem'}
                    onMouseLeave={e => e.currentTarget.style.maxWidth = '3.25rem'}
                >
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="text-sm font-bold whitespace-nowrap ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        WhatsApp
                    </span>
                </a>

                {/* LinkedIn */}
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Connect on LinkedIn"
                    className="group flex items-center overflow-hidden
                               pl-3 pr-3 py-3 rounded-l-2xl border border-r-0
                               transition-all duration-300
                               bg-sky-500/20 border-sky-500/40 text-sky-400
                               hover:bg-sky-500/30 hover:text-sky-300
                               backdrop-blur-md shadow-lg"
                    style={{
                        maxWidth: '3.25rem',
                        transition: 'max-width 0.3s ease, box-shadow 0.3s ease',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(14,165,233,0.15)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.maxWidth = '11rem'}
                    onMouseLeave={e => e.currentTarget.style.maxWidth = '3.25rem'}
                >
                    <LinkedinIcon className="w-6 h-6 shrink-0" />
                    <span className="text-sm font-bold whitespace-nowrap ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        LinkedIn
                    </span>
                </a>
            </div>

            {/* ─── Contact Section ───────────────────────────────────── */}
            <section id="contact" className="py-20 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                            darkMode ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm'
                        }`}>
                            <Mail className="w-3.5 h-3.5" />
                            <span>HUBUNGI SAYA</span>
                        </div>
                        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                            darkMode ? 'text-white' : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
                        }`}>
                            Mari Terhubung &amp; Berkolaborasi
                        </h2>
                        <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                            Punya ide proyek atau tawaran kerja sama? Hubungi saya langsung melalui kontak di bawah.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {/* Email */}
                        <div
                            className={`p-6 rounded-3xl border flex flex-col gap-4 transition-all ${
                                darkMode
                                    ? 'bg-slate-900/40 border-slate-800'
                                    : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)]'
                            }`}
                            style={{ boxShadow: darkMode ? 'inset 0 1px 0 rgba(255,255,255,0.05)' : undefined }}
                        >
                            <div
                                className="w-11 h-11 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center"
                                style={{ boxShadow: '0 2px 12px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.15)' }}
                            >
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[11px] uppercase font-bold text-slate-400 mb-1">Email</div>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className={`text-sm font-semibold hover:text-indigo-400 break-all ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}
                                >
                                    {personalInfo.email}
                                </a>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className={`self-start px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                                    copiedEmail
                                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                                        : darkMode
                                        ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                                }`}
                            >
                                {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                <span>{copiedEmail ? 'Tersalin!' : 'Salin'}</span>
                            </button>
                        </div>

                        {/* WhatsApp */}
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`p-6 rounded-3xl border flex flex-col gap-4 group transition-all hover:-translate-y-1 ${
                                darkMode
                                    ? 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/40'
                                    : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:border-emerald-300 hover:shadow-[0_12px_32px_rgba(16,185,129,0.12)]'
                            }`}
                        >
                            <div
                                className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform"
                                style={{ boxShadow: '0 2px 12px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.15)' }}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-[11px] uppercase font-bold text-slate-400 mb-1">WhatsApp</div>
                                <div className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                    Kirim Pesan Langsung
                                </div>
                            </div>
                            <span className="self-start px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                                Buka WhatsApp →
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`p-6 rounded-3xl border flex flex-col gap-4 group transition-all hover:-translate-y-1 ${
                                darkMode
                                    ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40'
                                    : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:border-sky-300 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]'
                            }`}
                        >
                            <div
                                className="w-11 h-11 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform"
                                style={{ boxShadow: '0 2px 12px rgba(14,165,233,0.2), inset 0 1px 0 rgba(255,255,255,0.15)' }}
                            >
                                <LinkedinIcon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[11px] uppercase font-bold text-slate-400 mb-1">LinkedIn</div>
                                <div className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                    Lihat Profil Profesional
                                </div>
                            </div>
                            <span className="self-start px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 group-hover:bg-sky-500/25 transition-colors">
                                Connect →
                            </span>
                        </a>
                    </div>

                    {/* Social Links + CV */}
                    <div className={`p-7 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
                        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/85 backdrop-blur-md border-slate-200/90 shadow-[0_4px_20px_rgba(99,102,241,0.06)]'
                    }`}>
                        <div>
                            <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                                Media Sosial
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { href: personalInfo.socialLinks.github,    label: 'GitHub',      icon: <GithubIcon className="w-4 h-4" /> },
                                    { href: personalInfo.socialLinks.linkedin,  label: 'LinkedIn',    icon: <LinkedinIcon className="w-4 h-4" /> },
                                    { href: personalInfo.socialLinks.instagram, label: 'Instagram',   icon: <InstagramIcon className="w-4 h-4" /> },
                                    { href: personalInfo.socialLinks.twitter,   label: 'Twitter / X', icon: <TwitterIcon className="w-4 h-4" /> },
                                ].map(({ href, label, icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`px-3 py-2 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all ${
                                            darkMode
                                                ? 'bg-slate-800/50 border-slate-700/60 text-slate-300 hover:text-white hover:border-indigo-500/50'
                                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-indigo-300'
                                        }`}
                                        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
                                    >
                                        {icon}
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gradient-to-br from-indigo-950/40 to-sky-950/30 border border-indigo-500/30 rounded-2xl p-5">
                            <div>
                                <h4 className="text-sm font-bold text-white mb-0.5">Butuh Resume?</h4>
                                <p className="text-xs text-indigo-300">Unduh CV dalam format PDF.</p>
                            </div>
                            <button
                                onClick={onOpenCv}
                                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shrink-0 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span>Unduh CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
