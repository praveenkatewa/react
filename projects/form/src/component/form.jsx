
import { useState } from "react";

function Form(){
 const [formData,seFormData]= useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  interests: [],
  birthDate: "",
   

 });
  const handleSubmit=()=>{};

  return <form onSubmit={handleSubmit}>
  
<div>
<label>First Name:</label>
  <input
  type="text" 
  name="firstName" 
  value={formData.firstName}
   placeholder="Enter your first name"
   onChange={handleSubmit}
  >

  </input>
</div>

  <div>
  <label>last Name:</label>
  <input
  type="text" 
  name="lastName" 
  value={formData.lastName}
   placeholder="Enter your last name"
   onChange={handleSubmit}
  >

  </input>
  </div>
  

  
  </form>

  
 



 

  
}

export default Form;