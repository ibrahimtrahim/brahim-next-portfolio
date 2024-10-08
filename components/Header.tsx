"use client"

import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React  from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context'

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className='z-[999] sticky top-0 left-0'>
      <motion.div 
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{y: -100, x: "-50%", opacity: 0}}
        animate={{y: 0, x: "-50%", opacity: 1}}
        >
        <nav className='flex h-full items-center justify-center'>
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className='flex items-center justify-center relative'>
                <Link href={link.href} onClick={() => setActiveSection(link.label)} className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",{
                  "text-gray-950" : activeSection === link.label, 
                })}>
                  {link.label}

                  {link.label === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}

export default Header