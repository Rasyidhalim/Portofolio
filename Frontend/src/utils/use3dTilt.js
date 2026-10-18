import { useState, useRef } from 'react';

/**
 * Custom Hook untuk kalkulasi kemiringan 3D (3D Tilt) saat mouse bergerak di atas elemen
 * @param {number} maxAngle - Sudut rotasi maksimum (default: 12 derajat)
 */
export function use3dTilt(maxAngle = 12) {
    const [tilt, setTilt] = useState({
        rotateX: 0,
        rotateY: 0,
        glareX: 50,
        glareY: 50,
    });
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxAngle;
        const rotateY = ((x - centerX) / centerX) * maxAngle;

        setTilt({
            rotateX,
            rotateY,
            glareX: (x / rect.width) * 100,
            glareY: (y / rect.height) * 100,
        });
    };

    const handleMouseLeave = () => {
        setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
    };

    return {
        ref,
        tilt,
        handleMouseMove,
        handleMouseLeave,
        style: {
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: 'transform 0.15s ease-out',
            transformStyle: 'preserve-3d',
        },
        glareStyle: {
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.22) 0%, transparent 60%)`,
        }
    };
}
