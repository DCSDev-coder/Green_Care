import React from 'react';
import CostEstimator from '../components/CostEstimator';
import { Package, Wrench, ClipboardCheck, ShieldAlert } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="calculator-page">
      
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Interactive Estimator Studio</span>
          <h1>Renovation Cost Estimator</h1>
          <p>
            Avoid unrealistic contractor ballparks. Use our interactive estimator to calculate a realistic investment range based on actual current labor and material rates in Selangor and KL.
          </p>
        </div>
      </div>

      {/* Calculator Interactive Suite (Full 2-Column Planning Studio) */}
      <CostEstimator isPage={true} />

      {/* Renovation Budget Breakdown Education */}
      <section className="section bg-white border-t border-slate-200">
        <div className="container">
          
          <div className="section-header">
            <span className="section-tag">Cost Transparency</span>
            <h2>Where Does Your Renovation Budget Go?</h2>
            <p>Understanding the realistic allocation of funds prevents under-budgeting and mid-project panic.</p>
          </div>

          <div className="cards-grid-4">
            
            <div className="info-card muted-bg budget-card">
              <div>
                <div className="budget-card-header">
                  <span className="card-percentage">45%</span>
                  <div className="budget-icon-circle">
                    <Package size={18} />
                  </div>
                </div>
                <div className="budget-progress-track">
                  <div className="budget-progress-bar" style={{ width: '45%' }}></div>
                </div>
                <h4>Certified Materials</h4>
                <p>
                  Bricks, sand, cement, rebar mesh, waterproof membranes, SIRIM PVC conduits, copper piping, and ceramic/porcelain floor tiles.
                </p>
              </div>
            </div>

            <div className="info-card muted-bg budget-card">
              <div>
                <div className="budget-card-header">
                  <span className="card-percentage">35%</span>
                  <div className="budget-icon-circle">
                    <Wrench size={18} />
                  </div>
                </div>
                <div className="budget-progress-track">
                  <div className="budget-progress-bar" style={{ width: '35%' }}></div>
                </div>
                <h4>Skilled Craftsmanship</h4>
                <p>
                  Certified electricians, master tile layers, licensed plumbers, and experienced structural bricklayers.
                </p>
              </div>
            </div>

            <div className="info-card muted-bg budget-card">
              <div>
                <div className="budget-card-header">
                  <span className="card-percentage">15%</span>
                  <div className="budget-icon-circle">
                    <ClipboardCheck size={18} />
                  </div>
                </div>
                <div className="budget-progress-track">
                  <div className="budget-progress-bar" style={{ width: '15%' }}></div>
                </div>
                <h4>Supervision & Logistics</h4>
                <p>
                  Dedicated on-site site supervisor, debris bins (roro lorry), council dumping fees, and lift/floor protection sheeting.
                </p>
              </div>
            </div>

            <div className="info-card muted-bg budget-card">
              <div>
                <div className="budget-card-header">
                  <span className="card-percentage amber-accent">5%</span>
                  <div className="budget-icon-circle amber-bg">
                    <ShieldAlert size={18} />
                  </div>
                </div>
                <div className="budget-progress-track">
                  <div className="budget-progress-bar amber-bar" style={{ width: '10%' }}></div>
                </div>
                <h4>Contingency Buffer</h4>
                <p>
                  Recommended reserve for unexpected concealed defects discovered during hacking (e.g. rusty developer piping or termite damage).
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
