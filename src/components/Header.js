import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Github, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import personalData from '../data/personal.json';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigation = [
    { name: '👨🏼‍🎓 Education & Certifications', path: '/education' },
    { name: '👨🏼‍💻 Work Experience', path: '/experience' },
    { name: '💼 Portfolio Pieces', path: '/projects' },
    { name: '📞 Contact & Resume', path: '/contact' },
    { name: 'ℹ️ Blog', path: '/blog' }
  ];

  const socialLinks = [
    { icon: Github, href: personalData.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: personalData.contact.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: personalData.contact.facebook, label: 'Facebook' },
    { icon: MessageCircle, href: personalData.contact.discord, label: 'Discord' }
  ];

  return (
    <header className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src={personalData.profileImage} alt={personalData.name} />
          <span>{personalData.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="mobile-hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="mobile-theme-social">
              <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;