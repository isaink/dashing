import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/HomePage/Navbar";
import { Route, Switch } from "react-router-dom";

import { Home } from "./components/HomePage/Home";
// import HairContainer from "./Redux_Containers/HairContainer";
import { Education } from "./components/HomePage/Education";
import Provider from "./React_Components/ProvidersPage/ProviderBySvc";
import ComboBox from "./components/HomePage/ComboBox";

import SingleProviderContainer from "./Redux_Containers/SingleProviderContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/hair" component={HairContainer} /> */}
          <Route path="/providers" component={Provider} />
          <Route path="/provider" component={SingleProviderContainer} />
          <Route path="/education" component={Education} />
        </Switch>

        <ComboBox />

      </div>
    );
  }
}

export default App;
