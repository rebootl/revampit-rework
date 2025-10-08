import { DatabaseSync } from "node:sqlite";

// Connect to SQLite database
const db = new DatabaseSync("db/db.sqlite");

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
