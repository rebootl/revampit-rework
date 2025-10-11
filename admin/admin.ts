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
  // "./admin/templates/adminBase.js",
  "/admin",
);

// Define the /admin endpoint
// app.get("/admin", isLoggedIn, (req: Request, res: Response) => {
//   if (!req.locals.loggedIn) {
//     res.redirect("/admin/login");
//     return;
//   }

//   // Fetch entries from database
//   let entries = [];
//   let messageType = req.query.messageType as string || "";

//   try {
//     const stmt = req.db.prepare(
//       "SELECT * FROM entries ORDER BY created_at DESC",
//     );
//     entries = stmt.all();
//   } catch (err) {
//     messageType = "errorDatabase";
//     console.error("Database error:", err);
//   }

//   const content = adminPageContent({
//     currentLanguage: req.lang || "en",
//     messageType,
//     entries,
//   });

//   const ref = req.path || "";

//   const html = adminBaseTemplate({
//     content,
//     ref,
//     currentLanguage: req.lang || "en",
//     loggedIn: req.locals.loggedIn,
//     messageType,
//   });

//   res.send(html);
// });

export default app;
