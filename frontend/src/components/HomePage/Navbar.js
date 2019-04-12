import React from "react";
import { Link } from "react-router-dom";
import "../../Css/Navbar.css";

import logo from "../../photo_assets/dashing_logo.png";

export const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <span className="dashingNav">
        <h3>
          <Link to={"/"}><img src={logo} alt="" width="175px" height="auto"/></Link>
        </h3>
      </span>

      <div className="links">
        <Link to="/">Home</Link>

        <Link to="/hair">Hair</Link>
        <Link to='/provider'>Hair Provider</Link>

        <Link to="/makeup">Makeup</Link>

        <Link to="/nails">Nails</Link>

        <Link to="/barber">Barber</Link>

        <Link to="/education">Educational Services</Link>

        <Link to="/aboutme">About Me</Link>
      </div>
    </div>
    </>
  );
};
