import React from "react";
import "../../Css/provider.css";

import { Dropdown } from "./Dropdown.js";

export const Hair = props => {
  const renderProviders = () => {
    if (props.hairProviders) {
      return props.hairProviders.map(hairP => {
        return (
          <>
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
        <Dropdown />
      </span>

      <div className="providers">{renderProviders()}</div>
    </>
  );
};
