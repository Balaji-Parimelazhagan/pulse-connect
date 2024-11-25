import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/primereact/resources/themes/lara-light-cyan/theme.css'; // theme
import '../node_modules/primereact/resources/primereact.min.css';
import App from './App.tsx';
import '/src/index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
