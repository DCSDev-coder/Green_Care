import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoverageHQ from '../components/CoverageHQ';
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const routerLocation = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Terrace House',
    location: 'Semenyih / Eco Forest',
    scope: 'Wet Kitchen Extension',
    targetDate: 'Within 1-2 months',
    message: ''
  });

  const [fromQuiz, setFromQuiz] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if routed with quiz data or in session
    const quizData = routerLocation.state?.quizData || (() => {
      try {
        const stored = sessionStorage.getItem('greencares_quiz_answers') || localStorage.getItem('greencares_quiz_answers');
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    })();

    if (quizData && (routerLocation.state?.fromQuiz || quizData.propertyType)) {
      setFormData(prev => ({
        ...prev,
        propertyType: quizData.propertyType || prev.propertyType,
        location: quizData.location || prev.location,
        scope: quizData.scope || (quizData.selectedScopes && quizData.selectedScopes[0]) || prev.scope,
        targetDate: quizData.targetDate || quizData.timeline || prev.targetDate,
        message: prev.message || (quizData.budget ? `[From Renovation Matcher] Target Budget: ${quizData.budget}. All Scopes: ${(quizData.selectedScopes || []).join(', ')}` : '')
      }));
      if (routerLocation.state?.fromQuiz) {
        setFromQuiz(true);
      }
    }
  }, [routerLocation]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `Hello Green Cares Specialists!%0A%0ANew Renovation Consultation Request:%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Property: ${formData.propertyType}%0A- Location: ${formData.location}%0A- Scope: ${formData.scope}%0A- Target Date: ${formData.targetDate}%0A- Notes: ${formData.message || 'None'}`;
    window.open(`https://wa.me/60123456789?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-inner">
          <span className="page-badge">Direct Consultations & HQ Base</span>
          <h1>Contact Us & Service Coverage</h1>
          <p>
            Schedule a free on-site property inspection, visit our headquarters in Eco Forest Semenyih, or consult directly with our renovation project supervisors.
          </p>
        </div>
      </div>

      {/* Main Interactive Form & Info Grid */}
      <section className="section bg-slate-50 border-b border-slate-200">
        <div className="container">
          
          <div className="contact-grid-layout">
            
            {/* Left: Contact Form Box */}
            <div className="contact-form-column">
              <div className="contact-form-wrapper">
                <h3 className="form-title">Request a Free Site Inspection</h3>
                <p className="form-subtitle">
                  Fill in your property details below. Our team will review your requirements and reach out to you within 24 hours.
                </p>

                {fromQuiz && (
                  <div style={{ marginBottom: '1.25rem', padding: '0.85rem 1rem', background: '#ecfdf5', border: '1px solid #10b981', borderRadius: '10px', color: '#065f46', fontSize: '0.825rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Sparkles size={18} className="text-emerald-600" style={{ flexShrink: 0 }} />
                    <span><strong>Preferences Loaded:</strong> We've pre-filled your details from the Renovation Matcher Questionnaire!</span>
                  </div>
                )}

                {submitted && (
                  <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '10px', color: '#065f46', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={18} className="text-emerald-600" />
                    <span>Your inquiry request has been prepared! Our team will connect with you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="e.g. Kenneth Tan" 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Contact / Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="e.g. 012-345 6789" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Property Type</label>
                      <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                        <option value="Terrace House">Terrace House (1 / 2 / 3 Storey)</option>
                        <option value="Semi-D / Bungalow">Semi-Detached / Bungalow</option>
                        <option value="Condominium / Apartment">Condominium / Apartment</option>
                        <option value="Townhouse">Townhouse</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Project Location / Area</label>
                      <select name="location" value={formData.location} onChange={handleChange}>
                        <option value="Semenyih / Eco Forest">Semenyih / Eco Forest / EcoHill</option>
                        <option value="Kajang / Saujana Impian">Kajang / Country Heights</option>
                        <option value="Bangi / Seri Kembangan">Bangi / Seri Kembangan</option>
                        <option value="Cheras / Balakong">Cheras / Mahkota Cheras</option>
                        <option value="Cyberjaya / Putrajaya">Cyberjaya / Putrajaya</option>
                        <option value="Puchong / Subang">Puchong / Subang Jaya</option>
                        <option value="Petaling Jaya / KL">Petaling Jaya / Kuala Lumpur</option>
                        <option value="Other Selangor Area">Other Selangor Township</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Primary Renovation Scope</label>
                      <select name="scope" value={formData.scope} onChange={handleChange}>
                        <option value="Wet Kitchen Extension">Wet Kitchen Extension & Yard</option>
                        <option value="Whole House Makeover">Full Turnkey Home Makeover</option>
                        <option value="Bathroom Remodel & Waterproofing">Bathroom Waterproofing & Tiles</option>
                        <option value="Custom Carpentry & Storage">Custom Cabinets & Wardrobes</option>
                        <option value="Electrical Rewiring & Plaster Ceiling">3-Phase Rewiring & Plaster Ceiling</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Target Renovation Start</label>
                      <select name="targetDate" value={formData.targetDate} onChange={handleChange}>
                        <option value="Immediately (Within 2 weeks)">Immediately (Within 2 weeks)</option>
                        <option value="Within 1-2 months">Within 1–2 months</option>
                        <option value="Collecting keys soon (VP)">Collecting keys soon (VP)</option>
                        <option value="Just budgeting for now">Just budgeting for now</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Additional Notes / Wishlist (Optional)</label>
                    <textarea 
                      name="message" 
                      placeholder="Tell us about your home, layout wishes, or key concerns..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem' }}>
                    <MessageSquare size={16} />
                    <span>Submit Inspection Request</span>
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Headquarters Information */}
            <div className="contact-sidebar">
              
              <div className="office-info-card">
                <span className="card-tag">Physical Office Anchor</span>
                <h3>Green Cares Specialists HQ</h3>

                <div className="info-list">
                  <div className="info-item">
                    <div className="item-icon"><MapPin size={16} /></div>
                    <div>
                      <strong>Office Address</strong>
                      <span>No. 40-1 Jalan Eco Forest 6/1C, Eco Forest, 43500 Semenyih, Selangor, Malaysia</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="item-icon"><Phone size={16} /></div>
                    <div>
                      <strong>Landline Telephone</strong>
                      <a href="tel:+60378000511">03-7800 0511</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="item-icon"><Mail size={16} /></div>
                    <div>
                      <strong>Official Email</strong>
                      <a href="mailto:sales@greencares.my">sales@greencares.my</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="item-icon"><Clock size={16} /></div>
                    <div>
                      <strong>Consultation Hours</strong>
                      <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="card-map-btn">
                  <a 
                    href="https://maps.google.com/?q=Eco+Forest+Semenyih" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    <MapPin size={15} />
                    <span>Open in Google Maps / Waze</span>
                  </a>
                </div>
              </div>

              {/* Direct Consultation Callout */}
              <div className="quick-callout-card">
                <h4>Prefer to speak right now?</h4>
                <p>
                  Our project team answers inquiries Monday to Saturday. Send us photos of your property or your architectural floor plan.
                </p>
                <a 
                  href="https://wa.me/60123456789?text=Hi%20Green%20Cares,%20I%20would%20like%20to%20speak%20to%20a%20renovation%20supervisor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={16} />
                  <span>Message a Project Supervisor</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Coverage Map Section */}
      <CoverageHQ />

    </div>
  );
}
