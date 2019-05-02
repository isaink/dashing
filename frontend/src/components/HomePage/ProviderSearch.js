import React, { Component } from "react";
import Education from "./Education";

import "../../Css/Education.css";

export const ProviderSearch = props => {
  return(

    <>
    <input
    placeholder="Search For Stylist By Name"
    onChange={props.handleNameChange}
    value={props.name}
    className="edu_searchBar"/>
    </>
  )

};
