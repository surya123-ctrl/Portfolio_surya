import React from "react";
// import myImage from "../assets/programmer.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";
// import { MdVisibility } from "react-icons/md";
import "./About.css";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={myImage} alt="myImage" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              Icons={FaAward}
              heading="Experience"
              subHeading1="1"
              subHeading2="+ Years Of Working"
            />
            <AboutCard
              Icons={FiUsers}
              heading="Clients"
              subHeading1="50"
              subHeading2="+ Clients"
            />
            <AboutCard
              Icons={VscNewFolder}
              heading="Projects"
              subHeading1="10"
              subHeading2="+ Completed"
            />
            {/* <AboutCard
              Icons={MdVisibility}
              heading="Page Viewers"
              subHeading1="127"
              subHeading2=""
            /> */}
          </div>
          <p>
            {/* Hey! Myself <b>Surya Pratap Singh</b>. I am a Computer Science
            Student of <b>Chandigarh University</b>. I am developing skills of
            Web Development and Designing. I have also done<b> 300+ </b>
            questions on <b>LeetCode</b> and <b>150+ </b>
            questions on <b>GeeksForGeeks</b> based on
            <b> Data Structures and Algorithms</b>. */}
            Hello! I'm Surya Pratap Singh, born in Lucknow, Uttar Pradesh.
            Currently pursuing my Engineering in Computer Science from
            Chandigarh University. I'm open for work and designing website. If
            you want to get appraisal from international clients or Senior head,
            you can rely on me.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
