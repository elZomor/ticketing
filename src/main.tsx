import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/localization/i18n.js';
import Root from './components/root/Root.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
