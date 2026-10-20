import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Reset any residual dark mode state
try {
  document.documentElement.removeAttribute('data-theme');
  document.body.classList.remove('theme-dark', 'theme-light');
  localStorage.removeItem('greencares_theme');
} catch {
  // Ignore in environments without window/localStorage
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
