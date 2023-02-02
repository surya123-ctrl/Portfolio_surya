import React from "react";

const PortfolioBlock = ({ id, image, title, github_link, live_demo_link }) => {
  return (
    <article key={id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github_link} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={live_demo_link}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioBlock;
