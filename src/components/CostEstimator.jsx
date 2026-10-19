import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CostEstimator.scss';
import { 
  Calculator, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  CheckCircle2, 
  Home, 
  Building2, 
  Building, 
  Houses,
  RotateCcw
} from 'lucide-react';

const propertyOptions = [
  { id: 'terrace', name: 'Terrace House', icon: Home, baseMin: 18000, baseMax: 28000 },
  { id: 'semid', name: 'Semi-D / Bungalow', icon: Building2, baseMin: 28000, baseMax: 45000 },
  { id: 'condo', name: 'Condo / Apartment', icon: Building, baseMin: 14000, baseMax: 22000 },
  { id: 'townhouse', name: 'Townhouse', icon: Houses, baseMin: 16000, baseMax: 25000 }
];

const scopeOptions = [
  { id: 'kitchen', label: 'Wet Kitchen Extension', min: 16000, max: 26000, default: true },
  { id: 'bath', label: 'Bathroom Remodeling (2x)', min: 9000, max: 15000, default: true },
  { id: 'plaster', label: 'Plaster Ceiling & Wiring', min: 6000, max: 11000, default: true },
  { id: 'flooring', label: 'Tiling / SPC Flooring', min: 8000, max: 14000, default: false },
  { id: 'carpentry', label: 'Custom Cabinets & Storage', min: 12000, max: 24000, default: false },
  { id: 'paint', label: 'Whole House Repainting', min: 3500, max: 6500, default: false }
];

