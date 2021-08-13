/* eslint-disable no-restricted-globals */
import React from "react";
import { useHistory } from "react-router-dom";

function Sales() {
  const history = useHistory();

  return (
    <div className="sales-container">
      <p className="detail__text">We do not have discounted products yet.</p>
      <p className="detail__text">
        Soon you will be able to buy great deals 🔥
      </p>
      <p className="detail__info" onClick={() => history.push("/")}>Click to go back to the catalog</p>
    </div>
  );
}

export default Sales;
