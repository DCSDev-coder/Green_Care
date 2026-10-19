import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import gcsBrandLogoDark from '../assets/images/gcs-brand-logo-darkmode.png';
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          
          {/* Col 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-link">
              <img 
                src={gcsBrandLogoDark} 
                alt="Green Cares Specialists - Plan, Design, Build" 
                className="footer-brand-logo" 
              />
            </Link>
            
            <p className="brand-desc">
              Selangor & KL residential renovation specialists. From landed kitchen extensions to condominium fit-outs, we build with itemized line-by-line BOQs and 72-hour waterproofing verification.
            </p>

            <div className="brand-contact-pills">
              <a href="tel:+60378000511" className="contact-pill">
                <Phone size={13} className="pill-icon" />
                <span>03-7800 0511</span>
              </a>
              <a 
                href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I'm%20inquiring%20about%20renovating%20my%20home" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-pill whatsapp-pill"
              >
                <MessageCircle size={13} className="pill-icon" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Col 2: Residential Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Renovation Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">Condo & Apartment Fit-Outs</Link></li>
              <li><Link to="/services">Landed Wet Kitchen Extensions</Link></li>
              <li><Link to="/services">72-Hour Waterproofing & Bathrooms</Link></li>
              <li><Link to="/services">Custom Joinery & Kitchen Cabinets</Link></li>
              <li><Link to="/services">3-Phase M&E Safety Rewiring</Link></li>
              <li><Link to="/services">Plaster Ceilings & Lighting</Link></li>
            </ul>
          </div>

          {/* Col 3: Quality Standards & Proof */}
          <div className="footer-col">
            <h4 className="footer-heading">Standards & Proof</h4>
            <ul className="footer-nav-list">
              <li><Link to="/process">5-Step Transparent Process</Link></li>
              <li><Link to="/workmanship">72-Hour Water Ponding Proofs</Link></li>
              <li><Link to="/workmanship">Flagship C2 Cafe Handover</Link></li>
              <li><Link to="/process">Sample Itemized BOQ</Link></li>
              <li><Link to="/calculator">Renovation Cost Calculator</Link></li>
              <li><Link to="/workmanship">4-Point Quality Guarantee</Link></li>
            </ul>
          </div>

          {/* Col 4: Headquarters & Quick Inspection */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Headquarters & Site HQ</h4>
            
            <div className="hq-info-block">
              <div className="hq-info-item">
                <MapPin size={15} className="hq-icon" />
                <span>No. 40-1 Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor</span>
              </div>
              <div className="hq-info-item">
                <Clock size={15} className="hq-icon" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
              <div className="hq-info-item">
                <Mail size={15} className="hq-icon" />
                <a href="mailto:sales@greencares.my">sales@greencares.my</a>
              </div>
            </div>

            <div className="footer-action-box">
              <Link to="/contact" className="btn btn-footer-cta">
                <span>Book Free Site Inspection</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Coverage */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Green Cares Specialists. All rights reserved.
          </div>
          <div className="coverage-locations">
            <span>Semenyih</span>
            <span className="sep">·</span>
            <span>Kajang</span>
            <span className="sep">·</span>
            <span>Bangi</span>
            <span className="sep">·</span>
            <span>Cheras</span>
            <span className="sep">·</span>
            <span>Cyberjaya</span>
            <span className="sep">·</span>
            <span>Petaling Jaya</span>
            <span className="sep">·</span>
            <span>Klang Valley</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
