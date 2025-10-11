import process from "node:process";

import type { Request, Response } from "express";

const cookieName: string = process.env.ADMIN_COOKIE_NAME || "admin-session-id";

export default function loginPageContent(req: Request, res: Response) {
  const sessionId = req.cookies[cookieName];

  if (!sessionId) {
    res.status(401).send("Not logged in");
    return;
  }

  try {
    // Delete the session from the database
    const stmt = req.db.prepare("DELETE FROM sessions WHERE session_id = ?");
    const result = stmt.run(sessionId);

    // Clear the session cookie
    res.clearCookie(cookieName, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.redirect("/admin/login?messageType=successLogout");
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).send("An error occurred during logout");
  }
}
