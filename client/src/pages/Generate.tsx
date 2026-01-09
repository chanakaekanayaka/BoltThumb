'use client'
import  { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { colorSchemes, type AspectRatio, type IThumbnail, type ThumbnailStyle } from '../assets/assets';
import SoftBackdrop from '../components/SoftBackdrop';
import AspectRatioSelector from '../components/AspectRatioSelector';
import StyleSelector from '../components/StyleSelector';
import ColorSchemeSelector from '../components/ColorSchemeSelector';
import PreviewPannel from '../components/PreviewPannel';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import api from '../configs/api';

const Generate = () => {
  const { id } = useParams();
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const [title, setTitle] = useState('')
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null)
  const [loading, setLoading] = useState(false);

  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9')
  const [colorSchemeId, setColorSchemeId] = useState<string>(colorSchemes[0].id)
  const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic')
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false)

  // --- FIX 1: Added Try/Catch and fixed Payload ---
  const handleGenerate = async () => {
    if (!isLoggedIn) return toast.error('Please login to generate thumbnails')
    if (!title.trim()) return toast.error('Title is required')
    
    setLoading(true)

    const api_payload = {
      title,
      prompt: additionalDetails,
      style: style,
      aspect_ratio: aspectRatio, 
      color_scheme: colorSchemeId,
      text_overlay: true,
    }

    try {
      const { data } = await api.post('/api/thumbnail/generate', api_payload);
      
      if (data.thumbnail) {
        toast.success(data.message || "Generation started!");
        navigate('/generate/' + data.thumbnail._id);
      }
    } catch (error: any) {
      console.error("Axios Error Details:", error.response?.data);
      // Show the specific error from backend if available, otherwise a generic one
      const errMsg = error.response?.data?.message || "Server Error (500): Check backend console";
      toast.error(errMsg);
      setLoading(false); // Stop loading on error
    }
  }

  const fetchThumbnail = async () => {
    try {
      const { data } = await api.get(`/api/user/thumbnail/${id}`)
      if (data?.thumbnail) {
        setThumbnail(data.thumbnail as IThumbnail)
        // If image_url exists, stop the loading spinner
        if (data.thumbnail.image_url) {
          setLoading(false)
        }
        setAdditionalDetails(data.thumbnail.user_prompt || '')
        setTitle(data.thumbnail.title || '')
        setAspectRatio(data.thumbnail.aspect_ratio || '16:9')
        setStyle(data.thumbnail.style || 'Bold & Graphic')
      }
    } catch (error: any) {
      console.error("Fetch error:", error);
    }
  }

  // --- FIX 2: Correct Interval Cleanup ---
  useEffect(() => {
    if (isLoggedIn && id) {
      fetchThumbnail()
    }

    let interval: any;
    // If we have an ID and we are still "loading" (waiting for image), poll the server
    if (id && loading && isLoggedIn) {
      interval = setInterval(() => {
        fetchThumbnail()
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [id, loading, isLoggedIn])

  // Reset state when navigating from a result back to a fresh "Generate" page
  useEffect(() => {
    if (!id) {
      setThumbnail(null)
      setTitle('')
      setAdditionalDetails('')
      setLoading(false)
    }
  }, [pathname, id])

  return (
    <>
      <SoftBackdrop />
      <div className='pt-24 min-h-screen  text-white'>
        <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='grid lg:grid-cols-[400px_1fr] gap-8'>
            
            {/* LEFT PANEL */}
            <div className={`space-y-6 ${id ? 'opacity-60 pointer-events-none' : ''}`}>
              <div className='p-6 rounded-2xl bg-white/5 border border-white/10 shadow-2xl space-y-6'>
                <div>
                  <h2 className='text-xl font-bold text-zinc-100 mb-1'>Create Your Thumbnail</h2>
                  <p className='text-sm text-zinc-400'>Describe your vision and let AI bring it to life</p>
                </div>

                <div className='space-y-5'>
                  {/* TITLE INPUT */}
                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-zinc-300'>Title or Topic</label>
                    <input 
                      type='text' 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={100} 
                      placeholder='e.g. 10 Tips for Better Sleep'
                      className='w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all'
                    />
                    <div className='flex justify-end'>
                      <span className='text-[10px] uppercase tracking-widest text-zinc-500'>{title.length}/100</span>
                    </div>
                  </div>

                  <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio} />
                  <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen} />
                  <ColorSchemeSelector value={colorSchemeId} onChange={setColorSchemeId} />

                  <div className='space-y-2'>
                    <label className='block text-sm font-medium text-zinc-300'>Additional Prompts (Optional)</label>
                    <textarea 
                      value={additionalDetails} 
                      onChange={(e) => setAdditionalDetails(e.target.value)}
                      rows={3} 
                      placeholder='Add specific elements, mood, or preferences...'
                      className='w-full px-4 py-3 rounded-lg border border-white/10 bg-black/40 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none'
                    />
                  </div>
                </div>

                {!id && (
                  <button 
                    disabled={loading}
                    onClick={handleGenerate} 
                    className='w-full py-4 rounded-xl font-bold bg-rose-700 hover:bg-rose-600 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed transition-all shadow-lg shadow-rose-900/20'
                  >
                    {loading ? (
                       <span className="flex items-center justify-center gap-2">
                         <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                         GENERATING...
                       </span>
                    ) : 'GENERATE THUMBNAIL'}
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT PANEL (PREVIEW) */}
            <div className="space-y-4">
              <h2 className='text-sm font-bold uppercase tracking-widest text-zinc-500'>Live Preview</h2>
              <PreviewPannel 
                thumbnail={thumbnail} 
                isLoading={loading}
                aspectRatio={aspectRatio}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Generate