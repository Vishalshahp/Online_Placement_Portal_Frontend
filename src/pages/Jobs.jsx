import React from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Clock3, Bookmark } from "lucide-react";
import { TiltCard, FadeIn } from "../components/TiltCard";

export function Jobs({ jobs, setPage }) {
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
          <button className="filter active">All Jobs</button>
          <button className="filter">Full Time</button>
          <button className="filter">Internships</button>
          <button className="filter">Ahmedabad</button>
          <button className="filter">Remote</button>
        </div>
      </FadeIn>
      <div className="job-grid">
        {jobs.map((j, idx) => (
          <FadeIn key={j.id} delay={0.1 + idx * 0.1}>
            <JobCard job={j} onApply={() => setPage("applications")} />
          </FadeIn>
        ))}
      </div>
      {jobs.length === 0 && (
        <FadeIn delay={0.2}>
          <div className="empty">
            <Search size={30} />
            <h3>No jobs found</h3>
            <p>Try another search keyword.</p>
          </div>
        </FadeIn>
      )}
    </motion.div>
  );
}

function JobCard({ job, onApply }) {
  return (
    <TiltCard className="job-card">
      <div className="company-row">
        <div className="company-logo">{job.logo}</div>
        <button className="icon-btn">
          <Bookmark size={18} />
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
        <button className="primary small" onClick={onApply}>
          View & Apply
        </button>
      </div>
      <small className="posted">{job.days}</small>
    </TiltCard>
  );
}
