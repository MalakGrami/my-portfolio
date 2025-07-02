import React from 'react';

const Blog = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">ℹ️ Blog</h1>
      
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
          Welcome to today's update! Each day, this blog will feature new insights, tips, or thoughts from me. 
          The content is dynamic and will change every day, so be sure to check back frequently.
        </p>
        
        <div style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          padding: '3rem 2rem', 
          borderRadius: '1rem', 
          border: '1px solid var(--border-color)',
          marginTop: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Coming Soon! 🚀
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            I'm currently working on creating valuable content for this blog section. 
            Stay tuned for insights about software development, technology trends, and my journey as a software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;