import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.phone === phone) {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
      
    }
    console.log({email},{phone});
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input  type="email"  className="form-control" id="email" 
            value={email}  onChange={(e) => setEmail(e.target.value)}  required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input   type="tel"  className="form-control" id="phone" 
            value={phone}  onChange={(e) => setPhone(e.target.value)}  required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
