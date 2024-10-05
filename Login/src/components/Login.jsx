
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

  
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setMessage('Login successful! Redirecting to the dashboard...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500); 
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          required
        />
        <button type="submit">Log In</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
