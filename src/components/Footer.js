import { Copyright } from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="credit">
        <Copyright style={{ height: "0.9rem" }} />
        {new Date().getFullYear()} | Airbnb Demo | No Copyrights
      </p>
      <p className="developer">This Clone was Developed by: Arun K</p>
    </div>
  );
}

export default Footer;
