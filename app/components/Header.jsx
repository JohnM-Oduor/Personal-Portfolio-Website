import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
    <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 mt-10 font-Ovo'>
            Hi! I'm John Oduor <Image src={assets.hand_icon} alt='' 
            className=' w-6' /></h3>
     <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
         Frontend web developer.</h1>
        <p className='max-w-2xl mx-auto font-Ovo'> 
            I am a frontend developer from Nairobi, Kenya with 2 years of experience
            in designing multiple apps like Todo App.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2'
            >contact me <Image src={assets.right_arrow_white} alt='' 
             className='w-4' /></a>
              
          <a 
          href="/my-resume.pdf" 
         download 
         className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
         text-gray-700 hover:bg-lightHover hover:scale-105 active:scale-95 active:translate-y-[2px] 
         transition duration-200 ease-in-out'>
       
         my resume 
         <Image src={assets.download_icon} alt='download icon' className='w-4' />
       </a>

        </div>
    </div>
  )
}

export default Header