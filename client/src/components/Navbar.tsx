import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const {isLoggedIn, user, logout} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between 
            w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
               
                    <Link to="/" className="group flex items-center gap-1 font-black tracking-tighter">
                        <div className="bg-rose-900 text-white px-1.5 py-0.5 rounded-md skew-x-[-12deg]">
                            <span className="inline-block skew-x-[12deg] text-xl">BOLT</span>
                        </div>
                        <span className="text-xl text-white tracking-tight ml-1">THUMB</span>
                    </Link>
                

                <div className="hidden md:flex items-center gap-8 transition duration-500">

                    <Link to='/' className="hover:text-orange-600 transition hover:animate-bounce">Home</Link>
                    <Link to='/generate' className="hover:text-orange-600  transition hover:animate-bounce">Generate</Link>
                    {isLoggedIn ?  <Link to='/my-generation' className="hover:text-orange-600  transition hover:animate-bounce">MyGeneration</Link>
                                :  <Link to='#' className="hover:text-orange-600  transition hover:animate-bounce">About</Link>}
                  
                    <Link to='#' className="hover:text-orange-600 transition hover:animate-bounce">Contact us</Link>

                
                </div>
                <div className="flex items-center gap-2">
                    {isLoggedIn ? (

                        <div className="relative group">
                            <button className="rounded-full size-8 bg-white/20 border-2 border-white/10">
                                {user?.name.charAt(0).toUpperCase()}
                            </button>
                            <div className="absolute hidden group-hover:block top-6 right-0 pt-4">
                             <button onClick={()=>logout()} className="bg-white/20 border-2 border-white/10 px-5 py-1.5 rounded">
                                Logout
                             </button>
                            </div>

                        </div>

                    ) : (
                        <button onClick={()=>navigate('/login')} className="/* Layout & Visibility */
  hidden md:inline-flex items-center justify-center px-8 py-2.5 rounded-full
  
  /* Typography */
  text-sm font-bold tracking-wide text-white
  
  /* Modern Orange Gradient - Shifting from Deep Orange to Amber */
  bg-gradient-to-r from-orange-800 to-amber-600
  hover:from-orange-700 hover:to-amber-200
  
  /* Shadow & Glow - Makes the button pop against dark backgrounds */
  shadow-lg shadow-orange-950/20 
  hover:shadow-orange-500/40
  
  /* Interaction & Feedback */
  transition-all duration-300 ease-out
  active:scale-95 
  border border-white/10">
                         Get Started
                        </button>

                    )}
                </div>

                
                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col 
                items-center justify-center text-lg gap-8 md:hidden transition-transform 
                duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
               <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
               <Link onClick={() => setIsOpen(false)} to='/generate' >Generate</Link>
               {isLoggedIn ? <Link onClick={() => setIsOpen(false)} to='/my-generation' >MyGeneration</Link>
                           : <Link onClick={() => setIsOpen(false)} to='#' >About</Link>}
                <Link onClick={() => setIsOpen(false)} to='#' >Contact us</Link>

                {isLoggedIn ? <button onClick={() => {setIsOpen(false) ; logout()}} >Logout</button>
                            :<Link onClick={() => setIsOpen(false)} to='/login' >Login</Link>}
               
              
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white
                 aspect-square size-10 p-1 items-center justify-center bg-orange-500 
                  hover:bg-orange-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}