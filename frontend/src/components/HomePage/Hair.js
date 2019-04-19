import React from "react";
import "../../Css/provider.css";


import { Dropdown } from "./Dropdown.js";

export const Hair = props => {
  const renderProviders = () => {
    if (props.hairProviders) {
      return props.hairProviders.map(hairP => {
        return (
          <>
            <div className="box_provider" key={hairP.provider_id}>
              <span className="hair_avatar box">
                <img
                  alt="avatar"
                  className="pic_hair content"
                  src={hairP.avatar}
                  style={{ height: "150px" }}
                />
              </span>
              <div className="info_provider">
                {hairP.borough} <br />
                {hairP.email} <br />
                {hairP.phone_number} <br />
                {hairP.website_link}
              </div>
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
  <div className="dropdown">
    <Dropdown />
  </div>
      <div className="providers">{renderProviders()}</div>
    </>
  );
};
