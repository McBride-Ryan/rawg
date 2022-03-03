import React from 'react'
import logo from '../../src/assets/games.png'
import profile from '../../src/assets/avatar.jpg'

export default function Navbar() {
  return (
    <header className='border-b border-gray-50'>
      <nav className='container mx-auto flex items-center justify-between px-2 py-4'>
        <div className="flex items-center">
          <a href="www.google.com">
            <img src={logo} alt="logo" className='w-48 flex-none' />
          </a>
          <ul className="flex ml-16 space-x-8">
            <li>
              <a 
              href="/" 
              className="hover:text-gray-400">
                Games
              </a>
            </li>
            <li>
              <a 
              href="/" 
              className="hover:text-gray-400">
                Reviews
              </a>
            </li>
            <li>
              <a 
              href="/" 
              className="hover:text-gray-400">
                Coming Soon
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" className='bg-gray-800 text-sm rounded-full px-3 py-1' placeholder='Search...' />
            {/* add a search icon into the input field */}

          </div>
          <div className="ml-6">
            <a href="/"><img src={profile} alt="user_image" className='rounded-full w-12' /></a>
          </div>
        </div>
      </nav>
    </header>
  )
}
