import React, { useState } from 'react';
import website_logo from '../images/brand-radiator-logo.png'
import hambuger_menu from '../images/hamburger-menu.png'
import { Link } from "react-router-dom";

const Header = () => {
  const [styles, setStyles] = useState("false");

  const handleMenuClick = () => {
    setStyles(!styles);
  };
  const closeMenuBar = () => {
    setStyles(!styles);
  };

  return (
    <>
      <div className="header-container">
        <nav>
          <ul>
            <Link to="/"><img src={website_logo} alt='website_logo'></img></Link>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div>
          <div className='login-navbar'><Link to="/login">Login</Link></div>
          <img onClick={handleMenuClick} className='hambuger_menu' src={hambuger_menu} alt="hambuger_menu_image" />
        </div>
      </div>
      <div className={styles ? "hide-popup" : "show-popup"}>
        <div className='hamburger-menu_data'>
          <Link to="/login" onClick={closeMenuBar}>Login</Link>
          <Link to="/" onClick={closeMenuBar}>Home</Link>
          <Link to="/about" onClick={closeMenuBar}>About Us</Link>
          <Link to="/contact" onClick={closeMenuBar}>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Header;