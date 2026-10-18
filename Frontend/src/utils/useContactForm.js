import { useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Custom Hook untuk memproses logika formulir kontak, validasi, dan efek konfeti
 */
export function useContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [serverMessage, setServerMessage] = useState('');

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (formErrors[field]) {
            setFormErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Nama lengkap wajib diisi.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Alamat email wajib diisi.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Format alamat email tidak valid.';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subjek pesan wajib diisi.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Isi pesan tidak boleh kosong.';
        } else if (formData.message.trim().length < 8) {
            errors.message = 'Pesan minimal terdiri dari 8 karakter.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const triggerConfetti = () => {
        try {
            confetti({
                particleCount: 85,
                spread: 75,
                origin: { y: 0.65 },
                colors: ['#6366f1', '#38bdf8', '#10b981', '#f59e0b'],
            });
        } catch (e) {
            // Abaikan jika canvas tidak tersedia
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);
        setServerMessage('');

        try {
            // Simulasi pengiriman asinkron yang mulus
            await new Promise((resolve) => setTimeout(resolve, 800));

            setSubmitStatus('success');
            setServerMessage(
                `Halo ${formData.name}, pesan Anda terkait "${formData.subject}" berhasil terkirim! Saya akan segera merespons ke ${formData.email}.`
            );
            setFormData({ name: '', email: '', subject: '', message: '' });
            setFormErrors({});
            triggerConfetti();
        } catch (error) {
            setSubmitStatus('error');
            setServerMessage(error.message || 'Gagal mengirim pesan. Silakan hubungi langsung via WhatsApp atau Email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        formErrors,
        isSubmitting,
        submitStatus,
        serverMessage,
        handleChange,
        handleSubmit,
    };
}
