"use client"
import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <section className='max-container padding-containe py-16' id='contact'>
      <TitleSection title='Contact Me' />
      
      <motion.div 
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg dark:shadow-gray-400"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >
        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <span className="underline">email</span> instead.
            </div>
          </div>
          <div className='flex justify-center items-center m-auto'>
            <Image 
              src='/contact.png'
              alt='contact'
              width={500}
              height={500}
              />
          </div>
        </div>
        <form action="https://formspree.io/f/xldrpgkl" method='POST'>
          <div>
            <label htmlFor="full-name" className="uppercase text-sm text-gray-600 font-bold">Full Name</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" id="full-name" name="full-name" placeholder="" required />
          </div>
          <div className="mt-8">
            <label htmlFor="email" className="uppercase text-sm text-gray-600 font-bold">Email</label>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
               id="email" type="email" name="email" required />
          </div>
          <div className="mt-8">
            <label htmlFor="message" className="uppercase text-sm text-gray-600 font-bold">Message</label>
            <textarea id="message" name="message"
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-green-50 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>

    </section>
  )
}

export default Contact