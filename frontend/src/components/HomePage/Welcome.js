import React from "react";

import "../../Css/Home.css";

import bk_img from "../../photo_assets/beautybackground.jpg";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

// import ComboBox from "./ComboBox";

export const Welcome = () => {
  return (
    <>  
      <div className='bg_welcome'>
        <img src={homeLogo} alt="" className="homeLogo" />

        <img src={bk_img} alt="" className="homeBackground" />
      </div>
      
    </>
  );
};
