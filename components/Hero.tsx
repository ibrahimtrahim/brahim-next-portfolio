import { SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Typingwrite from './Typingwrite'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center py-16 mt-20' id='home'>
      <Image src='/pic-1.png' alt='brahim trahim' width={150} height={150} className='rounded-full border-4 border-gray-400 dark:border-white'/>
      <p className='regular-18 mt-10 dark:text-white'>
        Hello! 👋 I’m:
      </p>
      <h1 className='mt-4 text-center bold-40 lg:bold-64 dark:text-white'>Brahim Trahim</h1>
      <span className='mt-4 text-green-50 regular-18'>
        <Typingwrite/>
      </span>
      <div className='flex flex-col gap-5 mt-4'>
        <ul className='regular-14 flex gap-6 text-gray-30'>
          {SOCIALS.links.map((link, index) => (
            <Link href={link.url} key={index} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} alt='social logo' width={32} height={32} className='grayscale hover:grayscale-0 transition duration-300' />
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-3 mt-10 mx-auto sm:flex-row'> 
        <Button
          type="button"
          title="Contact Me"
          variant="btn_green"
        />
        <Button
          type="button"
          title="How I Work"
          icon="/play.svg"
          variant="btn_white_text"
        />
      </div>
    </section>
  )
}

export default Hero;