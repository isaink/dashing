import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../Css/Navbar.css";
import logo from "../../photo_assets/dashing_logo.png";

export default class NavbarProfile extends Component {
  render() {
    return (
      <>

      <div className="navbar">
        <span className="dashingNav">
          <Link to={"/"}>
            <img
              src={logo}
              alt=""
              width="175px"
              height="auto"

            />
          </Link>
        </span>
        <div className="solo_links">
        <Link to="/">
          Back To HomePage
        </Link>
      </div>
      </div>
      </>
    );
  }
}
