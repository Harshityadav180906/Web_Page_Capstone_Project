import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      {/* Background Animated Elements */}
      <div className="hero-bg-glow"></div>
      <div className="hero-grid-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">Next Gen College Tech</div>
        
        <h1 className="hero-title" data-text="EVENT-EDGE">
          EVENT-EDGE
        </h1>
        
        <p className="hero-subtitle">
          Where innovation meets the perimeter. Join the most exclusive 
          technical symposium of the year.
        </p>

        <div className="hero-cta">
          <Link to="/register" className="btn-glow">
            Initialize Access
          </Link>
          <Link to="/schedule" className="btn-outline">
            View Protocol
          </Link>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Hero;