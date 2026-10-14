import React from 'react';
import './CoverageHQ.scss';
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass } from 'lucide-react';

const locations = [
  { area: 'Semenyih & Eco Forest', desc: 'HQ Location · Eco Forest, Setia EcoHill, Diamond City' },
  { area: 'Kajang & Bangi', desc: 'Saujana Impian, Country Heights, Bandar Baru Bangi' },
  { area: 'Cheras & Balakong', desc: 'Cheras South, Bandar Mahkota Cheras, Sungai Long' },
  { area: 'Cyberjaya & Putrajaya', desc: 'High-rise condominiums & landed residential enclaves' },
  { area: 'Puchong & Subang Jaya', desc: 'Terrace extensions, kitchen revamps & bathroom tiling' },
  { area: 'Petaling Jaya & KL', desc: 'Turnkey interior makeovers across Klang Valley' }
];

export default function CoverageHQ() {
  return (
    <section id="coverage" className="coverage-section section">
      <div className="container">
        
        <div className="coverage-grid">
          
          {/* Left Column: Regional Coverage */}
          <div className="coverage-left">
            <span className="section-tag">Strategic Presence</span>
            <h2>Anchored in Semenyih, Mobilized Across Selangor & KL</h2>
            <p className="coverage-intro">
              With our operational base in Eco Forest, Semenyih and rapid connectivity via LEKAS, SILK, and PLUS expressways, our renovation supervisors and skilled teams manage active sites throughout the Klang Valley.
            </p>

            <div className="locations-list">
              {locations.map((loc, idx) => (
                <div key={idx} className="location-item">
                  <div className="pin-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <strong>{loc.area}</strong>
                    <p>{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Office & Consultation Card */}
          <div className="coverage-right">
            <div className="contact-card">
              
              <div className="card-top">
                <Compass size={24} className="compass-icon" />
                <div>
                  <h3>Direct Office & Site Inquiries</h3>
                  <p>Book a showroom appointment or site visit</p>
                </div>
              </div>

              <div className="contact-details">
                <div className="detail-row">
                  <div className="detail-icon"><MapPin size={16} /></div>
                  <div>
                    <label>Main Office & Management</label>
                    <address>
                      No. 40-1 Jalan Eco Forest 6/1C, Eco Forest,<br />
                      43500 Semenyih, Selangor, Malaysia
                    </address>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon"><Phone size={16} /></div>
                  <div>
                    <label>Office Telephone</label>
                    <a href="tel:+60378000511">03-7800 0511</a>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon"><Mail size={16} /></div>
                  <div>
                    <label>Official Email</label>
                    <a href="mailto:sales@greencares.my">sales@greencares.my</a>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-icon"><Clock size={16} /></div>
                  <div>
                    <label>Operating Hours</label>
                    <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="contact-cta-box">
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I%20would%20like%20to%20visit%20your%20office%20at%20Eco%20Forest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary full-width"
                >
                  <MessageSquare size={16} />
                  <span>Schedule Office Consultation</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
