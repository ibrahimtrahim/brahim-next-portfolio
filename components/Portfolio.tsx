"use client"


import ProjectCard from '@/components/ProjectCard'
import TitleSection from '@/components/TitleSection'
import { projects } from '@/constants'
import { useSectionInView } from '@/constants/hooks'
import React from 'react'

const Portfolio = () => {
  const { ref } = useSectionInView("Portfolio");

  return (
    <section ref={ref} className='max-container padding-containe py-16' id='portfolio'>
      <TitleSection title='My Portfolio' />
      <div className='flex justify-center flex-wrap gap-9 mt-20'>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
            linkText={project.linkText}
            languages={project.languages} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio