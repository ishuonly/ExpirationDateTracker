// Import necessary modules and resources
import React, { useState } from "react";
import "./App.css";
import home from "./images/home.png";
import settings from "./images/settings.svg";
import add from "./images/add.png";
import { Link } from "react-router-dom";

// Define the Footer component
const Footer = () => {
  // State to manage whether to show additional add options
  const [showOptions, setShowOptions] = useState(false);

  // Handle click on the add button
  const handleAddClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="footer">
      {/* Link to home */}
      {!showOptions && (
        <Link to="/">
          <button className="item-f">
            <div className="column1">
              <img src={home} alt="home" />
            </div>
          </button>
        </Link>
      )}
      {/* Button to show add options */}
      <button className="item-f add" onClick={handleAddClick}>
        <div className="column1">
          <img src={add} alt="add" />
        </div>
      </button>
      {showOptions && (
        <div className="add-options">
          {/* Display your add options here */}
          <Link to="/fresh" style={{ textDecoration: "none" }}>
            <button className="footer-link">Fresh Produce</button>
          </Link>
          <Link to="/barcode" style={{ textDecoration: "none" }}>
            <button className="footer-link">Packaged Food</button>
          </Link>
          <Link to="/receipt" style={{ textDecoration: "none" }}>
            <button className="footer-link">Receipt Scanner</button>
          </Link>
        </div>
      )}
      {/* Link to profile/settings */}
      {!showOptions && (
        <Link to="/profile">
          <button className="item-f">
            <div className="column1">
              <img src={settings} alt="settings" />
            </div>
          </button>
        </Link>
      )}
      {/* Display additional add options if showOptions is true */}
    </div>
  );
};

// Export the Footer component
export default Footer;
