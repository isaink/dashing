import React, { Component } from "react";

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

// import { ProviderProfile } from '../ProfilePage/providerProfile';
import { Welcome } from "./Welcome";
import Hair from "./Hair";
import Nails from "./Nails";
import Barber from "./Barber";
import Makeup from "./Makeup";

import { Education } from "./Education";
import { AboutUs } from "./AboutUs";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";

import Navbar from "./../NavBars/Navbar";

class Home extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }


  render() {
    return (
      <>
      <Navbar/>

        <Element name="home">
          <Welcome />
          <SkillsByServiceComboBox />
        </Element>

        <Element name="hair">
          <Hair />
        </Element>

        <Element name="nails">
          <Nails />
        </Element>

        <Element name="barber">
          <Barber />
        </Element>

        <Element name="makeup">
          <Makeup />
        </Element>

        {/* <Element name="education"> */}
          {/* <Education /> */}
        {/* </Element> */}

        {/* <Element name="aboutus"> */}
          {/* <AboutUs /> */}
        {/* </Element> */}

        <button onClick={this.scrollToTop}>To the top!</button>
      </>
    );
  }
}

export default Home;
