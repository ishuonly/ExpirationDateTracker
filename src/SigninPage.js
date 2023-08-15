// Import necessary modules and resources
import React, { useState } from 'react';
import './App.css';

// Define the SigninPage component
const SigninPage = () => {
  // Initialize state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='signup-page'>
      {/* Sign In header */}
      <h1 className="signup">Sign In</h1>
      {/* Sign In form */}
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
          {/* Password input */}
          <input className="fields"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        {/* Sign In button */}
        <button type="submit" className="signup-btn">SIGN IN</button>
      </form>
      {/* Sign Up link */}
      <p className="already">
        Don't have an account?<br/> <a href="/signup" className="signin-text">Sign Up</a>
      </p>
    </div>
  );
};

// Export the SigninPage component
export default SigninPage;