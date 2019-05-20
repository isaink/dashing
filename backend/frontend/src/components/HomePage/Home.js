import React, { Component } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

// import ProviderProfile from '../ProfilePage/providerProfile';
import Welcome from "./Welcome";
import Hair from "./Hair";
import Nails from "./Nails";
import Barber from "./Barber";
import Makeup from "./Makeup";
import EducationProv_Container from "../../Redux_Containers/EducationProv_Container";




// import  NavbarForComponents  from '../NavBars/NavbarForComponents'


import "./../../Css/Home.css";

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
  };

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 3000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  render() {
    return (
      <div className="HomepageDiv">
        <dl>
          <dd>
            <Element name="home" className="Element">
              <Welcome />
            </Element>
          </dd>

          <dd>
            <Element name="hair" className="Element">
              <Hair />
            </Element>
          </dd>

          <dd>
            <Element name="nails" className="Element">
              <Nails />
            </Element>
          </dd>

          <dd>
            <Element name="barber" className="Element">
              <Barber />
            </Element>
          </dd>

          <dd>
            <Element name="makeup" className="Element">
              <Makeup />

            </Element>
          </dd>




        </dl>
      </div>
    );
  }
}

export default Home;
//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}
