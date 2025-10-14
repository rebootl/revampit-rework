import express from "express";

import { createEndpoints } from "../lib/routes.ts";

const app: express.Application = express();

// static files
app.use("/static", express.static("website-revampit-rework/static"));

// create static endpoints from directory structure
// this recursively creates endpoints for each page 'get.ts/post.ts' file
// in the './routes' directory and its subdirectories.
//
// e.g.:
// routes/get.js                 -> /
// routes/about/get.js           -> /about
// routes/contact/get.js         -> /contact
// routes/services/repair/get.js -> /services/repair
//
createEndpoints(
  app,
  "./website-revampit-rework/routes",
  "",
);

export default app;
