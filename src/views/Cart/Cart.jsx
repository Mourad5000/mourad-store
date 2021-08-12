/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartCard from "./CartCard/CartCard";

function Cart() {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector(({ cartReducer }) => cartReducer);

  useEffect(() => {
    let price = 0;
    cartItems.map((cart) => price += cart.price);
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <div className="cart-container">
      <p className="detail__text">
        <span className="detail__text highlight">Price: </span>
        {totalPrice}
      </p>
      {
          cartItems && (
            cartItems?.map((item) => (
              <CartCard item={item} key={item.id} />
            ))
          )
      }
    </div>
  );
}

export default Cart;
