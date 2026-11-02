import React, { useEffect, useRef } from 'react';

export default function ThreeBackground({ darkMode }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // 3D Particles with perspective
        const particleCount = Math.min(85, Math.floor(window.innerWidth / 18));
        const particles = [];
        const fov = 350;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: (Math.random() - 0.5) * width * 1.5,
                y: (Math.random() - 0.5) * height * 1.5,
                z: Math.random() * 800 + 100,
                baseZ: Math.random() * 800 + 100,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                vz: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 2 + 1.2,
            });
        }

        let mouseX = 0;
        let mouseY = 0;
        let targetRotX = 0;
        let targetRotY = 0;
        let rotX = 0;
        let rotY = 0;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX - width / 2) / (width / 2);
            mouseY = (e.clientY - height / 2) / (height / 2);
            targetRotX = mouseY * 0.25;
            targetRotY = mouseX * 0.25;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const render = () => {
            // Smooth rotation easing
            rotX += (targetRotX - rotX) * 0.05;
            rotY += (targetRotY - rotY) * 0.05;

            ctx.clearRect(0, 0, width, height);

            // Project 3D points to 2D screen
            const projected = [];

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;

                // Wrap around 3D boundaries
                if (p.z < 50) p.z = 900;
                if (p.z > 950) p.z = 60;
                if (p.x < -width) p.x = width;
                if (p.x > width) p.x = -width;
                if (p.y < -height) p.y = height;
                if (p.y > height) p.y = -height;

                // Apply 3D rotation
                const cosY = Math.cos(rotY);
                const sinY = Math.sin(rotY);
                const cosX = Math.cos(rotX);
                const sinX = Math.sin(rotX);

                // Y rotation
                const x1 = p.x * cosY + p.z * sinY;
                const z1 = -p.x * sinY + p.z * cosY;

                // X rotation
                const y2 = p.y * cosX - z1 * sinX;
                const z2 = p.y * sinX + z1 * cosX;

                // Perspective projection
                if (z2 + fov > 0) {
                    const scale = fov / (fov + z2);
                    const projX = x1 * scale + width / 2;
                    const projY = y2 * scale + height / 2;
                    const alpha = Math.max(0.1, Math.min(0.85, 1 - z2 / 900));

                    projected.push({
                        x: projX,
                        y: projY,
                        radius: p.radius * scale,
                        alpha: alpha,
                    });
                }
            }

            // Draw connecting 3D lines between nearby points
            const maxDist = 130;
            ctx.lineWidth = 0.75;

            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dx = projected[i].x - projected[j].x;
                    const dy = projected[i].y - projected[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const lineAlpha = (1 - dist / maxDist) * Math.min(projected[i].alpha, projected[j].alpha) * 0.4;
                        if (darkMode) {
                            ctx.strokeStyle = `rgba(239, 68, 68, ${lineAlpha * 0.4})`;
                        } else {
                            ctx.strokeStyle = `rgba(220, 38, 38, ${lineAlpha * 0.3})`;
                        }
                        ctx.beginPath();
                        ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw projected 3D nodes
            for (let i = 0; i < projected.length; i++) {
                const pt = projected[i];
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, Math.max(0.8, pt.radius), 0, Math.PI * 2);
                if (darkMode) {
                    ctx.fillStyle = i % 3 === 0
                        ? `rgba(239, 68, 68, ${pt.alpha * 0.7})`
                        : i % 3 === 1
                        ? `rgba(255, 255, 255, ${pt.alpha * 0.6})`
                        : `rgba(245, 158, 11, ${pt.alpha * 0.65})`;
                } else {
                    ctx.fillStyle = i % 3 === 0
                        ? `rgba(220, 38, 38, ${pt.alpha * 0.6})`
                        : i % 3 === 1
                        ? `rgba(185, 28, 28, ${pt.alpha * 0.4})`
                        : `rgba(217, 119, 6, ${pt.alpha * 0.55})`;
                }
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-700"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
