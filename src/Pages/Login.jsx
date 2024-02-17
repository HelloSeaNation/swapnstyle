import React from "react";
import './CSS/Login.css';



function Login (){
  return(
    <div className="signup">
      <div className="singup-container">
        <h1>Sign Up</h1>
      <div className="signup-fields">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="password"/>
      </div>  
      <div className="continue-btn">
      <button>Continue</button>
      </div>
      <p className="signup-login">Already have an account? <span>Login here</span></p>
      </div>
    </div>  
    
  );
}

export default Login