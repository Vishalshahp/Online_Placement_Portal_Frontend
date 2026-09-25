import React from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { Page } from "../components/Page";

export function Applications() {
  const rows = [
    ["Tata Consultancy Services", "Graduate Software Trainee", "Under Review", "24 Sep 2026"],
    ["Infosys", "Systems Engineer", "Shortlisted", "21 Sep 2026"],
    ["Deloitte", "Business Technology Analyst", "Interview Scheduled", "20 Sep 2026"],
    ["Wipro", "Project Engineer", "Applied", "18 Sep 2026"],
  ];

  return (
    <Page title="My Applications" sub="Track every application from submission to selection.">
      <div className="table-panel">
        <div className="table-tools">
          <div className="search compact">
            <Search size={16} />
            <input placeholder="Search applications" />
          </div>
          <button className="filter">All Statuses</button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
                <th>Applied On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td>
                    <div className="table-company">
                      <div className="company-logo mini">{r[0].slice(0, 2).toUpperCase()}</div>
                      <strong>{r[0]}</strong>
                    </div>
                  </td>
                  <td>{r[1]}</td>
                  <td>
                    <span className={`badge ${badgeClass(r[2])}`}>{r[2]}</span>
                  </td>
                  <td>{r[3]}</td>
                  <td>
                    <button className="icon-btn">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  );
}

function badgeClass(s) {
  return s.includes("Short") || s.includes("Interview") ? "success" : s === "Under Review" ? "warning" : "neutral";
}
