// Import necessary modules and components
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './SignupPage';
import Signin from './SigninPage';
import Home from './home';
import Edit from './Edit';
import Barcode from './Barcode';
import Fresh from './Fresh';
import Profile from './Profile';
import Receipt from './Receipt';

// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Set up routing with BrowserRouter */}
      <BrowserRouter>
        {/* Navigation links */}
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/barcode">Barcode</Link>
        <Link to="/fresh">Fresh</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/receipt">Receipt</Link>

        {/* Define routes */}
        <Routes>
          {/* Route for the index */}
          <Route index element={<Home />} />
          {/* Other routes */}
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="edit" element={<Edit />} />
          <Route path="barcode" element={<Barcode />} />
          <Route path="fresh" element={<Fresh />} />
          <Route path="profile" element={<Profile />} />
          <Route path="receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
      {/* Footer component */}
      {/* <Footer /> */}
    </div>
  );
}

// Export the App component
export default App;