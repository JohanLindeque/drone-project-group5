import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      {/* NAv will Display on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>

      <Footer />
   
      
    </div>
  );
}

export default App;
