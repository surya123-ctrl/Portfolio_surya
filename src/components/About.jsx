import React from "react";
import myImage from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";
import { MdVisibility } from "react-icons/md";
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
            <img src={myImage} alt="myImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              Icons={FaAward}
              heading="Experience"
              subHeading1="3"
              subHeading2="+ Years Of Working"
            />
            <AboutCard
              Icons={FiUsers}
              heading="Clients"
              subHeading1="200"
              subHeading2="+ Clients"
            />
            <AboutCard
              Icons={VscNewFolder}
              heading="Projects"
              subHeading1="10"
              subHeading2="+ Completed"
            />
            <AboutCard
              Icons={MdVisibility}
              heading="Page Viewers"
              subHeading1="127"
              subHeading2=""
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quas debitis rem quae ad nemo unde ipsum sapiente. Vitae ut sequi
            quasi accusamus necessitatibus! Sint, earum assumenda? Voluptate
            dolorem voluptatem, temporibus inventore ut architecto minus
            expedita autem sed doloremque, consequatur ipsum, amet odio sit
            eius? Nobis ea non praesentium laboriosam?
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
