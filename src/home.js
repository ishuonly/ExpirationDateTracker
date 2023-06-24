import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import reload from './images/reload.svg';
import apple from "./images/apple.png";
import sauce from "./images/sauce.png";
import cheese from "./images/cheese.png";

const Home = () => {
    const handleReload = () => {
        // Handle reload button click logic here
    };
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

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
    
    return (
        <div className='home-page'>
            <div className="head">
                <button className='reload-button' onClick={handleReload}>
                    <img src={reload} alt='Reload' />
                </button>
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
                <button className="item">
                    <div className="column icon"><img src={apple} alt="apple" /></div>
                    <div className="column item-text">
                        <p className="item-head">Apple</p>
                        <p className="item-subhead">Days until Expire: 1<br /> 2 units</p>
                    </div>
                    <div className="column track-text" style={{ color: getTrackTextColor(1) }}>{getTrackText(1)}</div>
                </button>
                <button className="item">
                    <div className="column icon"><img src={sauce} alt="sauce" /></div>
                    <div className="column item-text">
                        <p className="item-head">Sauce</p>
                        <p className="item-subhead">Days until Expire: 5<br /> 200 gm</p>
                    </div>
                    <div className="column track-text" style={{ color: getTrackTextColor(5) }}>{getTrackText(5)}</div>
                </button>
                <button className="item">
                    <div className="column icon"><img src={cheese} alt="cheese" /></div>
                    <div className="column item-text">
                        <p className="item-head">Cheese</p>
                        <p className="item-subhead">Days until Expire: 0<br /> 2 units</p>
                    </div>
                    <div className="column track-text" style={{ color: getTrackTextColor(0) }}>{getTrackText(0)}</div>
                </button>
            </div>
            <Footer />
        </div >
    );
};

export default Home;
