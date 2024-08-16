import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './Root';
import { I18nextProvider } from 'react-i18next';
import { StaticRouter } from 'react-router-dom/server';
// import { Router } from './router';

export function render({ path, i18n }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Root>
        <I18nextProvider i18n={i18n}>
          <StaticRouter location={path}>
            {/* <Router /> */}
            <div>Holaaa</div>
          </StaticRouter>
        </I18nextProvider>
      </Root>
    </React.StrictMode>,
  );
  return { html };
}
