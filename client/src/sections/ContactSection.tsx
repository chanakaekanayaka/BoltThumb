'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, SendHorizontalIcon } from "lucide-react";
import { motion } from "framer-motion"; // Changed to framer-motion for consistency

export default function ContactSection() {
    return (
        <div className="relative py-24 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#030303] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-96 bg-rose-900/10 blur-[120px] -z-10"></div>

            <SectionTitle 
                text1="Get in Touch" 
                text2="Questions about BoltThumb?" 
                text3="Our team is here to help you supercharge your channel's growth. Expect a reply within 24 hours." 
            />

            <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-slate-300 mt-16 w-full relative'>
                
                {/* Name Input */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <label className='mb-2 block text-sm font-semibold text-slate-400'>Your Name</label>
                    <div className='flex items-center pl-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600 transition-all group'>
                        <UserIcon className='size-5 text-slate-500 group-focus-within:text-rose-500 transition-colors' />
                        <input 
                            name='name' 
                            type="text" 
                            placeholder='e.g. MrBeast' 
                            className='w-full p-4 bg-transparent outline-none text-white placeholder:text-slate-600' 
                        />
                    </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
                >
                    <label className='mb-2 block text-sm font-semibold text-slate-400'>Email Address</label>
                    <div className='flex items-center pl-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600 transition-all group'>
                        <MailIcon className='size-5 text-slate-500 group-focus-within:text-rose-500 transition-colors' />
                        <input 
                            name='email' 
                            type="email" 
                            placeholder='you@example.com' 
                            className='w-full p-4 bg-transparent outline-none text-white placeholder:text-slate-600' 
                        />
                    </div>
                </motion.div>

                {/* Message Textarea */}
                <motion.div className='sm:col-span-2'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
                >
                    <label className='mb-2 block text-sm font-semibold text-slate-400'>How can we help?</label>
                    <textarea 
                        name='message' 
                        rows={6} 
                        placeholder='Tell us about your project or ask a question...' 
                        className='w-full p-4 bg-white/5 outline-none rounded-xl border border-white/10 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 text-white placeholder:text-slate-600 resize-none transition-all' 
                    />
                </motion.div>

                {/* Submit Button */}
                <motion.div className="sm:col-span-2 flex justify-center mt-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <button type='submit' className='w-full sm:w-max flex items-center justify-center gap-3 bg-rose-700 hover:bg-rose-600 text-white font-bold px-12 py-4 rounded-full shadow-lg shadow-rose-900/20 transition-all hover:scale-[1.02] active:scale-95 group'>
                        Send Message
                        <SendHorizontalIcon className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </form>
        </div>
    );
}