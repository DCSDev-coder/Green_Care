import React, { useState } from 'react';
import './CostEstimator.scss';
import { Calculator, ArrowRight, MessageCircle, Check, HelpCircle } from 'lucide-react';

const propertyOptions = [
  { id: 'terrace', name: 'Terrace House', icon: '🏡', baseMin: 18000, baseMax: 28000 },
  { id: 'semid', name: 'Semi-D / Bungalow', icon: '🏠', baseMin: 28000, baseMax: 45000 },
  { id: 'condo', name: 'Condo / Apartment', icon: '🏢', baseMin: 14000, baseMax: 22000 },
  { id: 'townhouse', name: 'Townhouse', icon: '🏘️', baseMin: 16000, baseMax: 25000 }
];

const scopeOptions = [
  { id: 'kitchen', label: 'Wet Kitchen Extension', min: 16000, max: 26000, default: true },
  { id: 'bath', label: 'Bathroom Remodeling (2x)', min: 9000, max: 15000, default: true },
  { id: 'plaster', label: 'Plaster Ceiling & Wiring', min: 6000, max: 11000, default: true },
  { id: 'flooring', label: 'Tiling / SPC Flooring', min: 8000, max: 14000, default: false },
  { id: 'carpentry', label: 'Custom Cabinets & Storage', min: 12000, max: 24000, default: false },
  { id: 'paint', label: 'Whole House Repainting', min: 3500, max: 6500, default: false }
];

export default function CostEstimator() {
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

  // Calculate dynamic range
  const propConfig = propertyOptions.find(p => p.id === selectedProp);
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
                {propertyOptions.map(prop => (
                  <button
                    key={prop.id}
                    type="button"
                    className={`prop-card ${selectedProp === prop.id ? 'active' : ''}`}
                    onClick={() => setSelectedProp(prop.id)}
                  >
                    <span className="prop-emoji">{prop.icon}</span>
                    <span className="prop-name">{prop.name}</span>
                    {selectedProp === prop.id && (
                      <span className="active-dot">✓</span>
                    )}
                  </button>
                ))}
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
                className="btn btn-whatsapp result-cta"
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
