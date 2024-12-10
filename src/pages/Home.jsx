import React from "react";
import "../styles/Home.css";
import envelope from "../Images/envelope.svg";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Portfolio from "../components/Portfolio";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <div className="home" id="home">
      {/* Section 1 */}
      <div className="intro">
        <div className="opening">
          <h2> Hi, We are Clear Tech Cleaning</h2>
        </div>
        <div className="prompt">
          <p>
            We specalize in providing expert cleaning services for Office
            equipment and technology.
          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="section about" id="about">
        <AboutUs id="about" />
      </div>
      {/* Section 3 */}
      <div className="section services" id="services">
        <h1 className="sub-title">Services</h1>
        <Services />
      </div>
      {/* Section 4 */}
      {/* <div className="section portfolio" id="portfolio">
        <h1 className="sub-title">Some of Our Work</h1>
        <Portfolio />
      </div> */}
      {/* Section 5 */}
      <div className="section contact" id="contact">
        <h1 className="sub-title">Contact Us</h1>
        <p className="number">Phone: 647-571-4188</p>
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;

{
  /* <svg
                class="bi text-body-secondary flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em"
              >
                <use xlink:href="#calendar3"></use>
              </svg> */
}
