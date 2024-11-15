import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../../../assets/styles/header/header.css';
import logo from '../../../assets/images/icons/sycnow-logo.png'; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(true); 

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Cambia el tema
    document.body.classList.toggle('light-mode'); 
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <button className="theme-switch-button" onClick={toggleTheme}></button>
    </header>
  );
};

export default Header;
