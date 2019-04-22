import React from "react";
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const boro = [
  { label: "Brooklyn", value: 1 },
  { label: "Bronx", value: 2 },
  { label: "New York", value: 3 },
  { label: "Queens", value: 4 },
  { label: "Staten Island", value: 5 },
];

export const Dropdown = props => {
  const renderLocations = () => {
    if (props.location) {
      return props.location.map(location => {
        return <option>location.borough</option>;
      });
    }
  };

  const handleBoroChange = event => {
    let borough = event.target.value
    props.fetchProBySvcAndBoro(borough)
  };

  return (
    <>
    <div className='selector' style={{width:'200px'}}>
    {/* <select onChange={handleBoroChange}>
        <option />
        <option value="Brooklyn">Brooklyn</option>
        <option value="Bronx">Bronx</option>
        <option value="New York">Manhattan</option>
        <option value="Queens">Queens</option>
        <option value="Staten Island">Staten Island</option>
      </select> */}
      <Select options={ boro } onChange={handleBoroChange}  />
    </div>
    {renderLocations()}
    </>
  );
};
