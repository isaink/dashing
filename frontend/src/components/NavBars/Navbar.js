import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LinkTo from './LinkTo';

import "../../Css/Navbar.css";
import logo from "../../photo_assets/dashing_logo.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleServHair = (e) => {
    this.setState({
      hair: 1
    })
  };
  handleServNail = (e) => {
    this.setState({
      nail: 2
    })
  };

  render() {
    return (
      <>
        <div className="navbar" style={{ position: 'sticky'}}>
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
              // to={`/services/1`} try hash route and scroll
              className="links"
              activeClass="active"
              to="hair"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={this.handleServHair}
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
            </Link>
    
            <LinkTo/>



            {/* <Link
              className="links"
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Educational Services
            </Link>

            <Link
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
          </div>
        </div>
      </>
    )
  }
};
