import React, { Component } from "react";

import {
    Element,
    Events,
    animateScroll as scroll,
    scroller
} from "react-scroll";

import { ProviderProfile } from '../ProfilePage/providerProfile';
import { Welcome } from "./Welcome";
import Provider from "../ProvidersPage/Provider";
import { Education } from "./Education";
import { AboutUs } from "./AboutUs";

import NavbarLogIn from "./../NavBars/Navbar";

class Home extends Component {
    componentDidMount() {
        Events.scrollEvent.register("begin", function() {
          console.log("begin", arguments);
        });
        Events.scrollEvent.register("end", function() {
          console.log("end", arguments);
        });
    };
    
    scrollToTop() {
        scroll.scrollToTop();
    };

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 200,
          delay: 0,
          smooth: "easeInOutQuart"
        });
    };

    render(){
        return (
            <>

        <NavbarLogIn />
            

            <Element name="home">
                <Welcome />
            </Element>

            <Element name="providers">
                <Provider />
            </Element>

            <Element name="education">
                <Education />
            </Element>

            <Element name="aboutus">
                <AboutUs />
            </Element>

            <Element name=''>
                <ProviderProfile/>
            </Element>

            <button onClick={this.scrollToTop}>To the top!</button>
        </>
        )
    }
};

export default Home;
