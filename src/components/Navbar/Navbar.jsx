import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar scrolled">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          EVENT-<span>EDGE</span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/schedule" onClick={closeMenu}>Schedule</Link></li>
          <li><Link to="/register" onClick={closeMenu}>Join Now</Link></li>
        </ul>

        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;