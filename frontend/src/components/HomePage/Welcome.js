import React from "react";

import "../../Css/Home.css";
import Navbar from  '../NavBars/Navbar';
import bk_img from "../../photo_assets/beautybackground.jpg";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

export const Welcome = () => {
  return (
    <>
      <div className="bg_welcome"  >
       
        <div className="homeLogo" >
          <img src={homeLogo} alt="" width="600px"   />
          <Navbar />
        </div>
        <div className="homeBackground">
          <img src={bk_img} alt="" />
        </div>
      </div>
    </>
  );
};
