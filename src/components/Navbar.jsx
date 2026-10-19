import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import gcsBrandLogo from '../assets/images/gcs-brand-logo-transparent.png';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <span className="pulse-dot"></span>
            <strong>Green Cares Specialists</strong>
            <span className="divider">|</span>
            <span>Residential Home Renovation & Wet Works</span>
          </div>
          <div className="banner-right">
            <span className="badge">HQ: Eco Forest, Semenyih</span>
            <span className="coverage">Serving Semenyih, Kajang & Klang Valley</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          
          {/* Logo Brand on Header */}
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <img src={gcsBrandLogo} alt="GCS Plan Design Build - Transformation & Renovation" className="logo-img" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Services
            </NavLink>
            <NavLink to="/workmanship" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Site Workmanship
            </NavLink>
            <NavLink to="/process" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              5-Step Process
            </NavLink>
            <NavLink to="/calculator" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Cost Calculator
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Contact & Coverage
            </NavLink>
          </nav>

          {/* Desktop Consultation CTA & Mobile Toggle */}
          <div className="header-actions">
            <Link to="/contact" className="btn btn-nav-cta">
              Book Consultation
            </Link>

            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/services" onClick={closeMenu}>Renovation Services</Link>
            <Link to="/workmanship" onClick={closeMenu}>Site Workmanship</Link>
            <Link to="/process" onClick={closeMenu}>5-Step Transparent Process</Link>
            <Link to="/calculator" onClick={closeMenu}>Renovation Budget Calculator</Link>
            <Link to="/contact" onClick={closeMenu}>Office HQ & Coverage</Link>
            <div className="mobile-cta-box">
              <a 
                href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I%20would%20like%20to%20inquire%20about%20renovating%20my%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp full-width"
                onClick={closeMenu}
              >
                <MessageCircle size={16} />
                <span>Schedule Site Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
