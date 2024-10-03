import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

export default function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="mb-3">
          <Link to="/" className="btn btn-primary me-2">Register</Link> <br/> <br/>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

