import React from "react";
import './footer.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-about">
        <h3>Let's Connect!</h3>
        <p>&copy; 2024 My Art Portfolio | All Rights Reserved</p>
      </div>

      <div className="footer-socials">
        <h3>Follow Me</h3>
        <div className="social-links">
          <a href="https://www.instagram.com/jfred_lim/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://x.com/JohnFredrickLim" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/yoyodevc" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <h3>Contact Me</h3>
        <p>Email: johnfredricklim@gmail.com</p>
        <p>Phone: (+63) 976-180-5908</p>
      </div>
    </div>
  </footer>
);

export default Footer;
