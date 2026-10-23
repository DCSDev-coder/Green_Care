import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import houseReno from '../assets/images/house-renovation.webp';
import interiorDesign from '../assets/images/interior-design.webp';
import plumbingWorks from '../assets/images/plumbing-works.webp';
import c2Main from '../assets/images/c2-main.webp';
import { 
  Check, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  MessageCircle, 
  Calculator, 
  CheckCircle2, 
  MapPin, 
  XCircle, 
  ChevronDown 
} from 'lucide-react';

const FAQS = [
  {
    q: "Do you handle local council approvals for landed house extensions?",
    a: "Yes. For landed extensions in Selangor and KL (MPKj, MPSepang, MBSJ, DBKL), we coordinate required architectural layout plans, engineer sign-offs, and authority submissions before hacking starts."
  },
  {
    q: "How long does a typical condominium interior fit-out take?",
    a: "A comprehensive condo fit-out (including SPC flooring, plaster ceilings, lighting, and custom joinery) typically takes between 4 to 7 weeks, depending on JMB building management working hours and permit approvals."
  },
  {
    q: "Do you handle condominium renovation permits and management deposits?",
    a: "Yes. We assist with preparing the required submission drawings, contractor insurance coverage, and scheduled work paperwork for your building management (JMB/MC) before any on-site work commences."
  },
  {
    q: "Why is your 72-hour water ponding test mandatory?",
    a: "Water leaks in Malaysian homes frequently happen because contractors tile immediately over damp or untested waterproofing membranes. By flooding the floor for 72 hours, we verify 100% water tightness before any finish tile is installed."
  },
  {
    q: "How do your payment milestones work?",
    a: "We work on a transparent milestone-based payment schedule tied directly to verified on-site progress (e.g. Deposit booking, completion of wet masonry, completion of rough-in piping/cabling, completion of tiling, and final defect handover). You never pay in advance for unfinished milestones."
  }
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };
  return (
    <div className="services-page">
      
      {/* Services Header Hero */}
      <div className="services-hero">
        <div className="container services-hero-inner">
          <h1>Home Renovation Services</h1>
          
          <p className="services-hero-lead">
            Specialized landed kitchen extensions, condo fit-outs, 72-hour waterproofing, and custom joinery across Selangor & KL.
          </p>

          <div className="services-hero-actions">
            <Link to="/calculator" className="btn btn-white-action">
              <Calculator size={15} />
              <span>Estimate Renovation Cost</span>
            </Link>
            <Link to="/contact" className="btn btn-outline-white">
              <span>Book Site Inspection</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Service 1: Landed Wet Kitchen Extensions */}
      <div id="landed" className="service-detail-section">
        <div className="container">
          <div className="detail-layout">
            
            <div className="detail-content">
              <span className="detail-tag">01 · Landed Properties</span>
              <h2>Landed Wet Kitchen & Extensions</h2>
              <p className="detail-lead">
                Council-compliant structural extensions for terrace, semi-D, and bungalows. Solid reinforced concrete (RC) slab casting, lintel beams, grease traps, and drainage correction without future ground-settlement cracks.
              </p>

              <ul className="feature-list">
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Reinforced RC Slab & Ground-Beam Casting</strong>
                    <p>Engineered to resist ground settlement cracks, with heavy-duty rebar tied securely into original building pillars.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Commercial Grease Traps & Soil Piping Correction</strong>
                    <p>Compliant with local council bylaws (MPKj, MPSepang, MBSJ, DBKL) preventing foul kitchen drainage blockages.</p>
                  </div>
                </li>
                <li>
                  <Check size={18} className="icon-check" />
                  <div>
                    <strong>Drainage Slope & Heavy Monsoon Rain Protection</strong>
                    <p>Laser-aligned floor falls and concealed downpipes calibrated to handle heavy tropical flash storms with zero backflow.</p>
                  </div>
                </li>
              </ul>

              <div className="detail-actions">
                <Link to="/calculator?property=terrace&scope=kitchen" state={{ property: 'terrace', scopes: ['kitchen'] }} className="btn btn-primary">
                  <span>Estimate Landed Extension</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I'm%20planning%20a%20landed%20kitchen%20extension" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={15} />
                  <span>Ask Extension Questions</span>
                </a>
              </div>
            </div>

            <div className="detail-media">
              <div className="media-card">
                <div className="media-img-wrap">
                  <img src={houseReno} alt="Landed wet kitchen extension and structural renovation by Green Cares" className="media-img" />
                </div>
                <div className="media-caption">
                  <div className="caption-header">
                    <span className="caption-location">
                      <MapPin size={12} />
                      <span>Semenyih & Kajang Landed</span>
                    </span>
                    <span className="caption-status">RC Slab & Masonry</span>
                  </div>
                  <h4>Engineered Wet Kitchen Extension</h4>
                  <p>Solid reinforced concrete slab, grease trap drainage, and complete masonry wet kitchen build.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 2: Condo Fit-Outs */}
      <div id="condo" className="service-detail-section">
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
                <Link to="/calculator?property=condo" state={{ property: 'condo' }} className="btn btn-primary">
                  <span>Estimate Condo Fit-Out</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I'm%20planning%20a%20condo%20renovation" 
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
                <div className="media-img-wrap">
                  <img src={interiorDesign} alt="Condo interior fit out by Green Cares" className="media-img" />
                </div>
                <div className="media-caption">
                  <div className="caption-header">
                    <span className="caption-location">
                      <MapPin size={12} />
                      <span>Cyberjaya High-Rise</span>
                    </span>
                    <span className="caption-status">JMB-Compliant</span>
                  </div>
                  <h4>Precision Interior Finishing</h4>
                  <p>Acoustic SPC flooring with IXPE underlay, false ceilings, and ambient architectural cove lighting.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 3: Bathroom & Waterproofing */}
      <div id="waterproofing" className="service-detail-section">
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
                <Link to="/calculator?scope=bath" state={{ scope: 'bath' }} className="btn btn-primary">
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
                <div className="media-img-wrap">
                  <img src={plumbingWorks} alt="Waterproofing test verification by Green Cares" className="media-img" />
                </div>
                <div className="media-caption">
                  <div className="caption-header">
                    <span className="caption-location">
                      <MapPin size={12} />
                      <span>Kajang & Semenyih</span>
                    </span>
                    <span className="caption-status">Mandatory Sign-off</span>
                  </div>
                  <h4>Water Ponding In Progress</h4>
                  <p>Physical 72-hour flood test verified and signed off before mortar screed and porcelain tiles are applied.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service 4: Custom Carpentry & M&E */}
      <div id="joinery" className="service-detail-section">
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
                <Link to="/calculator?scope=carpentry" state={{ scope: 'carpentry' }} className="btn btn-primary">
                  <span>Calculate Custom Carpentry</span>
                  <ArrowRight size={14} />
                </Link>
                <a 
                  href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I%20need%20custom%20cabinets%20and%20wiring" 
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
                <div className="media-img-wrap">
                  <img src={c2Main} alt="Precision carpentry and sliding glass by Green Cares" className="media-img" />
                </div>
                <div className="media-caption">
                  <div className="caption-header">
                    <span className="caption-location">
                      <MapPin size={12} />
                      <span>C2 Flagship Showcase</span>
                    </span>
                    <span className="caption-status">Architectural Joinery</span>
                  </div>
                  <h4>Heavy-Duty Custom Carpentry</h4>
                  <p>Ceiling-hung sliding glass tracks and bespoke moisture-resistant cabinetry designed for heavy daily use.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Comparison Section: Why Choose Green Cares */}
      <section className="section bg-white comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Comparison</span>
            <h2>Why Homeowners Choose Green Cares</h2>
            <p>Here is how our transparent process contrasts with typical freelance sub-contractors in the market.</p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="modern-comparison-table">
              <thead>
                <tr>
                  <th className="col-factor-head">
                    <span className="factor-label">Renovation Standard</span>
                  </th>
                  <th className="col-gc-head">
                    <div className="gc-head-box">
                      <span className="gc-badge">
                        <ShieldCheck size={13} />
                        <span>Recommended Standard</span>
                      </span>
                      <h3>Green Cares Specialists</h3>
                      <p>Direct supervision & warranty protection</p>
                    </div>
                  </th>
                  <th className="col-others-head">
                    <div className="others-head-box">
                      <span className="others-badge">Market Average</span>
                      <h3>Typical Freelance Contractor</h3>
                      <p>Sub-contracted middleman model</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-factor">
                    <strong>Quotation Transparency</strong>
                    <span className="factor-sub">Pricing breakdown & variation risk</span>
                  </td>
                  <td className="col-gc">
                    <div className="cell-content">
                      <CheckCircle2 size={18} className="cell-icon icon-success" />
                      <div>
                        <strong>Itemized line-by-line Bill of Quantities (BOQ)</strong>
                        <p>Every material, unit rate, and dimension fixed before signing. Zero hidden markups.</p>
                      </div>
                    </div>
                  </td>
                  <td className="col-others">
                    <div className="cell-content">
                      <XCircle size={18} className="cell-icon icon-danger" />
                      <div>
                        <strong>Vague 1-page lump sum</strong>
                        <p>Hidden variation orders (V.O.) and surprise price hikes midway through construction.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="col-factor">
                    <strong>Waterproofing Method</strong>
                    <span className="factor-sub">Wet area leak prevention</span>
                  </td>
                  <td className="col-gc">
                    <div className="cell-content">
                      <CheckCircle2 size={18} className="cell-icon icon-success" />
                      <div>
                        <strong>Multi-layer membrane + 72-hr flood test</strong>
                        <p>Mandatory 3-day water ponding signed off with photos before floor tiles are installed.</p>
                      </div>
                    </div>
                  </td>
                  <td className="col-others">
                    <div className="cell-content">
                      <XCircle size={18} className="cell-icon icon-danger" />
                      <div>
                        <strong>Single thin coat with zero water testing</strong>
                        <p>High failure rate resulting in water seepage to ground floors or neighbors below.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="col-factor">
                    <strong>Site Supervision</strong>
                    <span className="factor-sub">On-site quality management</span>
                  </td>
                  <td className="col-gc">
                    <div className="cell-content">
                      <CheckCircle2 size={18} className="cell-icon icon-success" />
                      <div>
                        <strong>Direct company supervisor + weekly logs</strong>
                        <p>Dedicated project PIC sending photo/video progress updates directly to homeowner chat.</p>
                      </div>
                    </div>
                  </td>
                  <td className="col-others">
                    <div className="cell-content">
                      <XCircle size={18} className="cell-icon icon-danger" />
                      <div>
                        <strong>Sub-contracted middleman</strong>
                        <p>Unsupervised workers left to figure out drawings with little or no quality checking.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="col-factor">
                    <strong>Electrical & M&E Safety</strong>
                    <span className="factor-sub">Conduit wiring & load balancing</span>
                  </td>
                  <td className="col-gc">
                    <div className="cell-content">
                      <CheckCircle2 size={18} className="cell-icon icon-success" />
                      <div>
                        <strong>SIRIM PVC conduits & neat vertical chasing</strong>
                        <p>Balanced DB board with RCCB protection for high-amp induction hobs and EV chargers.</p>
                      </div>
                    </div>
                  </td>
                  <td className="col-others">
                    <div className="cell-content">
                      <XCircle size={18} className="cell-icon icon-danger" />
                      <div>
                        <strong>Unprotected wires in plaster</strong>
                        <p>Diagonal wall slits without conduit piping; severe electrical fire hazard.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="col-factor">
                    <strong>Post-Handover Warranty</strong>
                    <span className="factor-sub">Defects & aftercare liability</span>
                  </td>
                  <td className="col-gc">
                    <div className="cell-content">
                      <CheckCircle2 size={18} className="cell-icon icon-success" />
                      <div>
                        <strong>Formal written Workmanship Warranty Card</strong>
                        <p>Direct office accountability for any defects, water seepage, or hollow tiles.</p>
                      </div>
                    </div>
                  </td>
                  <td className="col-others">
                    <div className="cell-content">
                      <XCircle size={18} className="cell-icon icon-danger" />
                      <div>
                        <strong>Unreachable after final payment</strong>
                        <p>No contractual warranty, personal numbers blocked or excuses when problems appear.</p>
                      </div>
                    </div>
                  </td>
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
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-card ${isOpen ? 'is-open' : ''}`}
                >
                  <button 
                    type="button"
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-content">
                      <HelpCircle size={18} className="faq-icon" />
                      <span className="faq-question-text">{faq.q}</span>
                    </div>
                    <span className="faq-chevron-wrap">
                      <ChevronDown size={18} className="faq-chevron" />
                    </span>
                  </button>

                  <div className={`faq-answer-wrapper ${isOpen ? 'is-open' : ''}`}>
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
