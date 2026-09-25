import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Hero({ setPage }) {
  return (
    <section className="hero-section pt-5">
      {/* Ambient background atmosphere */}
      <div className="hero-ambient-glow" />
      <div className="hero-bg-grid" />

      <div className="container position-relative">
        {/* Centered Editorial Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 860 }}>

          {/* 1. Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="d-inline-flex align-items-center gap-2 mb-3.5"
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#1E293B",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                padding: "5px 14px",
                borderRadius: 999,
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                cursor: "pointer",
              }}
              onClick={() => setPage && setPage("jobs")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" && setPage) setPage("jobs");
              }}
            >
              <span className="live-beacon" />
              <span>Campus Placement Season 2026 is Live</span>
              <span style={{ color: "#2563EB", fontWeight: 700 }}>&rarr;</span>
            </div>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(2.45rem, 5.2vw, 4.3rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.13,
              letterSpacing: "-0.035em",
              marginBottom: "1.25rem",
            }}
          >
            The modern standard for <br className="d-none d-sm-inline" />
            <span style={{ color: "#2563EB" }}>college campus placements.</span>
          </motion.h1>

          {/* 3. Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.18rem)",
              color: "#475569",
              lineHeight: 1.68,
              maxWidth: 680,
              margin: "0 auto 2.25rem auto",
            }}
          >
            Connecting university placement cells, graduating students, and top recruiters in a single transparent platform. Track verified drives, follow live rounds, and secure your offer letter without the chaos.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="d-flex align-items-center justify-content-center gap-3 flex-wrap mb-4 pb-2"
          >
            <button
              className="btn d-inline-flex align-items-center gap-2 fw-semibold"
              style={{
                background: "#0F172A",
                color: "#FFFFFF",
                border: "1px solid #0F172A",
                borderRadius: 8,
                padding: "0.8rem 1.85rem",
                fontSize: "0.92rem",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.12)",
                transition: "all 0.15s ease",
              }}
              onClick={() => setPage("jobs")}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1E293B")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0F172A")}
            >
              <span>Explore Verified Drives</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn fw-semibold"
              style={{
                background: "#FFFFFF",
                color: "#0F172A",
                border: "1px solid #CBD5E1",
                borderRadius: 8,
                padding: "0.8rem 1.65rem",
                fontSize: "0.92rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onClick={() => setPage("dashboard")}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#94A3B8";
                e.currentTarget.style.background = "#F8FAFC";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#CBD5E1";
                e.currentTarget.style.background = "#FFFFFF";
              }}
            >
              Student Dashboard
            </button>
          </motion.div>

          {/* 5. Clean Trust Markers Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="d-flex align-items-center justify-content-center gap-3 gap-md-4 flex-wrap text-muted"
            style={{ fontSize: "0.82rem", color: "#64748B" }}
          >
            <div className="d-flex align-items-center gap-1.5">
              <Check size={14} color="#16A34A" strokeWidth={2.5} />
              <span>100% TPO Verified Drives</span>
            </div>
            <div className="d-flex align-items-center gap-1.5">
              <Check size={14} color="#16A34A" strokeWidth={2.5} />
              <span>Direct Applications</span>
            </div>
            <div className="d-flex align-items-center gap-1.5">
              <Check size={14} color="#16A34A" strokeWidth={2.5} />
              <span>Zero Placement Fees</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
