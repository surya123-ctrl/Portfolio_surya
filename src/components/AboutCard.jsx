import React from "react";
import CountUp from "react-countup";
const AboutCard = ({ Icons, heading, subHeading1, subHeading2 }) => {
  return (
    <article className="about__card">
      <Icons className="about__icon" />
      <h5>{heading}</h5>
      <small>
        <CountUp end={subHeading1} duration={5} style={{ color: "white" }} />
        {subHeading2}
      </small>
    </article>
  );
};

export default AboutCard;
