import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from '../menu/Menu'

export const Navbar = () => {
  return (
    <nav
      className="navbar flex justify-between text-lg py-0 fixed w-full duration-300 bg-darkBlue items-center font-avenir"
      id="desktop-navbar"
    >
      <div className="logo px-5">
        <Link to="/" className="font-semibold text-5xl text-white">
          RaD
        </Link>
      </div>

      <Menu />
    </nav>
  )
}
