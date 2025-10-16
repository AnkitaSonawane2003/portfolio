import React, { useState } from 'react';
import '../styles/nav.css';
import img from "../assets/img.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <img src={img} alt="Logo" className="pics" />
        <h2>Ankita Sonawane</h2>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776; 
      </div>

      <ul className={`link ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/about">About</a></li>
        <li><a href="/skill">Skills</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="/certification">Certification</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
