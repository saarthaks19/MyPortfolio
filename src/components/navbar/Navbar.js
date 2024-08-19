import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="#about"><div className='item1'> About</div></a>
      <a href="#skills"><div className='item2'> Skills</div></a>
      <a href="#projects"><div className='item3'> Projects</div></a>
      <a href="#contact"><div className='item4'> Contact</div></a>
    </div>
  )
}

export default Navbar
