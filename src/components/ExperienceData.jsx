import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ExperienceData = ({ id, heading, subHeading }) => {
  return (
    <article key={id} className="experience__details">
      <BsFillPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{heading}</h4>
        <small className="text-light">{subHeading}</small>
      </div>
    </article>
  );
};

export default ExperienceData;
