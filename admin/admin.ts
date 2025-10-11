import express from "express";

// import { Request, Response } from "express";

import authApp from "./auth/auth.ts";
// import { isLoggedIn } from "./auth/auth.ts";

import { createEndpoints } from "../lib/routes.ts";

// import { adminBaseTemplate } from "./templates/adminBase.js";
// import { loginPageContent } from "./templates/login.js";
// import { adminPageContent } from "./templates/admin.js";

// import entriesApp from "./routes/entries/entries.ts";

const app = express();

// static files
app.use("/admin/static", express.static("admin/static"));

// Use the auth app
app.use(authApp);

// Use the entries app
// app.use(entriesApp);

createEndpoints(
  app,
  "./admin/routes",
  "./admin/templates/adminBase.js",
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

// app.get("/admin/login", isLoggedIn, (req: Request, res: Response) => {
//   // let messageType = req.query.messageType as string || "";

//   const content = loginPageContent({
//     currentLanguage: req.lang || "en",
//   });

//   // Extract ref parameter - used for redirecting back to a specific page after login
//   // const ref = req.path || "";

//   const html = adminBaseTemplate({
//     content,
//     req,
//   });

//   res.send(html);
// });

export default app;