export default function CostEstimator({ isPage: propIsPage }) {
  const location = useLocation();
  const isPage = propIsPage !== undefined ? propIsPage : location.pathname === '/calculator';

  const [selectedProp, setSelectedProp] = useState('terrace');
  const [selectedScopes, setSelectedScopes] = useState({
    kitchen: true,
    bath: true,
    plaster: true,
    flooring: false,
    carpentry: false,
    paint: false
  });

  const toggleScope = (scopeId) => {
    setSelectedScopes(prev => ({
      ...prev,
      [scopeId]: !prev[scopeId]
    }));
  };

  const handleReset = () => {
    setSelectedProp('terrace');
    setSelectedScopes({
      kitchen: true,
      bath: true,
      plaster: true,
      flooring: false,
      carpentry: false,
      paint: false
    });
  };

  const propConfig = propertyOptions.find(p => p.id === selectedProp) || propertyOptions[0];

  // Calculate dynamic range
  let totalMin = propConfig.baseMin;
  let totalMax = propConfig.baseMax;

  scopeOptions.forEach(opt => {
    if (selectedScopes[opt.id]) {
      totalMin += opt.min;
      totalMax += opt.max;
    }
  });

  const handleWhatsAppQuote = () => {
    const activeScopeLabels = scopeOptions
      .filter(s => selectedScopes[s.id])
      .map(s => s.label);

    const message = `Hello Green Cares Specialists!%0A%0AI used your website's Renovation Cost Estimator:%0A- Property: ${propConfig.name}%0A- Scopes: ${activeScopeLabels.join(', ') || 'General Consultation'}%0A- Estimated Range: RM ${totalMin.toLocaleString()} – RM ${totalMax.toLocaleString()}%0A%0AI would like to schedule a free site inspection.`;

    window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
  };

  // SIMPLE & DIRECT 2-COLUMN VIEW FOR CALCULATOR PAGE
  if (isPage) {
    return (
      <section id="estimator" className="estimator-section direct-calc-section">
        <div className="container direct-calc-container">
          
          <div className="direct-calc-card">
            
            {/* Left Side: Direct Selection Controls */}
            <div className="direct-calc-controls">
              
              {/* 1. Property Type Selector */}
              <div className="direct-step-block">
                <div className="direct-step-header">
                  <span className="step-num">1</span>
                  <h4>Select Property Type</h4>
                </div>

                <div className="direct-prop-pills">
                  {propertyOptions.map(prop => {
                    const IconComp = prop.icon;
                    const isSelected = selectedProp === prop.id;
                    return (
                      <button
                        key={prop.id}
                        type="button"
                        className={`direct-prop-pill ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedProp(prop.id)}
                      >
                        <IconComp size={16} />
                        <span>{prop.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Work Scopes Checklist */}
              <div className="direct-step-block">
                <div className="direct-step-header">
                  <div className="header-title-wrap">
                    <span className="step-num">2</span>
                    <h4>Select Planned Scopes</h4>
                  </div>
                  <button type="button" className="direct-reset-btn" onClick={handleReset} title="Reset selections">
                    <RotateCcw size={12} />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="direct-scope-list">
                  {scopeOptions.map(scope => {
                    const isChecked = selectedScopes[scope.id];
                    return (
                      <div
                        key={scope.id}
                        className={`direct-scope-row ${isChecked ? 'checked' : ''}`}
                        onClick={() => toggleScope(scope.id)}
                      >
                        <div className="scope-check-left">
                          <div className={`direct-checkbox ${isChecked ? 'active' : ''}`}>
                            {isChecked && <Check size={13} />}
                          </div>
                          <span className="direct-scope-name">{scope.label}</span>
                        </div>
                        <span className="direct-scope-tag">+RM {(scope.min / 1000).toFixed(0)}k–{(scope.max / 1000).toFixed(0)}k</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Side: Clean Result Panel */}
            <div className="direct-calc-summary">
              <div className="summary-card-inner">
                
                <div className="summary-header">
                  <span className="summary-badge">ESTIMATED INVESTMENT RANGE</span>
                  <div className="summary-amount">
                    RM {totalMin.toLocaleString()} – RM {totalMax.toLocaleString()}
                  </div>
                  <span className="summary-property-tag">For {propConfig.name}</span>
                </div>

                <p className="summary-disclaimer">
                  *Based on verified Klang Valley labor & certified materials. Final price confirmed via line-by-line laser BOQ.
                </p>

                <div className="summary-trust-list">
                  <div className="trust-row">
                    <CheckCircle2 size={15} className="trust-icon" />
                    <span>72-Hour Standing Water Ponding Test</span>
                  </div>
                  <div className="trust-row">
                    <CheckCircle2 size={15} className="trust-icon" />
                    <span>Direct Site Supervisor & WhatsApp Logs</span>
                  </div>
                  <div className="trust-row">
                    <CheckCircle2 size={15} className="trust-icon" />
                    <span>12-Month Written Defect Warranty</span>
                  </div>
                </div>

                <div className="summary-action-area">
                  <button
                    type="button"
                    className="btn btn-direct-whatsapp"
                    onClick={handleWhatsAppQuote}
                  >
                    <MessageCircle size={18} />
                    <span>Request Itemized BOQ Quote</span>
                    <ArrowRight size={16} />
                  </button>
                  <span className="summary-sub-note">Free site inspection · Eco Forest, Semenyih HQ</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    );
  }

  // COMPACT 1-COLUMN HOME PAGE WIDGET VIEW
  return (
    <section id="estimator" className="estimator-section section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Instant Estimate</span>
          <h2>Plan Your Renovation Budget</h2>
          <p>
            Select your property type and planned renovation scope to get an instant realistic ballpark estimate for homes in Selangor & KL.
          </p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-box">
            
            {/* Step 1: Property Type */}
            <div className="calc-step">
              <label className="step-label">
                <span>1. Select Property Type</span>
              </label>
              
              <div className="prop-grid">
                {propertyOptions.map(prop => {
                  const IconComp = prop.icon;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      className={`prop-card ${selectedProp === prop.id ? 'active' : ''}`}
                      onClick={() => setSelectedProp(prop.id)}
                    >
                      <div className="prop-icon-box">
                        <IconComp size={24} className="prop-icon" />
                      </div>
                      <span className="prop-name">{prop.name}</span>
                      {selectedProp === prop.id && (
                        <span className="active-dot">✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Checklist */}
            <div className="calc-step">
              <label className="step-label">
                <span>2. Select Planned Work Scopes</span>
                <span className="step-hint">(Choose as many as apply)</span>
              </label>

              <div className="scope-grid">
                {scopeOptions.map(scope => {
                  const isChecked = selectedScopes[scope.id];
                  return (
                    <div 
                      key={scope.id}
                      className={`scope-checkbox-card ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleScope(scope.id)}
                    >
                      <div className={`checkbox-custom ${isChecked ? 'active' : ''}`}>
                        {isChecked && <Check size={12} />}
                      </div>
                      <span className="scope-name">{scope.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Result Summary Card */}
            <div className="calc-result-panel">
              <div className="result-text">
                <span className="result-tag">Estimated Investment Range</span>
                <div className="result-amount">
                  RM {totalMin.toLocaleString()} – RM {totalMax.toLocaleString()}
                </div>
                <p className="result-note">
                  *Based on average material grades, certified labor & site supervision in Klang Valley. Final price confirmed via itemized BOQ.
                </p>
              </div>

              <button 
                type="button"
                className="btn result-cta"
                onClick={handleWhatsAppQuote}
              >
                <MessageCircle size={18} />
                <span>Request Itemized Quotation</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
