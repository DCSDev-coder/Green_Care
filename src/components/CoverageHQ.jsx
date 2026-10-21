import React, { useState } from 'react';
import './CoverageHQ.scss';
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Navigation, ArrowRight, CheckCircle2 } from 'lucide-react';

const locationZones = [
  {
    id: 'semenyih',
    area: 'Semenyih & Eco Forest',
    badge: 'Operational HQ & Base',
    isHQ: true,
    townships: ['Eco Forest', 'Setia EcoHill', 'Diamond City', 'Eco Majestic', 'Tiara East'],
    connectivity: '5 mins from Eco Forest HQ via LEKAS',
    focus: 'Residential interior fit-outs, defect inspections, and rapid site supervisor mobilization.',
    availability: 'Daily Site Teams Active'
  },
  {
    id: 'kajang',
    area: 'Kajang & Bangi',
    badge: 'Core Active Zone',
    isHQ: false,
    townships: ['Saujana Impian', 'Country Heights', 'Bandar Baru Bangi', 'Kajang 2', 'Jade Hills'],
    connectivity: '15 mins via SILK & PLUS Highway',
    focus: 'Interior makeovers, kitchen wet works, 72-hour waterproofing ponding tests.',
    availability: 'Daily Site Teams Active'
  },
  {
    id: 'cheras',
    area: 'Cheras & Balakong',
    badge: 'High-Demand Zone',
    isHQ: false,
    townships: ['Cheras South', 'Bandar Mahkota Cheras', 'Sungai Long', 'Balakong Jaya', 'Alam Damai'],
    connectivity: '20 mins via Cheras-Kajang Expressway (CKE)',
    focus: 'Full terrace refurbishment, tile leveling, and custom aluminium joinery.',
    availability: 'Weekly Supervision Rotations'
  },
  {
    id: 'cyberjaya',
    area: 'Cyberjaya & Putrajaya',
    badge: 'Condo & Landed Enclaves',
    isHQ: false,
    townships: ['Setia Eco Glades', 'Tamarind Square vicinity', 'Shaftsbury', 'Presint 8-16 Putrajaya'],
    connectivity: '25 mins via SKVE & MEX Expressways',
    focus: 'Strict JMB management compliance, plaster ceiling, and ambient cove lighting.',
    availability: 'On-Call Inspection Slots'
  },
  {
    id: 'puchong',
    area: 'Puchong & Subang Jaya',
    badge: 'Landed Refurbishment',
    isHQ: false,
    townships: ['Bandar Puteri Puchong', 'USJ 1-21', 'Putra Heights', 'Puchong Jaya', 'Kinrara'],
    connectivity: '25 mins via LDP & KESAS Expressways',
    focus: 'Wall hacking, reinforced foundation casting, and plumbing rewiring.',
    availability: 'Scheduled Site Visit Slots'
  },
  {
    id: 'pj_kl',
    area: 'Petaling Jaya & KL',
    badge: 'Turnkey Makeover Core',
    isHQ: false,
    townships: ['Damansara', 'Bangsar', 'Old Klang Road', 'Cheras KL', 'Mont Kiara vicinity'],
    connectivity: '30 mins via Federal & SPRINT Expressways',
    focus: 'Commercial cafe transformations, turnkey condo renovations, and luxury finishes.',
    availability: 'Dedicated Project Managers'
  }
];

export default function CoverageHQ() {
  const [selectedZoneId, setSelectedZoneId] = useState('semenyih');
  const activeZone = locationZones.find(z => z.id === selectedZoneId) || locationZones[0];

  return (
    <section id="coverage" className="coverage-section section">
      <div className="container">
        
        <div className="coverage-grid">
          
          {/* Left Column: Regional Coverage Interactive Explorer */}
          <div className="coverage-left">
            <div className="coverage-heading-group">
              <span className="section-tag">Strategic Presence</span>
              <h2>Anchored in Semenyih, Mobilized Across Selangor & KL</h2>
              <p className="coverage-intro">
                With our operational base in Eco Forest, Semenyih and rapid connectivity via LEKAS, SILK, and PLUS expressways, our renovation supervisors manage active residential sites throughout the Klang Valley.
              </p>

              {/* Interactive Zone Tabs (2 columns on left) */}
              <div className="zone-selector-label">
                <span>Select an area to check active coverage & response times:</span>
              </div>
            </div>

            <div className="zone-tabs-grid">
              {locationZones.map((loc) => {
                const isSelected = loc.id === selectedZoneId;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    className={`zone-pill-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedZoneId(loc.id)}
                  >
                    <div className="pill-left">
                      <div className="pin-circle">
                        <MapPin size={15} />
                      </div>
                      <span className="pill-title">{loc.area}</span>
                    </div>
                    {isSelected && (
                      <span className="active-indicator">
                        <CheckCircle2 size={15} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Zone Detail Showcase Card */}
            <div className="active-zone-showcase">
              <div className="showcase-top">
                <div className="showcase-title-box">
                  <div className="zone-icon-badge">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="title-row">
                      <h3>{activeZone.area}</h3>
                      <span className="zone-status-badge">
                        {activeZone.availability}
                      </span>
                    </div>
                    <span className="transit-tag">
                      <Navigation size={13} />
                      <span>{activeZone.connectivity}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="township-section">
                <span className="sub-label">Key Neighborhoods & Townships Served:</span>
                <div className="township-chips">
                  {activeZone.townships.map((town, i) => (
                    <span key={i} className="township-chip">{town}</span>
                  ))}
                </div>
              </div>

              <p className="zone-focus-text">
                <strong>Primary Scopes:</strong> {activeZone.focus}
              </p>

              <div className="zone-footer-action">
                <a 
                  href={`https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I%20have%20a%20property%20in%20${encodeURIComponent(activeZone.area)}%20and%20would%20like%20to%20schedule%20a%20site%20inspection`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zone-action"
                >
                  <span>Book Inspection in {activeZone.area}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Office & Consultation Card (Still on the right, but lower & centered in the middle) */}
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
                    <label>Direct Phone & WhatsApp</label>
                    <a href="tel:+60126946907">+60 12-694 6907</a>
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
                  href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I%20would%20like%20to%20visit%20your%20office%20at%20Eco%20Forest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-dark-green full-width"
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
