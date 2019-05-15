import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import "../../Css/Navbar.css";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

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

            <span className="dashing_logo">
              <h3>
                <RouterLink to={"/"}>
                  <img
                    src={homeLogo}
                    alt=""
                    width="175px"
                    height="auto"
                  />
                </RouterLink>
              </h3>
            </span>

            <div className="dashingNav">
            <RouterLink
                className="links"
                to={"/"}
                onClick={this.goBack}
            >
                Go Back
            </RouterLink>

            <RouterLink className="links" activeClass="active" to="/">
              Home
            </RouterLink>

            <RouterLink className="links" activeClass="active" to="/education">
              Educational Services
            </RouterLink>

            <RouterLink className="links" activeClass="active" to="/aboutus">
              About Us
            </RouterLink>

            </div>
          </div>
        </>
      );
    }
};


export default withRouter(NavbarProfile)
