import React from "react";
import PropTypes from "prop-types";

function CartCard({ item }) {
  return (
    <div className="cart-card-container">
      <p>{item.title}</p>
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
};

export default CartCard;
