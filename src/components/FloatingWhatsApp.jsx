import React from 'react';
import './FloatingWhatsApp.scss';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-container">
      <a 
        href="https://wa.me/60126946907?text=Hi%20Green%20Cares%20Specialists,%20I'm%20looking%20for%20a%20quotation%20for%20my%20home%20renovation" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn"
        aria-label="Contact Green Cares Specialists"
      >
        <div className="whatsapp-icon-box">
          <MessageSquare size={18} className="wa-icon" />
        </div>
        <span className="floating-label">Message Us</span>
      </a>
    </div>
  );
}
