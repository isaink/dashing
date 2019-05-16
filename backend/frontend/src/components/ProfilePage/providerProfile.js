import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./../../Css/profile.css";
import pared from "./../../img/habitacion-pared-salmon.jpg";
import loc from "./../../img/location.png";
import phone from "./../../img/phoneIcon.png"
import email from "./../../img/email.png"
import link from "./../../img/link.png"
import bulletpoint from "./../../photo_assets/bulletpoint.png";
import not_img from "./../../img/notFound.jpg";
import backarrow from "../../img/curved_back_arrow.png";

import NavbarProfile from "../NavBars/NavbarProfile";

const ProviderProfile = props => {
  const goBack = () => {
    props.history.goBack();
  };
  console.log(props.providerInfo, 'providerINFO')
  const renderProviderInfo = () => {
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

                        <div className="prov_info">
                        
                      </div>
                      <h5 className="prov_name">
                          {props.providerInfo.first_name}{" "} {props.providerInfo.last_name}
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
                          href="https://www.instagram.com/krystamariehair/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="socialLink_a_tag"
                        >
                           
                          <h5 >{props.providerInfo.website_link}</h5>
                        </a>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>


              <div className="centerDiv">
              
                 <div className="ctnr_services">
                 
                          {props.providerInfo.services &&
                            props.providerInfo.services.map(service => {
                              let skills = service.skills.map(skill => {
                                return (
                                  <>

                                  </>
                              );
                            });
                            return (
                              <>
                              <div className="srv_nameDiv">
                                <p className="srv_name">{service.servicesname}</p>
                              </div>
                              <div className="skillAndBulletsDiv">{skills}</div>
                              </>
                          );
                        })}
                      </div>
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
                      <>
                        <img
                          alt="intro_picture"
                          src={not_img}
                          style={{
                            objectFit: "cover",
                            height: '250px',
                            transform: "translateY(-20%)",
                            margin:' 25px'
                          }}
                        />
                        
                      </>
                    )}
                    
                

                    {/* <div className="scrollInstructionsDiv">
                 
                      </div> */}
                      
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

  const renderProviderSkillsAndPrices = () => {
    // if (props.providerInfo.providerSkills ) {
    //   console.log("provider info propppps", props.providerInfo);
    //   return (
    //     <div>
    //         <div  className="ctnr_services">
    //         {
    //           props.providerInfo.providerSkills.map(theSkills =>{
    //           console.log(props.providerInfo.providerSkills, "the damn props");
    //
    //
    //            console.log("theSkills prt 1",theSkills, "<~~~~ here!!!");
    //           // console.log("theSkills", Object.entries(theSkills), "<~~~~ here!!!");
    //
    //         return  theSkills.skills.map(skills =>{
    //           return(
    //             <>
    //               <h1>{skills}</h1>
    //
    //             </>
    //           )
    //           })
    //         })}
    //         </div>
    //
    //         <div>
    //         {props.providerInfo.providerSkills && props.providerInfo.providerSkills.map(prices =>{
    //           // console.log("here", prices.price_max, "<~~~~ prices!!");
    //         // return  props.prices.price_max.map(price =>{
    //           return(
    //             <>
    //
    //               <h1  className="ctnr_services">{prices.price_max}</h1>
    //             </>
    //           )
    //           })
    //         })}
    //         </div>
    //
    //
    //     </div>
    //
    //   )
    // }

    if (props.providerInfo.providerSkills) {
      return (
        <div>
          {props.providerInfo.providerSkills.map(skillInfo => {
            console.log(skillInfo, "<----- skill info here");
            return (
              <div className="ctnr_services">
                <div className="skill_div">{skillInfo.skills}</div>
                <div className="price_div">
                  <div className="price_min_div">${skillInfo.price_min} -</div>
                  <div className="price_max_div">${skillInfo.price_max}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  // console.log(  props.providerInfo.services)
  // console.log(  props.providerInfo.portfolio);
  // console.log(props.providerInfo.providername);
  return (
    <div>
      <NavbarProfile />
      {renderProviderInfo()}
      {renderProviderSkillsAndPrices()}
    </div>
  );
};

export default withRouter(ProviderProfile);