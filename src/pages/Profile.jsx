import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Page } from "../components/Page";

export function Profile() {
  return (
    <Page title="My Profile" sub="Maintain accurate information so recruiters can understand your profile.">
      <div className="profile-grid">
        <section className="panel profile-main">
          <div className="profile-banner"></div>
          <div className="profile-head">
            <div className="avatar xl">VS</div>
            <div>
              <h2>Vishal Shah</h2>
              <p>B.Tech Information Technology • Semester 7</p>
              <span>Ahmedabad, Gujarat</span>
            </div>
            <button className="secondary">Edit Profile</button>
          </div>
          <div className="profile-sections">
            <div>
              <h3>About</h3>
              <p>Information Technology student interested in technology, analytics, digital products and professional growth.</p>
            </div>
            <div>
              <h3>Skills</h3>
              <div className="tags">
                <span>JavaScript</span>
                <span>React</span>
                <span>SQL</span>
                <span>Python Basics</span>
                <span>Digital Marketing</span>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <h2>Profile completeness</h2>
          <div className="big-progress">
            <strong>82%</strong>
            <div className="progress">
              <span style={{ width: "82%" }}></span>
            </div>
          </div>
          <div className="check-row">
            <CheckCircle2 />
            <div>
              <strong>Basic details</strong>
              <span>Complete</span>
            </div>
          </div>
          <div className="check-row">
            <CheckCircle2 />
            <div>
              <strong>Education</strong>
              <span>Complete</span>
            </div>
          </div>
          <div className="check-row pending">
            <div className="dot"></div>
            <div>
              <strong>Projects</strong>
              <span>Add at least one project</span>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
