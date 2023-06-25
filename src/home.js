import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import delete1 from "./images/delete2.png";
import reload from './images/reload.svg';
import apple from "./images/apple.png";
import sauce from "./images/sauce.png";
import cheese from "./images/cheese.png";
import { Link } from 'react-router-dom';

const Home = () => {
    const handleReload = () => {
        // Handle reload button click logic here
    };
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const items = [
        { name: "Apple", daysUntilExpire: 1, units: 2, icon: apple },
        { name: "Sauce", daysUntilExpire: 5, units: 200, icon: sauce },
        { name: "Cheese", daysUntilExpire: 0, units: 2, icon: cheese }
    ];

    const daysCloser = 5;
    const totalDays = 7;

    const progress = ((daysCloser) / totalDays) * 100;

    const getTrackText = (daysUntilExpire) => {
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

    const getTrackTextColor = (daysUntilExpire) => {
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

    const handleDelete = (index) => {
        // Handle delete button click logic here
        console.log("Delete item at index:", index);
    };

    return (
        <div className='home-page'>
            <div className="head">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='reload-button' onClick={handleReload}>
                        <img src={reload} alt='Reload' />
                    </button>
                </Link>

                <div className="date">{currentDate}</div>
                <div className='progress'>
                    <div
                        className='progress-bar'
                        role='progressbar'
                        style={{ width: `${progress}%` }}
                        aria-valuenow={daysCloser}
                        aria-valuemin='0'
                        aria-valuemax={totalDays}
                    ></div>
                </div>
                <p className='progress-text'>{daysCloser} days closer to your goal</p>
            </div>
            <div className="content">
                {items.map((item, index) => (
                    <div key={index}>
                        <Link to="/edit" className='item-link' style={{ textDecoration: 'none' }}>
                            <button className="item">
                                <div className="column icon"><img src={item.icon} alt={item.name} className='icon-items' /></div>
                                <div className="column item-text">
                                    <p className="item-head">{item.name}</p>
                                    <p className="item-subhead">Days until Expire: {item.daysUntilExpire}<br /> {item.units} units</p>
                                </div>
                                <div className="column track-text" style={{ color: getTrackTextColor(item.daysUntilExpire) }}>
                                    {getTrackText(item.daysUntilExpire)}<br />
                                </div>
                            </button>
                        </Link>
                        <button className="delete" onClick={() => handleDelete(index)}><img src={delete1} alt="delete1" className="delete-icon" /></button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
