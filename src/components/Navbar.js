import React from 'react'
import worldIcon from "./world-icon.png"
const Navbar = () => {
  return (
    <div className='navbar'>
       <img src = {worldIcon}  alt=''/>
       <h1 className='nav-heading'>my travel journal.</h1>
    </div>
  )
}

export default Navbar