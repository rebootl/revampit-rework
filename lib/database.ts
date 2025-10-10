import process from "node:process";

import express from "express";

// NOTE: node:sqlite is currently Stability: 1.1 - Active development. (as of July 2025)
// from the node docs:
//   1.1 - Active development. Experimental features at this stage are nearing minimum viability.
//   Use of the feature is not recommended in production environments.
// However deno documentation refers to this module.
// better-sqlite3 does not work with deno: https://github.com/WiseLibs/better-sqlite3/issues/1205
import { DatabaseSync } from "node:sqlite";

// Extend Express Request interface to include db property
declare global {
  namespace Express {
    interface Request {
      db: DatabaseSync;
    }
  }
}

const dbFile: string = process.env.DB_FILE || "db/db.sqlite";

const app = express();

// Connect to SQLite database
const db = new DatabaseSync(dbFile);

// Middleware to add database instance to request object
app.use((req, _res, next) => {
  req.db = db;
  next();
});

export default app;
