// Import necessary modules and resources
import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import delete1 from "./images/delete2.png";
import reload from "./images/reload.svg";
import apple from "./images/apple.png";
import sauce from "./images/sauce.png";
import cheese from "./images/cheese.png";
import { Link } from "react-router-dom";

// Define the Home component
const Home = () => {
  // Function to handle reload button click
  const handleReload = () => {
    // Handle reload button click logic here
  };

  // Get current date in a specific format
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Sample data for items
  const items = [
    { name: "Apple", daysUntilExpire: 1, units: 2, icon: apple },
    { name: "Sauce", daysUntilExpire: 5, units: 200, icon: sauce },
    { name: "Cheese", daysUntilExpire: 0, units: 2, icon: cheese },
  ];

  // Variables to calculate progress
  const daysCloser = 5;
  const totalDays = 7;
  const progress = (daysCloser / totalDays) * 100;

  // Function to get track text based on days until expire
  const getTrackText = (daysUntilExpire) => {
    // Define track text based on different conditions
    // You might need to adjust these conditions according to your requirements
    if (daysUntilExpire === 1) {
      return "EAT NOW";
    } else if (daysUntilExpire === 0) {
      return "EXPIRED";
    } else if (daysUntilExpire <= 3) {
      return "OKAY";
    } else if (daysUntilExpire > 3 || daysUntilExpire === null) {
      return "GOOD";
    }
  };

  // Function to get track text color based on days until expire
  const getTrackTextColor = (daysUntilExpire) => {
    // Define track text color based on different conditions
    // You might need to adjust these conditions according to your requirements
    if (daysUntilExpire === 1) {
      return "orange";
    } else if (daysUntilExpire === 0) {
      return "red";
    } else if (daysUntilExpire <= 3) {
      return "yellow";
    } else if (daysUntilExpire > 3 || daysUntilExpire === null) {
      return "green";
    }
  };

  // Function to handle delete button click
  const handleDelete = (index) => {
    // Implement delete logic here using the index
    console.log("Delete item at index:", index);
  };

  return (
    <div className="home-page">
      <div className="home-head">
        {/* Reload button */}
        <div className="home-head-left">
          {/* Current date */}
          <div className="date">{currentDate}</div>

          {/* Progress bar */}
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={daysCloser}
              aria-valuemin="0"
              aria-valuemax={totalDays}
            ></div>
          </div>
          <p className="progress-text">{daysCloser} days closer to your goal</p>
        </div>
        <div className="home-head-right">
          <Link
            className="home-head-right-link"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <button className="reload-button" onClick={handleReload}>
              <img src={reload} alt="Reload" />
            </button>
          </Link>
        </div>
      </div>
      <div className="content">
        {/* Map through items and render */}
        {items.map((item, index) => (
          <div key={index}>
            {/* Link to edit page */}
            <Link
              to="/edit"
              className="item-link"
              style={{ textDecoration: "none" }}
            >
              <button className="item">
                <div className="column icon">
                  <img src={item.icon} alt={item.name} className="icon-items" />
                </div>
                <div className="column item-text">
                  <p className="item-head">{item.name}</p>
                  <p className="item-subhead">
                    Days until Expire: {item.daysUntilExpire}
                    <br /> {item.units} units
                  </p>
                </div>
                <div
                  className="column track-text"
                  style={{ color: getTrackTextColor(item.daysUntilExpire) }}
                >
                  {getTrackText(item.daysUntilExpire)}
                  <br />
                </div>
                <div>
                <button className="delete" onClick={() => handleDelete(index)}>
                  <img src={delete1} alt="delete1" className="delete-icon" />
                </button>
                </div>
                
              </button>
            </Link>
            {/* Delete button */}
          </div>
        ))}
      </div>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

// Export the Home component
export default Home;
