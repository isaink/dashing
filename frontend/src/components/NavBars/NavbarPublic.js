import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../../Css/Navbar.css";
import logo from "../../photo_assets/dashing_logo.png";

export default class NavbarPublic extends Component {
    scrollToTop = () => {
      scroll.scrollToTop();
    };
  
    render() {
      return (
        <>
          <div className="navbar">
            <span className="dashingNav">
              <h3>
                <Link to={"/"}>
                  <img
                    src={logo}
                    alt=""
                    width="175px"
                    height="auto"
                    onClick={this.scrollToTop}
                  />
                </Link>
              </h3>
            </span>
  
            <div className="links">
              
            <Link
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
                to="Explore"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
               Explore 
            </Link>

            </div>
          </div>
        </>
      );
    }
};