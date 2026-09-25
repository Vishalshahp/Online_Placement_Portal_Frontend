import React from "react";
import { Building2, CalendarDays, Users } from "lucide-react";
import { Page } from "../components/Page";
import { TiltCard, FadeIn } from "../components/TiltCard";

export function Interviews() {
  return (
    <Page title="Interviews" sub="Keep track of upcoming interviews and important schedules.">
      <div className="interview-grid">
        <FadeIn delay={0.1}>
          <InterviewCard company="Infosys" role="Systems Engineer" date="26 Sep 2026" time="11:00 AM" mode="Online" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <InterviewCard company="Deloitte" role="Business Technology Analyst" date="29 Sep 2026" time="03:30 PM" mode="Online" />
        </FadeIn>
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
    </Page>
  );
}

function InterviewCard({ company, role, date, time, mode }) {
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
      <button className="secondary">View details</button>
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
