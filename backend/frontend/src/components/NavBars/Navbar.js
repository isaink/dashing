import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "../../Css/Navbar.css";
import Account from "./Account.js";

export default class NavbarHome extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <div className="links_center">
          <div className="ctnr_lines">
            <div className="nav_lines">
              <div className="first" />
              <div className="second" />
              <div className="third" />
            </div>
          </div>

          <Link
            className="links className='btn-slide-line center'"
            activeClass="active"
            to="hair"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button>Hair </button>
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
            <button> Nails </button>
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

          <Link className="links btn-slide-line center" to="/education">
            <button> Education </button>
          </Link>

          <Link
            className="links btn-slide-line center"
            activeClass="active"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button> About Us</button>
          </Link>

          <Account />
        </div>
      </>
    );
  }
}
