import React from "react";
import { Bell, ChevronRight } from "lucide-react";
import { Page } from "../components/Page";

export function Notifications() {
  const notices = [
    ["Shortlisted for Systems Engineer", "Infosys shortlisted your application. Your interview is scheduled for 26 Sep.", "Today", "success"],
    ["New opportunity matches your profile", "4 new jobs match your current skills and preferences.", "Yesterday", "info"],
    ["Complete your profile", "Adding your projects and certifications can improve your profile completeness.", "2 days ago", "warning"],
  ];

  return (
    <Page title="Notifications" sub="Stay updated with placement activity.">
      <div className="notice-list">
        {notices.map((x) => (
          <div className="notice" key={x[0]}>
            <div className={`notice-icon ${x[3]}`}>
              <Bell size={18} />
            </div>
            <div>
              <strong>{x[0]}</strong>
              <p>{x[1]}</p>
              <small>{x[2]}</small>
            </div>
            <ChevronRight size={18} />
          </div>
        ))}
      </div>
    </Page>
  );
}
