import React from 'react'
import { DisplaySvg } from '../displaySvg/DisplaySvg'
import { Navbar } from '../navbar/Navbar'
import { PhoneNavbar } from '../navbar/PhoneNavbar'
import advertisement from "../../assets/svg/advertisement.svg"
export const Header = () => {
  return (
    <>
      <header className='md:hidden block'>
        <PhoneNavbar />
        <DisplaySvg children={advertisement} note="undefined"/>
      </header>  

      <header className='hidden md:block'>
        <Navbar />
        <DisplaySvg children={advertisement} note="undefined"/>
      </header>
    </>
  )
}
