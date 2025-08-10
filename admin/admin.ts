import express from 'express';

import { Request, Response } from 'express';

import databaseApp from './database/database.ts';
import authApp from './auth/auth.ts';
import { createLanguageApp } from '../language/language.ts';

import { isLoggedIn } from './auth/auth.ts';

import { adminBaseTemplate } from './templates/adminBase.js';
import { loginPageContent } from './templates/login.js';
import { adminPageContent } from './templates/admin.js';

import entriesApp from './entries.ts';

// const cookieName: string = process.env.ADMIN_COOKIE_NAME || 'admin-session-id';

const app = express();

// Create admin language app with separate cookie and endpoint
// const adminLanguageApp = createLanguageApp('admin_lang', '/admin/set-lang');

// Use the database app
app.use(databaseApp);

// Use the auth app
app.use(authApp);

// Create admin language app with separate cookie and endpoint
const languageApp = createLanguageApp('adminlang', '/admin/set-lang');
app.use(languageApp);

// Use the entries app
app.use(entriesApp);

// Define the /admin endpoint
app.get('/admin', isLoggedIn, (req: Request, res: Response) => {
  if (!req.locals.loggedIn) {
    res.redirect('/admin/login');
    return;
  }

  // Fetch entries from database
  let entries = [];
  let messageType = req.query.messageType as string || '';

  try {
    const stmt = req.db.prepare('SELECT * FROM entries ORDER BY created_at DESC');
    entries = stmt.all();
  } catch (err) {
    messageType = 'errorDatabase';
    console.error('Database error:', err);
  }

  const content = adminPageContent({
    currentLanguage: req.lang || 'en',
    messageType,
    entries
  });

  const ref = req.path || '';

  const html = adminBaseTemplate({
    content,
    ref,
    currentLanguage: req.lang || 'en',
    loggedIn: req.locals.loggedIn,
    messageType
  });

  res.send(html);
});

app.get('/admin/login', isLoggedIn, (req: Request, res: Response) => {

  let messageType = req.query.messageType as string || '';

  const content = loginPageContent({
    currentLanguage: req.lang || 'en',
  });

  // Extract ref parameter - used for redirecting back to a specific page after login
  const ref = req.path || '';

  const html = adminBaseTemplate({
    content,
    ref,
    currentLanguage: req.lang || 'en',
    loggedIn: req.locals.loggedIn,
    messageType
  });

  res.send(html);
});

export default app;
