// Import necessary modules and resources
import React, { useState } from 'react';
import './App.css';

// Define the SignupPage component
const SignupPage = () => {
  // Initialize state variables for username, email, and password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='signup-page'>
      {/* Sign Up header */}
      <h1 className="signup">Sign Up</h1>
      {/* Sign Up form */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* Username input */}
          <input className="fields"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Username'
          />
        </div>
        <div>
          {/* Email input */}
          <input className="fields"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email ID'
          />
        </div>
        <div>
          {/* Password input */}
          <input className="fields"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        {/* Sign Up button */}
        <button type="submit" className="signup-btn">SIGN UP</button>
      </form>
      {/* Sign In link */}
      <p className="already">
        Already have an account?<br/> <a href="/signin" className="signin-text">Sign In</a>
      </p>
    </div>
  );
};

// Export the SignupPage component
export default SignupPage;