import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='z-[999] sticky top-0 left-0'>
      <div className='fixed top-0 left-1/2 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
        <nav className='flex h-full items-center justify-center'>
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className='flex items-center justify-center relative'>
                <Link href={link.href} className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header