import React from "react";

export const DropdownService = props => {
  const handleServiceChange = event => {
    let services = event.target.value;
    props.fetchAllServices(services);
  };

  return (
    <>
      <div>
        <select
          classname="selector"
          onChange={handleServiceChange}
          style={{ width: "300px", height: "50px" }}
          name="select-profession"
          id="select-profession"
        >
          <option value=""> Select A Service </option>
          <option value="Hair">Hair</option>
          <option value="Nails">Nails</option>
          <option value="Barber">Barber</option>
          <option value="Makeup">Makeup</option>
        </select>
      </div>
    </>
  );
};
