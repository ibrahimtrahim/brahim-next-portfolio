import ProjectCard from '@/components/ProjectCard'
import TitleSection from '@/components/TitleSection'
import { projects } from '@/constants'
import React from 'react'

const Portfolio = () => {
  return (
    <section className='max-container padding-containe py-16'>
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