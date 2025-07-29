
import React from 'react';
// , FaEnvelope
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/footer.css'; 

const Footer = () => (
  <footer className="footer">
    <p className='name'>{new Date().getFullYear()} Ankita Sonawane</p>
          <br></br>
    <div className="footer-links">

       {/* <FaEnvelope />{" "}
        <a href="mailto:ankitasonavne37@gmail.com" className="footer-link">
          email
        </a> */}
         <FaLinkedin />{" "}
      <a href="https://www.linkedin.com/in/ankita-sonawane-456ab1325/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
       <FaGithub />{" "}
      <a href="https://github.com/AnkitaSonawane2003" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
