import React from "react";
import "../styles/Portfolio.css"; // External CSS for styling
import Office from "../Images/Office-Cleaning.jpg";
import Auto from "../Images/auto-detailing.jpeg";
import Industrial from "../Images/industrial.jpeg";

const projects = [
  {
    id: 1,
    image: Office, // Replace with actual image paths
    title: "Office Equipment Cleaning",
    description:
      "We cleaned and sanitized office electronics for a large corporation.",
  },
  {
    id: 2,
    image: Auto,
    title: "Auto Equipment Cleaning",
    description:
      "We performed a detailed cleaning of sensitive Automobile equipment.",
  },
  {
    id: 3,
    image: Industrial,
    title: "Industrial Machinery Cleaning",
    description:
      "Thorough cleaning and maintenance of heavy industrial machinery.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
              />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
