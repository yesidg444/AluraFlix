// src/components/Navbar.js
import React from 'react';
import './Header.css';

const Header = ({ onButtonClick}) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./img/Header.png" alt="Logo" className="logo-image" />
      </div>
      <div className="buttons">
        <button className="inicio-button">INICIO</button>
        <button onClick={onButtonClick} className="nuevo-video-button">NUEVO VIDEO</button>
      </div>
    </div>
  );  
};

export default Header;

