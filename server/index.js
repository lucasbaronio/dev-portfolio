/* eslint-disable no-undef */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { createServer as createViteServer } from 'vite';

import i18nextMiddleware from 'i18next-http-middleware';
import i18next from '../src/providers/i18next/i18nextSSR.js';
import { getGithubContributions } from './services/getGithubContributions.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

(async () => {
  // Cached production assets
  const ssrManifest = isProduction
    ? fs.readFileSync(path.resolve(__dirname, 'ssr-manifest.json'), 'utf-8')
    : undefined;

  // Create http server
  const app = express();
  app.use(cookieParser());

  app.use(
    session({
      secret: process.env.EXPRESS_SESSION_KEY || 'default',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: isProduction },
    }),
  );

  // Add Vite or respective production middlewares
  let vite;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(base, sirv('./dist/client', { extensions: [] }));
  }

  app.use(i18nextMiddleware.handle(i18next));

  // Serve HTML
  app.use('*', async (req, res) => {
    try {
      const lng = req.cookies.lng || 'es';
      req.i18n.changeLanguage(lng);

      const githubContributions = await getGithubContributions('lbaronio');
      const sessionData = {
        ...req.session.data,
        githubContributions,
      };

      const url = req.originalUrl.replace(base, '');

      let template;
      let render;
      if (!isProduction) {
        // 1. Read index.html
        template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');

        // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
        //    and also applies HTML transforms from Vite plugins, e.g. global
        //    preambles from @vitejs/plugin-react
        template = await vite.transformIndexHtml(url, template);

        // 3. Load the server entry. ssrLoadModule automatically transforms
        //    ESM source code to be usable in Node.js! There is no bundling
        //    required, and provides efficient invalidation similar to HMR.
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = '';
        render = (await import('../dist/server/entry-server.js')).render;
      }

      const rendered = await render({ path: req.originalUrl, i18n: req.i18n }, ssrManifest);

      const html = template
        .replace(`HTML_LNG`, lng)
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '')
        .replace(`APP_SESSION_DATA`, JSON.stringify(sessionData));

      res.cookie('lng', lng);
      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  // Start http server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
})();
