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
          <Link to={`/singleProviderProfile/${eduProv.id}`} className="linkto">
            <div className="profile_box" key={eduProv.id}>
              <img
                src={eduProv.avatar}
                alt="Person"
                width="200px"
                height="auto"
                className="edu_avatar"
              />
              <div className="edu_info">
                <div id="edu_name">
                  {eduProv.first_name} <br/>{eduProv.last_name}
                </div><br />
                <div id="edu_location">{eduProv.borough}</div><br />

                <div id="edu_avail"> Hours: {eduProv.availability}</div>
              </div>
            </div>
          </Link>
        );
      });
    } else {
      return <div> Loading...</div>;
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
              Dashing provides 1:1 educational beauty services in the
              convenience of your own home! <br /> Our fun and interactive
              classes are conducted by our skilled and licensed beauty
              professionals.
              <br />
              <br />
            </div>
          </div>
        </div>

        <span>
          <form
            className="edu_service_search"
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
            <button className="edu_button">SUBMIT</button>
          </form>

          <div className="provider_pics">
            {this.renderEducationProviders()}{" "}
          </div>
        </span>
      </>
    );
  }
}

export default Education;
