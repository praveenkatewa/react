import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();

  const signupdata = JSON.parse(localStorage.getItem('data'));

  const handleSubmit = (e) => {
    e.preventDefault()
   
    const logindata = {name,email,password };

if (signupdata.email === email && signupdata.password === password) {
     
      alert('Login successful!');
      navigate('/Done');
      
    } else {
      alert(' incorrect.');
    }
    

  };
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
            <div >
                <label>Name: </label>
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div >
                <label>Password: </label>
                <input type="password"value={password}   onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <button type="submit">Submit</button>
            </form>



      
    </div>
  )
}

export default Login
