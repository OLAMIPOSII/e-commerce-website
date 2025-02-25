import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="PRODUCT IMAGE" />
          <img src={product.image} alt="PRODUCT IMAGE" />
          <img src={product.image} alt="PRODUCT IMAGE" />
          <img src={product.image} alt="PRODUCT IMAGE" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="PRODUCT IMAGE"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="STAR ICON" />
          <img src={star_icon} alt="STAR ICON" />
          <img src={star_icon} alt="STAR ICON" />
          <img src={star_icon} alt="STAR ICON" />
          <img src={star_dull_icon} alt="STAR ICON" />
          <p>(150)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">{product.name}</div>
        <div className="productdisplay-right-size">
          <h1>SELECT SIZE</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>CATEGORY:</span>WOMEN, T-SHIRT, CROP TOP.
        </p>
        <p className="productdisplay-right-category">
          <span>TAGS:</span>MODERN, LATEST
        </p>
      </div>
    </div>
  );
};
