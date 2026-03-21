import React from "react";
import { Link as ScrollLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <p className="copy-text">
            Lidet &copy; {new Date().getFullYear()} All Rights Reserved
          </p>

          <p className="disclaimer">
            Disclaimer: The Netflix streaming demo, Amazon e-commerce demo, and
            Evangadi forum demo are personal educational projects created for
            demonstration purposes only. They are not affiliated with, endorsed
            by, or connected to Netflix, Amazon, or Evangadi. All trademarks and
            brand names belong to their respective owners.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <ul className="list-inline footer-menu">
          <li>
            <ScrollLink to="about" smooth duration={700}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="resume" smooth duration={700}>
              Resume
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth duration={700}>
              Skill
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth duration={700}>
              Service
            </ScrollLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
