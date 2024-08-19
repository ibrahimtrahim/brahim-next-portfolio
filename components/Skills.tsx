import React from 'react'
import TitleSection from './TitleSection'
import CercleSkills from './CercleSkills'

import { webDevIcons, uiUxIcons, toolsIcons } from '@/constants'

const Skills = () => {
  return (
    <section className='max-container padding-containe py-16'>
      <TitleSection title='My Skills' />
      <div className='mt-12 flex flex-wrap justify-around items-center gap-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12'>UI/UX Design</h2>
          <CercleSkills icons={uiUxIcons} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12'>Web Development</h2>
          <CercleSkills  icons={webDevIcons} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-center bold-16 lg:bold-18 mt-8 mb-12'>Tools & Platforms</h2>
          <CercleSkills icons={toolsIcons} />
        </div>
      </div>
    </section>
  )
}

export default Skills