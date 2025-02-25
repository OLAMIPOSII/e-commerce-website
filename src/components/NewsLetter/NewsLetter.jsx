import React from "react";
import "./NewsLetter.css";
export const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>GET EXCLUSIEVE OFFERS ON YOUR EMAIL.</h1>
      <p>subscribe to our newsletter and stay up dated</p>
      <div>
        <input type="email" placeholder="enter your email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};
