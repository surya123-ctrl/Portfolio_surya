import React from "react";

const ContactOption = ({
  id,
  Icons,
  heading1,
  heading2,
  sendLink,
  anchorText,
}) => {
  return (
    <article key={id} className="contact__option">
      {<Icons className="contact__option-icon" />}
      <h4>{heading1}</h4>
      <h5>{heading2}</h5>
      <a href={sendLink} target="_blank" rel="noreferrer">
        {anchorText}
      </a>
    </article>
  );
};
export default ContactOption;
