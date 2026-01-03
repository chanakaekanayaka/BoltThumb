'use client'
import { motion } from "framer-motion";
import { ZapIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {

    const navigate = useNavigate()

    return (
        <div className="relative px-4 pb-32 mt-20">
            {/* The Main Container */}
            <motion.div 
                className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-rose-950 via-[#0a0a0a] to-rose-950 rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl shadow-rose-900/10"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
                {/* Visual Glow Effect behind text */}
                <div className="absolute top-0 right-0 size-64 bg-rose-600/10 blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 size-64 bg-rose-900/10 blur-[100px] -z-10"></div>

                <div className="text-center md:text-left flex-1">
                    <motion.h2 
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Ready  to <span className="text-rose-500 italic"> <br></br></span> go viral?
                    </motion.h2>
                    <motion.p 
                        className="text-slate-400 text-lg md:text-xl font-medium max-w-md"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Join 1,000+ creators using BoltThumb to automate their click-through rate growth.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <button className="group relative flex items-center gap-3 px-10 py-5 bg-rose-600 hover:bg-rose-500
                     text-white font-black text-xl rounded-full transition-all hover:scale-105 active:scale-95 
                     shadow-[0_0_30px_rgba(225,29,72,0.3)]" onClick={()=>navigate('/generate')}>
                        <ZapIcon className="size-6 fill-white" />
                        Get Started Now
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping group-hover:hidden"></div>
                    </button>
                    <p className="text-slate-500 text-xs text-center mt-4 font-medium uppercase tracking-widest">
                        Generate Free Thumbnail
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}