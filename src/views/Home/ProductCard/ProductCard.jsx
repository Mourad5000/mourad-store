import React from "react";
import PropTypes from "prop-types";

import "./ProductCard.scss";

function ProductCard({ product }) {
  return (
    <div className="product-container">
      <div className="product__info">
        <img className="info__img" src={product.image} alt="Product" />
        <p className="info__category">{product.category}</p>
        <p className="info__title">{product.title}</p>
      </div>
      <div className="product__price">
        <div className="separator" />
        <p>
          {product.price}
          €
        </p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
