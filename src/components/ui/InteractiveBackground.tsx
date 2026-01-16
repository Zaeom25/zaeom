import React, { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const lerpedMouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let dots: { x: number; y: number; baseOpacity: number; phase: number; speed: number }[] = [];
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const spacing = isTouch ? 60 : 45; // More space between dots on mobile

        const initDots = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            dots = [];
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    dots.push({
                        x,
                        y,
                        baseOpacity: Math.random() * 0.12 + 0.03,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.0005 + Math.random() * 0.001
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (isTouch) return; // Skip mouse move on touch devices to save CPU
            mouseRef.current = { x: e.clientX, y: e.clientY };
            // Initialize lerp on first move to prevent long travel from origin
            if (lerpedMouseRef.current.x === -1000) {
                lerpedMouseRef.current = { x: e.clientX, y: e.clientY };
            }
        };

        const draw = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Gelatinous mouse suavization (Lerp)
            // Lower speed = more "jelly" / slower follow
            const lerpSpeed = 0.04;
            lerpedMouseRef.current.x += (mouseRef.current.x - lerpedMouseRef.current.x) * lerpSpeed;
            lerpedMouseRef.current.y += (mouseRef.current.y - lerpedMouseRef.current.y) * lerpSpeed;

            dots.forEach(dot => {
                const dx = dot.x - lerpedMouseRef.current.x;
                const dy = dot.y - lerpedMouseRef.current.y;
                const distSquared = dx * dx + dy * dy;
                const maxDist = 300; // Larger radius for more presence
                const maxDistSquared = maxDist * maxDist;

                // 1. Smooth Breathing/Pulse Logic for all dots
                const breath = Math.sin(time * dot.speed + dot.phase) * 0.06;
                let opacity = dot.baseOpacity + breath;

                // 2. Interactive Spotlight with Smooth Exponential Falloff
                // Disable spotlight logic on mobile to save performance
                if (!isTouch && distSquared < maxDistSquared) {
                    const dist = Math.sqrt(distSquared);
                    // Use higher power (3) for a more "focused core" but soft edges
                    const factor = Math.pow(1 - dist / maxDist, 3);

                    const highlightOpacity = factor * 0.55;
                    opacity += highlightOpacity;

                    // Draw Interactive Layer (Zaeom Green)
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1.3 + factor * 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(57, 242, 101, ${opacity})`;
                    ctx.fill();
                } else {
                    // Draw Idle Layer (Soft White/Translucent)
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(254, 253, 250, ${Math.max(opacity, 0.02)})`;
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        initDots();
        window.addEventListener('resize', initDots);
        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', initDots);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 1 }}
        />
    );
};
