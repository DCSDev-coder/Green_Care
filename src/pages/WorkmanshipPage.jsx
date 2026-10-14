import React from 'react';
import WorkmanshipGallery from '../components/WorkmanshipGallery';
import c2Main from '../assets/images/c2-main.webp';
import { ArrowRight } from 'lucide-react';

export default function WorkmanshipPage() {
  return (
    <div className="workmanship-page">
      
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Zero Compromise on Quality</span>
          <h1>Site Workmanship & Proof of Execution</h1>
          <p>
            Homeowners don't need glossy Pinterest renders. You need proof that the unseen foundation, waterproofing, concealed wiring, and masonry inside your walls are executed to uncompromising engineering standards.
          </p>
        </div>
      </div>

      {/* Flagship Case Study: C2 Coffee + Candle */}
      <section className="section bg-white border-b border-slate-200">
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">Featured Commercial Handover</span>
            <h2>Flagship Showcase: C2 Coffee + Candle</h2>
            <p>
              How our commercial-grade fit-out capabilities demonstrate the heavy-duty durability we bring to every residential home.
            </p>
          </div>

          <div className="c2-showcase-box">
            <div className="c2-content">
              <span className="c2-badge">
                Completed Commercial Handover
              </span>

              <h3>C2 Coffee + Candle — Turnkey Commercial Execution</h3>

              <p className="c2-lead">
                Green Cares Specialists completed a comprehensive architectural fit-out for C2 Coffee + Candle. Commercial hospitality venues require strict fire safety, high-traffic floor resilience, ceiling ventilation, and precision glass partition fabrication.
              </p>

              <div className="c2-features-grid">
                <div className="c2-feature-card">
                  <strong>01 · C2 Sliding Door System</strong>
                  <span>Custom top-hung sliding glass system with tempered acoustic glass and heavy-duty concealed tracks.</span>
                </div>
                <div className="c2-feature-card">
                  <strong>02 · Binder C2 & Signage</strong>
                  <span>Custom exterior facade framing, architectural binder installation, and structural reinforcement.</span>
                </div>
                <div className="c2-feature-card">
                  <strong>03 · Architectural Lighting</strong>
                  <span>Targeted spot tracks and ambient illumination calibrated for hospitality atmosphere and comfort.</span>
                </div>
                <div className="c2-feature-card">
                  <strong>04 · Ceiling Airflow Integration</strong>
                  <span>Balanced high-volume ceiling fan installation to maintain constant ventilation across dining zones.</span>
                </div>
              </div>

              <div className="c2-actions">
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I%20saw%20your%20C2%20Cafe%20work%20and%20want%20to%20discuss%20my%20renovation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <span>Inquire Similar Quality for Your Home</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="c2-image-card">
              <img src={c2Main} alt="C2 Coffee and Candle finished space" />
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Workmanship Gallery */}
      <WorkmanshipGallery />

      {/* Workmanship Quality Checklist */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Engineering Quality Standards</span>
            <h2>Our 4-Point Quality Guarantee</h2>
            <p>Every Green Cares site supervisor adheres to this mandatory checklist on residential projects.</p>
          </div>

          <div className="cards-grid-4">
            
            <div className="info-card">
              <div>
                <div className="card-number">01</div>
                <h4>No Diagonal Wall Chases</h4>
                <p>
                  Electrical and plumbing wall chases are strictly vertical or horizontal with SIRIM-certified PVC conduits. This eliminates the danger of drilling into hidden wires when hanging future wall art.
                </p>
              </div>
              <span className="card-verified">Safety Standard Verified ✓</span>
            </div>

            <div className="info-card">
              <div>
                <div className="card-number">02</div>
                <h4>Physical Flood Testing</h4>
                <p>
                  Zero bathrooms or wet kitchen floors are tiled until a 72-hour standing water ponding test is formally inspected and signed off by our lead site supervisor.
                </p>
              </div>
              <span className="card-verified">Zero-Leak Guarantee ✓</span>
            </div>

            <div className="info-card">
              <div>
                <div className="card-number">03</div>
                <h4>Full-Mortar Buttering</h4>
                <p>
                  Large format tiles are 100% buttered on the back with polymer-modified adhesive mortar. We never spot-glue tiles, eliminating hollow clicks and popping tiles under heavy traffic.
                </p>
              </div>
              <span className="card-verified">Zero Hollow Tiles ✓</span>
            </div>

            <div className="info-card">
              <div>
                <div className="card-number">04</div>
                <h4>Weekly On-Site Video Logs</h4>
                <p>
                  You don't need to drive to the dusty site every evening after work. We send high-resolution photo and video logs of every concealed installation straight to your phone.
                </p>
              </div>
              <span className="card-verified">Full Transparency ✓</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
