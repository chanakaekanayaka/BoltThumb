'use client'
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for "premium" feel
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Cleanup function
        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId); // Properly stop the animation loop
        };
    }, []);

    return null;
}