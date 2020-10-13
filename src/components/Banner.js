import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "./Search";
import Parallax from "react-rellax";
import { useHistory } from "react-router-dom";

function Banner() {
  let [showsearch, setShowSearch] = useState(false);
  let History = useHistory();

  return (
    <Parallax speed={5}>
      <div className="banner">
        <div className="banner_search">
          {showsearch && <Search />}
          <Button
            onClick={() => {
              setShowSearch(!showsearch);
            }}
            className="banner_search_button"
            varient="outlined"
          >
            {showsearch ? "Hide" : "Search Dates"}
          </Button>
        </div>

        <Parallax speed={8}>
          <div className="banner_info">
            <h1>Get out and stretch your imagination</h1>
            <h5>
              Plan a different kind of getaway to uncover the hidden gems near
              you.
            </h5>
            <Button onClick={() => History.push("/search")} variant="outlined">
              Explore NearBy
            </Button>
          </div>
        </Parallax>
      </div>
    </Parallax>
  );
}

export default Banner;
