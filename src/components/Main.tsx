import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  // Rotating skill labels — each is a real thing I do, not a job title
  const skills = [
    "Forecasting models",
    "Scoring engines",
    "Decision frameworks",
    "Pipelines & infrastructure",
    "Behavioural analysis",
  ];

  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState(skills[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentSkill.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentSkill.length) {
      // Pause once fully typed
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      // Switch to next skill
      setIsDeleting(false);
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, skillIndex, skills]);

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

          <p className="hero-tagline">
            Applied data scientist. I build forecasting models, scoring engines,
            and analytical products that ship to real users.
          </p>

          {/* Rotating skill */}
          <p className="hero-typewriter">
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
