import React, { useState, useEffect } from "react";
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
  LogOut,
  Home as HomeIcon,
} from "lucide-react";
import "./styles.css";

// Auth Provider & Context
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Import pages
import { Dashboard } from "./pages/Dashboard";
import { Jobs } from "./pages/Jobs";
import { Applications } from "./pages/Applications";
import { Interviews } from "./pages/Interviews";
import { Resume } from "./pages/Resume";
import { Notifications } from "./pages/Notifications";
import { Profile } from "./pages/Profile";
import { SettingsPage } from "./pages/SettingsPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

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
      login: "Login",
      register: "Register",
    }[p] || "Dashboard"
  );
}

function AppContent() {
  const { user, isAuthenticated, logout } = useAuth();
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace("#", "").replace("/", "");
    return hash || "home";
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Keep window.location.hash in sync for browser refresh & back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").replace("/", "");
      if (hash) {
        setPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (page === "home") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      window.location.hash = page;
    }
  }, [page]);

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
    `${j.company} ${j.role} ${j.location} ${j.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const userInitials = user?.name ? user.name.slice(0, 2).toUpperCase() : "ST";
  const userSub =
    user?.role === "student"
      ? user?.branch || "B.Tech • 2026 Batch"
      : user?.role === "recruiter"
        ? "Corporate Recruiter"
        : user?.role === "tpo"
          ? "Placement Officer"
          : "Student";

  // Public standalone pages
  if (page === "home") {
    return <Home setPage={setPage} />;
  }

  if (page === "login") {
    return <Login setPage={setPage} />;
  }

  if (page === "register") {
    return <Register setPage={setPage} />;
  }

  // Authenticated Portal Pages
  return (
    <ProtectedRoute setPage={setPage} currentPage={page}>
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <GraduationCap size={22} />
          </div>
          <div>
            <strong>OPP</strong>
            <span>Online Placement Portal</span>
          </div>
          <button
            className="icon-btn close-mobile"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
          >
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
          <button
            className="nav-item"
            onClick={() => {
              setPage("home");
              setMobileOpen(false);
            }}
          >
            <HomeIcon size={18} />
            <span>Home</span>
          </button>

          <button
            className="nav-item"
            onClick={() => {
              setPage("settings");
              setMobileOpen(false);
            }}
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <button
            className="nav-item text-danger"
            style={{ color: "#DC2626" }}
            onClick={() => {
              logout();
              setPage("home");
              setMobileOpen(false);
            }}
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>

          <div
            className="mini-profile mt-2"
            style={{ cursor: "pointer" }}
            onClick={() => setPage("profile")}
            title="View Profile"
          >
            <div className="avatar">{userInitials}</div>
            <div className="text-truncate">
              <strong className="text-truncate d-block">{user?.name || "Student"}</strong>
              <span className="text-truncate d-block">{userSub}</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button
            className="icon-btn menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open sidebar menu"
          >
            <Menu size={22} />
          </button>
          <div className="breadcrumb">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setPage("home")}
              title="Return to Home"
            >
              Home
            </span>
            <ChevronRight size={15} />
            <strong>{titleFor(page)}</strong>
          </div>
          <div className="top-actions">
            <div className="search">
              <Search size={17} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs, companies..."
              />
            </div>
            <button
              className="icon-btn notif"
              onClick={() => setPage("notifications")}
              aria-label="Notifications"
            >
              <Bell size={20} />
              <i></i>
            </button>
            <div
              className="avatar"
              style={{ cursor: "pointer" }}
              onClick={() => setPage("profile")}
              title={`${user?.name || "User"} (${user?.role || "Student"})`}
            >
              {userInitials}
            </div>
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
    </ProtectedRoute>
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
