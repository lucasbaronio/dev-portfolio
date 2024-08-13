import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import './providers/i18next/i18next.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router.jsx';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Root>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Root>
  </React.StrictMode>,
);
