import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "../../Css/NavbarForComponents.css";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div className="navbar">
          <span className="dashing_logo">
            <Link to={"/"}>
              <img
                src={homeLogo}
                alt=""
                width="175px"
                height="auto"
                onClick={this.scrollToTop}
              />
            </Link>
          </span>

          <div className="dashingNav">

              { /*<Link
                className="links"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="links"
                activeClass="active"
                to="hair"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hair
              </Link>
              <Link
                className="links"
                activeClass="active"
                to="nails"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Nails
              </Link>
              <Link
                className="links"
                activeClass="active"
                to="barber"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Barber
              </Link>
              <Link
                className="links"
                activeClass="active"
                to="makeup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Makeup
              </Link>*/}

              <RouterLink
                className="links"
                activeClass="active"
                to="/education"
              >
                Educational Services
              </RouterLink>

              <RouterLink className="links" activeClass="active" to="/aboutus">
                About Us
              </RouterLink>
            </div>
          </div>

              {/* <Link
              className="links"
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Us
            </Link>*/}



      </>
    );
  }
}
