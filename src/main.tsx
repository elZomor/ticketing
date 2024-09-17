import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/localization/i18n.js';
import Root from './components/root/Root.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
