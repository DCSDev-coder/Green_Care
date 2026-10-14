import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';
import c2Img from '../assets/images/c2-main.webp';
import { CheckCircle2, ShieldCheck, ArrowRight, Eye, Hammer, MapPin, Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.72) 45%, rgba(15, 23, 42, 0.94) 100%), url(${c2Img})`
      }}
    >
      <div className="hero-backdrop"></div>
      
      <div className="container hero-container">
        <div className="hero-center-content">

          <h1 className="hero-title">
            Quality Home Renovation. <br />
            <span className="gradient-text">Zero Shoddy Workmanship.</span>
          </h1>

          <p className="hero-description">
            From landed kitchen extensions and porch structural works to clean condo interior fit-outs. We share transparent on-site photo logs at every milestone—no hidden variations, zero shortcuts.
          </p>

          {/* 3 Pillar Cards (Horizontal 3-Column Layout) */}
          <div className="hero-guarantees">
            <div className="guarantee-card">
              <div className="icon-wrapper">
                <CheckCircle2 size={18} />
              </div>
              <div className="guarantee-text">
                <strong>Itemized BOQ</strong>
                <p>Line-by-line pricing, no surprise bills</p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="icon-wrapper">
                <Hammer size={18} />
              </div>
              <div className="guarantee-text">
                <strong>Direct Supervision</strong>
                <p>Weekly on-site photo & video logs</p>
              </div>
            </div>

            <div className="guarantee-card">
              <div className="icon-wrapper">
                <ShieldCheck size={18} />
              </div>
              <div className="guarantee-text">
                <strong>Workmanship Warranty</strong>
                <p>Post-handover defect liability cover</p>
              </div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <span>Book Free Site Inspection</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/calculator" className="btn btn-glass">
              <Calculator size={16} />
              <span>Calculate Renovation Budget</span>
            </Link>

            <Link to="/workmanship" className="btn btn-outline-glass">
              <Eye size={16} />
              <span>View On-Site Workmanship</span>
            </Link>
          </div>

          {/* Geographic Coverage */}
          <div className="hero-location-bar">
            <MapPin size={15} />
            <span>Eco Forest HQ, Semenyih · Serving Semenyih, Kajang, Bangi, Cheras, PJ, KL & wider Selangor</span>
          </div>

        </div>
      </div>
    </section>
  );
}
