import React from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Signup from './SignupPage';
import Signin from './SigninPage';
import Home from './home';
import Edit from './Edit';
import Barcode from './Barcode';
import Fresh from './Fresh';
import Profile from './Profile';
import Receipt from './Receipt';


function App() {
  return (
    <div className="App">   
    <BrowserRouter>
      <Link to="/">{Home}</Link>
      <Link to="/home">{Home}</Link>
      <Link to="/signup">{Signup}</Link>
      <Link to="/signin">{Signin}</Link>
      <Link to="/edit">{Edit}</Link>
      <Link to="/fresh">{Fresh}</Link>
      <Link to="/barcode">{Barcode}</Link>
      <Link to="/profile">{Profile}</Link>
      <Link to="/receipt">{Receipt}</Link>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element ={<Home />} /> 
        <Route path="signup" element ={<Signup />} /> 
        <Route path="signin" element ={<Signin />} />
        <Route path="edit" element ={<Edit />} />
        <Route path="barcode" element ={<Barcode />} />
        <Route path="fresh" element ={<Fresh />} />
        <Route path="profile" element ={<Profile />} />
        <Route path="receipt" element ={<Receipt />} /> 
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </div>
  );
}

export default App;