import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

export function ProtectedRoute({ children, setPage, currentPage = "dashboard" }) {
  const { isAuthenticated, loading, setRedirectPath } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      // Remember where the user was trying to go
      if (setRedirectPath) {
        setRedirectPath(currentPage);
      }
      // Redirect to login page
      if (setPage) {
        setPage("login");
      }
    }
  }, [isAuthenticated, loading, setPage, setRedirectPath, currentPage]);

  if (loading) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "60vh", color: "#64748B" }}
      >
        <Loader2 className="animate-spin mb-2" size={28} color="#2563EB" />
        <span style={{ fontSize: "0.88rem", fontWeight: 500 }}>
          Checking placement session...
        </span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}

export default ProtectedRoute;
