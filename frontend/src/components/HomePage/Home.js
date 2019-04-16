import React from "react";

import "../../Css/Home.css";

import bk_img from "../../photo_assets/beautybackground.jpg";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

export const Home = () => {
  return (
    <div id="homeContainer">
      <div id="homeBackground">
        <img src={bk_img} alt="" />
      </div>
       
      <div className="centerLogo">
        <img src={homeLogo} alt=""  style={{ zIndex:'2'}}/>
      </div>
    </div>
  );
};
