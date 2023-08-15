import React, { useState } from 'react';
import './App.css';
import home from "./images/home.png";
import settings from "./images/settings.svg";
import add from "./images/add.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleAddClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='footer'>
      <Link to="/">
        <button className="item-f">
          <div className="column1"><img src={home} alt="home" /></div>
        </button>
      </Link>
      <button className="item-f add" onClick={handleAddClick}>
        <div className="column1"><img src={add} alt="add" /></div>
      </button>
      <Link to="/profile">
        <button className="item-f">
          <div className="column1"><img src={settings} alt="settings" /></div>
        </button>
      </Link>
      {showOptions && (
        <div className="add-options">
          {/* Display your add options here */}
          <Link to="/fresh" style={{ textDecoration: 'none' }}>
            <button className="footer-link">Fresh Produce</button>
          </Link>
          <Link to="/barcode" style={{ textDecoration: 'none' }}>
            <button className="footer-link">Packaged Food</button>
          </Link>
          <Link to="/receipt" style={{ textDecoration: 'none' }}>
            <button className="footer-link">Receipt Scanner</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Footer;
