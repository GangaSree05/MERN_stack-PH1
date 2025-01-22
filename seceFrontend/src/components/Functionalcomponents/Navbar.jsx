import React from 'react'


const Navbar = () => {
 var styling={textDecoration:"underline",
  color:"blue",
  listStyletype:"none",
  textalign:"center",
 }
  return (
    <header>
    <nav>
      <ol>
        <li><link to='/' className="Link">Home</link></li>
        <li><link to='/about' className='Link'>About</link></li>
        <li><link to='/gallary' classname='Link'>Gallery</link></li>
        <li><link to ='/contact' classname='Link'>Contact</link></li>
        <li><link to='/signup' className='Link'>Signup</link></li>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar