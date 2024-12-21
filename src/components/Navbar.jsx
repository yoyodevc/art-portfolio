// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo neon-text">Art Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#about" className="neon-link">About</a></li>
        <li><a href="#works" className="neon-link">Works</a></li>
        <li><a href="#contact" className="neon-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
