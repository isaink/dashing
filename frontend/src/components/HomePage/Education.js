import React from "react";
import "../../Css/Education.css";
import leftpic from "../../photo_assets/educational.jpg";

export const Education = () => {
  return (
    <>
      <div className="edu_container">
        <div id="left_vid">
          <img src={leftpic} alt="" width="610px" height="auto" />
        </div>
        <div className="rightside">
          <div id="ed_header">Educational Services</div>
          <br />

          <div id="ed_writeup">
            Dashing provides educational beauty services right in the
            comfort of your own home. <br/> Our fun and interactive classes are
            conducated by our skilled and licensed beauty professionals.
            <br />
            <br />
            Choose which service you would like and schedule an appointment
            today!
          </div>
        </div>
      </div>
    </>
  );
};
