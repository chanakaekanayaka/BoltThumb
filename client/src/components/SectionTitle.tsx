'use client'
import type { SectionTitleProps } from "../types";
import { motion } from "framer-motion";

export default function SectionTitle({ text1, text2, text3 }: SectionTitleProps) {
    return (
        <div className="flex flex-col items-center">
            {/* Small Top Badge */}
            <motion.p className="text-center font-bold text-xs uppercase tracking-[0.2em] text-rose-500 mt-28 px-4 py-1.5 rounded-full bg-rose-950/30 border border-rose-900/20 w-max mx-auto shadow-[0_0_15px_rgba(159,18,57,0.1)]"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {text1}
            </motion.p>

            {/* Main Section Headline */}
            <motion.h3 className="text-4xl md:text-5xl font-black text-center text-white tracking-tighter mx-auto mt-6"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 30, delay: 0.1 }}
            >
                {text2}
            </motion.h3>

            {/* Description Text */}
            <motion.p className="text-slate-400 text-center mt-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-medium"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.2 }}
            >
                {text3}
            </motion.p>
        </div>
    );
}