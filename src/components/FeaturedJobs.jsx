import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bookmark, ArrowUpRight } from "lucide-react";

const categories = [
  { id: "all", label: "All Roles" },
  { id: "engineering", label: "Engineering" },
  { id: "frontend", label: "Frontend / UI" },
  { id: "backend", label: "Backend / Cloud" },
  { id: "data", label: "Data & AI" },
];

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "ABC Technologies",
    location: "Bangalore",
    category: "engineering",
    type: "Full Time",
    exp: "0–2 yrs",
    salary: "₹6–10 LPA",
    tags: ["React", "Node.js"],
    logo: "AB",
    logoBg: "linear-gradient(135deg, #2563EB, #1D4ED8)",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "WebCraft Solutions",
    location: "Remote",
    category: "frontend",
    type: "Remote",
    exp: "0–1 yr",
    salary: "₹5–8.5 LPA",
    tags: ["React", "TypeScript"],
    logo: "WC",
    logoBg: "linear-gradient(135deg, #7C3AED, #5B21B6)",
  },
  {
    id: 3,
    title: "Backend Core Engineer",
    company: "DevCore Systems",
    location: "Pune",
    category: "backend",
    type: "Full Time",
    exp: "1–3 yrs",
    salary: "₹7–13 LPA",
    tags: ["Java", "Spring Boot"],
    logo: "DC",
    logoBg: "linear-gradient(135deg, #059669, #047857)",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "InsightEdge Analytics",
    location: "Hyderabad",
    category: "data",
    type: "Hybrid",
    exp: "0–2 yrs",
    salary: "₹5.5–9 LPA",
    tags: ["Python", "SQL"],
    logo: "IE",
    logoBg: "linear-gradient(135deg, #D97706, #B45309)",
  },
  {
    id: 5,
    title: "UI/UX Product Designer",
    company: "PixelCraft Studio",
    location: "Mumbai",
    category: "frontend",
    type: "Remote",
    exp: "0–2 yrs",
    salary: "₹5–8 LPA",
    tags: ["Figma", "UI Systems"],
    logo: "PC",
    logoBg: "linear-gradient(135deg, #0891B2, #0E7490)",
  },
  {
    id: 6,
    title: "AI / ML Associate",
    company: "NeuralTech Labs",
    location: "Bangalore",
    category: "data",
    type: "Hybrid",
    exp: "0–2 yrs",
    salary: "₹8–15 LPA",
    tags: ["Python", "PyTorch"],
    logo: "NT",
    logoBg: "linear-gradient(135deg, #4F46E5, #3730A3)",
  },
];

export default function FeaturedJobs({ setPage }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [savedJobs, setSavedJobs] = useState(new Set());

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    setSavedJobs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredJobs =
    selectedCategory === "all"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <section
      id="featured-jobs"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "3.25rem 0",
      }}
    >
      <div className="container">
        {/* Header: Compact & Clean */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-3.5">
          <div className="mb-4">
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: "0.35rem",
              }}
            >
              Open Positions
            </p>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 1.95rem)",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Featured Job Opportunities
            </h2>
          </div>

          <button
            className="btn d-inline-flex align-items-center gap-1.5 fw-semibold align-self-start align-self-md-auto"
            style={{
              background: "#FFFFFF",
              color: "#334155",
              border: "1px solid #E2E8F0",
              borderRadius: 6,
              padding: "0.45rem 0.95rem",
              fontSize: "0.82rem",
              transition: "all 0.15s ease",
            }}
            onClick={() => setPage("jobs")}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#94A3B8";
              e.currentTarget.style.color = "#0F172A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E2E8F0";
              e.currentTarget.style.color = "#334155";
            }}
          >
            <span>All positions</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div
          className="d-flex align-items-center gap-1.5 flex-wrap mb-4 pb-1"
          style={{ overflowX: "auto" }}
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: active ? "#0F172A" : "transparent",
                  color: active ? "#FFFFFF" : "#64748B",
                  border: active ? "1px solid #0F172A" : "1px solid #E2E8F0",
                  borderRadius: "20px",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#0F172A";
                    e.currentTarget.style.borderColor = "#CBD5E1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#64748B";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Responsive Cards Grid */}
        <motion.div layout className="row g-3">
          <AnimatePresence>
            {filteredJobs.map((job) => {
              const isSaved = savedJobs.has(job.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  key={job.id}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <div
                    onClick={() => setPage("jobs")}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: 10,
                      border: "1px solid #E2E8F0",
                      padding: "1rem 1.15rem",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#2563EB";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 20px -4px rgba(15, 23, 42, 0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E2E8F0";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Header: Logo, Company & Location, Bookmark */}
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center gap-2 min-w-0">
                          <div
                            style={{
                              width: 34,
                              height: 34,
                              borderRadius: 7,
                              background: job.logoBg,
                              color: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              flexShrink: 0,
                            }}
                          >
                            {job.logo}
                          </div>
                          <div className="text-truncate">
                            <div
                              className="text-truncate fw-semibold"
                              style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.25 }}
                            >
                              {job.company}
                            </div>
                            <div style={{ fontSize: "0.72rem", color: "#94A3B8" }}>
                              {job.location} &middot; {job.type}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => toggleBookmark(e, job.id)}
                          aria-label={isSaved ? "Saved" : "Save"}
                          style={{
                            background: "transparent",
                            border: "none",
                            padding: "4px",
                            color: isSaved ? "#2563EB" : "#CBD5E1",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 4,
                            transition: "color 0.12s ease",
                          }}
                          onMouseEnter={(e) => {
                            if (!isSaved) e.currentTarget.style.color = "#64748B";
                          }}
                          onMouseLeave={(e) => {
                            if (!isSaved) e.currentTarget.style.color = "#CBD5E1";
                          }}
                        >
                          <Bookmark size={15} fill={isSaved ? "#2563EB" : "none"} />
                        </button>
                      </div>

                      {/* Job Title */}
                      <h3
                        style={{
                          fontSize: "0.93rem",
                          fontWeight: 700,
                          color: "#0F172A",
                          lineHeight: 1.3,
                          marginBottom: "0.55rem",
                        }}
                      >
                        {job.title}
                      </h3>

                      {/* Tag pills: Experience + Key Skills */}
                      <div className="d-flex align-items-center gap-1.5 flex-wrap mb-3">
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "#475569",
                            background: "#F1F5F9",
                            padding: "2px 7px",
                            borderRadius: 4,
                          }}
                        >
                          {job.exp}
                        </span>
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "0.68rem",
                              color: "#64748B",
                              background: "#F8FAFC",
                              border: "1px solid #E2E8F0",
                              padding: "1px 6px",
                              borderRadius: 4,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Salary + Apply Link */}
                    <div
                      className="d-flex align-items-center justify-content-between pt-2"
                      style={{ borderTop: "1px solid #F1F5F9", marginTop: "auto" }}
                    >
                      <span
                        style={{
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "#0F172A",
                        }}
                      >
                        {job.salary}
                      </span>

                      <button
                        type="button"
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#2563EB",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          padding: "2px 4px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPage("applications");
                        }}
                      >
                        <span>Apply</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Footer Note */}
        <div className="text-center mt-3 pt-2">
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#64748B",
              fontSize: "0.82rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
            onClick={() => setPage("jobs")}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
          >
            Looking for more roles? <span style={{ fontWeight: 600, color: "#2563EB" }}>View all 500+ listings &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
