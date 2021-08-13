/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/prop-types */
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./AppWrapper.scss";

import shoppingCart from "../../assets/images/shopping-cart.svg";

function AppWrapper({ children }) {
  const history = useHistory();
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);

  function handleClickCart() {
    history.push("/myCart");
  }

  return (
    <div className="app-wrapper-container">
      <div className="app-wrapper">
        {children}
      </div>
      {
        cartItems.length > 0 && (
        <div className="app-wrapper__shoppin-cart" onClick={handleClickCart} role="button">
          <img className="shopping-cart__img" src={shoppingCart} alt="Shopping cart" />
          <p className="shopping-cart__number">{cartItems.length}</p>
        </div>
        )
      }
    </div>
  );
}

export default AppWrapper;
