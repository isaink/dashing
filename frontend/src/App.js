import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/HomePage/Home";
import { ProviderProfile } from "./components/providerPro/providerProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ProviderProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
