import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"></a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testinomials">Testinomials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ranjeet-kumar-8075b218a/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/Ranjeet62891757">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&Copy;Ranjeet Kumar. All Rights Reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
