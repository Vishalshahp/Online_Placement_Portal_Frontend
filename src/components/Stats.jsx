import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { value: 1000, suffix: "+", label: "Students placed", note: "across all batches" },
  { value: 250, suffix: "+", label: "Active job listings", note: "updated weekly" },
  { value: 100, suffix: "+", label: "Verified companies", note: "manually reviewed" },
  { value: 85, suffix: "%", label: "Placement rate", note: "past academic year" },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (1600 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="stats"
      ref={ref}
      className="py-5"
      style={{ background: "#0f172a" }}
    >
      <div className="container py-3 py-md-4">

        {/* Top row — label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="row align-items-end mb-5"
        >
          <div className="col-lg-6">
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#475569",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              By the numbers
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              A track record students and recruiters trust.
            </h2>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-end mt-3 mt-lg-0">
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.75, margin: 0 }}>
              These aren't aspirational numbers — they reflect real outcomes from real students at real companies.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <div
          className="row g-0"
          style={{ borderTop: "1px solid #1e293b", borderLeft: "1px solid #1e293b" }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="col-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              style={{
                borderRight: "1px solid #1e293b",
                borderBottom: "1px solid #1e293b",
                padding: "2rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                  fontWeight: 800,
                  color: "#f8fafc",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#94a3b8", marginBottom: 4 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#475569" }}>
                {stat.note}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
