import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeQuestionnaire.scss';
import {
  Home,
  Building2,
  Building,
  Layers,
  UtensilsCrossed,
  Bath,
  Sparkles,
  Zap,
  Hammer,
  Paintbrush,
  MapPin,
  Calendar,
  Clock,
  Banknote,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  ClipboardList
} from 'lucide-react';

// Property Type Options
const PROPERTY_OPTIONS = [
  {
    id: 'Terrace House',
    name: 'Terrace / Landed House',
    desc: '1, 2 or 3-Storey Landed Property',
    icon: Home,
    baseMin: 18000,
    baseMax: 28000
  },
  {
    id: 'Semi-D / Bungalow',
    name: 'Semi-D / Bungalow',
    desc: 'Detached or Semi-Detached Home',
    icon: Building2,
    baseMin: 28000,
    baseMax: 45000
  },
  {
    id: 'Condominium / Apartment',
    name: 'Condo / Apartment',
    desc: 'High-rise Unit / Strata Residence',
    icon: Building,
    baseMin: 14000,
    baseMax: 22000
  },
  {
    id: 'Townhouse',
    name: 'Townhouse / Cluster',
    desc: 'Multi-level Strata Landed Home',
    icon: Layers,
    baseMin: 16000,
    baseMax: 25000
  }
];

// Scope Options
const SCOPE_OPTIONS = [
  {
    id: 'Wet Kitchen Extension',
    label: 'Wet Kitchen Extension',
    desc: 'Rear extension, slab, brickwork & roofing',
    icon: UtensilsCrossed,
    min: 16000,
    max: 26000
  },
  {
    id: 'Bathroom Remodel & Waterproofing',
    label: 'Bathroom Overhaul',
    desc: 'Tiles, piping & mandatory 72h ponding test',
    icon: Bath,
    min: 9000,
    max: 15000
  },
  {
    id: 'Whole House Makeover',
    label: 'Whole House Makeover',
    desc: 'Full turnkey transformation & layout rework',
    icon: Sparkles,
    min: 40000,
    max: 75000
  },
  {
    id: 'Electrical Rewiring & Plaster Ceiling',
    label: 'Ceiling & Electrical',
    desc: 'L-box plaster ceiling, lighting & 3-phase rewire',
    icon: Zap,
    min: 6000,
    max: 11000
  },
  {
    id: 'Custom Carpentry & Storage',
    label: 'Custom Built-in Carpentry',
    desc: 'Kitchen cabinets, wardrobes & TV consoles',
    icon: Layers,
    min: 12000,
    max: 24000
  },
  {
    id: 'Flooring & Tiling',
    label: 'Flooring & SPC Tiling',
    desc: 'Heavy-duty porcelain tiles, vinyl or SPC',
    icon: Hammer,
    min: 8000,
    max: 14000
  },
  {
    id: 'Painting & Crack Repair',
    label: 'Painting & Waterproofing',
    desc: 'Interior/exterior coating & crack sealing',
    icon: Paintbrush,
    min: 3500,
    max: 6500
  }
];

// Location Options in Selangor & KL
const LOCATION_OPTIONS = [
  {
    id: 'Semenyih / Eco Forest',
    label: 'Semenyih / Eco Forest / EcoHill',
    highlight: 'Green Cares HQ Hub · 0 Mobilization Lag',
    icon: MapPin
  },
  {
    id: 'Kajang / Saujana Impian',
    label: 'Kajang / Saujana Impian / Country Heights',
    highlight: 'Core Primary Area',
    icon: MapPin
  },
  {
    id: 'Bangi / Seri Kembangan',
    label: 'Bangi / Seri Kembangan',
    highlight: 'Frequent Active Sites',
    icon: MapPin
  },
  {
    id: 'Cheras / Balakong',
    label: 'Cheras / Mahkota Cheras / Balakong',
    highlight: 'Active Project Coverage',
    icon: MapPin
  },
  {
    id: 'Cyberjaya / Putrajaya',
    label: 'Cyberjaya / Putrajaya',
    highlight: 'South Klang Valley',
    icon: MapPin
  },
  {
    id: 'Petaling Jaya / KL',
    label: 'Petaling Jaya / Subang / KL City',
    highlight: 'Greater Klang Valley Area',
    icon: MapPin
  },
  {
    id: 'Other Selangor Area',
    label: 'Other Selangor / Klang Valley Township',
    highlight: 'Available upon consultation',
    icon: MapPin
  }
];

