import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import reload from './images/reload.svg';
import apple from "./images/apple.png";
import salt from "./images/salt.png";
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
                    <div className="column item-text"><p className="item-head">Apple</p><p className="item-subhead">Days until Expire: 1</p></div>
                    <div className="column track-text">EAT<br/>NOW</div>
                </button>
                <button className="item">
                    <div className="column icon"><img src={salt} alt="salt" /></div>
                    <div className="column item-text"><p className="item-head">Salt</p><p className="item-subhead">Days until Expire: -</p></div>
                    <div className="column track-text">GOOD</div>
                </button>
                <button className="item">
                    <div className="column icon"><img src={cheese} alt="cheese" /></div>
                    <div className="column item-text"><p className="item-head">Cheese</p><p className="item-subhead">Days until Expire: 0</p></div>
                    <div className="column track-text">EXPIRED</div>
                </button>  
             
            </div>
            <Footer />
        </div >
    );
};

export default Home;
