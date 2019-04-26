import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../../Css/Navbar.css";
// import logo from "../../photo_assets/dashing_logo.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div>
          {/* <span className="dashingNav">
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
          </span> */}

          <div className="links">
            {/* <Link
              className="links"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Home
            </Link> */}
          
          
         
            <Link 
              className="links className='btn-slide-line center'"
              activeClass="active"
              to="hair"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
            <button >Hair </button>
            </Link>
          
          
            <Link 
              className="links btn-slide-line center"
              activeClass="active"
              to="nails"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             <button > Nails </button>
            </Link>
          
          
            <Link
              className="links btn-slide-line center"
              activeClass="active"
              to="barber"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             <button> Barber </button> 
            </Link>
    
          
            <Link
              className="links btn-slide-line center"
              activeClass="active"
              to="makeup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button> Makeup </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
};


            // {/* <Link
            //   className="links"
            //   activeClass="active"
            //   to="education"
            //   spy={true}
            //   smooth={true}
            //   offset={-70}
            //   duration={500}
            // >
            //   Educational Services
            // </Link>

            // <Link
            //   className="links"
            //   activeClass="active"
            //   to="aboutus"
            //   spy={true}
            //   smooth={true}
            //   offset={-70}
            //   duration={500}
            // >
            //   About Us
            // </Link> */}