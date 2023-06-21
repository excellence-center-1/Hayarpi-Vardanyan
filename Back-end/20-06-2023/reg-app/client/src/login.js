import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import profile from "../src/images/person-circle.svg";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login submitted');
  };
  return (
  <p class="round">
    <div className='container-image'>
      <img src={profile} alt='profile' className='profile'/>
    </div>
    <div class='login'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
          <input
            type="text" value={username} placeholder='UserName' onChange={handleUsernameChange}/>
        <br />
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange}/>
        <br />

        <div class="lgn-btn">
          <Link to='/home'>
            <button type="button">Login</button>
          </Link>
        </div>

        <div class="reg-btn">
          <Link to='/registration'>
            <h3>Register Now</h3>
          </Link>
        </div>
      </form>
    </div>
  </p>
  );
};

export default Login;

