import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProcess.scss';
import { Ruler, FileText, Smartphone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    icon: Ruler,
    title: 'Free On-Site Inspection',
    tag: 'Day 1 · 100% Free & No Obligation',
    desc: 'We visit your property for precise laser measurements, moisture and leak checks, and practical spatial planning advice.'
  },
  {
    num: '02',
    icon: FileText,
    title: 'Detailed Itemized Quotation',
    tag: '3-5 Days · Fixed Price Lock',
    desc: 'Clear breakdown of materials, brand specifications, and exact prices for every item. Zero hidden charges or unexpected surprise costs.'
  },
  {
    num: '03',
    icon: Smartphone,
    title: 'Supervised Work & WhatsApp Updates',
    tag: 'Weekly Progress Updates',
    desc: 'We handle building management permits, assign a full-time site supervisor, and send weekly photo and video updates directly to your WhatsApp.'
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Final Handover & 1-Year Warranty',
    tag: '72-Hr Leak Test & 1-Year Warranty',
    desc: 'Mandatory 72-hour water leak test, thorough walk-through check with you, and a full 1-year warranty with free defect repairs.'
  }
];

export default function HomeProcess() {
  return (
    <section className="home-process-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="home-section-header">
          <div className="section-badge">How We Work</div>
          <h2 className="section-title">Transparent 4-Step Renovation Flow</h2>
          <p className="section-subtitle">
            No confusion, no hidden variations, no unmonitored workers. From first measurement to final key handover.
          </p>
        </div>

        {/* Modern 4-Step Stepper */}
        <div className="process-stepper-grid">
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="process-step-item">
                <div className="step-top-row">
                  <span className="step-num-bubble">{s.num}</span>
                  <span className="step-tag">{s.tag}</span>
                </div>

                <div className="step-icon-wrap">
                  <Icon size={22} />
                </div>

                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="home-process-footer">
          <Link to="/process" className="btn btn-outline-emerald">
            <span>Read Complete 5-Step Execution & Payment Milestones</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
