/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

import "./HomeProducts.scss";

// components
import ProductCard from "../ProductCard/ProductCard";

function HomeProducts({ handleClick }) {
  const { items } = useSelector(({ homeReducer }) => homeReducer);
  return (
    <>
      {
          items && (
          <div className="products-container">
            {items?.map((item) => (
              <ProductCard key={item.id} product={item} handleClick={handleClick} />
            ))}
          </div>
          )
      }
    </>

  );
}

export default HomeProducts;
