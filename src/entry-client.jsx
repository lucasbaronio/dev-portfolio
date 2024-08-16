import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import i18n from './providers/i18next/i18nextSSR.js';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
// import { Router } from './router';

const lng = document.documentElement.lang || 'es';

i18n.changeLanguage(lng);

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Root>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          {/* <Router /> */}
          <div>Holaaa</div>
        </BrowserRouter>
      </I18nextProvider>
    </Root>
  </React.StrictMode>,
);
