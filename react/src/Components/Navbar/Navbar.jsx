import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState , useEffect } from 'react'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });

    },[])

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className = {`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className= "logo" alt="" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>Project</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li> <button className = "btn">Contact us</button></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
