import React from "react";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  { label: "Jobs", onClick: (setPage) => (setPage ? setPage("jobs") : document.getElementById("featured-jobs")?.scrollIntoView({ behavior: "smooth" })) },
  { label: "Companies", onClick: () => document.getElementById("trusted-companies")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "About", onClick: () => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Contact", onClick: () => document.getElementById("footer-contact")?.scrollIntoView({ behavior: "smooth" }) },
];

const studentLinks = [
  { label: "Find Jobs", page: "jobs" },
  { label: "My Applications", page: "applications" },
  { label: "Profile", page: "profile" },
  { label: "Resume", page: "resume" },
];

const recruiterLinks = [
  { label: "Post a Job", page: "jobs" },
  { label: "Company Profile", page: "dashboard" },
  { label: "Manage Applications", page: "applications" },
];

function SocialIcon({ d, label = "Social link" }) {
  return (
    <a
      href="#"
      aria-label={label}
      onClick={(e) => e.preventDefault()}
      className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
      style={{ width: 36, height: 36, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)", transition: "background 0.2s, color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
    </a>
  );
}

export default function Footer({ setPage }) {
  return (
    <footer
      id="footer-contact"
      style={{ background: "#0f172a", color: "rgba(255,255,255,0.65)" }}
    >
      <div className="container py-5">
        <div className="row g-4 g-lg-5">
          {/* Brand column */}
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{ width: 38, height: 38, background: "linear-gradient(135deg, #2563EB, #1D4ED8)", flexShrink: 0 }}
              >
                <GraduationCap size={20} color="#fff" />
              </div>
              <span className="fw-bold text-white" style={{ fontSize: "1.05rem" }}>
                Placement<span style={{ color: "#60a5fa" }}>Portal</span>
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 320, marginBottom: "1.5rem" }}>
              Empowering students to connect with top companies and achieve their career goals through a centralized, modern placement platform.
            </p>

            {/* Social icons */}
            <div className="d-flex gap-2">
              {/* Twitter/X */}
              <SocialIcon label="Twitter" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              {/* LinkedIn */}
              <SocialIcon label="LinkedIn" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              {/* GitHub */}
              <SocialIcon label="GitHub" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              {/* Instagram */}
              <SocialIcon label="Instagram" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-sm-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: "0.875rem" }}>Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-start text-decoration-none border-0"
                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
                    onClick={() => item.onClick(setPage)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div className="col-6 col-sm-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: "0.875rem" }}>For Students</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {studentLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-start text-decoration-none border-0"
                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
                    onClick={() => setPage && setPage(item.page)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Recruiters */}
          <div className="col-6 col-sm-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: "0.875rem" }}>For Recruiters</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {recruiterLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-start text-decoration-none border-0"
                    style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", transition: "color 0.2s" }}
                    onClick={() => setPage && setPage(item.page)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-sm-3 col-lg-2">
            <h6 className="fw-bold text-white mb-3" style={{ fontSize: "0.875rem" }}>Contact</h6>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-2">
                <Mail size={15} className="flex-shrink-0 mt-1" style={{ color: "#60a5fa" }} />
                <a
                  href="mailto:support@placementportal.in"
                  className="text-decoration-none"
                  style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}
                >
                  support@placementportal.in
                </a>
              </div>
              <div className="d-flex align-items-start gap-2">
                <Phone size={15} className="flex-shrink-0 mt-1" style={{ color: "#60a5fa" }} />
                <span style={{ fontSize: "0.8rem" }}>+91 98765 43210</span>
              </div>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={15} className="flex-shrink-0 mt-1" style={{ color: "#60a5fa" }} />
                <span style={{ fontSize: "0.8rem" }}>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-5 pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="mb-0" style={{ fontSize: "0.8rem" }}>
            © 2026 PlacementPortal. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
                style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
