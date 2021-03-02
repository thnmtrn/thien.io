import { useState } from 'react'
import Link from './Link'
import mobileNavLinks from '@/data/mobileNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              d="M153.6,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067
              v-17.067C170.667,110.041,163.026,102.4,153.6,102.4z"
            />,
            <path
              d="M238.933,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067S256,145.959,256,136.533
              v-17.067C256,110.041,248.359,102.4,238.933,102.4z"
            />,
            <path
              d="M324.267,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067
              c9.426,0,17.067-7.641,17.067-17.067v-17.067C341.333,110.041,333.692,102.4,324.267,102.4z"
            />

          ) : (
            <path
              d="M153.6,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067
              v-17.067C170.667,110.041,163.026,102.4,153.6,102.4z"
            />,
            <path
              d="M238.933,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067S256,145.959,256,136.533
              v-17.067C256,110.041,248.359,102.4,238.933,102.4z"
            />,
            <path
              d="M324.267,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067
              c9.426,0,17.067-7.641,17.067-17.067v-17.067C341.333,110.041,333.692,102.4,324.267,102.4z"
            />

          )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-screen top-24 right-0 bg-gray-200 dark:bg-gray-900 opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {mobileNavLinks.map((link) => (
            <div key={link.title} className="flex flex-col float-right p-2 pr-10 py-4 mr-10">
              <Link
                href={link.href}
                className="text-xl font-bold tracking-normal leading-none text-gray-900 dark:text-gray-100 float-right pl-72 hover:text-cyan-400 dark:hover:text-cyan-400"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
