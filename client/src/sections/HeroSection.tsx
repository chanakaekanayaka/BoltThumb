'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon, ZapIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "framer-motion"; // Changed from motion/react for standard compatibility

export default function HeroSection() {
    const specialFeatures = [
        "No CC required",
        "Generate in seconds",
        "Boost your CTR",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            {/* Background Glow - Changed to Maroon/Rose */}
            <div className="absolute top-20 -z-10 left-1/2 -translate-x-1/2 size-96 bg-rose-900/20 blur-[120px] rounded-full"></div>
            
            {/* Top Badge */}
            <motion.a 
                href="#pricing" 
                className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-32 text-rose-100 bg-rose-950/30 border border-rose-900/20"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 25 }}
            >
                <span className="bg-rose-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1 text-sm font-medium">
                    <span>Try 10 free generations today</span>
                    <ChevronRightIcon size={14} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>

            {/* Main Headline */}
            <motion.h1 className="text-5xl md:text-7xl font-black max-w-4xl text-center mt-8 tracking-tighter text-rose-700"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
                Create Viral Thumbnails at <br />
                <span className="text-rose-900 italic relative">
                    Lightning Speed.
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9C118.957 4.47226 238.497 2.49733 355 4" stroke="#881337" strokeWidth="5" strokeLinecap="round"/>
                    </svg>
                </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p className="text-lg text-center text-slate-600 max-w-xl mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Stop wasting hours in Photoshop. Use BoltThumb AI to generate high-CTR thumbnails that grab attention and grow your channel.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <button className="bg-rose-900 hover:bg-rose-800 text-white font-bold rounded-full px-8 h-14 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-rose-900/20">
                    <ZapIcon size={18} fill="currentColor" />
                    Start Generating Free
                </button>
               
            </motion.div>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-16 border-t border-slate-100 pt-8 w-full max-w-4xl">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                        <div className="bg-rose-100 rounded-full p-1">
                            <CheckIcon className="size-4 text-rose-900" strokeWidth={3} />
                        </div>
                        <span className="text-slate-500 font-medium text-sm">{feature}</span>
                    </motion.p>
                ))}
            </div>

            {/* Image Preview */}
            <motion.div 
                className="mt-16 w-full max-w-5xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <TiltedImage />
            </motion.div>
        </div>
    );
}