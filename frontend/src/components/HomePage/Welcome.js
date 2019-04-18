import React from "react";
import {Dropdown} from "./HomePage/Dropdown";

import "../../Css/Home.css";

import bk_img from "../../photo_assets/beautybackground.jpg";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

export const Welcome = () => {
  return (
    <>
      <div className="homeBackground">
        <img src={bk_img} alt="" />
      </div>

      <div className="centerLogo">
        <img src={homeLogo} alt="" />
      </div>
      <Dropdown />
    </>
  );
};
