import React, { Component } from "react";
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';

import "./App.css";

import  Navbar  from "./components/HomePage/Navbar";
// import { Route, Switch } from "react-router-dom";
import {Home} from "./components/HomePage/Home";
// import HairContainer from "./Redux_Containers/HairContainer";
import Provider from './React_Components/ProvidersPage/ProviderBySvc'
import ComboBox from './components/HomePage/ComboBox'
// import SingleProviderContainer from './Redux_Containers/SingleProviderContainer'
import  SingleProviderContainer from './Redux_Containers/SingleProviderContainer'

class App extends Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  };


  scrollToTop() {
    scroll.scrollToTop();
  };

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <button onClick={this.scrollToBottom}>To the bottom!</button> */}

        <Home name='home' />

        <Element name='provider'>
          <Provider/>
        </Element>

        <Element name='provider_profile'>
          <SingleProviderContainer />
        </Element>

        <ComboBox
        />



        <button onClick={this.scrollToTop}>To the top!</button>
      </div>
    );
  }
}

export default App;
