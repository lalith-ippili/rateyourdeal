import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [Click ,SetClick]=useState(false)
const handleClick=()=>{
  SetClick(!Click)
}

const [color,setcolor]=useState(false)
const handleColor=()=>{
  if(window.scrollY>=230){
    setcolor(true)
  }
  else{
    setcolor(false)
  }
}
window.addEventListener("scroll",handleColor)
  return (
    <nav className={color?"color":""}>
      <div className='Logo'>
       <img src='https://i.pinimg.com/736x/3e/15/92/3e15927908d138e06a18bf3e0e82cddf.jpg' className='Navbar-logo-image'/>
      </div>
      <div className={Click?"Menu active":"Menu"}>
        <Link to="/rateyourdeal">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Priceing">Price</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div className='hamburger' onClick={handleClick}>
       
        {
          Click ?  <FaTimes style={{ color: "white" }} size={25} />: <FaBars style={{ color: "white" }} size={25} />
        }
      </div>
    </nav>
  )
}

export default Navbar
