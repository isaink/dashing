import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "../../Css/Home.css";
import bk_img from "../../photo_assets/newbackground.jpg";
import bk from "../../photo_assets/beautybackground.jpg";

import hair_thumb from "../../photo_assets/hair_thumb.jpg";
import nails_thumb from "../../photo_assets/nails_thumb.jpg";
import barb_thumb from "../../photo_assets/barb_thumb.jpg";
import makeup_thumb from "../../photo_assets/makeup_thumb.jpeg";
import edu_pic from "../../photo_assets/edu_pic.jpg";

export default class Welcome extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div className="welcome_container">
          <div className="slogan">
            <h1>"We Bring Style to Your Doorstep"</h1>
          </div>
          <br />

          <div className="subSlogan">
            <h3>You'll never have to wait in a salon for hours again!</h3>
          </div>

          <br />
          <div className="choose_svc">
            <br />
            <h3>Choose Your Service</h3>
          </div>
          <div style={{ paddingTop: "100px" }}>
            <div className=" box" style={{ width: "150px" }}>
              <Link
                className="links"
                activeClass="active"
                to="hair"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={hair_thumb} alt="" width="150px" height="auto" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text"> HAIR </div>
                </div>
              </Link>
            </div>

            <div className=" box" style={{ width: "150px" }}>
              <Link
                className="links"
                activeClass="active"
                to="nails"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={nails_thumb} alt="" width="150px" height="auto" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text"> NAILS </div>
                </div>
              </Link>
            </div>

            <div className=" box" style={{ width: "150px" }}>
              <Link
                className="links"
                activeClass="active"
                to="barber"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {" "}
                <img src={barb_thumb} alt="" width="150px" height="auto" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">BARBER </div>
                </div>
              </Link>
            </div>

            <div className=" box" style={{ width: "150px" }}>
              <Link
                className="links"
                activeClass="active"
                to="makeup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={makeup_thumb} alt="" width="150px" height="auto" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">MAKEUP </div>
                </div>
              </Link>
            </div>

            <div className=" box" style={{ width: "150px" }}>
              <RouterLink
                className="links"
                activeClass="active"
                to="/education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={edu_pic} alt="" width="150px" height="auto" />
                <div className="hvrbox-layer_top">
                  <div className="hvrbox-text">EDUCATIONAL SERVICES </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}
