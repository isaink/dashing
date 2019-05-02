import React from "react";
import "./../../Css/profile.css";

// import pic from './../../img/pic_profile.png';
// import pic from './../../img/pic_profile.jpg';
import pared from "./../../img/habitacion-pared-salmon.jpg";
import loc from "./../../img/location.png";
import bulletpoint from "./../../photo_assets/bulletpoint.png";
// import lines from './../../img/lines_porfolio.jpg';
import not_img from "./../../img/notFound.jpg";
import backarrow from '../../img/curved_back_arrow.png';

import { withRouter, Link } from 'react-router-dom';
import logo from "../../photo_assets/dashing_logo.png";



const ProviderProfile = props => {

  const goBack = () => {
    props.history.goBack();
  };

  const renderProviderInfo = () => {
    if (props.providerInfo) {
      return (

        <div className="ctnr_profile" key={props.providerInfo.provider_id}>

          <div className="background_img" >
            <img
              alt="intro_picture"
              src={pared}
              className="intro_pic"
            />
          {/*
            style={{ width: `100%` }}
            */}
          </div>

          <div className='backLinkDiv'>
            {/*
            <span className="dashingNav">
              <h3>
                <Link to={"/"}>
                  <img
                    src={logo}
                    alt=""
                    width="175px"
                    height="auto"
                  />
                </Link>
              </h3>
            </span>
            */}

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

          <div className='avatarProfileDiv'>
            <div className='avatarProfileBorder'>
              <img
                src={props.providerInfo.avatar}
                alt="avatar"
                className="avatarProfile"
              />
            </div>
          </div>



          <div className="prov_info">
            <h5 className="prov_name">{props.providerInfo.providername} </h5>
          </div>
          <div className="bg_name" /> {/*   ???????   */}

          {/* <div className='ctnr_contact'> */}
          <div className="contact_info">
            <p>Phone number: </p>
            <h6>{props.providerInfo.phone_number}</h6>

            <p>Email:</p>
            {props.providerInfo.email}
            {/* </div> */}
          </div>

          <div className="ctnr_porfolio">
            {/* <img src={lines}/> */}
            {/* PORFOLIO HERE */}
          </div>

          <div className="loc">
            <h5 className="prov_boro">
              <img
                alt="loc"
                src={loc}
                style={{ zIndex: "2", height: "20px" }}
              />
              {props.providerInfo.borough}{" "}
            </h5>
          </div>

          <div className="social_link">
            <p>Social media: </p>
            <a href="https://www.instagram.com/krystamariehair/"
              target="_blank" rel='noopener noreferrer'>
              {" "}
              {props.providerInfo.website_link}{" "}
            </a>
          </div>

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
                      />
                    {' '} {skill} {' '}
                    </>
                  );
                });
                return (
                  <>
                    <div className="ctnr_skills">
                      <p className="srv_name">{service.servicesname}</p>
                    </div>
                    <div className="inner_skill">{skills}</div>
                  </>
                );
              })}
          </div>

          <div className="ctnr_porfolio">
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
                {" "}
                <img
                  alt="intro_picture"
                  src={not_img}
                  style={{
                    objectFit: "cover",
                    height: "320px",
                    transform: "translateY(-20%)"
                  }}
                />
              </>
            )}
          </div>

          <div className='testDiv'>
            <h1 className='testTag'> Test Test tEst tEat stea tl la fjkla sd af</h1>
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


  console.log(  props.providerInfo.services);
  console.log(  props.providerInfo.portfolio);
  return (
    <>
      {renderProviderInfo()}
    </>
  )
};

export default withRouter(ProviderProfile)
