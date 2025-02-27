import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPEX</p>
      </div>
      {isMobile ? (
        <>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                SHOP
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/mens">
                MEN
              </Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("womens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/womens">
                WOMEN
              </Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/kids">
                {" "}
                KIDS
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="nav-login-cart-hamburger">
            <Link to="/login">
              <button>LOGIN</button>
            </Link>
            <Link to="/cart">
              <img src={cart_icon}></img>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </>
      ) : (
        <>
          <ul className="nav-menu">
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                SHOP
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("mens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/mens">
                MEN
              </Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("womens");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/womens">
                WOMEN
              </Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("kids");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/kids">
                {" "}
                KIDS
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="nav-login-cart">
            <Link to="/login">
              <button>LOGIN</button>
            </Link>
            <Link to="/cart">
              <img src={cart_icon}></img>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
