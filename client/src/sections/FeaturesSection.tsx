'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
    return (
        <div id="features" className="relative px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-[#030303]">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 size-96 bg-rose-900/10 blur-[120px] -z-10"></div>

            <SectionTitle 
                text1="Features" 
                text2="Engineered for Clicks" 
                text3="Powerful AI tools designed to transform your video frames into viral masterpieces." 
            />

            {/* Feature Cards Grid */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div 
                        key={index} 
                        className={`group relative ${index === 1 ? 'p-px rounded-2xl bg-gradient-to-br from-rose-600 to-transparent' : ''}`}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                        <div className="p-8 rounded-2xl space-y-4 border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-all max-w-80 w-full min-h-[280px]">
                            <div className="text-rose-500 bg-rose-500/10 w-fit p-3 rounded-xl group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Showcase Section */}
            <div className="mt-40 relative mx-auto max-w-6xl">
                {/* Decorative glow */}
                <div className="absolute -z-10 size-96 -top-20 -left-20 rounded-full bg-rose-600/10 blur-[100px]"></div>
                
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end gap-10"
                >
                    <div className="flex-1">
                        <p className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-4">The BoltThumb Advantage</p>
                        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-6 max-w-2xl">
                            Turn your ideas into <span className="move-gradient">high-performance</span> visuals.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                            BoltThumb uses advanced neural networks to analyze your niche and generate thumbnails that are scientifically proven to increase Click-Through Rates (CTR).
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <ZapIcon className="size-4 text-rose-500 fill-rose-500" /> AI Optimization
                                </h4>
                                <p className="text-slate-500 text-sm">Automatically places text and faces for maximum visual impact.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <ZapIcon className="size-4 text-rose-500 fill-rose-500" /> Brand Consistency
                                </h4>
                                <p className="text-slate-500 text-sm">Saves your fonts and colors to keep your channel looking professional.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div 
                        className="w-full md:w-1/3 bg-[#0a0a0a] p-2 rounded-3xl border border-white/10 shadow-2xl"
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img 
                            src="/assets/features-showcase-2.png" 
                            alt="BoltThumb dashboard" 
                            className="rounded-2xl"
                        />
                        <div className="p-6">
                            <h3 className="text-xl text-white font-bold tracking-tight">Skyrocket your CTR</h3>
                            <p className="text-slate-500 text-sm mt-2">Generate, test, and deploy thumbnails across your entire channel in minutes.</p>
                            <a href="#" className="group flex items-center gap-2 mt-6 text-rose-500 font-bold hover:text-rose-400 transition underline underline-offset-4">
                                View all AI templates
                                <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}