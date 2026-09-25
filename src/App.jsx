import React, { useState } from "react";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  CalendarDays,
  Bell,
  UserRound,
  Settings,
  Search,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Upload,
  MoreHorizontal,
} from "lucide-react";
import "./styles.css";

// Import pages
import { Dashboard } from "./pages/Dashboard";
import { Jobs } from "./pages/Jobs";
import { Applications } from "./pages/Applications";
import { Interviews } from "./pages/Interviews";
import { Resume } from "./pages/Resume";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";
import { SettingsPage } from "./pages/SettingsPage";

// Import data
import { jobs } from "./data/jobs";

function titleFor(p) {
  return (
    {
      dashboard: "Dashboard",
      jobs: "Find Jobs",
      applications: "My Applications",
      interviews: "Interviews",
      resume: "Resume",
      notifications: "Notifications",
      profile: "My Profile",
      settings: "Settings",
    }[p] || "Dashboard"
  );
}

export function App() {
  const [page, setPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const nav = [
    ["dashboard", "Dashboard", LayoutDashboard],
    ["jobs", "Find Jobs", BriefcaseBusiness],
    ["applications", "My Applications", FileText],
    ["interviews", "Interviews", CalendarDays],
    ["resume", "Resume", Upload],
    ["notifications", "Notifications", Bell],
    ["profile", "My Profile", UserRound],
  ];

  const filtered = jobs.filter((j) =>
    `${j.company} ${j.role} ${j.location} ${j.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <GraduationCap size={22} />
          </div>
          <div>
            <strong>OPP</strong>
            <span>Online Placement Portal</span>
          </div>
          <button className="icon-btn close-mobile" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="side-label">STUDENT PORTAL</div>
        <nav>
          {nav.map(([id, label, Icon]) => (
            <button
              key={id}
              className={`nav-item ${page === id ? "active" : ""}`}
              onClick={() => {
                setPage(id);
                setMobileOpen(false);
              }}
            >
              <Icon size={19} />
              <span>{label}</span>
              {id === "notifications" && <b className="count">3</b>}
            </button>
          ))}
        </nav>
        <div className="side-bottom">
          <button className="nav-item" onClick={() => setPage("settings")}>
            <Settings size={19} />
            <span>Settings</span>
          </button>
          <div className="mini-profile">
            <div className="avatar">VS</div>
            <div>
              <strong>Vishal Shah</strong>
              <span>B.Tech IT • Sem 7</span>
            </div>
            <MoreHorizontal size={18} />
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="breadcrumb">
            <span>Student Portal</span>
            <ChevronRight size={15} />
            <strong>{titleFor(page)}</strong>
          </div>
          <div className="top-actions">
            <div className="search">
              <Search size={17} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search jobs, companies..." />
            </div>
            <button className="icon-btn notif">
              <Bell size={20} />
              <i></i>
            </button>
            <div className="avatar">VS</div>
          </div>
        </header>

        <section className="content">
          {page === "dashboard" && <Dashboard setPage={setPage} />}
          {page === "jobs" && <Jobs jobs={filtered} setPage={setPage} />}
          {page === "applications" && <Applications />}
          {page === "interviews" && <Interviews />}
          {page === "resume" && <Resume />}
          {page === "notifications" && <Notifications />}
          {page === "profile" && <Profile />}
          {page === "settings" && <SettingsPage />}
        </section>
      </main>
    </div>
  );
}

export default App;
