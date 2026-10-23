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
    desc: 'Local council-approved kitchen extensions for terrace, semi-D, and bungalows. Solid concrete slabs, grease traps, and smooth drainage.',
    pills: ['Reinforced Concrete Beams', 'Grease Traps', 'Anti-Clog Drainage'],
    link: '/services#landed'
  },
  {
    id: 'condo',
    icon: Building2,
    tag: 'Condo & High-Rise',
    title: 'Condo & Apartment Renovations',
    desc: 'Hassle-free renovations with building management approval. We handle work permits, deposits, waterproof SPC flooring, and plaster ceilings with warm cove lighting.',
    pills: ['Management Permits Handled', 'Waterproof SPC Flooring', 'Plaster Ceilings & Lighting'],
    link: '/services#condo'
  },
  {
    id: 'waterproofing',
    icon: Droplets,
    tag: 'Wet Area Specialist',
    title: 'Bathroom & 72-Hr Leak-Proofing',
    desc: 'Stop persistent ceiling leaks permanently. Heavy-duty multi-layer waterproofing with our mandatory 72-hour water leak test before floor tiles are laid.',
    pills: ['72-Hour Water Leak Test', '100% Leak-Proof', 'Even, Anti-Slip Tiling'],
    link: '/services#waterproofing'
  },
  {
    id: 'joinery',
    icon: Zap,
    tag: 'Cabinets & Wiring',
    title: 'Custom Cabinets & Full Rewiring',
    desc: 'Moisture-resistant kitchen cabinets, modern aluminum glass partitions, and safe 3-phase electrical box upgrades with circuit trip protection.',
    pills: ['Custom Built-In Cabinets', '3-Phase Safety Rewiring', 'Hidden Air-Cond Piping'],
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
