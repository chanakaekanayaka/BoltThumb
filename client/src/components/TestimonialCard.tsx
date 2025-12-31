'use client'
import { motion } from "framer-motion";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div 
            className="p-6 rounded-2xl mx-3 w-80 shrink-0 bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-rose-500/50 transition-colors group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="flex gap-3">
                {/* Profile Image with subtle Maroon Ring */}
                <div className="relative">
                    <img 
                        className="size-12 rounded-full object-cover border-2 border-white/10 group-hover:border-rose-600 transition-colors" 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                    />
                    <div className="absolute -bottom-1 -right-1 bg-rose-600 rounded-full p-0.5 border-2 border-[#030303]">
                        <ZapIcon size={8} className="text-white fill-white" />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1.5">
                        <p className="text-white font-bold text-sm tracking-tight">{testimonial.name}</p>
                        {/* Custom Blue Verification Badge */}
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#3B82F6" />
                        </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{testimonial.handle}</span>
                </div>
            </div>
            
            <p className="text-[13px] leading-relaxed pt-4 text-slate-400 font-medium italic">
                "{testimonial.quote}"
            </p>
        </motion.div>
    );
}

// Helper icon for the profile badge
const ZapIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);