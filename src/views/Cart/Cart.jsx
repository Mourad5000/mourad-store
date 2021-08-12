/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Cart.scss";

import CartCard from "./CartCard/CartCard";

import { deleteFromCart } from "../../redux/actions/CartActions/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);

  useEffect(() => {
    let price = 0;
    cartItems.map((cart) => (price += cart.price));
    setTotalPrice(price);
  }, [cartItems]);

  function handleClick(item) {
    dispatch(deleteFromCart(item, cartItems));
  }

  return (
    <>
      {cartItems.length ? (
        <div className="cart-container">
          <p className="detail__text">
            <span className="detail__text highlight">Price: </span>
            {totalPrice}
          </p>
          {cartItems?.map((item) => (
            <CartCard item={item} key={item.id} handleClick={handleClick} />
          ))}
          <p className="detail__info" onClick={() => history.push("/home")}>Continue buying</p>

        </div>
      ) : (
        <div className="cart-container">
          <p className="detail__text">You still don&apos;t have any products yet</p>
          <p className="detail__info" onClick={() => history.push("/home")}>Click to go back to the catalog</p>
        </div>

      )}
    </>
  );
}

export default Cart;
