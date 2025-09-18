import { DatabaseSync } from "node:sqlite";
import bcrypt from "bcrypt";
import process from "node:process";

// Connect to SQLite database
const db = new DatabaseSync("db/db.sqlite");

// better-sqlite3 has pragma foreign key constraints
// enabled by default, so we don't need to run it here
// https://github.com/WiseLibs/better-sqlite3/issues/739
// db.prepare(`
//   PRAGMA foreign_keys = ON;
// `).run();

// Initialize sessions table
db.prepare(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL UNIQUE,
    user_id INTEGER NOT NULL,
  	user_agent TEXT NOT NULL DEFAULT "",
  	ip TEXT NOT NULL DEFAULT "",
  	created_at TEXT NOT NULL,
  	FOREIGN KEY (user_id) REFERENCES users (id)
  );
`).run();

// Initialize users table
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    realname TEXT NOT NULL DEFAULT "",
    pwhash TEXT NOT NULL,
    admin INTEGER DEFAULT 0 NOT NULL
  );
`).run();

// Add an admin user
// get the username from environment variable if it exists
const adminUsername = process.env.ADMIN_USERNAME || "admin";
const adminRealname = "Administrator";
const adminPassword = process.env.ADMIN_PASSWORD || "1234";
// Hash the password
const hashedPassword = bcrypt.hashSync(adminPassword, 10);

const adminExists = db.prepare("SELECT * FROM users WHERE username = ?").get(
  adminUsername,
);
if (!adminExists) {
  db.prepare(
    "INSERT INTO users (username, realname, pwhash, admin) VALUES (?, ?, ?, ?)",
  )
    .run(adminUsername, adminRealname, hashedPassword, 1);
}

// Add a test user
// const testUsername = "test";
// const testRealname = "Test User";
// const testPassword = "1234";
// const hashedTestPassword = bcrypt.hashSync(testPassword, 10);
// const testUserExists = db.prepare("SELECT * FROM users WHERE username = ?").get(
//   testUsername,
// );
// if (!testUserExists) {
//   db.prepare(
//     "INSERT INTO users (username, realname, pwhash, admin) VALUES (?, ?, ?, ?)",
//   )
//     .run(testUsername, testRealname, hashedTestPassword, 0);
// }

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

// Add some example blog posts
const exampleEntries = [
  {
    title: "First Blog Post",
    slug: "1",
    content: "This is the content of the first blog post.",
    language: "en",
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
    created_by: 1, // Assuming admin user has id 1
    type: "blog",
    draft: 0,
  },
  {
    title: "Second Blog Post",
    slug: "2",
    content: "This is the content of the second blog post.",
    language: "en",
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
    created_by: 1, // Assuming admin user has id 1
    type: "blog",
    draft: 0,
  },
  {
    title: "Erster Blog Post",
    slug: "1", // Same slug as the English version for translation grouping
    content: "Das ist der Inhalt des ersten deutschen Blog Posts.",
    language: "de",
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
    created_by: 1, // Assuming admin user has id 1
    type: "blog",
    draft: 0,
  },
  {
    title: "🚨 Latest 📢",
    slug: "latest-news",
    content:
      '<b>Not with us, Mr. President:</b>\n\nCustomers from the United States of America get 39% of discount on all product prices <a href="https://shop.revamp-it.ch/" target="_blank" class="text-blue-800">in our webshop!</a><br>(If you live in the US, please choose prepayment with invoice when placing your order, we will then send you a customized invoice!)',
    language: "en",
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
    created_by: 1, // Assuming admin user has id 1
    type: "news",
    draft: 0,
  },
];

const insertEntry = db.prepare(
  "INSERT INTO entries (title, slug, content, language, created_at, modified_at, created_by, type, draft) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
);
exampleEntries.forEach((entry) => {
  insertEntry.run(
    entry.title,
    entry.slug,
    entry.content,
    entry.language,
    entry.created_at,
    entry.modified_at,
    entry.created_by,
    entry.type,
    entry.draft,
  );
});

// test foreign keys by inserting I session with an invalid user id
// const invalidSession = db.prepare(`
//   INSERT INTO sessions (session_id, user_id, expires)
//   VALUES (?, ?, ?);
// `).run('invalid-session-id', 9999, Date.now() + 1000 * 60 * 60 * 24);
