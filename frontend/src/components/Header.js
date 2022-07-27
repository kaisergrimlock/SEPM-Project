import React from 'react'
import Navbar from './Navbar'
import PhoneNavbar from './PhoneNavbar'

function Header() {
  return (
    <header className='header w-full h-auto'>
       <Navbar />
       <PhoneNavbar />
    </header> 
  )
}

export default Header