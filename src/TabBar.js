// Import necessary modules and resources
import React, { useState } from 'react';
import './App.css';
import camera from './images/camera.svg';

// Define the TabBar component
const TabBar = () => {
    // Initialize state variables
    const [activeTab, setActiveTab] = useState(1);
    const [showOptions, setShowOptions] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // Event handler for tab click
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic based on the selected tab
        // This example demonstrates handling an image upload
        if (selectedFile) {
            // Perform fetch and upload logic here
        }
    };

    // Event handler for camera button click
    const handleCameraClick = () => {
        setShowOptions(true);
    };

    // Event handler for option button click
    const handleOptionClick = (option) => {
        if (option === 'Use Mobile Camera') {
            document.getElementById('camera-input').click();
        } else if (option === 'Upload from Device') {
            document.getElementById('upload-input').click();
        }
    };

    // Event handler for image capture
    const handleImageCapture = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setCapturedImage(event.target.result);
        };

        reader.readAsDataURL(file);
        setSelectedFile(file); // Set the selected file here
    };

    // Event handler for image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            setCapturedImage(event.target.result);
        };

        reader.readAsDataURL(file);
        setSelectedFile(file); // Set the selected file here
    };

    return (
        <div className="tab-bar">
            {/* Tab bar header */}
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
            {/* Tab content */}
            <div className="tab-content">
                {activeTab === 1 && <div>
                    {/* Image upload form */}
                    {/* ... */}
                </div>}
                {activeTab === 2 && <div>
                    {/* Text paste form */}
                    {/* ... */}
                </div>}
                {activeTab === 3 && <div>
                    {/* PDF upload form */}
                    {/* ... */}
                </div>}
            </div>
        </div>
    );
};

// Export the TabBar component
export default TabBar;