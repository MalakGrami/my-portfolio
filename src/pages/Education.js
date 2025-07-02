import React from 'react';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">👨🏼‍🎓 Education and Certifications</h1>
      
      <section>
        <h3 className="section-title">🎓 General</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          <strong>Basic Qualification and Certifications</strong><br />
          Compilation of academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences.
        </p>
      </section>

      <section>
        <h3 className="section-title">📒 Degrees Received</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Compilation of academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences.
        </p>
        
        <div className="timeline">
          {educationData.degrees.map((degree, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {degree.institution}
                </h3>
                <img 
                  src={degree.image} 
                  alt={`${degree.institution} Logo`} 
                  className="company-logo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x100?text=Logo';
                  }}
                />
                <p style={{ fontWeight: '600', marginBottom: '1rem' }}>
                  {degree.degree} ({degree.period})
                </p>
                <ul className="responsibilities">
                  {degree.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                {degree.website && degree.website !== '#' && (
                  <p style={{ marginTop: '1rem' }}>
                    <a 
                      href={degree.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Visit Website
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="section-title">📚 Certifications</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Compilation of academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences.
        </p>
        
        <div className="cert-grid">
          {educationData.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div style={{ border: '1px solid var(--border-color)', borderRadius: '0.5rem', padding: '1.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="cert-title">{cert.name}</span>
                </p>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-description">{cert.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;