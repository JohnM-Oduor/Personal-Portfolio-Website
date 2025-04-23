import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          oduorjohn104@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2024 John Oduor. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              href='https://github.com/JohnM-Oduor?tab=repositories'
              className='flex items-center gap-2 hover:text-blue-400 transition-colors'
            >
              <FaGithub className='text-xl' />
              Github
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://app.netlify.com/teams/oduorjohn104/sites'
              className='flex items-center gap-2 hover:text-green-400 transition-colors'
            >
              <BiLogoNetlify className='text-xl' />
              Netlify
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
