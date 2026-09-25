import React from "react";
import { motion } from "framer-motion";

// Crisp SVG Brand Marks
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="1" y="1" width="10" height="10" fill="#F25022" />
    <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
    <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
    <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
  </svg>
);

const AmazonIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13.8 11.2c-.1-.7-.4-1.2-.9-1.6-.5-.4-1.1-.6-1.9-.6-.9 0-1.6.3-2.1.8-.5.5-.8 1.2-.8 2.1 0 .9.3 1.6.8 2.1.5.5 1.2.8 2.1.8.8 0 1.4-.2 1.9-.6.5-.4.8-1 .9-1.7V11.2zm2.6 4.6c-.6.6-1.3 1-2.1 1.3-.8.3-1.8.5-2.9.5-1.5 0-2.8-.4-3.8-1.2C6.6 15.6 6 14.4 6 12.8c0-1.7.6-3 1.8-3.9 1.2-.9 2.7-1.4 4.5-1.4.9 0 1.7.1 2.4.4.7.2 1.2.5 1.7.9V8.3c0-1.1-.3-1.9-.9-2.4-.6-.5-1.5-.8-2.7-.8-1 0-1.9.2-2.7.6-.8.4-1.3.9-1.5 1.5l-2.4-1.2C6.7 4.7 7.7 3.8 9 3.1c1.3-.7 2.9-1 4.7-1 2.1 0 3.7.5 4.8 1.6 1.1 1.1 1.6 2.7 1.6 4.8v8.6h-2.7v-1.3h-.2z" fill="#0F172A" />
    <path d="M2.5 18.5c5.3 3.9 13.8 4.2 19 0l.5.8c-5.8 4.7-15.1 4.4-20-.2l.5-.6z" fill="#FF9900" />
    <path d="M20.5 17.5l2.5 2.2-3.1.8.6-3z" fill="#FF9900" />
  </svg>
);

const DeloitteIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="20" cy="15" r="3.2" fill="#86BC25" />
    <path d="M3 6h4.5c4.5 0 7 2.8 7 6.5s-2.5 6.5-7 6.5H3V6zm4.2 10.3c2.4 0 4-1.6 4-3.8s-1.6-3.8-4-3.8H5.6v7.6h1.6z" fill="#0F172A" />
  </svg>
);

const AccentureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 18.5L14 12L4 5.5" stroke="#A100FF" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GoldmanIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A2240" />
    <text x="12" y="16" fill="#F0F4F8" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="Georgia, serif">GS</text>
  </svg>
);

const TCSIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#003874" />
    <text x="12" y="16" fill="#FFFFFF" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="system-ui, sans-serif" letterSpacing="0.5">TCS</text>
  </svg>
);

const AdobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FA0F00" aria-hidden="true">
    <path d="M13.96 20.8h3.94L12.06 7.2h-3.9L2 20.8h4.08l1.7-4.14h4.48l1.7 4.14zm-4.9-7.06l1.04-2.54 1.04 2.54H9.06zM22 20.8V3.2H2v.8h18.8v16.8H22z" />
  </svg>
);

const CiscoIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="#049FD9" aria-hidden="true">
    <rect x="2" y="11" width="2" height="6" rx="1" />
    <rect x="6" y="7" width="2" height="10" rx="1" />
    <rect x="10" y="4" width="2" height="13" rx="1" />
    <rect x="14" y="4" width="2" height="13" rx="1" />
    <rect x="18" y="7" width="2" height="10" rx="1" />
    <rect x="22" y="11" width="2" height="6" rx="1" />
  </svg>
);

const OracleIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="7" width="20" height="10" rx="5" stroke="#C74634" strokeWidth="2.8" />
  </svg>
);

const IBMIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="#1F70C1" aria-hidden="true">
    <rect x="2" y="6" width="20" height="1.8" />
    <rect x="2" y="9" width="20" height="1.8" />
    <rect x="2" y="12" width="20" height="1.8" />
    <rect x="2" y="15" width="20" height="1.8" />
  </svg>
);

const InfosysIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#007CC3" />
    <text x="12" y="16" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">infy</text>
  </svg>
);

const CognizantIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="#0033A0" strokeWidth="2.5" />
    <path d="M8 12a4 4 0 017-2.6" stroke="#0033A0" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const WiproIcon = () => (
  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="3.5" fill="#E84393" />
    <circle cx="16" cy="8" r="3.5" fill="#0984E3" />
    <circle cx="8" cy="16" r="3.5" fill="#00B894" />
    <circle cx="16" cy="16" r="3.5" fill="#FDCB6E" />
  </svg>
);

const rowOneCompanies = [
  { name: "Google", tag: "Cloud & AI", icon: GoogleIcon },
  { name: "Microsoft", tag: "Enterprise", icon: MicrosoftIcon },
  { name: "Amazon", tag: "AWS & Tech", icon: AmazonIcon },
  { name: "Deloitte", tag: "Consulting", icon: DeloitteIcon },
  { name: "Goldman Sachs", tag: "Fintech & Quant", icon: GoldmanIcon },
  { name: "Accenture", tag: "Strategy", icon: AccentureIcon },
  { name: "TCS Digital", tag: "Global IT", icon: TCSIcon },
];

const rowTwoCompanies = [
  { name: "Adobe", tag: "Design & Cloud", icon: AdobeIcon },
  { name: "Cisco Systems", tag: "Cybersecurity", icon: CiscoIcon },
  { name: "Oracle", tag: "Database", icon: OracleIcon },
  { name: "IBM", tag: "Hybrid Cloud", icon: IBMIcon },
  { name: "Infosys", tag: "Digital Services", icon: InfosysIcon },
  { name: "Cognizant", tag: "Tech Services", icon: CognizantIcon },
  { name: "Wipro", tag: "Software", icon: WiproIcon },
];

export default function TrustedCompanies({ setPage }) {
  // Seamless loop by duplicating arrays
  const duplicatedRow1 = [...rowOneCompanies, ...rowOneCompanies];
  const duplicatedRow2 = [...rowTwoCompanies, ...rowTwoCompanies];

  return (
    <section id="trusted-companies" className="trusted-companies-section">
      <div className="trusted-ambient-glow" />

      <div className="container position-relative mb-4">
        {/* Top Header */}
        <div className="text-center mx-auto" style={{ maxWidth: 740 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="d-inline-flex align-items-center gap-2 mb-2"
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#2563EB",
                background: "rgba(37, 99, 235, 0.08)",
                padding: "4px 12px",
                borderRadius: 999,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Leading Campus Recruiters
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
              marginBottom: "0.6rem",
            }}
          >
            Where our graduates launch their careers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontSize: "0.95rem",
              color: "#64748B",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Over 250+ top tech leaders, consulting giants, and Fortune 500 enterprises conduct official placement drives on our platform.
          </motion.p>
        </div>
      </div>

      {/* Infinite Logo Ribbon Rows */}
      <div className="w-100 mb-4 pb-2">
        {/* Row 1: Leftward scroll */}
        <div className="marquee-container mb-2">
          <div className="marquee-track">
            {duplicatedRow1.map((company, index) => {
              const Icon = company.icon;
              return (
                <div key={`row1-${company.name}-${index}`} className="company-logo-chip">
                  <Icon />
                  <span className="chip-name">{company.name}</span>
                  <span className="chip-tag">{company.tag}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Rightward scroll */}
        <div className="marquee-container">
          <div className="marquee-track-reverse">
            {duplicatedRow2.map((company, index) => {
              const Icon = company.icon;
              return (
                <div key={`row2-${company.name}-${index}`} className="company-logo-chip">
                  <Icon />
                  <span className="chip-name">{company.name}</span>
                  <span className="chip-tag">{company.tag}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
