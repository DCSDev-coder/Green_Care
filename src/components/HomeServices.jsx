import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.scss';
import { Home, Building2, Droplets, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const homeServicesList = [
  {
    id: 'landed',
    icon: Home,
    tag: 'Landed Properties',
    title: 'Landed Wet Kitchen & Extensions',
    desc: 'Council-compliant structural extensions for terrace, semi-D, and bungalows. Solid RC slab casting, grease traps, and drainage correction.',
    pills: ['Reinforced RC Lintels', 'Grease Traps', 'Drainage Slope Correction'],
    link: '/services#landed'
  },
  {
    id: 'condo',
    icon: Building2,
    tag: 'High-Rise Fit-Outs',
    title: 'Condo & Apartment Fit-Outs',
    desc: 'Hassle-free JMB-compliant renovations. Managing hacking deposits, scheduled work permits, acoustic SPC flooring, and ambient coves.',
    pills: ['JMB Permit Filing', 'Acoustic SPC Flooring', 'Ambient Cove Ceilings'],
    link: '/services#condo'
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    tag: 'Wet Area Specialist',
    title: 'Bathroom & 72-Hr Waterproofing',
    desc: 'End persistent ceiling leaks. Multi-layer polyurethane and cementitious waterproofing with mandatory 72-hour water ponding tests before tiling.',
    pills: ['72-Hr Ponding Test', '100% Leak-Proof', 'Rectified Floor Tiling'],
    link: '/services#waterproofing'
  },
  {
    id: 'joinery',
    icon: Zap,
    tag: 'Joinery & Electrical',
    title: 'Custom Joinery & M&E Rewiring',
    desc: 'Moisture-resistant kitchen cabinetry, powder-coated glass partitions, and full 3-phase DB upgrades with safety RCCB balancing.',
    pills: ['Custom Made-to-Measure', '3-Phase Safety Rewiring', 'Concealed AC Trunking'],
    link: '/services#joinery'
  }
];

export default function HomeServices() {
  return (
    <section className="home-services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="home-section-header">
          <div className="section-badge">Core Specializations</div>
          <h2 className="section-title">Tailored For Malaysian Homes</h2>
          <p className="section-subtitle">
            Focused exclusively on the 4 key structural and interior areas that define daily comfort, safety, and long-term property value.
          </p>
        </div>

        {/* 4-Column Modern Card Grid */}
        <div className="home-services-grid">
          {homeServicesList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="home-service-card">
                <div className="card-header">
                  <div className="service-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="service-tag">{svc.tag}</span>
                </div>

                <h3 className="service-heading">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>

                <div className="service-pills">
                  {svc.pills.map((pill, idx) => (
                    <span key={idx} className="spec-pill">{pill}</span>
                  ))}
                </div>

                <Link to={svc.link} className="service-link">
                  <span>View Specifications</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Clean Action */}
        <div className="home-services-footer">
          <Link to="/services" className="btn btn-outline-emerald">
            <span>Explore Complete Renovation Specifications & Scopes</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
