import React from "react";
import './../../Css/Dropdown.css';

export const Dropdown = props => {
  const handleBoroChange = event => {
    let borough = event.target.value;
    props.fetchProBySvcAndBoro(borough);
  };

  return (
    <>
      <div>
        <select
          className="selector"
          onChange={handleBoroChange}
          style={{ width: "300px", height: "50px" }}
          name="select-profession"
          id="select-profession"
        >
          <option value=""> Select Your Location </option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="New York">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>
      <hr />
    </>
  );
};
