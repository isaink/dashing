import React from "react";
import "../../Css/Education.css";
import leftpic from "../../photo_assets/edu_pic.jpg";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";

export const Education = () => {
  return (
    <>
      <div className="edu_container">
        <div id="left_pic">
          <img src={leftpic} alt="" width="750px" height="auto" />
        </div>

        <div className="rightside">
          <div id="ed_header">Educational Services</div>
          <br />

          <div id="ed_writeup">
            Dashing provides educational beauty services right in the comfort of
            your own home. <br /> Our fun and interactive classes are conducted
            by our skilled and licensed beauty professionals.
            <br />
            <br />
            <span className="skillsDropdown">
              <SkillsByServiceComboBox />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
