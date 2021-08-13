import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// components
import Header from "./components/Header/Header";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Home from "./views/Home/Home";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Cart from "./views/Cart/Cart";
import Sales from "./views/Sales/Sales";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <AppWrapper>
          <Route path="/productDetail/:id" exact component={ProductDetail} />
          <Route path="/myCart" exact component={Cart} />
          <Route path="/sales" exact component={Sales} />
          <Route path="/" exact component={Home} />
        </AppWrapper>
      </Switch>
    </div>
  );
}

export default App;
