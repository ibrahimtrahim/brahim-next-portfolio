import ProjectCard from '@/components/ProjectCard'
import TitleSection from '@/components/TitleSection'
import { projects } from '@/constants'
import React from 'react'

const Guide = () => {
  return (
    <section className='max-container padding-containe py-16'>
      <TitleSection title='My Portfolio' />
      <div className='flex justify-center flex-wrap gap-9'>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...projects} />
        ))}
      </div>
    </section>
  )
}

export default Guide