import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


 // Generate options for days
 const generateDayOptions = () => {
  const days = [];
  for (let day = 1; day <= 31; day++) {
    days.push(<option key={day} value={day}>{day}</option>);
  }
  return days;
};

// Generate options for months
const generateMonthOptions = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months.map((month, index) => (
    <option key={index} value={month}>{month}</option>
  ));
};

// Generate options for years
const generateYearOptions = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1960; year--) {
    years.push(<option key={year} value={year}>{year}</option>);
  }
  return years;
};

const handleRegistration = (event) => {
  event.preventDefault();
  console.log('Registration submitted');
};

return (
  <p className="round">
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegistration}>
        <input type="text" placeholder="UserName" value={username} onChange={handleUsernameChange} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <br />
        <label>Birthday</label><br />
        <select>
          {generateDayOptions()}
        </select>
        <select>
          {generateMonthOptions()}
        </select>
        <select>
          {generateYearOptions()}
        </select>
        <br />
        <br />
        <p>I am:</p>
        <input type="radio" name="person" value="male" />
        <label htmlFor="male">Male</label><br/>
        <input type="radio" name="person" value="female" />
        <label htmlFor="female">Female</label><br/>
        <Link to="/login">
          <button type="submit">Register</button>
        </Link>
      </form>
    </div>
  </p>
);
};

export default Registration;



