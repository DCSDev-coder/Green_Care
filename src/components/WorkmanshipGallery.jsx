import React, { useState } from 'react';
import './WorkmanshipGallery.scss';
import proj1 from '../assets/images/project-1.webp';
import proj2 from '../assets/images/project-2.webp';
import proj3 from '../assets/images/project-3.webp';
import proj4 from '../assets/images/image-project-4.webp';
import houseReno from '../assets/images/house-renovation.webp';
import finisherImg from '../assets/images/finisher.webp';
import glassImg from '../assets/images/glass-and-aluminium.webp';
import c2Main from '../assets/images/c2-main.webp';
import { ShieldCheck, CheckCircle2, ArrowRight, Eye, Wrench, Sparkles, Send, MapPin } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'waterproof',
    stage: 'Wet Area Verification',
    title: '72-Hour Water Ponding Test',
    location: 'Terrace House, Semenyih',
    status: 'Verified Passed ✓',
    statusType: 'success',
    image: proj1,
    description: 'We fill every remodeled bathroom and wet kitchen slab with water for 72 hours before tiling to physically verify zero ceiling leaks below.',
    spec: 'Multi-layer Cementitious + Polyurethane Membrane',
    result: '100% Leak-Proof Guarantee'
  },
  {
    id: 2,
    category: 'electrical',
    stage: 'Rough-In M&E Works',
    title: 'Concealed Wiring & DB Chasing',
    location: 'Semi-D Renovation, Kajang',
    status: 'SIRIM Conduits',
    statusType: 'info',
    image: proj4,
    description: 'Neat horizontal and vertical wall chasing using high-grade PVC conduits. No diagonal shortcuts or dangerous buried wire joints.',
    spec: 'Dedicated ELCB safety tripping & 3-phase balancing',
    result: 'Fire Safety Inspected'
  },
  {
    id: 3,
    category: 'ceilings',
    stage: 'Ceiling & Framing',
    title: 'Acoustic Ceilings & Concealed Coves',
    location: 'Cyberjaya High-Rise Apartment',
    status: 'Laser Level Verified',
    statusType: 'info',
    image: finisherImg,
    description: 'Concealed air-con trunking, curtain pelmets, and low-glare architectural cove lighting installed with zero sagging joints.',
    spec: 'Galvanized iron (GI) framing & moisture-resistant boards',
    result: 'Flush Seamless Ceiling'
  },
  {
    id: 4,
    category: 'tiling',
    stage: 'Finishing Works',
    title: 'Laser-Aligned Large Format Tiles',
    location: 'Living & Dining Floor Revamp',
    status: 'Zero Hollow Screed',
    statusType: 'info',
    image: houseReno,
    description: 'Every 600x1200mm tile is buttered with full-coverage tile adhesive and adjusted with leveling clips to eliminate lippage and hollow taps.',
    spec: 'Self-leveling spacers & polymer-modified mortar',
    result: 'Dead Flush Walkway'
  },
  {
    id: 5,
    category: 'joinery',
    stage: 'Custom Joinery',
    title: 'Aluminium Sliding Glass Partitions',
    location: 'Dry & Wet Kitchen Separator',
    status: 'Tempered Safety Glass',
    statusType: 'purple',
    image: glassImg,
    description: 'Ceiling-hung heavy-duty tracks eliminate clumsy floor channels, preventing tripping hazards and dirt buildup between kitchen areas.',
    spec: '2.0mm powder-coated aluminium framing',
    result: 'Silent Gliding Rollers'
  },
  {
    id: 6,
    category: 'joinery',
    stage: 'Commercial Handover',
    title: 'C2 Coffee + Candle Handover',
    location: 'Eco Forest, Semenyih',
    status: 'Flagship Delivered',
    statusType: 'success',
    image: c2Main,
    description: 'Complete commercial-grade fit-out showing our ability to handle complex architectural glass, ambient cove lighting, and high-traffic finishes.',
    spec: 'Heavy-traffic commercial specifications applied to homes',
    result: 'Commercial Grade Durability'
  }
];

