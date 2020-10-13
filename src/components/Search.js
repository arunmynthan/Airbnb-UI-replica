import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Search() {
  let [startdate, setStartdate] = useState(new Date());
  let [enddate, setEnddate] = useState(new Date());
  let selectionRange = {
    startDate: startdate,
    endDate: enddate,
    key: "selecion",
  };

  function handleSelect(ranges) {
    setStartdate(ranges.selection.startDate);
    setEnddate(ranges.selection.endDate);
  }
  let History = useHistory();
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div class="guest">
        <h2>
          Number of Guests
          <PeopleIcon />
        </h2>
      </div>

      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => History.push("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
