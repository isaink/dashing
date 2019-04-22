import React from "react";
import "./../../Css/porfolio.css";
import { withRouter } from "react-router-dom";

export const ProviderProfile = props => {
  const renderProviderInfo = () => {

    console.log("provider info", props.providerInfo);
    if (props.providerInfo) {
      return (
        <div key={props.providerInfo.provider_id} className="providerInfo">
          <div className="provider_avatar">
            <img src={props.providerInfo.avatar} alt="" />

          </div>
          <div className="contact_info">
            <div className="provider_name">
              <h2>Provider: {props.providerInfo.providername}</h2>
            </div>
            <div className="provider_email">
              <p>Email:{props.providerInfo.email}</p>
            </div>
            <div className="provider_num">
              <p>Phone number:{props.providerInfo.phone_number}</p>
            </div>
            <div className="provider_email">
              <p>Email: {props.providerInfo.email}</p>
            </div>
          </div>
        </div>
      );
    } else {

      return <div id="providerInfo">Collecting Info ... </div>;

    }
  };

  const renderProviderSkills = () => {
    // console.log("skills section:", props.providerInfo.services);

    // let skills = props.providerInfo.services.map((skill, i)=>{
    //   return(
    //     <div>
    //       <p key={i}>{skill}</p>
    //     </div>
    //   )
    // })

    if (props.providerInfo) {
      return <div className="providerSkills" />;
    }
  };
  return (
    <>
      <h1>Provider Information</h1>

      <div className="render_info">{renderProviderInfo()}</div>
      <div className="render_skills">{renderProviderSkills()}</div>

    </>
  );
};
