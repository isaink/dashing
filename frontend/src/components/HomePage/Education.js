import React from "react";
import "../../Css/Education.css";
import leftpic from "../../photo_assets/edu_pic.jpg";
import { DropdownService } from "./DropdownService";
import axios from "axios";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";

import { Link } from "react-router-dom";



export const Education = props => {
  const renderEducationProviders = () => {
    if (props.educationProviders) {
      return props.educationProviders.map(eduProv => {
        return (
          <div key={eduProv.id}>
            <Link to={`/singleProviderProfile/${eduProv.id}`}>
              <img src={eduProv.avatar} alt="Person" />
            </Link>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>
    }
  };

  return (
    <>
      <div className="edu_container">
        <div id="left_pic">
          <img src={leftpic} alt="" width="750px" height="auto" />
        </div>

        <div className="rightside">
          <div id="ed_header">Educational Services</div>
          <br />

          <div id="ed_writeup">
            Dashing provides educational beauty services right in the comfort of
            your own home! <br /> Our fun and interactive classes are conducted
            by our skilled and licensed beauty professionals.
            <br />
            <br />
          </div>

          <div className="skillsDropdown">
            <DropdownService /></div>
            <div>{renderEducationProviders()} </div>

        </div>
      </div>
    </>
  );
};
