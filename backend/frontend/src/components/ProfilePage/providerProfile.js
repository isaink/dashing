import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./../../Css/profile.css";
import pared from "./../../img/habitacion-pared-salmon.jpg";
import loc from "./../../img/location.png";
import phone from "./../../img/phoneIcon.png";
import email from "./../../img/email.png";
import link from "./../../img/link.png";
import bulletpoint from "./../../photo_assets/bulletpoint.png";
import not_img from "./../../img/notFound.jpg";
import backarrow from "../../img/curved_back_arrow.png";

import NavbarProfile from "../NavBars/NavbarProfile";

const ProviderProfile = props => {
  const goBack = () => {
    props.history.goBack();
  };

  console.log(props.providerInfo, "providerINFO");

  const renderProviderSkillsAndPrices = () => {
    if (props.providerInfo.providerSkills) {
      return (
        <div className="main_ctnr_skills">
          {props.providerInfo.providerSkills.map(skillInfo => {
            return (
              <div className="inner_ctnr_srv">
                <div className="prices">
                  ${skillInfo.price_min} - ${skillInfo.price_max}
                </div>
                <div className="skill_type">{skillInfo.skills}</div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const renderProviderInfo = () => {
    console.log(props.providerInfo);
    if (props.providerInfo) {
      return (
        <div className="ctnr_profile" key={props.providerInfo.user_id}>
          <div className="background_img_Div">
            <img alt="intro_picture" src={pared} className="intro_pic" />
          </div>

          <div className="allBelowBkGndImage">
            <div className="leftAndRightSidesDiv">
              <div className="AvatarAndAllDetailsDiv">
                <div className="avatarProfileBorder">
                  <img
                    src={props.providerInfo.avatar}
                    alt="avatar"
                    className="avatarProfileImage"
                  />
                </div>

                <div className="contactLocationSocialLinkDiv">
                  <div className="rightProviderDetailsDiv">
                    <div className="LocationAndNameDiv">
                      <div className="locDiv">
                        <div className="loc">
                          <h5 className="prov_name">
                            {props.providerInfo.first_name}{" "}
                            {props.providerInfo.last_name}
                          </h5>

                          <div className="prov_boro">
                            <img
                              alt="loc"
                              src={loc}
                              style={{ zIndex: "2", height: "18px" }}
                            />
                            <h6>{props.providerInfo.borough}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="profile_bio">"{props.providerInfo.bio}"</h6>
                    <div className="phoneEmailAndSocialLinkDiv">
                      <img
                        alt="phone"
                        src={phone}
                        style={{ zIndex: "2", width: "18px" }}
                      />
                      <h6>{props.providerInfo.phone_number}</h6>

                      <img
                        alt="email"
                        src={email}
                        style={{ zIndex: "2", width: "18px" }}
                      />
                      <h6>{props.providerInfo.email}</h6>

                      <img
                        alt="email"
                        src={link}
                        style={{ zIndex: "2", width: "18px", gridColumn: 1 }}
                      />
                      <a
                        href="https://www.instagram.com/hairiffic101/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialLink_a_tag"
                      >
                        <h5>{props.providerInfo.website_link}</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="title_srv_sks">SERVICES</h2>
                <h2 className="skill_type  avalibility">
                  {props.providerInfo.availability}
                </h2>
                <hr />
                {renderProviderSkillsAndPrices()}
              </div>

              <div className="rightSideDiv">
                <div className="portfolioDiv">
                  <div className="ctnr_portfolio">
                    {props.providerInfo.portfolio ? (
                      props.providerInfo.portfolio.map(photo => {
                        return (
                          <img
                            className="portfolio_img"
                            src={photo["img"]}
                            alt="not here"
                            style={{ height: "200px" }}
                          />
                        );
                      })
                    ) : (
                      <img
                        alt="intro_picture"
                        src={not_img}
                        style={{
                          objectFit: "cover",
                          height: "250px",
                          transform: "translateY(-20%)",
                          margin: " 25px"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key="1" id="providerInfo">
          Collecting Info ...{" "}
        </div>
      );
    }
  };

  return (
    <div>
      <NavbarProfile />
      {renderProviderInfo()}
    </div>
  );
};

export default withRouter(ProviderProfile);
