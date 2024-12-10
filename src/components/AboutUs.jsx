import React from "react";
import "../styles/AboutUs.css"; // External CSS for styling

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At <strong>Clear Tech Cleaning</strong>, we specialize in
              providing top-notch cleaning services for your office devices.
              Whether it's keyboards, mice, monitors, desk phones, smartphones,
              printers, scanners, or shared equipment like copiers and
              conference phones, we ensure your technology is thoroughly cleaned
              and sanitized, maintaining both performance and longevity.
            </p>
            <p>
              With years of experience, our team uses cutting-edge tools and
              environmentally friendly solutions to deliver the highest standard
              of cleaning. We take pride in our commitment to customer
              satisfaction and our ability to adapt to the unique needs of each
              client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
