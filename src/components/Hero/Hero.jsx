import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS.</h2>
        <div>
          <div className="hero-hand-icon">
            <p>NEW</p>
          </div>
          <p>COLLECTIONS</p>
          <p>FOR EVERYONE</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero Image" />
      </div>
    </div>
  );
};
