import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Page } from "../components/Page";
import { useAuth } from "../context/AuthContext";

export function Profile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editName, setEditName] = React.useState(user?.name || "");
  const [editBranch, setEditBranch] = React.useState(user?.branch || "");

  React.useEffect(() => {
    setEditName(user?.name || "");
    setEditBranch(user?.branch || "");
  }, [user]);

  const displayName = user?.name || "Student";
  const displayRoleOrBranch =
    user?.role === "student"
      ? (user?.branch || "B.Tech Information Technology • Semester 7")
      : user?.role === "recruiter"
      ? "Corporate Recruiter"
      : user?.role === "tpo"
      ? "Placement Officer"
      : "Student";
  const displayEmail = user?.email || "student@placement.edu";
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "ST";

  const handleSave = () => {
    if (updateUser && editName.trim()) {
      updateUser({
        name: editName.trim(),
        branch: editBranch.trim() || undefined,
      });
    }
    setIsEditing(false);
  };

  return (
    <Page title="My Profile" sub="Maintain accurate information so recruiters can understand your profile.">
      <div className="profile-grid">
        <section className="panel profile-main">
          <div className="profile-banner"></div>
          <div className="profile-head">
            <div className="avatar xl">{initials}</div>
            {isEditing ? (
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Full Name"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "6px 10px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    borderRadius: 6,
                    border: "1px solid #CBD5E1",
                    marginBottom: 6,
                  }}
                />
                <input
                  type="text"
                  value={editBranch}
                  onChange={(e) => setEditBranch(e.target.value)}
                  placeholder="Branch / Major (e.g. B.Tech IT • Sem 7)"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "4px 8px",
                    fontSize: "0.85rem",
                    borderRadius: 6,
                    border: "1px solid #CBD5E1",
                  }}
                />
              </div>
            ) : (
              <div>
                <h2>{displayName}</h2>
                <p>{displayRoleOrBranch}</p>
                <span>{displayEmail}</span>
              </div>
            )}
            {isEditing ? (
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  style={{ background: "#2563EB", border: "none", borderRadius: 6, padding: "5px 12px" }}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-light"
                  style={{ borderRadius: 6, padding: "5px 10px" }}
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="secondary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
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
