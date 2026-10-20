import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BeforeAfterSlider.scss';
import { ChevronsLeftRight, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

import beforeKitchen from '../assets/images/destruction.webp';
import afterKitchen from '../assets/images/interior-design.webp';

import beforeCondo from '../assets/images/house-renovation.webp';
import afterCondo from '../assets/images/Home-page-scaled.webp';

import beforeBath from '../assets/images/plumbing-works.webp';
import afterBath from '../assets/images/project-1.webp';

const SCENARIOS = [
  {
    id: 'kitchen',
    title: 'Wet Kitchen Extension',
    location: 'Eco Forest, Semenyih',
    property: '2-Storey Landed Terrace',
    beforeImg: beforeKitchen,
    afterImg: afterKitchen,
    duration: '5 Weeks',
    scope: 'Rear slab, beam, brickwork & skylight',
    guarantee: 'MPKj Permit & 72h Ponding Test'
  },
  {
    id: 'condo',
    title: 'Turnkey Condo Fit-Out',
    location: 'Cheras / KL Skyline',
    property: '1,150 sq.ft High-Rise Unit',
    beforeImg: beforeCondo,
    afterImg: afterCondo,
    duration: '6 Weeks',
    scope: 'Acoustic SPC, L-box lighting, full joinery',
    guarantee: 'JMB Protection & 100% Deposit Refund'
  },
  {
    id: 'bath',
    title: 'Bathroom & Waterproofing',
    location: 'Saujana Impian, Kajang',
    property: 'Master & Common Bathrooms',
    beforeImg: beforeBath,
    afterImg: afterBath,
    duration: '3 Weeks',
    scope: 'Piping re-route, membrane & porcelain tiles',
    guarantee: 'Mandatory 72h Water Ponding Test'
  }
];

export default function BeforeAfterSlider() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const scenario = SCENARIOS[activeScenario];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="transformation-slider-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Eye size={13} />
            <span>Real Site Proof</span>
          </span>
          <h2>The Green Cares Transformation</h2>
          <p>
            Drag the interactive slider to see how we turn raw masonry, hacking, and structural works into showroom-grade living spaces.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="slider-scenario-pills">
          {SCENARIOS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`scenario-pill-btn ${activeScenario === idx ? 'active' : ''}`}
              onClick={() => {
                setActiveScenario(idx);
                setSliderPos(50);
              }}
            >
              <span className="pill-dot"></span>
              <span className="pill-title">{item.title}</span>
              <span className="pill-location">{item.location}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Window */}
        <div className="slider-card-wrapper">
          <div
            className="slider-interactive-viewport"
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Background) */}
            <div className="slider-img-layer after-layer">
              <img src={scenario.afterImg} alt={`${scenario.title} After Renovation`} />
              <div className="layer-tag after-tag">
                <CheckCircle2 size={13} />
                <span>Finished & Verified (After)</span>
              </div>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="slider-img-layer before-layer"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img src={scenario.beforeImg} alt={`${scenario.title} Before Renovation`} />
              <div className="layer-tag before-tag">
                <span>Raw Demolition / Hacking (Before)</span>
              </div>
            </div>

            {/* Divider Handle Line */}
            <div
              className="slider-divider-line"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="slider-handle-button" aria-label="Drag comparison slider">
                <ChevronsLeftRight size={18} />
              </div>
            </div>

            {/* Drag Hint */}
            <div className="slider-hint-badge">
              <ChevronsLeftRight size={14} />
              <span>Drag or swipe left / right</span>
            </div>
          </div>

          {/* Under-Slider Project Context Card */}
          <div className="slider-meta-strip">
            <div className="meta-item">
              <span className="meta-label">Property Profile</span>
              <strong>{scenario.property}</strong>
            </div>

            <div className="meta-item">
              <span className="meta-label">On-Site Duration</span>
              <strong>{scenario.duration}</strong>
            </div>

            <div className="meta-item">
              <span className="meta-label">Key Work Scope</span>
              <strong>{scenario.scope}</strong>
            </div>

            <div className="meta-item highlight">
              <span className="meta-label">Verified Quality Assurance</span>
              <strong className="text-emerald">
                <ShieldCheck size={14} className="inline-icon" />
                {scenario.guarantee}
              </strong>
            </div>

            <div className="meta-actions">
              <Link to="/calculator" className="btn btn-slider-cta">
                <span>Estimate Similar Project</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
