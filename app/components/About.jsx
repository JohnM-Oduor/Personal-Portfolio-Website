import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>
          About me</h2>
        
            <div className='flex w-full flex-col lg:flex-row items-center
            gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none  mt-[-40 ] mb-[-30]'>
             <Image src={assets.user_image} alt='user' 
              className='w-80 rounded-3xl sm:mt-[-50] lg:mt-[-390] '/>
            </div>

            <div className='flex-1'>
              <p className='mb-10 max-w-2xl font-Ovo'>I am a passionate and creative individual with a strong talent for both technology and music. 
                I have expertise in front-end development, including HTML, CSS, JavaScript, and React, 
                allowing me to build visually appealing and responsive web applications.
                 At the same time, I am deeply dedicated to music and proficient in playing multiple instruments, 
                 including the double bass, which has helped me develop discipline, creativity, and adaptability.
                 Additionally, I have skills in graphic design using Adobe Illustrator, enabling me to create 
                 visually compelling designs. 
                My unique combination of technical and artistic skills enables me to approach problems with 
                innovation and precision. 
                I am always eager to learn, grow, and refine my abilities to excel in coding, musical expression, and design.
                </p>
                <ul className='grid grid-cols sm:grid-cols-3 gap-6
                 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index) => (
                  <li className='border-[0.5px] border-gray-400 
                  rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:translate-y-1 duration-500 hover:shadow-black'
                  key={index}>
                    <Image src={icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
                
                  ))}
                
                </ul>
                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center 
                    w-12 sm:w-14 aspect-square border border-gray-400
                    rounded-lg cursor-pointer hover:translate-y-1 
                    duration-500 hover:shadow-back'
                    key={index}>
                        

                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                  ))}
                </ul>
                </div>
        </div>
    </div>
  )
}

export default About