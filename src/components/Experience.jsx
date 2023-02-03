import React from "react";
import "./Experience.css";
import ExperienceData from "./ExperienceData";
const data_frontEnd = [
  {
    id: 1,
    heading: "HTML",
    subHeading: "Experienced",
  },
  {
    id: 2,
    heading: "CSS",
    subHeading: "Intermediate",
  },
  {
    id: 3,
    heading: "Java Script",
    subHeading: "Intermediate",
  },
  {
    id: 4,
    heading: "React.Js",
    subHeading: "Experienced",
  },
  {
    id: 5,
    heading: "Vue.js",
    subHeading: "Beginner",
  },
  {
    id: 6,
    heading: "SCSS",
    subHeading: "Experienced",
  },
];
const data_backEnd = [
  {
    id: 1,
    heading: "Node.js",
    subHeading: "Beginner",
  },
  {
    id: 2,
    heading: "My SQL",
    subHeading: "Intermediate",
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {data_frontEnd.map(({ id, heading, subHeading }) => {
              return (
                <ExperienceData
                  id={id}
                  heading={heading}
                  subHeading={subHeading}
                />
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {data_backEnd.map(({ id, heading, subHeading }) => {
              return (
                <ExperienceData
                  id={id}
                  heading={heading}
                  subHeading={subHeading}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
