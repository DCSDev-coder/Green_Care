import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ResidentialServices from '../components/ResidentialServices';
import WorkmanshipGallery from '../components/WorkmanshipGallery';
import ProcessTimeline from '../components/ProcessTimeline';
import CostEstimator from '../components/CostEstimator';
import CoverageHQ from '../components/CoverageHQ';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Showcase */}
      <Hero />

      {/* Services Overview */}
      <div className="home-section-wrapper">
        <ResidentialServices />
        <div className="container text-center section-action-row">
          <Link to="/services" className="btn btn-outline-primary">
            <span>Explore Complete Renovation Specifications & Scopes</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Workmanship & Proof */}
      <div className="home-section-wrapper dark-wrapper">
        <WorkmanshipGallery />
        <div className="container text-center section-action-row">
          <Link to="/workmanship" className="btn btn-primary">
            <span>View All Site Execution Proofs & C2 Cafe Case Study</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* 5-Step Process */}
      <div className="home-section-wrapper">
        <ProcessTimeline />
        <div className="container text-center section-action-row">
          <Link to="/process" className="btn btn-secondary">
            <span>Learn How Our Itemized BOQ & Warranty Protects You</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Calculator Widget Preview */}
      <CostEstimator />

      {/* Office & Regional Coverage */}
      <CoverageHQ />
    </div>
  );
}
