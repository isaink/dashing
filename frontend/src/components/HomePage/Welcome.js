import React from "react";

import "../../Css/Home.css";
import bk_img from "../../photo_assets/newbackground.jpg";
import bk from "../../photo_assets/beautybackground.jpg";

// import Navbar from "../NavBars/Navbar";

export const Welcome = () => {
  return (
    <>
      <div className="bg_welcome">

        <div className="homeBackground">
          <img src={bk} alt="" />
        </div>
      </div>
    </>
  );
};
