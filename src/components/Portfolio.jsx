import React from "react";
import img1 from "../assets/portfolio1.jpg";
// import img2 from "../assets/portfolio2.jpg";
// import img3 from "../assets/portfolio3.jpg";
// import img4 from "../assets/portfolio4.jpg";
// import img5 from "../assets/portfolio5.png";
// import img6 from "../assets/portfolio6.jpg";
import "./Portfolio.css";
import PortfolioBlock from "./PortfolioBlock";
const data = [
  {
    id: 1,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
  {
    id: 2,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
  {
    id: 3,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
  {
    id: 4,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
  {
    id: 5,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
  {
    id: 6,
    image: img1,
    title: "xyz",
    github_link: "https://github.com/surya123-ctrl",
    live_demo_link: "https://github.com/surya123-ctrl",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github_link, live_demo_link }) => {
          return (
            <PortfolioBlock
              id={id}
              image={image}
              title={title}
              github_link={github_link}
              live_demo_link={live_demo_link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
