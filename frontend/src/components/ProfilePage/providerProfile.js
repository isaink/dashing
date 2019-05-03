import React from "react";
import { withRouter, Link } from 'react-router-dom';
import "./../../Css/profile.css";
import pared from "./../../img/habitacion-pared-salmon.jpg";
import loc from "./../../img/location.png";
import bulletpoint from "./../../photo_assets/bulletpoint.png";
import not_img from "./../../img/notFound.jpg";
import backarrow from '../../img/curved_back_arrow.png';

import NavbarProfile from "../NavBars/NavbarProfile";


const ProviderProfile = props => {
  const goBack = () => {
    props.history.goBack();
  };

  const renderProviderInfo = () => {
    if (props.providerInfo) {
      return (

        <div className="ctnr_profile" key={props.providerInfo.provider_id}>

          <div className="background_img_Div" >
            <img
              alt="intro_picture"
              src={pared}
              className="intro_pic"
              />
            {/*
              style={{ width: `100%` }}
              */}
            </div>

            <div className='allBelowBkGndImage'>
              {/*
                <div className='backLinkDiv'>


                <Link
                className="backLink"
                to={"/"}
                onClick={goBack}
                style={{textDecoration: 'none'}}
                >

                <div className='backarrowImageTagDiv'>
                <img src={backarrow}
                alt=''
                width='50px'
                className='backarrowImageTag'

                />
                </div>

                <div className='goBackTextTag'>
                <h4> Go Back </h4>
                </div>

                </Link>

                </div>

                */}


                <div className='leftAndRightSidesDiv'>

                  <div className='AvatarAndAllDetailsDiv'>
                    {/*
                      // <div className='avatarProfileDiv'>
                      */}
                      <div className='avatarProfileBorder'>
                        <img
                          src={props.providerInfo.avatar}
                          alt="avatar"
                          className="avatarProfileImage"
                          />
                      </div>
                      {/*
                        // </div>
                        */}




                        <div className='contactLocationSocialLinkDiv'>

                          <div className='rightProviderDetailsDiv'>

                            <div className='LocationAndNameDiv'>
                              <div className='locDiv'>
                                <div className="loc">
                                  <div className="prov_boro">
                                    <img
                                      alt="loc"
                                      src={loc}
                                      style={{ zIndex: "2", height: "30px" }}
                                      />
                                    <h6>{props.providerInfo.borough}</h6>
                                  </div>
                                </div>
                              </div>

                              <div className="prov_info">
                                <h5 className="prov_name">{props.providerInfo.providername} </h5>
                              </div>
                            </div>


                            <div className="phoneEmailAndSocialLinkDiv">
                              <div className='phoneNumDiv'>
                                <p>Phone number: </p>
                                <h6>{props.providerInfo.phone_number}</h6>
                              </div>
                              <div className='emailDiv'>
                                <p>Email:</p>
                                <h6>{props.providerInfo.email}</h6>
                              </div>
                              {/* </div> */}

                              <div className="social_link">
                                <p>Social media: </p>
                                <a href="https://www.instagram.com/krystamariehair/"
                                  target="_blank" rel='noopener noreferrer'
                                  className='socialLink_a_tag'>
                                  <h6>{props.providerInfo.website_link}</h6>
                                </a>
                              </div>

                            </div>



                          </div>


                        </div>

                      </div>

                      {/*
                        <div className="ctnr_porfolio">
                        //  <img src={lines}/>
                        //  PORFOLIO HERE
                      </div>
                      */}
                      <div className='centerDiv'>
                        <div className="ctnr_services">
                          {props.providerInfo.services &&
                            props.providerInfo.services.map(service => {
                              let skills = service.skills.map(skill => {
                                return (
                                  <>
                                  <img
                                    alt="intro_picture"
                                    src={bulletpoint}
                                    style={{ height: "5px" }}
                                    className='skillBullets'
                                    />
                                  {' '} <p className='skill_item'>{skill}</p> {' '}
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

                    <div className='rightSideDiv'>
                      <div className='portfolioDiv'>

                        <div className="ctnr_portfolio">
                          {props.providerInfo.portfolio
                            ? (props.providerInfo.portfolio.map(photo => {
                              return (
                                <img
                                  className="portfolio_img"
                                  src={photo["img"]}
                                  alt="not here"
                                  style={{ height: "200px" }}
                                  />
                              );
                            }))
                            : (
                              <>
                              <img
                                alt="intro_picture"
                                src={not_img}
                                style={{
                                  objectFit: "cover",
                                  // height: "320px",
                                  // transform: "translateY(-20%)"
                                }}
                                />
                              </>
                          )
                        }
                      </div>


                    </div>
                    <div className='scrollInstructionsDiv'>
                      <p className='scrollInstructions'>Click and scroll through my portfolio!</p>
                    </div>

                  </div>

                </div>


              </div>
              {/*
                <div className='testDiv'>
                <h1 className='testTag'> Test Test tEst tEat stea tl la fjkla sd af</h1>
              </div>
              */}

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


      console.log(  props.providerInfo.services);
      console.log(  props.providerInfo.portfolio);
      console.log(props.providerInfo.providername);
      return (
        <div>
          <NavbarProfile />
          {renderProviderInfo()}
        </div>
      )
    };

    export default withRouter(ProviderProfile)
