import React from 'react';
import { Link } from 'react-router-dom';
import proj1 from '../assets/images/project-1.webp';
import proj2 from '../assets/images/project-2.webp';
import proj3 from '../assets/images/project-3.webp';
import c2Main from '../assets/images/c2-main.webp';
import { Check, ShieldCheck, HelpCircle, ArrowRight, MessageCircle, AlertTriangle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="services-page">
      
      {/* Page Header Hero */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Comprehensive Residential Capabilities</span>
          <h1>Specialized Home Renovation Services</h1>
          <p>
            We don't take on office towers or industrial tenders. Every tool, technician, and supervisor on our team is dedicated exclusively to residential craftsmanship across Selangor and Kuala Lumpur.
          </p>
        </div>
      </div>

      {/* Service 1: Landed Extensions */}
      <div className="service-detail-section">
        <div className="container">
          <div className="detail-layout">
            
            <div className="detail-content">
              <span className="detail-tag">01 · Structural Masonry</span>
              <h2>Landed House & Wet Kitchen Extensions</h2>
              <p className="detail-lead">
                Expanding a landed home requires proper structural engineering. We construct compliant rear and side extensions designed to last decades without foundation settlement cracks.
              </p>

              <ul className="feature-list">
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Reinforced Concrete (RC) Footing & Lintel Beams</strong>
                    <p>Tie-back columns and load-bearing lintels over openings prevent unsightly structural wall fractures.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Damp-Proof Membrane & Subfloor Leveling</strong>
                    <p>Heavy polyethylene ground sheeting prevents rising moisture from de-bonding your kitchen floor tiles.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Dedicated Grease Trap & Exhaust Routing</strong>
                    <p>Heavy-duty plumbing ready for Asian-style high-heat cooking, wok burners, and deep sink drainage.</p>
                  </div>
                </li>
              </ul>

              <div className="detail-actions">
                <Link to="/calculator" className="btn btn-primary">
                  <span>Estimate Kitchen Extension</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I'm%20asking%20about%20a%20wet%20kitchen%20extension" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={15} />
                  <span>Quick Consultation</span>
                </a>
              </div>
            </div>

            <div className="detail-media">
              <div className="media-card">
                <img src={proj1} alt="Landed extension works by Green Cares" className="media-img" />
                <div className="media-caption">
                  <h4>On-Site Structural Masonry</h4>
                  <p>Eco Forest 2-Storey Terrace: Reinforced bricklaying with stiffener columns and roof drainage integration.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 2: Condo Fit-Outs */}
      <div className="service-detail-section">
        <div className="container">
          <div className="detail-layout reverse">
            
            <div className="detail-content">
              <span className="detail-tag">02 · High-Rise Living</span>
              <h2>Condominium & Apartment Fit-Outs</h2>
              <p className="detail-lead">
                Renovating a high-rise in Klang Valley comes with strict Management Corporation (JMB/MC) rules. We manage paperwork, security deposits, and working hours with zero drama.
              </p>

              <ul className="feature-list">
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Full Lift & Corridor Protection</strong>
                    <p>Heavy corrugated protection boards in lifts and public walkways ensure your JMB deposit is refunded 100%.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Acoustic SPC Flooring with IXPE Underlay</strong>
                    <p>Waterproof stone-plastic composite flooring with sound dampening to respect neighbors below.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Plaster Ceilings with Low-Glare LED Coves</strong>
                    <p>Clean false ceilings concealing electrical wiring, air conditioning refrigerant pipes, and curtain pelmets.</p>
                  </div>
                </li>
              </ul>

              <div className="detail-actions">
                <Link to="/calculator" className="btn btn-primary">
                  <span>Estimate Condo Fit-Out</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I'm%20planning%20a%20condo%20renovation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={15} />
                  <span>Ask JMB Questions</span>
                </a>
              </div>
            </div>

            <div className="detail-media">
              <div className="media-card">
                <img src={proj2} alt="Condo interior fit out by Green Cares" className="media-img" />
                <div className="media-caption">
                  <h4>Precision Interior Finishing</h4>
                  <p>Carefully leveled SPC flooring, false ceilings, and ambient architectural cove lighting.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 3: Bathroom & Waterproofing */}
      <div className="service-detail-section">
        <div className="container">
          <div className="detail-layout">
            
            <div className="detail-content">
              <span className="detail-tag">03 · Wet Area Integrity</span>
              <h2>Bathroom Remodeling & 72-Hour Waterproofing</h2>
              <p className="detail-lead">
                Water leaks are the #1 source of contractor disputes in Malaysia. We treat waterproofing as an engineering discipline, never taking shortcuts over old cracked screed.
              </p>

              <ul className="feature-list">
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Multi-Layer Cementitious + PU Membrane</strong>
                    <p>Coating floor slabs and running 300mm up wet shower walls with reinforced fiber mesh corners.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Mandatory 72-Hour Water Ponding Verification</strong>
                    <p>Every bathroom is flooded with water for 3 full days. Tiles are only laid after inspection proves zero seepage.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Concealed Thermostatic Plumbing & Water Pumps</strong>
                    <p>PPR hot & cold piping welded with zero threaded joints hidden inside walls to eliminate hidden leaks.</p>
                  </div>
                </li>
              </ul>

              <div className="detail-actions">
                <Link to="/calculator" className="btn btn-primary">
                  <span>Estimate Bathroom Remodel</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/workmanship" className="btn btn-secondary">
                  <span>See 72-Hour Test Photos</span>
                </Link>
              </div>
            </div>

            <div className="detail-media">
              <div className="media-card">
                <img src={proj1} alt="Waterproofing test verification by Green Cares" className="media-img" />
                <div className="media-caption">
                  <h4>Water Ponding In Progress</h4>
                  <p>Physical flood test verified and signed off before mortar screed and porcelain tiles are applied.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 4: Custom Carpentry & M&E */}
      <div className="service-detail-section">
        <div className="container">
          <div className="detail-layout reverse">
            
            <div className="detail-content">
              <span className="detail-tag">04 · Joinery & Safety</span>
              <h2>Custom Carpentry & M&E Safety Rewiring</h2>
              <p className="detail-lead">
                From durable kitchen cabinetry and floor-to-ceiling wardrobes to full 3-phase electrical upgrades that keep modern high-draw appliances safe.
              </p>

              <ul className="feature-list">
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Anti-Scratch & Moisture-Resistant Melamine/Plywood</strong>
                    <p>Built with soft-close hydraulic hinges, quartz stone worktops, and stainless steel sink undercarriages.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>SIRIM-Approved PVC Conduits & Cable Balancing</strong>
                    <p>Full DB board upgrade with individual residual current circuit breakers (RCCB) for electric car chargers, induction hobs, and instantaneous water heaters.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Ceiling-Hung Powder-Coated Sliding Glass</strong>
                    <p>Seamless spatial division between dry and wet kitchens with zero floor tracks to trip over.</p>
                  </div>
                </li>
              </ul>

              <div className="detail-actions">
                <Link to="/calculator" className="btn btn-primary">
                  <span>Calculate Custom Carpentry</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I%20need%20custom%20cabinets%20and%20wiring" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={15} />
                  <span>Send Cabinet Measurements</span>
                </a>
              </div>
            </div>

            <div className="detail-media">
              <div className="media-card">
                <img src={c2Main} alt="Precision carpentry and sliding glass by Green Cares" className="media-img" />
                <div className="media-caption">
                  <h4>Heavy-Duty Architectural Joinery</h4>
                  <p>Commercial-standard sliding glass tracks and bespoke cabinetry designed for years of daily use.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Comparison Section: Why Choose Green Cares */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Comparison</span>
            <h2>Why Homeowners Choose Green Cares</h2>
            <p>Here is how our transparent process contrasts with typical freelance sub-contractors in the market.</p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: '#0f172a', color: '#fff', textAlign: 'left' }}>
                  <th style={{ padding: '1rem', borderRadius: '8px 0 0 0' }}>Renovation Factor</th>
                  <th style={{ padding: '1rem', background: '#059669' }}>Green Cares Specialists</th>
                  <th style={{ padding: '1rem', borderRadius: '0 8px 0 0' }}>Typical Freelance Contractor</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>Quotation Transparency</td>
                  <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>Itemized line-by-line Bill of Quantities (BOQ)</td>
                  <td style={{ padding: '1rem', color: '#dc2626' }}>Vague 1-page lump sum with hidden variations</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>Waterproofing Method</td>
                  <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>Multi-layer membrane + 72-hr physical flood test</td>
                  <td style={{ padding: '1rem', color: '#dc2626' }}>Single thin coat with zero water testing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>Site Supervision</td>
                  <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>Direct company supervisor + weekly photo & video logs</td>
                  <td style={{ padding: '1rem', color: '#dc2626' }}>Middleman passes job to sub-contractors</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>Electrical Safety</td>
                  <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>SIRIM-certified PVC conduits with zero diagonal chasing</td>
                  <td style={{ padding: '1rem', color: '#dc2626' }}>Unprotected wires buried directly in wall plaster</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold' }}>Post-Handover Warranty</td>
                  <td style={{ padding: '1rem', color: '#059669', fontWeight: 'bold' }}>Formal written Workmanship Warranty Card</td>
                  <td style={{ padding: '1rem', color: '#dc2626' }}>Unreachable once final payment is made</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Homeowner FAQs</span>
            <h2>Common Questions About Home Renovation</h2>
            <p>Everything you need to know before engaging a contractor for your home in Selangor & KL.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h4><HelpCircle size={18} /> How long does a typical landed wet kitchen extension take?</h4>
              <p>A standard rear extension (including foundation footing, brickwork, RC slab, waterproofing, tiling, and roofing) typically takes between 6 to 9 weeks, subject to weather conditions and council permits.</p>
            </div>

            <div className="faq-card">
              <h4><HelpCircle size={18} /> Do you handle condominium renovation permits and management deposits?</h4>
              <p>Yes. We assist with preparing the required submission drawings, contractor insurance coverage, and scheduled work paperwork for your building management (JMB/MC) before any on-site work commences.</p>
            </div>

            <div className="faq-card">
              <h4><HelpCircle size={18} /> Why is your 72-hour water ponding test mandatory?</h4>
              <p>Water leaks in Malaysian homes frequently happen because contractors tile immediately over damp or untested waterproofing membranes. By flooding the floor for 72 hours, we verify 100% water tightness before any finish tile is installed.</p>
            </div>

            <div className="faq-card">
              <h4><HelpCircle size={18} /> How do your payment milestones work?</h4>
              <p>We work on a transparent milestone-based payment schedule tied directly to verified on-site progress (e.g. Deposit booking, completion of wet masonry, completion of rough-in piping/cabling, completion of tiling, and final defect handover). You never pay in advance for unfinished milestones.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
