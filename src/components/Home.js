import React from "react";

import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section1">
        <Card
          src={
            "https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=720"
          }
          title={"Online Experiences"}
          description={
            "Unique activites we can do together, led by a world of hosts"
          }
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          }
          title={"Unique Stays"}
          description={"Spaces that are more then just a place to sleep"}
        />

        <Card
          src={
            "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          }
          title={"Entire Homes"}
          description={
            "Comfortable private places, with room for friends or family"
          }
        />
      </div>
      <div className="home_section2">
        <Card
          src={"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"}
          title={"3 Bedroom Flat in Bournemouth"}
          description={
            "Superhost with a stunning view of the beachside in Sunny Bournemouth"
          }
          price={"$150/night"}
        />
        <Card
          src={require("../images/swag.jpg")}
          title={"Penthouse in London"}
          description={
            "Enjoy the amazing sight of London with this stunning penthouse"
          }
          price={"$350/night"}
        />
        <Card
          src={"https://media.nomadicmatt.com/2018/apartment.jpg"}
          title={"1 Bedroom apartment"}
          description={
            "Superhost with great amentities and a fabolous shopping strip nearby"
          }
          price={"$85/night"}
        />
      </div>
    </div>
  );
}

export default Home;
