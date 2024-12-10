import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <Button component={Link} to="/some-route" color="primary">
          MyButton
        </Button> */}
        {/* <EmailIcon component={Link} to="/google.com" />
        <InstagramIcon />
        <FacebookIcon />
        <XIcon /> */}
      </div>
      <p>&copy; 2024 Clear Tech Cleaning</p>
    </div>
  );
}

export default Footer;
