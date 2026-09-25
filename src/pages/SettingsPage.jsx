import React from "react";
import { Page } from "../components/Page";

export function SettingsPage() {
  return (
    <Page title="Settings" sub="Manage your portal preferences.">
      <div className="panel settings-panel">
        <div className="setting">
          <div>
            <strong>Email notifications</strong>
            <span>Receive updates about applications and interviews.</span>
          </div>
          <div className="toggle on"></div>
        </div>
        <div className="setting">
          <div>
            <strong>Job recommendations</strong>
            <span>Show relevant opportunities on your dashboard.</span>
          </div>
          <div className="toggle on"></div>
        </div>
        <div className="setting">
          <div>
            <strong>Profile visibility</strong>
            <span>Allow recruiters to discover your student profile.</span>
          </div>
          <div className="toggle"></div>
        </div>
      </div>
    </Page>
  );
}
