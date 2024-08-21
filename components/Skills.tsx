"use client"
import React from 'react'
import TitleSection from './TitleSection'
import CercleSkills from './CercleSkills'
import { motion } from 'framer-motion'


import { webDevIcons, uiUxIcons, toolsIcons } from '@/constants'

const Skills = () => {
  return (
    <section className='max-container padding-containe py-16' id='skills'>
      <TitleSection title='My Skills' />
      <motion.div className='mt-12 flex flex-wrap justify-around items-center gap-8' initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12 dark:text-white'>UI/UX Design</h2>
          <CercleSkills icons={uiUxIcons} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12 dark:text-white'>Web Development</h2>
          <CercleSkills  icons={webDevIcons} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12 dark:text-white'>Tools & Platforms</h2>
          <CercleSkills icons={toolsIcons} />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills