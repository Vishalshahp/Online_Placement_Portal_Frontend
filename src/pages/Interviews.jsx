import React from "react";
import { Building2, CalendarDays, Users } from "lucide-react";
import { Page } from "../components/Page";
import { TiltCard, FadeIn } from "../components/TiltCard";

export function Interviews() {
  const [selectedInterview, setSelectedInterview] = React.useState(null);

  const interviewsList = [
    { company: "Infosys", role: "Systems Engineer", date: "26 Sep 2026", time: "11:00 AM", mode: "Online", platform: "Google Meet", panel: "Campus Tech Panel 3" },
    { company: "Deloitte", role: "Business Technology Analyst", date: "29 Sep 2026", time: "03:30 PM", mode: "Online", platform: "Microsoft Teams", panel: "Consulting Leadership Panel" },
  ];

  return (
    <Page title="Interviews" sub="Keep track of upcoming interviews and important schedules.">
      <div className="interview-grid">
        {interviewsList.map((item, idx) => (
          <FadeIn key={item.company} delay={0.1 * (idx + 1)}>
            <InterviewCard
              {...item}
              onViewDetails={() => setSelectedInterview(item)}
            />
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>Interview preparation</h2>
              <p>Use these checkpoints before your next interview.</p>
            </div>
          </div>
          <div className="prep-grid">
            <Prep n="01" t="Review the job description" d="Understand the responsibilities and required skills." />
            <Prep n="02" t="Research the company" d="Know its products, culture and recent work." />
            <Prep n="03" t="Prepare your introduction" d="Keep a clear 60-second professional introduction ready." />
          </div>
        </section>
      </FadeIn>

      {/* Interview Details Modal */}
      {selectedInterview && (
        <div
          className="position-fixed inset-0 d-flex align-items-center justify-content-center px-3"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 1100,
          }}
          onClick={() => setSelectedInterview(null)}
        >
          <div
            className="bg-white p-4 rounded-3 shadow-lg"
            style={{ maxWidth: 440, width: "100%", border: "1px solid #E2E8F0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                <span className="badge success mb-1">Confirmed Slot</span>
                <h4 className="m-0 fw-bold" style={{ color: "#0F172A", fontSize: "1.1rem" }}>
                  {selectedInterview.role}
                </h4>
                <span style={{ fontSize: "0.85rem", color: "#64748B" }}>
                  {selectedInterview.company}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-light border-0"
                onClick={() => setSelectedInterview(null)}
              >
                ✕
              </button>
            </div>

            <div className="d-flex flex-column gap-2 mb-3" style={{ fontSize: "0.85rem", color: "#334155" }}>
              <div className="d-flex justify-content-between p-2 rounded" style={{ background: "#F8FAFC" }}>
                <span className="text-muted">Date & Time:</span>
                <strong>{selectedInterview.date} • {selectedInterview.time}</strong>
              </div>
              <div className="d-flex justify-content-between p-2 rounded" style={{ background: "#F8FAFC" }}>
                <span className="text-muted">Platform:</span>
                <strong>{selectedInterview.platform} ({selectedInterview.mode})</strong>
              </div>
              <div className="d-flex justify-content-between p-2 rounded" style={{ background: "#F8FAFC" }}>
                <span className="text-muted">Assigned Panel:</span>
                <strong>{selectedInterview.panel}</strong>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "#64748B", margin: "0 0 1rem 0" }}>
              Please be ready 10 minutes prior to your slot. Keep your college ID card and portfolio ready.
            </p>

            <button
              type="button"
              className="btn btn-primary w-100 fw-semibold"
              style={{ background: "#0F172A", border: "none", borderRadius: 8, padding: "0.6rem" }}
              onClick={() => setSelectedInterview(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </Page>
  );
}

function InterviewCard({ company, role, date, time, mode, onViewDetails }) {
  return (
    <TiltCard className="interview-card">
      <div className="date-box">
        <b>{date.split(" ")[0]}</b>
        <span>{date.split(" ")[1].slice(0, 3)}</span>
      </div>
      <div>
        <span className="badge success">Upcoming</span>
        <h3>{role}</h3>
        <p>
          <Building2 size={15} />
          {company}
        </p>
        <p>
          <CalendarDays size={15} />
          {date} • {time}
        </p>
        <p>
          <Users size={15} />
          {mode} interview
        </p>
      </div>
      <button type="button" className="secondary" onClick={onViewDetails}>
        View details
      </button>
    </TiltCard>
  );
}

function Prep({ n, t, d }) {
  return (
    <div className="prep">
      <span>{n}</span>
      <div>
        <strong>{t}</strong>
        <p>{d}</p>
      </div>
    </div>
  );
}
