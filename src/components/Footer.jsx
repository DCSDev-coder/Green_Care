import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import gcsLogo from '../assets/images/gcs-logo-trimmed.webp';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src={gcsLogo} alt="Green Cares Specialists - Plan Design Build" className="logo-img" />
            </Link>
            <p className="brand-summary">
              Specialized residential home renovation, wet kitchen extensions, and condominium fit-outs across Semenyih, Kajang, and the wider Klang Valley. Built with transparent on-site supervision and uncompromising craftsmanship.
            </p>
            <div className="phone-badge">
              <Phone size={15} />
              <span>Office Hotline: 03-7800 0511</span>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div className="footer-col">
            <h4 className="col-title">Residential Solutions</h4>
            <ul className="footer-links">
              <li><Link to="/services">Landed Wet Kitchen Extension</Link></li>
              <li><Link to="/services">Condominium Interior Fit-Out</Link></li>
              <li><Link to="/services">Bathroom Leak-Proof Remodeling</Link></li>
              <li><Link to="/services">Custom Carpentry & Storage</Link></li>
              <li><Link to="/services">3-Phase Electrical & M&E Rewiring</Link></li>
              <li><Link to="/services">Plaster Ceiling & Ambient Lighting</Link></li>
            </ul>
          </div>

          {/* Quick Links: Quality & Workmanship */}
          <div className="footer-col">
            <h4 className="col-title">Workmanship & Proof</h4>
            <ul className="footer-links">
              <li><Link to="/workmanship">72-Hour Water Ponding Tests</Link></li>
              <li><Link to="/workmanship">Concealed SIRIM Conduits</Link></li>
              <li><Link to="/workmanship">Tied Lintel Masonry Extension</Link></li>
              <li><Link to="/workmanship">C2 Coffee + Candle Handover</Link></li>
              <li><Link to="/process">5-Step Milestone Process</Link></li>
              <li><Link to="/calculator">Renovation Cost Calculator</Link></li>
            </ul>
          </div>

          {/* Office HQ & WhatsApp */}
          <div className="footer-col">
            <h4 className="col-title">Headquarters & Contact</h4>
            <div className="office-address">
              <MapPin size={16} className="pin" />
              <span>No. 40-1 Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor</span>
            </div>
            <div className="office-email">
              <Mail size={16} className="mail" />
              <a href="mailto:sales@greencares.my">sales@greencares.my</a>
            </div>
            <div className="footer-cta-box">
              <a 
                href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I'm%20inquiring%20about%20renovating%20my%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary full-width"
              >
                <MessageCircle size={15} />
                <span>Message Project Team</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Green Cares Specialists. All rights reserved.
          </div>
          <div className="tech-badge">
            <span>Modern React + SCSS Architecture</span>
            <span className="dot">•</span>
            <span>Zero V-Plus Overhead</span>
            <span className="dot">•</span>
            <span>Selangor & KL Focused</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
