import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
    <h2 className="logo">Brainwave.io</h2>
    <ul className="nav-links">
      <li><Link to="/">Our shop</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/News">News</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      <button>عربي</button>
    </ul>
  </nav>
  );
};

export default Nav;
