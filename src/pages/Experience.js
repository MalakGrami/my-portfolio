import React from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">👨🏼‍💻 Work Experience</h1>
      
      <section>
        <h2 className="section-title">👀 Work, Internship, and Volunteership</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          As a <strong>Software Engineer</strong>, I have worked on real projects for over <strong>17+ months</strong>. 
          Successfully satisfied customers throughout my career by consistently delivering high-quality solutions and 
          exceptional service while collaborating with amazing individuals.
        </p>
      </section>

      <section>
        <h2 className="section-title">✍️ Professional Work Experience</h2>
        
        <div className="timeline">
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="position-title">{exp.position}</h3>
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} Logo`} 
                  className="company-logo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100x100?text=Logo';
                  }}
                />
                <div className="company-name">{exp.company}</div>
                <div className="period">📅 {exp.period}</div>
                <div className="location">📍 {exp.location}</div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: '1rem 0' }}>
                  {exp.description}
                </p>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;