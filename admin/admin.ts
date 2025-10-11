import express from "express";

import authApp from "./auth/auth.ts";

import { createEndpoints } from "../lib/routes.ts";

const app = express();

// static files
app.use("/admin/static", express.static("admin/static"));

// Use the auth app
app.use(authApp);

//
createEndpoints(
  app,
  "./admin/routes",
  "/admin",
);

export default app;
