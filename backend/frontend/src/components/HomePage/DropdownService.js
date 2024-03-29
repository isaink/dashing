import React from "react";
import "../../Css/Education.css";

export const DropdownService = props => {
  return (
    <>
      <div>
        <select
          className="svc_selector"
          onChange={props.handleServiceChange}
          value={props.service_id}


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