// Target Date Options
const TIMELINE_OPTIONS = [
  {
    id: 'Immediately (Within 2 weeks)',
    label: 'Immediately (Within 2 weeks)',
    sub: 'Keys already on hand · Ready to commence',
    icon: Zap
  },
  {
    id: 'Within 1-2 months',
    label: 'Within 1 to 2 Months',
    sub: 'Finalizing layout ideas & getting quotes',
    icon: Calendar
  },
  {
    id: 'Collecting keys soon (VP)',
    label: 'Collecting Keys Soon (VP)',
    sub: 'Expecting vacant possession in 2–4 months',
    icon: Clock
  },
  {
    id: 'Just budgeting for now',
    label: 'Just Budgeting / Researching',
    sub: 'Exploring feasibility & line-by-line BOQ',
    icon: ClipboardList
  }
];

// Budget Range Options
const BUDGET_OPTIONS = [
  { id: 'Under RM 30,000', label: 'Under RM 30,000', desc: 'Touch-up / targeted single-zone work' },
  { id: 'RM 30,000 – RM 70,000', label: 'RM 30,000 – RM 70,000', desc: 'Partial renovation (Kitchen or 2 Bathrooms)' },
  { id: 'RM 70,000 – RM 150,000', label: 'RM 70,000 – RM 150,000', desc: 'Substantial extension or major overhaul' },
  { id: 'RM 150,000+', label: 'RM 150,000 and above', desc: 'Comprehensive full-turnkey luxury makeover' },
  { id: 'Guide me based on my scope', label: 'Guide me based on my scope', desc: 'Need professional itemized cost breakdown' }
];

