import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProcess.scss';
import { Ruler, FileText, Smartphone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    icon: Ruler,
    title: 'Free On-Site Inspection',
    tag: 'Day 1 · No Obligation',
    desc: 'Laser measurements, moisture evaluation, and practical spatial planning on-site at your property.'
  },
  {
    num: '02',
    icon: FileText,
    title: 'Line-by-Line BOQ',
    tag: '3-5 Days · Price Lock',
    desc: 'Itemized material specs, quantities, and transparent line items. Zero vague lump sums or surprises.'
  },
  {
    num: '03',
    icon: Smartphone,
    title: 'Supervised Build & Logs',
    tag: 'Weekly Progress Updates',
    desc: 'JMB permit filings, dedicated site supervisor, and weekly photo and video logs sent straight to your phone.'
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Verified Handover',
    tag: '72-Hr Ponding & Warranty',
    desc: 'Mandatory 72-hour waterproofing verification, thorough joint inspection, and 12-month defect liability cover.'
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
