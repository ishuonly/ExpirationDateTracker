import React, { useState } from 'react';
import './App.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='signup-page'>
      <h1 className="signup">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="fields"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder='Username'
          />
        </div>
        <div>
          <input className="fields"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email ID'
          />
        </div>
        <div>
          <input className="fields"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        <button type="submit" className="signup-btn">SIGN UP</button>
      </form>
      <p className="already">
        Already have an account?<br/> <a href="/signin"  className="signin-text">Sign In</a>
      </p>
    </div>
  );
};

export default SignupPage;
