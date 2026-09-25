import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "The real-time round tracker removed all the anxiety. I knew my interview slot and panel without waiting on chaotic WhatsApp groups.",
    name: "Priya Sharma",
    branch: "B.Tech CSE '26",
    company: "Microsoft",
    role: "SDE-1",
    initials: "PS",
    bg: "#0F172A",
  },
  {
    quote:
      "Automatic eligibility checks saved me so much time. I applied with my college-verified CGPA in a single click.",
    name: "Rohan Verma",
    branch: "B.Tech ECE '26",
    company: "Deloitte",
    role: "Tech Consultant",
    initials: "RV",
    bg: "#2563EB",
  },
  {
    quote:
      "Instant drive alerts and verified resumes made Day-1 placements seamless. Got my official offer letter directly on the portal.",
    name: "Ananya Patel",
    branch: "B.Tech IT '26",
    company: "Amazon",
    role: "Cloud Support",
    initials: "AP",
    bg: "#0D9488",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Minimal Section Header */}
        <div className="text-center mx-auto mb-4 pb-2" style={{ maxWidth: 600 }}>
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
            Student Stories
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.2vw, 2.3rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: "0.6rem",
            }}
          >
            Placed through our campus drives.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Real feedback from 2026 graduates who secured roles through the portal.
          </p>
        </div>

        {/* Minimal 3-Card Row */}
        <div className="row g-4 pt-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="col-12 col-md-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="testimonial-tile">
                <div>
                  {/* Top Placement Badge */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#2563EB",
                        background: "#EFF6FF",
                        border: "1px solid #DBEAFE",
                        padding: "3px 10px",
                        borderRadius: 999,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Building2 size={12} />
                      Placed at {item.company}
                    </span>
                    <span style={{ fontSize: "0.74rem", color: "#64748B", fontWeight: 600 }}>
                      {item.role}
                    </span>
                  </div>

                  {/* Concise Quote */}
                  <p
                    style={{
                      fontSize: "0.91rem",
                      color: "#334155",
                      lineHeight: 1.62,
                      margin: "0 0 1.5rem 0",
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div
                  className="d-flex align-items-center gap-2.5 pt-3"
                  style={{ borderTop: "1px solid #F1F5F9" }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: item.bg,
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {item.initials}
                  </div>
                  <div className="ms-2">
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "#64748B", marginTop: 2 }}>
                      {item.branch}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
