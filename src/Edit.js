// Import necessary modules and resources
import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { ReactComponent as SaveIcon } from './images/save.svg';
import save from './images/save.png';
import { ReactComponent as BarIcon } from './images/barcode-scan.svg';

// Define the Edit component
const Edit = () => {
    // State to manage form inputs
    const [productname, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');

    // Handle changes in the product name input
    const handleProductChange = (e) => {
        setProduct(e.target.value);
    };

    // Handle changes in the quantity input
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    // Handle changes in the expiry date input
    const handleExpiryChange = (e) => {
        const inputDate = e.target.value;
        const formattedDate = formatDate(inputDate);
        setExpiry(formattedDate);
    };

    // Format the date in dd/mm/yyyy format
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product:', productname);
        console.log('Quantity:', quantity);
        console.log('Expiry:', expiry);
    };

    // Render the edit facts section
    const renderEditFacts = () => {
        return (
            <p className="edit-facts">
                Honey Bunches of Oats has a relatively low carbon footprint with 3.2 kg CO2-eq/kg of product. It is usually packaged in cardboard boxes and has a positive environmental impact.
            </p>
        );
    };

    return (
        <div className='edit'>
            <div className="head">
                <div className="head-text">Edit</div>
            </div>
            <div className="edit-cont">
                <p className="fact-head">Conscious Consumption</p>
                {renderEditFacts()}
                <form onSubmit={handleSubmit}>
                    {/* Input fields */}
                    <div>
                        <p className="field-name">Product Name</p>
                        <input
                            className="fields"
                            type="text"
                            id="productname"
                            value={productname}
                            onChange={handleProductChange}
                            placeholder='Milk'
                        />
                    </div>
                    <div>
                        <p className="field-name">Quantity</p>
                        <input
                            className="fields"
                            type="text"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            placeholder='1 Unit'
                        />
                    </div>
                    <div>
                        <p className="field-name">Expiry Date</p>
                        <input
                            className="fields"
                            type="date"
                            id="expiry"
                            value={expiry}
                            onChange={handleExpiryChange}
                            placeholder='Expiry Date'
                        />
                    </div>
                    {/* Buttons with routing links */}
                    <Link to="/barcode">
                        <button type="submit" className="scan-btn">
                            <BarIcon className="icon-edit" />
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="submit" className="btn">
                            <img src={save} alt="save" />
                        </button>
                    </Link>
                    <br />
                    {/* Go back link */}
                    <a href="/" className="signin-text">Go Back</a>
                </form>
            </div>
            <Footer />
        </div>
    );
};

// Export the Edit component
export default Edit;