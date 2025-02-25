import React from "react";
import "./DescriptionBox.css";
export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description.</div>
        <div className="descriptionbox-nav-box fade">Reviews. (150)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform where businesses can sell
          products or services directly to customers over the internet,
          essentially acting as a virtual storefront where customers can browse,
          select, and purchase items through a digital interface, completing the
          transaction online.
        </p>
      </div>
    </div>
  );
};
