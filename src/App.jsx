import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Cart from "./views/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <AppWrapper>
          <Route path="/home" component={Home} />
          <Route path="/productDetail/:id" component={ProductDetail} />
          <Route path="/myCart" component={Cart} />
        </AppWrapper>
      </Switch>
    </div>
  );
}

export default App;
