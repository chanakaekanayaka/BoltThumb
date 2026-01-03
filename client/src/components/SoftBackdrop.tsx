import React from 'react'

const SoftBackdrop = () => {
  return (
    <div className='fixed inset-0 -z-10 pointer-events-none'>
      {/* Top Center Glow - Matches the Hero Background Glow */}
      <div className='absolute left-1/2 top-20 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-tr 
        from-rose-900/25 to-transparent rounded-full blur-[120px]' />
      
      {/* Bottom Right Accent - Matches the Rose/Maroon palette */}
      <div className='absolute right-12 bottom-10 w-[30rem] h-[15rem] bg-gradient-to-bl 
        from-rose-800/20 to-transparent rounded-full blur-3xl' />
    </div>
  )
}

export default SoftBackdrop