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

import NavbarHome from "../NavBars/Navbar";
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
      duration: 3000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <>
       
        {/* <Element name="home">
          <Welcome />
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
    */}



<div className='HomepageDiv'>

<dl>

  <dd>
    <div className="bg_welcome">
      <div className="homeLogo">
        <img src={homeLogo} alt="" width="700px" />
      </div>
    </div>
  </dd>

  <dt>
    <div className='NavbarDiv'>
      <NavbarHome className='NavbarComponentTag'/>
  

    </div>
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
</dl>
</div>



   
      </>
    );
  }
}

export default Home;
//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}
