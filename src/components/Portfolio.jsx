import React from "react";
import "./Portfolio.css";
import PortfolioBlock from "./PortfolioBlock";
const data = [
  {
    id: 1,
    image: "https://i.imgur.com/wKsDdMc.jpg",
    title: "Tasty Bites",
    github_link: "https://github.com/surya123-ctrl/Tasty_bites",
    live_demo_link:
      "https://tasty-bites-food-delivery-git-main-surya123-ctrl.vercel.app/",
  },
  {
    id: 2,
    image: "https://i.imgur.com/NTpOElb.jpg",
    title: "Bunk4Study",
    github_link: "https://github.com/surya123-ctrl/Bunk4Study-Extension",
    live_demo_link: "https://bunk4study.netlify.app/",
  },
  {
    id: 3,
    image: "https://i.imgur.com/ratDKWy.jpg",
    title: "Surya Singh - Portfolio",
    github_link: "https://github.com/surya123-ctrl/Portfolio_surya",
    live_demo_link: "https://suryasinghss-bd90c.web.app/",
  },
  {
    id: 4,
    image: "https://i.imgur.com/CPtwDJM.jpg",
    title: "Weather-Web",
    github_link: "https://github.com/surya123-ctrl/weather_web_app",
    live_demo_link: "https://main--frabjous-pothos-aaac9c.netlify.app/",
  },
  {
    id: 5,
    image: "https://i.imgur.com/HfOkvXM.jpg",
    title: "Compensation Management System",
    github_link: "https://github.com/surya123-ctrl/cms-frontend",
    live_demo_link: "",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Works.</h5>
      <h2>Perfect solution for digital experience.</h2>
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
