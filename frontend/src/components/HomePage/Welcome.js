import React from "react";

import "../../Css/Home.css";
import bk_img from "../../photo_assets/newbackground.jpg";

// import Navbar from "../NavBars/Navbar";

export const Welcome = () => {
  return (
    <>
      <div className="bg_welcome">

        <div className="homeBackground">
          <img src={bk_img} alt="" />
        </div>
      </div>
    </>
  );
};
