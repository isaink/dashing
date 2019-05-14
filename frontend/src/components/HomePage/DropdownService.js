import React from "react";
import "../../Css/Education.css";
import { register } from "../../serviceWorker";

export const DropdownService = props => {
  return (
    <>
      <div>
        <select
          className="selector"
          onChange={props.handleServiceChange}
          value={props.service_id}

          style={{ width: "300px", height: "50px" }}
          name="select-profession"
          id="select-profession"
        >
          <option value=""> Select A Service </option>
          <option value="1">Hair</option>
          <option value="2">Nails</option>
          <option value="3">Barber</option>
          <option value="4">Makeup</option>
        </select>
      </div>
    </>
  );
};
