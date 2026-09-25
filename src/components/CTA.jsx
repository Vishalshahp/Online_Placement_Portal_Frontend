import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function CTA({ setPage }) {
  const { isAuthenticated } = useAuth();
  return (
    <section
      id="cta"
      className="py-5"
      style={{ background: "#fff", borderTop: "1px solid #f1f5f9" }}
    >
      <div className="container py-3 py-md-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="row align-items-center g-5"
        >
          {/* Left text */}
          <div className="col-lg-7">
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#2563EB",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Get started — it's free
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                marginBottom: "1rem",
              }}
            >
              Take the next step toward your dream offer.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#64748b",
                lineHeight: 1.75,
                maxWidth: 480,
                marginBottom: 0,
              }}
            >
              Set up your profile once, get matched with hiring companies, and step into interviews with confidence.
            </p>
          </div>

          {/* Right buttons */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              <button
                className="btn btn-primary fw-semibold d-flex align-items-center justify-content-between gap-2 w-100"
                style={{
                  background: "#0f172a",
                  border: "none",
                  borderRadius: 10,
                  padding: "0.9rem 1.4rem",
                  fontSize: "0.9rem",
                  transition: "background 0.2s",
                }}
                onClick={() => setPage(isAuthenticated ? "dashboard" : "register")}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1e293b")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
              >
                <span>{isAuthenticated ? "Go to your Dashboard" : "Create your student profile"}</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="btn fw-semibold d-flex align-items-center justify-content-between gap-2 w-100"
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: 10,
                  padding: "0.9rem 1.4rem",
                  fontSize: "0.9rem",
                  color: "#0f172a",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onClick={() => setPage("jobs")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#94a3b8";
                  e.currentTarget.style.background = "#fafafa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                <span>Browse open positions</span>
                <ArrowRight size={16} style={{ color: "#94a3b8" }} />
              </button>

              {/* Trust line */}
              <div className="d-flex align-items-center mt-1">
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                  Join 1,000+ students already placed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
