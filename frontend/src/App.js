import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/HomePage/Navbar";
import { Route, Switch } from "react-router-dom";
import {Home} from "./components/HomePage/Home";
import HairContainer from "./Redux_Containers/HairContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hair" component={HairContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
