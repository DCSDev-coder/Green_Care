import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCoverage.scss';
import { MapPin, Phone, MessageCircle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const serviceAreas = [
  'Semenyih (Eco Forest HQ)',
  'Kajang & Country Heights',
  'Bandar Baru Bangi',
  'Cheras & Balakong',
  'Cyberjaya & Putrajaya',
  'Petaling Jaya & KL'
];

export default function HomeCoverage() {
  return (
    <section className="home-coverage-section">
      <div className="container">
        
        <div className="coverage-card">
          <div className="coverage-info-col">
            <div className="coverage-badge">
              <MapPin size={14} />
              <span>Operational Base & Service Enclaves</span>
            </div>

            <h2 className="coverage-heading">Serving Selangor & Klang Valley Homeowners</h2>
            <p className="coverage-sub">
              Headquartered at Eco Forest Semenyih with dedicated on-site teams deployed daily across core residential townships.
            </p>

            <div className="areas-grid">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="area-pill">
                  <span className="dot"></span>
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="hq-detail-row">
              <div className="hq-item">
                <MapPin size={15} className="hq-icon" />
                <span>No. 40-1 Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor</span>
              </div>
              <div className="hq-item">
                <Clock size={15} className="hq-icon" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM (Site inspections by appointment)</span>
              </div>
            </div>
          </div>

          <div className="coverage-cta-col">
            <div className="cta-box">
              <h3 className="cta-box-title">Ready for a Zero-Obligation Inspection?</h3>
              <p className="cta-box-desc">
                We meet at your property to take laser measurements, check wet area conditions, and prepare a line-by-line itemized BOQ.
              </p>

              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-cta-primary">
                  <span>Book Free Site Inspection</span>
                  <ArrowRight size={15} />
                </Link>

                <a 
                  href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I'd%20like%20to%20schedule%20a%20site%20inspection%20for%20my%20home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-cta-wa"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp +60 12-694 6907</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
