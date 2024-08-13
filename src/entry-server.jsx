import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './Root.jsx';
import './providers/i18next/i18next.js';
import { StaticRouter } from 'react-router-dom/server';
import { Router } from './router';

export function render({ path }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Root>
        <StaticRouter location={path}>
          <Router />
        </StaticRouter>
      </Root>
    </React.StrictMode>,
  );
  return { html };
}
