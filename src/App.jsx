import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <AppWrapper>
          <Route path="/home" component={Home} />
        </AppWrapper>
      </Switch>
    </div>
  );
}

export default App;
