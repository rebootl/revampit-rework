import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import databaseApp from './database.ts';
import { createLanguageApp } from './language/language.ts';

import { createEndpoints } from './routes.ts';

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3002;

const app: express.Application = express();

// static files
app.use('/static', express.static('static/'));

// modules for parsing cookies and url encoded bodies
// NOTE: cookie-parser and body-parser are needed by subsequent apps, but should only be loaded once
// in order to avoid 'stream is not readable' error, therefore we load it here once
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// use admin app
// this adds the admin interface under the endpoint '/admin'
// it provides a login for the site owners and is used to
// add and manage dynamic content like blog posts etc.
// app.use(adminApp);

// Use the database app
app.use(databaseApp);

// use language app
// this provides capabilities and for switching language on the site,
// the selected language is added to the request object as `req.lang`
// NOTE: the admin app uses a separate instance of the language app
const languageApp = createLanguageApp('lang', '/set-lang');
app.use(languageApp);

// below pages are rendered using the base template from './templates/base.js'

// create static endpoints from directory structure
// this recursively creates endpoints for each 'page.js' file
// in the './routes' directory and its subdirectories.
// 
// e.g.:
// routes/page.js                 -> /
// routes/about/page.js           -> /about
// routes/contact/page.js         -> /contact
// routes/services/repair/page.js -> /services/repair
// 
createEndpoints(app, './routes');

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
