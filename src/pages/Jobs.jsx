import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Clock3, Bookmark } from "lucide-react";
import { TiltCard, FadeIn } from "../components/TiltCard";

export function Jobs({ jobs, setPage }) {
  const [activeFilter, setActiveFilter] = React.useState("All Jobs");
  const [savedJobs, setSavedJobs] = React.useState(new Set());

  const toggleSave = (id) => {
    setSavedJobs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filterList = ["All Jobs", "Full Time", "Internships", "Ahmedabad", "Remote"];

  const filteredJobs = jobs.filter((j) => {
    if (activeFilter === "All Jobs") return true;
    if (activeFilter === "Full Time") return j.type === "Full Time";
    if (activeFilter === "Internships")
      return j.type.toLowerCase().includes("intern") || j.role.toLowerCase().includes("trainee");
    if (activeFilter === "Ahmedabad") return j.location.toLowerCase().includes("ahmedabad");
    if (activeFilter === "Remote")
      return j.location.toLowerCase().includes("remote") || j.location.toLowerCase().includes("hybrid");
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="page-head">
        <div>
          <div className="eyebrow">OPPORTUNITIES</div>
          <h1>Find your next opportunity</h1>
          <p>Explore roles matched to your skills, education and career interests.</p>
        </div>
      </div>
      <FadeIn delay={0.1}>
        <div className="filters">
          {filterList.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </FadeIn>
      <div className="job-grid">
        {filteredJobs.map((j, idx) => (
          <FadeIn key={j.id} delay={0.1 + idx * 0.1}>
            <JobCard
              job={j}
              isSaved={savedJobs.has(j.id)}
              onToggleSave={() => toggleSave(j.id)}
              onApply={() => setPage("applications")}
            />
          </FadeIn>
        ))}
      </div>
      {filteredJobs.length === 0 && (
        <FadeIn delay={0.2}>
          <div className="empty">
            <Search size={30} />
            <h3>No jobs found</h3>
            <p>Try selecting another filter or clearing your search keywords.</p>
          </div>
        </FadeIn>
      )}
    </motion.div>
  );
}

function JobCard({ job, isSaved, onToggleSave, onApply }) {
  return (
    <TiltCard className="job-card">
      <div className="company-row">
        <div className="company-logo">{job.logo}</div>
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleSave}
          title={isSaved ? "Remove bookmark" : "Bookmark this job"}
          aria-label={isSaved ? "Saved" : "Save"}
          style={{ color: isSaved ? "#2563EB" : undefined }}
        >
          <Bookmark size={18} fill={isSaved ? "#2563EB" : "none"} />
        </button>
      </div>
      <div className="company-name">{job.company}</div>
      <h3>{job.role}</h3>
      <div className="job-meta">
        <span>
          <MapPin size={15} />
          {job.location}
        </span>
        <span>
          <Clock3 size={15} />
          {job.type}
        </span>
      </div>
      <div className="tags">
        {job.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="card-foot" style={{ marginTop: "auto" }}>
        <strong>{job.salary}</strong>
        <button type="button" className="primary small" onClick={onApply}>
          View & Apply
        </button>
      </div>
      <small className="posted">{job.days}</small>
    </TiltCard>
  );
}
