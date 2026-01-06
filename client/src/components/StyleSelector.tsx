import { CpuIcon, ImageIcon, PenToolIcon, SquareIcon, SparkleIcon, ChevronDownIcon } from "lucide-react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";

const StyleSelector = ({ value, onChange, isOpen, setIsOpen }: {
    value: ThumbnailStyle;
    onChange: (style: ThumbnailStyle) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}) => {

    const styleDescription: Record<ThumbnailStyle, string> = {
        "Bold & Graphic": "High Contrast, bold typography, striking visuals",
        "Minimalist": "Clean, simple, lots of white space",
        "photorealistic": "photo-based, artistic, creative",
        "Illustrated": "Hand-drawn, artistic, creative",
        "Tech/Futuristic": "Modern, sleek, tech-inspired",
    };

    const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
        "Bold & Graphic": <SparkleIcon className="h-4 w-4" />,
        "Minimalist": <SquareIcon className="h-4 w-4" />,
        "photorealistic": <ImageIcon className="h-4 w-4" />,
        "Illustrated": <PenToolIcon className="h-4 w-4" />,
        "Tech/Futuristic": <CpuIcon className="h-4 w-4" />
    };

    return (
        <div className="relative space-y-3">
            <label className="block text-sm font-medium text-zinc-200">
                Thumbnail Style
            </label>
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between
                 rounded-md border px-4 py-3 text-left transition
                  bg-white/10 border-white/10 text-zinc-200 hover:bg-white/20"
            >
                <div className="space-y-1">
                    {/* Fixed alignment here */}
                    <div className="flex items-center gap-2">
                        {styleIcons[value]}
                        <span className="font-medium">{value}</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                        {styleDescription[value]}
                    </p>
                </div>
                <ChevronDownIcon 
                    className={`h-5 w-5 text-zinc-400 
                        transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                />
            </button>

            {isOpen && (
                
                <div className="absolute top-full left-0 z-50 mt-2 w-full rounded-md border
                 border-white/10 bg-zinc-900 shadow-xl overflow-hidden backdrop-blur-xl">
                    {thumbnailStyles.map((style) => (
                        <button
                            key={style}
                            type="button"
                            onClick={() => {
                                onChange(style);
                                setIsOpen(false);
                            }}
                            className="flex w-full items-start gap-3 px-4 py-3 
                            text-left transition hover:bg-white/5 text-zinc-200"
                        >
                            <div className="mt-1">{styleIcons[style]}</div>
                            <div>
                                <p className="font-medium text-sm">{style}</p>
                                <p className="text-xs text-zinc-500">{styleDescription[style]}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StyleSelector;