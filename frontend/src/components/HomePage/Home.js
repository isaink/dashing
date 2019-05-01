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
import axios from 'axios';
import SingleService from './SingleService';


import "./../../Css/Home.css";

class Home extends Component {
  state = {
    services: [],
  }

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

  getServices = (service_id) => {
    axios.get(`/services/${service_id}`)
    .then(res => {
      console.log(res);
      debugger
      this.setState({
        services: res.data
      })
    })
    .catch(err => {
      console.log('GET SERVICE ERR', err);
    })
  }

  serviceList = () => this.state.services.map(serviceArea => {
    return (
      <dd>
        <Element name={serviceArea.service_name} className='Element'>
          <SingleService service={serviceArea}/>
        </Element>
      </dd>
    )
  })

  render() {

    return (
        <div className='HomepageDiv'>

          <dl>

            <dd>
              <div className="bg_welcome">
                <div className="homeLogo">
                  <img src={homeLogo} alt="" width="700px" />
                </div>
              </div>
            </dd>

          <dd>
            <Element name="home" className='Element'>
              <Welcome />
            </Element>
          </dd>

          <dt>
            <div className='NavbarDiv'>
              <Navbar className='NavbarComponentTag'/>
            </div>
          </dt>

          {this.serviceList}

          {/*
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
          */}

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

    );
  }
}

export default Home;
//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}
