import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ setPage }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => {
    if (collapseRef.current && collapseRef.current.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse.getInstance(collapseRef.current);
      bsCollapse?.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "shadow-sm" : ""}`}
      style={{
        background: "#fff",
        borderBottom: "1px solid #e8edf5",
        transition: "box-shadow 0.3s ease",
        zIndex: 1050,
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark text-decoration-none"
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); closeNav(); }}
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{ width: 38, height: 38, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", flexShrink: 0 }}
          >
            <GraduationCap size={20} color="#fff" />
          </div>
          <span style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
            Placement<span style={{ color: "#2563EB" }}>Portal</span>
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav mx-auto gap-lg-1">
            {[
              ["Home", "#"],
              ["Jobs", "#featured-jobs"],
              ["Companies", "#trusted-companies"],
              ["About", "#features"],
              ["Contact", "#footer-contact"],
            ].map(([label, href]) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link px-3 fw-semibold"
                  style={{ color: "#475569", fontSize: "0.9rem" }}
                  href={href}
                  onClick={closeNav}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Auth Actions */}
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 mt-3 mt-lg-0">
            {!isAuthenticated ? (
              <>
                <button
                  className="btn fw-semibold"
                  style={{
                    fontSize: "0.875rem",
                    color: "#475569",
                    background: "transparent",
                    border: "1px solid #e2e8f0",
                    borderRadius: 8,
                    padding: "0.45rem 1.1rem",
                  }}
                  onClick={() => {
                    setPage("login");
                    closeNav();
                  }}
                >
                  Log in
                </button>
                <button
                  className="btn fw-semibold d-inline-flex align-items-center justify-content-center gap-1"
                  style={{
                    fontSize: "0.875rem",
                    background: "#0f172a",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "0.45rem 1.1rem",
                  }}
                  onClick={() => {
                    setPage("register");
                    closeNav();
                  }}
                >
                  <span>Get started</span>
                  <span>&rarr;</span>
                </button>
              </>
            ) : (
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <button
                  className="btn fw-semibold d-inline-flex align-items-center gap-1.5"
                  style={{
                    fontSize: "0.85rem",
                    background: "#0f172a",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 8,
                    padding: "0.45rem 1rem",
                  }}
                  onClick={() => {
                    setPage("dashboard");
                    closeNav();
                  }}
                >
                  <LayoutDashboard size={15} />
                  <span>Dashboard</span>
                </button>

                <div
                  className="d-inline-flex align-items-center gap-2 px-2.5 py-1 rounded-3"
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    color: "#1E293B",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "#2563EB",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                    }}
                  >
                    {user?.name ? user.name.slice(0, 2).toUpperCase() : "U"}
                  </div>
                  <span>Hi, {user?.name ? user.name.split(" ")[0] : "Student"}</span>
                </div>

                <button
                  className="btn btn-outline-danger fw-semibold d-inline-flex align-items-center gap-1"
                  style={{
                    fontSize: "0.82rem",
                    borderRadius: 8,
                    padding: "0.42rem 0.85rem",
                  }}
                  onClick={() => {
                    logout();
                    closeNav();
                    setPage("home");
                  }}
                  title="Sign out of portal"
                >
                  <LogOut size={14} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
