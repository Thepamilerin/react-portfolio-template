import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/Thepamilerin"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/thekhalifabanji/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p>
        A portfolio built by Khalifa Banji with 💜
      </p>
    </footer>
  );
}

export default Footer;
