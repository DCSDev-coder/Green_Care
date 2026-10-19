import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TARGET_SELECTORS = [
  // Section Headers & Titles
  '.section-header',
  '.home-section-header',
  '.workmanship-header',
  '.coverage-heading-group',
  '.section-action-row',
  '.plan-review-banner',
  '.process-cta-banner',

  // Home Page Modern Grids & Cards
  '.home-services-grid > .home-service-card',
  '.home-proof-grid > .proof-card',
  '.process-stepper-grid > .process-step-item',
  '.estimator-card',
  '.coverage-card',
  '.services-grid > .service-card',
  '.gallery-grid > .workmanship-card',
  '.timeline-grid > .timeline-card',
  '.zone-tabs-grid > .zone-pill-card',
  '.active-zone-showcase',
  '.contact-card',

  // 5-Step Process & Process Page
  '.step-cards-grid > .step-card',
  '.boq-explanation',
  '.boq-feature-list > .boq-feature-item',
  '.boq-preview-card',
  '.red-flags-section .section-header',
  '.red-flags-grid > .red-flag-card',
  '.cards-grid-4 > .red-flag-card',

  // Services Page
  '.detail-layout > .detail-content',
  '.detail-layout > .detail-media',
  '.detail-media .media-card',
  '.comparison-section .section-header',
  '.comparison-table-wrapper',
  '.faq-section .section-header',
  '.faq-grid > .faq-card',

  // Workmanship Page
  '.c2-showcase-box',
  '.c2-features-grid > .c2-feature-card',
  '.c2-image-card',
  '.cards-grid-4 > .info-card',
  '.cards-grid-3 > .info-card',
  '.cards-grid-2 > .info-card',
  '.cards-grid > .info-card',

  // Calculator Page & Widget
  '.calculator-box',
  '.prop-grid > .prop-card',
  '.scope-grid > .scope-checkbox-card',
  '.direct-calc-card',

  // Contact Page
  '.contact-form-column',
  '.contact-form-wrapper',
  '.contact-sidebar',
  '.office-info-card',
  '.quick-callout-card',

  // Reusable & Modifiers
  '.reveal-item',
  '.reveal-fade',
  '.reveal-scale'
].join(', ');

export default function ScrollRevealManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const initReveals = (isRouteChange = false) => {
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const elements = document.querySelectorAll(TARGET_SELECTORS);

      elements.forEach((el) => {
        // If not a route change and element is already revealed, keep it revealed
        if (!isRouteChange && el.classList.contains('revealed')) return;

        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + scrollY;

        // Above the fold (hero / top of page area): reveal immediately so screen is never blank
        if (absoluteTop < vh * 0.85) {
          el.classList.add('reveal-init', 'revealed');
        } else if (scrollY > 100 && rect.top < vh * 0.95 && rect.bottom > 0) {
          // If page was refreshed while already scrolled down into this element
          el.classList.add('reveal-init', 'revealed');
        } else {
          // Below the fold: animate when scrolled down into
          el.classList.add('reveal-init');
          el.classList.remove('revealed');
          observer.observe(el);
        }
      });
    };

    // First run for this route
    initReveals(true);
    const rafId = requestAnimationFrame(() => initReveals(false));
    const timerId = setTimeout(() => initReveals(false), 120);

    const mutationObserver = new MutationObserver(() => {
      initReveals(false);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
