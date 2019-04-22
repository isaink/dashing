import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import {Home} from "./components/HomePage/Home";
import HairContainer from "./Redux_Containers/HairContainer";
import Provider from './React_Components/ProvidersPage/ProviderBySvc'

import SkillsByServiceComboBox from './Redux_Containers/SkillsByServiceComboBox'
import "./Css/ComboBox.css"


import "./App.css";

import Navbar from './components/NavBars/Navbar'
import { ProviderProfile } from "./components/providerPro/providerProfile";

import Home from './components/HomePage/Home';
import SingleProviderContainer from './Redux_Containers/SingleProviderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ProviderProfile} />
          <Route exact path="/profilecontainer" component={SingleProviderContainer}/>

        </Switch>
        
        <SkillsByServiceComboBox />

      </div>
    );
  }
}

export default App;
