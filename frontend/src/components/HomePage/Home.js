import React, { Component } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

// import ProviderProfile from '../ProfilePage/providerProfile';
import { Welcome } from "./Welcome";
import Hair from "./Hair";
import Nails from "./Nails";
import Barber from "./Barber";
import Makeup from "./Makeup";
import EducationProv_Container  from "../../Redux_Containers/EducationProv_Container";
import { AboutUs } from "./AboutUs";
// import  NavbarForComponents  from '../NavBars/NavbarForComponents'

import NavbarHome from "../NavBars/Navbar";
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

    this.getServices()

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

  getServices = () => {
    axios.get(`/services`)
    .then(res => {
      console.log(res.data.body);
      // debugger
      this.setState({
        services: res.data.body
      })
    })
    .catch(err => {
      console.log('GET SERVICE ERR', err);
    })
  }


  serviceList = () => this.state.services.map(service => {
    console.log(service);
    debugger
    return (
      <dd>
        <Element name={service.name.toLowercase()} className='Element'>
          <SingleService service={service}/>
        </Element>
      </dd>
    )
  })

  render() {
    console.log(this.state.services);
    console.log(this.getServices);
    console.log(this.serviceList);

    return (
      <div className="HomepageDiv">
        <dl>
          <dd>
            <div className="bg_welcome">
              <div className="homeLogo">
                <img src={homeLogo} alt="" width="700px"  />
              </div>
            </div>
          </dd>

          <dd>
            <Element name="home" className="Element">
              <Welcome />
            </Element>
          </dd>

          <dt>
            <div className='NavbarDiv'>
              {/* <NavbarHome className='NavbarComponentTag'/> */}
            </div>
          </dt>

          {this.serviceList}

          <dd>
            <Element name="nails" className='Element'>
              <Nails />
            </Element>
          </dd>


          {/*
          <dd>
<<<<<<< HEAD
            <Element name="hair" className='Element'>
              <Hair />
=======
            <Element name="nails" className="Element">
              <Nails />
>>>>>>> fbf98b019ce805747edae37e6a897cac50b211c7
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
          */}

          {/* <dd>
            <Element name="education" className="Element">
              <EducationProv_Container />{" "}
            </Element>
          </dd>

          <dd>
            <Element name="aboutus" className="Element">
              <AboutUs />{" "}
            </Element>
          </dd> */}
        </dl>
      </div>
    );
  }
};

export default Home;
//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}
