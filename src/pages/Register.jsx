import React, { useState } from "react";
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
  Loader2,
  UserCheck,
  Briefcase,
  Building,
} from "lucide-react";

export function Register({ setPage }) {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Field-level error messages
  const [errors, setErrors] = useState({});
  // Form-level general error
  const [formError, setFormError] = useState("");
  // Submitting status
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success'

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!role) {
      newErrors.role = "Please select a role.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
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
      await register({ name, email, password, role });
      setStatus("success");
      setTimeout(() => {
        setPage("login");
      }, 1200);
    } catch (err) {
      setStatus("idle");
      setFormError(err.message || "Registration failed. Please try again.");
    }
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

      {/* Main Register Body: Split Desktop Layout */}
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
                minHeight: 620,
              }}
            >
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
                  Join the official campus placement portal.
                </h2>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Register your account to access verified job drives, live interview timelines, and direct TPO communication.
                </p>
              </div>

              {/* Roles Breakdown */}
              <div className="position-relative d-flex flex-column gap-3 my-4">
                <div className="d-flex align-items-start gap-3 p-2.5 rounded-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <UserCheck size={18} color="#60A5FA" className="mt-1 flex-shrink-0" />
                  <div>
                    <div style={{ fontSize: "0.86rem", fontWeight: 700 }}>Students</div>
                    <div style={{ fontSize: "0.76rem", color: "#94A3B8" }}>
                      1-click verified applications & live round tracking.
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-2.5 rounded-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Briefcase size={18} color="#34D399" className="mt-1 flex-shrink-0" />
                  <div>
                    <div style={{ fontSize: "0.86rem", fontWeight: 700 }}>Recruiters</div>
                    <div style={{ fontSize: "0.76rem", color: "#94A3B8" }}>
                      Post drives & access authenticated academic transcripts.
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-2.5 rounded-2" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Building size={18} color="#FBBF24" className="mt-1 flex-shrink-0" />
                  <div>
                    <div style={{ fontSize: "0.86rem", fontWeight: 700 }}>TPO / Placement Cell</div>
                    <div style={{ fontSize: "0.76rem", color: "#94A3B8" }}>
                      Coordinate drive schedules, interview labs & offer letters.
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-relative text-muted" style={{ fontSize: "0.78rem", color: "#64748B" }}>
                🔒 100% University Policy & Eligibility Enforced
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div className="col-12 col-lg-7 p-4 p-sm-5 d-flex flex-column justify-content-center">
              <div style={{ maxWidth: 430, width: "100%", margin: "0 auto" }}>
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
                    Create an account
                  </h1>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", margin: 0 }}>
                    Enter your details below to register for the placement season.
                  </p>
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

                {/* Success Banner */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert alert-success d-flex align-items-center gap-2 py-2.5 px-3 mb-3"
                    style={{
                      fontSize: "0.88rem",
                      borderRadius: 8,
                      border: "1px solid #BBF7D0",
                    }}
                    role="alert"
                  >
                    <CheckCircle2 size={18} color="#16A34A" className="flex-shrink-0" />
                    <div>
                      <strong>Registration successful!</strong>
                      <div>Please login to continue...</div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label
                      htmlFor="register-name"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.86rem", color: "#334155" }}
                    >
                      Full Name
                    </label>
                    <input
                      id="register-name"
                      type="text"
                      autoFocus
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      style={{
                        padding: "0.62rem 0.85rem",
                        fontSize: "0.92rem",
                        borderRadius: 8,
                        borderColor: errors.name ? "#DC2626" : "#CBD5E1",
                      }}
                      placeholder="e.g. Aryan Sharma"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: null });
                        if (formError) setFormError("");
                      }}
                      disabled={status === "loading" || status === "success"}
                    />
                    {errors.name && (
                      <div className="invalid-feedback" style={{ fontSize: "0.8rem" }}>
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label
                      htmlFor="register-email"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.86rem", color: "#334155" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="register-email"
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      style={{
                        padding: "0.62rem 0.85rem",
                        fontSize: "0.92rem",
                        borderRadius: 8,
                        borderColor: errors.email ? "#DC2626" : "#CBD5E1",
                      }}
                      placeholder="e.g. aryan@placement.edu"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: null });
                        if (formError) setFormError("");
                      }}
                      disabled={status === "loading" || status === "success"}
                    />
                    {errors.email && (
                      <div className="invalid-feedback" style={{ fontSize: "0.8rem" }}>
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Role Selection */}
                  <div className="mb-3">
                    <label
                      htmlFor="register-role"
                      className="form-label fw-semibold"
                      style={{ fontSize: "0.86rem", color: "#334155" }}
                    >
                      Role
                    </label>
                    <select
                      id="register-role"
                      className={`form-select ${errors.role ? "is-invalid" : ""}`}
                      style={{
                        padding: "0.62rem 0.85rem",
                        fontSize: "0.92rem",
                        borderRadius: 8,
                        borderColor: errors.role ? "#DC2626" : "#CBD5E1",
                      }}
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                        if (errors.role) setErrors({ ...errors, role: null });
                      }}
                      disabled={status === "loading" || status === "success"}
                    >
                      <option value="student">Student (Graduating Batch)</option>
                      <option value="recruiter">Recruiter (Hiring Organization)</option>
                      <option value="tpo">TPO / Placement Cell Admin</option>
                    </select>
                    {errors.role && (
                      <div className="invalid-feedback" style={{ fontSize: "0.8rem" }}>
                        {errors.role}
                      </div>
                    )}
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="row g-2 mb-3">
                    <div className="col-sm-6">
                      <label
                        htmlFor="register-password"
                        className="form-label fw-semibold"
                        style={{ fontSize: "0.86rem", color: "#334155" }}
                      >
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          style={{
                            padding: "0.62rem 2.4rem 0.62rem 0.85rem",
                            fontSize: "0.92rem",
                            borderRadius: 8,
                            borderColor: errors.password ? "#DC2626" : "#CBD5E1",
                          }}
                          placeholder="Min 6 chars"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors({ ...errors, password: null });
                          }}
                          disabled={status === "loading" || status === "success"}
                        />
                        <button
                          type="button"
                          className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 d-flex align-items-center"
                          style={{ background: "transparent" }}
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="text-danger mt-1" style={{ fontSize: "0.78rem" }}>
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="col-sm-6">
                      <label
                        htmlFor="register-confirm-password"
                        className="form-label fw-semibold"
                        style={{ fontSize: "0.86rem", color: "#334155" }}
                      >
                        Confirm Password
                      </label>
                      <div className="position-relative">
                        <input
                          id="register-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                          style={{
                            padding: "0.62rem 2.4rem 0.62rem 0.85rem",
                            fontSize: "0.92rem",
                            borderRadius: 8,
                            borderColor: errors.confirmPassword ? "#DC2626" : "#CBD5E1",
                          }}
                          placeholder="Re-type password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
                          }}
                          disabled={status === "loading" || status === "success"}
                        />
                        <button
                          type="button"
                          className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 d-flex align-items-center"
                          style={{ background: "transparent" }}
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          tabIndex={-1}
                        >
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="text-danger mt-1" style={{ fontSize: "0.78rem" }}>
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
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
                        <span>Creating account...</span>
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <CheckCircle2 size={17} />
                        <span>Redirecting to login...</span>
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        <span>Create Account</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                {/* Login Link */}
                <div className="text-center mt-4 pt-2">
                  <span style={{ fontSize: "0.88rem", color: "#64748B" }}>
                    Already have an account?{" "}
                  </span>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none fw-semibold"
                    style={{ fontSize: "0.88rem", color: "#2563EB" }}
                    onClick={() => setPage("login")}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
