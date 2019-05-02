import React from "react";
import "../../Css/Education.css";

export const DropdownService = props => {
  return (
    <>
      <div>
        <select
          className="selector"
<<<<<<< HEAD
          onChange={handleServiceChange}
=======
          onChange={props.handleServiceChange}
          value={props.service_id}

>>>>>>> d69800ca31aae195be461311d7286a5e05026b7a
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
