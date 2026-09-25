import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import {
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Loader2,
  X,
} from "lucide-react";

export function Login({ setPage }) {
  const { isAuthenticated, login, redirectPath, setRedirectPath } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Field-level error messages
  const [errors, setErrors] = useState({});
  // Form-level general error
  const [formError, setFormError] = useState("");
  // Submitting status
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  // Forgot password modal
  const [showForgotModal, setShowForgotModal] = useState(false);

  // If already authenticated, redirect to dashboard immediately
  useEffect(() => {
    if (isAuthenticated) {
      const target = redirectPath || "dashboard";
      setRedirectPath(null);
      setPage(target);
    }
  }, [isAuthenticated, redirectPath, setRedirectPath, setPage]);

  // Validation function
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!validate()) return;

    setStatus("loading");
    try {
      await login(email, password);
      setStatus("success");
      setTimeout(() => {
        const target = redirectPath || "dashboard";
        setRedirectPath(null);
        setPage(target);
      }, 300);
    } catch (err) {
      setStatus("idle");
      setFormError(err.message || "Invalid email or password.");
    }
  };

  // Quick helper to fill demo credentials
  const fillDemo = (demoEmail, demoRole) => {
    setEmail(demoEmail);
    setPassword("password123");
    setErrors({});
    setFormError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Simple Header */}
      <header
        className="py-3 px-4"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <button
            type="button"
            className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-2"
            onClick={() => setPage("home")}
          >
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#FFFFFF",
              }}
            >
              <GraduationCap size={20} />
            </div>
            <span
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "-0.02em",
              }}
            >
              Placement<span style={{ color: "#2563EB" }}>Portal</span>
            </span>
          </button>

          <button
            type="button"
            className="btn btn-sm fw-semibold"
            style={{
              color: "#475569",
              background: "#F1F5F9",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              fontSize: "0.82rem",
            }}
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>
        </div>
      </header>

      {/* Main Login Body: Split Desktop Layout */}
      <main className="flex-grow-1 d-flex align-items-center py-4 py-md-5">
        <div className="container">
          <div
            className="row g-0 mx-auto shadow-sm overflow-hidden"
            style={{
              maxWidth: 960,
              background: "#FFFFFF",
              borderRadius: 16,
              border: "1px solid #E2E8F0",
            }}
          >
            {/* Left Column: University Branding Visual */}
            <div
              className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 text-white position-relative"
              style={{
                background: "linear-gradient(145deg, #0F172A 0%, #1E293B 100%)",
                minHeight: 560,
              }}
            >
              {/* Background ambient pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.1,
                  backgroundImage:
                    "radial-gradient(#93C5FD 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  pointerEvents: "none",
                }}
              />

              <div className="position-relative">
                <div
                  className="d-inline-flex align-items-center gap-1.5 mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  <ShieldCheck size={14} color="#60A5FA" />
                  <span>University Placement System</span>
                </div>

                <h2
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: "-0.03em",
                    marginBottom: "1rem",
                  }}
                >
                  Find opportunities built for your career.
                </h2>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Log in to track on-campus placement drives, review verified interview rounds, and access official offer letters.
                </p>
              </div>

              {/* Verified Features Checklist */}
              <div className="position-relative d-flex flex-column gap-2.5 my-4">
                <div className="d-flex align-items-center gap-2" style={{ fontSize: "0.84rem", color: "#E2E8F0" }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>250+ Verified On-Campus Recruiting Drives</span>
                </div>
                <div className="d-flex align-items-center gap-2" style={{ fontSize: "0.84rem", color: "#E2E8F0" }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>Real-Time Online Assessment & Interview Tracker</span>
                </div>
                <div className="d-flex align-items-center gap-2" style={{ fontSize: "0.84rem", color: "#E2E8F0" }}>
                  <CheckCircle2 size={16} color="#34D399" />
                  <span>100% College TPO Authenticated Credentials</span>
                </div>
              </div>

              {/* Demo Credentials Helper */}
              <div
                className="position-relative p-3 rounded-3"
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" }}>
                    Demo Credentials (1-Click Fill)
                  </span>
                </div>
                <div className="d-flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    className="btn btn-sm text-white"
                    style={{
                      fontSize: "0.72rem",
                      background: "rgba(37, 99, 235, 0.3)",
                      border: "1px solid rgba(59, 130, 246, 0.4)",
                      borderRadius: 6,
                      padding: "3px 8px",
                    }}
                    onClick={() => fillDemo("student@placement.edu", "student")}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm text-white"
                    style={{
                      fontSize: "0.72rem",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 6,
                      padding: "3px 8px",
                    }}
                    onClick={() => fillDemo("recruiter@google.com", "recruiter")}
                  >
                    Recruiter
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm text-white"
                    style={{
                      fontSize: "0.72rem",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: 6,
                      padding: "3px 8px",
                    }}
                    onClick={() => fillDemo("tpo@placement.edu", "tpo")}
                  >
                    TPO / Admin
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Login Form */}
            <div className="col-12 col-lg-7 p-4 p-sm-5 d-flex flex-column justify-content-center">
              <div style={{ maxWidth: 420, width: "100%", margin: "0 auto" }}>
                <div className="mb-4">
                  <h1
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      letterSpacing: "-0.025em",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Welcome back
                  </h1>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", margin: 0 }}>
                    Sign in to your placement portal account to continue.
                  </p>
                </div>

                {/* Mobile Quick Demo Fill Bar */}
                <div className="d-lg-none mb-3 p-2.5 bg-light rounded-3 border">
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", marginBottom: 6 }}>
                    Quick Demo Fill:
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary py-0"
                      style={{ fontSize: "0.75rem" }}
                      onClick={() => fillDemo("student@placement.edu", "student")}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary py-0"
                      style={{ fontSize: "0.75rem" }}
                      onClick={() => fillDemo("recruiter@google.com", "recruiter")}
                    >
                      Recruiter
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary py-0"
                      style={{ fontSize: "0.75rem" }}
                      onClick={() => fillDemo("tpo@placement.edu", "tpo")}
                    >
                      TPO
                    </button>
                  </div>
                </div>

                {/* Form-level Error Alert */}
                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 mb-3"
                    style={{
                      fontSize: "0.86rem",
                      borderRadius: 8,
                      border: "1px solid #FECACA",
                    }}
                    role="alert"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{formError}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label
                      htmlFor="login-email"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.86rem", color: "#334155" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="login-email"
                      type="email"
                      autoFocus
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      style={{
                        padding: "0.65rem 0.85rem",
                        fontSize: "0.92rem",
                        borderRadius: 8,
                        borderColor: errors.email ? "#DC2626" : "#CBD5E1",
                      }}
                      placeholder="e.g. student@placement.edu"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: null });
                        if (formError) setFormError("");
                      }}
                      disabled={status === "loading"}
                    />
                    {errors.email && (
                      <div className="invalid-feedback" style={{ fontSize: "0.8rem" }}>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <label
                        htmlFor="login-password"
                        className="form-label fw-semibold mb-0"
                        style={{ fontSize: "0.86rem", color: "#334155" }}
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        className="btn btn-link p-0 text-decoration-none"
                        style={{ fontSize: "0.8rem", color: "#2563EB", fontWeight: 600 }}
                        onClick={() => setShowForgotModal(true)}
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="position-relative">
                      <input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        style={{
                          padding: "0.65rem 2.6rem 0.65rem 0.85rem",
                          fontSize: "0.92rem",
                          borderRadius: 8,
                          borderColor: errors.password ? "#DC2626" : "#CBD5E1",
                        }}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errors.password) setErrors({ ...errors, password: null });
                          if (formError) setFormError("");
                        }}
                        disabled={status === "loading"}
                      />
                      <button
                        type="button"
                        className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 d-flex align-items-center justify-content-center"
                        style={{ background: "transparent" }}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="text-danger mt-1" style={{ fontSize: "0.8rem" }}>
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 fw-semibold d-flex align-items-center justify-content-center gap-2 mt-4"
                    style={{
                      background: status === "success" ? "#16A34A" : "#0F172A",
                      color: "#FFFFFF",
                      border: "none",
                      borderRadius: 8,
                      padding: "0.75rem 1rem",
                      fontSize: "0.92rem",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                    }}
                    disabled={status === "loading" || status === "success"}
                  >
                    {status === "loading" && (
                      <>
                        <Loader2 className="animate-spin" size={17} />
                        <span>Signing in...</span>
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <CheckCircle2 size={17} />
                        <span>Login successful</span>
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        <span>Login</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                {/* Registration Link */}
                <div className="text-center mt-4 pt-2">
                  <span style={{ fontSize: "0.88rem", color: "#64748B" }}>
                    Don't have an account?{" "}
                  </span>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none fw-semibold"
                    style={{ fontSize: "0.88rem", color: "#2563EB" }}
                    onClick={() => setPage("register")}
                  >
                    Create account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div
          className="position-fixed inset-0 d-flex align-items-center justify-content-center px-3"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 1100,
          }}
          onClick={() => setShowForgotModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-3 shadow-lg"
            style={{ maxWidth: 440, width: "100%", border: "1px solid #E2E8F0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "#EFF6FF",
                    color: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HelpCircle size={18} />
                </div>
                <h5 className="m-0 fw-bold" style={{ fontSize: "1.05rem", color: "#0F172A" }}>
                  Password Recovery
                </h5>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-light border-0 p-1"
                onClick={() => setShowForgotModal(false)}
              >
                <X size={18} />
              </button>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.6, marginBottom: "1rem" }}>
              Password recovery will be available when backend authentication is connected.
            </p>
            <div
              className="p-3 rounded-2 mb-3"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", fontSize: "0.82rem", color: "#334155" }}
            >
              <strong>Default Demo Accounts:</strong>
              <div className="mt-1 font-monospace">student@placement.edu / password123</div>
              <div className="font-monospace">recruiter@google.com / password123</div>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100 fw-semibold"
              style={{ background: "#0F172A", border: "none", borderRadius: 8, padding: "0.6rem" }}
              onClick={() => setShowForgotModal(false)}
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Login;
