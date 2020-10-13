import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "./Searchresults.css";

function Searchresults({
  img,
  title,
  description,
  star,
  price,
  total,
  location,
}) {
  return (
    <div className="searchResult">
      <img src={img} />
      <FavoriteBorderIcon className="searchResult_heart" />
      <div className="searchResult_info">
        <div className="info_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="info_bottom">
          <StarIcon className="searchResult_star" />
          <p className="searchResult_stars">
            <strong>{star}</strong>
          </p>
          <div className="searchResults_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchresults;
