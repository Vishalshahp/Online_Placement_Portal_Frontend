import React from "react";
import { motion } from "framer-motion";

/* Steps — no icons, no colored circles, just clear numbered typography */
const steps = [
  {
    n: "01",
    title: "Build your profile",
    desc: "Add your academic details, skills, resume, and career preferences. Takes about five minutes.",
  },
  {
    n: "02",
    title: "Discover opportunities",
    desc: "Browse verified job listings filtered to match your branch, year, and location.",
  },
  {
    n: "03",
    title: "Apply in one click",
    desc: "Your profile becomes your application. No redundant forms, no repeated uploads.",
  },
  {
    n: "04",
    title: "Track everything",
    desc: "See application status, interview schedules, and offer updates in one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-5"
      style={{ background: "#f8fafc", borderTop: "1px solid #e8ecf0" }}
    >
      <div className="container py-3 py-md-4">

        {/* Section header — left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="row mb-5"
        >
          <div className="col-lg-5">
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 10,
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              From registration to offer in four steps.
            </h2>
          </div>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="row g-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="col-12 col-sm-6 col-lg-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <div
                className="h-100"
                style={{
                  padding: "1.75rem 1.5rem",
                  borderRight: i < 3 ? "1px solid #e8ecf0" : "none",
                  borderBottom: "1px solid #e8ecf0",
                  background: "#fff",
                  position: "relative",
                }}
              >
                {/* Arrow connector between steps — desktop only */}
                {i < 3 && (
                  <div
                    className="d-none d-lg-flex"
                    style={{
                      position: "absolute",
                      top: "2rem",
                      right: -12,
                      zIndex: 1,
                      width: 24,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                      <path d="M1 1l8 7-8 7" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Step number — large, typographic, not a circle */}
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#e2e8f0",
                    lineHeight: 1,
                    marginBottom: "1rem",
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.n}
                </div>

                <h5
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h5>
                <p
                  style={{
                    fontSize: "0.845rem",
                    color: "#64748b",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
