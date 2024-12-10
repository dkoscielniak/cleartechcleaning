import React from "react";
import "../styles/Services.css"; // Importing CSS for styling

const servicesData = [
  {
    title: "Keyboards",
    description:
      "Uses dusting, wiping, deep cleaning, and blue light disinfection to remove dirt, germs, and allergens, ensuring a cleaner, healthier, and more efficient typing experience.",
    icon: "⌨️",
  },
  {
    title: "Computer Mouse",
    description:
      "Thoroughly wipes down the surface, cleans the sensor for optimal tracking performance, and ensures the roller or trackball is free of dust and debris, giving you a smoother, more responsive experience every time you click and scroll.",
    icon: "🖱️",
  },
  {
    title: "Monitors and Screens",
    description:
      "Use a gentle cleaning solution to remove dust and smudges, while carefully cleaning the edges and bezel, ensuring a clear, streak-free display.",
    icon: "🖥️",
  },
  {
    title: "Phones",
    description:
      "Uses a cleaning solution, microfiber cloth, and alcohol to remove dirt and disinfect high-touch areas, ensuring your devices are clean and sanitized.",
    icon: "📱",
  },
  {
    title: "Printers/Scanners",
    description:
      "Cleans the exterior with a gentle solution and microfiber cloth, while also providing a deep clean of interior areas like paper trays and ink/toner compartments, ensuring your devices run smoothly and efficiently.",
    icon: "🖨️",
  },
  {
    title: "Shared Devices",
    description:
      "Uses alcohol and cloths to thoroughly disinfect high-touch areas of copiers and conference phones, ensuring a hygienic and efficient environment for all users.",
    icon: "📠",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
