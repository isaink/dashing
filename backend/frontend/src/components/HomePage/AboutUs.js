import React from "react";
import NavbarProfile from "../NavBars/NavbarProfile";
import "../../Css/AboutUs.css";

export const AboutUs = () => {
  return (
    <>
    <NavbarProfile />
      <div className="about_container">
        <div id="about_header">About Us</div>
        <div id="about_writeup">
          Don't want to spend your entire day waiting in a salon?<br/>
           Let Dashing come to you! <br/> Brought to you by JB INC., Dashing is the online destination for bringing together beauty & wellness professionals and servicing their clients in the comfort of their own homes. Our talented licensed freelance professionals can showcase their work and connect with new & exisiting clients, all while building their business. Our clients can search for providers in their area or by the service they need and book an appointment!  <br/> Explore Dashing today!
        </div>
      </div>
    </>
  );
};
