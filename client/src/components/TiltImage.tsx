'use client'
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedImage({ rotateAmplitude = 5 }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Smoother 3D springs
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: any) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.figure 
            ref={ref} 
            className="relative w-full mt-24 max-w-5xl mx-auto flex flex-col items-center justify-center [perspective:1200px]" 
            onMouseMove={handleMouse} 
            onMouseLeave={handleMouseLeave}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            {/* The Outer Glow / Shadow Effect */}
            <div className="absolute -inset-4 bg-rose-900/20 blur-[100px] rounded-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <motion.div 
                className="relative w-full rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 overflow-hidden shadow-2xl" 
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d" 
                }} 
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>
                
                <motion.img 
                    src="/assets/hero-section-showcase.png"
                    className="w-full rounded-[12px] display-block object-cover shadow-inner"
                    alt="BoltThumb Dashboard Preview"
                    style={{ transform: "translateZ(20px)" }} // Pops the image forward
                />
            </motion.div>

            {/* Reflection line underneath */}
            <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-rose-900/50 to-transparent mt-8"></div>
        </motion.figure>
    );
}