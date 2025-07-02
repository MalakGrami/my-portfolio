import React from 'react';
import { Link } from 'react-router-dom';
import personalData from '../data/personal.json';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            {personalData.name}
          </h1>
          <p className="hero-subtitle">
            {personalData.tagline}
          </p>
          <p className="hero-tagline">
            {personalData.subtitle}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="cta-button">
              Contact Me!
            </Link>
          </div>
        </div>
        
        <div className="hero-image fade-in-up">
          <img 
            src={personalData.profileImage} 
            alt={personalData.name}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/375x375?text=Profile+Image';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;