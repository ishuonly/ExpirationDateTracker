import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import camera from './images/camera.svg';

const Barcode = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
    };

    const handleCameraClick = () => {
        setShowOptions(true);
    };

    const handleOptionClick = (option) => {
        if (option === 'Use Mobile Camera') {
            document.getElementById('camera-input').click();
        } else if (option === 'Upload from Device') {
            document.getElementById('upload-input').click();
        }
    };

    const handleImageCapture = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setCapturedImage(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setCapturedImage(event.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='barcode'>
            <div className="head">
                <div className="head-text">Bar Code</div>
            </div>
            <div className="bar-cont">
                <p className="bar-head">Scan Your Bar Code</p>
                <form onSubmit={handleSubmit}>
                    <button className="camera" onClick={handleCameraClick}>
                        {capturedImage ? (
                            <img src={capturedImage} alt="captured" style={{ height: '100%' }} />
                        ) : (
                            <img src={camera} alt="camera" />
                        )}
                    </button><br />
                    {showOptions && (
                        <div className="options-container">
                            <button
                                className="option-btn"
                                onClick={() => handleOptionClick('Use Mobile Camera')}
                            >
                                Use Mobile Camera
                            </button>
                            <button
                                className="option-btn"
                                onClick={() => handleOptionClick('Upload from Device')}
                            >
                                Upload from Device
                            </button>
                        </div>
                    )}
                    <input
                        id="camera-input"
                        type="file"
                        accept="image/*"
                        capture="camera"
                        style={{ display: 'none' }}
                        onChange={handleImageCapture}
                    />
                    <input
                        id="upload-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                    <button type="submit" className="alt-btn">UPLOAD</button><br />
                    <a href="/edit" className="signin-text">Go Back</a>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Barcode;
