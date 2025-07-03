import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Briefcase, Code, Calendar, MapPin, Trophy } from 'lucide-react';
import personalData from '../data/personal.json';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              {personalData.name}
            </h1>
            <h2 className="hero-subtitle">
              Passionate Software Engineer
            </h2>
            <p className="hero-tagline">
              Building innovative solutions with modern technologies
            </p>
            
            {/* Professional Summary */}
            <div style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              padding: '2rem', 
              borderRadius: '1rem', 
              border: '1px solid var(--border-color)',
              margin: '2rem 0'
            }}>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Award size={20} style={{ color: 'var(--primary-color)' }} />
                Professional Background
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <GraduationCap size={18} style={{ color: '#10b981' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Software Engineering Student
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Polytechnique Sousse (2022-2025)
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={18} style={{ color: '#3b82f6' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Bachelor's in Business Intelligence
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      ISG Sousse (2019-2022)
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Briefcase size={18} style={{ color: '#8b5cf6' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      17+ Months Experience
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Professional Internships
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Code size={18} style={{ color: '#f59e0b' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Full-Stack Developer
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      React, NestJS, Django, Flutter
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} style={{ color: '#ef4444' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Based in Sousse, Tunisia
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Available for Remote Work
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Trophy size={18} style={{ color: '#ec4899' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Hackathon Winner
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Start it Up 2.0 - First Prize
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
              gap: '1rem',
              margin: '2rem 0'
            }}>
              <div style={{ 
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>5+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Companies</div>
              </div>
              <div style={{ 
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>15+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Projects</div>
              </div>
              <div style={{ 
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Technologies</div>
              </div>
              <div style={{ 
                textAlign: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>4+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Certifications</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <Link to="/contact" className="cta-button">
                Get In Touch
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

      {/* Enhanced Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              What I Bring to the Table
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              Combining technical expertise with business intelligence background to deliver comprehensive solutions
            </p>
          </div>
          
          <div className="features-grid">
            {personalData.features.map((feature, index) => (
              <article key={index} className="feature-card fade-in-up">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: '1rem 1rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '1rem',
            border: '1px solid var(--border-color)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Ready to collaborate?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              I'm always excited to work on new projects and bring innovative ideas to life. 
              Let's discuss how we can work together!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="cta-button" style={{ backgroundColor: 'var(--secondary-color)' }}>
                View My Work
              </Link>
              <Link to="/contact" className="cta-button">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;