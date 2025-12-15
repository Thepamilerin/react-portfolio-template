import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  const fixedPrefix = "Data ";
  const roles = ["Analyst", "Scientist"];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 120);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      // Switch role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://raw.githubusercontent.com/Thepamilerin/personal-assets/main/avatar.jpg"
            alt="Khalifa Banji"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Thepamilerin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thekhalifabanji/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Khalifa Banji</h1>

          {/* Typewriter Role */}
          <p style={{ whiteSpace: "nowrap" }}>
            {fixedPrefix}
            <span>{displayText}</span>
            <span className="cursor">|</span>
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Thepamilerin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thekhalifabanji/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
