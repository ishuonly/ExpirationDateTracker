import React, { useState } from 'react';
import './App.css';
import camera from './images/camera.svg';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="tab-bar">
            <div className="tab-bar-head">
            <div
                className={`tab ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
            >
                Image
            </div>
            <div
                className={`tab ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
            >
                Text
            </div>
            <div
                className={`tab ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
            >
                PDF
            </div>
            </div>
            <div className="tab-content">
                {activeTab === 1 && <div>
                    <p className="bar-head">Upload Image</p>
                    <form onSubmit={handleSubmit}>
                        <button className="camera">
                            <img src={camera} alt="camera" />
                        </button><br />
                        <button type="submit" className="save-btn">UPLOAD</button><br />
                        <a href="/edit" className="signin-text">Go Back</a>
                    </form></div>}
                {activeTab === 2 && <div>
                    <p className="bar-head">Paste Text</p>
                    <form onSubmit={handleSubmit}>
                        <button className="camera">
                            <img src={camera} alt="camera" />
                        </button><br />
                        <button type="submit" className="save-btn">UPLOAD</button><br />
                        <a href="/edit" className="signin-text">Go Back</a>
                    </form></div>}
                {activeTab === 3 && <div>
                    <p className="bar-head">Upload PDF</p>
                    <form onSubmit={handleSubmit}>
                        <button className="camera">
                            <img src={camera} alt="camera" />
                        </button><br />
                        <button type="submit" className="save-btn">UPLOAD</button><br />
                        <a href="/edit" className="signin-text">Go Back</a>
                    </form></div>}
            </div>
        </div>
    );
};

export default TabBar;
