import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

// Build'de sayfalar HTML'e çevrilir (scripts/prerender.mjs): içerik varsa üzerine bağlan, yoksa (dev, 404) sıfırdan çiz.
const root = document.getElementById('root');
if (root.hasChildNodes()) {
	ReactDOM.hydrateRoot(root, <App prerendered />);
} else {
	ReactDOM.createRoot(root).render(<App />);
}
