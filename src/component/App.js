import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header
            title="Weather"
          />
      </div>
    );
  }
}

export default App;
