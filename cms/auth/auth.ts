import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { Request, Response } from "express";

const cookieName: string = process.env.ADMIN_COOKIE_NAME || "admin-session-id";

// Extend Request interface to include locals
declare global {
  namespace Express {
    interface Request {
      locals: {
        loggedIn: boolean;
        userName: string;
      };
    }
  }
}

const app = express();

// Middleware to check if user is logged in
export function isLoggedIn(
  req: Request,
  res: Response,
  next: () => void,
): void {
  const sessionId = req.cookies?.[cookieName];

  req.locals = {
    loggedIn: false,
    userName: "",
  };

  if (!sessionId) {
    // console.log('No session ID found in cookies');
    next();
    return;
  }

  try {
    const stmt = req.db.prepare("SELECT * FROM sessions WHERE session_id = ?");
    const session = stmt.get(sessionId);

    if (!session) {
      res.status(401).send(
        "Invalid session. Please clear your cookies and log in again.",
      );
      return;
    }

    req.locals.loggedIn = true;
    req.locals.userName = session.user_name || "";

    next();
  } catch (error) {
    console.error("Session check error:", error);
    res.status(500).send("An error occurred while checking session");
  }
}

// Login endpoint
app.post(
  "/admin/login",
  async (req: Request<{}, {}, LoginRequest>, res: Response): Promise<void> => {
    const { username, password } = req.body;

    // Validate input
    if (typeof username !== "string" || typeof password !== "string") {
      res.status(400).send(
        "Invalid input: username and password must be strings",
      );
      return;
    }

    if (!username || !password) {
      res.status(401).send("Username and password are required");
      return;
    }

    const stmt = req.db.prepare("SELECT * FROM users WHERE username = ?");
    const user = stmt.get(username) as User | undefined;

    if (!user) {
      res.status(401).send("Invalid username or password");
      return;
    }

    try {
      // Compare the provided password with the stored hash
      const isMatch = await bcrypt.compare(password, user.pwhash);

      if (!isMatch) {
        res.status(401).send("Invalid username or password");
        return;
      }

      // Generate session ID using UUID v4
      const sessionId = uuidv4();
      const now = new Date();

      const sessionStmt = req.db.prepare(
        "INSERT INTO sessions (session_id, user_id, created_at) VALUES (?, ?, ?)",
      );
      sessionStmt.run(
        sessionId,
        user.id,
        now.toISOString(),
      );

      // Set session cookie
      res.cookie(cookieName, sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      });

      const userResult: UserResult = {
        id: user.id,
        username: user.username,
        admin: Boolean(user.admin),
      };

      res.redirect("/admin");
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("An error occurred during login");
    }
  },
);

// Logout endpoint
app.get("/admin/logout", (req: Request, res: Response) => {
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
});

export default app;