export default function WelcomeQuestionnaire() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Selections State
  const [propertyType, setPropertyType] = useState('Terrace House');
  const [selectedScopes, setSelectedScopes] = useState(['Wet Kitchen Extension']);
  const [location, setLocation] = useState('Semenyih / Eco Forest');
  const [timeline, setTimeline] = useState('Within 1-2 months');
  const [budget, setBudget] = useState('RM 70,000 – RM 150,000');
  const [hasCompleted, setHasCompleted] = useState(false);

  // Auto-open on initial entry after delay
  useEffect(() => {
    const hasSeenSession = sessionStorage.getItem('greencares_questionnaire_closed');
    const hasSavedCompleted = localStorage.getItem('greencares_quiz_completed');

    if (hasSavedCompleted) {
      setHasCompleted(true);
    }

    if (!hasSeenSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for global custom event to open questionnaire from any button
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-questionnaire', handleOpen);
    return () => window.removeEventListener('open-questionnaire', handleOpen);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('greencares_questionnaire_closed', 'true');
  };

  const handleToggleScope = (scopeId) => {
    setSelectedScopes((prev) => {
      if (prev.includes(scopeId)) {
        // keep at least 1 scope selected
        if (prev.length === 1) return prev;
        return prev.filter((id) => id !== scopeId);
      } else {
        return [...prev, scopeId];
      }
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete questionnaire
      setHasCompleted(true);
      setCurrentStep(6); // Step 6 is Results
      saveAnswers();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setPropertyType('Terrace House');
    setSelectedScopes(['Wet Kitchen Extension']);
    setLocation('Semenyih / Eco Forest');
    setTimeline('Within 1-2 months');
    setBudget('RM 70,000 – RM 150,000');
    setCurrentStep(1);
  };

  const saveAnswers = () => {
    const data = {
      propertyType,
      selectedScopes,
      location,
      timeline,
      budget,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('greencares_quiz_completed', 'true');
    localStorage.setItem('greencares_quiz_answers', JSON.stringify(data));
    sessionStorage.setItem('greencares_quiz_answers', JSON.stringify(data));
  };

  // Calculate indicative price estimate
  const calculateEstimate = () => {
    const propConfig = PROPERTY_OPTIONS.find((p) => p.id === propertyType) || PROPERTY_OPTIONS[0];
    let min = propConfig.baseMin;
    let max = propConfig.baseMax;

    selectedScopes.forEach((sId) => {
      const scopeConfig = SCOPE_OPTIONS.find((s) => s.id === sId);
      if (scopeConfig) {
        min += scopeConfig.min;
        max += scopeConfig.max;
      }
    });

    return { min, max };
  };

  const estimate = calculateEstimate();

  // Handle WhatsApp Link
  const handleWhatsAppQuote = () => {
    const message = `Hello Green Cares Specialists!%0A%0AI just completed your website's Renovation Matcher Questionnaire:%0A%0A🏠 *Property:* ${propertyType}%0A📍 *Location:* ${location}%0A🔨 *Scopes Needed:* ${selectedScopes.join(', ')}%0A⏱️ *Timeline:* ${timeline}%0A💰 *Target Budget:* ${budget}%0A📊 *Indicative Estimate:* RM ${estimate.min.toLocaleString()} – RM ${estimate.max.toLocaleString()}%0A%0AI would like to schedule a free site inspection & get an itemized BOQ consultation.`;
    window.open(`https://wa.me/60123456789?text=${message}`, '_blank');
  };

  // Handle Navigate to Contact Page with prefilled details
  const handleBookInspection = () => {
    saveAnswers();
    handleClose();
    navigate('/contact', {
      state: {
        fromQuiz: true,
        quizData: {
          propertyType,
          location,
          scope: selectedScopes[0] || 'Wet Kitchen Extension',
          targetDate: timeline,
          budget,
          selectedScopes
        }
      }
    });
  };

  return (
    <>
      {/* Persistent Floating Trigger Pill (Bottom Left) */}
      <button
        type="button"
        className={`questionnaire-launcher-pill ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Renovation Assessment Questionnaire"
        title="Open Quick Renovation Questionnaire"
      >
        <div className="pill-icon-box">
          <Sparkles size={16} className="pill-icon" />
        </div>
        <div className="pill-text-block">
          <span className="pill-title">{hasCompleted ? 'Your Renovation Match' : 'Quick Project Quiz'}</span>
          <span className="pill-subtitle">60-sec cost estimate</span>
        </div>
      </button>

      {/* Main Questionnaire Modal Overlay */}
      {isOpen && (
        <div className="questionnaire-overlay" onClick={handleClose}>
          <div
            className="questionnaire-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-modal-title"
          >
            {/* Modal Header */}
            <div className="quiz-header">
              <div className="quiz-brand-tag">
                <span className="brand-dot"></span>
                <span>Green Cares Specialists · Selangor & KL</span>
              </div>
              <button
                type="button"
                className="quiz-close-btn"
                onClick={handleClose}
                aria-label="Close questionnaire"
              >
                <X size={18} />
              </button>
            </div>

            {/* Step Progress Bar (Hidden on results step) */}
            {currentStep <= totalSteps && (
              <div className="quiz-progress-bar-wrap">
                <div className="quiz-step-info">
                  <span className="quiz-step-label">Step {currentStep} of {totalSteps}</span>
                  <span className="quiz-step-percent">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="quiz-progress-track">
                  <div
                    className="quiz-progress-fill"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Modal Body / Steps */}
            <div className="quiz-body">
              {/* STEP 1: Property Type */}
              {currentStep === 1 && (
                <div className="quiz-step-view animate-fade-in">
                  <div className="step-heading-group">
                    <span className="step-badge">Question 1</span>
                    <h2 id="quiz-modal-title" className="step-title">
                      What type of property are you renovating?
                    </h2>
                    <p className="step-subtitle">
                      Helps us evaluate structural guidelines, setback requirements, or condo management rules.
                    </p>
                  </div>

                  <div className="quiz-options-grid grid-2x2">
                    {PROPERTY_OPTIONS.map((prop) => {
                      const IconComp = prop.icon;
                      const isSelected = propertyType === prop.id;
                      return (
                        <div
                          key={prop.id}
                          className={`quiz-card-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => setPropertyType(prop.id)}
                          tabIndex={0}
                          role="radio"
                          aria-checked={isSelected}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setPropertyType(prop.id)}
                        >
                          <div className="option-icon-box">
                            <IconComp size={22} />
                          </div>
                          <div className="option-text-group">
                            <strong className="option-name">{prop.name}</strong>
                            <span className="option-desc">{prop.desc}</span>
                          </div>
                          <div className={`option-radio-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Scope of Work */}
              {currentStep === 2 && (
                <div className="quiz-step-view animate-fade-in">
                  <div className="step-heading-group">
                    <span className="step-badge">Question 2</span>
                    <h2 className="step-title">Which scopes of work are you planning?</h2>
                    <p className="step-subtitle">
                      Select all that apply. We provide comprehensive, itemized line-by-line BOQs with zero hidden fees.
                    </p>
                  </div>

                  <div className="quiz-options-grid grid-compact">
                    {SCOPE_OPTIONS.map((scope) => {
                      const IconComp = scope.icon;
                      const isSelected = selectedScopes.includes(scope.id);
                      return (
                        <div
                          key={scope.id}
                          className={`quiz-card-option compact ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleToggleScope(scope.id)}
                          tabIndex={0}
                          role="checkbox"
                          aria-checked={isSelected}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggleScope(scope.id)}
                        >
                          <div className="option-icon-box small">
                            <IconComp size={18} />
                          </div>
                          <div className="option-text-group">
                            <strong className="option-name">{scope.label}</strong>
                            <span className="option-desc">{scope.desc}</span>
                          </div>
                          <div className={`option-check-box ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Location */}
              {currentStep === 3 && (
                <div className="quiz-step-view animate-fade-in">
                  <div className="step-heading-group">
                    <span className="step-badge">Question 3</span>
                    <h2 className="step-title">Where is your property located?</h2>
                    <p className="step-subtitle">
                      Our primary project managers operate directly from our Eco Forest Semenyih headquarters.
                    </p>
                  </div>

                  <div className="quiz-options-list">
                    {LOCATION_OPTIONS.map((loc) => {
                      const IconComp = loc.icon;
                      const isSelected = location === loc.id;
                      return (
                        <div
                          key={loc.id}
                          className={`quiz-card-option horizontal ${isSelected ? 'selected' : ''}`}
                          onClick={() => setLocation(loc.id)}
                          tabIndex={0}
                          role="radio"
                          aria-checked={isSelected}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLocation(loc.id)}
                        >
                          <div className="option-icon-box small">
                            <IconComp size={18} />
                          </div>
                          <div className="option-text-group">
                            <strong className="option-name">{loc.label}</strong>
                            <span className="option-highlight">{loc.highlight}</span>
                          </div>
                          <div className={`option-radio-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Timeline */}
              {currentStep === 4 && (
                <div className="quiz-step-view animate-fade-in">
                  <div className="step-heading-group">
                    <span className="step-badge">Question 4</span>
                    <h2 className="step-title">What is your ideal project start date?</h2>
                    <p className="step-subtitle">
                      Allows us to reserve our direct on-site supervisors and project workforce.
                    </p>
                  </div>

                  <div className="quiz-options-grid grid-2x2">
                    {TIMELINE_OPTIONS.map((item) => {
                      const IconComp = item.icon;
                      const isSelected = timeline === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`quiz-card-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => setTimeline(item.id)}
                          tabIndex={0}
                          role="radio"
                          aria-checked={isSelected}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setTimeline(item.id)}
                        >
                          <div className="option-icon-box">
                            <IconComp size={20} />
                          </div>
                          <div className="option-text-group">
                            <strong className="option-name">{item.label}</strong>
                            <span className="option-desc">{item.sub}</span>
                          </div>
                          <div className={`option-radio-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Budget */}
              {currentStep === 5 && (
                <div className="quiz-step-view animate-fade-in">
                  <div className="step-heading-group">
                    <span className="step-badge">Question 5</span>
                    <h2 className="step-title">What is your approximate budget target?</h2>
                    <p className="step-subtitle">
                      We optimize line items to deliver maximum value without compromising materials or 72-hr waterproofing.
                    </p>
                  </div>

                  <div className="quiz-options-list">
                    {BUDGET_OPTIONS.map((item) => {
                      const isSelected = budget === item.id;
                      return (
                        <div
                          key={item.id}
                          className={`quiz-card-option horizontal ${isSelected ? 'selected' : ''}`}
                          onClick={() => setBudget(item.id)}
                          tabIndex={0}
                          role="radio"
                          aria-checked={isSelected}
                          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setBudget(item.id)}
                        >
                          <div className="option-icon-box small">
                            <Banknote size={18} />
                          </div>
                          <div className="option-text-group">
                            <strong className="option-name">{item.label}</strong>
                            <span className="option-desc">{item.desc}</span>
                          </div>
                          <div className={`option-radio-check ${isSelected ? 'checked' : ''}`}>
                            {isSelected && <Check size={14} />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: RESULTS & TAILORED SUMMARY */}
              {currentStep === 6 && (
                <div className="quiz-results-view animate-fade-in">
                  <div className="results-celebration-header">
                    <div className="results-icon-badge">
                      <Sparkles size={28} />
                    </div>
                    <h2>Your Tailored Renovation Match</h2>
                    <p>Based on your property and requirements, here is your indicative project breakdown:</p>
                  </div>

                  {/* Highlight Estimate Card */}
                  <div className="results-estimate-card">
                    <div className="estimate-header">
                      <span>Indicative Cost Estimate</span>
                      <span className="estimate-pill">Itemized BOQ Standard</span>
                    </div>
                    <div className="estimate-number-row">
                      <span className="estimate-range">
                        RM {estimate.min.toLocaleString()} – RM {estimate.max.toLocaleString()}
                      </span>
                    </div>
                    <p className="estimate-sub">
                      *Reflects base structural works + {selectedScopes.length} selected scopes. Exact price finalized with on-site inspection.
                    </p>
                  </div>

                  {/* Summary Details Grid */}
                  <div className="results-summary-grid">
                    <div className="summary-pill-item">
                      <span className="pill-label">Property</span>
                      <strong>{propertyType}</strong>
                    </div>
                    <div className="summary-pill-item">
                      <span className="pill-label">Location</span>
                      <strong>{location}</strong>
                    </div>
                    <div className="summary-pill-item">
                      <span className="pill-label">Timeline</span>
                      <strong>{timeline}</strong>
                    </div>
                    <div className="summary-pill-item">
                      <span className="pill-label">Budget Tier</span>
                      <strong>{budget}</strong>
                    </div>
                  </div>

                  {/* Selected Scopes Badges */}
                  <div className="results-scopes-block">
                    <span className="scopes-title">Selected Work Scopes ({selectedScopes.length}):</span>
                    <div className="scopes-badges-wrap">
                      {selectedScopes.map((scope) => (
                        <span key={scope} className="scope-tag">
                          <CheckCircle2 size={13} />
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Green Cares Value Assurance Callout */}
                  <div className="results-guarantee-card">
                    <div className="guarantee-icon">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="guarantee-text">
                      <strong>The Green Cares Assurance Included:</strong>
                      <ul>
                        <li>Mandatory 72-Hour Water Ponding Test before tiling</li>
                        <li>Weekly on-site photo logs & dedicated site supervisor</li>
                        <li>12-Month Workmanship Defect Liability Warranty</li>
                      </ul>
                    </div>
                  </div>

                  {/* Next Step Action Buttons */}
                  <div className="results-actions">
                    <button
                      type="button"
                      className="btn btn-whatsapp-large"
                      onClick={handleWhatsAppQuote}
                    >
                      <MessageCircle size={18} />
                      <span>Send to WhatsApp for Fast Assessment</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary-large"
                      onClick={handleBookInspection}
                    >
                      <span>Book Free On-Site Inspection</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div className="results-footer-links">
                    <button type="button" className="text-btn" onClick={handleReset}>
                      <RotateCcw size={14} />
                      <span>Retake Questionnaire</span>
                    </button>
                    <button type="button" className="text-btn" onClick={handleClose}>
                      Continue Browsing Website
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Navigation Footer (Steps 1 to 5) */}
            {currentStep <= totalSteps && (
              <div className="quiz-footer">
                <div className="footer-left">
                  {currentStep > 1 ? (
                    <button type="button" className="btn btn-quiz-secondary" onClick={handleBack}>
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>
                  ) : (
                    <button type="button" className="btn btn-quiz-skip" onClick={handleClose}>
                      Skip for now
                    </button>
                  )}
                </div>

                <div className="footer-right">
                  <button type="button" className="btn btn-quiz-primary" onClick={handleNext}>
                    <span>{currentStep === totalSteps ? 'View Renovation Match' : 'Next Step'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
