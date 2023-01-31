import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
function HeaderSocialMedia() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/surya-pratap-singh-5378ba1b7/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/surya123-ctrl"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://leetcode.com/Suryapratapsingh123/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode />
      </a>
      <a
        href="https://practice.geeksforgeeks.org/home/"
        target="_blank"
        rel="noreferrer"
      >
        <SiGeeksforgeeks />
      </a>
    </div>
  );
}

export default HeaderSocialMedia;
