import React, { createContext, useContext, useState, useEffect } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  // Initialize session on startup from localStorage
  useEffect(() => {
    try {
      const session = authService.getCurrentSession();
      if (session && session.isAuthenticated) {
        setUser(session);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Session initialization error:", err);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    // Artificial small delay to simulate network latency and show smooth UX state
    await new Promise((resolve) => setTimeout(resolve, 350));
    const session = authService.loginUser({ email, password });
    setUser(session);
    setIsAuthenticated(true);
    return session;
  };

  const register = async ({ name, email, password, role }) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return authService.registerUser({ name, email, password, role });
  };

  const logout = () => {
    authService.logoutUser();
    setUser(null);
    setIsAuthenticated(false);
    setRedirectPath(null);
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      try {
        localStorage.setItem("placement_auth", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to persist updated session:", e);
      }
      return updated;
    });
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateUser,
    redirectPath,
    setRedirectPath,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
