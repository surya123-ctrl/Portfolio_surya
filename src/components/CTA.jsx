import React from "react";
import Resume from "../assets/Resume_20BCS4886.pdf";
function CTA() {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}

export default CTA;
