import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // CRUD: Create (Mock POST)
    console.log("Newsletter Subscription:", email);
    alert(`Success! ${email} has been added to the Event-Edge nexus.`);
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Brand */}
        <div className="footer-column">
          <h3 className="footer-logo">EVENT-<span>EDGE</span></h3>
          <p>Defining the perimeter of college innovation and tech culture.</p>
          <div className="social-links">
            <a href="#">Linked<span>In</span></a>
            <a href="#">Git<span>Hub</span></a>
            <a href="#">Insta<span>gram</span></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter (CRUD Create) */}
        <div className="footer-column">
          <h4>Stay Updated</h4>
          <p>Get notified about new events instantly.</p>
          <form className="footer-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Event-Edge | Built with React.js</p>
      </div>
    </footer>
  );
};

export default Footer;