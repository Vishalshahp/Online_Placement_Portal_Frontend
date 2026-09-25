import React from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { Page } from "../components/Page";

export function Applications() {
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All");

  const rows = [
    ["Tata Consultancy Services", "Graduate Software Trainee", "Under Review", "24 Sep 2026"],
    ["Infosys", "Systems Engineer", "Shortlisted", "21 Sep 2026"],
    ["Deloitte", "Business Technology Analyst", "Interview Scheduled", "20 Sep 2026"],
    ["Wipro", "Project Engineer", "Applied", "18 Sep 2026"],
  ];

  const statuses = ["All", "Under Review", "Shortlisted", "Interview Scheduled", "Applied"];

  const cycleStatus = () => {
    const nextIdx = (statuses.indexOf(statusFilter) + 1) % statuses.length;
    setStatusFilter(statuses[nextIdx]);
  };

  const filteredRows = rows.filter((r) => {
    const matchesQuery =
      r[0].toLowerCase().includes(query.toLowerCase()) ||
      r[1].toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "All" || r[2] === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <Page title="My Applications" sub="Track every application from submission to selection.">
      <div className="table-panel">
        <div className="table-tools">
          <div className="search compact">
            <Search size={16} />
            <input
              placeholder="Search applications..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="filter"
            onClick={cycleStatus}
            title="Click to toggle status filter"
          >
            {statusFilter === "All" ? "All Statuses" : statusFilter}
          </button>
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
              {filteredRows.length > 0 ? (
                filteredRows.map((r) => (
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
                      <button type="button" className="icon-btn" title="Application details">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "2rem", color: "#64748B" }}>
                    No applications matching your search or filter.
                  </td>
                </tr>
              )}
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
