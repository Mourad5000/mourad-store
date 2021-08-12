import React from "react";
import PropTypes from "prop-types";

import "./CartCard.scss";

import Button from "../../../components/Button/Button";

function CartCard({ item, handleClick }) {
  return (
    <div className="cart-card-container">
      <p className="cart-card__title">{item.title}</p>
      <p className="highlight">
        {item.price}
        {" "}
        €
      </p>
      <div className="cart-card__button">
        <Button isSecondary text="Remove from cart" onClick={() => handleClick(item)} />
      </div>
    </div>

  );
}

CartCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CartCard;
