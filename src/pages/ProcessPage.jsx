import React from 'react';
import { Link } from 'react-router-dom';
import ProcessTimeline from '../components/ProcessTimeline';
import { CheckCircle2, AlertOctagon, ArrowRight } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="process-page">
      
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Predictable & Stress-Free</span>
          <h1>Our 5-Step Transparent Process</h1>
          <p>
            Renovating your home should bring excitement, not anxiety. Here is how we manage every stage from the initial tape measurement to defect handover.
          </p>
        </div>
      </div>

      {/* Main Process Timeline Component */}
      <ProcessTimeline />

      {/* Deep-Dive: How Our Itemized BOQ Protects You */}
      <section className="section bg-slate-50 border-b border-slate-200">
        <div className="container">
          
          <div className="boq-comparison-layout">
            
            <div className="boq-explanation">
              <span className="section-tag">No Surprise Bills</span>
              <h2>Why an Itemized BOQ Beats a Lump-Sum Quote</h2>
              <p className="boq-lead">
                Most homeowners fall victim to contractors who quote a cheap 1-page lump sum (e.g. <em>"Kitchen Extension: RM 35,000"</em>). Halfway through the job, the contractor demands extra money for hacking, lintel beams, electrical points, and waterproofing.
              </p>
              <p className="boq-lead">
                At Green Cares Specialists, every quotation is built on a line-by-line <strong>Bill of Quantities (BOQ)</strong>:
              </p>

              <div className="boq-points">
                <div className="boq-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Exact Material Specifications</strong>
                    <p>Thickness of conduits, grade of cement, waterproof membrane brands, and tile adhesive specifications are stated in writing.</p>
                  </div>
                </div>

                <div className="boq-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Verified Square Footage & Units</strong>
                    <p>Calculated based on actual site dimensions. If you don't add new scope, your final contract price does not change.</p>
                  </div>
                </div>

                <div className="boq-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Progress Milestone Payments</strong>
                    <p>Funds are released stage-by-stage as each on-site milestone is physically inspected and signed off.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/calculator" className="btn btn-primary">
                  <span>Calculate Your Estimated Renovation</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Card: BOQ Sample Visual */}
            <div className="boq-sample-card">
              <div className="sample-header">
                <span className="sample-title">SAMPLE BOQ BREAKDOWN</span>
                <span className="sample-subtitle">Green Cares Standards</span>
              </div>

              <div className="sample-list">
                <div className="sample-item">
                  <span className="item-desc">01. Site Protection & Corrugated Sheeting</span>
                  <span className="item-status">Included</span>
                </div>
                <div className="sample-item">
                  <span className="item-desc">02. Masonry Extension (Tied RC Beams)</span>
                  <span className="item-status">Itemized (sqft)</span>
                </div>
                <div className="sample-item">
                  <span className="item-desc">03. 72-Hr Ponding Waterproof Membrane</span>
                  <span className="item-status">Itemized (sqft)</span>
                </div>
                <div className="sample-item">
                  <span className="item-desc">04. Large Format Floor Tiling (600x1200)</span>
                  <span className="item-status">Itemized (sqft)</span>
                </div>
                <div className="sample-item">
                  <span className="item-desc">05. Concealed SIRIM Electrical Points</span>
                  <span className="item-status">Itemized (points)</span>
                </div>
                <div className="sample-item">
                  <span className="item-desc">06. Joint Defect Inspection & Warranty Card</span>
                  <span className="item-status">Included</span>
                </div>
              </div>

              <div className="sample-footer">
                <span className="sample-help">Unclear line items?</span>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20can%20you%20review%20my%20renovation%20quotation%20with%20me?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="sample-link"
                >
                  Ask Us Directly →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Red Flags Guide */}
      <section className="section bg-white">
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">Homeowner Advisory</span>
            <h2>Top 4 Contractor Red Flags to Avoid</h2>
            <p>Know what to watch out for before signing any renovation contract in Malaysia.</p>
          </div>

          <div className="cards-grid-4">
            
            <div className="info-card alert-danger">
              <div>
                <AlertOctagon size={26} className="alert-icon" />
                <h4>Asking 50%+ Upfront Deposit</h4>
                <p>
                  Reputable contractors never demand 50% cash before materials are delivered. Payments must strictly follow physical on-site progress milestones.
                </p>
              </div>
            </div>

            <div className="info-card alert-danger">
              <div>
                <AlertOctagon size={26} className="alert-icon" />
                <h4>No Physical Office Address</h4>
                <p>
                  Contractors operating solely out of mobile phones with no verifiable office or company registration pose high risk of disappearing when defects appear.
                </p>
              </div>
            </div>

            <div className="info-card alert-danger">
              <div>
                <AlertOctagon size={26} className="alert-icon" />
                <h4>Vague 1-Page Quotation</h4>
                <p>
                  Quotations without specific material brands, conduit types, or square foot measurements are designed to ambush you with Variation Orders later.
                </p>
              </div>
            </div>

            <div className="info-card alert-danger">
              <div>
                <AlertOctagon size={26} className="alert-icon" />
                <h4>Zero Written Warranty</h4>
                <p>
                  If a contractor won't commit to a written Defect Liability Period (covering water leaks, plumbing joints, and electrical tripping), look elsewhere.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
