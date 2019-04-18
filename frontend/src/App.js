import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/HomePage/Navbar";
import Home from './components/HomePage/Home';
// import ComboBox from "./components/HomePage/ComboBox";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App;
