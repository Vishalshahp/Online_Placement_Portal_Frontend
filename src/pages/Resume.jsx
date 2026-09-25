import React from "react";
import { Upload, FileText, MoreHorizontal } from "lucide-react";
import { Page } from "../components/Page";
import { useAuth } from "../context/AuthContext";

export function Resume() {
  const { user } = useAuth();
  const fileInputRef = React.useRef(null);
  const displayName = user?.name || "Student";
  const displayEmail = user?.email || "student@placement.edu";
  const displayBranch = user?.branch || (user?.role === "student" ? "B.Tech Information Technology • Semester 7" : "Placement Candidate");
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "ST";

  const defaultFileName = `${displayName.replace(/\s+/g, "_")}_Resume.pdf`;
  const [currentFile, setCurrentFile] = React.useState({
    name: defaultFileName,
    size: "1.2 MB",
    updated: "Updated 22 Sep 2026",
  });
  const [uploadSuccess, setUploadSuccess] = React.useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setCurrentFile({
        name: file.name,
        size: `${sizeMb} MB`,
        updated: "Updated just now",
      });
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <Page title="Resume" sub="Keep your resume current and ready for every opportunity.">
      <div className="resume-grid">
        <div className="resume-preview">
          <div className="resume-top">
            <div className="avatar large">{initials}</div>
            <div>
              <h2>{displayName}</h2>
              <p>{displayBranch}</p>
              <span>Ahmedabad, Gujarat • {displayEmail}</span>
            </div>
          </div>
          <hr />
          <h3>Career Objective</h3>
          <p>Information Technology student seeking an opportunity to apply technical, analytical and communication skills in a professional environment.</p>
          <h3>Skills</h3>
          <div className="tags">
            <span>JavaScript</span>
            <span>React</span>
            <span>SQL</span>
            <span>Digital Marketing</span>
            <span>Analytics</span>
          </div>
          <h3>Education</h3>
          <p>
            <strong>B.Tech in Information Technology</strong>
            <br />
            2023–2027 • Semester 7
          </p>
        </div>
        <div className="panel resume-actions">
          <h2>Resume manager</h2>
          <p>Upload a PDF resume up to 5 MB.</p>
          <div
            className="upload"
            style={{ cursor: "pointer" }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Upload size={24} />
            <strong>Drop your resume here</strong>
            <span>or browse from your device</span>
            <button
              type="button"
              className="secondary"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Choose File
            </button>
          </div>
          {uploadSuccess && (
            <div
              style={{
                background: "#DCFCE7",
                color: "#166534",
                padding: "8px 12px",
                borderRadius: 6,
                fontSize: "0.82rem",
                fontWeight: 600,
                marginTop: "0.5rem",
              }}
            >
              ✓ New resume uploaded successfully!
            </div>
          )}
          <div className="file-row">
            <FileText size={19} />
            <div>
              <strong>{currentFile.name}</strong>
              <span>{currentFile.updated} • {currentFile.size}</span>
            </div>
            <button
              type="button"
              className="icon-btn"
              onClick={() => fileInputRef.current?.click()}
              title="Replace resume file"
            >
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
