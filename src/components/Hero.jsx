import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import heroBannerImg from '../assets/images/Home-page-scaled.webp';
import { ShieldCheck, ArrowRight, Calculator, CheckCircle2, MapPin, Sparkles, Hammer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow-blob top-center"></div>

      <div className="container hero-container">
        
        {/* Main 2-Column Split: Content on Left, Visual Banner Card Right Beside */}
        <div className="hero-main-grid">
          
          {/* Left Column: Brand, Subtitle & Actions */}
          <div className="hero-content-block">
            {/* Minimalist Top Tag Row */}
            <div className="hero-badge-row">
              <span className="hero-badge">Selangor & KL Residential Specialists</span>
              <span className="hero-subtag">Plan • Design • Build</span>
            </div>

            {/* Inspiring, Modern Typographic Headline */}
            <h1 className="hero-heading">
              Built Right, The First Time. <br className="hero-br" />
              <span className="text-emerald-gradient">Transparent Home Renovations.</span>
            </h1>

            {/* Clear, Simple Subtitle */}
            <p className="hero-lead">
              From landed kitchen extensions to turnkey condo fit-outs. We build with itemized line-by-line BOQs, weekly on-site photo logs, and mandatory 72-hour waterproofing verification.
            </p>

            {/* Clean Action Buttons */}
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-hero-primary">
                <span>Book Free Site Inspection</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/calculator" className="btn btn-hero-secondary">
                <Calculator size={16} />
                <span>Estimate Renovation Budget</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Architectural Card Right Beside */}
          <div className="hero-visual-block">
            <div className="banner-card">
              <img 
                src={heroBannerImg} 
                alt="Green Cares Specialists Residential Home Renovation & Architecture Banner" 
                className="banner-img"
              />
              <div className="banner-overlay"></div>

              {/* Floating Proof Badges */}
              <div className="floating-badge top-badge">
                <div className="badge-icon">
                  <Sparkles size={14} />
                </div>
                <div>
                  <span className="floating-title">120+ Homes Renovated</span>
                  <span className="floating-sub">Zero shortcuts · 100% On-Time</span>
                </div>
              </div>

              <div className="floating-badge bottom-badge">
                <div className="badge-icon success">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="floating-title">72-Hour Water Ponding Test</span>
                  <span className="floating-sub">Mandatory leak-proof verification</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Pillar Guarantees & Location Underneath Banner */}
        <div className="hero-footer-bar">
          <div className="hero-trust-bar">
            <div className="trust-item">
              <div className="trust-icon">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <strong>Itemized BOQ</strong>
                <span>Line-by-line pricing</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <Hammer size={16} />
              </div>
              <div>
                <strong>Direct Supervision</strong>
                <span>Weekly on-site photo logs</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <ShieldCheck size={16} />
              </div>
              <div>
                <strong>12-Mo Warranty</strong>
                <span>Defect liability cover</span>
              </div>
            </div>
          </div>

          <div className="hero-location">
            <MapPin size={14} />
            <span>Eco Forest HQ, Semenyih · Serving Kajang, Bangi, Cheras, PJ & Klang Valley</span>
          </div>
        </div>

      </div>
    </section>
  );
}
