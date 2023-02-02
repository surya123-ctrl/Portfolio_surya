import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo" target="_self" rel="noreferrer">
        Surya Singh SS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/surya-pratap-singh-5378ba1b7/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/Surya67102135"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.facebook.com/surya.singhtomar.75491"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/i_mr_singh20/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://t.me/Surya_20BCS4886" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a
          href="https://leetcode.com/Suryapratapsingh123/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/suryatomar303/practice/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://github.com/surya123-ctrl"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Surya Singh. All rights are reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
