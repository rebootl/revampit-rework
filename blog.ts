
import express from 'express';
import { Request, Response } from 'express';

// import dbApp from './admin/database/database.ts';

import { pageContent as blogEntryTemplate } from './templates/blogEntry.js';
import { pageContent as blogPageContent } from './templates/blog.js';

import { baseTemplate } from './templates/base.js';

const app = express();

// app.use(dbApp);

// Route to get all blog entries
app.get('/blog', (req: Request, res: Response) => {
  const lang = req.lang || 'en';
  try {
    const stmt = req.db.prepare('SELECT * FROM entries WHERE type = ? AND draft = 0 AND language = ? ORDER BY created_at DESC');
    const entries = stmt.all('blog', lang);
    const content = blogPageContent(entries, lang);
    const html = baseTemplate({ content, ref: req.path, currentLanguage: lang });
    res.send(html);
  } catch (error) {
    console.error('Error fetching blog entries:', error);
    res.status(500).send('An error occurred while fetching blog entries');
  }
});

// Route to get a single blog entry by slug
app.get('/blog/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  const lang = req.lang || 'en';
  try {
    const stmt = req.db.prepare('SELECT * FROM entries WHERE type = ? AND slug = ? AND draft = 0 AND language = ?');
    const entry = stmt.get('blog', slug, lang);
    if (entry) {
            const content = blogEntryTemplate(entry);
      const html = baseTemplate({ content, ref: req.path, currentLanguage: req.lang || 'en' });
      res.send(html);
    } else {
      res.status(404).send('Blog entry not found');
    }
  } catch (error) {
    console.error(`Error fetching blog entry with slug ${slug}:`, error);
    res.status(500).send('An error occurred while fetching the blog entry');
  }
});

export default app;
