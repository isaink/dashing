import React, { Component } from 'react';
import './App.css';
import Provider from './React_Components/ProvidersPage/ProviderBySvc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider />
      </div>
    )
  }
};

export default App;
