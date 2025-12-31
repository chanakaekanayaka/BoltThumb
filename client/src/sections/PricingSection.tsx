'use client'
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
    return (
        <div id="pricing" className="relative py-24 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#030303]">
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-rose-900/5 blur-[120px] -z-10"></div>

            <SectionTitle 
                text1="Pricing" 
                text2="Choose Your Speed" 
                text3="From solo creators to full-scale production houses, we have a plan to help you Bolt your views." 
            />

            <div className="flex flex-wrap items-stretch justify-center gap-8 mt-20">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div 
                        key={index} 
                        className={`w-full max-w-[320px] flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                            plan.mostPopular 
                            ? 'bg-gradient-to-b from-rose-950/40 to-black border-rose-500 shadow-[0_0_40px_rgba(159,18,57,0.2)] relative scale-105 z-10' 
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                        }`}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {plan.mostPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8 text-center md:text-left">
                            <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.mostPopular ? 'text-rose-400' : 'text-slate-500'}`}>
                                {plan.name}
                            </p>
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <span className="text-4xl font-black text-white">${plan.price}</span>
                                <span className="text-slate-500 font-medium text-sm">/{plan.period}</span>
                            </div>
                        </div>

                        <ul className="flex-1 space-y-4 mb-10">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3 group">
                                    <div className={`mt-1 rounded-full p-0.5 ${plan.mostPopular ? 'bg-rose-500/20' : 'bg-white/10'}`}>
                                        <CheckIcon className={`size-3.5 ${plan.mostPopular ? 'text-rose-500' : 'text-slate-400'}`} strokeWidth={3} />
                                    </div>
                                    <p className="text-slate-300 text-sm font-medium leading-tight group-hover:text-white transition-colors">
                                        {feature}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <button 
                            type="button" 
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                                plan.mostPopular 
                                ? 'bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-900/40' 
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                            }`}
                        >
                            {plan.mostPopular && <ZapIcon size={16} fill="currentColor" />}
                            Get Started
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}