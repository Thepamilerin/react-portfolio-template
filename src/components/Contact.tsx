import React from "react";
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>

          <p>
            If you’d like to discuss data science, machine learning, or analytics work,
            feel free to reach out. I’m always open to conversations and collaboration.
          </p>

          <div className="contact-buttons">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:thekhalifabanji@gmail.com"
            >
              Email
            </Button>

            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/thekhalifabanji/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/Thepamilerin"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
