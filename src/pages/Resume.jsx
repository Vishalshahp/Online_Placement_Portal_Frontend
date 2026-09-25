import React from "react";
import { Upload, FileText, MoreHorizontal } from "lucide-react";
import { Page } from "../components/Page";

export function Resume() {
  return (
    <Page title="Resume" sub="Keep your resume current and ready for every opportunity.">
      <div className="resume-grid">
        <div className="resume-preview">
          <div className="resume-top">
            <div className="avatar large">VS</div>
            <div>
              <h2>Vishal Shah</h2>
              <p>B.Tech Information Technology • Semester 7</p>
              <span>Ahmedabad, Gujarat • shahvishal@example.com</span>
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
          <div className="upload">
            <Upload size={24} />
            <strong>Drop your resume here</strong>
            <span>or browse from your device</span>
            <button className="secondary">Choose File</button>
          </div>
          <div className="file-row">
            <FileText size={19} />
            <div>
              <strong>Vishal_Shah_Resume.pdf</strong>
              <span>Updated 22 Sep 2026 • 1.2 MB</span>
            </div>
            <button className="icon-btn">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
