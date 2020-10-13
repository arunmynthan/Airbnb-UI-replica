import { Button } from "@material-ui/core";
import React from "react";
import "./Searchpage.css";
import Searchresults from "./Searchresults";

function Searchpage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays. 26 August to 30 August . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined"> Cancellation</Button>
        <Button variant="outlined">Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <Searchresults
        img={
          "https://a0.muscache.com/im/pictures/baed5ef4-58b1-41d8-9cf9-beaf1aec11f6.jpg?im_w=720"
        }
        location={"Condo in center of  Toronto"}
        title={"Toronto Luxury Cobdo"}
        description="4 guest . 4 bedroom . 4 Beds . 2 Bathrooms . Free Parking . Washing Machine"
        star={4.5}
        price="$55/night"
        total="$207 night"
      />
      <Searchresults
        img={
          "https://a0.muscache.com/im/pictures/f0cea0cc-1e7a-443c-afa0-5437203ab813.jpg?im_w=720"
        }
        location={"Toronto Condo in Entertainment District"}
        title={"Toronto Luxury Condo"}
        description="2 guest . 3 bedroom . 1 Bed . 2 Bathrooms . Free Parking . Wifi . Washing Machine"
        star={4.8}
        price="$40/night"
        total="$90 night"
      />
      <Searchresults
        img={
          "https://a0.muscache.com/im/pictures/e907d8f9-9e29-491e-ba3a-9362e5be4109.jpg?im_w=720"
        }
        location={"Condo in Downtown"}
        title={"Toronto Condo"}
        description="3 guest . 3 bedroom . 3 Beds . 2 Bathrooms . Paid Parking . Washing Machine"
        star={3.8}
        price="$55/night"
        total="$207 night"
      />
      <Searchresults
        img={
          "https://a0.muscache.com/im/pictures/737dd56b-d98b-4517-8038-406414fa9f95.jpg?im_w=720"
        }
        location={"Private room in center of  Toronto"}
        title={"Toronto Studio Apartments"}
        description="4 guest . 4 bedroom . 4 Beds . 2 Bathrooms . Free Parking . Washing Machine"
        star={4.2}
        price="$89/night"
        total="$256 night"
      />
      <Searchresults
        img={
          "https://a0.muscache.com/im/pictures/dc71ed9b-aba1-4091-a7fd-6e96daceeaa6.jpg?im_w=720"
        }
        location={"Private room in center of  Toronto"}
        title={"Toronto Studio Apartments"}
        description="2 guest . 1 bedroom . 1 Beds . 1 Bathrooms . Free Parking . TV . Wifi"
        star={4.1}
        price="$65/night"
        total="$190 night"
      />
    </div>
  );
}

export default Searchpage;
