import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import {Link} from 'react-scroll'
import message from '../../assets/message.png'
import menu from '../../assets/menu.png'


function Navbar() {
  const[showMenu,setshowMenu]=useState(false);
  return (
    
    <nav className="Navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItems" >Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItems">Skills</Link>
            <Link  activeClass='active' to='Work' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItems">Portfolio</Link>
            <Link  activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItems">Contact</Link>
            
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={message} alt="" className='desktopMenuImg' />
            Contact Me
        </button>
        <img src={menu} alt="menu" className='mobmenu' onClick={()=>setshowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItems"  onClick={()=>setshowMenu(false)} >Home</Link>
            <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}className="ListItems" onClick={()=>setshowMenu(false)} >Skills</Link>
            <Link  activeClass='active' to='Work' spy={true} smooth={true} offset={-100} duration={500}className="ListItems" onClick={()=>setshowMenu(false)} >Portfolio</Link>
            <Link  activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500}className="ListItems" onClick={()=>setshowMenu(false)} >Contact</Link>
            
        </div>
    </nav>
  )
}

export default Navbar
