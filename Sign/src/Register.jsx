import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '',phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Registration Successful');
    console.log("<<<<<<<<<<<<<<<<<<formData<<<<<<<<",formData)
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" 
            value={formData.name}  onChange={handleChange}  required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control"  id="email" name="email" 
            value={formData.email}  onChange={handleChange}  required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input  type="tel"  className="form-control"  id="phone"  name="phone" 
            value={formData.phone}  onChange={handleChange}  required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
