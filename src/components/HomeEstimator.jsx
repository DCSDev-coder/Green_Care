import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeEstimator.scss';
import { Home, Building2, Building, Houses, Calculator, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

const propertyTypes = [
  { id: 'terrace', name: 'Terrace House', icon: Home, rangeMin: '33,000', rangeMax: '55,000', desc: 'Typical 20x70 / 22x75 ft unit' },
  { id: 'semid', name: 'Semi-D / Bungalow', icon: Building2, rangeMin: '52,000', rangeMax: '95,000', desc: 'Spacious multi-level footprint' },
  { id: 'condo', name: 'Condo / Apartment', icon: Building, rangeMin: '28,000', rangeMax: '48,000', desc: 'Typical 850 – 1,400 sq.ft unit' },
  { id: 'townhouse', name: 'Townhouse', icon: Houses, rangeMin: '30,000', rangeMax: '50,000', desc: 'Upper or lower unit configuration' }
];

export default function HomeEstimator() {
  const [activeProp, setActiveProp] = useState('terrace');
  const current = propertyTypes.find(p => p.id === activeProp) || propertyTypes[0];

  return (
    <section className="home-estimator-section" id="quick-estimator">
      <div className="container">
        
        <div className="estimator-card">
          <div className="estimator-content-col">
            <div className="card-badge">
              <Calculator size={14} />
              <span>Instant Budget Check</span>
            </div>

            <h2 className="estimator-title">Estimate Your Renovation in 30 Seconds</h2>
            <p className="estimator-desc">
              Select your property type below to preview typical full-scope renovation investments across Selangor & Klang Valley.
            </p>

            {/* Property Type Selector Tabs */}
            <div className="property-tab-row">
              {propertyTypes.map((item) => {
                const Icon = item.icon;
                const isSelected = activeProp === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveProp(item.id)}
                    className={`prop-btn ${isSelected ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Included Scopes Pills */}
            <div className="inclusions-row">
              <div className="inc-item">
                <CheckCircle2 size={15} className="inc-icon" />
                <span>Wet Kitchen & Extension</span>
              </div>
              <div className="inc-item">
                <CheckCircle2 size={15} className="inc-icon" />
                <span>72-Hr Waterproofed Bathrooms</span>
              </div>
              <div className="inc-item">
                <CheckCircle2 size={15} className="inc-icon" />
                <span>Plaster Ceilings & Wiring</span>
              </div>
            </div>
          </div>

          {/* Result Highlight Box */}
          <div className="estimator-result-col">
            <div className="result-glass-box">
              <span className="result-label">Estimated Investment ({current.name})</span>
              <div className="result-price-row">
                <span className="currency">RM</span>
                <span className="price-val">{current.rangeMin} – {current.rangeMax}</span>
              </div>
              <span className="result-note">{current.desc} · Complete Move-In Ready</span>

              <div className="result-actions">
                <Link 
                  to={`/calculator?property=${activeProp}`} 
                  state={{ property: activeProp }} 
                  className="btn btn-calc-full"
                >
                  <span>Open Full Custom Calculator</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={`https://wa.me/60126946907?text=Hi%20Green%20Cares,%20I'm%20inquiring%20about%20a%20renovation%20budget%20for%20my%20${encodeURIComponent(current.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-calc-wa"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp for Free Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
