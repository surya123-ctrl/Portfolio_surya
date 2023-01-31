/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import "./Navbar.css";
const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNavLink("#")}
        className={activeNavLink === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNavLink("#about")}
        className={activeNavLink === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNavLink("#experience")}
        className={activeNavLink === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNavLink("#portfolio")}
        className={activeNavLink === "#portfolio" ? "active" : ""}
      >
        <ImProfile />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNavLink("#contact")}
        className={activeNavLink === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Navbar;
