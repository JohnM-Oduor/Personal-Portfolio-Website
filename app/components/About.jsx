import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    >
        <motion.h4 
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo mt-20'>
          Introduction</motion.h4>
        <motion.h2 
         initial={{opacity:0, y: -20}}
         whileInView={{opacity:1}}
         transition={{duration: 0.5, delay: 0.5}}
         className='text-center text-5xl font-Ovo'>
          About me</motion.h2>
        
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.8}}
            className='flex w-full flex-col lg:flex-row items-center  gap-20 my-20'
            >
            <motion.div 
             initial={{opacity:0, scale: 0.9}}
             whileInView={{opacity:1, scale: 1}}
             transition={{duration: 0.2}}
             className='w-64 sm:w-80 rounded-3xl max-w-none  mt-[-40 ] mb-[-30]'>
             <Image src={assets.user_image} alt='user' 
              className='w-80 rounded-3xl sm:mt-[-50] lg:mt-[-390] '/>
            </motion.div>

            <motion.div 
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               transition={{duration: 0.6, delay:0.8}}
               className='flex-1'>
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
                <motion.ul 
                   initial={{opacity:0}}
                   whileInView={{opacity:1}}
                   transition={{duration: 0.6, delay: 1}}
                
                className='grid grid-cols sm:grid-cols-3 gap-6
                 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index) => (
                 <motion.li 
                 initial={{opacity: 0}}
                 whileHover={{scale: 1.05}}
                 transition={{duration: 0.5, delay: index * 0.1}}
                 className='border-[0.5px] border-gray-400 
                  rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:translate-y-1 duration-500 hover:shadow-black'
                  key={index}>
                    <Image src={icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </motion.li>
                
                  ))}
                
                </motion.ul>

                 
                <motion.h4 
                   initial={{y: 20, opacity:0 }}
                   whileInView={{y: 0, opacity: 1}}
                   transition={{delay:1.3, duration: 0.6}}
                  className='my-6 text-gray-700 font-Ovo mt-[-220]'>Tools I use</motion.h4>
                  
                 <motion.ul 
                     initial={{ opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{delay:1.5, duration: 1.5 }}
                  className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool, index)=>(
                    <motion.li
                    whileInView={{opacity:1}}
                    className='flex items-center justify-center 
                    w-12 sm:w-14 aspect-square border border-gray-400
                    rounded-lg cursor-pointer hover:translate-y-1 
                    duration-500 hover:shadow-back'
                    key={index}>
                       <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </motion.li>
                  ))}
                </motion.ul>
                </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About