import React from 'react';
import { Link } from 'react-router-dom';
import './ProcessTimeline.scss';
import { Ruler, FileText, ClipboardCheck, Smartphone, Award, Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 'Step 01',
    icon: Ruler,
    title: 'Free On-Site Inspection',
    subtitle: 'Consultation & Measurements',
    description: 'We meet at your property across Semenyih, Kajang, or Klang Valley to measure, inspect wet areas, and evaluate your space.',
    features: [
      'Laser site measurements',
      'Moisture & wet area check',
      'Zero-obligation consultation'
    ],
    status: 'Day 1 · Free Visit',
    isHighlight: false
  },
  {
    step: 'Step 02',
    icon: FileText,
    title: 'Itemized BOQ Quotation',
    subtitle: '100% Price Certainty',
    description: 'Line-by-line Bill of Quantities clearly specifying material grades and quantities. Zero vague lump sums or surprise hidden costs.',
    features: [
      'Line-by-line BOQ breakdown',
      'Specified material brands',
      'Zero hidden variation orders'
    ],
    status: '3-5 Days · Price Lock',
    isHighlight: false
  },
  {
    step: 'Step 03',
    icon: ClipboardCheck,
    title: 'JMB & Council Approvals',
    subtitle: 'Permits & Site Protection',
    description: 'We manage condo management deposits, local council permit submissions, and complete lift and floor protection before hacking.',
    features: [
      'JMB condo permit filings',
      'Local council submissions',
      'Lift & floor protection'
    ],
    status: 'Pre-Hacking · Full Clearance',
    isHighlight: true,
    highlightLabel: 'Crucial Step'
  },
  {
    step: 'Step 04',
    icon: Smartphone,
    title: 'Weekly Progress Logs',
    subtitle: 'Active Digital Supervision',
    description: 'Every plumbing chase, waterproofing test, and electrical point is photographed and sent directly to your phone.',
    features: [
      'WhatsApp photo & log reports',
      '72-hr ponding test proofs',
      'Site supervisor on duty'
    ],
    status: 'Active Site · Weekly Logs',
    isHighlight: false
  },
  {
    step: 'Step 05',
    icon: Award,
    title: 'Defect Check & Warranty',
    subtitle: 'Certified Warranty Handover',
    description: 'Comprehensive joint defect inspection, professional post-renovation cleanup, and issuance of your official warranty card.',
    features: [
      '200-point joint defect audit',
      'Post-reno chemical deep clean',
      'Official warranty certificate'
    ],
    status: 'Handover · 12-Month Warranty',
    isHighlight: false
  }
];

export default function ProcessTimeline({ isPage = false, showCta = false }) {
  return (
    <section id="process" className="process-section section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>{isPage ? '5 Structured Process Steps' : 'Our 5–Step Transparent Process'}</h2>
          <p>
            No disappeared contractors, no corner-cutting. Every stage is planned, supervised, and verified directly with you.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="step-cards-grid">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step} 
                className={`step-card ${item.isHighlight ? 'step-highlight' : ''}`}
              >
                {item.isHighlight && item.highlightLabel && (
                  <div className="step-top-highlight-badge">
                    <span>{item.highlightLabel}</span>
                  </div>
                )}

                <div className="step-card-header">
                  <span className="step-pill">{item.step}</span>
                  <div className="step-icon-circle">
                    <Icon size={17} />
                  </div>
                </div>

                <div className="step-meta">
                  <h3 className="step-title">{item.title}</h3>
                  <span className="step-subtitle">{item.subtitle}</span>
                </div>

                <p className="step-desc">{item.description}</p>

                <div className="step-divider" />

                <ul className="step-features">
                  {item.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={14} className="step-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="step-footer">
                  <span className="step-status-chip">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Action CTA (for Homepage preview) */}
        {showCta && (
          <div className="process-action-wrap">
            <Link to="/process" className="btn btn-primary">
              <span>Learn How Our Itemized BOQ & Warranty Protects You</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
