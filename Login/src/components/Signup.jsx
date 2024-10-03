// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [signupData, setSignupData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, password } = signupData;

    if (username && password) {
      // Store the user data in localStorage
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500); // Redirect to login after 1.5 seconds
    } else {
      setMessage('Please fill in both fields.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={signupData.username}
          onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
}

export default Signup;
