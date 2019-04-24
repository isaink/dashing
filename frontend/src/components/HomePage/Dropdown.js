import React from "react";

import "../../Css/Dropdown.css";

export const Dropdown = props => {
  const renderLocations = () => {
    if (props.location) {
      return props.location.map(location => {
        return <option>location.borough</option>;
      });
    }
  };

  const handleBoroChange = event => {
    let borough = event.target.value;
    props.fetchProBySvcAndBoro(borough);
  };

  return (
    <>
      <div className="dropdown-select">
        <select onChange={handleBoroChange}>
          <option value="0">Select Location</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="New York">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>
    </>
  );
};
