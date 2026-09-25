import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, CalendarDays, UserRound, ChevronRight } from "lucide-react";
import { jobs } from "../data/jobs";
import { TiltCard, FadeIn } from "../components/TiltCard";
import { useAuth } from "../context/AuthContext";

export function Dashboard({ setPage }) {
  const { user } = useAuth();
  const firstName = user?.name ? user.name.split(" ")[0] : "Student";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="welcome">
        <div>
          <div className="eyebrow">THURSDAY, 25 SEPTEMBER 2026</div>
          <h1>Good morning, {firstName} 👋</h1>
          <p>Here’s what’s happening with your placement journey today.</p>
        </div>
        <button className="primary" onClick={() => setPage("jobs")}>
          Explore Opportunities <ArrowRight size={17} />
        </button>
      </div>
      <div className="stats-grid">
        <FadeIn delay={0.1}><Stat label="Applications" value="12" meta="+3 this month" icon={FileText} /></FadeIn>
        <FadeIn delay={0.2}><Stat label="Shortlisted" value="4" meta="33% of applications" icon={CheckCircle2} /></FadeIn>
        <FadeIn delay={0.3}><Stat label="Upcoming Interviews" value="2" meta="Next: Tomorrow" icon={CalendarDays} /></FadeIn>
        <FadeIn delay={0.4}><Stat label="Profile Completion" value="82%" meta="Add 2 more skills" icon={UserRound} /></FadeIn>
      </div>
      <div className="grid-2">
        <FadeIn delay={0.2}>
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Recommended for you</h2>
                <p>Based on your skills and profile</p>
              </div>
              <button className="link-btn" onClick={() => setPage("jobs")}>
                View all <ArrowRight size={15} />
              </button>
            </div>
            <div className="job-list">
              {jobs.slice(0, 3).map((j) => (
                <JobRow key={j.id} job={j} onClick={() => setPage("jobs")} />
              ))}
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={0.3}>
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Placement progress</h2>
                <p>Your journey at a glance</p>
              </div>
            </div>
            <div className="progress-wrap">
              <div className="progress-top">
                <span>Overall readiness</span>
                <strong>78%</strong>
              </div>
              <div className="progress">
                <motion.span 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "78%" }} 
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
            <div className="check-row" onClick={() => setPage("profile")} style={{ cursor: "pointer" }}>
              <CheckCircle2 />
              <div>
                <strong>Profile completed</strong>
                <span>All basic information added</span>
              </div>
            </div>
            <div className="check-row" onClick={() => setPage("resume")} style={{ cursor: "pointer" }}>
              <CheckCircle2 />
              <div>
                <strong>Resume uploaded</strong>
                <span>Updated 3 days ago</span>
              </div>
            </div>
            <div className="check-row pending" onClick={() => setPage("profile")} style={{ cursor: "pointer" }}>
              <div className="dot"></div>
              <div>
                <strong>Complete skill assessment</strong>
                <span>Recommended next step</span>
              </div>
              <ArrowRight size={16} />
            </div>
          </section>
        </FadeIn>
      </div>
      <FadeIn delay={0.4}>
        <section className="panel activity">
          <div className="panel-head">
            <div>
              <h2>Recent activity</h2>
              <p>Latest updates on your applications</p>
            </div>
          </div>
          <div className="timeline">
            <Activity
              icon={<CheckCircle2 />}
              title="You were shortlisted for Systems Engineer"
              company="Infosys"
              time="Today, 10:30 AM"
              onClick={() => setPage("interviews")}
            />
            <Activity
              icon={<CalendarDays />}
              title="Interview scheduled for Graduate Software Trainee"
              company="TCS • Tomorrow at 11:00 AM"
              time="Yesterday"
              onClick={() => setPage("interviews")}
            />
            <Activity
              icon={<FileText />}
              title="Application submitted successfully"
              company="Deloitte • Business Technology Analyst"
              time="20 Sep 2026"
              onClick={() => setPage("applications")}
            />
          </div>
        </section>
      </FadeIn>
    </motion.div>
  );
}

function Stat({ label, value, meta, icon: Icon }) {
  return (
    <TiltCard className="stat">
      <div className="stat-icon">
        <Icon size={19} />
      </div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{meta}</small>
    </TiltCard>
  );
}

function JobRow({ job, onClick }) {
  return (
    <div className="job-row" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="company-logo small-logo">{job.logo}</div>
      <div className="jr-main">
        <strong>{job.role}</strong>
        <span>{job.company} • {job.location}</span>
      </div>
      <div className="jr-right">
        <b>{job.salary}</b>
        <small>{job.days}</small>
      </div>
      <ChevronRight size={17} />
    </div>
  );
}

function Activity({ icon, title, company, time, onClick }) {
  return (
    <div className="activity-row" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="activity-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <span>{company}</span>
      </div>
      <time>{time}</time>
    </div>
  );
}
