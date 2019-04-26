import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../../Css/Navbar.css";
import logo from "../../photo_assets/dashing_logo.png";

export default class NavbarProfile extends Component {


    render() {
      return (
        <>
          <div className="nav_prof">
            <span className="dashingNav ">
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

            <div className="links">

            <Link
                className="links"
                to={"/"}
            >
                Home
            </Link>


            </div>
          </div>
        </>
      );
    }
};