export default function WorkmanshipGallery({ isHome = false }) {
  const [activeTab, setActiveTab] = useState('all');

  const displayedItems = isHome
    ? galleryItems.filter(item => [1, 2, 5].includes(item.id))
    : (activeTab === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeTab));

  return (
    <section id="workmanship" className="workmanship-section section">
      <div className="container">
        
        {/* Section Header */}
        <div className={`workmanship-header ${isHome ? 'is-home-header' : ''}`}>
          <div className="header-text">
            <h2>
              {isHome ? (
                <>Our Workmanship <span className="highlight-green">In Action</span></>
              ) : (
                <>Site Inspection & <span className="highlight-green">Workmanship Logs</span></>
              )}
            </h2>
            <p className="header-desc">
              {isHome 
                ? 'Real on-site proof: physical flood tests, concealed conduit wiring, and custom joinery across Selangor & KL.'
                : 'Detailed physical verification records across wet area waterproofing, electrical cabling, false ceilings, and commercial joinery.'}
            </p>
          </div>

          {/* Filter Tabs (Only shown on full Workmanship Page, hidden on Home Page for clean focus) */}
          {!isHome && (
            <div className="filter-tabs">
              <button 
                className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Progress ({galleryItems.length})
              </button>
              <button 
                className={`filter-btn ${activeTab === 'waterproof' ? 'active' : ''}`}
                onClick={() => setActiveTab('waterproof')}
              >
                Waterproofing
              </button>
              <button 
                className={`filter-btn ${activeTab === 'electrical' ? 'active' : ''}`}
                onClick={() => setActiveTab('electrical')}
              >
                M&E Wiring
              </button>
              <button 
                className={`filter-btn ${activeTab === 'ceilings' ? 'active' : ''}`}
                onClick={() => setActiveTab('ceilings')}
              >
                False Ceilings
              </button>
              <button 
                className={`filter-btn ${activeTab === 'tiling' ? 'active' : ''}`}
                onClick={() => setActiveTab('tiling')}
              >
                Tile Alignment
              </button>
              <button 
                className={`filter-btn ${activeTab === 'joinery' ? 'active' : ''}`}
                onClick={() => setActiveTab('joinery')}
              >
                Joinery & Partitions
              </button>
            </div>
          )}
        </div>

        {/* Gallery Cards Grid */}
        <div className="gallery-grid">
          {displayedItems.map((item) => (
            <div key={item.id} className="workmanship-card">
              
              <div className="card-media">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-media-overlay">
                  <div className="stage-pill">{item.stage}</div>
                  <div className={`status-badge ${item.statusType}`}>
                    {item.status}
                  </div>
                </div>
              </div>

              <div className="card-details">
                <div className="location-row">
                  <span className="location-name">
                    <MapPin size={13} className="pin-icon" />
                    <span>{item.location}</span>
                  </span>
                </div>
                
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>

                <div className="specs-box">
                  <div className="spec-row">
                    <span className="spec-label">Specification:</span>
                    <span className="spec-value">{item.spec}</span>
                  </div>
                  <div className="spec-row highlight">
                    <span className="spec-label">Assurance:</span>
                    <span className="spec-value">{item.result}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Plan Review Banner */}
        <div className="plan-review-banner">
          <div className="banner-info">
            <div className="icon-badge">
              <Sparkles size={22} />
            </div>
            <div>
              <h4>Have an architectural floor plan or layout?</h4>
              <p>Submit your floor plan. Our team will review the space planning, wet area feasibility, and potential hacking points free of charge.</p>
            </div>
          </div>

          <a 
            href="https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I%20have%20a%20floor%20plan%20to%20review%20for%20renovation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark-green banner-btn"
          >
            <Send size={15} />
            <span>Submit Floor Plan for Review</span>
          </a>
        </div>

      </div>
    </section>
  );
}
