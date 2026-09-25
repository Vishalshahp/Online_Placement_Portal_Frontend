import React from "react";
import { motion } from "framer-motion";
import { Filter, Send, Layers, Bell } from "lucide-react";

const features = [
  {
    icon: Filter,
    title: "Smart Matching",
    desc: "Auto-checks qualification against your branch, CGPA, and backlog criteria.",
  },
  {
    icon: Send,
    title: "1-Click Apply",
    desc: "Apply instantly with your college-verified profile and approved resume.",
  },
  {
    icon: Layers,
    title: "Round Tracker",
    desc: "Follow your progression from online assessment to the final offer letter.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Real-time updates for new drives, shortlist announcements, and interview slots.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mx-auto mb-4 pb-2" style={{ maxWidth: 640 }}>
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
            Capabilities
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
            Built for effortless campus placements.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            A simple, transparent workflow connecting students, placement cells, and recruiters.
          </p>
        </div>

        {/* Minimal 4-Column Feature Row */}
        <div className="row g-4 pt-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="col-12 col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <div className="feature-item p-3 shadow-sm rounded-3" style={{ borderRadius: 10 }}>
                  <div className="feature-icon-box">
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: "#0F172A",
                      letterSpacing: "-0.01em",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "#64748B",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
