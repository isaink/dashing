import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// import "../../Css/NavbarForComponents.css";
import '../../Css/provider.css';
import logo from "../../photo_assets/dashing_logo.png";

export default class NewNav extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div className="ctnr_new_nav">
          <span className="">
            <Link to={"/"}>
              <img
                src={logo}
                alt=""
                width="175px"
                height="auto"
                onClick={this.scrollToTop}
              />
            </Link>
          </span>

          <div className="">
            <Link
              className=""
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
              className=""
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
              className=""
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
              className=""
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
              className=""
              activeClass="active"
              to="makeup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Makeup
            </Link>

            {/* <RouterLink className="" activeClass="active" to="/education">
              Educational Services
            </RouterLink> */}

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
            </Link> */}

            {/* <RouterLink className="links" activeClass="active" to="/aboutus">
              About Us
            </RouterLink> */}
          </div>
        </div>
      </>
    );
  }
}
