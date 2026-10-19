import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProof.scss';
import proj1 from '../assets/images/project-1.webp';
import proj4 from '../assets/images/image-project-4.webp';
import finisherImg from '../assets/images/finisher.webp';
import { ShieldCheck, CheckCircle2, ArrowRight, Eye, Sparkles } from 'lucide-react';

const proofCards = [
  {
    id: 1,
    image: proj1,
    badge: 'Verified Leak-Proof ✓',
    badgeType: 'emerald',
    title: '72-Hour Water Ponding Verification',
    location: 'Terrace House · Semenyih',
    desc: 'We fill every remodeled bathroom and wet kitchen slab with water for 72 continuous hours before tiling to physically verify zero seepage to the ceiling below.',
    spec: 'Multi-layer PU + Cementitious Membrane'
  },
  {
    id: 2,
    image: proj4,
    badge: 'SIRIM Heavy-Duty PVC ✓',
    badgeType: 'teal',
    title: 'Concealed 3-Phase M&E Conduit Chasing',
    location: 'Semi-D Renovation · Kajang',
    desc: 'Neat laser-straight horizontal and vertical wall chasing using high-grade conduits. No diagonal shortcuts, exposed wiring, or dangerous buried wire joints.',
    spec: 'Dedicated Safety RCCB Tripping & Balance'
  },
  {
    id: 3,
    image: finisherImg,
    badge: 'Laser-Aligned Level ✓',
    badgeType: 'slate',
    title: 'Flush Ceilings & Large-Format Tiling',
    location: 'Condo Fit-Out · Cyberjaya',
    desc: 'Galvanized iron framing with moisture-resistant boards for zero sagging. Seamless low-glare LED cove lighting and hollow-free tile screeding.',
    spec: 'Galvanized Iron Framing & Anti-Hollow Mortar'
  }
];

export default function HomeProof() {
  return (
    <section className="home-proof-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="home-section-header">
          <div className="section-badge">Quality Verification</div>
          <h2 className="section-title">Real Proof. Zero Shortcuts.</h2>
          <p className="section-subtitle">
            Most renovation defects happen inside hidden walls and floors. We document, inspect, and physically test critical stages before closing them up.
          </p>
        </div>

        {/* 3 Curated Proof Cards */}
        <div className="home-proof-grid">
          {proofCards.map((item) => (
            <div key={item.id} className="proof-card">
              <div className="proof-image-wrap">
                <img src={item.image} alt={item.title} className="proof-img" />
                <div className="proof-overlay"></div>
                <span className={`proof-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
                <span className="proof-location">{item.location}</span>
              </div>

              <div className="proof-body">
                <h3 className="proof-title">{item.title}</h3>
                <p className="proof-desc">{item.desc}</p>
                
                <div className="proof-spec-box">
                  <span className="spec-label">Verified Standard:</span>
                  <span className="spec-val">{item.spec}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="home-proof-footer">
          <Link to="/workmanship" className="btn btn-dark-emerald">
            <span>View All Site Execution Proofs & C2 Cafe Handover</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
