import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBars/Navbar";
import Home from "./components/HomePage/Home";

import SingleProviderContainer from "./Redux_Containers/SingleProviderContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/singleProviderProfile/:id"
            component={SingleProviderContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
