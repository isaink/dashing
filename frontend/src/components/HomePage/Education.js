import React from "react";
import "../../Css/Education.css";
import back_pic from "../../photo_assets/edu_pic.jpg";
import { DropdownService } from "./DropdownService";
import axios from "axios";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import EducationProv_Container from "../../Redux_Containers/EducationProv_Container";
import NavbarProfile from "../NavBars/NavbarProfile";
import { ProviderSearch } from "./ProviderSearch";

import { Link } from "react-router-dom";

class Education extends React.Component {
  state = {
    name: "",
    service_id: ""
  };

  handleServiceChange = event => {
    this.setState({ service_id: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEducationSubmit = event => {

    let name = this.state.name;
    let service_id = this.state.service_id;
    event.preventDefault();
    this.props.getEducationProviders(name, service_id);
  };

  renderEducationProviders = () => {
    if (this.props.educationProviders) {
      return this.props.educationProviders.map(eduProv => {
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
  render() {
    return (
      <>
        <NavbarProfile />
        <div className="edu_body" />
        <div className="edu_container">
          <div className="edu_information">
            <div id="ed_header">Educational Services</div>

            <div id="ed_writeup">
              Dashing provides educational beauty services right in the comfort
              of your own home! <br /> Our fun and interactive classes are
              conducted by our skilled and licensed beauty professionals.
              <br />
              <br />
            </div>
          </div>
        </div>
        <form
          className="service_dropdown"
          onSubmit={this.handleEducationSubmit}
        >
          <DropdownService
            handleServiceChange={this.handleServiceChange}
            service_id={this.state.service_id}
          />
          <div className="providerSearch">
            <ProviderSearch
              handleNameChange={this.handleNameChange}
              name={this.state.name}
            />
          </div>
          <button className="edu_button">Submit</button>
        </form>
        <div className="provider_pics">{this.renderEducationProviders()} </div>
      </>
    );
  }
}

export default Education;
