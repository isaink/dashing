import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from './components/HomePage/Home';
import { Education } from './components/HomePage/Education';
import { AboutUs } from './components/HomePage/AboutUs';
import { ProviderProfile } from './components/ProfilePage/providerProfile';
import SingleProviderContainer from './Redux_Containers/SingleProviderContainer';
// import NavbarForComponents from "./components/NavBars/NavbarForComponents";


import "./App.css";
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
// <NavbarForComponents />
*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/services/:id' component={Home} />
          <Route exact path='/aboutus' component={AboutUs}/>
          <Route exact path='/educational' component={Education} />
          <Route
            path="/singleProviderProfile/:id"
            component={SingleProviderContainer}
          />

          <Route exact path="/profile" component={ProviderProfile} />
          <Route exact path="/profilecontainer" component={SingleProviderContainer}/>
          <Route
             render= { () => <h3> NOT FOUND  </h3> }
            />
        </Switch>



      </div>
    );
  }
}

export default App;
