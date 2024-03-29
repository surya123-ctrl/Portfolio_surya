import React from "react";
import CTA from "./CTA";
// import myImage from "../assets/me.png";
import HeaderSocialMedia from "./HeaderSocialMedia";
import "./Header.css";
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Surya Pratap Singh</h1>
        <hr
          style={{
            color: "#fff",
            backgroundColor: "#fff",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <h3>Frontend Web Developer , Designer & Programmer</h3>
        <CTA />
        <HeaderSocialMedia />
        {/* <div className="myImage">
          <img src={myImage} alt="myImage" />
        </div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
