import React from "react";
import { Page } from "../components/Page";

export function SettingsPage() {
  const [emailNotifs, setEmailNotifs] = React.useState(true);
  const [jobRecs, setJobRecs] = React.useState(true);
  const [profileVis, setProfileVis] = React.useState(false);

  return (
    <Page title="Settings" sub="Manage your portal preferences.">
      <div className="panel settings-panel">
        <div
          className="setting"
          style={{ cursor: "pointer" }}
          onClick={() => setEmailNotifs((prev) => !prev)}
        >
          <div>
            <strong>Email notifications</strong>
            <span>Receive updates about applications and interviews.</span>
          </div>
          <div
            className={`toggle ${emailNotifs ? "on" : ""}`}
            role="switch"
            aria-checked={emailNotifs}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setEmailNotifs((prev) => !prev);
              }
            }}
          ></div>
        </div>
        <div
          className="setting"
          style={{ cursor: "pointer" }}
          onClick={() => setJobRecs((prev) => !prev)}
        >
          <div>
            <strong>Job recommendations</strong>
            <span>Show relevant opportunities on your dashboard.</span>
          </div>
          <div
            className={`toggle ${jobRecs ? "on" : ""}`}
            role="switch"
            aria-checked={jobRecs}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setJobRecs((prev) => !prev);
              }
            }}
          ></div>
        </div>
        <div
          className="setting"
          style={{ cursor: "pointer" }}
          onClick={() => setProfileVis((prev) => !prev)}
        >
          <div>
            <strong>Profile visibility</strong>
            <span>Allow recruiters to discover your student profile.</span>
          </div>
          <div
            className={`toggle ${profileVis ? "on" : ""}`}
            role="switch"
            aria-checked={profileVis}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setProfileVis((prev) => !prev);
              }
            }}
          ></div>
        </div>
      </div>
    </Page>
  );
}
