// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
