import React from 'react';
import './ResidentialServices.scss';
import { Home, Building2, Droplets, Zap, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: '01',
    icon: Home,
    title: 'Landed Extensions & Wet Kitchen',
    description: 'Compliant structural extensions for terrace, semi-D, and bungalows. Expanding your functional cooking, storage, and yard spaces.',
    highlights: [
      'Reinforced brickwork & structural lintel beams',
      'Heavy-duty grease trap & exhaust piping',
      'Solid RC slab casting & damp-proof membranes',
      'Porch awning extensions & drainage slope correction'
    ],
    accent: 'emerald'
  },
  {
    id: '02',
    icon: Building2,
    title: 'Condo & High-Rise Fit-Out',
    description: 'Strict JMB/Management-compliant renovations. Managing hacking deposits, scheduled working hours, and noise regulations smoothly.',
    highlights: [
      'Non-structural partition walls & smart layout planning',
      'Plaster ceiling with warm ambient LED cove lights',
      'Acoustic SPC flooring with sound dampening underlay',
      'Complete lift padding & common corridor protection'
    ],
    accent: 'teal'
  },
  {
    id: '03',
    icon: Droplets,
    title: 'Bathroom & Waterproofing Specialist',
    description: 'End the nightmare of persistent water leaks and mold. We never lay new tiles over old rotting screed without professional multi-layer membranes.',
    highlights: [
      'Polyurethane & cementitious waterproof barriers',
      'Mandatory 72-hour water ponding verification test',
      'Concealed thermostatic mixer shower plumbing',
      'Anti-slip rectified porcelain floor tiling'
    ],
    accent: 'cyan'
  },
  {
    id: '04',
    icon: Zap,
    title: 'Custom Carpentry & M&E Rewiring',
    description: 'Made-to-measure storage cabinets, modern powder-coated sliding glass, and safe electrical circuit upgrades for modern appliances.',
    highlights: [
      'Anti-scratch, moisture-resistant kitchen cabinets',
      'Full DB box upgrade with individual safety RCCBs',
      'Air-conditioner copper piping & drain concealment',
      'Heavy-duty ceiling-hung sliding glass doors'
    ],
    accent: 'slate'
  }
];

export default function ResidentialServices() {
  return (
    <section id="services" className="services-section section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Residential Expertise</span>
          <h2>Tailored For Malaysian Homes</h2>
          <p>
            We focus exclusively on the core renovation areas that deliver real structural durability, functional comfort, and long-term property value.
          </p>
        </div>

        <div className="services-grid">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className={`service-card accent-${item.accent}`}>
                <div className="card-top">
                  <div className="service-number">{item.id}</div>
                  <div className="service-icon-box">
                    <IconComponent size={22} />
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-desc">{item.description}</p>

                  <ul className="service-checklist">
                    {item.highlights.map((point, index) => (
                      <li key={index}>
                        <Check size={14} className="check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <a href="#estimator" className="service-link">
                    <span>Estimate This Renovation</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
