
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./App.css";
import  Navbar  from "./components/HomePage/Navbar";
import { Route, Switch } from "react-router-dom";
import {Home} from "./components/HomePage/Home";
// import HairContainer from "./Redux_Containers/HairContainer";
import Provider from './React_Components/ProvidersPage/ProviderBySvc'
import ComboBox from './components/HomePage/ComboBox'
import SingleProviderContainer from './Redux_Containers/SingleProviderContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        {/* <Switch> */}
          <Home name='home' />
          <Provider />
          



          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/hair" component={HairContainer} /> */}
          {/* <Route path='/provider' component={Provider}/> */}
        {/* </Switch> */}

        <ComboBox />


        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>

      </div>
    )
  }
};

export default App;
