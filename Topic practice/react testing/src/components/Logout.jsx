import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handlesubmit=()=>{
    localStorage.removeItem('data');
    navigate("/Signup");



  }

  return (
    <div>
    <button onClick={handlesubmit}> logout

    </button>
      
    </div>
  )
}

export default Logout
