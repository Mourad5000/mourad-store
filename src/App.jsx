import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./views/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
