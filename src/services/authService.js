// DEMO ONLY:
// Passwords must never be stored in plaintext localStorage in a production application.
// Production authentication must use a secure backend API with password hashing (e.g., bcrypt/argon2),
// HTTP-only cookies, and JWT or session-based token verification.

const USERS_STORAGE_KEY = "placement_users";
const AUTH_STORAGE_KEY = "placement_auth";

// Initial seed accounts for testing out of the box
const DEFAULT_USERS = [
  {
    id: "user_demo_001",
    name: "Vishal Shah",
    email: "student@placement.edu",
    password: "password123",
    role: "student",
    branch: "B.Tech IT • Sem 7",
    createdAt: new Date().toISOString(),
  },
  {
    id: "user_demo_002",
    name: "Sarah Jenkins",
    email: "recruiter@google.com",
    password: "password123",
    role: "recruiter",
    company: "Google",
    createdAt: new Date().toISOString(),
  },
  {
    id: "user_demo_003",
    name: "Prof. K. Verma",
    email: "tpo@placement.edu",
    password: "password123",
    role: "tpo",
    department: "Training & Placement Cell",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Retrieves all registered users from localStorage.
 * Seeds default accounts if storage is empty.
 */
export function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_USERS;
  } catch (err) {
    console.error("Error reading placement_users from localStorage:", err);
    return DEFAULT_USERS;
  }
}

/**
 * Registers a new user.
 * Validates fields and checks for duplicate email.
 */
export function registerUser({ name, email, password, role = "student" }) {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  // Check duplicate email
  const existing = users.find(
    (u) => u.email.toLowerCase() === normalizedEmail
  );
  if (existing) {
    throw new Error("An account with this email already exists.");
  }

  const newUser = {
    id: `user_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    name: name.trim(),
    email: normalizedEmail,
    password: password, // DEMO ONLY: in production, passwords are hashed on the backend
    role: role || "student",
    createdAt: new Date().toISOString(),
  };

  const updatedUsers = [...users, newUser];
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
}

/**
 * Authenticates a user against stored records.
 * Creates an active session in localStorage upon success.
 */
export function loginUser({ email, password }) {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const user = users.find(
    (u) => u.email.toLowerCase() === normalizedEmail && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  // Create active session
  const session = {
    isAuthenticated: true,
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    branch: user.branch || (user.role === "student" ? "B.Tech • 2026 Batch" : undefined),
    loginTime: new Date().toISOString(),
  };

  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));

  return session;
}

/**
 * Retrieves the currently active authentication session, if any.
 */
export function getCurrentSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (session && session.isAuthenticated && session.userId) {
      return session;
    }
    return null;
  } catch (err) {
    console.error("Error reading placement_auth from localStorage:", err);
    return null;
  }
}

/**
 * Clears the active authentication session from localStorage.
 */
export function logoutUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
