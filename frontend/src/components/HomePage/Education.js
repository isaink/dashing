import React from "react";
import "../../Css/Education.css";
import back_pic from "../../photo_assets/edu_pic.jpg";
import { DropdownService } from "./DropdownService";
import axios from "axios";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import EducationProv_Container from "../../Redux_Containers/EducationProv_Container";
import NavbarProfile from "../NavBars/NavbarProfile";



import { Link } from "react-router-dom";

export const Education = props => {
  const renderEducationProviders = () => {
    if (props.educationProviders) {
      return props.educationProviders.map(eduProv => {
        return (
          <div key={eduProv.id}>
            <Link
              to={`/singleProviderProfile/${eduProv.id}`}
              className="edu_avatar_link"
            >
              <img
                src={eduProv.avatar}
                alt="Person"
                width="200px"
                height="auto"
                className="edu_avatar"
              />
              <span className="edu_info">
                <div id="edu_name">{eduProv.name}</div>
                <div id="edu_location">{eduProv.borough}</div>
              </span>
            </Link>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <>
    <NavbarProfile />
<div className="edu_body"></div>
      <div className="edu_container">
        <div className="edu_information">
          <div id="ed_header">Educational Services</div>

          <div id="ed_writeup">
            Dashing provides educational beauty services right in the comfort of
            your own home! <br /> Our fun and interactive classes are conducted
            by our skilled and licensed beauty professionals.
            <br />
            <br />
          </div>
        </div>
      </div>

      <span className="service_dropdown">
        <DropdownService /><DropdownService /><button className="edu_button">Submit</button>
      </span>

      <div className="provider_pics">{renderEducationProviders()} </div>;

    </>
  );
};
