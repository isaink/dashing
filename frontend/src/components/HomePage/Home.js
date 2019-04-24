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

import "./../../Css/Home.css";

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
      duration: 300,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <a href="top" id="toTop" className="cd-top text--replace js-cd-top">
          Top
        </a>
        <Element name="home">
          <Welcome />
        </Element>
        <Element name="hair">
          <Hair />
        </Element>
        <Element name="nails">
          <Nails />
          {/* <button onClick={this.scrollToTop}>To the top!</button> */}
        </Element>
        <Element name="barber">
          <Barber />
          {/* <button onClick={this.scrollToTop}>To the top!</button> */}
        </Element>
        <Element name="makeup">
          <Makeup />
          <button onClick={this.scrollToTop}>To the top!</button>
        </Element>
        //{" "}
        <Element name="education">
          <Education />{" "}
        </Element>
        //{" "}
        <Element name="aboutus">
          <AboutUs />{" "}
        </Element>
      </>
    );
  }
}

export default Home;
