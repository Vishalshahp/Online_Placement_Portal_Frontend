import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* 
  WhyChooseUs — split layout.
  Left: clean text + checklist (no pill badge).
  Right: a realistic plain-white "dashboard preview" — no blue gradient, no glassmorphism.
*/

const points = [
  { title: "All placements in one place", desc: "No more tracking Excel sheets or WhatsApp groups. Every company and listing is in one verified feed." },
  { title: "Application tracking built in", desc: "Know exactly where each application stands — applied, shortlisted, interview scheduled, or offer received." },
  { title: "Verified company listings", desc: "We manually review every company before they can contact students. No spam, no fraudulent listings." },
  { title: "Notifications that actually matter", desc: "Get alerted only when a company matching your profile and branch posts a new opening." },
];

/* A minimal, realistic-looking dashboard preview component — no gradients */
function DashboardPreview() {
  const items = [
    { role: "Software Developer", company: "TCS",      status: "Interview",   dot: "#2563EB" },
    { role: "Data Analyst",       company: "Deloitte", status: "Under Review", dot: "#f59e0b" },
    { role: "Frontend Engineer",  company: "Wipro",    status: "Applied",     dot: "#94a3b8" },
  ];

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(15,23,42,0.05)",
      }}
    >
      {/* Header bar */}
      <div
        className="d-flex align-items-center justify-content-between px-4 py-3"
        style={{ background: "#f8fafc", borderBottom: "1px solid #e8ecf0" }}
      >
        <span style={{ fontWeight: 700, fontSize: "0.82rem", color: "#0f172a" }}>My Applications</span>
        <span
          style={{
            fontSize: "0.68rem",
            background: "#eff6ff",
            color: "#2563EB",
            padding: "0.2rem 0.55rem",
            borderRadius: 4,
            fontWeight: 600,
          }}
        >
          3 active
        </span>
      </div>

      {/* Application rows */}
      {items.map((item, i) => (
        <div
          key={item.role}
          className="d-flex align-items-center justify-content-between px-4 py-3"
          style={{ borderBottom: i < items.length - 1 ? "1px solid #f1f5f9" : "none" }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.855rem", color: "#0f172a" }}>{item.role}</div>
            <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: 2 }}>{item.company}</div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.dot, display: "inline-block" }} />
            <span style={{ fontSize: "0.72rem", color: "#475569", fontWeight: 500 }}>{item.status}</span>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div
        className="px-4 py-3 d-flex align-items-center justify-content-between"
        style={{ background: "#f8fafc", borderTop: "1px solid #e8ecf0" }}
      >
        <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Last updated 10 min ago</span>
        <span style={{ fontSize: "0.72rem", color: "#2563EB", fontWeight: 600, cursor: "pointer" }}>
          View all →
        </span>
      </div>
    </div>
  );
}

export default function WhyChooseUs({ setPage }) {
  return (
    <section
      id="why-choose-us"
      className="py-5"
      style={{ background: "#fff", borderTop: "1px solid #e8ecf0" }}
    >
      <div className="container py-3 py-md-4">
        <div className="row align-items-center g-5">

          {/* Left — text content */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 12,
              }}
            >
              Why students choose this
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Everything you need for placement, nothing you don't.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#64748b",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Built specifically for campus placements, not adapted from a generic job board. The features exist because students actually asked for them.
            </p>

            {/* Point list */}
            <div className="d-flex flex-column gap-4 mb-5">
              {points.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  className="d-flex align-items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.38 }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      border: "2px solid #2563EB",
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a", marginBottom: 3 }}>
                      {pt.title}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.65 }}>
                      {pt.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              style={{
                background: "#0f172a",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0.65rem 1.25rem",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "background 0.15s",
              }}
              onClick={() => setPage("jobs")}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1e293b")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
            >
              Explore opportunities <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right — dashboard preview (clean white, no gradients) */}
          <motion.div
            className="col-lg-6 offset-lg-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <DashboardPreview />

            {/* A second smaller card below — profile completion */}
            <div
              className="d-flex align-items-center gap-4 mt-3 px-4 py-3"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                background: "#fff",
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>
                  Profile completion
                </div>
                <div style={{ height: 6, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "82%", background: "#2563EB", borderRadius: 99 }} />
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>82%</div>
                <div style={{ fontSize: "0.65rem", color: "#94a3b8", marginTop: 2 }}>Complete profile</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
