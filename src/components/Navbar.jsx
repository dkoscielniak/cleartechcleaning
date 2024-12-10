import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-scroll";

export default function Navbar() {
  const [OpenNavbar, setOpenNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenNavbar(false);
  }, [location]);

  return (
    <div
      style={{ position: "sticky" }}
      className="navbar"
      id={OpenNavbar ? "open" : "close"}
    >
      <div className="toggle">
        <button
          onClick={() => {
            setOpenNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link
          className="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Home
        </Link>
        <Link
          className="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          About
        </Link>
        <Link
          className="active"
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Services
        </Link>
        {/* <Link
          className="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Portfolio
        </Link> */}
        <Link
          className="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
