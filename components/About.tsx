"use client"

import React from 'react'
import TitleSection from './TitleSection'
import { motion } from "framer-motion";
import { useSectionInView } from '@/constants/hooks';

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <section ref={ref} className='max-container padding-containe' id='about'>
      <TitleSection title='About Me' />
      <motion.div className='flex items-center justify-center mx-auto max-w-[45rem] leading-8 text-center mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}>
        <p>
          After a career as a{" "}
          <span className="font-medium">physics teacher</span>, I decided to switch 
          to front-end development. I enrolled in a bootcamp where I learned {" "}
          <span className="font-medium">web development</span>. and gained a strong 
          foundation in{" "}<span className="font-medium">HTML, CSS, and JavaScript.</span>  
          My core set includes{" "}<span className="font-medium">React and Next.js</span>.
          I am also familiar with TypeScript and wordpress. My background as a teacher has improved my ability 
          to clearly communicate complex ideas, work effectively in a team, and solve problems 
          creatively. I always like to learn <span className="underline">new technologies</span> and expand my skills. 
          I am currently looking for a{" "}
          <span className="font-medium">full-time, remote or freelance position</span> as a web
          developer.
        </p>
      </motion.div>
    </section>
  )
}

export default About