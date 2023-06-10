import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import Home from './home'
import './registration.css'

const App = () => {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/home" element={<Home/>}/>
     </Routes>
     </div>
    </Router>
  );
};
export default App
