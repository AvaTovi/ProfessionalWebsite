import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://github.com/AvaTovi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub className="icon-large" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ava-tovi-9774131b9"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin className="icon-large" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
