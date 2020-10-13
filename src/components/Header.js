import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  let History = useHistory();
  return (
    <header className="main_header">
      <Link to="./">
        <img
          className="logo"
          src={require("../images/airbnb-logo.png")}
          alt=""
        />
      </Link>

      <div className="header_center">
        <input
          type="text"
          placeholder="Start your search"
          onClick={() => {
            History.push("/search");
          }}
        />
        <SearchIcon
          style={{ color: "#ff7779" }}
          onClick={() => {
            History.push("/search");
          }}
        />
      </div>

      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </header>
  );
}

export default Header;
