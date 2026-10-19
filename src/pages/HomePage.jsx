import React from 'react';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
import HomeProof from '../components/HomeProof';
import HomeProcess from '../components/HomeProcess';
import HomeEstimator from '../components/HomeEstimator';
import HomeCoverage from '../components/HomeCoverage';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. Hero Showcase: Bold Typography, Proof Card & Guarantees */}
      <Hero />

      {/* 2. Core Residential Specializations: Modern 4-Card Grid */}
      <HomeServices />

      {/* 3. Real Proof & Quality Standards: 3 Curated Execution Cards */}
      <HomeProof />

      {/* 4. The Green Cares Standard: Clean 4-Step Connected Workflow */}
      <HomeProcess />

      {/* 5. Quick Budget Estimator: Interactive 30-Second Teaser Card */}
      <HomeEstimator />

      {/* 6. Operational Headquarters & Service Enclaves */}
      <HomeCoverage />
    </div>
  );
}
