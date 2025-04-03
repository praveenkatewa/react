import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [gender, setGender] = useState("");
  const[role,setRole]=useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Signup');

 
    
    const data = {name,email,password,gender,role };
    

localStorage.setItem("data", JSON.stringify(data));
console.log(data);
navigate('/Login');

      

    };

  return (
    <div>
      
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

            <div>
                <label>Gender: </label>
                <input type="radio" name="gender" value="Male"  checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}  /> Male
                <input  type="radio" name="gender" value="Female" checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)} /> Female
            </div>

            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Signup
