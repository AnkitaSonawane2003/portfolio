
import React from 'react';
import '../styles/footer.css'; 

const Footer = () => (
  <footer className="footer">
    <p className='name'>{new Date().getFullYear()} Ankita Sonawane</p>
    <div className="footer-links">
      <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
