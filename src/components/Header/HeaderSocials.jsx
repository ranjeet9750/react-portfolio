import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ranjeet-kumar-8075b218a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/ranjeet9750" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/ranjeet9750/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};
export default HeaderSocials;
