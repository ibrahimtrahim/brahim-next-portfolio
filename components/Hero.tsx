"use client";

import { SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';
import Typingwrite from './Typingwrite';
import { useSectionInView } from '@/constants/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <section ref={ref} className='flex flex-col justify-center items-center py-16 mt-20 scroll-mt-[60rem]' id='home'>
      <Image src='/pic-1.png' alt='brahim trahim' width={150} height={150} className={`rounded-full border-4 border-gray-400 ${isPopupVisible ? 'blur-sm' : ''}`}/>
      <p className='regular-18 mt-10 dark:text-white'>
        Hello! 👋 I’m:
      </p>
      <h1 className={`mt-4 text-center bold-40 lg:bold-64 dark:text-white ${isPopupVisible ? 'blur-sm' : ''}`}>Brahim Trahim</h1>
      <span className='mt-4 text-green-50 regular-18'>
        <Typingwrite/>
      </span>
      <div className={`flex flex-col gap-5 mt-4 ${isPopupVisible ? 'blur-sm' : ''}`}>
        <ul className='regular-14 flex gap-6 text-gray-30'>
          {SOCIALS.links.map((link, index) => (
            <Link href={link.url} key={index} target="_blank" rel="noopener noreferrer">
              <Image src={link.icon} alt='social logo' width={32} height={32} className='grayscale hover:grayscale-0 transition duration-300' />
            </Link>
          ))}
        </ul>
      </div>
      <div className={`flex flex-col gap-3 mt-10 mx-auto sm:flex-row ${isPopupVisible ? 'blur-sm' : ''}`}> 
        <Link href='#contact'>
          <Button
            type="button"
            title="Contact Me"
            variant="btn_green"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          />
        </Link>
        <Button
          type="button"
          title="What I'm Learning Nowadays"
          icon="/play.svg"
          variant="btn_white_text"
          onClick={() => setIsPopupVisible(true)}  // Show popup on click
        />
      </div>

      {isPopupVisible && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg sm:w-[350px] sm:min-w-[350px] sm:h-[350px] sm:min-h-[350px]'>
            <h2 className='bold-24 mb-4 text-center border-b-2'>What I'm Learning Nowadays</h2>
            <p className='regular-18 mb-6'>I'm currently focusing on learning <span className="font-medium">Node.js</span>, 
              advanced <span className="font-medium">React</span> concepts, and exploring <span className="font-medium">Next.js</span> for 
              building modern web applications.
            </p>
            <div className='flex justify-center'>
            <Button
              type="button"
              title="Close"
              variant="btn_green"
              onClick={() => setIsPopupVisible(false)}  // Hide popup on click
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero;