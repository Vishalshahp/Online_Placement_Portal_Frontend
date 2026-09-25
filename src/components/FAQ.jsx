import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    category: "Applications",
    q: "How do I apply for on-campus placement drives?",
    a: "Complete your college-verified profile once, browse active drives, and click Apply. Your academic records and approved resume submit automatically with zero redundant forms.",
  },
  {
    category: "Eligibility",
    q: "How does automatic eligibility matching work?",
    a: "The portal instantly checks your branch, CGPA, and backlogs against company cutoffs, displaying drives where you meet 100% of the criteria.",
  },
  {
    category: "Live Tracking",
    q: "Where can I track interview rounds and shortlists?",
    a: "Your live Student Dashboard tracks every milestone in real time—from Online Assessments to technical interview slots and final offer letters.",
  },
  {
    category: "Verification",
    q: "Are all company drives verified?",
    a: "Yes. Every recruiter and placement drive is officially vetted and approved by your college Training & Placement Cell (TPO) before going live.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-start">
          {/* Left Column: Heading & Support Box */}
          <div className="col-lg-5">
            <div style={{ position: "sticky", top: 120 }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#2563EB",
                  background: "rgba(37, 99, 235, 0.08)",
                  padding: "4px 12px",
                  borderRadius: 999,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "0.75rem",
                }}
              >
                FAQ & Support
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.3rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.75rem",
                }}
              >
                Frequently asked questions.
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#64748B",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Everything you need to know about campus drives, automatic eligibility, and round schedules.
              </p>

              {/* Minimal Help Box */}
              <div className="faq-help-box">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "#EFF6FF",
                      color: "#2563EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <HelpCircle size={16} />
                  </div>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>
                    Need personalized assistance?
                  </span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.55, margin: "0 0 1rem 0" }}>
                  Have questions about batch cutoffs, interview lab desks, or resume verification?
                </p>
                <a
                  href="#footer-contact"
                  className="d-inline-flex align-items-center gap-1.5 text-decoration-none fw-semibold"
                  style={{ fontSize: "0.84rem", color: "#2563EB" }}
                >
                  <span>Contact Placement Cell</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion Cards */}
          <div className="col-lg-7">
            <div className="d-flex flex-column">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.q}
                    className={`faq-card ${isOpen ? "active" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="d-flex align-items-start justify-content-between gap-3">
                      <div className="flex-grow-1">
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            color: isOpen ? "#2563EB" : "#64748B",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "0.35rem",
                          }}
                        >
                          {faq.category}
                        </span>
                        <h3
                          style={{
                            fontSize: "0.98rem",
                            fontWeight: 700,
                            color: isOpen ? "#0F172A" : "#1E293B",
                            letterSpacing: "-0.01em",
                            margin: 0,
                            lineHeight: 1.4,
                            cursor: "pointer",
                          }}
                        >
                          {faq.q}
                        </h3>
                      </div>

                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: isOpen ? "#EFF6FF" : "#F8FAFC",
                          border: `1px solid ${isOpen ? "#BFDBFE" : "#E2E8F0"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? "#2563EB" : "#64748B",
                          flexShrink: 0,
                          marginTop: "2px",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <ChevronDown size={15} />
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div
                            style={{
                              paddingTop: "0.85rem",
                              marginTop: "0.85rem",
                              borderTop: "1px solid #F1F5F9",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "0.88rem",
                                color: "#475569",
                                lineHeight: 1.65,
                                margin: 0,
                              }}
                            >
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
