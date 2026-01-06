import { CpuIcon, ImageIcon, PenToolIcon, SquareIcon,  SparkleIcon, ChevronDownIcon } from "lucide-react";
import type { ThumbnailStyle } from "../assets/assets"


const StyleSelector = ({value , onChange, isOpen, setIsOpen}:
    {value: ThumbnailStyle; onChange:(style:ThumbnailStyle)=>void; isOpen:boolean;
        setIsOpen: (open:boolean)=>void
    }
) => {
    

    const styleDescription: Record<ThumbnailStyle, string> = {
        "Bold & Graphic": "High Contrast, bold typography, striking visuals",
        "Minimalist" : "Clean, simple, lots of white space",
        "photorealistic" : "photo-based, artistic, creative",
        "Illustrated" : "Hand-drawn, artistic, creative",
        "Tech/Futuristic" : "Modern, sleek, tech-inspired",
    }

    const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
        "Bold & Graphic": <SparkleIcon className="h-4 w-4"/>,
        "Minimalist" : <SquareIcon className="h-4 w-4"/>,
        "photorealistic" : <ImageIcon className="h-4 w-4"/>,
        "Illustrated" : <PenToolIcon className="h-4 w-4"/>,
        "Tech/Futuristic" : <CpuIcon className="h-4 w-4"/>
    }

  return (
    <div className="relative space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Thumbnail Style
      </label>
      <button
      type="button"
      onClick={()=>setIsOpen(!isOpen)}
      className="flex w-full items-center justify-between rounded-md
      border px-4 py-3 text-left transition bg-white/8 border-white/10
      text-zinc-200 hover:bg-white/12">
        <div className="space-y-1">
            <div>
             {styleIcons[value]}
             <span>{value}</span>
             </div>
           <p className="text-xs text-zinc-400">
            {styleDescription[value]}
           </p>
        </div>
        <ChevronDownIcon className={['h-5 w-5 text-zinc-400 transition-transform ',
            isOpen && 'rotate-180'].join('')
        }/>
      </button>
    </div>
  )
}

export default StyleSelector
