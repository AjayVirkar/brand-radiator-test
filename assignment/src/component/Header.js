import React from 'react';
import website_logo from '../images/brand-radiator-logo.png'
import hambuger_menu from '../images/hamburger-menu.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li><img src={website_logo} alt='website_logo'></img></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <div>
        <img className='hambuger_menu' src={hambuger_menu} alt="hambuger_menu_image" />
      </div>
    </header>
  );
};

export default Header;