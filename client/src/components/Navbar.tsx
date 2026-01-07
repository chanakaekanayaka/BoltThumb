'use client'
import { MenuIcon, XIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.nav 
                className="fixed top-0 z-50 flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
                {/* Logo Section */}
                <Link to="/" className="group flex items-center gap-1 font-black tracking-tighter">
                    <div className="bg-rose-700 text-white px-1.5 py-0.5 rounded-md skew-x-[-12deg] group-hover:bg-rose-600 transition-colors shadow-lg shadow-rose-900/20">
                        <span className="inline-block skew-x-[12deg] text-2xl">BOLT</span>
                    </div>
                    <span className="text-2xl text-white tracking-tight ml-1">THUMB</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    {['Home', 'Generate', 'My-Generation', 'Contact'].map((item) => (
                        <Link 
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                            className="text-slate-400 hover:text-rose-500 transition-colors text-sm"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-bold active:scale-95 transition-all rounded-full shadow-lg shadow-rose-900/20"
                    >
                        <ZapIcon size={16} fill="currentColor" />
                        Get Started
                    </button>
                    
                    <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
                        <MenuIcon size={28} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center gap-8"
                    >
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white"
                        >
                            <XIcon size={30} />
                        </button>

                        {['Home', 'Generate', 'MyGeneration', 'Contact', 'Login'].map((item) => (
                            <Link 
                                key={item}
                                onClick={() => setIsOpen(false)} 
                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-3xl font-black text-white hover:text-rose-500 transition-colors tracking-tighter"
                            >
                                {item.toUpperCase()}
                            </Link>
                        ))}
                        
                        <div className="absolute bottom-12 text-slate-500 text-xs font-bold tracking-widest uppercase">
                            BoltThumb AI &copy; 2026
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}