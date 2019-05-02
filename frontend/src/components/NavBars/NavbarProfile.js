import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';

import "../../Css/Navbar.css";
import logo from "../../photo_assets/dashing_logo.png";

class NavbarProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  goBack = () => {
    this.props.history.goBack();
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
                  />
                </Link>
              </h3>
            </span>

            <div className="links">

            <Link
                className="links"
                to={"/"}
                onClick={this.goBack}
            >
                Home
            </Link>


            </div>
          </div>
        </>
      );
    }
};


export default withRouter(NavbarProfile)
