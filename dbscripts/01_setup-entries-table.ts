import { DatabaseSync } from "node:sqlite";

// Connect to SQLite database
const db = new DatabaseSync("db/db.sqlite");

// Initialize entries table
db.prepare(`
  CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    language TEXT NOT NULL DEFAULT 'en',
    created_at TEXT NOT NULL,
    modified_at TEXT NOT NULL,
    created_by INTEGER NOT NULL,
    draft INTEGER NOT NULL,
    FOREIGN KEY (created_by) REFERENCES users (id)
  );
`).run();

// Create index on slug for better performance
db.prepare(`
  CREATE INDEX IF NOT EXISTS idx_entries_slug ON entries(slug);
`).run();

// Create index on slug + language for translation groups
db.prepare(`
  CREATE INDEX IF NOT EXISTS idx_entries_slug_language ON entries(slug, language);
`).run();
