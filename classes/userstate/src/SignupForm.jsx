import React from 'react'

function SignupForm() {
  return (
     <>
    <input type="text" placeholder='Username'/>   <br /> <br />
    <input type="text" placeholder='Email'/>  <br/>  <br />
    <input type="number" placeholder='mobile no'/>  <br/>  <br />
    <input type="password" placeholder='Password'/>    <br/>  <br />
    <input type="password" placeholder='confirm password'/>  <br/><br />
    <button>submit</button>

    </>
  )
}

export default SignupForm
