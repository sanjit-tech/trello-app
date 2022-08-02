import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2 className="Header"><b>Trello Demo App</b></h2>

        <Board />
      </div>
    );
  }
}

export default App;
