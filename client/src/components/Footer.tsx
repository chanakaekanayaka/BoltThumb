'use client'
import { footerData } from "../data/footer";
import { LinkedinIcon, TwitterIcon, YoutubeIcon, InstagramIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-slate-500 bg-[#030303] border-t border-white/5">
            {/* Subtle glow in the corner */}
            <div className="absolute -bottom-10 -right-10 size-64 bg-rose-900/5 blur-[100px] -z-10"></div>

            <motion.div className="flex flex-wrap items-start gap-10 md:gap-24"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <div className="flex flex-col gap-4">
                    <Link to="/" className="group flex items-center gap-1 font-black tracking-tighter">
                        <div className="bg-rose-900 text-white px-1.5 py-0.5 rounded-md skew-x-[-12deg]">
                            <span className="inline-block skew-x-[12deg] text-xl">BOLT</span>
                        </div>
                        <span className="text-xl text-white tracking-tight ml-1">THUMB</span>
                    </Link>
                    <p className="max-w-[200px] text-slate-600 leading-relaxed font-medium">
                        The ultimate AI companion for high-growth content creators.
                    </p>
                </div>

                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-white font-bold uppercase tracking-widest text-[11px] mb-4">
                            {section.title}
                        </p>
                        <ul className="space-y-3">
                            {section.links.map((link: IFooterLink, linkIndex: number) => (
                                <li key={linkIndex}>
                                    <Link 
                                        to={link.href} 
                                        className="hover:text-rose-500 transition-colors duration-200 font-medium text-slate-400"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </motion.div>

            <motion.div className="flex flex-col max-md:items-center max-md:text-center gap-4 items-end self-end"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
                <div className="flex items-center gap-4">
                    <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-rose-900/20 hover:text-rose-500 transition-all border border-white/5">
                        <TwitterIcon className="size-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-rose-900/20 hover:text-rose-500 transition-all border border-white/5">
                        <LinkedinIcon className="size-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-rose-900/20 hover:text-rose-500 transition-all border border-white/5">
                        <InstagramIcon className="size-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-rose-900/20 hover:text-rose-500 transition-all border border-white/5">
                        <YoutubeIcon className="size-5" />
                    </a>
                </div>
                
                <div className="text-right max-md:text-center">
                    <p className="text-slate-600 font-medium">
                        &copy; {new Date().getFullYear()} <span className="text-white font-bold tracking-tighter">BoltThumb AI.</span>
                    </p>
                    <p className="text-slate-700 text-[11px] mt-1">Built for the future of content.</p>
                </div>
            </motion.div>
        </footer>
    );
}