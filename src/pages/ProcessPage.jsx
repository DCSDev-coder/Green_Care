import React from 'react';
import { Link } from 'react-router-dom';
import ProcessTimeline from '../components/ProcessTimeline';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Wallet, Building2, FileWarning, ShieldAlert } from 'lucide-react';

export default function ProcessPage() {
  return (
    <div className="process-page">
      
      {/* Page Hero - matches other internal pages */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Zero Disappeared Contractors</span>
          <h1>Our 5-Step Transparent Process</h1>
          <p>
            Renovating your home should bring excitement, not anxiety. Here is how we manage every stage from the initial tape measurement to defect handover.
          </p>
        </div>
      </div>

      {/* 5-Step Milestone Tiers & Levels */}
      <ProcessTimeline isPage={true} />

      {/* Deep-Dive: How Our Itemized BOQ Protects You */}
      <section className="section bg-slate-50 border-b border-slate-200">
        <div className="container">
          
          <div className="boq-comparison-layout">
            
            <div className="boq-explanation">
              <span className="section-tag">100% Price Transparency</span>
              <h2>Why an Itemized BOQ Beats a Lump–Sum Quote</h2>
              <p className="boq-lead">
                Most homeowners fall victim to contractors who quote a vague 1-page lump sum (e.g. <em>"Full Kitchen & Bath: RM 35,000"</em>). Halfway through the job, the contractor demands extra money for hacking, plumbing chases, and waterproofing.
              </p>
              <p className="boq-lead">
                At Green Cares Specialists, every quotation is built on a line-by-line <strong>Bill of Quantities (BOQ)</strong>:
              </p>

              <div className="boq-feature-list">
                <div className="boq-feature-item">
                  <div className="feature-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="feature-text">
                    <strong>Exact Material Specifications</strong>
                    <p>Conduit thickness, cement grades, waterproof membrane brands, and tile adhesives are guaranteed in writing.</p>
                  </div>
                </div>

                <div className="boq-feature-item">
                  <div className="feature-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="feature-text">
                    <strong>Verified Square Footage & Quantities</strong>
                    <p>Calculated directly from physical on-site laser measurements. Fixed scope means zero surprise variation charges.</p>
                  </div>
                </div>

                <div className="boq-feature-item">
                  <div className="feature-icon-circle">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="feature-text">
                    <strong>Progress Milestone Payments</strong>
                    <p>Funds are unlocked stage-by-stage only after each physical on-site milestone is inspected and signed off.</p>
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

            {/* Right Card: Modern BOQ Preview Card */}
            <div className="boq-preview-card">
              <div className="preview-top-bar">
                <div className="preview-brand-info">
                  <div className="preview-icon-wrap">
                    <FileText size={18} />
                  </div>
                  <div>
                    <span className="preview-doc-type">SAMPLE BOQ BREAKDOWN</span>
                    <span className="preview-doc-subtitle">Green Cares Standards</span>
                  </div>
                </div>
                <span className="preview-guarantee-badge">Zero Hidden Variations</span>
              </div>

              <div className="preview-table">
                <div className="preview-table-header">
                  <span>Scope Item</span>
                  <span>Pricing Basis</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">01</span>
                    <div>
                      <strong>Lift & Site Protection</strong>
                      <span className="row-sub">Heavy corrugated board & dust barriers</span>
                    </div>
                  </div>
                  <span className="status-badge badge-included">Included</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">02</span>
                    <div>
                      <strong>72-Hr Ponding Waterproofing</strong>
                      <span className="row-sub">Double-layer elastomeric polymer membrane</span>
                    </div>
                  </div>
                  <span className="status-badge badge-itemized">Itemized (sqft)</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">03</span>
                    <div>
                      <strong>Large Format Floor Tiling</strong>
                      <span className="row-sub">600×1200 porcelain, Grade A adhesive</span>
                    </div>
                  </div>
                  <span className="status-badge badge-itemized">Itemized (sqft)</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">04</span>
                    <div>
                      <strong>Concealed SIRIM Electrical Points</strong>
                      <span className="row-sub">PVC conduits & heavy copper wiring</span>
                    </div>
                  </div>
                  <span className="status-badge badge-itemized">Itemized (points)</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">05</span>
                    <div>
                      <strong>Custom Joinery & Cabinetry</strong>
                      <span className="row-sub">E1 moisture-resistant melamine core</span>
                    </div>
                  </div>
                  <span className="status-badge badge-itemized">Itemized (ft)</span>
                </div>

                <div className="preview-row">
                  <div className="row-item-info">
                    <span className="row-num">06</span>
                    <div>
                      <strong>Joint Defect Inspection & Warranty</strong>
                      <span className="row-sub">200-point joint audit & post-reno cleanup</span>
                    </div>
                  </div>
                  <span className="status-badge badge-included">Included</span>
                </div>
              </div>

              <div className="preview-footer">
                <div className="footer-help">
                  <ShieldCheck size={16} className="help-icon" />
                  <span>Unclear line items?</span>
                </div>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20can%20you%20review%20my%20renovation%20quotation%20with%20me?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Ask Us Directly →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Red Flags Guide */}
      <section className="section bg-white border-t border-slate-200 red-flags-section">
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag advisory-tag">Contractor Scam Advisory</span>
            <h2>Top 4 Contractor Red Flags to Avoid</h2>
            <p>Know what to watch out for before signing any renovation contract in Malaysia.</p>
          </div>

          <div className="cards-grid-4 red-flags-grid">
            
            <div className="info-card red-flag-card">
              <div className="flag-card-header">
                <span className="flag-badge">Red Flag 01</span>
                <div className="flag-icon-circle">
                  <Wallet size={18} />
                </div>
              </div>
              <h4 className="flag-title">Asking 50%+ Upfront Deposit</h4>
              <p className="flag-desc">
                Demanding massive cash upfront before materials arrive on site. Homeowners lose all leverage if the contractor stalls or delays.
              </p>
              <div className="flag-safe-standard">
                <CheckCircle2 size={15} className="safe-check" />
                <span>Funds released stage-by-stage only after verified physical inspection</span>
              </div>
            </div>

            <div className="info-card red-flag-card">
              <div className="flag-card-header">
                <span className="flag-badge">Red Flag 02</span>
                <div className="flag-icon-circle">
                  <Building2 size={18} />
                </div>
              </div>
              <h4 className="flag-title">No Physical Office Address</h4>
              <p className="flag-desc">
                Operating solely via mobile phones with no verifiable SSM registration or permanent office, posing high risk of disappearing when leaks appear.
              </p>
              <div className="flag-safe-standard">
                <CheckCircle2 size={15} className="safe-check" />
                <span>Registered Sdn Bhd with a permanent physical office in Semenyih</span>
              </div>
            </div>

            <div className="info-card red-flag-card">
              <div className="flag-card-header">
                <span className="flag-badge">Red Flag 03</span>
                <div className="flag-icon-circle">
                  <FileWarning size={18} />
                </div>
              </div>
              <h4 className="flag-title">Vague 1-Page Quotation</h4>
              <p className="flag-desc">
                Quotations without specific material brands, wire gauges, or exact sqft dimensions, designed to ambush you with Variation Orders later.
              </p>
              <div className="flag-safe-standard">
                <CheckCircle2 size={15} className="safe-check" />
                <span>Comprehensive line-by-line BOQ with fixed material specifications</span>
              </div>
            </div>

            <div className="info-card red-flag-card">
              <div className="flag-card-header">
                <span className="flag-badge">Red Flag 04</span>
                <div className="flag-icon-circle">
                  <ShieldAlert size={18} />
                </div>
              </div>
              <h4 className="flag-title">Zero Written Warranty</h4>
              <p className="flag-desc">
                Refusing to commit to a formal written Defect Liability Period for water leaks, plumbing joints, and electrical tripping after handover.
              </p>
              <div className="flag-safe-standard">
                <CheckCircle2 size={15} className="safe-check" />
                <span>Official written workmanship warranty certificate with every project</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
