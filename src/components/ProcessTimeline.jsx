import React from 'react';
import './ProcessTimeline.scss';
import { Ruler, FileText, ClipboardCheck, Smartphone, Award } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Ruler,
    title: 'Free On-Site Inspection',
    description: 'We meet at your property in Semenyih, Kajang, or Klang Valley to measure, inspect wet areas, and understand your lifestyle needs.'
  },
  {
    step: '02',
    icon: FileText,
    title: 'Itemized BOQ Quotation',
    description: 'Line-by-line Bill of Quantities clearly specifying material grades and quantities. Zero vague lump sums or surprise hidden variation costs.'
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'JMB & Council Approvals',
    description: 'We assist with condo management deposits, local council permit submissions, and complete lift/floor protection before hacking begins.'
  },
  {
    step: '04',
    icon: Smartphone,
    title: 'Weekly Progress Logs',
    description: 'Every plumbing chase, waterproofing test, and electrical point is photographed and sent to your phone so you stay updated without visiting daily.'
  },
  {
    step: '05',
    icon: Award,
    title: 'Defect Check & Warranty',
    description: 'Comprehensive joint defect inspection, professional post-renovation cleanup, and issuance of your official workmanship warranty card.'
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="process-section section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Total Peace of Mind</span>
          <h2>Our 5-Step Transparent Process</h2>
          <p>
            No disappeared contractors, no corner-cutting. Every stage is planned, supervised, and verified directly with you.
          </p>
        </div>

        <div className="timeline-grid">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className={`timeline-card ${idx === 4 ? 'highlight' : ''}`}>
                <div className="step-header">
                  <span className="step-num">{item.step}</span>
                  <div className="icon-circle">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
