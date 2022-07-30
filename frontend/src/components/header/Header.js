import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { PhoneNavbar } from '../navbar/PhoneNavbar'

export const Header = () => {
  return (
    <>
      <header className='sm:hidden'>
        <PhoneNavbar />
      </header>  

      <header className='hidden sm:block'>
        <Navbar />
      </header>
    </>
  )
}
