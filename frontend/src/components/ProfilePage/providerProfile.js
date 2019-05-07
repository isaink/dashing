import React from "react";
import { withRouter} from 'react-router-dom';
import "./../../Css/profile.css";
import pared from "./../../img/habitacion-pared-salmon.jpg";
import loc from "./../../img/location.png";
import bulletpoint from "./../../photo_assets/bulletpoint.png";
import not_img from "./../../img/notFound.jpg";

import NavbarProfile from "../NavBars/NavbarProfile";


class ProviderProfile extends React.Component {
// const ProviderProfile = props => {
  constructor(props) {
    super(props)
    this.state = {
      buttonSelected: false,
      profileClicked: true,
      serviceClicked: false,
      portfolioClicked: false,
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };


  toggleProfile = () => {
    this.setState ({
      profileClicked: true,
      serviceClicked: false,
      portfolioClicked: false,
    })
  }

  toggleServices = () => {
    this.setState ({
      profileClicked: false,
      serviceClicked: true,
      portfolioClicked: false,
    })
  }

  togglePortfolio = () => {
    this.setState ({
      profileClicked: false,
      serviceClicked: false,
      portfolioClicked: true,
    })
  }

  displayProfile = () => {
    // if (this.props.providerInfo && this.state.profileClicked) {
    if (this.state.profileClicked) {
      return (
        <div className='LeftSideDiv'>

          <div className='avatarProfileBorder'>
            <img
              src={this.props.providerInfo.avatar}
              alt="avatar"
              className="avatarProfileImage"
              />
          </div>

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
                      <h6>{this.props.providerInfo.borough}</h6>
                    </div>
                  </div>
                </div>

                <div className="prov_info">
                  <h5 className="prov_name">{this.props.providerInfo.providername} </h5>
                </div>
              </div>


              <div className="phoneEmailAndSocialLinkDiv">
                <div className='phoneNumDiv'>
                  <p>Phone number: </p>
                  <h6>{this.props.providerInfo.phone_number}</h6>
                </div>
                <div className='emailDiv'>
                  <p>Email:</p>
                  <h6>{this.props.providerInfo.email}</h6>
                </div>
                {/* </div> */}

                <div className="social_link">
                  <p>Social media: </p>
                  <a href="https://www.instagram.com/krystamariehair/"
                    target="_blank" rel='noopener noreferrer'
                    className='socialLink_a_tag'>
                    <h6>{this.props.providerInfo.website_link}</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  displayServices = () => {
    if (this.state.serviceClicked) {
      return (
        <div className='centerDiv'>
          <div className="servicesAndSkills">
            {this.props.providerInfo.services &&
              this.props.providerInfo.services.map(service => {
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
                <div className='indivServiceNameAndSkillList'>
                <div className="srv_nameDiv">
                  <p className="srv_name">{service.servicesname}</p>
                </div>
                <div className="skillAndBulletsDiv">
                  {skills}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    )
  }
  }

  displayPortfolio = () => {
    if (this.state.portfolioClicked) {
      return (
        <div className='rightSideDivDIV'>
        <div className='rightSideDiv'>
          <div className='portfolioDiv'>

            <div className="ctnr_portfolio">
              {this.props.providerInfo.portfolio
                ? (this.props.providerInfo.portfolio.map(photo => {
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
                    className="portfolio_img"
                    alt="intro_picture"
                    src={not_img}
                    style={{
                      height: "200px",
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
      )
    }
  }



  renderProviderInfo = () => {
    if (this.props.providerInfo) {
      return (

        <div className="big_Div" key={this.props.providerInfo.provider_id}>

          <div className="background_img_Div" >
            <img
              alt="intro_picture"
              src={pared}
              className="intro_pic"
              />

          </div>

          <div className='allBelowBkGndImage'>

            <div className='switchButtonsDiv'>

              <form className='switchButtons'>
                <button type='button' onClick={this.toggleProfile}>My Profile</button>
                <button type='button' onClick={this.toggleServices}>My Services</button>
                <button type='button' onClick={this.togglePortfolio}>My Portfolio</button>
              </form>

              <div className= 'displayBelowButtonDiv'>
                {this.state.buttonSelected ? this.displayProfile() : null}
                {this.state.profileClicked ? this.displayProfile() : null}
                {this.state.serviceClicked ? this.displayServices() : null}
                {this.state.portfolioClicked ? this.displayPortfolio() : null}
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


      render() {
        console.log(  this.props.providerInfo.services);
        console.log(  this.props.providerInfo.portfolio);
        console.log(this.props.providerInfo.providername);

        return (
          <div>
            <NavbarProfile />
            {this.renderProviderInfo()}



            {/*
            <div className="big_Div" key={this.props.providerInfo.provider_id}>

              <div className="background_img_Div" >
                <img
                  alt="intro_picture"
                  src={pared}
                  className="intro_pic"
                  />

              </div>

              <div className='allBelowBkGndImage'>



                // <div className='leftCenterAndRightSidesDiv'>
                //   left side div
                //   center div
                //   right side div
                // </div>


                <div>
                  <form className='switchButtons'>
                    <button type='button' onClick={this.displayProfile}>Profile</button>
                    <button type='button' onClick={this.displayServices}>Services</button>
                    <button type='button' onClick={this.displayPortfolio}>Portfolio</button>
                  </form>

                </div>

              </div>

            </div>


            */}

          </div>
        )
      }
    };

    export default withRouter(ProviderProfile)
