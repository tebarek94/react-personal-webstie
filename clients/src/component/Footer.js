import React from "react";
import "./Footer.css"; // Import the CSS file for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>
            <strong>Contact Us:</strong> info@example.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        <div className="footer-links">
          <a href="/about" className="footer-link">
            About
          </a>
          <a href="/home" className="footer-link">
            Home
          </a>
          <a href="/alldata" className="footer-link">
            All Data
          </a>
        </div>

        <p className="copyright">
          © 2024 Random Word Generator. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
