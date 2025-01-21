import React from 'react'
import "../../css/Nav.css";

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
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar