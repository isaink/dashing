import React from "react";
import { withRouter, Link } from "react-router-dom"
import "../../Css/provider.css";

import { Dropdown } from "./Dropdown.js";

const Hair = props => {
  const renderProviders = () => {
    if (props.hairProviders) {
      return props.hairProviders.map(hairP => {
      
        return (
          <>
          <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
            <div className="hair_avatar box">
              <img
                alt="avatar"
                className="pic_hair content"
                src={hairP.avatar}
                style={{ height: "150px" }}
              />
            <span id="providername">{hairP.provider}</span><br/>
              {hairP.borough} <br />
              {hairP.email} <br />
              {hairP.phone_number} <br />
              {hairP.website_link}
            </div>
          </Link>
          </>
        );
      });
    } else {
      return (
        <div className="lds-heart">
          <div />
        </div>
      );
    }
  };
  return (


    <>
      <div className="hair_title">Hair</div>
      <span className="dropdown">
        <h1>Select Your Location</h1>
        <Dropdown fetchProBySvcAndBoro={props.fetchProBySvcAndBoro} />
      </span>

      <div className="providers">{renderProviders()}</div>
    </>
  );
};

export default withRouter(Hair)
