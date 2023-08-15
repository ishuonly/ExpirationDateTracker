import React, { useState } from 'react';
import './App.css';

const SigninPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='signup-page'>
      <h1 className="signup">Sign In</h1>
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
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        </div>
        <button type="submit" className="signup-btn">SIGN IN</button>
      </form>
      <p className="already">
        Don't have an account?<br/> <a href="/signup"  className="signin-text">Sign Up</a>
      </p>
    </div>
  );
};

export default SigninPage;
