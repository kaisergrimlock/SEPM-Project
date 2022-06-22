import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header w-full h-auto'>
        <nav className='navbar flex justify-between text-lg py-5'>
            <div className='logo'>
                <Link to="/"><img src='' alt='logo'/></Link> 
            </div>

            <div className='menu'>
                <ul className='flex'>
                    <li className='mx-3'><Link to="/login" className='hover:text-blue-500'>Login</Link></li>
                    <li className='mx-3'><Link to="/register" className='hover:text-blue-500'>Register</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar