import React from "react";
import { useSelector } from "react-redux";

import "./HomeProducts.scss";

// components
import ProductCard from "../ProductCard/ProductCard";

// import Button from "../../../components/Button/Button";

function HomeProducts() {
  const { items } = useSelector(({ homeReducer }) => homeReducer);
  return (
    <>
      {
          items && (
          <div className="products-container">
            {items?.map((item) => (
              <ProductCard product={item} />
            ))}
          </div>
          )
      }
    </>

  );
}

export default HomeProducts;
