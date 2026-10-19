import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import ScrollToTop from './components/ScrollToTop';
import ScrollRevealManager from './components/ScrollRevealManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkmanshipPage from './pages/WorkmanshipPage';
import ProcessPage from './pages/ProcessPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealManager />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/workmanship" element={<WorkmanshipPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/estimator" element={<HomePage />} />
            <Route path="/estimate" element={<HomePage />} />
            <Route path="/coverage" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollTopButton />
      </div>
    </Router>
  );
}
