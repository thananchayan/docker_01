import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navcontainer'>
            <span className='logo'>Booking App</span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}
