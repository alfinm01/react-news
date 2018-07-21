import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./modules/Button";
import P from "./modules/P";
// import SourceList from "./modules/sources/SourcesList";
import NewsList from "./modules/news/NewsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsList />
      </div>
    );
  }
}

export default App;
