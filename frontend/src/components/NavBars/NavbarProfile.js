import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
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
                <RouterLink to={"/"}>
                  <img
                    src={logo}
                    alt=""
                    width="175px"
                    height="auto"
                  />
                </RouterLink>
              </h3>
            </span>

            <div className="links">

            <RouterLink
                className="links"
                to={"/"}
                onClick={this.goBack}
            >
                Go back
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
