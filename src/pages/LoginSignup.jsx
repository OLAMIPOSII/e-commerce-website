import React from "react";
import "./CSS/LoginSignup.css";
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SIGN UP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="YOUR NAME" />
          <input type="email" placeholder="EMAIL ADDRESS" />
          <input type="password" placeholder="PASSWORD" />
        </div>
        <button>CONTINUE</button>
        <p className="loginsignup-login">
          Already have an account? <span>LOGIN HERE</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
