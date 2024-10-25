import React, { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "", Password: " ",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

  console.log('>>>>>>>..FormData>>>>>>>>>>>>',formData)
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved to local storage!");
  
  };

  // const savedData = JSON.parse(localStorage.getItem("formData"));
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);


  return (
    <div>

      <div className="Wrapper Login">
        <div className="Container">
          <div className="Col-Left">
            <div className="Login-Text">
              <h2>Welcome!</h2>
              <p>Create Your Account.<br />For Free!</p>
              <a href className="Btn">Sign Up</a>
            </div>
          </div>
          <div className="Col-Right">
            <div className="Login-Form">
              <h2>Login</h2>
              <form action>
                <p>
                  <label>Username/Email Address<span>*</span></label>
                  <input type="Text" placeholder="Username Or Email" onInput={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </p>
                <p>
                  <label>Password<span>*</span></label>
                  <input type="Password" placeholder="Password" onInput={(e) => setFormData({ ...formData, Password: e.target.value })} required />
                </p>
                <p>
                  <input type="Submit" defaultValue="Sign In" onClick={(e) => handleSubmit(e)} />
                </p>
                <p>
                  <a href>Forgot Password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Form;
