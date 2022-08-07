import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { DisplaySvg } from '../displaySvg/DisplaySvg'
import { Menu } from '../menu/Menu'
import logo from "../../assets/svg/logo.svg"
export const Navbar = (props) => {
  const {handleCollaboration} = props
 
  const[isScrolled, setIsScrolled] = useState(false)

  window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
      setIsScrolled(true)
    } else{
      setIsScrolled(false)
    }
  })

  return (
    <nav
      className={`navbar flex justify-between text-lg py-3 fixed w-full duration-300  items-center font-avenir ${isScrolled ? "bg-lightGray" : "bg-none"}`}
      id="desktop-navbar"
    >
      <div className="logo px-5">
        <Link to="/" >
          <DisplaySvg children={logo} note="logo"/>
        </Link>
      </div>

      <Menu isScrolled={isScrolled} handleCollaboration={handleCollaboration}/>
    </nav>
  )
}
