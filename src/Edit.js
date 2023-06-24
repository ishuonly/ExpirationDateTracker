import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Edit = () => {
    const [productname, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleExpiryChange = (e) => {
        const inputDate = e.target.value;
        const formattedDate = formatDate(inputDate);
        setExpiry(formattedDate);
    };

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product:', productname);
        console.log('Quantity:', quantity);
        console.log('Expiry:', expiry);
    };
    return (
        <div className='edit'>
            <div className="head">
                <div className="head-text">Edit</div>
            </div>
            <div className="edit-cont">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className="field-name">Product Name</p>
                        <input className="fields"
                            type="text"
                            id="productname"
                            value={productname}
                            onChange={handleProductChange}
                            placeholder='Milk'
                        />
                    </div>
                    <div>
                        <p className="field-name">Quantity</p>
                        <input className="fields"
                            type="text"
                            id="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            placeholder='1 Unit'
                        />
                    </div>
                    <div>
                        <p className="field-name">Expiry Date</p>
                        <input className="fields"
                            type="date"
                            id="expiry"
                            value={expiry}
                            onChange={handleExpiryChange}
                            placeholder='Expiry Date'
                        />
                    </div>
                    <Link to="/barcode">
                        <button type="submit" className="scan-btn">Scan Barcode</button>
                    </Link>
                    <button type="submit" className="save-btn">SAVE</button><br />
                    <a href="/home" className="signin-text">Go Back</a>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Edit;
