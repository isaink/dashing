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
// import  NavbarForComponents  from '../NavBars/NavbarForComponents'

import Navbar from "../NavBars/Navbar";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";



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
      <dl className='HomepageDiv'>

        {/*
        <dl>
          <div>
            <dt>A</dt>
            <dd>Andrew W.K.</dd>
            <dd>Apparat</dd>
            <dd>Arcade Fire</dd>
            <dd>At The Drive-In</dd>
            <dd>Aziz Ansari</dd>
          </div>
        </dl>
        */}

        <div className='divBelow_dl'>
          {/*
          <dd className="bg_welcome">
            <dd className="homeLogo">
                <img src={homeLogo} alt="" width="700px" />
            </dd>
          </dd>
          */}

          <dt className="bg_welcome">
            <dt className="homeLogo">
              <dt className='NavbarDiv'>
                <Navbar
                  className='NavbarComponentTag'
                  />
              </dt>
            </dt>
          </dt>


          <dd>
            <Element name="home" className='Element'>
              <Welcome />
            </Element>
          </dd>

          <dd>
            <Element name="hair" className='Element'>
              <Hair />
            </Element>
          </dd>

          <dd>
            <Element name="nails" className='Element'>
              <Nails />
            </Element>
          </dd>

          <dd>
            <Element name="barber" className='Element'>
              <Barber />
            </Element>
          </dd>

          <dd>
            <Element name="makeup" className='Element'>
              <Makeup />
            </Element>
          </dd>

          <dd>
            <Element name="education" className='Element'>
              <Education />{" "}
            </Element>
          </dd>

          <dd>
            <Element name="aboutus" className='Element'>
              <AboutUs />{" "}
            </Element>
          </dd>

        </div>

      </dl>
    );
  }
}

export default Home;
//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}
