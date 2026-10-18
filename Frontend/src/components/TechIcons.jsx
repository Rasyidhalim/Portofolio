import React from 'react';
import { Database, BarChart2, PieChart, FileSpreadsheet, Server, Code2, Flame, Atom, Palette, Cpu, Terminal, Layout, Layers, ShieldCheck, Sparkles, Box, Workflow } from 'lucide-react';

export function ToolIcon({ name, className = "w-6 h-6" }) {
    switch (name.toLowerCase()) {
        case 'python':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.8v.825H3.9S0 5.766 0 11.9c0 6.136 3.407 5.922 3.407 5.922h2.035v-2.867s-.11-3.419 3.354-3.419h5.753v-.862s.315-3.804-2.645-3.804H6.708S6.28 4.237 8.01 4.237h7.243S18.3 4.3 18.3 1.34C18.3-1.62 11.914 0 11.914 0zM8.7 1.83a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0zm3.386 22.17c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.8v-.825h8.106s3.9.467 3.9-5.667c0-6.136-3.407-5.922-3.407-5.922h-2.035v2.867s.11 3.419-3.354 3.419H9.465v.862s-.315 3.804 2.645 3.804h5.146s.428 3.633-1.302 3.633H8.711s-3.047-.063-3.047 2.897c0 2.96 6.422 1.34 6.422 1.34zm3.214-1.83a1.05 1.05 0 1 1 2.1 0 1.05 1.05 0 0 1-2.1 0z" />
                </svg>
            );
        case 'power bi':
            return <BarChart2 className={className} />;
        case 'tableau':
            return <PieChart className={className} />;
        case 'microsoft excel':
        case 'excel':
            return <FileSpreadsheet className={className} />;
        case 'sql':
        case 'mysql':
            return <Database className={className} />;
        case 'laravel':
            return <Flame className={className} />;
        case 'vue.js':
        case 'vue':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 1.61H14.06L12 5.16 9.94 1.61H0L12 22.39 24 1.61zM12 14.08L5.16 2.23h4.37L12 6.7l2.47-4.47h4.37L12 14.08z" />
                </svg>
            );
        case 'react':
            return <Atom className={className} />;
        case 'tailwind css':
        case 'tailwind':
            return <Palette className={className} />;
        case 'php':
            return <Server className={className} />;
        case 'javascript':
            return <Code2 className={className} />;
        case 'yolov8':
        case 'deepface':
        case 'deepface (facenet)':
            return <Cpu className={className} />;
        case 'google gemini':
            return <Sparkles className={className} />;
        case 'fastapi':
            return <Workflow className={className} />;
        default:
            return <Box className={className} />;
    }
}
