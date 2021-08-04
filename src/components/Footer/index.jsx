import "./index.scss";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Pincette1223/portfolio"
      >
        <p className="footer-contents">
          <span className="icon">&copy; 2021</span> Pincette1223/portfolio
        </p>
      </a>
    </div>
  );
};

export default Footer;
